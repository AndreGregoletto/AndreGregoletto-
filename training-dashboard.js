/* Painel de calendário, volume e comparações de treino. Sem dependências adicionais. */
let workoutCalendarPerson = '';
let workoutCalendarMonth = '';
let workoutCalendarDate = '';
let workoutComparisonExercise = '';
let workoutComparisonMetric = 'max';

function workoutEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function workoutSessions() {
  return Array.isArray(TRAINING_PROGRESS_RAW?.sessions) ? TRAINING_PROGRESS_RAW.sessions : [];
}

function workoutPeople() {
  const names = new Map();
  (DEFAULT_MEASUREMENTS?.people || []).forEach(function (p) { names.set(p.id, p.nome || p.id); });
  (TRAINING_PROGRESS_RAW?.people || []).forEach(function (p) { names.set(p.id, p.nome || names.get(p.id) || p.id); });
  return [...names].map(function (p) { return { id: p[0], name: p[1] }; }).sort(function (a, b) {
    return a.name.localeCompare(b.name, 'pt-BR');
  });
}

function workoutName(id) {
  return workoutPeople().find(function (p) { return p.id === id; })?.name || id || 'Desconhecido';
}

function workoutSetKg(weight, unit) {
  const value = Number(weight);
  if (weight == null || weight === '' || !Number.isFinite(value) || value <= 0) return null;
  return value * (String(unit || 'kg').toLowerCase().trim() === 'lb' ? 0.45359237 : 1);
}

function workoutStats(session) {
  let volumeKg = 0, countedSets = 0, repetitions = 0, maxLoadKg = null;
  (session.exercicios || []).forEach(function (exercise) {
    (exercise.series || []).forEach(function (set) {
      const load = workoutSetKg(set.peso, exercise.unidade || session.unidade || 'kg');
      const reps = Number(set.repeticoes);
      if (load === null || set.repeticoes == null || set.repeticoes === '' || !Number.isFinite(reps) || reps <= 0 || reps > 200) return;
      volumeKg += load * reps;
      countedSets++;
      repetitions += reps;
      maxLoadKg = maxLoadKg === null ? load : Math.max(maxLoadKg, load);
    });
  });
  return { volumeKg, countedSets, repetitions, maxLoadKg };
}

function workoutMass(kg) {
  if (!Number.isFinite(kg)) return '—';
  return kg >= 1000 ? formatNumber(kg / 1000, 2) + ' t' : formatNumber(kg, kg % 1 ? 1 : 0) + ' kg';
}
function workoutFullMass(kg) {
  return workoutMass(kg) + (kg >= 1000 ? ' (' + formatNumber(kg, 0) + ' kg)' : '');
}
function workoutDateBr(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return '—';
  return iso.slice(8, 10) + '/' + iso.slice(5, 7) + '/' + iso.slice(0, 4);
}
function workoutMonthLabel(month) {
  const parts = String(month).split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(new Date(parts[0], parts[1] - 1, 1));
}
function workoutMonthShift(month, delta) {
  const parts = month.split('-').map(Number);
  const date = new Date(parts[0], parts[1] - 1 + delta, 1);
  return String(date.getFullYear()) + '-' + String(date.getMonth() + 1).padStart(2, '0');
}
function workoutExerciseText(exercise, session) {
  const unit = exercise.unidade || session.unidade || 'kg';
  const sets = (exercise.series || []).map(function (set) {
    return (set.emoji || '') + (set.emoji ? ' ' : '') + formatNumber(Number(set.peso), 2) + ' ' + unit + ' × ' + (set.repeticoes ?? '—');
  });
  return sets.join(' · ') || 'Sem séries preenchidas';
}
function workoutIsCardio(session) {
  return session.tipo === 'cardio' || (session.exercicios || []).some(function (exercise) { return exercise.tipo === 'cardio'; });
}
function workoutCardioData(session) {
  const exercise=(session.exercicios || []).find(e=>e.tipo==='cardio') || {};
  const modalidade=session.modalidade || exercise.nome || 'Esteira';
  const duracaoMinutos=Number(session.duracaoMinutos ?? exercise.duracaoMinutos ?? 0);
  const distanciaKm=Number(session.distanciaKm ?? exercise.distanciaKm ?? 0);
  const degraus=Number(session.degraus ?? exercise.degraus ?? 0);
  return {modalidade,duracaoMinutos,distanciaKm,degraus};
}
function workoutCardioLabel(session) {
  const d=workoutCardioData(session),stairs=d.modalidade==='Escada';
  return (d.duracaoMinutos ? formatNumber(d.duracaoMinutos,0)+' min' : '— min') + ' · ' +
    (stairs ? (d.degraus ? formatNumber(d.degraus,0)+' degraus' : '— degraus') :
      (d.distanciaKm ? formatNumber(d.distanciaKm,Number.isInteger(d.distanciaKm)?0:2)+' km' : '— km'));
}

