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
            const menuMessage = '1 - Sobre a Escola do Frei \n2 - Cursos oferecidos pela instituição \n3 - Inscrições / Processo Seletivo \n4 - Matricula / Documentação  \n5 - Padaria do Frei  \n9 - Encerrar Atendimento ';
            await client.sendText(message.from, menuMessage);
        }

        if (message.body === '/start' && message.isGroupMsg === false) {
            await client.sendText(message.from,
                'Olá! 😊 Bem-vindo ao Assistente Virtual do Instituto Social Nossa Senhora de Fátima! Para melhor atendê-lo, escolha uma das categorias abaixo que corresponda à sua dúvida:');
            await sendMenu();
        }

        else if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Conheça um pouco mais da nossa história, cursos e eventos, acesse nosso site: acaonsfatima.org.br  \n\nAcesse também nossas normas de convivência: https://acaonsfatima.org.br/2022/01/22/normas-2023/ ")
            await client.sendText(message.from, "Contato: Instituto Social Nossa Senhora de Fátima \n\nAv. Coronel Octaviano de Freitas Costa, 463 – Veleiros – São Paulo \n\nsecretaria@acaonsfatima.org.br \nacaonsfatima.org.br \n\n(11) 5687-8876 \n(11) 96398-6252  \n\nhttps://goo.gl/maps/pwAU32ZfvSMSYqMZA ")
            await sendMenu()
        }

        else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "O Instituto Social Nossa Senhora de Fátima disponibiliza 03 modalidades de cursos; são eles: Cursos Técnicos, Cursos de Qualificação e Cursos Livres, cada um com sua própria carga horária e jornada de aprendizado voltado a área de atuação.")
            await client.sendText(message.from, "No termino de todos os cursos, o aluno receberá o certificado ou diploma de conclusão.")
            await client.sendText(message.from, `Veja abaixo todos os cursos que o instituto disponibiliza:
            \nCursos Técnicos: 
            \n- Administração: Gerenciamento empresarial e conhecimento em diversas áreas administrativas, 12 meses, carga horária total: 1000 horas. 
            \n- Informática: Linguagem de programação, bancos de dados e redes, 12 meses, carga horária total: 1200 horas. 
            \n- Comunicação Visual: Design e produção gráfica, 12 meses, carga horária total: 1000 horas. 
            
            \nCursos de Qualificação:
            \n- Eletrotécnica: Eletricidade e sistemas eletrônicos, 12 meses, carga horária total: 1000 horas. 
            \n- Eletromecânica: Manutenção de sistemas mecânicos e elétricos, 12 meses, carga horária total: 1000 horas.\n\nCursos Livres:
            \n- Inglês: Com diversos níveis e horários disponíveis (tens, básico, médio, pré-avançado e avançado), consultar os horários disponíveis para cada curso, 12 meses, carga horária total: 500 horas. 
            \n- Eletricista Instalador: Instalação e manutenção elétrica, 06 meses, noturno, carga horária total: 120 horas
            \n- Informática Básica 
            \n– Excel: Conhecimentos básicos de informática e pacote office, 06 meses, noturno, carga horária total: 120 horas`)
            await sendMenu()
        }

        else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "As inscrições para 2024 começaram em 17 de outubro de 2023, o candidato deve se inscrever pelo aplicativo e agendar o dia e a hora para finalizar a inscrição no instituto.")
            await client.sendText(message.from, "Após finalizar a sua inscrição, você receberá o manual do candidato, onde terá o número de sua inscrição, o local, a data e a hora da prova do processo seletivo. No manual também haverá informações do procedimento de matrícula caso seja aprovado(a).")
            await client.sendText(message.from, "Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto, através de nossas redes informaremos, o link para baixar o aplicativo das inscrições, a data de início, data da prova, resultado da prova. \nacaonsfatima.org.br, instagram, facebook e linkedin")
            await sendMenu()
        }

        else if (message.body === '4' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Só poderão efetuar a matrícula, os alunos aprovados no processo seletivo.")
            await client.sendText(message.from, "O resultado do processo seletivo ficará disponível em nosso site, caso seu nome esteja na lista de aprovados, você deverá comparecer no instituto para efetuar sua matrícula.")
            await client.sendText(message.from, "Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto acaonsfatima.org.br, instagram, facebook e linkedin")
            await sendMenu()
        }

        
        else if (message.body === '5' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Nossa padaria oferece uma variedade de produtos que vão além de simples pães, mas sim, do tradicional pão fresquinho, pães salgados, croissants, bolos, pães doces, torradas e muito mais. Os produtos são preparados diariamente, com muito carinho e qualidade.")
            await client.sendText(message.from, "Nossos horários de funcionamento De segunda a sexta - das 6h às 17h \nSábados – das 6h às 11h \nDomingos - Fechado")
            await sendMenu()
        }


        else if (message.body === '9' && message.isGroupMsg === false)
            await client.sendText(message.from, "Esperamos que as informações tenham sido úteis! Caso tenha mais alguma dúvida ou precisar de informações adicional, entre em contato conosco.")
    });
}
