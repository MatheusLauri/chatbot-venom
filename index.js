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
            const menuMessage = '1- Padaria 🥖🍰 \n2- Uniforme dos Estudantes 👕 \n3- Cursos Oferecidos 📚 \n4- Matrícula 📝 \n5- Processo Seletivo 📋 \n6- Informações do Instituto \n9- Encerrar Atendimento 🛑';
            await client.sendText(message.from, menuMessage);
        }

        async function escolha() {
            const escolhaMenssage = 'Deseja continuar o atendimento ? \n8- Sim \n9-Não';
            await client.sendText(message.from, escolhaMenssage);
        }

        if (message.body === '/start' && message.isGroupMsg === false) {
            await client.sendText(message.from,
                'Olá! 😊 Bem-vindo ao Assistente Virtual do Instituto Social Nossa Senhora de Fátima! Para melhor atendê-lo, escolha uma das categorias abaixo que corresponda à sua dúvida:');
            await sendMenu();
        }

        else if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "• Nosso horário de funcionamento é das 7h às 19h de segunda a sábado, e aos domingos, das 8h às 13h. \n• Confira nossa variedade de produtos, incluindo pães, bolos, salgados e doces. Os tipos e preços estão listados abaixo.")
            await escolha()
        }

        else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "O uso do uniforme é obrigatório para todos os estudantes. Você pode adquirir o uniforme no endereço: Adão Rocumback, 50 - Veleiros. Mais informações pelo telefone: (11) 95075-0011.")
            await escolha()
        }

        else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Descubra nossos cursos técnicos, cada um com sua própria carga horária e uma jornada de aprendizado única. A certificação é concedida ao concluir com sucesso qualquer um desses cursos. Conheça alguns deles:- Administração: Gerenciamento empresarial, 12 meses, carga horária total: [Inserir carga horária].- Informática: Programação, bancos de dados e redes, 12 meses, carga horária total: [Inserir carga horária].- Comunicação Visual: Design e produção gráfica, 12 meses, carga horária total: [Inserir carga horária]. - Secretariado: Organização e comunicação, 12 meses, carga horária total: [Inserir carga horária]. - Eletrotécnica: Eletricidade e sistemas eletrônicos, 12 meses, carga horária total: [Inserir carga horária]. [demais cursos]")
            await escolha()
        }

        else if (message.body === '4' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A Realização da matricula é feita presencialmente, se informe no numero TEL: (11) 5687-8876/(11) 3798-5036 para ver se voce foi aprovado no precesso seletivo para a realização da matricula")
            await escolha()
        }

        
        else if (message.body === '5' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A matrícula para o próximo ano letivo é realizada no final de cada ano. Acompanhe nossas redes sociais e site para ficar por dentro das datas e procedimentos necessários.")
            await escolha()
        }

        if (message.body === '6' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Acesse as normas de convivencia pelo link a seguir: https://acaonsfatima.org.br/2022/01/22/normas-2023/")
            await escolha()
        }

        if (message.body === '8' && message.isGroupMsg === false)
            await sendMenu();

        else if (message.body === '9' && message.isGroupMsg === false)
            await client.sendText(message.from, "Espero que essas informações sejam úteis! Se você tiver mais dúvidas ou precisar de assistência adicional, sinta-se à vontade para perguntar.")

    });
}