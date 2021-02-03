# Olá dev aventureiro!

Neste respositório utilizamos o Commander
para atualizar, remover e inserir usuários na
nossa base de dados.


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

### Commander/ COMANDOS:

```
node teste-1/index.js --help

- Retorna a versão
node teste-1/index.js -V

- Solicita cadastro
node teste-1/index.js -c

- Lista os herois cadastrados
node teste-1/index.js -l

- Remove um heroi por id
node teste-1/index.js -r -i 1598902318361

- Atualizar Heroi
node teste-1/index.js -a 1598902316414 -n Monica
node teste-1/index.js -a 1598902316414 -p "São são"

node teste-1/index.js -c -n Flash -p Speed
node teste-1/index.js -c -n Aquaman -p Marinho
```

Serve para criar opções de linha de comando.
