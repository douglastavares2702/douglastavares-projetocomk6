🚀 Testes de Carga com K6 — Login com Usuários via CSV

Este repositório contém um conjunto de scripts para realizar testes de performance, carga e estresse utilizando o k6.
Os testes simulam múltiplos usuários realizando login na API a partir de um arquivo CSV.

📌 Objetivos do Projeto

Validar tempo de resposta da API

Avaliar comportamento sob diferentes níveis de carga

Medir estabilidade, resiliência e taxa de erros

Simular usuários reais usando dados do arquivo usuarios.csv

📁 Estrutura do Projeto

├── script.js          # Teste básico

├── script_1.js        # Variação de teste

├── stress_test.js     # Teste de estresse

├── usuarios.csv       # Lista de usuários usados no teste

├── dados.json         # Dados complementares

└── README.md          # Documentação do projeto

🛠️ Requisitos:

Instalar o k6 → https://k6.io/docs/getting-started/installation/

Node NÃO é necessário (k6 executa os scripts diretamente)

Arquivo usuarios.csv deve estar no mesmo diretório do script

▶️ Como Executar:

k6 run "nome_do_arquivo"

📈 Exemplo de Saída do K6

Você verá métricas como:

http_req_duration

http_req_failed

iteration_rate

vus e vus_max

🤝 Contribuições:

Sugestões e melhorias são sempre bem-vindas!

Abra uma issue ou envie um pull request.

💬 Autor:

Douglas Tavares

Analista de Testes / QA

🔗 GitHub: https://github.com/douglastavares2702
