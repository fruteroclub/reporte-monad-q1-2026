// Monad × Frutero Club — Q1 2026 Report Data

export interface Submission {
  rank: number;
  title: string;
  team: string;
  category: string;
  description: string;
  github: string;
  demo: string;
  tweet?: string;
  votes: number;
  points: number;
  rating: number;
}

// ─── Blitz 1: Monad Blitz CDMX (February 21, 2026) ───

export const blitz1Submissions: Submission[] = [
  {
    rank: 1,
    title: "FanSlayer",
    team: "Edgar Lopez Baeza (-ALFA-), Diego Sevilla Diaz(Onii) y Jonathan Salvador Fosado(Jony)",
    category: "Gaming & NFT",
    description: "FanSlayer — Web3 videogame where you fight zombie fan hordes, earn NFTs of famous artists with each kill, and buy, sell or trade them in an integrated marketplace running on Monad.",
    github: "https://github.com/Oni7u7/FanSlayer",
    demo: "https://youtu.be/y3fUO2ydGrA",
    votes: 27,
    points: 105,
    rating: 3.89,
  },
  {
    rank: 2,
    title: "Hemato Watch",
    team: "ally, jaz",
    category: "Healthcare",
    description: "HematoWatch is a digital platform designed to transform the way Acute Lymphoblastic Leukemia (ALL) patients and their families manage oncological follow-up through a blockchain platform that safeguards and facilitates access to patient information.",
    github: "https://github.com/Scarfdrilo/hematowatch",
    demo: "https://hematowatch.vercel.app",
    votes: 27,
    points: 100,
    rating: 3.70,
  },
  {
    rank: 3,
    title: "Betwhisper",
    team: "Anthony Chavez",
    category: "Prediction Market",
    description: "BetWhisper is a voice-powered prediction markets agent for Polymarket, built on Monad. Users wearing Meta Ray-Ban smart glasses can search markets, analyze bot activity with Agent Radar, get AI explanations, and place on-chain bets, all through natural conversation.",
    github: "https://github.com/anthonysurfermx/Betwhisper",
    demo: "https://betwhisper.ai",
    votes: 28,
    points: 103,
    rating: 3.68,
  },
  {
    rank: 4,
    title: "El MONdial",
    team: "Lalo y Bure",
    category: "Predictions",
    description: "A site where you can place any kind of bets around the 2026 World Cup matches.",
    github: "https://github.com/lalocripto/prediction-market",
    demo: "https://prediction-market-khaki.vercel.app",
    votes: 26,
    points: 93,
    rating: 3.58,
  },
  {
    rank: 5,
    title: "MARP",
    team: "Ian Hernandez, Gerardo Vela, Fernanda Tello",
    category: "AI Agents",
    description: "MARP is an on-chain reputation system for AI agents on Monad. It tracks performance, calculates scores and enables social staking — a decentralized credit score for the agent economy.",
    github: "https://github.com/IanHerez/MARP",
    demo: "https://marp-lemon.vercel.app/",
    votes: 26,
    points: 91,
    rating: 3.50,
  },
  {
    rank: 6,
    title: "Goyo",
    team: "Vianey Alejandra Alvarez Alvarado, Daniel Bustamante Lagart",
    category: "DeFi",
    description: "Goyo is a crypto wallet for LATAM that allows sending money with voice — no addresses, no networks, no fear.",
    github: "https://github.com/daniellagart4-sys/Goyo",
    demo: "https://drive.google.com/drive/folders/1MLUBIcZCQ-mK-Vc31of9AJ2ufZYQqhmq?usp=sharing",
    votes: 27,
    points: 94,
    rating: 3.48,
  },
  {
    rank: 7,
    title: "eco-eeelien",
    team: "nadia elizabeth escalante solano y carlos navarrete tapia",
    category: "ReFi",
    description: "A recycling platform with USDC rewards. Monad is the blockchain where recycling transactions are recorded and ECO tokens distributed as user rewards, using ESP32 hardware.",
    github: "https://github.com/eeelien/eco-eeelien-monad/tree/main/frontend",
    demo: "https://eco-eeelien-monad-git-main-eeeliens-projects.vercel.app/",
    votes: 25,
    points: 87,
    rating: 3.48,
  },
  {
    rank: 8,
    title: "ClearHope",
    team: "Jose Armando Corona Rivas, Axel Isais Rodriguez Frias, Alan Leanos Gutierrez, Ulises Perez Alvarez",
    category: "ReFi",
    description: "ClearHope connects directly with disaster victims and tracks every dollar in real time. Thanks to the 'All or Nothing' Smart Contract, if the aid goal isn't reached, your money is automatically refunded. Zero intermediaries, zero corruption.",
    github: "https://github.com/AlanRLG/solidario-mexico.git",
    demo: "https://solidario-mexico.vercel.app/",
    votes: 28,
    points: 96,
    rating: 3.43,
  },
  {
    rank: 9,
    title: "Monazon",
    team: "Tory Dom",
    category: "Payments",
    description: "A platform for any seller in Latin America to sell globally and collect in digital dollars, without a bank and without friction, leveraging Monad's speed.",
    github: "https://github.com/ToryDom/Monazon",
    demo: "https://monazon.vercel.app/",
    votes: 29,
    points: 97,
    rating: 3.34,
  },
  {
    rank: 10,
    title: "MonadPay",
    team: "Cindy Jimenez",
    category: "DeFi",
    description: "MonadPay is a payment solution that turns a simple URL into an on-chain transaction on Monad. Crypto payments as easy as sharing a link.",
    github: "https://github.com/Scarfdrilo/monadpay",
    demo: "https://monadpay-mu.vercel.app/",
    votes: 27,
    points: 90,
    rating: 3.33,
  },
  {
    rank: 11,
    title: "Antaria",
    team: "Enrique Cruz",
    category: "DeFi",
    description: "Antaria: The Tanda of the Future. A fintech platform that digitizes and secures tandas (community savings pools) through WhatsApp, combining Latin American community savings tradition with modern risk management technology.",
    github: "https://github.com/Enrikecm/Antaria",
    demo: "https://antaria.vercel.app/",
    votes: 26,
    points: 84,
    rating: 3.23,
  },
  {
    rank: 12,
    title: "Qoperacha",
    team: "Christopher, Luca y Daniel",
    category: "DeFi",
    description: "In the DeFi market, a second of volatility can wipe out years of equity. Qoperacha is the predictive shield that eliminates this risk: an autonomous manager that uses AI agents to detect crises and protect your capital on Monad in under a second.",
    github: "https://github.com/LexBP11/qoperacha_hack",
    demo: "http://qoperachahack.vercel.app/",
    votes: 29,
    points: 93,
    rating: 3.21,
  },
  {
    rank: 13,
    title: "Azist.me",
    team: "Jasmin, Daniela, Dafne, Jorge, Zaid y Fernando",
    category: "DeFi",
    description: "An application capable of declaring presence within a location at a defined time.",
    github: "https://github.com/imzzaidd/azist.me",
    demo: "https://front-two-delta.vercel.app/",
    votes: 30,
    points: 96,
    rating: 3.20,
  },
  {
    rank: 14,
    title: "Strope Pay",
    team: "Ricardo Fuentes",
    category: "Payments & Stablecoins",
    description: "Strope Pay is a dApp focused on enabling users to pay for services and subscriptions using stablecoins completely on-chain. A much more attractive version than Stripe.",
    github: "https://github.com/usainbluntmx/strope-pay",
    demo: "https://strope-pay.vercel.app/",
    votes: 28,
    points: 89,
    rating: 3.18,
  },
  {
    rank: 15,
    title: "MediTrack",
    team: "Andry Carmona, Sat Mitar, Ailed Duran",
    category: "Healthcare",
    description: "A blockchain platform that gives patients control of their clinical history, optimizing the connection between doctors, pharmacies and laboratories.",
    github: "https://github.com/Scarfdrilo/meditrack",
    demo: "https://meditrack-ruby.vercel.app",
    votes: 26,
    points: 80,
    rating: 3.08,
  },
  {
    rank: 16,
    title: "VENDO USDT",
    team: "CRYPTOMATA",
    category: "P2P",
    description: "P2P trading through messaging chats.",
    github: "https://github.com/Scarfdrilo/vendousdt",
    demo: "https://vendousdt.vercel.app/",
    votes: 26,
    points: 78,
    rating: 3.00,
  },
  {
    rank: 17,
    title: "BOTAZO",
    team: "Miriam Mejia Rojas, Lizeth Nallely Lopez Garcia, Gerardo Aguirre, Alan Cardoso, Hector Centeno, Edgar Ramirez",
    category: "AI Agents",
    description: "BOTAZO is an intelligent personal savings agent that detects and alerts you to the best deals at the exact moment you need them.",
    github: "https://github.com/Axolo-Tech/botazo-savings-buddy",
    demo: "https://botazo-savings-buddy.lovable.app/dashboard",
    votes: 32,
    points: 96,
    rating: 3.00,
  },
  {
    rank: 18,
    title: "PERSEA Protocol",
    team: "Petra, Diego Rivero, Anette Rivera",
    category: "DeFi",
    description: "PERSEA Protocol is a decentralized platform that digitizes the traceability and utilization of all avocado waste from Michoacan: pit, skin, discarded pulp and pruning biomass.",
    github: "https://github.com/Luis-Cwk/persea-protocol",
    demo: "https://frontend-beta-swart-12.vercel.app/",
    votes: 32,
    points: 92,
    rating: 2.88,
  },
];

