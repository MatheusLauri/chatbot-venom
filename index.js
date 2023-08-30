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

        if (message.body === '/start' && message.isGroupMsg === false) {
            await client.sendText(message.from,
                'Olá! 😊 Bem-vindo ao Assistente Virtual do Instituto Social Nossa Senhora de Fátima! Para melhor atendê-lo, escolha uma das categorias abaixo que corresponda à sua dúvida:');
            await sendMenu();
        }

        else if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Nosso horário de funcionamento é das 7h às 19h de segunda a sábado, e aos domingos, das 8h")
            await client.sendText(message.from, "Confira nossa variedade de produtos, incluindo pães, bolos, salgados e doces.")
            await client.sendText(message.from,"Itens e preços: - Salgados Diversos 🥐 -- R$6.00 \n- Mini Pizza 🍕 -- R$4.00 \n- Torradinha -- R$2.50 \n- Doces Cremosos 🧁 -- R$4.00 \n- Bolo Recheado 🍰 -- R$5.00 \n- Pão com Manteiga 🍞 -- R$1.00 \n- Água   -- R$2.00 \n- Café ☕️ -- R$2.00 \n- Suco 🧃-- R$3.00")
            await sendMenu()
        }

        else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "O uso do uniforme é obrigatório para todos os estudantes.")
            await client.sendText(message.from, "Você pode adquirir o uniforme no endereço: Adão Rocumback, 50 - Veleiros. 🛣")
            await client.sendText(message.from, "Mais informações pelo telefone: (11) 95075-0011.📞")
            await sendMenu()
        }

        else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Descubra nossos cursos técnicos, cada um com sua própria carga horária e uma jornada de aprendizado única. 👩‍🎓👨‍🎓")
            await client.sendText(message.from, "A certificação é concedida ao concluir com sucesso qualquer um desses cursos.")
            await client.sendText(message.from, "Conheça alguns deles:\n- Administração: Gerenciamento empresarial, 12 meses, carga horária total: 1000 horas. 💰\n\n- Informática: Programação, bancos de dados e redes, 12 meses, carga horária total: 1200 horas.💻🌐\n\n- Comunicação Visual: Design e produção gráfica, 12 meses, carga horária total: 1000 horas. 👩‍🎨\n\n- Secretariado: Organização e comunicação, 12 meses, carga horária total: 1000 horas. 👩‍💼\n\n- Eletrotécnica: Eletricidade e sistemas eletrônicos, 12 meses, carga horária total: 1000 horas. 🔧⚡")
            await sendMenu()
        }

        else if (message.body === '4' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A matrícula é destinada apenas aos alunos aprovados no processo seletivo. 👨‍🏫👩‍🏫")
            await client.sendText(message.from, "Fique atento às informações divulgadas em nossas redes sociais e site sobre o processo seletivo e datas de inscrição.")
            await client.sendText(message.from, "https://acaonsfatima.org.br/\nInstagram - https://instagram.com/institutonsfatima?igshid=NjIwNzIyMDk2Mg== \nFacebook - https://www.facebook.com/institutonsfatima?mibextid=ZbWKwL")
            await sendMenu()
        }

        
        else if (message.body === '5' && message.isGroupMsg === false) {
            await client.sendText(message.from, "A matrícula para o próximo ano letivo é realizada no final de cada ano.")
            await client.sendText(message.from, "Acompanhe nossas redes sociais e site para ficar por dentro das datas e procedimentos necessários.")
            await client.sendText(message.from, "https://acaonsfatima.org.br/\nInstagram - https://instagram.com/institutonsfatima?igshid=NjIwNzIyMDk2Mg== \nFacebook - https://www.facebook.com/institutonsfatima?mibextid=ZbWKwL")
            
            await sendMenu()
        }

        if (message.body === '6' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Para conhecer nossas normas de convivência e nossa história, acesse: https://acaonsfatima.org.br/2022/01/22/normas-2023/")
            await sendMenu()
        }

        else if (message.body === '9' && message.isGroupMsg === false)
            await client.sendText(message.from, "Espero que essas informações sejam úteis! Se você tiver mais dúvidas ou precisar de assistência adicional, sinta-se à vontade para perguntar.")

    });
}