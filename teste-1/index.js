const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main(){
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do heroi")
        .option('-p, --poder [value]', "Poder do heroi")
        .option('-i, --id [value]', "Id do heroi")
        .option('-c, --cadastrar', "Cadastrar um heroi")
        .option('-l, --listar', "Listar um heroi")
        .option('-r, --remover', "Remove um heroi pelo id")
        .parse(process.argv)

    const heroi = new Heroi(Commander)

    try{
        if(Commander.cadastrar){

            delete heroi.id

            const resultado = await Database.cadastrar(heroi)
            if(!resultado){
                console.error('Heroi não foi cadastrado!')
                return;
            }
            console.log('Heroi Cadastrado com sucesso!')
        }
        if(Commander.listar){
            const resultado = await Database.listar()
            console.log(resultado)
            return
        }
        if(Commander.remover){
            const resultado = await Database.remover(heroi.id)
            if(!resultado){
                console.error('Não foi remover o heroi.')
                return
            }
            console.log('Heroi removido com sucesso')
        }
    }
    catch(error){
        console.error("Ocorreu um erro", error)
    }
}

main()