const venom = require('venom-bot');

venom
    .create({
        session: 'Assistente Virtual' //name of session
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });



function start(client) {
    client.onMessage(async (message) => {

        async function sendMenu() {
            const menuMessage = 'Das opções abaixo, qual você mais se identifica com o seu problema?\n1- Normas do instituto\n2- Realização de matrícula\n3- Informações sobre o uniforme\n9- Sair';
            await client.sendText(message.from, menuMessage);
        }

        async function escolha(){
            const escolhaMenssage = 'Deseja continuar o atendimento ? \n8- Sim \n9-Não';
            await client.sendText(message.from, escolhaMenssage);
        }

        if (message.body === '/start' && message.isGroupMsg === false) {
            await client.sendText(message.from, 'Olá, você está falando com o nosso assistente virtual!');
            await sendMenu();
        }

        if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Acesse as normas de convivencia pelo link a seguir: https://acaonsfatima.org.br/2022/01/22/normas-2023/")
            await escolha()
        }

        else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A Realização da matricula é feita presencialmente, se informe no numero TEL: (11) 5687-8876/(11) 3798-5036 para ver se voce foi aprovado no precesso seletivo para a realização da matricula")
            await escolha()
        }

        else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A compra dos uniformes fica no endereço:  Adão Rocumback, 50 - Veleiros. TEL: (11) 95075-0011")
            await escolha()
        }

        if (message.body === '8' && message.isGroupMsg === false)
            await sendMenu();

        else if (message.body === '9' && message.isGroupMsg === false)
            await client.sendText(message.from, "Obrigado e até logo :)")

    });
}