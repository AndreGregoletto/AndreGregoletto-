
    const STORAGE_KEY = 'bf-familia-site-assets-v1';

    const DEFAULT_MEASUREMENTS = {
      '2026-04-12': {
        'Dona Inês': { idade: 75, tricipes: 18, flanco: 22, coxa: 38, peso: 0 },
        'Tia Mah': { idade: 43, tricipes: 22, flanco: 20, coxa: 22, peso: 0 },
        'Titio Douglas': { idade: 43, peito: 13, abdomem: 20, coxa: 21, peso: 0 },
        'Tio Guto': { idade: 42, peito: 13, abdomem: 23, coxa: 13, peso: 0 },
        'André': { idade: 28, peito: 8, abdomem: 12, coxa: 19, peso: 0 },
        'Felipe': { idade: 14, peito: 2, abdomem: 3, coxa: 19, peso: 0 }
      },
      '2026-05-17': {
        'Dona Inês': { idade: 75, tricipes: 22, flanco: 22, coxa: 38, peso: 82.7 },
        'Tia Mah': { idade: 43, tricipes: 21, flanco: 18, coxa: 22, peso: 66.4 },
        'Titio Douglas': { idade: 43, peito: 12, abdomem: 15, coxa: 22, peso: 66.4 },
        'Tio Guto': { idade: 42, peito: 10, abdomem: 14, coxa: 21, peso: 75 },
        'André': { idade: 28, peito: 9, abdomem: 9, coxa: 10, peso: 86 },
        'Felipe': { idade: 13, peito: 9, abdomem: 10, coxa: 20, peso: 59 }
      },
      '2026-06-21': {
        'Dona Inês': { idade: 75, tricipes: 21, flanco: 19, coxa: 24, peso: 84.2, medidas: { cintura: 109.5, quadril: 123, coxa: 56, braco: 32 } },
        'Tia Mah': { idade: 43, tricipes: 18, flanco: 20, coxa: 23, peso: 66.05, medidas: { cintura: 76, quadril: 101, coxa: 56, braco: 28.5 } },
        'Titio Douglas': { idade: 43, peito: 10, abdomem: 12, coxa: 20, peso: 67.8, medidas: { peito: 95.5, abdomem: 82.5, coxa: 54.5, braco: 27.5 } },
        'Tio Guto': { idade: 42, peito: 12, abdomem: 18, coxa: 18, peso: 74.7, medidas: { peito: 101, abdomem: 86, coxa: 54, braco: 30.5 } },
        'André': { idade: 28, peito: 9, abdomem: 10, coxa: 12, peso: 86.65, medidas: { peito: 104, abdomem: 83, coxa: 62, braco: 34.5 } },
        'Felipe': { idade: 13, peito: 4, abdomem: 10, coxa: 16, peso: 60.05, medidas: { peito: 69, abdomem: 76, coxa: 50, braco: 22.5 } }
      }
    };

    const TRAINING_PLANS = {
      "Tia Mah": {
            "titulo": "Treino feminino",
            "observacao": "Treino importado do PDF Treino-woman. Cada aba representa um dia/treino.",
            "dias": [
                  {
                        "codigo": "A",
                        "nome": "Posterior & Glúteo",
                        "exercicios": [
                              {
                                    "nome": "Mesa flexora",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/IXg1PQ_5gmw"
                              },
                              {
                                    "nome": "Stiff",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/raMtPJQ5f9A"
                              },
                              {
                                    "nome": "Cadeira flexora",
                                    "series": "3",
                                    "repeticoes": "15",
                                    "video": "https://www.youtube.com/shorts/T46yKiz8laY"
                              },
                              {
                                    "nome": "Afundo búlgaro",
                                    "series": "3",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/0KQOdTvfc5A"
                              },
                              {
                                    "nome": "Cadeira adutora",
                                    "series": "3",
                                    "repeticoes": "15",
                                    "video": "https://www.youtube.com/shorts/1aATfJITaIw"
                              },
                              {
                                    "nome": "Elevação pélvica (máquina ou barra livre)",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/Nuoo1XgRtGY"
                              }
                        ]
                  },
                  {
                        "codigo": "B",
                        "nome": "Peito, Ombro & Tríceps",
                        "exercicios": [
                              {
                                    "nome": "Supino reto",
                                    "series": "4",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/hlV6f0kHmeo"
                              },
                              {
                                    "nome": "Supino inclinado na máquina",
                                    "series": "3",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/wW0sG8mXqO0"
                              },
                              {
                                    "nome": "Elevação lateral",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/ot9nwSC1JnA"
                              },
                              {
                                    "nome": "Elevação frontal",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/GqZRmCow0rw"
                              },
                              {
                                    "nome": "Tríceps corda",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/-QGC1cL6ETE"
                              },
                              {
                                    "nome": "Abdominal (prancha)",
                                    "series": "3",
                                    "repeticoes": "30 seg",
                                    "video": "https://www.youtube.com/shorts/uxPlAbWFUDs"
                              },
                              {
                                    "nome": "Panturrilha (escada ou em pé)",
                                    "series": "4",
                                    "repeticoes": "15",
                                    "video": "https://www.youtube.com/shorts/3afDSh_V0sg"
                              }
                        ]
                  },
                  {
                        "codigo": "C",
                        "nome": "Quadríceps e Glúteo",
                        "exercicios": [
                              {
                                    "nome": "Agachamento",
                                    "series": "4",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/1oipoiTpbJA"
                              },
                              {
                                    "nome": "Hack machine",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/watch?v=SBBURLX8eKs"
                              },
                              {
                                    "nome": "Leg press 45°",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/D9WR6PoMYxs"
                              },
                              {
                                    "nome": "Afundo e passada",
                                    "series": "3",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/JoZYP87WAp0"
                              },
                              {
                                    "nome": "Cadeira extensora",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/PzIfB9MiiX8"
                              },
                              {
                                    "nome": "Cadeira abdutora",
                                    "series": "3",
                                    "repeticoes": "15",
                                    "video": "https://www.youtube.com/shorts/nabhYLtz8Gg"
                              }
                        ]
                  },
                  {
                        "codigo": "D",
                        "nome": "Costas & Bíceps",
                        "exercicios": [
                              {
                                    "nome": "Remada aberta polia alta",
                                    "series": "4",
                                    "repeticoes": "10",
                                    "video": "https://www.youtube.com/shorts/_2MfZAj98tk"
                              },
                              {
                                    "nome": "Puxada triângulo polia",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/ySLFHxmJ_Sc"
                              },
                              {
                                    "nome": "Pull down",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/GDhW19yQrJI"
                              },
                              {
                                    "nome": "Rosca direta (cabo, halter ou barra W)",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/x6JCKfdzPJE"
                              },
                              {
                                    "nome": "Abdominal (prancha)",
                                    "series": "3",
                                    "repeticoes": "60 seg",
                                    "video": "https://www.youtube.com/shorts/uxPlAbWFUDs"
                              },
                              {
                                    "nome": "Panturrilha (escada ou em pé)",
                                    "series": "4",
                                    "repeticoes": "20",
                                    "video": "https://www.youtube.com/shorts/3afDSh_V0sg"
                              }
                        ]
                  },
                  {
                        "codigo": "E",
                        "nome": "Full inferiores leve — ênfase glúteo",
                        "exercicios": [
                              {
                                    "nome": "Elevação pélvica (máquina ou barra livre)",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/Nuoo1XgRtGY"
                              },
                              {
                                    "nome": "Glúteo no cabo",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/XqQlpJhB8xU"
                              },
                              {
                                    "nome": "Cadeira abdutora",
                                    "series": "3",
                                    "repeticoes": "20",
                                    "video": "https://www.youtube.com/shorts/nabhYLtz8Gg"
                              },
                              {
                                    "nome": "Cadeira flexora",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/T46yKiz8laY"
                              },
                              {
                                    "nome": "Mesa flexora",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/IXg1PQ_5gmw"
                              },
                              {
                                    "nome": "Cardio (bicicleta, escada ou esteira)",
                                    "series": "20",
                                    "repeticoes": "30 min",
                                    "video": "https://i.pinimg.com/originals/e6/9a/ca/e69acae1176c249d95dcea23f85381c9.jpg"
                              }
                        ]
                  },
                  {
                        "codigo": "F",
                        "nome": "Dia de estímulo — Glúteo, abdômen e cardio",
                        "exercicios": [
                              {
                                    "nome": "Elevação pélvica (máquina ou barra livre)",
                                    "series": "4",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/Nuoo1XgRtGY"
                              },
                              {
                                    "nome": "Cadeira adutora",
                                    "series": "3",
                                    "repeticoes": "15",
                                    "video": "https://www.youtube.com/shorts/1aATfJITaIw"
                              },
                              {
                                    "nome": "Cadeira abdutora",
                                    "series": "3",
                                    "repeticoes": "20",
                                    "video": "https://www.youtube.com/shorts/nabhYLtz8Gg"
                              },
                              {
                                    "nome": "Glúteo no cabo",
                                    "series": "3",
                                    "repeticoes": "12",
                                    "video": "https://www.youtube.com/shorts/XqQlpJhB8xU"
                              },
                              {
                                    "nome": "Abdominal (prancha)",
                                    "series": "3",
                                    "repeticoes": "60 seg",
                                    "video": "https://www.youtube.com/shorts/uxPlAbWFUDs"
                              },
                              {
                                    "nome": "Cardio (bicicleta, escada ou esteira)",
                                    "series": "20",
                                    "repeticoes": "30 min",
                                    "video": "https://i.pinimg.com/originals/e6/9a/ca/e69acae1176c249d95dcea23f85381c9.jpg"
                              }
                        ]
                  }
            ]
      }
};

    const AVATARS = {
      andre: 'assets/andre.png',
      donaines: 'assets/ines.png',
      felipe: 'assets/felipe.png',
      tiamah: 'assets/tiamah.png',
      tioguto: 'assets/tioguto.png',
      titiodouglas: 'assets/titiodouglas.png'
    };

    const siteLabels = {
      chest: 'Peito',
      abdomen: 'Abdômen',
      thigh: 'Coxa',
      triceps: 'Tríceps',
      suprailiac: 'Flanco / supra-ilíaca'
    };

    const siteToPortuguese = {
      chest: 'peito',
      abdomen: 'abdomem',
      thigh: 'coxa',
      triceps: 'tricipes',
      suprailiac: 'flanco'
    };

    const aliasToSite = {
      peito: 'chest',
      chest: 'chest',
      torax: 'chest',
      tórax: 'chest',
      abdomen: 'abdomen',
      abdomem: 'abdomen',
      abdominal: 'abdomen',
      coxa: 'thigh',
      thigh: 'thigh',
      tricipes: 'triceps',
      tríceps: 'triceps',
      triceps: 'triceps',
      flanco: 'suprailiac',
      suprailiaca: 'suprailiac',
      'supra-ilíaca': 'suprailiac',
      suprailiac: 'suprailiac'
    };

    const measureLabels = {
      peito: 'Peito /<br>tórax',
      abdomem: 'Abdômen',
      cintura: 'Cintura',
      quadril: 'Quadril',
      coxa: 'Coxa',
      braco: 'Braço'
    };

    const measureIcons = {
      peito: 'fa-solid fa-shirt',
      abdomem: 'fa-solid fa-child-reaching',
      cintura: 'fa-solid fa-ruler-horizontal',
      quadril: 'fa-solid fa-venus',
      coxa: 'fa-solid fa-person-walking',
      braco: 'fa-solid fa-dumbbell'
    };

    const siteOptions = Object.entries(siteLabels);
    const charts = {};
    let selectedPersonName = null;
    let selectedPeriod = null;
    let selectedMeasurePeriod = null;

    function numberOrNull(value) {
      if (value === null || value === undefined || value === '') return null;
      const parsed = Number(String(value).replace(',', '.'));
      return Number.isFinite(parsed) ? parsed : null;
    }

    function deepClone(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function mergeMeasurements(base, extra) {
      const merged = deepClone(base);
      Object.entries(extra || {}).forEach(([period, people]) => {
        if (!merged[period]) merged[period] = {};
        Object.entries(people || {}).forEach(([name, data]) => {
          merged[period][name] = data;
        });
      });
      return merged;
    }

    function getStoredMeasurements() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      } catch (error) {
        return {};
      }
    }

    function getRawMeasurements() {
      return mergeMeasurements(DEFAULT_MEASUREMENTS, getStoredMeasurements());
    }

    function saveLocalMeasurement(period, name, data) {
      const current = getStoredMeasurements();
      if (!current[period]) current[period] = {};
      current[period][name] = data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }

    function inferSex(folds) {
      if (Number.isFinite(folds.chest) || Number.isFinite(folds.abdomen)) return 'M';
      if (Number.isFinite(folds.triceps) || Number.isFinite(folds.suprailiac)) return 'F';
      return '';
    }

    function normalizeMeasures(data) {
      const source = data?.medidas || {};
      const result = {};
      ['peito', 'abdomem', 'cintura', 'quadril', 'coxa', 'braco'].forEach(key => {
        const value = numberOrNull(source[key]);
        if (value !== null && value > 0) result[key] = value;
      });
      return result;
    }

    function normalizeRow(period, name, data) {
      const folds = {};
      Object.entries(data || {}).forEach(([rawKey, rawValue]) => {
        const site = aliasToSite[String(rawKey).toLowerCase().trim()];
        const value = numberOrNull(rawValue);
        if (site && value !== null) folds[site] = value;
      });

      const age = numberOrNull(data?.idade ?? data?.age);
      const weight = numberOrNull(data?.peso ?? data?.weight);
      const sex = data?.sex || inferSex(folds);
      const measures = normalizeMeasures(data);
      const measured = Object.values(folds).some(value => Number.isFinite(value)) || (weight !== null && weight > 0);

      return calculate({
        id: `${period}-${name}`,
        period,
        name,
        age,
        weight,
        sex,
        folds,
        measures,
        measured,
        raw: data || {}
      });
    }

    function normalizeMeasurements(raw) {
      let rows = [];
      Object.entries(raw).forEach(([period, people]) => {
        Object.entries(people || {}).forEach(([name, data]) => {
          rows.push(normalizeRow(period, name, data));
        });
      });
      rows = addDeltas(rows);
      return rows.sort((a, b) => {
        if (a.period !== b.period) return a.period.localeCompare(b.period);
        return a.name.localeCompare(b.name, 'pt-BR');
      });
    }

    function sumFolds(folds) {
      const values = Object.values(folds).filter(value => Number.isFinite(value));
      return values.length ? values.reduce((total, value) => total + value, 0) : null;
    }

    function hasSites(folds, required) {
      return required.every(site => Number.isFinite(folds[site]) && folds[site] > 0);
    }

    function calculate(person) {
      const sum = sumFolds(person.folds);
      let protocol = 'Sem protocolo válido';
      let bodyDensity = null;
      let bf = null;
      let validity = 'bad';
      let warning = 'Medição ausente ou dobras insuficientes para cálculo.';

      if (person.sex === 'M' && person.age !== null && sum !== null && hasSites(person.folds, ['chest', 'abdomen', 'thigh'])) {
        protocol = 'JP3 masculino';
        bodyDensity = 1.10938 - (0.0008267 * sum) + (0.0000016 * Math.pow(sum, 2)) - (0.0002574 * person.age);
        bf = (495 / bodyDensity) - 450;
        validity = person.age >= 18 && person.age <= 61 ? 'good' : 'warn';
        warning = validity === 'good'
          ? 'Cálculo dentro do protocolo informado.'
          : 'Fora da faixa etária adulta usual do protocolo; usar apenas como referência visual.';
      }

      if (person.sex === 'F' && person.age !== null && sum !== null && hasSites(person.folds, ['triceps', 'suprailiac', 'thigh'])) {
        protocol = 'JP3 feminino';
        bodyDensity = 1.0994921 - (0.0009929 * sum) + (0.0000023 * Math.pow(sum, 2)) - (0.0001392 * person.age);
        bf = (495 / bodyDensity) - 450;
        validity = person.age >= 18 && person.age <= 55 ? 'good' : 'warn';
        warning = validity === 'good'
          ? 'Cálculo dentro do protocolo informado.'
          : 'Fora da faixa etária adulta usual do protocolo; usar apenas como referência visual.';
      }

      if (!person.measured) {
        warning = 'Sem medição registrada neste período.';
      }

      return {
        ...person,
        sum,
        protocol,
        bodyDensity,
        bf: Number.isFinite(bf) ? bf : null,
        validity,
        warning,
        deltaBf: null,
        deltaSum: null,
        deltaWeight: null
      };
    }

    function addDeltas(rows) {
      const byPerson = new Map();
      rows.forEach(row => {
        if (!byPerson.has(row.name)) byPerson.set(row.name, []);
        byPerson.get(row.name).push(row);
      });

      byPerson.forEach(personRows => {
        personRows.sort((a, b) => a.period.localeCompare(b.period));
        personRows.forEach((row, index) => {
          const previous = [...personRows.slice(0, index)].reverse().find(item => item.measured);
          if (!previous) return;

          if (Number.isFinite(row.bf) && Number.isFinite(previous.bf)) row.deltaBf = row.bf - previous.bf;
          if (Number.isFinite(row.sum) && Number.isFinite(previous.sum)) row.deltaSum = row.sum - previous.sum;
          if (Number.isFinite(row.weight) && row.weight > 0 && Number.isFinite(previous.weight) && previous.weight > 0) {
            row.deltaWeight = row.weight - previous.weight;
          }
        });
      });

      return rows;
    }

    function getRows() {
      return normalizeMeasurements(getRawMeasurements());
    }

    function getPeriods(rows) {
      return [...new Set(rows.map(row => row.period))].sort();
    }

    function getLatestPeriod(rows) {
      return getPeriods(rows).slice(-1)[0] || null;
    }

    function getPeople(rows) {
      return [...new Set(rows.map(row => row.name))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
    }

    function rowsForLatestByPerson(rows) {
      const result = [];
      getPeople(rows).forEach(name => {
        const last = rows
          .filter(row => row.name === name && row.measured)
          .sort((a, b) => b.period.localeCompare(a.period))[0];
        if (last) result.push(last);
      });
      return result.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    function rowsWithMeasures(rows, period) {
      return rows.filter(row => row.period === period && Object.keys(row.measures || {}).length);
    }

    function buildGlobalEvolution(rows) {
      return getPeriods(rows).map(period => {
        const periodRows = rows.filter(row => row.period === period && row.measured);
        const bfRows = periodRows.filter(row => Number.isFinite(row.bf));
        const sumRows = periodRows.filter(row => Number.isFinite(row.sum));
        const weightRows = periodRows.filter(row => Number.isFinite(row.weight) && row.weight > 0);

        const avg = values => values.length ? values.reduce((total, value) => total + value, 0) / values.length : null;
        const total = values => values.length ? values.reduce((current, value) => current + value, 0) : null;

        return {
          period,
          countMeasured: periodRows.length,
          avgBf: avg(bfRows.map(row => row.bf)),
          totalFolds: total(sumRows.map(row => row.sum)),
          totalWeight: total(weightRows.map(row => row.weight)),
          avgWeight: avg(weightRows.map(row => row.weight))
        };
      });
    }

    function formatPeriod(period) {
      if (!period) return '—';
      const [year, month, day] = period.split('-');
      return `${day}/${month}/${year}`;
    }

    function shortPeriod(period) {
      if (!period) return '—';
      const [year, month, day] = period.split('-');
      return `${day}/${month}`;
    }

    function formatNumber(value, decimals = 1) {
      return Number.isFinite(value) ? value.toFixed(decimals).replace('.', ',') : '—';
    }

    function formatPercent(value) {
      return Number.isFinite(value) ? `${formatNumber(value, 1)}%` : '—';
    }

    function formatKg(value) {
      return Number.isFinite(value) && value > 0 ? `${formatNumber(value, 1)} kg` : '—';
    }

    function formatMm(value) {
      return Number.isFinite(value) ? `${formatNumber(value, 1)} mm` : '—';
    }

    function badge(row) {
      if (!row.measured) return '<span class="badge-status bad">Sem medição</span>';
      if (row.validity === 'good') return '<span class="badge-status good">OK</span>';
      if (row.validity === 'warn') return '<span class="badge-status warn">Alerta</span>';
      return '<span class="badge-status bad">Sem BF%</span>';
    }

    function deltaText(value, suffix = '%') {
      if (!Number.isFinite(value)) return '<span class="muted">—</span>';
      const cls = Math.abs(value) < 0.05 ? 'flat' : value < 0 ? 'down' : 'up';
      const sign = value > 0 ? '+' : '';
      return `<span class="delta ${cls}">${sign}${formatNumber(value, 1)}${suffix}</span>`;
    }

    function foldsText(folds) {
      const entries = Object.entries(folds || {});
      if (!entries.length) return '<span class="muted">—</span>';
      return entries.map(([site, value]) => `${siteLabels[site] || site}: <strong>${formatNumber(value, 1)}mm</strong>`).join('<br>');
    }

    function measuresText(measures) {
      const entries = Object.entries(measures || {});
      if (!entries.length) return '<span class="muted">—</span>';
      return entries.map(([key, value]) => `${(measureLabels[key] || key).replace('<br>', ' ')}: <strong>${formatNumber(value, 1)}cm</strong>`).join('<br>');
    }

    function destroyChart(id) {
      if (charts[id]) {
        charts[id].destroy();
        delete charts[id];
      }
    }

    function baseChartOptions(suffix = '', beginAtZero = true) {
      return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { labels: { color: '#f4f7ff' } },
          tooltip: {
            callbacks: {
              label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y, 1)}${suffix}`
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#d7e3fb' },
            grid: { color: 'rgba(148,163,184,.10)' }
          },
          y: {
            beginAtZero,
            ticks: { color: '#d7e3fb', callback: value => `${value}${suffix}` },
            grid: { color: 'rgba(148,163,184,.12)' }
          }
        }
      };
    }

    function renderKpis(rows) {
      const latestRows = rowsForLatestByPerson(rows);
      const withBf = latestRows.filter(item => Number.isFinite(item.bf));
      const lowest = [...withBf].sort((a, b) => a.bf - b.bf)[0];
      const evolution = buildGlobalEvolution(rows);
      const firstAvg = evolution.find(item => Number.isFinite(item.avgBf))?.avgBf ?? null;
      const lastAvg = [...evolution].reverse().find(item => Number.isFinite(item.avgBf))?.avgBf ?? null;
      const avgDelta = Number.isFinite(firstAvg) && Number.isFinite(lastAvg) ? lastAvg - firstAvg : null;

      document.getElementById('kpiBox').innerHTML = `
        <div class="stat"><span>Pessoas</span><strong>${getPeople(rows).length}</strong></div>
        <div class="stat"><span>Períodos</span><strong>${getPeriods(rows).length}</strong></div>
        <div class="stat"><span>Menor BF% atual</span><strong>${lowest ? `${lowest.name}<br>${formatPercent(lowest.bf)}` : '—'}</strong></div>
        <div class="stat"><span>Evolução média</span><strong>${Number.isFinite(avgDelta) ? deltaText(avgDelta) : '—'}</strong></div>
      `;
    }

    function renderDashboardCharts(rows) {
      const evolution = buildGlobalEvolution(rows);
      const latestRows = rowsForLatestByPerson(rows);
      const rankingRows = latestRows.filter(row => Number.isFinite(row.bf)).sort((a, b) => a.bf - b.bf);
      const deltaRows = latestRows.filter(row => Number.isFinite(row.deltaBf)).sort((a, b) => a.deltaBf - b.deltaBf);

      ['globalEvolutionChart', 'latestRankingChart', 'weightEvolutionChart', 'deltaChart'].forEach(destroyChart);

      charts.globalEvolutionChart = new Chart(document.getElementById('globalEvolutionChart'), {
        type: 'line',
        data: {
          labels: evolution.map(item => shortPeriod(item.period)),
          datasets: [
            {
              label: 'Média BF%',
              data: evolution.map(item => Number.isFinite(item.avgBf) ? Number(item.avgBf.toFixed(2)) : null),
              borderColor: '#28c8ff',
              backgroundColor: 'rgba(40,200,255,.16)',
              tension: .35,
              fill: true,
              pointRadius: 5,
              yAxisID: 'y'
            },
            {
              label: 'Soma total das dobras',
              data: evolution.map(item => Number.isFinite(item.totalFolds) ? Number(item.totalFolds.toFixed(1)) : null),
              borderColor: '#bf86ff',
              backgroundColor: 'rgba(191,134,255,.12)',
              tension: .35,
              pointRadius: 5,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { labels: { color: '#f4f7ff' } } },
          scales: {
            x: { ticks: { color: '#d7e3fb' }, grid: { color: 'rgba(148,163,184,.10)' } },
            y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
              ticks: { color: '#d7e3fb', callback: value => `${value}%` },
              grid: { color: 'rgba(148,163,184,.12)' }
            },
            y1: {
              type: 'linear',
              position: 'right',
              beginAtZero: true,
              ticks: { color: '#d7e3fb', callback: value => `${value}mm` },
              grid: { drawOnChartArea: false }
            }
          }
        }
      });

      charts.latestRankingChart = new Chart(document.getElementById('latestRankingChart'), {
        type: 'bar',
        data: {
          labels: rankingRows.map(item => item.name),
          datasets: [{
            label: 'BF% último período',
            data: rankingRows.map(item => Number(item.bf.toFixed(2))),
            backgroundColor: rankingRows.map(item => item.validity === 'warn' ? 'rgba(245,158,11,.65)' : 'rgba(40,200,255,.60)'),
            borderRadius: 12
          }]
        },
        options: baseChartOptions('%')
      });

      charts.weightEvolutionChart = new Chart(document.getElementById('weightEvolutionChart'), {
        type: 'line',
        data: {
          labels: evolution.map(item => shortPeriod(item.period)),
          datasets: [
            {
              label: 'Peso total registrado',
              data: evolution.map(item => Number.isFinite(item.totalWeight) ? Number(item.totalWeight.toFixed(1)) : null),
              borderColor: '#22c55e',
              backgroundColor: 'rgba(34,197,94,.16)',
              tension: .35,
              fill: true,
              pointRadius: 5
            },
            {
              label: 'Peso médio registrado',
              data: evolution.map(item => Number.isFinite(item.avgWeight) ? Number(item.avgWeight.toFixed(1)) : null),
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245,158,11,.12)',
              tension: .35,
              pointRadius: 5
            }
          ]
        },
        options: baseChartOptions('kg')
      });

      charts.deltaChart = new Chart(document.getElementById('deltaChart'), {
        type: 'bar',
        data: {
          labels: deltaRows.map(item => item.name),
          datasets: [{
            label: 'Variação BF%',
            data: deltaRows.map(item => Number(item.deltaBf.toFixed(2))),
            backgroundColor: deltaRows.map(item => item.deltaBf <= 0 ? 'rgba(34,197,94,.58)' : 'rgba(239,68,68,.58)'),
            borderRadius: 12
          }]
        },
        options: baseChartOptions('%', false)
      });
    }

    function renderSummary(rows) {
      document.getElementById('summaryRows').innerHTML = [...rows]
        .sort((a, b) => b.period.localeCompare(a.period) || a.name.localeCompare(b.name, 'pt-BR'))
        .map(row => `
          <tr>
            <td><strong>${row.name}</strong></td>
            <td>${formatPeriod(row.period)}</td>
            <td>${row.age ?? '—'}</td>
            <td>${formatKg(row.weight)}</td>
            <td>${row.protocol}<br>${badge(row)}</td>
            <td>${foldsText(row.folds)}</td>
            <td><strong>${formatMm(row.sum)}</strong></td>
            <td><strong>${formatPercent(row.bf)}</strong></td>
            <td>${deltaText(row.deltaBf)}</td>
            <td>${measuresText(row.measures)}</td>
            <td class="muted">${row.warning}</td>
          </tr>
        `).join('');
    }

    function renderPersonCards(rows) {
      const latestRows = rowsForLatestByPerson(rows);
      if (!selectedPersonName) selectedPersonName = latestRows[0]?.name || getPeople(rows)[0];

      document.getElementById('personCards').innerHTML = latestRows.map(item => `
        <div class="person-card ${item.name === selectedPersonName ? 'active' : ''}" data-person-name="${item.name}">
          <strong>${item.name}</strong>
          <small>${formatPercent(item.bf)} • soma ${formatMm(item.sum)}<br>${formatPeriod(item.period)} • var. ${Number.isFinite(item.deltaBf) ? deltaText(item.deltaBf) : '—'}</small>
        </div>
      `).join('');

      document.querySelectorAll('[data-person-name]').forEach(card => {
        card.addEventListener('click', () => {
          selectedPersonName = card.getAttribute('data-person-name');
          renderAll();
          showTab('individual');
        });
      });

      renderPersonDetail(rows, selectedPersonName);
    }


    function youtubeEmbedUrl(url) {
      if (!url) return null;

      let id = null;

      if (url.includes('youtube.com/shorts/')) {
        id = url.split('youtube.com/shorts/')[1].split(/[?&/]/)[0];
      } else if (url.includes('youtube.com/watch')) {
        try {
          id = new URL(url).searchParams.get('v');
        } catch (error) {
          id = null;
        }
      } else if (url.includes('youtu.be/')) {
        id = url.split('youtu.be/')[1].split(/[?&/]/)[0];
      }

      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    function renderWorkoutVideo(url, title) {
      const embed = youtubeEmbedUrl(url);

      if (embed) {
        return `
          <div class="exercise-video">
            <iframe
              src="${embed}"
              title="${title}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        `;
      }

      return `
        <div class="exercise-video">
          <div class="external-preview">
            <div>
              <i class="fa-solid fa-image" style="font-size:24px;margin-bottom:8px;color:#9fe7ff;"></i><br>
              Referência externa
            </div>
          </div>
        </div>
      `;
    }

    function renderWorkoutSection(personName) {
      const plan = TRAINING_PLANS[personName];

      if (!plan) {
        return `
          <section class="workout-section">
            <div class="workout-head">
              <div>
                <h3>Treino</h3>
                <div class="muted">Nenhum treino cadastrado para esta pessoa ainda.</div>
              </div>
            </div>
            <p class="muted">Para adicionar futuramente, inclua uma chave com o nome da pessoa dentro do objeto <strong>TRAINING_PLANS</strong>.</p>
          </section>
        `;
      }

      return `
        <section class="workout-section" data-workout-section>
          <div class="workout-head">
            <div>
              <h3>${plan.titulo || 'Treino'}</h3>
              <div class="muted">${plan.observacao || 'Treino cadastrado no objeto dinâmico.'}</div>
            </div>
            <div class="badge-status good">${plan.dias.length} dias</div>
          </div>

          <div class="workout-tabs">
            ${plan.dias.map((day, index) => `
              <button type="button" class="workout-tab ${index === 0 ? 'active' : ''}" data-workout-tab="${index}">
                Treino ${day.codigo}
              </button>
            `).join('')}
          </div>

          <div class="workout-panes">
            ${plan.dias.map((day, index) => `
              <div class="workout-pane ${index === 0 ? 'active' : ''}" data-workout-pane="${index}">
                <div class="workout-day-title">
                  <strong>Treino ${day.codigo} | ${day.nome}</strong><br>
                  ${day.exercicios.length} exercícios cadastrados
                </div>

                <div class="workout-exercises">
                  ${day.exercicios.map(exercise => `
                    <article class="exercise-card">
                      <div>
                        <h4>${exercise.nome}</h4>
                        <div class="exercise-meta">
                          <span>Séries: ${exercise.series}</span>
                          <span>Reps/tempo: ${exercise.repeticoes}</span>
                        </div>
                        <a class="exercise-link" href="${exercise.video}" target="_blank" rel="noopener">
                          <i class="fa-brands fa-youtube"></i>
                          Abrir referência
                        </a>
                      </div>
                      ${renderWorkoutVideo(exercise.video, exercise.nome)}
                    </article>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    function bindWorkoutTabs() {
      document.querySelectorAll('[data-workout-section]').forEach(section => {
        const tabs = section.querySelectorAll('[data-workout-tab]');
        const panes = section.querySelectorAll('[data-workout-pane]');

        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            const index = tab.getAttribute('data-workout-tab');

            tabs.forEach(item => item.classList.toggle('active', item === tab));
            panes.forEach(pane => pane.classList.toggle('active', pane.getAttribute('data-workout-pane') === index));
          });
        });
      });
    }

    function renderPersonDetail(rows, name) {
      const personRows = rows.filter(row => row.name === name).sort((a, b) => a.period.localeCompare(b.period));
      const latest = [...personRows].reverse().find(row => row.measured) || personRows[personRows.length - 1];

      if (!latest) {
        document.getElementById('personDetail').innerHTML = '<p class="note">Nenhuma pessoa encontrada.</p>';
        return;
      }

      document.getElementById('personDetail').innerHTML = `
        <div class="detail-header">
          <div>
            <h2>${latest.name}</h2>
            <div class="muted">Última medição em ${formatPeriod(latest.period)} • ${latest.protocol}</div>
          </div>
          <div>${badge(latest)}</div>
        </div>

        <div class="grid-3" style="margin-bottom:14px">
          <div class="mini-stat"><span>BF% atual</span><strong>${formatPercent(latest.bf)}</strong></div>
          <div class="mini-stat"><span>Variação BF%</span><strong>${Number.isFinite(latest.deltaBf) ? deltaText(latest.deltaBf) : '—'}</strong></div>
          <div class="mini-stat"><span>Peso atual</span><strong>${formatKg(latest.weight)}</strong></div>
        </div>

        <div class="grid-2" style="margin-bottom:18px">
          <div class="panel" style="box-shadow:none;background:rgba(8,20,46,.42)">
            <h3>Evolução de BF%</h3>
            <div class="chart-wrap small"><canvas id="individualBfChart"></canvas></div>
          </div>
          <div class="panel" style="box-shadow:none;background:rgba(8,20,46,.42)">
            <h3>Evolução da soma das dobras</h3>
            <div class="chart-wrap small"><canvas id="individualFoldChart"></canvas></div>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom:18px">
          <div class="panel" style="box-shadow:none;background:rgba(8,20,46,.42)">
            <h3>Evolução de peso</h3>
            <div class="chart-wrap small"><canvas id="individualWeightChart"></canvas></div>
          </div>
          <div class="panel" style="box-shadow:none;background:rgba(8,20,46,.42)">
            <h3>Evolução das medidas corporais</h3>
            <div class="chart-wrap small"><canvas id="individualMeasuresChart"></canvas></div>
          </div>
        </div>

        ${renderWorkoutSection(name)}

        <h3>Dados por período</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Período</th>
                <th>Idade</th>
                <th>Peso</th>
                <th>Dobras</th>
                <th>Soma</th>
                <th>BF%</th>
                <th>Var. BF%</th>
                <th>Medidas</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${personRows.map(row => `
                <tr>
                  <td>${formatPeriod(row.period)}</td>
                  <td>${row.age ?? '—'}</td>
                  <td>${formatKg(row.weight)}</td>
                  <td>${foldsText(row.folds)}</td>
                  <td><strong>${formatMm(row.sum)}</strong></td>
                  <td><strong>${formatPercent(row.bf)}</strong></td>
                  <td>${deltaText(row.deltaBf)}</td>
                  <td>${measuresText(row.measures)}</td>
                  <td>${badge(row)}<br><span class="muted">${row.warning}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      bindWorkoutTabs();
      renderIndividualCharts(personRows);
    }

    function renderIndividualCharts(personRows) {
      ['individualBfChart', 'individualFoldChart', 'individualWeightChart', 'individualMeasuresChart'].forEach(destroyChart);
      const labels = personRows.map(item => shortPeriod(item.period));

      charts.individualBfChart = new Chart(document.getElementById('individualBfChart'), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'BF%',
            data: personRows.map(item => Number.isFinite(item.bf) ? Number(item.bf.toFixed(2)) : null),
            borderColor: '#28c8ff',
            backgroundColor: 'rgba(40,200,255,.16)',
            fill: true,
            tension: .35,
            pointRadius: 5
          }]
        },
        options: baseChartOptions('%')
      });

      charts.individualFoldChart = new Chart(document.getElementById('individualFoldChart'), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Soma das dobras',
            data: personRows.map(item => Number.isFinite(item.sum) ? Number(item.sum.toFixed(1)) : null),
            borderColor: '#bf86ff',
            backgroundColor: 'rgba(191,134,255,.16)',
            fill: true,
            tension: .35,
            pointRadius: 5
          }]
        },
        options: baseChartOptions('mm')
      });

      charts.individualWeightChart = new Chart(document.getElementById('individualWeightChart'), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Peso',
            data: personRows.map(item => Number.isFinite(item.weight) && item.weight > 0 ? Number(item.weight.toFixed(1)) : null),
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,.16)',
            fill: true,
            tension: .35,
            pointRadius: 5
          }]
        },
        options: baseChartOptions('kg', false)
      });

      const keys = [...new Set(personRows.flatMap(item => Object.keys(item.measures || {})))];

      charts.individualMeasuresChart = new Chart(document.getElementById('individualMeasuresChart'), {
        type: 'bar',
        data: {
          labels,
          datasets: keys.map((key, index) => ({
            label: (measureLabels[key] || key).replace('<br>', ' '),
            data: personRows.map(item => Number.isFinite(item.measures[key]) ? item.measures[key] : null),
            backgroundColor: ['rgba(40,200,255,.58)', 'rgba(191,134,255,.58)', 'rgba(245,158,11,.58)', 'rgba(34,197,94,.58)', 'rgba(239,68,68,.58)', 'rgba(148,163,184,.58)'][index % 6],
            borderRadius: 10
          }))
        },
        options: baseChartOptions('cm')
      });
    }

    function renderPeriodSelector(rows) {
      const periods = getPeriods(rows);
      if (!selectedPeriod || !periods.includes(selectedPeriod)) selectedPeriod = periods[periods.length - 1];

      const select = document.getElementById('periodFilter');
      select.innerHTML = periods.map(period => `<option value="${period}">${formatPeriod(period)}</option>`).join('');
      select.value = selectedPeriod;
    }

    function renderMeasureSelector(rows) {
      const periods = getPeriods(rows).filter(period => rowsWithMeasures(rows, period).length);
      if (!selectedMeasurePeriod || !periods.includes(selectedMeasurePeriod)) selectedMeasurePeriod = periods[periods.length - 1];

      const select = document.getElementById('measurePeriodFilter');
      select.innerHTML = periods.map(period => `<option value="${period}">${formatPeriod(period)}</option>`).join('');
      select.value = selectedMeasurePeriod;
    }

    function renderPeriodTab(rows) {
      renderPeriodSelector(rows);
      const periodRows = rows.filter(row => row.period === selectedPeriod).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
      const measuredRows = periodRows.filter(row => row.measured);
      const bfRows = periodRows.filter(row => Number.isFinite(row.bf));
      const sumRows = periodRows.filter(row => Number.isFinite(row.sum));
      const average = values => values.length ? values.reduce((total, value) => total + value, 0) / values.length : null;

      document.getElementById('periodKpis').innerHTML = `
        <div class="mini-stat"><span>Pessoas</span><strong>${periodRows.length}</strong></div>
        <div class="mini-stat"><span>Medições preenchidas</span><strong>${measuredRows.length}</strong></div>
        <div class="mini-stat"><span>Média BF%</span><strong>${formatPercent(average(bfRows.map(row => row.bf)))}</strong></div>
      `;

      document.getElementById('periodRows').innerHTML = periodRows.map(row => `
        <tr>
          <td><strong>${row.name}</strong></td>
          <td>${row.age ?? '—'}</td>
          <td>${formatKg(row.weight)}</td>
          <td>${foldsText(row.folds)}</td>
          <td><strong>${formatMm(row.sum)}</strong></td>
          <td><strong>${formatPercent(row.bf)}</strong></td>
          <td>${measuresText(row.measures)}</td>
          <td>${badge(row)}</td>
        </tr>
      `).join('');

      ['periodBfChart', 'periodFoldChart'].forEach(destroyChart);

      const bfSorted = [...bfRows].sort((a, b) => a.bf - b.bf);
      const sumSorted = [...sumRows].sort((a, b) => a.sum - b.sum);

      charts.periodBfChart = new Chart(document.getElementById('periodBfChart'), {
        type: 'bar',
        data: {
          labels: bfSorted.map(row => row.name),
          datasets: [{
            label: `BF% em ${formatPeriod(selectedPeriod)}`,
            data: bfSorted.map(row => Number(row.bf.toFixed(2))),
            backgroundColor: 'rgba(40,200,255,.60)',
            borderRadius: 12
          }]
        },
        options: baseChartOptions('%')
      });

      charts.periodFoldChart = new Chart(document.getElementById('periodFoldChart'), {
        type: 'bar',
        data: {
          labels: sumSorted.map(row => row.name),
          datasets: [{
            label: `Soma das dobras em ${formatPeriod(selectedPeriod)}`,
            data: sumSorted.map(row => Number(row.sum.toFixed(1))),
            backgroundColor: 'rgba(191,134,255,.62)',
            borderRadius: 12
          }]
        },
        options: baseChartOptions('mm')
      });
    }

    function profileFor(row) {
      const m = row.measures || {};
      if (Number.isFinite(m.cintura) && Number.isFinite(m.quadril)) {
        const ratio = m.cintura / m.quadril;
        if (ratio <= .78) return 'Visual mais atlético';
        if (ratio >= .86) return 'Visual robusto';
        return 'Visual equilibrado';
      }

      if (Number.isFinite(m.abdomem) && Number.isFinite(m.peito)) {
        const ratio = m.abdomem / m.peito;
        if (ratio >= 1) return 'Mais volume central';
        return 'Visual equilibrado';
      }

      return 'Visual registrado';
    }

    function ratioFor(row) {
      const m = row.measures || {};
      if (Number.isFinite(m.cintura) && Number.isFinite(m.quadril)) {
        return { label: 'cintura/quadril', value: m.cintura / m.quadril };
      }

      if (Number.isFinite(m.abdomem) && Number.isFinite(m.peito)) {
        return { label: 'abdômen/peito', value: m.abdomem / m.peito };
      }

      return { label: 'proporção', value: null };
    }

    function avatarKey(name) {
      return name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');
    }

    function measureOrder(row) {
      return Number.isFinite(row.measures.cintura) || Number.isFinite(row.measures.quadril)
        ? ['cintura', 'quadril', 'coxa', 'braco']
        : ['peito', 'abdomem', 'coxa', 'braco'];
    }

    function renderMeasureCard(row) {
      const ratio = ratioFor(row);
      const purple = measureOrder(row)[0] === 'cintura';
      const key = avatarKey(row.name);
      const avatar = AVATARS[key] || AVATARS.andre;

      return `
        <article class="measure-card">
          <h2 class="measure-title">${row.name}</h2>
          <div class="profile-badge-wrap">
            <div class="profile-badge ${purple ? 'purple' : ''}">${profileFor(row)}</div>
          </div>
          <div class="measure-ratio">${ratio.label}: ${Number.isFinite(ratio.value) ? formatNumber(ratio.value, 2) : '—'}</div>

          <div class="measure-content">
            <div class="avatar">
              <img src="${avatar}" alt="Manequim de ${row.name}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className:'avatar-fallback'}))">
            </div>

            <div class="metrics">
              ${measureOrder(row).map(key => `
                <div class="metric ${purple ? 'purple' : ''}">
                  <div class="metric-head">
                    <i class="${measureIcons[key] || 'fa-solid fa-ruler'}"></i>
                    <div class="metric-label">${measureLabels[key] || key}</div>
                  </div>
                  <div class="metric-value">${formatNumber(row.measures[key], 1)}<span>cm</span></div>
                </div>
              `).join('')}
            </div>
          </div>
        </article>
      `;
    }

    function renderMeasureTab(rows) {
      renderMeasureSelector(rows);
      const periodRows = rowsWithMeasures(rows, selectedMeasurePeriod).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

      document.getElementById('measureCards').innerHTML = periodRows.map(renderMeasureCard).join('');

      destroyChart('measureCompareChart');

      const keys = ['peito', 'abdomem', 'cintura', 'quadril', 'coxa', 'braco'];

      charts.measureCompareChart = new Chart(document.getElementById('measureCompareChart'), {
        type: 'bar',
        data: {
          labels: periodRows.map(row => row.name),
          datasets: keys.map((key, index) => ({
            label: (measureLabels[key] || key).replace('<br>', ' '),
            data: periodRows.map(row => Number.isFinite(row.measures[key]) ? row.measures[key] : null),
            backgroundColor: ['rgba(40,200,255,.58)', 'rgba(191,134,255,.58)', 'rgba(245,158,11,.58)', 'rgba(34,197,94,.58)', 'rgba(239,68,68,.58)', 'rgba(148,163,184,.58)'][index],
            borderRadius: 10
          }))
        },
        options: baseChartOptions('cm')
      });
    }

    function fillSiteSelects() {
      ['site1Name', 'site2Name', 'site3Name'].forEach((id, index) => {
        const select = document.getElementById(id);
        select.innerHTML = siteOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
        if (index === 0) select.value = 'chest';
        if (index === 1) select.value = 'abdomen';
        if (index === 2) select.value = 'thigh';
      });
    }

    function applySexDefaultSites() {
      const sex = document.getElementById('sex').value;
      document.getElementById('site1Name').value = sex === 'F' ? 'triceps' : 'chest';
      document.getElementById('site2Name').value = sex === 'F' ? 'suprailiac' : 'abdomen';
      document.getElementById('site3Name').value = 'thigh';
    }

    function renderJson() {
      document.getElementById('jsonOutput').value = JSON.stringify(getRawMeasurements(), null, 2);
    }

    function renderAll() {
      const rows = getRows();
      renderKpis(rows);
      renderDashboardCharts(rows);
      renderSummary(rows);
      renderPersonCards(rows);
      renderPeriodTab(rows);
      renderMeasureTab(rows);
      renderJson();
    }

    function showTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(button => button.classList.toggle('active', button.dataset.tab === tabId));
      document.querySelectorAll('.section').forEach(section => section.classList.toggle('active', section.id === tabId));
      setTimeout(renderAll, 0);
    }

    document.querySelectorAll('.tab-btn').forEach(button => {
      button.addEventListener('click', () => showTab(button.dataset.tab));
    });

    document.getElementById('periodFilter').addEventListener('change', event => {
      selectedPeriod = event.target.value;
      renderAll();
      showTab('periodos');
    });

    document.getElementById('measurePeriodFilter').addEventListener('change', event => {
      selectedMeasurePeriod = event.target.value;
      renderAll();
      showTab('medidas');
    });

    document.getElementById('sex').addEventListener('change', applySexDefaultSites);

    document.getElementById('addForm').addEventListener('submit', event => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const period = document.getElementById('date').value;
      const sex = document.getElementById('sex').value;
      const weight = numberOrNull(document.getElementById('weight').value);

      const data = {
        idade: numberOrNull(document.getElementById('age').value),
        sex,
        peso: weight || 0
      };

      [
        [document.getElementById('site1Name').value, numberOrNull(document.getElementById('site1Value').value)],
        [document.getElementById('site2Name').value, numberOrNull(document.getElementById('site2Value').value)],
        [document.getElementById('site3Name').value, numberOrNull(document.getElementById('site3Value').value)]
      ].forEach(([site, value]) => {
        if (site && value !== null) data[siteToPortuguese[site] || site] = value;
      });

      const medidas = {
        peito: numberOrNull(document.getElementById('mChest').value),
        abdomem: numberOrNull(document.getElementById('mAbdomen').value),
        cintura: numberOrNull(document.getElementById('mWaist').value),
        quadril: numberOrNull(document.getElementById('mHip').value),
        coxa: numberOrNull(document.getElementById('mThigh').value),
        braco: numberOrNull(document.getElementById('mArm').value)
      };

      Object.keys(medidas).forEach(key => {
        if (medidas[key] === null) delete medidas[key];
      });

      if (Object.keys(medidas).length) data.medidas = medidas;

      saveLocalMeasurement(period, name, data);
      selectedPersonName = name;
      selectedPeriod = period;
      selectedMeasurePeriod = period;

      event.target.reset();
      document.getElementById('date').value = getLatestPeriod(getRows()) || '2026-06-21';
      fillSiteSelects();
      applySexDefaultSites();
      renderAll();
      showTab('individual');
    });

    document.getElementById('resetLocal').addEventListener('click', () => {
      if (!confirm('Apagar apenas dados salvos neste navegador?')) return;
      localStorage.removeItem(STORAGE_KEY);
      selectedPersonName = null;
      selectedPeriod = null;
      selectedMeasurePeriod = null;
      renderAll();
    });

    document.getElementById('exportJson').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(document.getElementById('jsonOutput').value);
        alert('JSON copiado para a área de transferência.');
      } catch (error) {
        alert('Selecione o texto do JSON e copie manualmente.');
      }
    });

    fillSiteSelects();
    applySexDefaultSites();
    document.getElementById('date').value = getLatestPeriod(getRows()) || '2026-06-21';
    selectedPeriod = getLatestPeriod(getRows());
    selectedMeasurePeriod = selectedPeriod;
    renderAll();
  