// ─── Blitz 2: Monad Blitz Online (March 27, 2026) ───

export const blitz2Submissions: Submission[] = [
  {
    rank: 1,
    title: "TuFi",
    team: "Arturo",
    category: "DeFi, Compliance, Taxes",
    description: "High-Performance Yields on Monad. Institutional-Grade Compliance in Mexico.",
    github: "https://github.com/ArturVargas/ironclaw",
    demo: "https://tufi-933522870987.us-west1.run.app",
    tweet: "https://x.com/0xVato/status/2037666491353461138",
    votes: 35,
    points: 139,
    rating: 3.97,
  },
  {
    rank: 2,
    title: "NODEMESH",
    team: "Richi XBT",
    category: "DePIN",
    description: "Nodemesh is a VPN running on Monad blockchain. Users benefit from security, decentralization and scalability while staying anonymous online.",
    github: "https://github.com/usainbluntmx/nodemesh",
    demo: "https://nodemesh.vercel.app/",
    tweet: "https://x.com/usainbluntmx/status/2037669157764727044",
    votes: 33,
    points: 124,
    rating: 3.76,
  },
  {
    rank: 3,
    title: "Localizame",
    team: "Angel Gamaliel",
    category: "Security",
    description: "App that helps people in dangerous situations send alerts to their closest circle.",
    github: "https://github.com/ferichan089-lang/LOCALIZAME",
    demo: "https://Localizame1.vercel.app/",
    tweet: "https://x.com/fruteroclub/status/2037610646527787459",
    votes: 25,
    points: 93,
    rating: 3.72,
  },
  {
    rank: 4,
    title: "Concordia",
    team: "Alex Soto",
    category: "Capital Allocation",
    description: "Concordia transforms direct participant experience into a verifiable signal for grant allocation. Instead of relying solely on internal reports, Concordia allows event attendees to collectively validate its value — recording that verdict simply and transparently.",
    github: "https://github.com/alexsotodigital/concordia",
    demo: "https://concordia-jet.vercel.app/",
    tweet: "https://x.com/alexsotodigital/status/2037670009397215269",
    votes: 34,
    points: 125,
    rating: 3.68,
  },
  {
    rank: 5,
    title: "Monad Savings",
    team: "Nayeli Chavez",
    category: "DeFi",
    description: "Monad Savings is a decentralized savings platform built on Monad Testnet, designed as a transparent alternative to traditional savings insurance. Users deposit tokens, choose a term (30, 60, or 90 days) and receive fixed returns of up to 20% APY.",
    github: "https://github.com/godin-001/monad-savings-platform",
    demo: "https://github.com/godin-001/monad-savings-platform/blob/master/pitch/demo.html",
    tweet: "https://x.com/NayeliChZ_zehn/status/2037670724979015847",
    votes: 34,
    points: 120,
    rating: 3.53,
  },
  {
    rank: 6,
    title: "skillchain",
    team: "eeelien",
    category: "DeFi",
    description: "AI agent that helps students, devs and companies create and find jobs in a personalized way.",
    github: "https://github.com/eeelien/proofchain-monad",
    demo: "https://www.loom.com/share/3316c6f4b10f4b8f915b9549489ba337",
    tweet: "https://x.com/39eeeliens/status/2037672242415362381",
    votes: 32,
    points: 112,
    rating: 3.50,
  },
  {
    rank: 7,
    title: "BetChain",
    team: "molina.fernandez, Joahan Morales, Sebastian Jara",
    category: "Casino",
    description: "BetChain is an on-chain casino built on Monad Testnet that fuses entertainment, savings and social impact. Every bet generates real savings in tokenized CETES (Stablebonds) via Etherfuse, while a percentage is donated to a social cause.",
    github: "https://github.com/Seebaastiaan/HackBlitz",
    demo: "https://hack-blitz-gilt.vercel.app/lobby",
    tweet: "https://x.com/joahan_morap/status/2037674572892254271",
    votes: 29,
    points: 100,
    rating: 3.45,
  },
  {
    rank: 8,
    title: "Proof Of Fiesta",
    team: "Andres, Gerardo Vela, Fernanda Tello",
    category: "AI Agents",
    description: "Proof of Party (POP) transforms web3 social events. Users check-in on-chain (Monad Testnet), lock USDC into a CrudaEscrow contract, and an AI Agent verifies their hangover state via voice — automatically releasing escrow funds for breakfast delivery.",
    github: "https://github.com/SegFaultPapi/proof-of-party",
    demo: "https://proof-of-party.vercel.app/",
    tweet: "https://x.com/Cripto_UNAM",
    votes: 31,
    points: 107,
    rating: 3.45,
  },
  {
    rank: 9,
    title: "NextHealth",
    team: "Carlos Navarrete Tapia",
    category: "Health",
    description: "NextHealth unifies the patient medical record, automatically analyzes biomarkers, converts progress into an interactive visual experience, and rewards people when they improve their health. Combines health, AI, interoperability, gamification and on-chain technology.",
    github: "https://github.com/Carlos-Software-Engineer-1999",
    demo: "https://carechain.vercel.app/",
    tweet: "https://x.com/Carlos75076898/status/2037678822535958955",
    votes: 30,
    points: 103,
    rating: 3.43,
  },
  {
    rank: 10,
    title: "Tick3t",
    team: "Guillermo Martinez",
    category: "NFT",
    description: "Tick3t is a cultural access platform that transforms the ticketing experience into a digital passport, integrating tickets, history and tours in one interface.",
    github: "https://github.com/driano7/museum.git",
    demo: "https://youtu.be/0aGKtv42C_I",
    tweet: "https://x.com/ZandorIArtist/status/2037672137780056167",
    votes: 33,
    points: 111,
    rating: 3.36,
  },
  {
    rank: 11,
    title: "Agente Autonomo Urbano",
    team: "contacto@irwingduran.com",
    category: "DeFi",
    description: "A single agent that plans your route, reserves your spot, pays your bill and verifies everything on-chain for local businesses. Transport, food, events, payments and more resolved in seconds.",
    github: "https://github.com/Irwingduran/monad-blitz.git",
    demo: "https://ondamonad.vercel.app/",
    tweet: "https://x.com/Irwingduran/status/2037673513956291001",
    votes: 33,
    points: 111,
    rating: 3.36,
  },
  {
    rank: 12,
    title: "Zento",
    team: "Edgar Lopez Baeza",
    category: "Gaming & DeFi",
    description: "Zento is a platform where users deposit money that generates yield in CETES while competing in minigames; at the end, the player with the best score wins those gains.",
    github: "https://github.com/Oni7u7/Zento",
    demo: "https://zento-omega.vercel.app/",
    tweet: "https://x.com/jonathansf04/status/2037668751135383638",
    votes: 32,
    points: 105,
    rating: 3.28,
  },
  {
    rank: 13,
    title: "MORRAYA",
    team: "Zoe",
    category: "Savings",
    description: "Every online purchase is an investment opportunity. MORRAYA takes advantage of it. A Chrome extension that detects purchase amounts, calculates rounding residue and automatically invests it in tokenized CETES via Etherfuse, using Monad blockchain.",
    github: "https://github.com/zoe718/Morraya",
    demo: "https://github.com/zoe718/Morraya",
    tweet: "https://x.com/Zoe777_18_",
    votes: 32,
    points: 103,
    rating: 3.22,
  },
  {
    rank: 14,
    title: "MonadPaymentRails",
    team: "sergioenriquea",
    category: "AI Agents",
    description: "Autonomous payment infrastructure between AI agents, where one agent can sell services to another and collect in USDC completely automatically, without human intervention.",
    github: "https://github.com/SergioFinix/Pagos-en-monad",
    demo: "https://www.youtube.com/watch?v=smYGQExBiVo",
    tweet: "https://x.com/SergioFenix10",
    votes: 33,
    points: 97,
    rating: 2.94,
  },
  {
    rank: 15,
    title: "futbolito monad",
    team: "Edgadafi",
    category: "Gaming",
    description: "A football game to take shots with a single button, score goals, earn credits, play online and enjoy the World Cup 2026 atmosphere.",
    github: "https://github.com/Edgadafi/futbolito-monad-blitz",
    demo: "https://removal-yourself-termination-lace.trycloudflare.com/",
    tweet: "https://x.com/edgadafi/status/2037665363807043699",
    votes: 35,
    points: 101,
    rating: 2.89,
  },
  {
    rank: 16,
    title: "Freestyle Battle",
    team: "Leonel Vazquez",
    category: "SocialFi",
    description: "Freestyle Battle brings freestyle rap battles onchain. Two MCs compete live while the audience pays to enter, watches in real time, and votes for the winner — all from their wallets.",
    github: "https://github.com/leovaz/freestylebattle",
    demo: "https://frontend-rust-two-76.vercel.app/",
    tweet: "https://x.com/neuroxider/status/2037673699634012236",
    votes: 33,
    points: 88,
    rating: 2.67,
  },
];

