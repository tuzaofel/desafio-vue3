

const BUTTON_CAPTION = "ESCOLHER ESSE PLANO";
const  CURRENCY = "R$";
const PERIOD = "/mês"

const SUPORTE = {
    title: 'Suporte 24 horas por dia, 7 dias por semana grátis',
    features: []
}

const APLICATIVOS_DISPONIVEIS = {
        title: 'Aplicativos disponíveis',
        features: [
            'Wordpress;',
            'Drupal;',
            'entre outros...'
        ]
}

const VOCE_AINDA_TEM = {
    title: 'Você ainda tem',
    features: [
        'Webmail RoundCube;',
        'AntiSpam;',
        'Painel de gerenciamento de DNS;',
        'Painel de controle web;',
        'Configurações de PHP personalisáveis;',
        'Certificado SSL Grátis;',
        'Transferência ilimitada;',
    ]
}

const MIGRACAO_GRATUITA = {
    title: 'Migração Gratuita',
    features: [
        'Migramos todos seus sites para nossos servidores;',
    ]
}



const plansData = [

    //PLANO 1
    {
        pretitle: "",
        title: 'Hospedagem 1',
        price: {
            prefix: "",
            value: 'Grátis',
            sufix: "",
        },
        subtitles: [
            'você não paga nada para usar', 
            'sem taxa de setup'
        ],
        indication: 'Ideal para quem está começando',
        buttonCaption: BUTTON_CAPTION,
        descriptions: [
            {
                title: 'Seu site em servidores nos _Estados Unidos_',
                features: [
                    'Servidores em nossos data center americanos;',
                    'ASP, ASP.NET 2.0/3.0/3.6/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3 5.4 5.5, 5.6 e 7.0;',
                    '1 usuário de FTP para upload e download',
                    '1 conta de e-mail profissional',
                    '_1 subdomínio_ gratuito'
                ]
            },
            SUPORTE,
            APLICATIVOS_DISPONIVEIS,
            VOCE_AINDA_TEM,
        ]
    },

    //PLANO 2
    {
        pretitle: "MAIS USADO",
        title: 'Hospedagem 2',
        price: {
            prefix: CURRENCY,
            value: '499',
            sufix: PERIOD,
        },
        subtitles: [
            'cobrado mensalmente', 
            'sem taxa de setup'
        ],
        indication: 'Ideal para site com mais de 30k de visitas',
        buttonCaption: BUTTON_CAPTION,
        descriptions: [
            {
                title: 'Seu site em servidores no _Brasil_',
                features: [
                    'Servidores em nossos data center em São Paulo;',
                    'ASP, ASP.NET 2.0/3.0/3.6/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3 5.4 5.5, 5.6 e 7.0;',
                    '10 usuários de FTP para upload e download',
                    '30 contas de e-mails profissionais',
                    '_10 domínios_ gratuitos'
                ]
            },
            SUPORTE,
            APLICATIVOS_DISPONIVEIS,
            MIGRACAO_GRATUITA,
            VOCE_AINDA_TEM
        ]
    },

    //PLANO 3
    {
        pretitle: "",
        title: 'Hospedagem 3',
        price: {
            prefix: CURRENCY,
            value: '999',
            sufix: PERIOD,
        },
        subtitles: [
            'cobrado mensalmente', 
            'sem taxa de setup'
        ],
        indication: 'Ideal para site com mais de 60k de visitas',
        buttonCaption: BUTTON_CAPTION,
        descriptions: [
            {
                title: 'Seu site em servidores no _Brasil_',
                features: [
                    'Servidores em nossos data center em São Paulo;',
                    'ASP, ASP.NET 2.0/3.0/3.6/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3 5.4 5.5, 5.6 e 7.0;',
                    '_ilimitados_ usuários de FTP para upload e download',
                    '_ilimitadas_ contas de e-mails profissionais',
                    '_50 domínios_ gratuitos'
                ]
            },
            SUPORTE,
            APLICATIVOS_DISPONIVEIS,
            MIGRACAO_GRATUITA,
            VOCE_AINDA_TEM
        ]
    }
]

export default plansData;