function workoutSessionDetails(session, short) {
  if (workoutIsCardio(session)) {
    return '<article class="workout-log-card">' +
      '<div class="workout-log-header"><div><strong>' + workoutEscape(workoutName(session.pessoaId)) + ' · ' + workoutEscape(session.titulo || 'Cardio') + '</strong>' +
      '<small>' + workoutDateBr(session.data) + ' · atividade aeróbica</small></div>' +
      '<strong class="workout-tonnage">' + workoutCardioLabel(session) + '</strong></div>' +
      '<details' + (short ? '' : ' open') + '><summary>Detalhes do cardio</summary>' +
      '<p class="muted">' + workoutEscape(workoutCardioData(session).modalidade) + ' · ' + workoutCardioLabel(session) + '</p>' +
      (session.observacao ? '<p class="muted">' + workoutEscape(session.observacao) + '</p>' : '') + '</details></article>';
  }
  const stats = workoutStats(session);
  const pending = (session.exercicios || []).flatMap(function (e) { return (e.series || []).filter(function (set) { return Number(set.repeticoes) > 200; }).map(function (set) { return { name: e.nome, reps: set.repeticoes }; }); });
  const warning = pending.length ? '<p class="workout-data-warning"><strong>Conferir repetições:</strong> ' + pending.map(function (x) { return workoutEscape(x.name) + ' (' + x.reps + ' reps)'; }).join(' · ') + '. Séries acima de 200 repetições ficam fora da tonelagem até confirmação.</p>' : '';
  const detail = (session.exercicios || []).map(function (e) {
    const eStats = workoutStats({ unidade: session.unidade, exercicios: [e] });
    return '<li><strong>' + workoutEscape(e.nome) + '</strong><span>' + workoutEscape(workoutExerciseText(e, session)) +
      ' · <strong>' + workoutMass(eStats.volumeKg) + '</strong>' + (e.observacao ? ' · ' + workoutEscape(e.observacao) : '') + '</span></li>';
  }).join('');
  const title = workoutEscape(workoutName(session.pessoaId));
  return '<article class="workout-log-card">' +
    '<div class="workout-log-header"><div><strong>' + title + ' · ' + workoutEscape(session.titulo || 'Treino') + '</strong>' +
    '<small>' + workoutDateBr(session.data) + ' · ' + stats.countedSets + ' séries com carga</small></div>' +
    '<strong class="workout-tonnage">' + workoutFullMass(stats.volumeKg) + '</strong></div>' +
    warning + '<details' + (short ? '' : ' open') + '><summary>Exercícios e séries (' + (session.exercicios || []).length + ')</summary>' +
    '<ol class="workout-detail-exercises">' + detail + '</ol>' + (session.observacao ? '<p class="muted">' + workoutEscape(session.observacao) + '</p>' : '') +
    '</details></article>';
}