export const blitz4Submissions: Submission[] = [
  { rank: 1, title: "MyHealth", team: "Daniel Aguilar", category: "DeMed", description: "Tu seguro de vida digital: información médica crítica y alertas en tiempo real con un solo toque de manera descentralizada", github: "https://github.com/ManuelCanulDev/MyHealth", demo: "https://my-health.grupokamar.com.mx/", tweet: "https://x.com/4liyat/status/2048099563810992528?s=20", votes: 32, points: 103, rating: 3.22 },
  { rank: 2, title: "MiZona", team: "David", category: "BlockChain", description: "Mi Zona transforma el miedo en información accionable. Somos una plataforma de seguridad colaborativa que utiliza criptografía para validar incidentes sin vulnerar al usuario. Propuesta: Mapa de riesgo dinámico y gratuito para el ciudadano. Modelo: Monetización de data estratégica para sectores de logística, seguros y real estate. Visión: Proyecto escalable con miras a PosibleMTY y Reto Zapopan, enfocado en construir un México mejor a través de ciudadanos conectados y protegidos. Porque para crear un mejor México, necesitamos mejores mexicanos.", github: "https://github.com/Lopsan03/MiZona", demo: "https://mi-zona.vercel.app/", votes: 34, points: 108, rating: 3.18 },
  { rank: 3, title: "TrepaCerros", team: "Damian Torres", category: "NFT", description: "Sal, recolecta basura en los senderos de Guadalajara, y monetiza tu trepada en la red Monad. Cada trepada se firma en Monad y convierte impacto local en valor on-chain.", github: "https://github.com/damiantorresmx11/trepacerros-blitz-gdl", demo: "https://trepacerros.xyz/", votes: 33, points: 101, rating: 3.06 },
  { rank: 4, title: "Solar Chain MX", team: "Tania", category: "Sustentability", description: "Plataforma P2P de compraventa de energía solar entre vecinos, construida sobre Monad blockchain.", github: "https://github.com/Tania-Sec/Solar-Chain", demo: "https://solar-chain-five.vercel.app/", votes: 34, points: 104, rating: 3.06 },
  { rank: 5, title: "Alpo", team: "Nefertari Garcia", category: "Social Impact & Safety", description: "Herramienta de detección temprana de señales de reclutamiento criminal hacia menores mediante análisis de audio con evidencia anclada en Monad.", github: "https://github.com/Nefertari-Garcia/ALPO.git", demo: "https://alpo2.vercel.app", tweet: "https://x.com/alexisl17686518/status/2047990198630297895?s=46&t=3kmrAptl-eCXzxdeLmQ3lA", votes: 33, points: 97, rating: 2.94 },
  { rank: 6, title: "Propio", team: "Diego", category: "RWA", description: "Plataforma para inversión fraccionada en bienes raíces con propiedad y gobernanza respaldadas on-chain.", github: "https://github.com/Chere3/propio", demo: "https://propio.vercel.app/", tweet: "https://x.com/CristianUbiarco/status/2048083896797888982", votes: 34, points: 96, rating: 2.82 },
  { rank: 7, title: "TokenAgua", team: "Jesus Fernandez", category: "DeFi", description: "dApp de gestión hídrica descentralizada que incentiva el reporte ciudadano de fugas con recompensas en tokens AGUA.", github: "https://github.com/JAFT3/TokenAgua-Monad", demo: "https://token-agua-monad.vercel.app", tweet: "https://x.com/vitaal016/status/2048098240264847780?s=46&t=zrfonqkKZsGWfwbfooY0vA", votes: 32, points: 90, rating: 2.81 },
  { rank: 8, title: "Nido", team: "JOSE ernesto RAMIREZ", category: "Consumer app", description: "Red descentralizada de hospitalidad sobre Monad que recompensa reseñas confiables y reputación transparente entre anfitriones y viajeros.", github: "https://github.com/MetaNetMx/trust", demo: "https://trust-xi-rust.vercel.app/", tweet: "https://x.com/VecinoFederacha/status/2048084725974065357?s=20", votes: 34, points: 94, rating: 2.76 },
  { rank: 9, title: "BIO REACTOR TOKEN", team: "MA4KO", category: "SALUD", description: "Bio reactor para cultivo tecnificado orientado a producción de proteína.", github: "https://github.com/godin-001/bioreactor-token-mvp", demo: "https://brt-mvp.vercel.app/", tweet: "https://x.com/Markocut/status/2048095651951497358?s=20", votes: 32, points: 88, rating: 2.75 },
  { rank: 10, title: "StockBuddy", team: "Saul Rangel", category: "Supply chain", description: "Asistente de inventario por voz y fotografía para pequeños negocios, con trazabilidad inmutable en blockchain.", github: "https://github.com/Makifrut1/stockbuddy-ai-assistant", demo: "https://stockbuddy-ai-assistant.vercel.app/", votes: 30, points: 80, rating: 2.67 },
  { rank: 11, title: "Ruta Sagrada ... Donde Nacen las Leyendas", team: "Anabell Hernández Flores", category: "Consumer App", description: "Experiencia que convierte la ruta del aficionado en un ciclo vivo de historia, legado y activos coleccionables.", github: "https://github.com/soyanabellh-maker/sacred-route-monad", demo: "https://sacred-route-monad.lovable.app/", votes: 33, points: 87, rating: 2.64 },
  { rank: 12, title: "AgentSuite", team: "Robin", category: "AI Agents", description: "Agentic ERP que automatiza operaciones empresariales con tareas de AI en segundo plano.", github: "https://github.com/robinhodl69/AgentSuite", demo: "https://agent-suite-plum.vercel.app/", tweet: "https://x.com/robinhodl69/status/2048083511479783860?s=20", votes: 34, points: 85, rating: 2.50 },
  { rank: 13, title: "Monadpolis", team: "Irwing", category: "AI, Attestations", description: "Agente urbano conversacional para experiencias mundialistas con contexto local y verificación on-chain.", github: "https://github.com/Irwingduran/monad-blitz-gdl.git", demo: "https://monadpolis.vercel.app/", tweet: "https://x.com/Irwingduran/status/2048093581496242558?s=20", votes: 32, points: 73, rating: 2.28 },
  { rank: 14, title: "Avalo", team: "Joel Buenrostro", category: "Consumer app", description: "Smart escrow para depósitos de renta en Monad.", github: "https://github.com/JoelBuenrostro/Avalo", demo: "https://avalo-eta.vercel.app/", tweet: "https://x.com/esteGeek/status/2047931852107690434", votes: 34, points: 77, rating: 2.26 },
  { rank: 15, title: "Masa Crítica", team: "Alier Sánchez", category: "RWA, B2B Marketplace, Supply Chain", description: "Marketplace B2B que consolida demanda y oferta de pequeños productores con compromisos registrados on-chain.", github: "https://github.com/geouno/masa-critica", demo: "https://masa-critica-web.vercel.app/", tweet: "https://x.com/hytemax/status/2048097949683437655", votes: 33, points: 74, rating: 2.24 },
  { rank: 16, title: "FlowChain", team: "AMERICA NEFTALI RAMIREZ MEDINA", category: "vehículos autónomos", description: "Aplicación para coordinación inteligente del tráfico con incentivos en blockchain.", github: "https://github.com/godin-001/flowchain-mvp", demo: "https://flowchain-mvp.vercel.app/", tweet: "https://x.com/AmricaRamr72334/status/2048084310280855977?s=20", votes: 32, points: 68, rating: 2.13 },
  { rank: 17, title: "MonadTube", team: "Manuel Rivera", category: "Consumer", description: "Streaming platform que cobra por segundo consumido y habilita tips con efectos en tiempo real.", github: "https://github.com/menuRivera/monad-tube", demo: "https://github.com/menuRivera/monad-tube", votes: 35, points: 74, rating: 2.11 },
  { rank: 18, title: "Perpetuo flow", team: "Vianney Rivera", category: "Consumer App", description: "POS conversacional para clientes de cafetería.", github: "https://github.com/godin-001/perpetuo-flow", demo: "https://perpetuo-flow.vercel.app/", votes: 22, points: 43, rating: 1.95 },
];

