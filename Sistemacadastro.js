                                    //Criação do evento//



                       //Escolha do Palestrante/Palestra //
console.log('Por favor escolha a Palestra que você gostaria de atender')


     //Inicio de registro, verificação para confirmar se a palestra já ocorreu ou não//
const data = 'datapresente'
if(data == 'datapresente'){
    console.log("Por favor insira sua idade");} 
    else {
    console.log ("A palestra que está tentando se cadastrar já ocorreu, sentimos muito"); }
    



        //Check de idade, o participante a ser cadastrado deve ser maior de 18 anos//
    var idade =18;
if(idade >=18){
console.log("Por favor aguarde enquanto checamos a disponilidade da vaga");} 
else {
console.log ("Para atender esta palestra você precisa ser maior de idade"); }


         //Verificação do limite de vagas, o máximo de atendentes a palestra é 100 //
var vagalimite = 100
if(vagalimite <=100){
    console.log("Seu cadastro foi realizado com sucesso");} 
    else {
    console.log ("Sentimos muito, mas as vagas para esta palestra já foram esgotadas"); }