function renderTrainingVolumeSummary(personName) {
  const person = workoutPeople().find(function (x) { return x.name === personName; });
  const sessions = workoutSessions().filter(function (s) { return s.pessoaId === person?.id; }).sort(function (a, b) {
    return b.data.localeCompare(a.data) || String(b.id).localeCompare(String(a.id));
  });
  const total = sessions.reduce(function (sum, s) { return sum + workoutStats(s).volumeKg; }, 0);
  const latest = sessions[0];
  const latestVol = latest ? workoutStats(latest).volumeKg : 0;
  return '<section class="workout-section workout-volume-summary"><div class="workout-head"><div>' +
    '<h3>Volume movimentado</h3><p class="muted">Soma de carga × repetições de todas as séries registradas, convertida para kg. Não é o peso levantado em uma única repetição.</p>' +
    '</div></div><div class="workout-metric-grid">' +
    '<div class="workout-metric"><span>Total no histórico</span><strong>' + workoutFullMass(total) + '</strong></div>' +
    '<div class="workout-metric"><span>Última sessão</span><strong>' + (latest ? (workoutIsCardio(latest) ? workoutCardioLabel(latest) : workoutFullMass(latestVol)) : '—') + '</strong></div>' +
    '<div class="workout-metric"><span>Sessões registradas</span><strong>' + sessions.length + '</strong></div></div>' +
    (sessions.length ? '<h4>Histórico por sessão</h4><div class="workout-log-list">' +
    sessions.map(function (s) { return workoutSessionDetails(s, true); }).join('') + '</div>' : '<p class="muted">Ainda não há sessões para esta pessoa.</p>') + '</section>';
}