// ─── YouTube Streams ───

export const youtubeStreams = [
  {
    title: "Intro to Blitz 1",
    url: "https://www.youtube.com/live/5EjcMuisS-Y",
    views: 51,
    channel: "Frutero Club",
    event: "Blitz 1",
  },
  {
    title: "Demo Day Blitz 1",
    url: "https://www.youtube.com/live/wESkRnWvNRM",
    views: 45,
    channel: "Frutero Club",
    event: "Blitz 1",
  },
  {
    title: "Interview with Mobil3 Founder",
    url: "https://www.youtube.com/live/kNmioOv5zw8",
    views: 40,
    channel: "Frutero Club",
    event: "Blitz 1",
  },
  {
    title: "Demo Day Blitz 2 (Part 1)",
    url: "https://www.youtube.com/live/Q4tMZvJaPms",
    views: 27,
    channel: "Mobil3",
    event: "Blitz 2",
  },
  {
    title: "Demo Day Blitz 2 (Part 2)",
    url: "https://www.youtube.com/live/ZjbIktTvii4",
    views: 12,
    channel: "Mobil3",
    event: "Blitz 2",
  },
  {
    title: "Frutero Talk #43 Cómo conquistar un Monad Blitz cuando el primer intento no fue suficiente",
    url: "https://www.youtube.com/live/6rUIpbpuRiQ?si=LtVjkCyNSg5r1QuO",
    views: 20,
    channel: "Frutero Club",
    event: "Builder follow-up",
  },
  {
    title: "Frutero Talk #42 Del Blitz al podio: Cómo el talento frutal conquistó TalentLand 2026 con @godinez_ai",
    url: "https://www.youtube.com/live/dFwQjS5pxlw?si=5XQvFZTGjRHXrwXH",
    views: 24,
    channel: "Frutero Club",
    event: "Builder follow-up",
  },
  {
    title: "Moltiverse Hackathon - Aibus Dumbleclaw | Headmistress of Clawarts",
    url: "https://www.youtube.com/live/wESkRnWvNRM?si=NvJDlK4rIe1jC8gc",
    views: 48,
    channel: "Frutero Club",
    event: "Moltiverse support",
  },
  {
    title: "Monad Blitz Monterrey - Inauguración",
    url: "https://www.youtube.com/watch?v=mMmrzpWhBdw",
    views: 11,
    channel: "Frutero Club",
    event: "Blitz MTY",
  },
  {
    title: "Monad Blitz Monterrey - Demo Day",
    url: "https://www.youtube.com/watch?v=SbV_D0ylJsY",
    views: 28,
    channel: "Frutero Club",
    event: "Blitz MTY",
  },
  {
    title: "Monad Blitz Guadalajara - Ceremonia de Apertura",
    url: "https://www.youtube.com/watch?v=kqNaF-DyhXs",
    views: 8,
    channel: "Frutero Club",
    event: "Blitz GDL",
  },
  {
    title: "Monad Blitz Guadalajara - Demo day",
    url: "https://www.youtube.com/watch?v=kDp-EQCflRM",
    views: 25,
    channel: "Frutero Club",
    event: "Blitz GDL",
  },
];

