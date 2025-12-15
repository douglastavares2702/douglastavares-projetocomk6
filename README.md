# k6 Performance Tests

This repository contains performance, load, and stress tests implemented using **k6**.
The scenarios simulate real user behavior using data from **CSV** and **JSON** files.

---

## 📁 Project Structure

K6/
├── data/
│   ├── dados.json        # JSON data for data-driven tests
│   └── usuarios.csv      # Users used in login tests
│
├── tests/
│   ├── load_test_from_json.js  # Data-driven load test (GET)
│   ├── stress_test.js          # Stress test for login endpoint
│   └── user_register.js        # Load test for user registration
│
├── reports/
│   └── studying_k6.html   # HTML report generated with k6-reporter
│
└── README.md

## 🧪 Test Scenarios

🔹 Load Test – JSON Data
File: tests/load_test_from_json.js

- Reads crocodile IDs from a JSON file
- Sends GET requests to `/public/crocodiles/{id}`
- Validates HTTP 200 responses
- Simulates user think time with `sleep(1)`
Run:
k6 run tests/load_test_from_json.js

🔹 Stress Test – Login with CSV Users
File: tests/stress_test.js
Uses CSV data to simulate multiple users logging in
Rapid ramp-up to identify system limits
Thresholds enabled to validate error rate and performance
Run:
k6 run tests/stress_test.js

🔹 Load Test – User Registration
File: tests/user_register.js
Simulates concurrent user registration
Generates unique random emails
Validates HTTP 201 responses
Evaluates stability under moderate load
Run:
k6 run tests/user_register.js

🛠️ Requirements
Install k6
https://k6.io/docs/getting-started/installation/
Node.js is not required.

📊 Reports
HTML reports are generated locally using k6-reporter and stored in the reports/ directory.

👤 Author
Douglas Tavares
QA / Test Analyst

🔗 LinkedIn:
https://www.linkedin.com/in/douglas-tavares-02127567/