function renderWorkoutCalendar() {
  const root = document.getElementById('workoutCalendarRoot');
  if (!root) return;
  const sessions = workoutSessions();
  if (!workoutCalendarMonth) {
    const last = sessions.map(function (s) { return s.data; }).filter(Boolean).sort().at(-1);
    const today = new Date();
    workoutCalendarMonth = last ? last.slice(0, 7) : today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');
  }
  if (workoutCalendarDate && !workoutCalendarDate.startsWith(workoutCalendarMonth)) workoutCalendarDate = '';
  const people = workoutPeople();
  if (workoutCalendarPerson && !people.some(function (p) { return p.id === workoutCalendarPerson; })) workoutCalendarPerson = '';
  const filtered = sessions.filter(function (s) { return !workoutCalendarPerson || s.pessoaId === workoutCalendarPerson; });
  const byDay = new Map();
  filtered.forEach(function (s) {
    if (!byDay.has(s.data)) byDay.set(s.data, []);
    byDay.get(s.data).push(s);
  });
  const parts = workoutCalendarMonth.split('-').map(Number);
  const first = new Date(parts[0], parts[1] - 1, 1);
  const offset = (first.getDay() + 6) % 7;
  const count = new Date(parts[0], parts[1], 0).getDate();
  const latestVisible = filtered.map(function (s) { return s.data; }).filter(function (d) { return d.startsWith(workoutCalendarMonth); }).sort().at(-1);
  if (!workoutCalendarDate && latestVisible) workoutCalendarDate = latestVisible;
  let cells = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(function (name) {
    return '<span class="workout-cal-weekday" aria-hidden="true">' + name + '</span>';
  });
  for (let i = 0; i < offset; i++) cells.push('<span class="workout-cal-empty"></span>');
  for (let day = 1; day <= count; day++) {
    const date = workoutCalendarMonth + '-' + String(day).padStart(2, '0');
    const items = byDay.get(date) || [];
    const vol = items.reduce(function (sum, s) { return sum + workoutStats(s).volumeKg; }, 0);
    cells.push('<button type="button" class="workout-cal-day' +
      (items.length ? ' has-session' : '') + (date === workoutCalendarDate ? ' selected' : '') +
      '" data-workout-date="' + date + '" aria-pressed="' + (date === workoutCalendarDate) + '" aria-label="' +
      workoutEscape(workoutDateBr(date) + ', ' + items.length + ' treino(s)') + '">' +
      '<strong>' + day + '</strong>' +
      (items.length ? '<small>' + items.length + (items.length === 1 ? ' treino' : ' treinos') + '</small><em>' +
      (items.every(workoutIsCardio) ? items.map(workoutCardioLabel).join(' + ') :
        workoutMass(vol) + (items.some(workoutIsCardio) ? ' + cardio' : '')) + '</em>' : '') +
      '</button>');
  }
  root.innerHTML =
    '<div class="workout-calendar-controls"><label>Pessoa <select id="workoutCalendarPerson"><option value="">Todas as pessoas</option>' +
    people.map(function (p) { return '<option value="' + workoutEscape(p.id) + '"' + (p.id === workoutCalendarPerson ? ' selected' : '') + '>' + workoutEscape(p.name) + '</option>'; }).join('') +
    '</select></label><div class="workout-calendar-navigation">' +
    '<button type="button" class="ghost-btn" id="workoutPrevMonth" aria-label="Mês anterior">‹</button>' +
    '<strong aria-live="polite">' + workoutEscape(workoutMonthLabel(workoutCalendarMonth)) + '</strong>' +
    '<button type="button" class="ghost-btn" id="workoutNextMonth" aria-label="Próximo mês">›</button>' +
    '</div></div><div class="workout-calendar-grid" role="group" aria-label="Dias do mês">' + cells.join('') + '</div>' +
    '<p class="muted workout-help">Dias marcados possuem treinos registrados. Clique em um dia para consultar as sessões e a tonelagem acumulada.</p>' +
    '<div id="workoutCalendarDetails"></div>';
  root.querySelector('#workoutCalendarPerson').onchange = function (event) { workoutCalendarPerson = event.target.value; workoutCalendarDate = ''; renderWorkoutCalendar(); };
  root.querySelector('#workoutPrevMonth').onclick = function () { workoutCalendarMonth = workoutMonthShift(workoutCalendarMonth, -1); workoutCalendarDate = ''; renderWorkoutCalendar(); };
  root.querySelector('#workoutNextMonth').onclick = function () { workoutCalendarMonth = workoutMonthShift(workoutCalendarMonth, 1); workoutCalendarDate = ''; renderWorkoutCalendar(); };
  root.querySelectorAll('[data-workout-date]').forEach(function (btn) {
    btn.onclick = function () { workoutCalendarDate = btn.dataset.workoutDate; renderWorkoutCalendar(); };
  });
  const target = root.querySelector('#workoutCalendarDetails');
  const daySessions = byDay.get(workoutCalendarDate) || [];
  const dayVolume = daySessions.reduce(function (sum, s) { return sum + workoutStats(s).volumeKg; }, 0);
  target.innerHTML = workoutCalendarDate ?
    '<div class="workout-day-report"><h3>' + workoutDateBr(workoutCalendarDate) + ' · ' + daySessions.length + (daySessions.length === 1 ? ' sessão' : ' sessões') + '</h3>' +
    (daySessions.length ? '<p class="workout-total">' +
      (daySessions.some(function (s) { return !workoutIsCardio(s); }) ? 'Volume de musculação: <strong>' + workoutFullMass(dayVolume) + '</strong>' : '') +
      (daySessions.some(workoutIsCardio) ? (daySessions.some(function (s) { return !workoutIsCardio(s); }) ? ' · ' : '') + 'Cardio: <strong>' + daySessions.filter(workoutIsCardio).map(workoutCardioLabel).join(' + ') + '</strong>' : '') +
      '</p><div class="workout-log-list">' +
    daySessions.map(function (s) { return workoutSessionDetails(s, true); }).join('') + '</div>' : '<p class="muted">Nenhum treino registrado neste dia com o filtro atual.</p>') +
    '</div>' : '<p class="muted">Selecione um dia para ver os treinos.</p>';
}

function workoutJumpToCalendar(personId, date) {
  workoutCalendarPerson = personId || '';
  workoutCalendarDate = date || '';
  if (date) workoutCalendarMonth = date.slice(0, 7);
  showTab('calendario-treinos');
}