// ─── Social Stats ───

export const socialStats = {
  fruteroImpressions: 38665,
  fruteroLikes: 932,
  partnerImpressions: 47131,
  partnerLikes: 1420,
  videoViews: 7786,
  videoLikes: 218,
  totalImpressions: 93582,
  totalLikes: 2570,
};

// ─── Mentors — Blitz 2 ───

export interface Mentor {
  name: string;
  role: string;
  expertise: string;
  twitter?: string;
}

export interface SocialPost {
  url: string;
  impressions: number;
  likes: number;
  source: "Frutero" | "Partner" | "Video";
}

export interface BlitzEventMetric {
  key: "blitz1" | "blitz2" | "blitz3" | "blitz4";
  label: string;
  title: string;
  date: string;
  lumaUrl: string;
  registrations: number;
  checkIns: number | null;
  checkInsDisplay?: string;
}

export const blitz2Mentors: Mentor[] = [
  { name: "Mel", role: "Founder, Frutero Club", expertise: "Founder-level product and ecosystem guidance", twitter: "troopdegen" },
  { name: "Jazz", role: "Community Lead, Frutero Club", expertise: "Community activation and builder support", twitter: "driade_1" },
  { name: "Maria Fernanda Gonzalez", role: "Founder, KostikMex", expertise: "Strategic communications and founder support", twitter: "FERIKI" },
  { name: "Fernanda Tello", role: "Founder, Cripto_UNAM", expertise: "Blockchain education and Web3 ecosystem building", twitter: "Feer_Teello" },
  { name: "Denise Flores", role: "Ambassador, Women in GameX", expertise: "Digital strategy, gaming and community building", twitter: "Dencyborg" },
  { name: "Brian Lopez", role: "DevRel Lead, Frutero Club", expertise: "Developer relations and technical builder support", twitter: "LPBrayan0" },
  { name: "Sol", role: "Founder, AnguloWeb3", expertise: "Community-led Web3 education and founder support", twitter: "solxpriestess" },
  { name: "Vialvalv", role: "Building Opportuni", expertise: "Opportunity design and ecosystem collaboration", twitter: "Vialvalv" },
  { name: "Wendy Lopez", role: "Founder, bythelabxyz", expertise: "Growth marketing and creative strategy", twitter: "Wenlopezn" },
];

export const blitz1Mentors: Mentor[] = [
  { name: "Mel", role: "Founder, Frutero Club", expertise: "Founder-level product and ecosystem guidance", twitter: "troopdegen" },
  { name: "Jazz", role: "Community Lead, Frutero Club", expertise: "Community activation and builder support", twitter: "driade_1" },
  { name: "Maria Fernanda Gonzalez", role: "Founder, KostikMex", expertise: "Strategic communications and founder support", twitter: "FERIKI" },
  { name: "Vale Creativo", role: "COO, Frutero Club", expertise: "Operations, ideation and pitch coaching", twitter: "ValeCreativo" },
  { name: "Scarf", role: "Tech Lead, Frutero Club", expertise: "Web3 architecture, development and tooling", twitter: "0xscarf" },
  { name: "Fernanda Tello", role: "Founder, Cripto_UNAM", expertise: "Blockchain education and Web3 ecosystem building", twitter: "Feer_Teello" },
  { name: "Cindy Jimenez", role: "Kompensa", expertise: "Fintech, payments and compliance", twitter: "signnitt" },
  { name: "Denise Flores", role: "Ambassador, Women in GameX", expertise: "Digital strategy, gaming and community building", twitter: "Dencyborg" },
  { name: "Brian Lopez", role: "DevRel Lead, Frutero Club", expertise: "Developer relations and technical builder support", twitter: "LPBrayan0" },
];

export const blitz3Mentors: Mentor[] = [
  { name: "Priscila", role: "Strategist & Co-founder", expertise: "Technology adoption, community building and digital experiences", twitter: "granmetanoia" },
  { name: "Paulina Nito", role: "Visual Artist", expertise: "Collective creation, documentary research, affective ecologies and collaborative methodologies" },
  { name: "yoSoyDev.eth", role: "Core Team, Ethereum México / ETH MTY", expertise: "Technical leadership and DevRel for Ethereum communities", twitter: "yoSoyDev_eth" },
  { name: "Cynthia Castillo", role: "Data Visualization Engineer, Zillow", expertise: "Data visualization and interactive systems", twitter: "LaMatemaga" },
  { name: "Pablo César Ruiz", role: "Co-founder, vidata.mx", expertise: "Data products and startup building" },
  { name: "Mexi", role: "Host, BandaWeb3", expertise: "Community building and educational formats", twitter: "meximalist" },
  { name: "Scarf", role: "Tech Lead, Frutero Club", expertise: "Web3 architecture, development and tooling", twitter: "0xscarf" },
  { name: "Vale Creativo", role: "COO, Frutero Club", expertise: "Operations, ideation and pitch coaching", twitter: "ValeCreativo" },
  { name: "Brian Lopez", role: "DevRel Lead, Frutero Club", expertise: "Developer relations and technical builder support", twitter: "LPBrayan0" },
  { name: "Luisa Cande", role: "Founder, CryptoBrunch", expertise: "Community building and founder support", twitter: "Kalipssoh" },
  { name: "Ema Cripto", role: "Marketing Lead, Frutero Club", expertise: "Marketing, narrative and non-technical mentoring", twitter: "EmaCr1pto" },
];

