
    let DEFAULT_MEASUREMENTS = {};

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
      },
      "Titio Douglas": {
        "titulo": "Treino conjunto — Upper / Lower / Fullbody",
        "observacao": "Manual de Treino — Ciclo de 8 Semanas. Rotina compartilhada com André.",
        "dias": [
          {"codigo": "Upper", "nome": "Upper — segunda-feira", "exercicios": [
            {"nome": "Fly", "series": "3 x 12"}, {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Remada alta supinada", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Desenvolvimento máquina", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10-12"}, {"nome": "Rosca Scott", "series": "3 x 12"}
          ]},
          {"codigo": "Lower", "nome": "Lower — quinta-feira", "exercicios": [
            {"nome": "Leg press", "series": "4 x 10"}, {"nome": "Agachamento sumô", "series": "3 x 12"}, {"nome": "Cadeira flexora", "series": "3 x 12"}, {"nome": "Cadeira extensora", "series": "3 x 12"}
          ]},
          {"codigo": "Fullbody", "nome": "Fullbody — sábado", "exercicios": [
            {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Fly", "series": "3 x 12"}, {"nome": "Puxada alta individual", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10"}, {"nome": "Rosca Scott", "series": "3 x 12"}, {"nome": "Cadeira flexora", "series": "4 x 8"}, {"nome": "Cadeira extensora", "series": "4 x 10"}
          ]}
        ]
      },
      "André": {
        "titulo": "Manual de Treino — Ciclo de 8 Semanas",
        "observacao": "Rotina completa de segunda a domingo. Progressão planejada para força, hipertrofia e condicionamento.",
        "dias": [
          {"codigo": "Domingo", "nome": "Cardio longo / recuperação", "exercicios": [
            {"nome": "Corrida Z2", "series": "45-70 min"}, {"nome": "Mobilidade", "series": "10-15 min"}
          ]},
          {"codigo": "Upper", "nome": "Upper — segunda-feira", "exercicios": [
            {"nome": "Fly", "series": "3 x 12"}, {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Remada alta supinada", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Desenvolvimento máquina", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10-12"}, {"nome": "Rosca Scott", "series": "3 x 12"}
          ]},
          {"codigo": "Terça", "nome": "Terra + posterior + grip", "exercicios": [
            {"nome": "Levantamento terra", "series": "Conforme tabela de progressão"}, {"nome": "Terra romeno", "series": "3 x 8-10"}, {"nome": "Cadeira flexora", "series": "3 x 10-12"}, {"nome": "Panturrilha", "series": "4 x 12-20"}, {"nome": "Sustentação de barra / grip", "series": "3 séries"}
          ]},
          {"codigo": "Quarta", "nome": "Ombros + cardio de qualidade", "exercicios": [
            {"nome": "Desenvolvimento militar", "series": "Conforme tabela de progressão"}, {"nome": "Elevação lateral na polia", "series": "4 x 10-15"}, {"nome": "Crucifixo invertido", "series": "4 x 12-15"}, {"nome": "Face pull", "series": "3 x 12-15"}, {"nome": "Cardio", "series": "Conforme tabela"}
          ]},
          {"codigo": "Lower", "nome": "Lower — quinta-feira", "exercicios": [
            {"nome": "Leg press", "series": "4 x 10"}, {"nome": "Agachamento sumô", "series": "3 x 12"}, {"nome": "Cadeira flexora", "series": "3 x 12"}, {"nome": "Cadeira extensora", "series": "3 x 12"}, {"nome": "Cadeira abdutora", "series": "3 x 12-15"}, {"nome": "Cadeira adutora", "series": "3 x 12-15"}, {"nome": "Panturrilha", "series": "3-4 x 15-20"}
          ]},
          {"codigo": "Sexta", "nome": "Agachamento + core + cardio leve", "exercicios": [
            {"nome": "Agachamento livre", "series": "Conforme tabela de progressão"}, {"nome": "Búlgaro livre", "series": "3 x 8-12"}, {"nome": "Extensão lombar ou reverse hyper", "series": "3 x 10-15"}, {"nome": "Abdominal / core", "series": "3-4 séries"}, {"nome": "Cardio Z2", "series": "25-40 min"}
          ]},
          {"codigo": "Fullbody", "nome": "Fullbody — sábado", "exercicios": [
            {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Fly", "series": "3 x 12"}, {"nome": "Puxada alta individual", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10"}, {"nome": "Rosca Scott", "series": "3 x 12"}, {"nome": "Leg press", "series": "4 x 10"}, {"nome": "Cadeira flexora", "series": "4 x 8"}, {"nome": "Cadeira extensora", "series": "4 x 10"}, {"nome": "Panturrilha", "series": "3 x 15-20"}
          ]}
        ]
      }
};


    let TRAINING_PROGRESS = {};
    let TRAINING_PEOPLE = {};

    const CLASSIFICATION_AVATARS = {
      M: { essential: 'assets/andre.png', athlete: 'assets/tioguto.png', fitness: 'assets/titiodouglas.png', average: 'assets/felipe.png', aboveAverage: 'assets/felipe.png', high: 'assets/felipe.png' },
      F: { essential: 'assets/tiamah.png', athlete: 'assets/tiamah.png', fitness: 'assets/tiamah.png', average: 'assets/tiamah.png', aboveAverage: 'assets/ines.png', high: 'assets/ines.png' }
    };
    function avatarFor(row, key) {
      const sex = row && row.sex === 'F' ? 'F' : 'M';
      return CLASSIFICATION_AVATARS[sex][key] || CLASSIFICATION_AVATARS[sex].average;
    }

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
    let selectedTrainingPersonName = null;
    let selectedPeriod = null;
    let selectedMeasurePeriod = null;
    let selectedReportPerson = null;
    let selectedSummaryPerson = "";
    let selectedSummaryPeriod = "";
    let TRAINING_PROGRESS_RAW = null;
    let selectedComparePeriodA = null;
    let selectedComparePeriodB = null;
    let selectedComparePersonA = null;
    let selectedComparePersonB = null;
    let TRAINING_REGISTER_DRAFTS = {};
    let TRAINING_REGISTER_ACTIVE_DATES = {};
    try {
      TRAINING_REGISTER_DRAFTS = JSON.parse(localStorage.getItem('training-register-drafts') || '{}');
      TRAINING_REGISTER_ACTIVE_DATES = JSON.parse(localStorage.getItem('training-register-active-dates') || '{}');
    } catch (error) { TRAINING_REGISTER_DRAFTS = {}; TRAINING_REGISTER_ACTIVE_DATES = {}; }

    const BODY_FAT_REFERENCE = {
      M: [{ key: 'essential', label: 'Essencial', min: 2, max: 5 }, { key: 'athlete', label: 'Atleta', min: 6, max: 12 }, { key: 'fitness', label: 'Fitness', min: 13, max: 16 }, { key: 'average', label: 'Sobrepeso', min: 17, max: 22 }, { key: 'aboveAverage', label: 'Elevado', min: 23, max: 29 }, { key: 'high', label: 'Obesidade', min: 30, max: 40 }],
      F: [{ key: 'essential', label: 'Essencial', min: 10, max: 13 }, { key: 'athlete', label: 'Atleta', min: 14, max: 19 }, { key: 'fitness', label: 'Fitness', min: 20, max: 23 }, { key: 'average', label: 'Sobrepeso', min: 24, max: 29 }, { key: 'aboveAverage', label: 'Elevado', min: 30, max: 35 }, { key: 'high', label: 'Obesidade', min: 36, max: 45 }]
    };
    const REFERENCE_DESCRIPTIONS = {
      essential: 'Faixa fisiológica mínima; não é uma meta estética e exige cautela.',
      athlete: 'Baixa gordura relativa, normalmente associada a alto nível de treinamento.',
      fitness: 'Faixa enxuta e condicionada, sem exigir nível competitivo.',
      average: 'Faixa intermediária; avalie junto de cintura, peso e histórico.',
      aboveAverage: 'Acima do recomendado para a maioria; merece acompanhamento gradual.',
      high: 'Faixa elevada; priorize avaliação profissional e hábitos sustentáveis.'
    };

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

    function getRawMeasurements() {
      return DEFAULT_MEASUREMENTS;
    }

    async function loadMeasurements() {
      const embedded = document.getElementById('measurements-data');
      const localMeasurements = readLocalJson('measurements-override');
      if (localMeasurements) DEFAULT_MEASUREMENTS = localMeasurements;
      else if (location.protocol === 'file:' && embedded) DEFAULT_MEASUREMENTS = JSON.parse(embedded.textContent);
      else {
        const response = await fetch('data.json', { cache: 'no-store' });
        if (!response.ok) throw new Error('data.json could not be loaded');
        DEFAULT_MEASUREMENTS = await response.json();
      }
      await loadTrainingProgress();
    }

    function readLocalJson(key) {
      try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : null; } catch (error) { return null; }
    }

    function downloadJson(filename, value) {
      const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json;charset=utf-8' });
      const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = filename; link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }

    function validateMeasurementsData(raw) {
      const errors = [];
      if (!raw || typeof raw !== 'object') return ['Arquivo não é um objeto JSON.'];
      if (Array.isArray(raw.measurements)) {
        const people = new Set((raw.people || []).map(person => person.id));
        const seen = new Set();
        raw.measurements.forEach((item, index) => { const key = String(item.data || item.periodo || '') + '::' + String(item.pessoaId || ''); if (!item.data || !item.pessoaId) errors.push('Medição ' + (index + 1) + ' sem data ou pessoaId.'); if (people.size && !people.has(item.pessoaId)) errors.push('pessoaId inexistente na medição ' + (index + 1) + '.'); if (seen.has(key)) errors.push('Medição duplicada: ' + key); seen.add(key); });
      } else if (!Object.keys(raw).length) errors.push('Arquivo de medições vazio.');
      return errors;
    }

    function validateTrainingData(raw) {
      const errors = [];
      if (!raw || typeof raw !== 'object' || !Array.isArray(raw.sessions)) return ['Arquivo de treinos precisa conter o array sessions.'];
      const people = new Set((raw.people || []).map(person => person.id));
      raw.sessions.forEach((session, index) => { if (!session.pessoaId || !session.data) errors.push('Sessão ' + (index + 1) + ' sem pessoaId ou data.'); if (people.size && !people.has(session.pessoaId)) errors.push('pessoaId inexistente na sessão ' + (index + 1) + '.'); if (!Array.isArray(session.exercicios)) errors.push('Sessão ' + (index + 1) + ' sem exercícios válidos.'); });
      return errors;
    }

    function updateDataDiagnostics(rows) {
      const target = document.getElementById('dataValidationStatus');
      if (!target) return;
      const errors = validateMeasurementsData(DEFAULT_MEASUREMENTS).concat(validateTrainingData(TRAINING_PROGRESS_RAW));
      target.innerHTML = errors.length ? '<span class="badge-status warn">Atenção</span> ' + errors.join(' ') : '<span class="badge-status good">Dados válidos</span> ' + rows.length + ' medições e ' + Object.values(TRAINING_PROGRESS).reduce((total, person) => total + Object.keys(person).length, 0) + ' sessões carregadas.';
      target.parentElement.classList.toggle('good', !errors.length); target.parentElement.classList.toggle('warn', errors.length > 0);
    }

    function importJsonFile(file, kind) {
      const reader = new FileReader();
      reader.onload = () => { try { const raw = JSON.parse(reader.result); const errors = kind === 'measurements' ? validateMeasurementsData(raw) : validateTrainingData(raw); if (errors.length) throw new Error(errors.join(' ')); localStorage.setItem(kind === 'measurements' ? 'measurements-override' : 'training-progress-override', JSON.stringify(raw)); if (kind === 'measurements') DEFAULT_MEASUREMENTS = raw; else { TRAINING_PROGRESS_RAW = raw; TRAINING_PROGRESS = normalizeTrainingProgress(raw); } renderAll(); document.getElementById('dataToolStatus').textContent = 'Importação aplicada neste navegador. Publique o JSON para torná-la permanente.'; } catch (error) { document.getElementById('dataToolStatus').textContent = 'Importação recusada: ' + error.message; } };
      reader.readAsText(file);
    }

    function normalizeTrainingProgress(raw) {
      TRAINING_PEOPLE = Object.fromEntries((raw.people || []).map(person => [person.id, person]));
      return (raw.sessions || []).reduce((grouped, session) => {
        if (!grouped[session.pessoaId]) grouped[session.pessoaId] = {};
        const { id, pessoaId, data, ...record } = session;
        grouped[pessoaId][data] = record;
        return grouped;
      }, {});
    }

    async function loadTrainingProgress() {
      const embedded = document.getElementById('training-progress-data');
      const localTraining = readLocalJson('training-progress-override');
      if (localTraining) { TRAINING_PROGRESS_RAW = localTraining; TRAINING_PROGRESS = normalizeTrainingProgress(localTraining); return; }
      if (location.protocol === 'file:' && embedded) { TRAINING_PROGRESS_RAW = JSON.parse(embedded.textContent); TRAINING_PROGRESS = normalizeTrainingProgress(TRAINING_PROGRESS_RAW); return; }
      const response = await fetch('training-progress.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('training-progress.json could not be loaded');
      TRAINING_PROGRESS_RAW = await response.json();
      TRAINING_PROGRESS = normalizeTrainingProgress(TRAINING_PROGRESS_RAW);
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

    function normalizeRow(period, name, data, personId = null) {
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
      const observation = data?.observacao || data?.obs || '';
      const measured = Object.values(folds).some(value => Number.isFinite(value)) || (weight !== null && weight > 0);
      return calculate({ id: `${period}-${name}`, personId, period, name, age, weight, sex, folds, measures, measured, observation, raw: data || {} });
    }

    function normalizeMeasurements(raw) {
      let rows = [];
      if (raw && Array.isArray(raw.measurements)) {
        const peopleById = Object.fromEntries((raw.people || []).map(person => [person.id, person]));
        raw.measurements.forEach(item => {
          const person = peopleById[item.pessoaId] || {};
          const data = { ...item, sex: item.sex || person.sexo };
          delete data.data;
          delete data.pessoaId;
          rows.push(normalizeRow(item.data || item.periodo, person.nome || item.nome || item.pessoaId, data, item.pessoaId));
        });
      } else {
        Object.entries(raw || {}).forEach(([period, people]) => {
          Object.entries(people || {}).forEach(([name, data]) => rows.push(normalizeRow(period, name, data)));
        });
      }
      return addDeltas(rows).sort((a, b) => a.period !== b.period ? a.period.localeCompare(b.period) : a.name.localeCompare(b.name, 'pt-BR'));
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
        personId: person.personId || null,
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
      const personSelect = document.getElementById('summaryPersonFilter');
      const periodSelect = document.getElementById('summaryPeriodFilter');
      const people = getPeople(rows), periods = getPeriods(rows);
      if (!selectedSummaryPerson || !people.includes(selectedSummaryPerson)) selectedSummaryPerson = '';
      if (!selectedSummaryPeriod || !periods.includes(selectedSummaryPeriod)) selectedSummaryPeriod = '';
      if (personSelect) { personSelect.innerHTML = '<option value="">Todas</option>' + people.map(name => '<option value="' + name + '">' + name + '</option>').join(''); personSelect.value = selectedSummaryPerson; }
      if (periodSelect) { periodSelect.innerHTML = '<option value="">Todos</option>' + periods.map(period => '<option value="' + period + '">' + formatPeriod(period) + '</option>').join(''); periodSelect.value = selectedSummaryPeriod; }
      const filtered = rows.filter(row => (!selectedSummaryPerson || row.name === selectedSummaryPerson) && (!selectedSummaryPeriod || row.period === selectedSummaryPeriod));
      const latest = getLatestPeriod(filtered.length ? filtered : rows);
      const latestRows = filtered.filter(row => row.period === latest);
      const calculated = latestRows.filter(row => Number.isFinite(row.bf)).length;
      const deltas = latestRows.filter(row => Number.isFinite(row.deltaBf));
      const averageDelta = deltas.length ? deltas.reduce((sum, row) => sum + row.deltaBf, 0) / deltas.length : null;
      const summaryKpis = document.getElementById('summaryKpis');
      if (summaryKpis) summaryKpis.innerHTML = '<div class="mini-stat"><span>Período exibido</span><strong>' + formatPeriod(latest) + '</strong></div><div class="mini-stat"><span>BF% calculável</span><strong>' + calculated + '/' + latestRows.length + '</strong></div><div class="mini-stat"><span>Variação média</span><strong>' + deltaText(averageDelta) + '</strong></div>';
      document.getElementById('summaryRows').innerHTML = [...filtered].sort((a, b) => b.period.localeCompare(a.period) || a.name.localeCompare(b.name, 'pt-BR')).map(row => '<tr><td><strong>' + row.name + '</strong></td><td>' + formatPeriod(row.period) + '</td><td>' + (row.age ?? '—') + '</td><td>' + formatKg(row.weight) + '</td><td>' + row.protocol + '<br>' + badge(row) + '</td><td>' + foldsText(row.folds) + '</td><td><strong>' + formatMm(row.sum) + '</strong></td><td><strong>' + formatPercent(row.bf) + '</strong></td><td>' + deltaText(row.deltaBf) + '</td><td>' + measuresText(row.measures) + '</td><td class="muted">' + (row.observation ? row.warning + ' ' + row.observation : row.warning) + '</td></tr>').join('');
      updateDataDiagnostics(rows);
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

      return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
    }

    function renderWorkoutVideo(url, title) {
      const embed = youtubeEmbedUrl(url);

      if (embed && location.protocol === 'file:') {
        const videoId = embed.split('/embed/')[1].split('?')[0];
        return `
          <div class="exercise-video local-video-preview">
            <a href="${url}" target="_blank" rel="noopener" aria-label="Abrir ${title} no YouTube">
              <img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="Miniatura do vídeo: ${title}">
              <span><i class="fa-brands fa-youtube"></i> Abrir vídeo no YouTube</span>
            </a>
          </div>
        `;
      }

      if (embed) {
        return `
          <div class="exercise-video">
            <iframe
              src="${embed}"
              title="${title}"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <a class="exercise-preview-link" href="${url}" target="_blank" rel="noopener">Abrir vídeo no YouTube</a>
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

    function orderedTrainingDays(personName, plan) {
      if (personName !== 'André') return plan.dias;
      const order = { Upper: 1, 'Terça': 2, 'Quarta': 3, Lower: 4, Sexta: 5, Fullbody: 6, Domingo: 7 };
      return [...plan.dias].sort((a, b) => (order[a.codigo] || 99) - (order[b.codigo] || 99));
    }

    function renderWorkoutSection(personName) {
      const plan = TRAINING_PLANS[personName];

      if (!plan) return '';
      const days = orderedTrainingDays(personName, plan);

      return `
        <section class="workout-section" data-workout-section>
          <div class="workout-head">
            <div>
              <h3>${plan.titulo || 'Treino'}</h3>
              <div class="muted">${plan.observacao || 'Treino cadastrado no objeto dinâmico.'}</div>
            </div>
            <div class="badge-status good">${days.length} dias</div>
          </div>

          <div class="workout-tabs">
            ${days.map((day, index) => `
              <button type="button" class="workout-tab ${index === 0 ? 'active' : ''}" data-workout-tab="${index}">
                Treino ${day.codigo}
              </button>
            `).join('')}
          </div>

          <div class="workout-panes">
            ${days.map((day, index) => `
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
                        ${exercise.video ? `<a class="exercise-link" href="${exercise.video}" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i> Abrir referência</a>` : '<span class="muted"><i class="fa-solid fa-list-check"></i> Conforme o manual de 8 semanas</span>'}
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

    function classificationFor(row) {
      if (!Number.isFinite(row.bf)) return { key: "average", label: "Sem classificação de BF%" };
      const female = row.sex === "F";
      const ranges = female
        ? [[14, 'essential', 'Essencial'], [20, 'athlete', 'Atleta'], [24, 'fitness', 'Fitness'], [30, 'average', 'Sobrepeso'], [36, 'aboveAverage', 'Elevado'], [Infinity, 'high', 'Obesidade']]
        : [[6, 'essential', 'Essencial'], [13, 'athlete', 'Atleta'], [17, 'fitness', 'Fitness'], [23, 'average', 'Sobrepeso'], [30, 'aboveAverage', 'Elevado'], [Infinity, 'high', 'Obesidade']];
      const match = ranges.find(([limit]) => row.bf < limit) || ranges[ranges.length - 1];
      return { key: match[1], label: match[2] };
    }

    function profileFor(row) {
      const m = row.measures || {};
      if (Number.isFinite(row.bf)) return "BF% " + classificationFor(row).label;
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
      const classification = classificationFor(row);
      const avatar = avatarFor(row, classification.key);

      return `
        <article class="measure-card">
          <h2 class="measure-title">${row.name}</h2>
          <div class="profile-badge-wrap">
            <div class="profile-badge ${purple ? 'purple' : ''}">${profileFor(row)}</div>
          </div>
          <div class="measure-ratio">${ratio.label}: ${Number.isFinite(ratio.value) ? formatNumber(ratio.value, 2) : '—'}</div>

          <div class="measure-content">
            <div class="avatar">
              <img src="${avatar}" alt="Biotipo ilustrativo: classificação ${classification.label} para ${row.name}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className:'avatar-fallback'}))">
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




    function exerciseNameKey(name) {
      const normalized = String(name || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
      return normalized === 'rosca w' ? 'rosca scott' : normalized;
    }

    function exerciseDisplayName(name) {
      return exerciseNameKey(name) === 'rosca scott' ? 'Rosca Scott' : name;
    }

    function renderProgressVisual(personName, exerciseName) {
      const personId = Object.values(TRAINING_PEOPLE).find(person => person.nome === personName)?.id || personName;
      const records = TRAINING_PROGRESS[personId] || {};
      const entries = Object.entries(records).flatMap(([date, record]) => record.exercicios.filter(item => !exerciseName || exerciseNameKey(item.nome) === exerciseName).map(item => ({ date, record, item })));
      const selected = entries.filter(entry => !exerciseName || exerciseNameKey(entry.item.nome) === exerciseName);
      const labels = selected.map(entry => formatPeriod(entry.date));
      const units = [...new Set(selected.map(entry => entry.record?.unidade || 'kg'))].join('/') || 'kg';
      const maxLoads = selected.map(entry => entry.item.series.length ? Math.max(...entry.item.series.map(set => set.peso)) : null);
      const volumes = selected.map(entry => entry.item.series.reduce((sum, set) => sum + (set.peso * (Number.isFinite(set.repeticoes) ? set.repeticoes : 0)), 0) || null);
      const progressSummary = document.getElementById('trainingProgressSummary');
      if (progressSummary) { const previous = selected.at(-2), latest = selected.at(-1); const max = item => item?.item?.series?.length ? Math.max(...item.item.series.map(set => set.peso)) : null; const volume = item => item?.item?.series?.reduce((sum, set) => sum + (set.peso * (Number.isFinite(set.repeticoes) ? set.repeticoes : 0)), 0) || null; const maxDelta = max(latest) !== null && max(previous) !== null ? max(latest) - max(previous) : null; const volumeDelta = volume(latest) !== null && volume(previous) !== null ? volume(latest) - volume(previous) : null; progressSummary.innerHTML = '<div class="mini-stat"><span>Maior carga recente</span><strong>' + (max(latest) === null ? '—' : formatNumber(max(latest), 2) + ' ' + units) + '</strong></div><div class="mini-stat"><span>Variação de carga</span><strong>' + (maxDelta === null ? '—' : (maxDelta >= 0 ? '+' : '') + formatNumber(maxDelta, 2) + ' ' + units) + '</strong></div><div class="mini-stat"><span>Variação de volume</span><strong>' + (volumeDelta === null ? '—' : (volumeDelta >= 0 ? '+' : '') + formatNumber(volumeDelta, 0) + ' kg·reps') + '</strong></div>'; }
      const timeline = document.getElementById('trainingProgressTimeline');
      if (timeline) timeline.innerHTML = selected.map(entry => `<article class="progress-timeline-item"><time>${formatPeriod(entry.date)}</time><div><strong>${exerciseDisplayName(entry.item.nome)}</strong><p>${entry.item.series.length ? entry.item.series.map(set => `${formatNumber(set.peso, 2)} ${entry.record?.unidade || 'kg'} × ${set.repeticoes ?? '—'}`).join(' · ') : 'N/A'}</p></div></article>`).join('') || '<p class="muted">Nenhum registro para este exercício.</p>';
      destroyChart('trainingProgressChart');
      const canvas = document.getElementById('trainingProgressChart');
      if (!canvas || !selected.length) return;
      charts.trainingProgressChart = new Chart(canvas, { type: 'line', data: { labels, datasets: [
        { label: `Maior carga (${units})`, data: maxLoads, borderColor: '#28c8ff', backgroundColor: 'rgba(40,200,255,.16)', tension: .25, fill: true, yAxisID: 'y' },
        { label: `Volume (${units} × reps)`, data: volumes, borderColor: '#bf86ff', backgroundColor: 'rgba(191,134,255,.12)', tension: .25, yAxisID: 'y1' }
      ] }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { labels: { color: '#f4f7ff' } } }, scales: { x: { ticks: { color: '#d7e3fb' }, grid: { color: 'rgba(148,163,184,.10)' } }, y: { beginAtZero: true, ticks: { color: '#d7e3fb' } }, y1: { beginAtZero: true, position: 'right', ticks: { color: '#d7e3fb' }, grid: { drawOnChartArea: false } } } } });
    }

    function renderTrainingProgress(personName) {
      const personId = Object.values(TRAINING_PEOPLE).find(person => person.nome === personName)?.id || personName;
      const records = TRAINING_PROGRESS[personId];
      if (!records) return '<section class="workout-section"><p class="muted">Nenhuma evolução registrada para esta pessoa.</p></section>';
      const exerciseOptions = [...new Map(Object.values(records).flatMap(record => record.exercicios.map(item => [exerciseNameKey(item.nome), exerciseDisplayName(item.nome)]))).entries()];
      return `<section class="workout-section">
        <div class="workout-head"><div><h3>Gráficos de progressão</h3><div class="muted">Acompanhe carga máxima e volume acumulado por exercício.</div></div></div>
        <label for="progressExerciseSelect">Exercício</label>
        <select id="progressExerciseSelect">${exerciseOptions.map(([key, name]) => `<option value="${key}">${name}</option>`).join('')}</select>
        <div class="chart-wrap small" style="margin-top:14px"><canvas id="trainingProgressChart"></canvas></div>
        <div class="grid-3" id="trainingProgressSummary" style="margin-top:14px"></div>
        <h4 style="margin:18px 0 10px">Timeline do exercício</h4>
        <div class="progress-timeline" id="trainingProgressTimeline"></div>
      </section>` + Object.entries(records).sort(([a], [b]) => b.localeCompare(a)).map(([date, record]) => `
        <section class="workout-section">
          <div class="workout-head"><div><h3>${record.titulo} — ${formatPeriod(date)}</h3><div class="muted">${record.observacao}</div></div></div>
          <div class="table-wrap">
            <table class="progress-table"><thead><tr><th>#</th><th>Exercício</th><th>Séries realizadas</th><th>Observação</th></tr></thead><tbody>
              ${record.exercicios.map(item => `<tr><td><strong>${item.numero}</strong></td><td><strong>${exerciseDisplayName(item.nome)}</strong></td><td>${item.series.length ? item.series.map(set => `${formatNumber(set.peso, 2)} ${record.unidade || 'kg'} × ${set.repeticoes ?? '—'}`).join('<br>') : 'N/A'}</td><td>${[...new Set(item.series.map(set => set.observacao).filter(Boolean).concat(item.observacao || []))].join('; ') || '—'}</td></tr>`).join('')}
            </tbody></table>
          </div>
        </section>`).join('');
    }

    function trainingPeopleOptions(rows) {
      const ids = new Map(rows.filter(row => row.personId).map(row => [row.name, row.personId]));
      return getPeople(rows).filter(name => TRAINING_PLANS[name]).map(name => ({ name, id: ids.get(name) || name.toLowerCase().replace(/[^a-z0-9]+/gi, '-') }));
    }

    function trainingSlug(value) {
      return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    function trainingRegisterExerciseRow(exercise = {}, index = 0) {
      const series = Array.isArray(exercise.registroSeries) ? exercise.registroSeries : (Array.isArray(exercise.seriesRegistro) ? exercise.seriesRegistro : (Array.isArray(exercise.series) ? exercise.series : []));
      return `<div class="register-exercise" data-register-exercise>
        <div class="register-exercise-head"><span class="register-number">${index + 1}</span><input class="register-name" type="text" value="${exercise.nome || ''}" placeholder="Nome do exercício"><button type="button" class="ghost-btn register-remove" data-remove-exercise>Remover</button></div>
        <div class="register-sets">${Array.from({ length: Math.max(3, series.length) }, (_, setIndex) => `<label>S${setIndex + 1}<input class="register-weight" type="number" step="0.01" min="0" value="${series[setIndex]?.peso ?? ''}" placeholder="kg/lb"><input class="register-reps" type="number" step="1" min="0" value="${series[setIndex]?.repeticoes ?? ''}" placeholder="reps"></label>`).join('')}</div><button type="button" class="ghost-btn register-add-set" data-add-set><i class="fa-solid fa-plus"></i> Adicionar série</button>
        <input class="register-observation" type="text" value="${exercise.observacao || ''}" placeholder="Observação do exercício">
      </div>`;
    }

    function trainingRegisterDraftKey(personId, date, workoutCode) {
      return `${personId}::${date}::${workoutCode}`;
    }

    function saveTrainingRegisterDraft(pane, personIdOverride, workoutCodeOverride) {
      const personId = personIdOverride || pane.querySelector('#registerPerson')?.value;
      const date = pane.querySelector('#registerDate')?.value;
      const workoutCode = workoutCodeOverride || pane.querySelector('#registerWorkout')?.value;
      if (!personId || !date || !workoutCode) return;
      const selectedPerson = Object.values(TRAINING_PEOPLE).find(person => person.id === personId);
      const plan = TRAINING_PLANS[selectedPerson?.nome];
      const day = plan?.dias.find(item => item.codigo === workoutCode);
      const modelo = day?.exercicios.map(item => exerciseNameKey(item.nome)).join('|') || '';
      const draft = {
        pessoaId: personId,
        modelo,
        data: date,
        titulo: workoutCode,
        unidade: pane.querySelector('#registerUnit')?.value || 'kg',
        observacao: pane.querySelector('#registerSessionObservation')?.value || '',
        exercicios: [...pane.querySelectorAll('[data-register-exercise]')].map((item, index) => ({
          numero: index + 1,
          nome: item.querySelector('.register-name')?.value || '',
          series: [...item.querySelectorAll('.register-sets label')].map(label => ({
            peso: label.querySelector('.register-weight')?.value === '' ? null : Number(label.querySelector('.register-weight')?.value),
            repeticoes: label.querySelector('.register-reps')?.value === '' ? null : Number(label.querySelector('.register-reps')?.value)
          })),
          observacao: item.querySelector('.register-observation')?.value || ''
        }))
      };
      TRAINING_REGISTER_DRAFTS[trainingRegisterDraftKey(personId, date, workoutCode)] = draft;
      TRAINING_REGISTER_ACTIVE_DATES[`${personId}::${workoutCode}`] = date;
      try { localStorage.setItem('training-register-drafts', JSON.stringify(TRAINING_REGISTER_DRAFTS)); localStorage.setItem('training-register-active-dates', JSON.stringify(TRAINING_REGISTER_ACTIVE_DATES)); } catch (error) { /* sessão continua em memória */ }
    }

    function clearTrainingRegisterDraft(personId, date, workoutCode) {
      delete TRAINING_REGISTER_DRAFTS[trainingRegisterDraftKey(personId, date, workoutCode)];
      delete TRAINING_REGISTER_ACTIVE_DATES[`${personId}::${workoutCode}`];
      try { localStorage.setItem('training-register-drafts', JSON.stringify(TRAINING_REGISTER_DRAFTS)); localStorage.setItem('training-register-active-dates', JSON.stringify(TRAINING_REGISTER_ACTIVE_DATES)); } catch (error) { /* sem persistência local disponível */ }
    }

    function renderTrainingRegister(rows, personId, workoutCode) {
      const options = trainingPeopleOptions(rows);
      const person = options.find(item => item.id === personId) || options[0];
      const plan = TRAINING_PLANS[person?.name];
      const days = plan ? orderedTrainingDays(person.name, plan) : [];
      const day = days.find(item => item.codigo === workoutCode) || days[0];
      const today = new Date().toISOString().slice(0, 10);
      if (!person || !plan || !day) return '<section class="workout-section"><p class="muted">Nenhum plano disponível para registro.</p></section>';
      const activeDate = TRAINING_REGISTER_ACTIVE_DATES[`${person.id}::${day.codigo}`] || today;
      const savedDraft = TRAINING_REGISTER_DRAFTS[trainingRegisterDraftKey(person.id, activeDate, day.codigo)];
      const modelo = day.exercicios.map(item => exerciseNameKey(item.nome)).join('|');
      const draft = savedDraft?.modelo === modelo ? savedDraft : null;
      const registerExercises = draft?.exercicios?.length ? draft.exercicios : day.exercicios;
      return `<section class="workout-section training-register">
        <div class="workout-head"><div><h3>Registrar sessão</h3><div class="muted">Preencha a sessão realizada e gere o objeto pronto para colar no training-progress.json.</div></div></div>
        <div class="register-toolbar">
          <div><label for="registerPerson">Pessoa / ID</label><select id="registerPerson">${options.map(item => `<option value="${item.id}" ${item.id === person.id ? 'selected' : ''}>${item.name} — ${item.id}</option>`).join('')}</select></div>
          <div><label for="registerWorkout">Treino</label><select id="registerWorkout">${days.map(item => `<option value="${item.codigo}" ${item.codigo === day.codigo ? 'selected' : ''}>${item.codigo} — ${item.nome}</option>`).join('')}</select></div>
          <div><label for="registerDate">Data</label><input id="registerDate" type="date" value="${draft?.data || activeDate}"></div>
          <div><label for="registerUnit">Unidade da carga</label><select id="registerUnit"><option value="kg" ${(!draft?.unidade || draft.unidade === 'kg') ? 'selected' : ''}>kg</option><option value="lb" ${draft?.unidade === 'lb' ? 'selected' : ''}>lb</option></select></div>
        </div>
        <div class="register-exercises" id="registerExercises">${registerExercises.map((exercise, index) => trainingRegisterExerciseRow(exercise, index)).join('')}</div>
        <div class="actions"><button type="button" class="ghost-btn" id="registerAddExercise"><i class="fa-solid fa-plus"></i> Adicionar exercício</button></div>
        <label for="registerSessionObservation">Observação da sessão</label><textarea id="registerSessionObservation" class="register-session-observation" placeholder="Ex.: treino adaptado, troca de exercício, equipamento utilizado...">${draft?.observacao || ''}</textarea>
        <div class="actions"><button type="button" class="primary-btn" id="registerGenerate"><i class="fa-solid fa-code"></i> Gerar objeto JSON</button><button type="button" class="ghost-btn" id="registerClear">Limpar rascunho</button><button type="button" class="ghost-btn" id="registerCopy" disabled><i class="fa-regular fa-copy"></i> Copiar objeto</button></div>
        <textarea id="registerOutput" class="register-output" readonly placeholder="O objeto pronto para colar aparecerá aqui."></textarea>
      </section>`;
    }

    function bindTrainingRegister(rows, content, personId, workoutCode) {
      const pane = content.querySelector('[data-training-pane="register"]');
      if (!pane) return;
      const personSelect = pane.querySelector('#registerPerson');
      const workoutSelect = pane.querySelector('#registerWorkout');
      const currentPersonId = personId || personSelect.value;
      const currentWorkoutCode = workoutCode || workoutSelect.value;
      personSelect.addEventListener('change', () => { saveTrainingRegisterDraft(pane, currentPersonId, currentWorkoutCode); const selected = trainingPeopleOptions(rows).find(item => item.id === personSelect.value); const plan = TRAINING_PLANS[selected?.name]; rerenderWithPlan(selected?.id, plan?.dias[0]?.codigo); });
      workoutSelect.addEventListener('change', () => { saveTrainingRegisterDraft(pane, currentPersonId, currentWorkoutCode); rerenderWithPlan(personSelect.value, workoutSelect.value); });
      pane.addEventListener('input', event => { if (!event.target.matches('#registerPerson, #registerWorkout')) saveTrainingRegisterDraft(pane, personId, workoutCode || workoutSelect.value); });
      pane.addEventListener('change', event => { if (!event.target.matches('#registerPerson, #registerWorkout')) saveTrainingRegisterDraft(pane, personId, workoutCode || workoutSelect.value); });
      const rerenderWithPlan = (nextPersonId, nextWorkoutCode) => { pane.innerHTML = renderTrainingRegister(rows, nextPersonId, nextWorkoutCode); bindTrainingRegister(rows, content, nextPersonId, nextWorkoutCode); };
      const exerciseList = pane.querySelector('#registerExercises');
      pane.querySelector('#registerAddExercise').addEventListener('click', () => { exerciseList.insertAdjacentHTML('beforeend', trainingRegisterExerciseRow({}, exerciseList.querySelectorAll('[data-register-exercise]').length)); });
      exerciseList.addEventListener('click', event => { const addSet = event.target.closest('[data-add-set]'); if (addSet) { const exercise = addSet.closest('[data-register-exercise]'); const setIndex = exercise.querySelectorAll('.register-sets label').length; exercise.querySelector('.register-sets').insertAdjacentHTML('beforeend', `<label>S${setIndex + 1}<input class="register-weight" type="number" step="0.01" min="0" placeholder="kg/lb"><input class="register-reps" type="number" step="1" min="0" placeholder="reps"></label>`); saveTrainingRegisterDraft(pane, personId, workoutCode || workoutSelect.value); return; } if (event.target.closest('[data-remove-exercise]')) { event.target.closest('[data-register-exercise]').remove(); [...exerciseList.querySelectorAll('[data-register-exercise]')].forEach((item, index) => item.querySelector('.register-number').textContent = index + 1); saveTrainingRegisterDraft(pane, personId, workoutCode || workoutSelect.value); } });
      pane.querySelector('#registerClear').addEventListener('click', () => { const date = pane.querySelector('#registerDate').value; const code = pane.querySelector('#registerWorkout').value; clearTrainingRegisterDraft(personId, date, code); pane.innerHTML = renderTrainingRegister(rows, personId, code); bindTrainingRegister(rows, content, personId, code); });
      pane.querySelector('#registerGenerate').addEventListener('click', () => {
        const person = trainingPeopleOptions(rows).find(item => item.id === pane.querySelector('#registerPerson').value);
        const day = TRAINING_PLANS[person.name].dias.find(item => item.codigo === pane.querySelector('#registerWorkout').value);
        const unit = pane.querySelector('#registerUnit').value;
        const session = { id: `${person.id}-${pane.querySelector('#registerDate').value}-${trainingSlug(day.codigo)}`, pessoaId: person.id, data: pane.querySelector('#registerDate').value, titulo: day.codigo, unidade: unit, observacao: pane.querySelector('#registerSessionObservation').value.trim(), exercicios: [...pane.querySelectorAll('[data-register-exercise]')].map((item, index) => { const series = [...item.querySelectorAll('.register-sets label')].map(label => ({ peso: Number(label.querySelector('.register-weight').value), repeticoes: Number(label.querySelector('.register-reps').value) })).filter(set => Number.isFinite(set.peso) && set.peso > 0); const result = { numero: index + 1, nome: item.querySelector('.register-name').value.trim() || 'Exercício não informado', series }; const observation = item.querySelector('.register-observation').value.trim(); if (observation) result.observacao = observation; return result; }) };
        const output = pane.querySelector('#registerOutput'); output.value = JSON.stringify(session, null, 2); pane.querySelector('#registerCopy').disabled = false; saveTrainingRegisterDraft(pane, personId, pane.querySelector('#registerWorkout').value);
      });
      pane.querySelector('#registerCopy').addEventListener('click', async () => { const output = pane.querySelector('#registerOutput'); try { await navigator.clipboard.writeText(output.value); pane.querySelector('#registerCopy').textContent = 'Copiado'; setTimeout(() => pane.querySelector('#registerCopy').innerHTML = '<i class="fa-regular fa-copy"></i> Copiar objeto', 1400); } catch { output.select(); document.execCommand('copy'); } });
    }

    function renderTrainingTab(rows) {
      const people = getPeople(rows);
      const cards = document.getElementById('trainingPersonCards');
      const content = document.getElementById('trainingContent');
      if (!cards || !content) return;
      const available = people.filter(name => TRAINING_PLANS[name]);
      if (!selectedTrainingPersonName || !TRAINING_PLANS[selectedTrainingPersonName]) selectedTrainingPersonName = available[0] || null;
      cards.innerHTML = available.map(name => `<button type="button" class="person-card ${name === selectedTrainingPersonName ? 'active' : ''}" data-training-person="${name}"><strong>${name}</strong><small>${TRAINING_PLANS[name].titulo}</small></button>`).join('');
      const registerPerson = trainingPeopleOptions(rows).find(item => item.name === selectedTrainingPersonName);
      content.innerHTML = selectedTrainingPersonName ? `<div class="workout-tabs training-view-tabs" role="tablist" aria-label="Seções do treinamento"><button type="button" class="workout-tab active" data-training-view="plan">Plano de treino</button><button type="button" class="workout-tab" data-training-view="evolution">Evolução</button><button type="button" class="workout-tab" data-training-view="register">Registro</button></div><div data-training-pane="plan">${renderWorkoutSection(selectedTrainingPersonName)}</div><div data-training-pane="evolution" hidden>${renderTrainingProgress(selectedTrainingPersonName)}</div><div data-training-pane="register" hidden>${renderTrainingRegister(rows, registerPerson?.id)}</div>` : '<p class="note">Nenhum treinamento cadastrado.</p>';
      cards.querySelectorAll('[data-training-person]').forEach(card => card.addEventListener('click', () => { selectedTrainingPersonName = card.dataset.trainingPerson; renderTrainingTab(rows); }));
      content.querySelectorAll('[data-training-view]').forEach(tab => tab.addEventListener('click', () => { content.querySelectorAll('[data-training-view]').forEach(item => item.classList.toggle('active', item === tab)); content.querySelectorAll('[data-training-pane]').forEach(pane => pane.hidden = pane.dataset.trainingPane !== tab.dataset.trainingView); if (tab.dataset.trainingView === 'plan') bindWorkoutTabs(); if (tab.dataset.trainingView === 'register') { const selected = trainingPeopleOptions(rows).find(item => item.name === selectedTrainingPersonName); bindTrainingRegister(rows, content, selected?.id); } }));
      bindWorkoutTabs();
      const progressSelect = content.querySelector('#progressExerciseSelect');
      if (progressSelect) { progressSelect.addEventListener('change', () => renderProgressVisual(selectedTrainingPersonName, progressSelect.value)); renderProgressVisual(selectedTrainingPersonName, progressSelect.value); }
    }


    function renderDetailedReports(rows) {
      const select = document.getElementById('reportPersonFilter'); const kpis = document.getElementById('reportKpis'); const history = document.getElementById('reportHistoryRows');
      if (!select || !kpis || !history) return;
      const people = getPeople(rows); if (!selectedReportPerson || !people.includes(selectedReportPerson)) selectedReportPerson = people[0] || null;
      select.innerHTML = people.map(name => `<option value="${name}">${name}</option>`).join(''); select.value = selectedReportPerson || '';
      const personRows = rows.filter(row => row.name === selectedReportPerson).sort((a, b) => a.period.localeCompare(b.period)); const latest = personRows.at(-1); const previous = personRows.at(-2);
      const bfDelta = latest && previous && Number.isFinite(latest.bf) && Number.isFinite(previous.bf) ? latest.bf - previous.bf : null; const weightDelta = latest && previous && latest.weight > 0 && previous.weight > 0 ? latest.weight - previous.weight : null;
      kpis.innerHTML = `<div class="mini-stat"><span>Último BF%</span><strong>${formatPercent(latest?.bf)}</strong></div><div class="mini-stat"><span>Variação recente</span><strong>${deltaText(bfDelta)}</strong></div><div class="mini-stat"><span>Variação de peso</span><strong>${deltaText(weightDelta, ' kg')}</strong></div>`;
      history.innerHTML = [...personRows].reverse().map(row => `<tr><td>${formatPeriod(row.period)}</td><td><strong>${formatPercent(row.bf)}</strong></td><td>${deltaText(row.deltaBf)}</td><td>${formatKg(row.weight)}</td><td>${formatMm(row.sum)}</td><td>${measuresText(row.measures)}</td><td>${row.observation || '—'}</td><td>${badge(row)}</td></tr>`).join('');
      ['reportBfChart', 'reportWeightChart', 'reportMeasuresChart'].forEach(destroyChart);
      charts.reportBfChart = new Chart(document.getElementById('reportBfChart'), { type: 'line', data: { labels: personRows.map(row => shortPeriod(row.period)), datasets: [{ label: 'BF%', data: personRows.map(row => row.bf), borderColor: '#28c8ff', backgroundColor: 'rgba(40,200,255,.16)', fill: true, tension: .3 }] }, options: baseChartOptions('%', false) });
      charts.reportWeightChart = new Chart(document.getElementById('reportWeightChart'), { type: 'line', data: { labels: personRows.map(row => shortPeriod(row.period)), datasets: [{ label: 'Peso', data: personRows.map(row => row.weight > 0 ? row.weight : null), borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,.16)', fill: true, tension: .3 }] }, options: baseChartOptions(' kg', false) });
      const keys = ['peito', 'abdomem', 'cintura', 'quadril', 'coxa', 'braco'];
      charts.reportMeasuresChart = new Chart(document.getElementById('reportMeasuresChart'), { type: 'bar', data: { labels: keys.map(key => (measureLabels[key] || key).replace('<br>', ' ')), datasets: [{ label: 'Anterior', data: keys.map(key => previous?.measures[key] ?? null), backgroundColor: 'rgba(148,163,184,.55)', borderRadius: 8 }, { label: 'Atual', data: keys.map(key => latest?.measures[key] ?? null), backgroundColor: 'rgba(40,200,255,.65)', borderRadius: 8 }] }, options: baseChartOptions(' cm') });
    }
    function rowForComparison(rows, period, name) {
      return rows.find(row => row.period === period && row.name === name) || null;
    }

    function comparisonValue(row, key) {
      if (!row) return null;
      if (key === 'weight') return row.weight > 0 ? row.weight : null;
      return Number.isFinite(row[key]) ? row[key] : null;
    }

    function renderComparisonTab(rows) {
      const periodASelect = document.getElementById('comparePeriodA');
      const periodBSelect = document.getElementById('comparePeriodB');
      const personASelect = document.getElementById('comparePersonA');
      const personBSelect = document.getElementById('comparePersonB');
      if (!periodASelect || !periodBSelect || !personASelect || !personBSelect) return;
      const periods = getPeriods(rows), people = getPeople(rows);
      if (!selectedComparePeriodA || !periods.includes(selectedComparePeriodA)) selectedComparePeriodA = getLatestPeriod(rows);
      if (!selectedComparePeriodB || !periods.includes(selectedComparePeriodB)) selectedComparePeriodB = getLatestPeriod(rows);
      if (!selectedComparePersonA || !people.includes(selectedComparePersonA)) selectedComparePersonA = people[0] || null;
      if (!selectedComparePersonB || !people.includes(selectedComparePersonB)) selectedComparePersonB = people[1] || people[0] || null;
      const periodOptions = periods.map(period => `<option value="${period}">${formatPeriod(period)}</option>`).join('');
      periodASelect.innerHTML = periodOptions;
      periodBSelect.innerHTML = periodOptions;
      periodASelect.value = selectedComparePeriodA || '';
      periodBSelect.value = selectedComparePeriodB || '';
      [personASelect, personBSelect].forEach(select => { select.innerHTML = people.map(name => `<option value="${name}">${name}</option>`).join(''); });
      personASelect.value = selectedComparePersonA || '';
      personBSelect.value = selectedComparePersonB || '';
      const a = rowForComparison(rows, selectedComparePeriodA, selectedComparePersonA);
      const b = rowForComparison(rows, selectedComparePeriodB, selectedComparePersonB);
      const comparisonLabels = [
        `${selectedComparePersonA || 'Pessoa'} — ${formatPeriod(selectedComparePeriodA)}`,
        `${selectedComparePersonB || 'Pessoa'} — ${formatPeriod(selectedComparePeriodB)}`
      ];
      const kpis = document.getElementById('compareKpis');
      if (kpis) kpis.innerHTML = [a, b].map((row, index) => `<div class="mini-stat"><span>${comparisonLabels[index]}</span><strong>${formatPercent(row?.bf)}</strong><small>${formatKg(row?.weight)} · ${formatMm(row?.sum)}</small></div>`).join('');
      ['compareBfChart', 'compareWeightChart', 'compareFoldsChart', 'compareMeasuresChart'].forEach(destroyChart);
      const labels = comparisonLabels;
      const makeBar = (id, label, values, suffix, colors) => { const canvas = document.getElementById(id); if (!canvas) return; charts[id] = new Chart(canvas, { type: 'bar', data: { labels, datasets: [{ label, data: values, backgroundColor: colors, borderRadius: 8 }] }, options: baseChartOptions(suffix) }); };
      makeBar('compareBfChart', 'BF%', [comparisonValue(a, 'bf'), comparisonValue(b, 'bf')], '%', ['rgba(40,200,255,.75)', 'rgba(191,134,255,.75)']);
      makeBar('compareWeightChart', 'Peso', [comparisonValue(a, 'weight'), comparisonValue(b, 'weight')], ' kg', ['rgba(34,197,94,.75)', 'rgba(245,158,11,.75)']);
      makeBar('compareFoldsChart', 'Soma', [comparisonValue(a, 'sum'), comparisonValue(b, 'sum')], ' mm', ['rgba(244,114,182,.75)', 'rgba(251,146,60,.75)']);
      const measureKeys = [...new Set([...Object.keys(a?.measures || {}), ...Object.keys(b?.measures || {})])];
      const measureCanvas = document.getElementById('compareMeasuresChart');
      if (measureCanvas && measureKeys.length) charts.compareMeasuresChart = new Chart(measureCanvas, { type: 'bar', data: { labels: measureKeys.map(key => measureLabels[key] || key), datasets: [{ label: comparisonLabels[0], data: measureKeys.map(key => a?.measures[key] ?? null), backgroundColor: 'rgba(40,200,255,.75)', borderRadius: 8 }, { label: comparisonLabels[1], data: measureKeys.map(key => b?.measures[key] ?? null), backgroundColor: 'rgba(191,134,255,.75)', borderRadius: 8 }] }, options: baseChartOptions(' cm') });
    }

    function renderReferenceTab() {
      const renderRows = values => values.map(item => '<tr><td>' + item.label + '</td><td>' + item.min + '% a ' + item.max + '%</td></tr>').join('');
      const renderProfiles = (values, sex) => values.map(item => '<article class="reference-profile"><div class="reference-profile-image"><img src="' + CLASSIFICATION_AVATARS[sex][item.key] + '" alt="Ilustração de referência: ' + item.label + '"></div><div><strong>' + item.label + '</strong><span>' + item.min + '%–' + item.max + '%</span><p>' + REFERENCE_DESCRIPTIONS[item.key] + '</p></div></article>').join('');
      const men = BODY_FAT_REFERENCE.M, women = BODY_FAT_REFERENCE.F;
      const menRows = document.getElementById('referenceMenRows'), womenRows = document.getElementById('referenceWomenRows');
      const menProfiles = document.getElementById('referenceMenProfiles'), womenProfiles = document.getElementById('referenceWomenProfiles');
      if (!menRows || !womenRows) return;
      menRows.innerHTML = renderRows(men); womenRows.innerHTML = renderRows(women);
      if (menProfiles) menProfiles.innerHTML = renderProfiles(men, 'M');
      if (womenProfiles) womenProfiles.innerHTML = renderProfiles(women, 'F');
      [['referenceMenChart', 'Homens', men], ['referenceWomenChart', 'Mulheres', women]].forEach(([id, label, values]) => { destroyChart(id); const canvas = document.getElementById(id); if (!canvas) return; charts[id] = new Chart(canvas, { type: 'bar', data: { labels: values.map(item => item.label), datasets: [{ label: label + ' - limite inferior', data: values.map(item => item.min), backgroundColor: 'rgba(40,200,255,.65)', borderRadius: 6 }, { label: 'limite superior', data: values.map(item => item.max), backgroundColor: 'rgba(191,134,255,.75)', borderRadius: 6 }] }, options: baseChartOptions('%') }); });
    }

    function renderAll() {
      const rows = getRows();
      renderKpis(rows);
      renderDashboardCharts(rows);
      renderSummary(rows);
      renderPersonCards(rows);
      renderPeriodTab(rows);
      renderMeasureTab(rows);
      renderTrainingTab(rows);
      renderDetailedReports(rows);
      renderComparisonTab(rows);
      renderReferenceTab();
    }

    function showTab(tabId) {
      const nav = document.querySelector('.tabs');
      const menuToggle = document.getElementById('menuToggle');
      if (nav) nav.classList.remove('menu-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.tab-btn').forEach(button => { const active = button.dataset.tab === tabId; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
      document.querySelectorAll('.section').forEach(section => { const active = section.id === tabId; section.classList.toggle('active', active); section.toggleAttribute('hidden', !active); });
      setTimeout(renderAll, 0);
    }

    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) menuToggle.addEventListener('click', () => { const nav = document.querySelector('.tabs'); const open = nav.classList.toggle('menu-open'); menuToggle.setAttribute('aria-expanded', String(open)); });

    document.querySelectorAll('.tab-btn').forEach(button => {
      button.addEventListener('click', () => showTab(button.dataset.tab));
    });

    document.getElementById('summaryPersonFilter').addEventListener('change', event => { selectedSummaryPerson = event.target.value; renderAll(); showTab('dashboard'); });
    document.getElementById('summaryPeriodFilter').addEventListener('change', event => { selectedSummaryPeriod = event.target.value; renderAll(); showTab('dashboard'); });
    document.getElementById('printReport').addEventListener('click', () => window.print());
    document.getElementById('exportMeasurements').addEventListener('click', () => downloadJson('data-backup.json', DEFAULT_MEASUREMENTS));
    document.getElementById('exportTraining').addEventListener('click', () => downloadJson('training-progress-backup.json', TRAINING_PROGRESS_RAW));
    document.getElementById('importMeasurements').addEventListener('change', event => { if (event.target.files[0]) importJsonFile(event.target.files[0], 'measurements'); event.target.value = ''; });
    document.getElementById('importTraining').addEventListener('change', event => { if (event.target.files[0]) importJsonFile(event.target.files[0], 'training'); event.target.value = ''; });
    document.getElementById('clearLocalData').addEventListener('click', () => { localStorage.removeItem('measurements-override'); localStorage.removeItem('training-progress-override'); location.reload(); });
    document.getElementById('themeToggle').addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('site-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); });
    if (localStorage.getItem('site-theme') === 'light') document.body.classList.add('light-theme');

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
    document.getElementById('reportPersonFilter').addEventListener('change', event => { selectedReportPerson = event.target.value; renderAll(); showTab('relatorios'); });
    document.getElementById('comparePeriodA').addEventListener('change', event => { selectedComparePeriodA = event.target.value; renderAll(); showTab('comparacao'); });
    document.getElementById('comparePeriodB').addEventListener('change', event => { selectedComparePeriodB = event.target.value; renderAll(); showTab('comparacao'); });
    document.getElementById('comparePersonA').addEventListener('change', event => { selectedComparePersonA = event.target.value; renderAll(); showTab('comparacao'); });
    document.getElementById('comparePersonB').addEventListener('change', event => { selectedComparePersonB = event.target.value; renderAll(); showTab('comparacao'); });

    loadMeasurements()
      .then(() => {
        selectedPeriod = getLatestPeriod(getRows());
        selectedMeasurePeriod = selectedPeriod;
        renderAll();
      })
      .catch(error => {
        console.error(error);
        document.querySelector("main").insertAdjacentHTML("afterbegin", "<div class=\"note\" role=\"alert\">Data could not be loaded. Publish data.json with the page.</div>");
      });
  