function workoutExerciseRecords() {
  const group = new Map();
  workoutSessions().forEach(function (session) {
    (session.exercicios || []).forEach(function (exercise) {
      if (session.tipo === 'cardio' || exercise.tipo === 'cardio') return;
      const key = exerciseTrackingKey(exercise);
      if (!key) return;
      if (!group.has(key)) group.set(key, { label: exerciseDisplayName(exercise.nome), people: new Map(), peopleSet: new Set() });
      const item = group.get(key);
      if (!item.people.has(session.pessoaId)) item.people.set(session.pessoaId, { maxKg: null, volumeKg: 0, sets: 0, days: new Set() });
      const person = item.people.get(session.pessoaId);
      (exercise.series || []).forEach(function (set) {
        const kg = workoutSetKg(set.peso, exercise.unidade || session.unidade || 'kg');
        const reps = Number(set.repeticoes);
        if (kg === null || set.repeticoes == null || set.repeticoes === '' || !Number.isFinite(reps) || reps <= 0 || reps > 200) return;
        person.maxKg = person.maxKg === null ? kg : Math.max(person.maxKg, kg);
        person.volumeKg += kg * reps;
        person.sets++;
        person.days.add(session.data);
      });
    });
  });
  return group;
}

function workoutCompareChartOptions(suffix) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { callbacks: {
      label: function (ctx) { return ctx.dataset.label + ': ' + formatNumber(ctx.parsed.y, 2) + suffix; }
    } } },
    scales: {
      x: { ticks: { color: '#c9dcf7' }, grid: { display: false } },
      y: { beginAtZero: true, ticks: { color: '#c9dcf7' }, grid: { color: 'rgba(148,163,184,.13)' } }
    }
  };
}


let workoutCardioComparePerson='andre';
let workoutCardioCompareMode='Esteira';

function workoutCardioEntries() {
  return workoutSessions().filter(workoutIsCardio).map(s=>({personId:s.pessoaId,data:s.data,id:s.id,...workoutCardioData(s)}))
    .sort((a,b)=>a.data.localeCompare(b.data)||String(a.id).localeCompare(String(b.id)));
}

function workoutCardioComparisonMarkup() {
  const entries=workoutCardioEntries();
  const people=workoutPeople();
  if(!people.some(p=>p.id===workoutCardioComparePerson))workoutCardioComparePerson=people[0]?.id||'';
  const selected=entries.filter(x=>x.modalidade===workoutCardioCompareMode);
  const show=selected.filter(x=>x.personId===workoutCardioComparePerson);
  const stairs=workoutCardioCompareMode==='Escada';
  const total=show.reduce((n,x)=>n+(stairs?x.degraus:x.distanciaKm),0);
  const mins=show.reduce((n,x)=>n+x.duracaoMinutos,0);
  return '<div class="workout-compare-card cardio-compare-card"><h3>Cardio · evolução por modalidade</h3>'+
    '<p class="muted">Cardio não participa de comparativos de cargas e toneladas. Compare tempo e distância (Esteira/Bicicleta) ou tempo e degraus (Escada).</p>'+
    '<div class="workout-compare-filters">'+
    '<label>Pessoa<select id="workoutCardioComparePerson">'+people.map(p=>'<option value="'+workoutEscape(p.id)+'" '+(p.id===workoutCardioComparePerson?'selected':'')+'>'+workoutEscape(p.name)+'</option>').join('')+'</select></label>'+
    '<label>Modalidade<select id="workoutCardioCompareMode">'+['Esteira','Bicicleta','Escada'].map(m=>'<option value="'+m+'" '+(m===workoutCardioCompareMode?'selected':'')+'>'+m+'</option>').join('')+'</select></label></div>'+
    '<div class="workout-metric-grid"><div class="workout-metric"><span>Sessões</span><strong>'+show.length+'</strong></div>'+
    '<div class="workout-metric"><span>Tempo acumulado</span><strong>'+mins+' min</strong></div>'+
    '<div class="workout-metric"><span>'+(stairs?'Degraus acumulados':'Distância acumulada')+'</span><strong>'+formatNumber(total,stairs?0:2)+(stairs?' degraus':' km')+'</strong></div></div>'+
    (show.length?'<div class="chart-wrap workout-chart"><canvas id="workoutCardioCompareChart"></canvas></div>':'<p class="muted">Nenhum registro desta modalidade para a pessoa selecionada.</p>')+
    '<div class="table-wrap"><table class="workout-table"><thead><tr><th>Pessoa</th><th>Data</th><th>Tempo</th><th>'+(stairs?'Degraus':'Distância (km)')+'</th></tr></thead><tbody>'+
    selected.map(x=>'<tr><td>'+workoutEscape(workoutName(x.personId))+'</td><td>'+workoutDateBr(x.data)+'</td><td>'+x.duracaoMinutos+' min</td><td>'+formatNumber(stairs?x.degraus:x.distanciaKm,stairs?0:2)+'</td></tr>').join('')+
    '</tbody></table></div></div>';
}

