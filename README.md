# >>> stress_test <<<
# Teste de Carga com k6 – Login com Usuários de CSV
Este projeto utiliza o k6 para realizar um teste de carga no endpoint de login da API `test-api.k6.io`, simulando usuários reais carregados a partir de um arquivo CSV. O objetivo é validar performance, estabilidade e taxa de erros da API sob diferentes níveis de carga.
---
## 📌 Requisitos
Antes de rodar o teste, instale:
- **k6** → https://k6.io/docs/getting-started/installation/
- Node NÃO é necessário (o k6 roda o script diretamente)
- Arquivo `usuarios.csv` no mesmo diretório do script