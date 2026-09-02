
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
            {"nome": "Fly", "series": "3 x 12"}, {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Remada alta supinada", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Desenvolvimento máquina", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10-12"}, {"nome": "Rosca W", "series": "3 x 12"}
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
            {"nome": "Fly", "series": "3 x 12"}, {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Remada alta supinada", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Desenvolvimento máquina", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10-12"}, {"nome": "Rosca W", "series": "3 x 12"}
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
            {"nome": "Supino reto", "series": "3 x 12"}, {"nome": "Fly", "series": "3 x 12"}, {"nome": "Puxada alta individual", "series": "3 x 12"}, {"nome": "Remada baixa triângulo", "series": "3 x 12"}, {"nome": "Elevação lateral", "series": "3 x 12-15"}, {"nome": "Tríceps paralela", "series": "3 x 10"}, {"nome": "Rosca Scott", "series": "3 x 12"}, {"nome": "Cadeira flexora", "series": "4 x 8"}, {"nome": "Cadeira extensora", "series": "4 x 10"}
          ]}
        ]
      }
};


    const TRAINING_PROGRESS = {
      "Titio Douglas": {
        "2026-09-02": {
          "titulo": "Upper",
          "observacao": "Treino realizado em 02/09/2026 (quarta-feira). A sessão substituiu o treino de segunda-feira.",
          "exercicios": [
            {"numero": 1, "nome": "Fly", "series": [{"peso": 33, "repeticoes": 12}, {"peso": 40, "repeticoes": 9}, {"peso": 40, "repeticoes": 6, "observacao": "meia na falha"}]},
            {"numero": 2, "nome": "Supino reto", "series": [{"peso": 50, "repeticoes": 12}, {"peso": 50, "repeticoes": 12}, {"peso": 50, "repeticoes": 12}]},
            {"numero": 3, "nome": "Remada alta supinada", "series": [{"peso": 40, "repeticoes": 12}, {"peso": 47, "repeticoes": 12}, {"peso": 47, "repeticoes": 12}]},
            {"numero": 4, "nome": "Remada baixa triângulo", "series": [{"peso": 26, "repeticoes": 12}, {"peso": 26, "repeticoes": 12}, {"peso": 26, "repeticoes": 12, "observacao": "pegada dupla"}]},
            {"numero": 5, "nome": "Desenvolvimento máquina", "series": [], "observacao": "N/A"},
            {"numero": 6, "nome": "Elevação lateral", "series": [{"peso": 15, "repeticoes": 12}, {"peso": 15, "repeticoes": 12}, {"peso": 15, "repeticoes": 12}]},
            {"numero": 7, "nome": "Tríceps paralela", "series": [{"peso": 50, "repeticoes": 12}, {"peso": 55, "repeticoes": 12}, {"peso": 60, "repeticoes": 12}]},
            {"numero": 8, "nome": "Rosca W", "series": [{"peso": 26.25, "repeticoes": 12}, {"peso": 26.25, "repeticoes": 12}, {"peso": 26.25, "repeticoes": 10}]}
          ]
        }
      }
    };

    const CLASSIFICATION_AVATARS = {
      essential: "assets/felipe.png",
      athlete: "assets/andre.png",
      fitness: "assets/tioguto.png",
      average: "assets/tiamah.png",
      aboveAverage: "assets/titiodouglas.png",
      high: "assets/ines.png"
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

    function getRawMeasurements() {
      return DEFAULT_MEASUREMENTS;
    }

    async function loadMeasurements() {
      const embedded = document.getElementById('measurements-data');
      if (location.protocol === "file:" && embedded) {
        DEFAULT_MEASUREMENTS = JSON.parse(embedded.textContent);
        return;
      }
      const response = await fetch('data.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('data.json could not be loaded');
      DEFAULT_MEASUREMENTS = await response.json();
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
      return calculate({ id: `${period}-${name}`, period, name, age, weight, sex, folds, measures, measured, raw: data || {} });
    }

    function normalizeMeasurements(raw) {
      let rows = [];
      Object.entries(raw || {}).forEach(([period, people]) => {
        Object.entries(people || {}).forEach(([name, data]) => rows.push(normalizeRow(period, name, data)));
      });
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

      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
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
        ? [[14, "essential", "Essencial"], [20, "athlete", "Atleta"], [24, "fitness", "Fitness"], [31, "average", "Média"], [38, "aboveAverage", "Acima da média"], [Infinity, "high", "Alta"]]
        : [[6, "essential", "Essencial"], [13, "athlete", "Atleta"], [17, "fitness", "Fitness"], [24, "average", "Média"], [31, "aboveAverage", "Acima da média"], [Infinity, "high", "Alta"]];
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
      const avatar = CLASSIFICATION_AVATARS[classification.key];

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




    function renderProgressVisual(personName, exerciseName) {
      const records = TRAINING_PROGRESS[personName] || {};
      const entries = Object.entries(records).flatMap(([date, record]) => record.exercicios.filter(item => !exerciseName || item.nome === exerciseName).map(item => ({ date, item })));
      const selected = entries.filter(entry => !exerciseName || entry.item.nome === exerciseName);
      const labels = selected.map(entry => formatPeriod(entry.date));
      const maxLoads = selected.map(entry => entry.item.series.length ? Math.max(...entry.item.series.map(set => set.peso)) : null);
      const volumes = selected.map(entry => entry.item.series.reduce((sum, set) => sum + (set.peso * set.repeticoes), 0) || null);
      const timeline = document.getElementById('trainingProgressTimeline');
      if (timeline) timeline.innerHTML = selected.map(entry => `<article class="progress-timeline-item"><time>${formatPeriod(entry.date)}</time><div><strong>${entry.item.nome}</strong><p>${entry.item.series.length ? entry.item.series.map(set => `${formatNumber(set.peso, 2)} kg × ${set.repeticoes}`).join(' · ') : 'N/A'}</p></div></article>`).join('') || '<p class="muted">Nenhum registro para este exercício.</p>';
      destroyChart('trainingProgressChart');
      const canvas = document.getElementById('trainingProgressChart');
      if (!canvas || !selected.length) return;
      charts.trainingProgressChart = new Chart(canvas, { type: 'line', data: { labels, datasets: [
        { label: 'Maior carga (kg)', data: maxLoads, borderColor: '#28c8ff', backgroundColor: 'rgba(40,200,255,.16)', tension: .25, fill: true, yAxisID: 'y' },
        { label: 'Volume (kg × reps)', data: volumes, borderColor: '#bf86ff', backgroundColor: 'rgba(191,134,255,.12)', tension: .25, yAxisID: 'y1' }
      ] }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { labels: { color: '#f4f7ff' } } }, scales: { x: { ticks: { color: '#d7e3fb' }, grid: { color: 'rgba(148,163,184,.10)' } }, y: { beginAtZero: true, ticks: { color: '#d7e3fb' } }, y1: { beginAtZero: true, position: 'right', ticks: { color: '#d7e3fb' }, grid: { drawOnChartArea: false } } } } });
    }

    function renderTrainingProgress(personName) {
      const records = TRAINING_PROGRESS[personName];
      if (!records) return '<section class="workout-section"><p class="muted">Nenhuma evolução registrada para esta pessoa.</p></section>';
      const exerciseNames = [...new Set(Object.values(records).flatMap(record => record.exercicios.map(item => item.nome)))];
      return `<section class="workout-section">
        <div class="workout-head"><div><h3>Gráficos de progressão</h3><div class="muted">Acompanhe carga máxima e volume acumulado por exercício.</div></div></div>
        <label for="progressExerciseSelect">Exercício</label>
        <select id="progressExerciseSelect">${exerciseNames.map(name => `<option value="${name}">${name}</option>`).join('')}</select>
        <div class="chart-wrap small" style="margin-top:14px"><canvas id="trainingProgressChart"></canvas></div>
        <h4 style="margin:18px 0 10px">Timeline do exercício</h4>
        <div class="progress-timeline" id="trainingProgressTimeline"></div>
      </section>` + Object.entries(records).sort(([a], [b]) => b.localeCompare(a)).map(([date, record]) => `
        <section class="workout-section">
          <div class="workout-head"><div><h3>${record.titulo} — ${formatPeriod(date)}</h3><div class="muted">${record.observacao}</div></div></div>
          <div class="table-wrap">
            <table class="progress-table"><thead><tr><th>#</th><th>Exercício</th><th>Séries realizadas</th><th>Observação</th></tr></thead><tbody>
              ${record.exercicios.map(item => `<tr><td><strong>${item.numero}</strong></td><td><strong>${item.nome}</strong></td><td>${item.series.length ? item.series.map(set => `${formatNumber(set.peso, 2)} kg × ${set.repeticoes}`).join('<br>') : 'N/A'}</td><td>${[...new Set(item.series.map(set => set.observacao).filter(Boolean).concat(item.observacao || []))].join('; ') || '—'}</td></tr>`).join('')}
            </tbody></table>
          </div>
        </section>`).join('');
    }

    function renderTrainingTab(rows) {
      const people = getPeople(rows);
      const cards = document.getElementById('trainingPersonCards');
      const content = document.getElementById('trainingContent');
      if (!cards || !content) return;
      const available = people.filter(name => TRAINING_PLANS[name]);
      if (!selectedPersonName || !TRAINING_PLANS[selectedPersonName]) selectedPersonName = available[0] || null;
      cards.innerHTML = available.map(name => `<button type="button" class="person-card ${name === selectedPersonName ? 'active' : ''}" data-training-person="${name}"><strong>${name}</strong><small>${TRAINING_PLANS[name].titulo}</small></button>`).join('');
      content.innerHTML = selectedPersonName ? `
        <div class="workout-tabs training-view-tabs" role="tablist" aria-label="Seções do treinamento">
          <button type="button" class="workout-tab active" data-training-view="plan">Plano de treino</button>
          <button type="button" class="workout-tab" data-training-view="evolution">Evolução</button>
        </div>
        <div data-training-pane="plan">${renderWorkoutSection(selectedPersonName)}</div>
        <div data-training-pane="evolution" hidden>${renderTrainingProgress(selectedPersonName)}</div>` : '<p class="note">Nenhum treinamento cadastrado.</p>';
      cards.querySelectorAll('[data-training-person]').forEach(card => card.addEventListener('click', () => {
        selectedPersonName = card.dataset.trainingPerson;
        renderTrainingTab(rows);
      }));
      content.querySelectorAll('[data-training-view]').forEach(tab => tab.addEventListener('click', () => {
        content.querySelectorAll('[data-training-view]').forEach(item => item.classList.toggle('active', item === tab));
        content.querySelectorAll('[data-training-pane]').forEach(pane => pane.hidden = pane.dataset.trainingPane !== tab.dataset.trainingView);
        if (tab.dataset.trainingView === 'plan') bindWorkoutTabs();
      }));
      bindWorkoutTabs();
      const progressSelect = content.querySelector('#progressExerciseSelect');
      if (progressSelect) {
        progressSelect.addEventListener('change', () => renderProgressVisual(selectedPersonName, progressSelect.value));
        renderProgressVisual(selectedPersonName, progressSelect.value);
      }
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
  
