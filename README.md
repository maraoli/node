
### Rodando Testes Mocha:

```
npm run test

npm t
```
### SCRIPTS de teste:
```

-w - deixar rodando os testes

mocha --timeout 10000 mocha/test.js

"test": "mocha --timeout 10000 teste-1/test.js",
```

### NOCK

Diminui o tempo de retorno nas requisições mas padroniza a entrada do request.

### Rodar um único teste:
```
 it.only(...)
```