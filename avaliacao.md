# Skill: Avaliação corporal e de treinamento

## Objetivo

Produzir uma avaliação curta, técnica e compreensível de uma pessoa cadastrada no sistema. A avaliação deve combinar, quando disponíveis:

- medidas corporais e percentual de gordura estimado;
- peso e evolução entre períodos;
- classificação de referência do BF%;
- plano de treinamento;
- registros de evolução dos treinos.

O resultado deve ser um micro-relatório útil para tomada de decisão, sem linguagem genérica de IA e sem substituir avaliação médica, nutricional ou de educação física.

## Fontes de dados

Use os arquivos do projeto nesta ordem:

1. `data.json`: cadastro em `people` e avaliações em `measurements`.
2. `training-progress.json`: pessoas em `people` e sessões realizadas em `sessions`.
3. O plano de treino cadastrado no sistema, quando estiver disponível.

Sempre localize a pessoa por `people.id`/`pessoaId`. Nunca associe medições ou treinos pela posição do objeto, pelo número do exercício ou pela ordem em que aparecem no JSON.

Para exercícios, compare sessões pelo nome normalizado do exercício: ignore maiúsculas, minúsculas, acentos e espaços duplicados. Não use o número do exercício como identidade, pois a ordem pode mudar entre Upper, Lower e Full body.

## Modo de análise

Antes de iniciar, verifique se a pessoa pediu um modo específico:

- `duas últimas medições`: compare somente o período mais recente com o imediatamente anterior. Use para acompanhamento rápido.
- `todo o histórico`: analise todos os períodos, tendências, oscilações e melhor/pior momento registrado.
- Se o usuário não escolher, use `duas últimas medições` e informe isso no relatório.

O modo escolhido vale para medidas, peso, BF% e dobras. Os treinos e evoluções consideram todos os registros disponíveis.

## Fluxo de avaliação

### 1. Identificação

- Receba o nome da pessoa.
- Encontre o cadastro correspondente e seu ID.
- Se houver mais de uma pessoa semelhante, peça confirmação.
- Se a pessoa não existir, informe isso de forma direta.

### 2. Medições

No modo `duas últimas medições`, use o período mais recente com dados válidos e compare com o anterior. No modo `todo o histórico`, ordene todos os períodos e descreva a tendência geral.

Observe:

- BF% estimado e sua variação;
- peso e sua variação;
- soma das dobras;
- medidas de cintura, abdômen, quadril, peito, coxa e braço;
- consistência entre peso, dobras e medidas;
- ausência de dados ou mudanças que impeçam uma conclusão segura.
- observações contextuais do registro, como período menstrual, retenção de líquidos, horário, alimentação, treino recente ou condição de coleta.

Não invente valores. Quando faltar uma medida, escreva `não informado` e siga com o que for possível analisar.

Interprete BF% como estimativa do protocolo de dobras utilizado pelo sistema. Para menores de idade, idosos ou pessoas fora da faixa do protocolo, destaque que o número é apenas uma referência visual.

### 3. Treino e evolução

Se houver plano de treino, resuma o objetivo e a frequência sem repetir a ficha inteira.

Se houver sessões em `training-progress.json`:

- agrupe por nome normalizado do exercício;
- compare carga máxima, repetições e volume quando houver dados suficientes;
- calcule, quando possível, carga máxima, repetições totais e volume da sessão (`peso × repetições`);
- informe a mudança absoluta e percentual quando houver base comparável;
- destaque progressão, estabilidade, queda ou ausência de registro;
- compare somente exercícios com o mesmo nome normalizado e sinalize quando máquina, implemento ou contexto puderem mudar a leitura;
- considere `N/A` e repetições ausentes como dados não informados;
- não trate aumento de carga isolado como prova de ganho muscular;
- relacione a evolução somente com os exercícios que realmente possuem registros comparáveis.

### 4. Nutrição

Faça apenas observações gerais e práticas, sem prescrever dieta, calorias, suplementos ou condutas clínicas. Exemplos permitidos:

- regularidade de proteína e refeições;
- hidratação;
- consumo de alimentos minimamente processados;
- coerência entre objetivo, recuperação e rotina de treino;
- importância do sono e da recuperação.

Se houver objetivo explícito, relacione a observação nutricional ao objetivo. Se não houver, não suponha que a pessoa quer emagrecer ou ganhar massa.

## Critérios de interpretação

- Dê mais peso à tendência de dois ou mais períodos do que a uma medição isolada.
- Não conclua perda de gordura apenas porque o peso caiu; procure também BF%, dobras e medidas.
- Não conclua ganho de massa apenas porque o peso subiu; verifique medidas, desempenho e contexto.
- Uma queda de cintura/abdômen junto com BF% estável ou menor é um sinal favorável, mas deve ser descrita como tendência.
- Se peso, BF%, dobras e medidas apontarem em direções diferentes, declare que o cenário é misto e não force uma conclusão única.
- Dê preferência à soma das dobras e à cintura/abdômen para acompanhar gordura, sempre considerando a qualidade da coleta.
- Diferenças pequenas podem estar dentro da variação normal da medição.
- A classificação de BF% é uma referência, não diagnóstico de obesidade.
- Em adolescentes e idosos, seja especialmente conservador na interpretação.

## Formato obrigatório da resposta

Entregue um micro-relatório curto, com linguagem simples. O limite de 8 linhas vale para a parte principal; o Resumo geral aparece sempre ao final:

```text
Avaliação — [Nome] | [data mais recente]

• Corpo: [BF%, peso e principal mudança]
• Medidas: [principal evolução ou “sem comparação suficiente”]
• Treino: [presença do plano e frequência, se houver]
• Evolução: [cargas/volume que subiram, o que ficou estável e ressalvas de comparação]
• Leitura geral: [uma conclusão objetiva]
• Próximo foco: [uma recomendação prática e segura]

Resumo geral: [síntese final da pessoa, reunindo composição corporal, medidas, treino, evolução e principal ponto de atenção].

Observação: BF% por dobras é uma estimativa; [alerta específico, se necessário].
```

Se não houver treino ou evolução, não crie uma seção artificial: escreva `Treino/evolução: não informado.`

O Resumo geral deve responder: como a pessoa está hoje, qual tendência aparece no modo escolhido, o que evolui melhor e qual é o principal cuidado para o próximo acompanhamento.

O texto deve ser profissional, direto e acolhedor. Evite frases vagas como “continue assim”, “seu corpo está ótimo” ou “a IA recomenda”. Explique qualquer termo técnico na própria frase.
