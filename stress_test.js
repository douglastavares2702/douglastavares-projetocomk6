import http from 'k6/http';
import { check, sleep } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data';

export const options = {
    stages: [
        { duration: '5s', target: 5 },      // ramp-up inicial
        { duration: '5s', target: 5 },
        { duration: '2s', target: 50 },     // sobe rápido para 50
        { duration: '2s', target: 50 },
        { duration: '5s', target: 0 },      // ramp-down
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'],   // regras de sucesso
    }
}

const csvData = new SharedArray(`Ler dados`, function(){
    return papaparse.parse(open(`./usuarios.csv`), {header: true}).data;
    });

export default function () {      
    const USER = csvData[Math.floor(Math.random() * csvData.length)].email
    const PASS = `user123`;
    const BASE_URL = `http://test-api.k6.io`;  

    console.log(USER);

    const res = http.post(`${BASE_URL}/auth/token/login/`, {
        username: USER,
        password: PASS
    });

    check(res, {
        'sucesso login': (r) => r.status === 200,
        'token gerado': (r) => r.json('access') !== ''
    });
}