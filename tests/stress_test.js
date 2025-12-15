import http from 'k6/http';
import { check, sleep } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data';
import exec from 'k6/execution';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '5s', target: 5 },
    { duration: '2s', target: 50 },
    { duration: '2s', target: 50 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate < 0.05'],
    http_req_duration: ['p(95) < 2000'],
  }
};

const csvData = new SharedArray('usuarios', () =>
  papaparse.parse(open('./usuarios.csv'), { header: true }).data
);

export default function () {
  const userIndex = exec.vu.idInTest % csvData.length;
  const USER = csvData[userIndex].email;
  const PASS = 'user123';
  const BASE_URL = 'http://test-api.k6.io';

  const res = http.post(`${BASE_URL}/auth/token/login/`, {
    username: USER,
    password: PASS,
  });

  check(res, {
    'login 200': (r) => r.status === 200,
    'token gerado': (r) => r.json('access'),
  });

  if (res.status !== 200) {
    console.error(`Erro login | user=${USER} | status=${res.status}`);
  }

  sleep(1);
}

export function handleSummary(data) {
  return {
    'studying_k6.html': htmlReport(data),
  };
}