function workoutCardioComparisonGraph(root) {
  const canvas=root.querySelector('#workoutCardioCompareChart');
  if(!canvas||typeof Chart!=='function')return;
  const entries=workoutCardioEntries().filter(x=>x.personId===workoutCardioComparePerson&&x.modalidade===workoutCardioCompareMode);
  const stairs=workoutCardioCompareMode==='Escada',unit=stairs?'degraus':'km';
  charts.workoutCardioCompareChart=new Chart(canvas,{
    type:'line',data:{labels:entries.map(x=>workoutDateBr(x.data)),datasets:[
      {label:stairs?'Degraus':'Distância (km)',data:entries.map(x=>stairs?x.degraus:x.distanciaKm),
        borderColor:'#22c55e',backgroundColor:'rgba(34,197,94,.14)',fill:true,tension:.25,yAxisID:'y'},
      {label:'Tempo (min)',data:entries.map(x=>x.duracaoMinutos),
        borderColor:'#28c8ff',backgroundColor:'rgba(40,200,255,.13)',tension:.25,yAxisID:'y1'}
    ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#d7e3fb'}}},scales:{
      x:{ticks:{color:'#d7e3fb'},grid:{color:'rgba(148,163,184,.12)'}},
      y:{beginAtZero:true,title:{display:true,text:unit,color:'#b9cfe8'},ticks:{color:'#d7e3fb'}},
      y1:{beginAtZero:true,position:'right',title:{display:true,text:'min',color:'#b9cfe8'},
        ticks:{color:'#d7e3fb'},grid:{drawOnChartArea:false}}
      }}});
}