export const blitz4Mentors: Mentor[] = [
  { name: "Brenda Vazquez", role: "Product Design Specialist", expertise: "Product design and builder guidance" },
  { name: "Brian Lopez", role: "DevRel Lead, Frutero", expertise: "Technical mentoring and developer relations", twitter: "LPBrayan0" },
  { name: "Ema Cripto", role: "Marketing Lead, Frutero Club", expertise: "Non-technical mentoring, marketing and narrative support", twitter: "EmaCr1pto" },
  { name: "Vale Creativo", role: "Director of Operations", expertise: "Technical and non-technical mentoring", twitter: "ValeCreativo" },
  { name: "Scarf", role: "Technical Lead", expertise: "Technical mentoring and Web3 architecture", twitter: "0xscarf" },
];

export const blitz3Submissions: Submission[] = [
  { rank: 1, title: "SOFIA BY MONAD", team: "Guillermo Angel Arevalo", category: "Education", description: "Sofia is an AI-powered learning ecosystem that turns study into a tangible digital asset through real-time learning validation, on-chain rewards and academic identity on Monad.", github: "https://github.com/Gireru/sofiamonad", demo: "https://sofia-ia-monad.base44.app", tweet: "https://x.com/gireruguille/status/2045638749560721416?s=46", votes: 21, points: 72, rating: 3.43 },
  { rank: 2, title: "Aforo", team: "Julio Flores", category: "Payments, DeFi, Lending", description: "Aforo advances working capital for Mexican SMEs using receivables-backed liquidity pools on Monad, helping businesses get paid instantly instead of waiting weeks.", github: "https://github.com/julioworklab/aforo", demo: "https://aforo-monad.vercel.app/", tweet: "https://x.com/Julioafs/status/2045652132292952131?s=20", votes: 20, points: 67, rating: 3.35 },
  { rank: 3, title: "Cadena de Tierra", team: "Esdras Josue", category: "RWA", description: "RWA protocol focused on tokenizing caliche and bringing real-world materials on-chain.", github: "https://github.com/W4RW1CK/Cadena-de-tierra", demo: "https://cadena-de-tierra-j8a9576rb-ejcv0403-2007s-projects.vercel.app/", tweet: "https://x.com/nadia_natera/status/2045650923125420336", votes: 17, points: 57, rating: 3.35 },
  { rank: 4, title: "FlipChain", team: "Yarek Alejandro Olivares Meneses", category: "Gaming", description: "Competitive trivia platform where players join stake-based rounds, support an NGO and compete for the remaining prize pool.", github: "https://github.com/hdmartinezm/Blitz-Monad", demo: "http://192.168.1.50:3002", tweet: "https://x.com/HDMARTINEZM/status/2045647288731590999", votes: 20, points: 64, rating: 3.20 },
  { rank: 5, title: "MachineChain", team: "Alejandro Zendejas", category: "DeFi", description: "AI-powered parametric insurance infrastructure that connects industrial IoT sensors to smart contracts and automates payouts in under 10 seconds.", github: "https://github.com/yaus40393/v0-machinechain-landing-page", demo: "https://github.com/yaus40393/MONAD_BLITZ", tweet: "https://x.com/home", votes: 20, points: 63, rating: 3.15 },
  { rank: 6, title: "Stone", team: "David", category: "Collaboration", description: "MonEscrow is a decentralized freelance escrow platform with milestone-based smart contracts, trustless payouts and on-chain reputation.", github: "https://github.com/Lopsan03/Stone", demo: "https://stone-bay.vercel.app/", tweet: "https://x.com/1800unoob/status/2045637202013552788", votes: 20, points: 63, rating: 3.15 },
  { rank: 7, title: "Claim Rewards", team: "Candeluisa", category: "Finance", description: "Trustless influencer campaign marketplace for LATAM crypto brands and nano-influencers with escrow, delivery attestation and portable reputation.", github: "https://github.com/candeluisa/claimrewards", demo: "https://claimrewards-yhss.vercel.app/", tweet: "https://x.com/Kalipssoh/status/2045652541233405981?s=20", votes: 21, points: 64, rating: 3.05 },
  { rank: 8, title: "Liora", team: "Surisadday Bonfil", category: "Payments", description: "On-chain escrow platform for freelancers and clients, ensuring simple and transparent payments without unnecessary intermediaries.", github: "https://github.com/godin-001/liora-monad", demo: "https://frontend-sigma-coral-56.vercel.app/", tweet: "https://x.com/sienna451/status/2045636151168340395?s=46", votes: 21, points: 60, rating: 2.86 },
  { rank: 9, title: "Healtech", team: "Jaime Pina", category: "Health", description: "Platform for portable medical records that helps people share health history anywhere for faster and more accurate care.", github: "https://github.com/JimmyDeveloper/Saludmonad", demo: "https://medivaul.lovable.app", tweet: "https://x.com/@pachugam50332", votes: 17, points: 48, rating: 2.82 },
  { rank: 10, title: "Monad's Monad", team: "Cynthia Castillo", category: "Data Viz", description: "Real-time 3D visualization that makes Monad's parallel transaction execution visible by comparing it against Ethereum and BNB Chain.", github: "https://github.com/LaMatemaga/hackathon-monad", demo: "https://hackathon-monad.vercel.app/", tweet: "https://x.com/LaMatemaga/status/2045653964104835262", votes: 21, points: 58, rating: 2.76 },
  { rank: 11, title: "Abasto", team: "Emmanuel Martinez", category: "Supply Chain", description: "Medication traceability and standardization platform for Mexican health institutions.", github: "https://github.com/godin-001/abasto-monad-blitz", demo: "https://frontend-one-gray-11.vercel.app/", tweet: "https://x.com/EmaCr1pto/status/2045634632897421778", votes: 21, points: 56, rating: 2.67 },
  { rank: 12, title: "Artesanal Supply Chain", team: "Alejandro", category: "Supply Chain", description: "Mexican crafts with verifiable provenance and traceability.", github: "https://github.com/ALIA2cripto/Artesanal-SupplyChain", demo: "https://artesanal-supply-chain.vercel.app/", tweet: "https://x.com/alexnavafemat", votes: 18, points: 43, rating: 2.39 },
  { rank: 13, title: "hooks4winners", team: "Irwing", category: "Content, Legal, Data, Retail", description: "Marketplace for verified, specialized content designed for virality.", github: "https://github.com/irwingtello/hooks4winners", demo: "https://github.com/irwingtello/hooks4winners", tweet: "https://x.com/defiforhumanity/status/2045643794897387752", votes: 21, points: 48, rating: 2.29 },
  { rank: 14, title: "liart", team: "Juan", category: "Gaming", description: "Cute RPG built on Monad.", github: "https://github.com/Scarfdrilo/monad-blitz", demo: "https://monad-blitz-liart.vercel.app/", tweet: "https://x.com/wormsbox_node", votes: 11, points: 21, rating: 1.91 },
  { rank: 15, title: "LORD SUPREME HYPERCHAD GIGAFARM", team: "godofdeath", category: "DeFi", description: "Minimal and heavily branded DeFi protocol on Monad testnet where users deposit MON and earn HYPR tokens over time.", github: "https://github.com/gitlab/:https://gitlab.com/HackerMasterTheRulerOfLifeAndDeath/monad-testing", demo: "https://gitlab.com/HackerMasterTheRulerOfLifeAndDeath/monad-testing", tweet: "https://x.com/MonadCommunity/status/1978092498409935191", votes: 12, points: 22, rating: 1.83 },
  { rank: 16, title: "Monad Terminal Academy", team: "Mexi", category: "Education", description: "On-chain educational MUD that teaches terminal basics and rewards learners with TERM tokens on Monad testnet.", github: "https://github.com/mexiweb3/monad-terminal-academy", demo: "https://blitz.mexi.wtf/webclient/", tweet: "https://x.com/meximalist/status/2045633515732037757?s=20", votes: 11, points: 20, rating: 1.82 },
  { rank: 17, title: "Monad Market", team: "Erezedor", category: "Prediction Market", description: "Draft prediction market with ZK proofs implementation for trader protection.", github: "https://github.com/thetan180/blitzMonterrey", demo: "https://monad-testnet.socialscan.io/address/0x43ceb63962335c83b13c1444967dad25ad8cc616", tweet: "https://x.com/monad_eco", votes: 11, points: 20, rating: 1.82 },
  { rank: 18, title: "Negative stake chain", team: "blitzmaster", category: "DeFi", description: "Minimal DeFi protocol on Monad testnet where users stake MON and earn MRT rewards linearly over time.", github: "https://github.com/kadevexler/monad-testnet-hack-super", demo: "https://github.com/kadevexler/monad-testnet-hack-super", tweet: "https://x.com/MonadCommunity/status/1978092498409935191", votes: 10, points: 16, rating: 1.60 },
  { rank: 19, title: "TrustDrop", team: "OpenFruterito", category: "DeFi", description: "On-chain public promises app where users escrow funds against a goal and recover or redirect funds based on completion.", github: "https://github.com/fruterito101/TrustDrop", demo: "https://frontend-p74514bez-fruteroclub.vercel.app/", tweet: "https://x.com/i/status/2045647300593160531", votes: 10, points: 16, rating: 1.60 },
];

