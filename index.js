const venom = require('venom-bot');

const sessionName = 'Assistente Virtual';

venom
    .create({
        session: sessionName
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

// Crie um objeto para manter o estado da conversa do usuário
const conversationState = {};

function start(client) {
    client.onMessage(async (message) => {
        async function sendMenu() {
            const menuMessage = '1 - Sobre a Escola do Frei \n2 - Cursos oferecidos 📚\n3 - Inscrições / Processo Seletivo 📋\n4 - Matrícula / Documentação 📝 \n5 - Padaria do Frei 🥖🍰 \n6 - Atrações da Feira 🏫 \n9 - Encerrar Atendimento 🛑';
            await client.sendText(message.from, menuMessage);
        }

        async function sendAtracoes() {
            const andarMessage = 'A - Pátio\nB - 1° Andar\nC - 2° Andar\nD - 3° Andar\nE - Outros';
            await client.sendText(message.from, andarMessage);
        }

        if (message.body === '/start' && message.isGroupMsg === false) {
            await client.sendText(message.from,
                'Olá! 😊 Bem-vindo ao Assistente Virtual do Instituto Social Nossa Senhora de Fátima! Para melhor atendê-lo, escolha uma das categorias abaixo que corresponda à sua dúvida:');
            await sendMenu();
        } else if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Conheça um pouco mais da nossa história, cursos e eventos, acesse nosso site: acaonsfatima.org.br  \n\nAcesse também nossas normas de convivência: https://acaonsfatima.org.br/2022/01/22/normas-2023/ ")
            await client.sendText(message.from, "📞 Contato: Instituto Social Nossa Senhora de Fátima \n\n🛣 Av. Coronel Octaviano de Freitas Costa, 463 – Veleiros – São Paulo \n\nsecretaria@acaonsfatima.org.br \nacaonsfatima.org.br \n\n(11) 5687-8876 \n(11) 96398-6252  \n\nhttps://goo.gl/maps/pwAU32ZfvSMSYqMZA ")
            await sendMenu()
        } else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "O Instituto Social Nossa Senhora de Fátima disponibiliza 03 modalidades de cursos; são eles: Cursos Técnicos, Cursos de Qualificação e Cursos Livres, cada um com sua própria carga horária e jornada de aprendizado voltado a área de atuação.")
            await client.sendText(message.from, "No término de todos os cursos, o aluno receberá o certificado ou diploma de conclusão. 👩‍🎓👨‍🎓")
            await client.sendText(message.from, `Veja abaixo todos os cursos que o instituto disponibiliza:
            \nCursos Técnicos: 
            \n- 💰 Administração: Gerenciamento empresarial e conhecimento em diversas áreas administrativas, 12 meses, carga horária total: 1000 horas. 
            \n- 💻 Informática: Linguagem de programação, bancos de dados e redes, 12 meses, carga horária total: 1200 horas. 
            \n- 👩‍🎨 Comunicação Visual: Design e produção gráfica, 12 meses, carga horária total: 1000 horas. 
            
            \nCursos de Qualificação:
            \n- ⚡ Eletrotécnica: Eletricidade e sistemas eletrônicos, 12 meses, carga horária total: 1000 horas. 
            \n- 🔧 Eletromecânica: Manutenção de sistemas mecânicos e elétricos, 12 meses, carga horária total: 1000 horas.\n\nCursos Livres:
            \n- 📗 Inglês: Com diversos níveis e horários disponíveis (tens, básico, médio, pré-avançado e avançado), consultar os horários disponíveis para cada curso, 12 meses, carga horária total: 500 horas. 
            \n- 💡 Eletricista Instalador: Instalação e manutenção elétrica, 06 meses, noturno, carga horária total: 120 horas
            \n- 💻 Informática Básica: Excel, conhecimentos básicos de informática e pacote office, 06 meses, noturno, carga horária total: 120 horas`)
            await sendMenu()
        } else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "As inscrições para 2024 começaram em 17 de outubro de 2023, o candidato deve se inscrever pelo aplicativo e agendar o dia e a hora para finalizar a inscrição no instituto.")
            await client.sendText(message.from, "Após finalizar a sua inscrição, você receberá o manual do candidato, onde terá o número de sua inscrição, o local, a data e a hora da prova do processo seletivo. No manual também haverá informações do procedimento de matrícula caso seja aprovado(a).")
            await client.sendText(message.from, "Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto, através de nossas redes informaremos, o link para baixar o aplicativo das inscrições, a data de início, data da prova, resultado da prova. \nacaonsfatima.org.br, instagram, facebook e linkedin")
            await sendMenu()
        } else if (message.body === '4' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Só poderão efetuar a matrícula, os alunos aprovados no processo seletivo. 👨‍🏫👩‍🏫")
            await client.sendText(message.from, "O resultado do processo seletivo ficará disponível em nosso site, caso seu nome esteja na lista de aprovados, você deverá comparecer no instituto para efetuar sua matrícula.")
            await client.sendText(message.from, "Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto acaonsfatima.org.br, instagram, facebook e linkedin")
            await sendMenu()
        } else if (message.body === '5' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Nossa padaria oferece uma variedade de produtos que vão além de simples pães, mas sim, do tradicional pão fresquinho, pães salgados, croissants, bolos, pães doces, torradas e muito mais. Os produtos são preparados diariamente, com muito carinho e qualidade.")
            await client.sendText(message.from, "Nossos horários de funcionamento De segunda a sexta - das 6h às 17h \nSábados – das 6h às 11h \nDomingos - Fechado")
            await sendMenu()
        } else if (message.body === '6' && message.isGroupMsg === false) {
            // Configurar o estado da conversa para que a próxima mensagem seja tratada como a escolha da atração da feira
            conversationState[message.from] = 'chooseAttraction';
            await client.sendText(message.from, 'Escolha o local para ver as atrações da 3° Feira de Profissões do Instituto Nossa Senhora de Fátima!');
            await sendAtracoes();
        } else if (conversationState[message.from] === 'chooseAttraction') {
            // Se o usuário fez uma escolha de atração da feira, trate-a aqui
            if (message.body === 'a' || message.body === 'A') {
                await client.sendText(message.from, "*Estandes de empresas convidadas*\n• Casa da Mulher Paulistana - Fios de Berenice\n• Universidade Ítalo-Brasileiro\n• UNISA\n• STB Intercâmbio\n• Nutricionista (Daniela Matos)\n• São Paulo Open Centre: Certificações da Cambridge\n• Cursinho Pré Vestibular: CUJA")
                await client.sendText(message.from, "*Demais estandes*\n- CEDESP AVE MARIA\n  • Assistente Administrativo\n  • Logística\n  • Metalmecânica – Ajustador e Torneiro Mecânico\n  • Tecnologia de Redes e Manutenção de Computadores\n- Troca de Livros\n- Oficina de Eletromecânica de Autos\n- Oficina de Auto Elétrica\n- Oficina Eletrotécnica: APS e Supplytech\n- Livros do Frei")
                await client.sendText(message.from, "*Atendimento externo*\n• Paraoficina Móvel: serviços gratuitos de manutenção e reparos em cadeiras de rodas, órteses, próteses e meios auxiliares de locomoção, como muletas, bengalas e andadores.")
                await client.sendText(message.from, "*Rampa*\n- Lanchonete\n  • Produtos da Padaria do Frei - doces e salgados\n  • Pastel e Bebidas")
                await sendMenu();
            } else if (message.body === 'b' || message.body === 'B') {
                await client.sendText(message.from, "• SALA 17 - Higiene Bucal\n• SALA 18 - ADMINISTRAÇÃO: Recursos Humanos e Contabilidade\n• SALA 19 - ADMINISTRAÇÃO: Empreendedorismo: Restaurante & Logística: Fibra capacetes\n• SALA 20 - Teste de conhecimento e conversação em Inglês")
                await sendMenu();
            } else if (message.body === 'c' || message.body === 'C') {
                await client.sendText(message.from, '• SALA 24 - Comunicação Visual\n• SALA 25 - Informática: montagem, configuração e redes\n• SALA 26 - Informática: programação\n• SALA 27 - Elaboração de currículo - Voluntários da Mapfre')
                await sendMenu();
            } else if (message.body === 'd' || message.body === 'D') {
                await client.sendText(message.from, '• Auditório -\nServiços da Prefeitura:\nCATE: Vagas para adultos e informações sobre a Carteira de Trabalho digital\nCADúnico: Cadastramento nos programas sociais\nCohab: Cadastramento, renegociação e informações sobre premiação\nSALA 33 - Simulação de entrevista - Voluntários da Mapfre')
                await sendMenu();
            } else if (message.body === 'e' || message.body === 'E') {
                await client.sendText(message.from, '• SALA 4: Ótica Brauzo - Exames de vista gratuitos\n• SALA 5: Apresentação dos Cursos\n• SALA 6: Bate-papo sobre a escolha das profissões')
                await sendMenu();
            } else {
                // Se a escolha não corresponde a nenhuma das opções, solicite outra escolha
                await client.sendText(message.from, 'Escolha uma das opções válidas (a, b, c, d, e) para ver as atrações da feira ou digite 9 para encerrar.');
            }
        } else if (message.body === '9' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Esperamos que as informações tenham sido úteis! 😊\n\nCaso tenha mais alguma dúvida ou precise de informações adicionais, entre em contato conosco.");
        }
    });
}
