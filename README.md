<<<<<<< HEAD
🚀🚀 🚀  load_test_from_json.js 🚀🚀 🚀

This script performs a data-driven load test using k6, reading crocodile IDs from a JSON file and sending GET requests to the public API.

🧪 What This Test Does

Loads crocodile IDs from a JSON file
Randomly selects one ID per iteration
Sends a GET request to /public/crocodiles/{id}
Validates the response status (expected: 200)
Simulates real user behavior using sleep(1)

▶️ How to Run
k6 run data_driven_load_test.js
_______________________________________________________________________________

🚀🚀 🚀  stress_test.js 🚀🚀 🚀 

Load Test with k6 – Login Using CSV Users

This project uses k6 to perform a load test on the login endpoint of the test-api.k6.io API, simulating real users loaded from a CSV file.

The goal is to validate the API's performance, stability, and error rate under different load levels.

📌 Requirements

Before running the test, install:

k6 → https://k6.io/docs/getting-started/installation/

Node.js is NOT required (k6 runs the script directly)

A usuarios.csv file in the same directory as the script

_______________________________________________________________________________

🚀🚀 🚀  user_register.js 🚀🚀 🚀  

This script performs a load test on the user registration of the public API | http://test-api.k6.io.
It evalutes performance, stability, and error handing when multiple virtual users attenpt to register simultaneously.

📌 Purpose of the test
The goal of this test is to validate:
If the user registration endpoint responds correctly.
How the API behaves under a moderate load (10 users).
If the API maintains acceptable response time.
If new users can be created without failures.
If the services returns the expected status code: 201.

🧪 What the test does
A unique random email is generated.
A registration payload is created with basic user information.
A POST request is sent to /user/register.
The response is validated
A 1s pause simulates real user behavior.

🏗️ Test Configuration
The script uses a simple stage:
stages: [
  { duration: '10s', target: 10 }
]
Ramp up to 10 virtual users over 10 seconds.

📈 Thresholds
These thresholds ensure the API meets minimum performance standards:
checks: ['rate > 0.95'],

▶️ How to Run
k6 run user_register.js
=======
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

🔗 Linkedin: https://www.linkedin.com/in/douglas-tavares-02127567/
>>>>>>> 4b6b369b5384a621aac88ebc3871d3a898efe3db
