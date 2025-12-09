import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [{ duration: '10s', target: 10 }],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500'],
    }
};

export default function () {

    const BASE_URL = `http://test-api.k6.io`;    
    const USER = `${Math.random()}@mail.com`;
    const PASS = `user123`;

    const payload = {
        username: USER,
        first_name: 'crocodilo',
        last_name: 'dino',
        email: USER,
        password: PASS
    };

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Agora sim o POST correto
    const res = http.post(
        `${BASE_URL}/user/register/`,
        JSON.stringify(payload),
        params
    );

    check(res, {
        'status 201 criado': r => r.status === 201,
    });

    sleep(1);
}