function renderWorkoutComparison(rows) {
  const root = document.getElementById('workoutComparisonRoot');
  if (!root) return;
  ['workoutExerciseCompareChart','workoutVolumeCompareChart','workoutBodyweightCompareChart','workoutCardioCompareChart'].forEach(destroyChart);
  const sessions = workoutSessions();
  const people = workoutPeople();
  const byExercise = workoutExerciseRecords();
  const options = [...byExercise.entries()].sort(function (a, b) { return a[1].label.localeCompare(b[1].label, 'pt-BR'); });
  if (!byExercise.has(workoutComparisonExercise)) {
    workoutComparisonExercise = [...byExercise.entries()].sort(function (a, b) {
      return b[1].people.size - a[1].people.size || b[1].people.values().next().value?.sets - a[1].people.values().next().value?.sets;
    })[0]?.[0] || '';
  }
  const selected = byExercise.get(workoutComparisonExercise);
  const cumulative = people.map(function (p) {
    const mine = sessions.filter(function (s) { return s.pessoaId === p.id; });
    return { id: p.id, name: p.name, sessions: mine.length, volumeKg: mine.reduce(function (sum, s) { return sum + workoutStats(s).volumeKg; }, 0) };
  }).sort(function (a, b) { return b.volumeKg - a.volumeKg; });
  const latestWeight = people.map(function (p) {
    const measured = rows.filter(function (r) { return r.personId === p.id && Number.isFinite(r.weight) && r.weight > 0; })
      .sort(function (a, b) { return b.period.localeCompare(a.period); })[0];
    return { name: p.name, value: measured?.weight ?? null, date: measured?.period ?? '' };
  });
  const exerciseRows = people.map(function (p) {
    return { name: p.name, ...(selected?.people.get(p.id) || { maxKg: null, volumeKg: 0, sets: 0, days: new Set() }) };
  }).sort(function (a, b) {
    return (workoutComparisonMetric === 'max' ? b.maxKg ?? -1 : b.volumeKg) - (workoutComparisonMetric === 'max' ? a.maxKg ?? -1 : a.volumeKg);
  });
  const totalVolume = cumulative.reduce(function (sum, p) { return sum + p.volumeKg; }, 0);
  root.innerHTML =
    '<div class="workout-metric-grid">' +
    '<div class="workout-metric"><span>Volume de todos os treinos</span><strong>' + workoutFullMass(totalVolume) + '</strong></div>' +
    '<div class="workout-metric"><span>Sessões no histórico</span><strong>' + sessions.length + '</strong></div>' +
    '<div class="workout-metric"><span>Exercícios distintos registrados</span><strong>' + options.length + '</strong></div></div>' +
    '<div class="workout-compare-card"><div class="workout-compare-head"><div><h3>Carga por exercício e por pessoa</h3><p class="muted">Escolha um exercício para comparar a carga máxima de uma série ou o volume acumulado no histórico.</p></div></div>' +
    '<div class="workout-compare-filters"><label>Exercício<select id="workoutCompareExercise">' +
    options.map(function (x) { return '<option value="' + workoutEscape(x[0]) + '"' + (x[0] === workoutComparisonExercise ? ' selected' : '') + '>' + workoutEscape(x[1].label) + '</option>'; }).join('') +
    '</select></label><label>Comparar por<select id="workoutCompareMetric">' +
    '<option value="max"' + (workoutComparisonMetric === 'max' ? ' selected' : '') + '>Maior carga (kg)</option>' +
    '<option value="volume"' + (workoutComparisonMetric === 'volume' ? ' selected' : '') + '>Volume acumulado (kg × repetições)</option></select></label></div>' +
    (selected ? '<div class="chart-wrap workout-chart"><canvas id="workoutExerciseCompareChart"></canvas></div>' +
    '<div class="table-wrap"><table class="workout-table"><thead><tr><th>Pessoa</th><th>Maior carga</th><th>Volume registrado</th><th>Séries</th><th>Dias</th></tr></thead><tbody>' +
    exerciseRows.map(function (p) { return '<tr><td>' + workoutEscape(p.name) + '</td><td>' + (p.maxKg === null ? '—' : formatNumber(p.maxKg, 2) + ' kg') + '</td><td>' + (p.sets ? workoutFullMass(p.volumeKg) : '—') + '</td><td>' + (p.sets || '—') + '</td><td>' + (p.days.size || '—') + '</td></tr>'; }).join('') +
    '</tbody></table></div>' : '<p class="muted">Não há exercícios registrados.</p>') + '</div>' +
    '<div class="workout-compare-card"><h3>Volume total por pessoa</h3><p class="muted">Soma de carga × repetições de todas as sessões registradas para cada pessoa.</p>' +
    '<div class="chart-wrap workout-chart"><canvas id="workoutVolumeCompareChart"></canvas></div>' +
    '<div class="table-wrap"><table class="workout-table"><thead><tr><th>Pessoa</th><th>Sessões</th><th>Volume acumulado</th></tr></thead><tbody>' +
    cumulative.map(function (p) { return '<tr><td>' + workoutEscape(p.name) + '</td><td>' + p.sessions + '</td><td>' + workoutFullMass(p.volumeKg) + '</td></tr>'; }).join('') +
    '</tbody></table></div></div>' +
    '<div class="workout-compare-card"><h3>Peso corporal — última medição</h3><p class="muted">Peso corporal em kg, separado das cargas de academia. Pessoas sem medição não recebem um valor artificial.</p>' +
    '<div class="chart-wrap workout-chart"><canvas id="workoutBodyweightCompareChart"></canvas></div>' +
    '<div class="table-wrap"><table class="workout-table"><thead><tr><th>Pessoa</th><th>Peso</th><th>Data da medição</th></tr></thead><tbody>' +
    latestWeight.map(function (p) { return '<tr><td>' + workoutEscape(p.name) + '</td><td>' + (p.value === null ? '—' : formatNumber(p.value, 1) + ' kg') + '</td><td>' + workoutDateBr(p.date) + '</td></tr>'; }).join('') +
    '</tbody></table></div></div>' +
    workoutCardioComparisonMarkup() +
    '<p class="muted workout-help">Como calculamos: volume = soma, em todas as séries válidas, de peso × repetições. 1 tonelada = 1.000 kg de volume. Cargas em libras são convertidas para kg. A comparação entre máquinas ou rotinas diferentes não mede diretamente força ou desempenho equivalente. Séries acima de 200 repetições são sinalizadas para conferência e excluídas dos cálculos de volume até correção.</p>';
  const cardioPersonSelect=root.querySelector('#workoutCardioComparePerson');
  const cardioModeSelect=root.querySelector('#workoutCardioCompareMode');
  if(cardioPersonSelect)cardioPersonSelect.onchange=e=>{workoutCardioComparePerson=e.target.value;renderWorkoutComparison(rows);};
  if(cardioModeSelect)cardioModeSelect.onchange=e=>{workoutCardioCompareMode=e.target.value;renderWorkoutComparison(rows);};
  const exerciseSelect = root.querySelector('#workoutCompareExercise');
  if (exerciseSelect) exerciseSelect.onchange = function (event) { workoutComparisonExercise = event.target.value; renderWorkoutComparison(rows); };
  const metricSelect = root.querySelector('#workoutCompareMetric');
  if (metricSelect) metricSelect.onchange = function (event) { workoutComparisonMetric = event.target.value; renderWorkoutComparison(rows); };
  if (!root.closest('.section')?.classList.contains('active') || typeof Chart !== 'function') return;
  const palette = ['#28c8ff','#bf86ff','#22c55e','#f59e0b','#f97316','#fb7185','#a5b4fc','#5eead4'];
  function plot(id, labels, values, suffix, label) {
    const canvas = root.querySelector('#' + id);
    if (!canvas || !labels.length) return;
    charts[id] = new Chart(canvas, {
      type: 'bar',
      data: { labels: labels, datasets: [{ label: label, data: values, backgroundColor: labels.map(function (_, i) { return palette[i % palette.length] + 'b8'; }), borderColor: labels.map(function (_, i) { return palette[i % palette.length]; }), borderWidth: 1, borderRadius: 7 }] },
      options: workoutCompareChartOptions(suffix)
    });
  }
  const exerciseValid = exerciseRows.filter(function (p) { return p.sets > 0; });
  plot('workoutExerciseCompareChart', exerciseValid.map(function (p) { return p.name; }),
    exerciseValid.map(function (p) { return workoutComparisonMetric === 'max' ? p.maxKg : p.volumeKg; }),
    ' kg', workoutComparisonMetric === 'max' ? 'Maior carga' : 'Volume');
  plot('workoutVolumeCompareChart', cumulative.map(function (p) { return p.name; }), cumulative.map(function (p) { return Number((p.volumeKg / 1000).toFixed(3)); }), ' t', 'Toneladas de volume');
  const validWeight = latestWeight.filter(function (p) { return p.value !== null; });
  plot('workoutBodyweightCompareChart', validWeight.map(function (p) { return p.name; }), validWeight.map(function (p) { return p.value; }), ' kg', 'Peso corporal');
  workoutCardioComparisonGraph(root);
}
