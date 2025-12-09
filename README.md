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
_______________________________________________________________________________

🚀 Load Testing with K6 — User Login via CSV

This repository contains a set of scripts to perform performance, load, and stress tests using k6.
The tests simulate multiple users logging into an API using data from a CSV file.

📌 Project Objectives

Validate the API response time

Evaluate behavior under different load levels

Measure stability, resilience, and error rates

Simulate real users using data from usuarios.csv

📁 Project Structure
├── script.js          # Basic test
├── script_1.js        # Test variation
├── stress_test.js     # Stress test
├── usuarios.csv       # User list for the test
├── dados.json         # Additional data
└── README.md          # Project documentation

🛠️ Requirements

Install k6 → https://k6.io/docs/getting-started/installation/

Node.js is NOT required (k6 runs scripts directly)

The file usuarios.csv must be in the same directory as the script

▶️ How to Run
k6 run "file_name.js"

📈 Example of K6 Output

You will see metrics such as:

http_req_duration

http_req_failed

iteration_rate

vus and vus_max

🤝 Contributions

Suggestions and improvements are always welcome!
Feel free to open an issue or submit a pull request.

💬 Author

Douglas Tavares
QA / Test Analyst

🔗 LinkedIn: https://www.linkedin.com/in/douglas-tavares-02127567/