export const socialPosts: SocialPost[] = [
  { url: "https://x.com/fruteroclub/status/2014067311263510913", impressions: 4525, likes: 70, source: "Frutero" },
  { url: "https://www.instagram.com/p/DVCbDZmDrSd/", impressions: 1876, likes: 67, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2016239863733842066", impressions: 1458, likes: 18, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2024230169221718403", impressions: 1390, likes: 17, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2044190063244759270", impressions: 1268, likes: 31, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2024571394105766122", impressions: 1156, likes: 9, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2044959859733409983", impressions: 1005, likes: 18, source: "Frutero" },
  { url: "https://x.com/fruteroclub/status/2036600918817312935", impressions: 965, likes: 35, source: "Frutero" },
  { url: "https://x.com/Julioafs/status/2045652132292952131", impressions: 2300, likes: 11, source: "Partner" },
  { url: "https://x.com/nicnode/status/2019194292242379040", impressions: 1584, likes: 61, source: "Partner" },
  { url: "https://x.com/Julioafs/status/2045801216857231837", impressions: 1570, likes: 33, source: "Partner" },
  { url: "https://x.com/ALFA_EDG/status/2025441141571895706", impressions: 1257, likes: 46, source: "Partner" },
  { url: "https://x.com/ToryDomK/status/2025245765157712280", impressions: 1175, likes: 31, source: "Partner" },
  { url: "https://x.com/ValeCreativo/status/2025619480320135431", impressions: 1130, likes: 43, source: "Partner" },
  { url: "https://x.com/fruteroclub/status/2021671863999779294", impressions: 1635, likes: 24, source: "Video" },
  { url: "https://x.com/fruteroclub/status/2029712246369099833", impressions: 911, likes: 13, source: "Video" },
  { url: "https://x.com/fruteroclub/status/2026728664193191994", impressions: 719, likes: 17, source: "Video" },
  { url: "https://x.com/fruteroclub/status/2041297704765050981", impressions: 610, likes: 15, source: "Video" },
  { url: "https://x.com/fruteroclub/status/2029252896953450842", impressions: 585, likes: 15, source: "Video" },
  { url: "https://x.com/signnitt/status/2029070010342359293", impressions: 443, likes: 13, source: "Video" },
  { url: "https://x.com/fruteroclub/status/2040143646524096729", impressions: 393, likes: 21, source: "Video" },
  { url: "https://www.youtube.com/live/5EjcMuisS-Y", impressions: 51, likes: 2, source: "Video" },
];

// ─── Sponsors — report scope reference only ───

export const blitz2Sponsors = [
  {
    name: "Monad Foundation",
    role: "Program Partner",
    url: "https://monad.xyz",
  },
];

export const blitzEventMetrics: Record<"blitz1" | "blitz2" | "blitz3" | "blitz4", BlitzEventMetric> = {
  blitz1: {
    key: "blitz1",
    label: "Blitz 1",
    title: "Monad Blitz Ciudad de México",
    date: "February 21, 2026",
    lumaUrl: "https://luma.com/6pk4opdb",
    registrations: 128,
    checkIns: 58,
  },
  blitz2: {
    key: "blitz2",
    label: "Blitz 2",
    title: "Monad Blitz Ciudad de México #2",
    date: "March 27, 2026",
    lumaUrl: "https://luma.com/blitz-cdmx-mar2026?tk=Tu03nM",
    registrations: 114,
    checkIns: 39,
  },
  blitz3: {
    key: "blitz3",
    label: "Blitz MTY",
    title: "Monad Blitz Monterrey",
    date: "April 18, 2026",
    lumaUrl: "https://luma.com/blitz-mty-apr-2026",
    registrations: 92,
    checkIns: 50,
  },
  blitz4: {
    key: "blitz4",
    label: "Blitz GDL",
    title: "Monad Blitz Guadalajara",
    date: "April 24-25, 2026",
    lumaUrl: "https://luma.com/blitz-gdl-apr-2026",
    registrations: 89,
    checkIns: 51,
  },
};

const uniqueMentorNames = new Set([
  ...blitz1Mentors.map((mentor) => mentor.name),
  ...blitz2Mentors.map((mentor) => mentor.name),
  ...blitz3Mentors.map((mentor) => mentor.name),
  ...blitz4Mentors.map((mentor) => mentor.name),
]);

const totalLumaRegistrations = Object.values(blitzEventMetrics).reduce((sum, event) => sum + event.registrations, 0);

// ─── Q1 2026 Aggregate Stats ───

export const q1Stats = {
  totalProjects: 71,
  totalVotes: 1914,
  blitz1Projects: 18,
  blitz2Projects: 16,
  blitz3Projects: 19,
  blitz4Projects: 18,
  totalImpressions: 93582,
  totalLikes: 2570,
  youtubeStreams: 12,
  hackathons: 4,
  blitz1Votes: 495,
  blitz2Votes: 513,
  blitz3Votes: 323,
  blitz4Votes: 583,
  totalLumaRegistrations,
  verifiedBuilderCheckins: 198,
  uniqueMentors: uniqueMentorNames.size,
  coworkingSessions: 12,
  officeHoursSessions: 24,
  workshops: 8,
  localActivations: 4,
  missionSupports: 3,
};

export interface BuilderToolMetric {
  date: string;
  label: string;
  conversations: number;
  spaces: number;
  messages: number;
  users: number;
}

export const godinezUsageMetrics: BuilderToolMetric[] = [
  { date: "2026-03-21", label: "Blitz 1 support window", conversations: 22, spaces: 9, messages: 947, users: 9 },
  { date: "2026-03-27", label: "Blitz 2 support window", conversations: 29, spaces: 17, messages: 541, users: 16 },
  { date: "2026-04-18", label: "Blitz MTY support window", conversations: 16, spaces: 7, messages: 1153, users: 7 },
  { date: "2026-04-25", label: "Blitz GDL support window", conversations: 16, spaces: 5, messages: 704, users: 6 },
];

export const builderPackLinks = [
  {
    title: "Builder Pack - Blitz CDMX",
    href: "https://fruteroclub.notion.site/Builder-Pack-Blitz-CDMX-330511282c03816ab592d6df19046b8d",
    note: "Single source of context for agenda, Monad resources, deliverables, pitch, submit flow, and Godínez onboarding.",
  },
  {
    title: "Builder Pack - Blitz Monterrey",
    href: "https://fruteroclub.notion.site/Builder-Pack-Blitz-Monterrey-345511282c03816bbb11e588cc25a97e",
    note: "Localized operating pack for Monterrey builders.",
  },
  {
    title: "Builder Pack - Blitz Guadalajara",
    href: "https://fruteroclub.notion.site/Builder-Pack-Blitz-Guadalajara-34c511282c038133b031de591caa7d6b?source=copy_link",
    note: "Localized operating pack for Guadalajara builders.",
  },
];

export const continuitySignals = [
  {
    title: "Frutero Talk #42: Del Blitz al podio",
    note: "Builders who entered through a Blitz later reached stronger competitive outcomes, including Talent Land 2026.",
  },
  {
    title: "Frutero Talk #43: Second-attempt builders improved and returned stronger",
    note: "Follow-up evidence that builders iterated after an earlier attempt instead of disappearing after the event.",
  },
];

export const strategicLearnings = [
  {
    title: "Builder intent increased despite bearish market sentiment",
    note: "Market sentiment in Mexico felt bearish, but builder intent rose. That was visible in the vibe coding bootcamp and in the hundred-plus builders who showed up across the Blitzes.",
  },
  {
    title: "Each city produced a different builder profile",
    note: "Ciudad de México skewed toward startup ambition, Monterrey toward practical industrial tools, and Guadalajara toward social and community problem-solving.",
  },
  {
    title: "Monad 101 had to become shorter and sharper",
    note: "After Blitz 2, it became clear the original workshop was too long. We shifted toward protocol benefits and venture-level use cases, which held attention better.",
  },
  {
    title: "Phase 2 can now funnel with more precision",
    note: "The pipeline is now segmented by geography, interests, and builder tendencies. That gives Phase 2 a more precise base for education and project acceleration.",
  },
];

export const deliveryEvidence = [
  { label: "In-person workshops", value: 3 },
  { label: "Remote workshops", value: 1 },
  { label: "University visits", value: 5 },
  { label: "Blitz events", value: q1Stats.hackathons },
];

export const ecosystemLinks = [
  {
    title: "Reto Zapopan",
    note: "Regional accelerator linkage that expanded the downstream path for promising builders and projects.",
  },
  {
    title: "Posible Nuevo León",
    note: "Regional accelerator linkage that strengthened founder-facing opportunity flow beyond the events themselves.",
  },
  {
    title: "Secretaría de Desarrollo Económico de Jalisco",
    note: "Institutional linkage that increased public-sector proximity around the Guadalajara activation layer.",
  },
  {
    title: "ReDi Guadalajara",
    note: "Strategic alliance with ReDi Guadalajara, the Red de Emprendimiento e Innovación, strengthening local ecosystem connectivity around the Guadalajara activation.",
  },
];

export const roadmapPhases = [
  {
    period: "First four-month period",
    title: "Brand presence, talent capture, builder education, and tool development",
    note: "This is the phase covered in the current report. The operating goal was to establish Monad presence, attract builders, educate them, and reduce friction with support tooling.",
  },
  {
    period: "Second four-month period",
    title: "AI + Monad builder education, talent funneling, and project acceleration",
    note: "The next phase focuses on AI plus Monad education, funneling talent coming from Blitzes and the vibe coding bootcamp, and accelerating the strongest projects.",
  },
  {
    period: "Third four-month period",
    title: "Incubation of tech ventures built on Monad in Mexico",
    note: "The final phase is designed to incubate technology ventures, potentially AI-agentic, that position Monad as the blockchain infrastructure beneath new tech entrepreneurship in Mexico.",
  },
];

export const universityVisits = [
  {
    title: "Universidad de la Comunicación",
    image: "/universities/universidad-comunicacion.jpg",
  },
  {
    title: "Universidad del Norte",
    image: "/universities/universidad-del-norte.jpg",
  },
  {
    title: "Casa Frutero",
    image: "/universities/casa-frutero.jpg",
  },
  {
    title: "UNAM",
    image: "/universities/unam.jpg",
  },
  {
    title: "UAM Cuajimalpa",
    image: "/universities/uam-cuajimalpa.jpg",
  },
];
