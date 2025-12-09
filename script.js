// Importa o módulo http do k6, usado para fazer requisições HTTP.
import http from 'k6/http';
// Importa a função check, usada para criar validações (asserts) nas respostas.
import { check, sleep, SharedArray } from 'k6';

// Configurações do teste (Options); Dentro de Options, faz parte da configuração
export const options    =   {
// Stages já define o tempo do teste, então não poderá ser usado junto com duration    
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 }
    ],
// "vus" = Virtual Users (usuários virtuais).
// Define quantos usuários estarão ativos ao mesmo tempo.
    // vus: 100,
// "duration" = tempo total do teste.
    // duration: '3s',
// "thresholds" = critérios mínimos para considerar o teste aprovado.
// Aqui exigimos que 99% dos checks sejam verdadeiros.
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200']
    }
}

const data = new SharedArray('Leitura do json', function(){
    return JSON.parse(open('./dados.json')).crocodilos
});

export default function(){
    const crocodilo = data[Math.floor(Math.random() * data.length)].id
    console.log(crocodilo);
    const BASE_URL = `http://test-api.k6.io/public/crocodiles/${crocodilo}`;

    const res = http.get(BASE_URL);
// Aqui estamos verificando se o status é 200 (OK).
    check(res, {
        'status code 200': (r) => r.status === 200
    });

    sleep(1)   

}