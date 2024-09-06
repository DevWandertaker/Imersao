let dados = [
    {
        titulo: "Los Angeles Lakers",
        descricao: "Los Angeles Lakers são a franquia mais bem-sucedida da história da NBA, com um impressionante total de 17 títulos conquistados. Essa marca histórica é fruto de uma combinação única de talento, tradição e paixão pelo basquete. Ao longo das décadas, os Lakers formaram diversas dinastias, com estrelas como Magic Johnson, Kareem Abdul-Jabbar, Kobe Bryant e LeBron James, que levaram a equipe ao topo do esporte. A rica história da franquia, marcada por rivalidades intensas e momentos inesquecíveis, consolidou os Lakers como um dos times mais populares e respeitados do mundo",
        link: "https://pt.wikipedia.org/wiki/Los_Angeles_Lakers",
        tags: " lakers showtime lebron james kobe bryant magic johnson staples center los angeles california"
    },
    {
        titulo: "Boston Celtics",
        descricao: "Os Boston Celtics são uma das franquias mais antigas e tradicionais da NBA, fundada em 1946. Com 17 títulos de campeão, os Celtics possuem uma das maiores torcidas da liga. A equipe é conhecida por sua rivalidade histórica com os Los Angeles Lakers e por ter revelado grandes talentos como Bill Russell, Larry Bird e atualmente Jayson Tatum e Jaylen Brown. A rica história e a paixão dos torcedores fazem dos Celtics um dos times mais icônicos do basquete.",
        link: "https://pt.wikipedia.org/wiki/Boston_Celtics",
        tags: "celtics boston massachusetts td garden irving tatum historic franchise"
    },
    {
        titulo: "Dallas Mavericks",
        descricao: "Os Dallas Mavericks, fundados em 1980, conquistaram seu primeiro título da NBA em 2011, com Dirk Nowitzki como principal estrela. A equipe, baseada em Dallas, Texas, tem se destacado nos últimos anos com uma jovem e talentosa equipe. A franquia é conhecida por sua paixão por desenvolver jovens talentos e por sua rivalidade com os San Antonio Spurs.",
        link: "https://pt.wikipedia.org/wiki/Dallas_Mavericks",
        tags: "mavericks luka doncic dirk nowitzki american airlines center dallas texas"
    },
    {
        titulo: "Golden State Warriors",
        descricao: "Os Golden State Warriors são uma franquia da NBA com uma rica história, conhecida por sua dinastia de títulos nos anos 2010. Liderados por Stephen Curry, Klay Thompson e Draymond Green, a equipe conquistou múltiplos campeonatos e revolucionou o jogo com seu estilo de jogo rápido e arremessos de três pontos. A equipe, baseada em San Francisco, Califórnia, é uma das mais populares e bem-sucedidas da liga.",
        link: "https://pt.wikipedia.org/wiki/Golden_State_Warriors",
        tags: "warriors  steph curry klay thompson draymond green nba championship bay area  Gui Santos three points"
    },
    {
        titulo: "Chicago Bulls",
        descricao: "O Chicago Bulls é um dos times de basquete mais icônicos da NBA, conhecido mundialmente por sua dinastia nos anos 90 liderada por Michael Jordan, Scottie Pippen e Dennis Rodman. A equipe conquistou seis campeonatos nesse período e se tornou um símbolo do esporte. Atualmente, os Bulls buscam retomar o sucesso do passado, contando com uma base de fãs apaixonada e uma rica história.",
        link: "https://pt.wikipedia.org/wiki/Chicago_Bulls",
        tags: "bulls michael jordannscottie pippen dennis rodman chicago nba championshipn united center"
    },
    {
        titulo: "Atlanta Hawks",
        descricao: "O Atlanta Hawks é uma franquia da NBA com uma rica história, marcada por momentos memoráveis e jogadores talentosos. A equipe, baseada em Atlanta, Geórgia, possui uma base de fãs apaixonada e busca constantemente estar entre os melhores da liga. Nos últimos anos, os Hawks têm se destacado com um estilo de jogo rápido e ofensivo.",
        link: "https://pt.wikipedia.org/wiki/Atlanta_Hawks",
        tags: "hawks atlanta geórgia trae young nba southeast division"
    },
    {
        titulo: "Orlando Magic",
        descricao: "O Orlando Magic é uma franquia da NBA com uma história marcada por momentos emocionantes e jogadores talentosos. A equipe, baseada em Orlando, Flórida, conquistou o coração dos fãs com seu estilo de jogo vibrante e sua arena, o Amway Center. Apesar de ainda não ter conquistado outro título desde 1995, o Magic sempre busca ser um time competitivo na liga.",
        link: "https://pt.wikipedia.org/wiki/Orlando_Magic",
        tags: "magic orlando flórida amway center shaquille o'neal penny hardaway nba"
    },
    {
        titulo: "Indiana Pacers",
        descricao: "O Indiana Pacers é uma franquia da NBA com uma rica história, marcada por rivalidades intensas e um estilo de jogo físico. A equipe, baseada em Indianápolis, Indiana, é conhecida por sua torcida apaixonada e por ter revelado grandes talentos como Reggie Miller e Victor Oladipo. Os Pacers têm uma longa tradição de playoffs e buscam constantemente estar entre os melhores da Conferência Leste.",
        link: "https://pt.wikipedia.org/wiki/Indiana_Pacers",
        tags: "pacers indiana indianapolis reggie miller victor oladipo nba eastern conference"
    },
    {
        titulo: "San Antonio Spurs",
        descricao: "O San Antonio Spurs é uma franquia da NBA conhecida por sua cultura de equipe, desenvolvimento de jovens talentos e estabilidade. Com sede em San Antonio, Texas, a equipe é liderada por Gregg Popovich, um dos treinadores mais vitoriosos da história da liga. Os Spurs conquistaram cinco campeonatos da NBA, destacando-se por um estilo de jogo inteligente e eficiente.",
        link: "https://pt.wikipedia.org/wiki/San_Antonio_Spurs",
        tags: "spurs san antonio texas gregg popovich tim duncan manu ginobili tony parker nba championship western conference"
    },
    {
        titulo: "Philadelphia 76ers",
        descricao: "O Philadelphia 76ers é uma das franquias mais antigas da NBA, com uma rica história e uma apaixonada base de torcedores. A equipe, baseada em Filadélfia, Pensilvânia, é conhecida por suas rivalidades históricas e por ter revelado grandes talentos como Julius Erving e Allen Iverson. Os 76ers buscam constantemente estar entre os melhores da Conferência Leste e conquistar um novo título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Philadelphia_76ers",
        tags: "76ers philadelphia pensilvânia sixers julius erving allen iverson joel embiid nba eastern conference"
    },
    {
        titulo: "Miami Heat",
        descricao: "O Miami Heat é uma franquia da NBA com uma história recente de sucesso, marcada por três títulos da liga. A equipe, baseada em Miami, Flórida, é conhecida por seu estilo de jogo intenso e físico, e por ter reunido grandes estrelas como LeBron James, Dwyane Wade e Shaquille O'Neal. O Heat possui uma torcida apaixonada e busca constantemente estar entre os melhores da Conferência Leste.",
        link: "https://pt.wikipedia.org/wiki/Miami_Heat",
        tags: "heat miami flórida lebron james dwyane wade shaquille o'neal nba championship eastern conference"
    },
    {
        titulo: "Cleveland Cavaliers",
        descricao: "O Cleveland Cavaliers é uma franquia da NBA com uma rica história, marcada pela lealdade de seus torcedores e momentos históricos. A equipe, baseada em Cleveland, Ohio, conquistou diversos títulos da Conferência Leste e, em 2016, quebrou a maldição de um título da NBA, liderados por LeBron James. Os Cavaliers são conhecidos por sua intensa rivalidade com o Golden State Warriors e por sua paixão por trazer um campeonato para a cidade.",
        link: "https://pt.wikipedia.org/wiki/Cleveland_Cavaliers",
        tags: "cavaliers cleveland ohio lebron james kyrie irving kevin loven nba championship eastern conference golden state warriors"
    },
    {
        titulo: "Memphis Grizzlies",
        descricao: "O Memphis Grizzlies é uma franquia da NBA conhecida por sua defesa intensa e seu estilo de jogo físico. A equipe, baseada em Memphis, Tennessee, tem crescido em popularidade nos últimos anos, com uma torcida apaixonada e um time jovem e talentoso. Os Grizzlies, liderados por jogadores como Ja Morant, buscam se consolidar como uma força a ser considerada na Conferência Oeste.",
        link: "https://pt.wikipedia.org/wiki/Memphis_Grizzlies",
        tags: "grizzlies memphis tennessee ja morant nba western conference defesa"
    },
    {
        titulo: "Minnesota Timberwolves",
        descricao: "O Minnesota Timberwolves é uma franquia da NBA que nos últimos anos tem mostrado um crescimento significativo. Baseada em Minneapolis, Minnesota, a equipe tem se destacado por um estilo de jogo rápido e ofensivo, com jovens talentos promissores como Anthony Edwards. Os Timberwolves buscam se consolidar como uma força a ser considerada na Conferência Oeste e conquistar um título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Minnesota_Timberwolves",
        tags: "timberwolves minnesota minneapolis anthony edwards karl-anthony towns nba western conference"
    },
    {
        titulo: "New Orleans Pelicans",
        descricao: "O New Orleans Pelicans é uma franquia da NBA que, apesar de sua história relativamente recente, já conquistou um espaço especial no coração dos fãs de basquete. Baseada em Nova Orleans, Louisiana, a equipe tem se destacado por um estilo de jogo rápido e ofensivo, com jovens talentos promissores como Zion Williamson e Brandon Ingram. Os Pelicans buscam se consolidar como uma força a ser considerada na Conferência Oeste e conquistar um título da NBA.",
        link: "https://pt.wikipedia.org/wiki/New_Orleans_Pelicans",
        tags: "pelicans new orleans louisian zion williamson brandon ingram nba western conference"
    },
    {
        titulo: "Phoenix Suns",
        descricao: "O Phoenix Suns é uma franquia da NBA conhecida por seu estilo de jogo veloz e ofensivo. Baseada em Phoenix, Arizona, a equipe tem uma rica história e uma torcida apaixonada. Com jogadores como Devin Booker e Kevin Durant, os Suns buscaram nos últimos anos se consolidar como uma força a ser considerada na Conferência Oeste, chegando às finais da NBA em 2021. ",
        link: "https://pt.wikipedia.org/wiki/Phoenix_Suns",
        tags: "suns phoenix arizona devin booker kevin durant nba western conference fast break"
    },
    {
        titulo: "Oklahoma City Thunder",
        descricao: "O Oklahoma City Thunder é uma franquia da NBA que, apesar de sua história relativamente recente, já conquistou um espaço especial no coração dos fãs de basquete. Baseada em Oklahoma City, Oklahoma, a equipe é conhecida por seu estilo de jogo intenso e físico, com uma forte cultura de desenvolvimento de jovens talentos. Após a saída de Kevin Durant, o Thunder reconstruiu sua equipe em torno de jogadores como Shai Gilgeous-Alexander e tem se mostrado uma das franquias mais promissoras da NBA.",
        link: "https://pt.wikipedia.org/wiki/Oklahoma_City_Thunder",
        tags: "thunder oklahoma okc shai gilgeous-alexander kevin durant nba western conference reconstrução"
    },
    {
        titulo: "Brooklyn Nets",
        descricao: "O Brooklyn Nets é uma franquia da NBA com uma rica história, marcada por diversas mudanças de cidade e momentos históricos. Atualmente baseado em Brooklyn, Nova York, o time tem se destacado por um estilo de jogo rápido e ofensivo, com superestrelas como Kevin Durant e Kyrie Irving. Os Nets buscam se consolidar como uma das principais forças da Conferência Leste e conquistar um título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Brooklyn_Nets",
        tags: "nets brooklyn nova york evin durant kyrie irving nba eastern conference big three"
    },
    {
        titulo: "Utah Jazz",
        descricao: "O Utah Jazz é uma franquia da NBA conhecida por sua defesa sólida e estilo de jogo organizado. Baseado em Salt Lake City, Utah, o time tem uma rica história e uma torcida apaixonada. Com jogadores como Donovan Mitchell e Lauri Markkanen, os Jazz buscaram nos últimos anos se consolidar como uma força a ser considerada na Conferência Oeste. A equipe é conhecida por sua cultura de trabalho duro e desenvolvimento de jovens talentos.",
        link: "https://pt.wikipedia.org/wiki/Utah_Jazz",
        tags: "jazz utah salt lake city donovan mitchell lauri markkanen nba western conference defesa"
    },
    {
        titulo: "Denver Nuggets",
        descricao: "O Denver Nuggets é uma franquia da NBA conhecida por seu jogo rápido e ofensivo. Baseado em Denver, Colorado, o time tem uma rica história e uma torcida apaixonada. Com jogadores como Nikola Jokić, um dos maiores centros da liga, os Nuggets buscaram nos últimos anos se consolidar como uma força a ser considerada na Conferência Oeste, conquistando o título da NBA em 2023. A equipe é conhecida por seu estilo de jogo moderno e pela habilidade de seus jogadores em passar a bola.",
        link: "https://pt.wikipedia.org/wiki/Denver_Nuggets",
        tags: "nuggets denver colorado nikola jokic nba western conference jogo rápido passe"
    },
    {
        titulo: "Milwaukee Bucks",
        descricao: "O Milwaukee Bucks é uma franquia da NBA com uma rica história e uma torcida apaixonada. Baseado em Milwaukee, Wisconsin, o time é conhecido por sua defesa sólida e seu jogo físico. Com jogadores como Giannis Antetokounmpo, um dos maiores jogadores da atualidade, os Bucks buscaram nos últimos anos se consolidar como uma força a ser considerada na Conferência Leste, conquistando o título da NBA em 2021. A equipe é conhecida por sua cultura de trabalho duro e desenvolvimento de jovens talentos.",
        link: "https://pt.wikipedia.org/wiki/Milwaukee_Bucks",
        tags: "bucks milwaukee wisconsin giannis antetokounmpo nba eastern conference defesa campeão"
    },
    {
        titulo: "Charlotte Hornets",
        descricao: "O Charlotte Hornets é uma franquia da NBA conhecida por sua história e rivalidades marcantes. Baseado em Charlotte, Carolina do Norte, o time tem uma torcida apaixonada e um estilo de jogo rápido e ofensivo. Com jogadores como LaMelo Ball e Miles Bridges, os Hornets buscam se consolidar como uma equipe competitiva na Conferência Leste. A equipe é conhecida por seu mascote vibrante, Hugo, e por sua tradição de desenvolver jovens talentos.",
        link: "https://pt.wikipedia.org/wiki/Charlotte_Hornets",
        tags: "hornets charlotte carolina do norte lamelo ball miles bridges nba eastern conference jovens talentos hugo"
    },
    {
        titulo: "Los Angeles Clippers",
        descricao: "O Los Angeles Clippers é uma franquia da NBA com uma história marcada por altos e baixos. Baseado em Los Angeles, Califórnia, o time tem uma torcida apaixonada e um estilo de jogo rápido e ofensivo. Com jogadores como Kawhi Leonard e Paul George, os Clippers buscaram nos últimos anos se consolidar como uma das principais forças da Conferência Oeste, chegando às finais da NBA em 2021. A equipe é conhecida por sua rivalidade com o Los Angeles Lakers e por sua busca constante por um título.",
        link: "https://pt.wikipedia.org/wiki/Los_Angeles_Clippers",
        tags: "clippers los angeles california kawhi leonard paul george nba western conference rivalidade lakers"
    },
    {
        titulo: "New York Knicks",
        descricao: "O New York Knicks é uma das franquias mais históricas e populares da NBA. Com sede em Nova York, o time possui uma torcida apaixonada e uma rica tradição. Apesar de ter vivido momentos de glória no passado, com diversos títulos da NBA, os Knicks buscam retomar os dias de outrora e se consolidar como uma força competitiva na Conferência Leste. A equipe é conhecida por sua rivalidade com o Boston Celtics e por sua base de fãs fervorosa.",
        link: "https://pt.wikipedia.org/wiki/New_York_Knicks",
        tags: "knicks nova york new york nba eastern conference boston celtics rivalidade tradição"
    },
    {
        titulo: "Toronto Raptors",
        descricao: "O Toronto Raptors é a única franquia canadense da NBA, conhecida por sua defesa intensa e seu estilo de jogo coletivo. Baseado em Toronto, Ontário, o time conquistou o coração dos torcedores canadenses e se tornou um dos mais populares da liga. Com a histórica conquista do título da NBA em 2019, liderados por Kawhi Leonard, os Raptors marcaram seu nome na história do basquete. A equipe é conhecida por sua atmosfera vibrante na Scotiabank Arena e por seu compromisso com a comunidade.",
        link: "https://pt.wikipedia.org/wiki/Toronto_Raptors",
        tags: "raptors toronto canadá kawhi leonard nba eastern conference campeão scotiabank arena"
    },
    {
        titulo: "Detroit Pistons",
        descricao: "O Detroit Pistons é uma franquia da NBA com uma rica história e uma torcida apaixonada. Baseado em Detroit, Michigan, o time é conhecido por sua defesa dura e seu estilo de jogo físico. Com diversos títulos da NBA em seu currículo, incluindo a era conhecida como Bad Boys, os Pistons buscaram nos últimos anos reconstruir a equipe e retornar aos playoffs. A equipe é conhecida por sua rivalidade com o Chicago Bulls e por sua base de fãs fiel.",
        link: "https://pt.wikipedia.org/wiki/Detroit_Pistons",
        tags: "pistons detroit michigan bad boys nba eastern conference defesa rivalidade bulls"
    },
    {
        titulo: "Sacramento Kings",
        descricao: "O Sacramento Kings é uma franquia da NBA com uma rica história e uma torcida apaixonada. Baseado em Sacramento, Califórnia, o time é conhecido por sua mascote, o King, e por sua trajetória na liga. Nos últimos anos, os Kings têm buscado se reconstruir e retornar aos playoffs. A equipe é conhecida por sua base de fãs fiel e por sua arena vibrante.",
        link: "https://pt.wikipedia.org/wiki/Sacramento_Kings",
        tags: "kings sacramento california nba western conference mascote king"
    },
    {
        titulo: "Washington Wizards",
        descricao: "O Washington Wizards é uma franquia da NBA com base em Washington, D.C. Conhecido por sua rica história e por jogadores lendários como Earl Monroe e Gilbert Arenas, o time busca constantemente se consolidar entre os principais da Conferência Leste. A equipe é conhecida por sua torcida apaixonada e por sua arena, o Capital One Arena. Ao longo dos anos, os Wizards conquistaram diversos títulos e marcaram seu nome na história da NBA.",
        link: "https://pt.wikipedia.org/wiki/Washington_Wizards",
        tags: "wizards washington dc nba eastern conference earl monroe gilbert arenas capital one arena"
    },
    {
        titulo: "Houston Rockets",
        descricao: "O Houston Rockets é uma franquia da NBA com uma rica história e uma torcida apaixonada. Conhecido por sua defesa forte e por jogadores lendários como Hakeem Olajuwon e James Harden, o time busca constantemente se consolidar entre os principais da Conferência Oeste. A equipe é conhecida por sua arena, o Toyota Center, e por sua rivalidade com o San Antonio Spurs.",
        link: "https://pt.wikipedia.org/wiki/Houston_Rockets",
        tags: "rockets houston texas nba western conference hakeem olajuwon james harden toyota center rivalidade spurs"
    },
];
