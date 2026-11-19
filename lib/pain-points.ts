import type { SeoLocale } from '@/lib/seo-content'

// Dual-track keyword matrix (retail + B2B) used by the on-page copy, the
// metadata keyword list and the footer internal links. Keeping it in one place
// prevents the classic SEO failure where the H1 targets retail intent while the
// meta keywords target resellers.
export const KEYWORD_MATRIX = {
  brand: ['Strong 4K IPTV', 'Strong 8K IPTV', 'STRONG 8K IPTV subscription'],
  retail: [
    'Strong 4K/8K IPTV',
    'IPTV Italia',
    'IPTV France',
    'IPTV Deutschland',
    'IPTV España',
    'Anti-Freeze 10.0 IPTV',
    '24 Hours Free Trial',
    'Buy IPTV Subscription for Firestick & Smart TV',
  ],
  retailIntent: [
    '99.9% uptime IPTV',
    'instant line delivery within 5 mins',
    'IPTV that supports all devices',
    'Serie A IPTV 4K',
    'Ligue 1 IPTV 4K',
    'Bundesliga IPTV 4K',
    'LaLiga IPTV 4K',
  ],
  b2b: [
    'IPTV Reseller Panel',
    'IPTV Credit Packages',
    'Buy IPTV Reseller Credits',
    'White-Label IPTV Panel',
    'Start IPTV Business',
  ],
  b2bIntent: [
    'bulk sub-account creation',
    'dedicated admin panel',
    'lowest cost per line',
    '120 / 240 / 360 credit packages',
  ],
} as const

export type PainCopy = {
  eyebrow: string
  title: string
  subtitle: string
  retailLabel: string
  retailTitle: string
  retailSub: string
  retailPoints: { title: string; desc: string }[]
  resellerLabel: string
  resellerTitle: string
  resellerSub: string
  resellerPoints: { title: string; desc: string }[]
  compareTitle: string
  compareSub: string
  compareBadLabel: string
  compareGoodLabel: string
  rows: { label: string; bad: string; good: string }[]
  ctaTrial: string
  ctaOrder: string
  ctaReseller: string
}

const EN: PainCopy = {
  eyebrow: 'Why STRONG 8K IPTV',
  title: 'Built for two very different buyers — and priced for both',
  subtitle:
    'Retail viewers want one thing: no freeze during the match. Resellers want one thing: the lowest cost per line with a panel they control. Same infrastructure, two dedicated paths.',
  retailLabel: 'For personal viewers',
  retailTitle: 'Watch every match without a single freeze',
  retailSub:
    'A subscription designed around live sport: Serie A, Ligue 1, Bundesliga and LaLiga at 8K/4K on the device you already own.',
  retailPoints: [
    {
      title: '99.9% Uptime',
      desc: 'Redundant edge servers per country and 24/7 monitoring keep the line online through the busiest match nights.',
    },
    {
      title: 'Anti-Freeze 10.0',
      desc: 'Adaptive bitrate plus a pre-load buffer: 8K steps down to 4K smoothly instead of freezing mid-action.',
    },
    {
      title: 'Instant Line Delivery within 5 mins',
      desc: 'Xtream Codes and M3U credentials land in your WhatsApp or Telegram chat right after payment.',
    },
    {
      title: 'Support All Devices',
      desc: 'Firestick, Android Box, Smart TV (LG/Samsung), iPhone, iPad, Windows and MAG — one subscription, every screen.',
    },
  ],
  resellerLabel: 'For resellers & B2B',
  resellerTitle: 'Start your own IPTV business this week',
  resellerSub:
    'Buy IPTV reseller credits once, run a white-label panel, resell lines at your own margin. No infrastructure, no monthly platform fee.',
  resellerPoints: [
    {
      title: 'Bulk Sub-account Creation',
      desc: 'Create, renew or suspend hundreds of lines in one action instead of one by one.',
    },
    {
      title: 'Dedicated Admin Panel',
      desc: 'Your own white-label panel with trial issuing, expiry control and live connection monitoring.',
    },
    {
      title: 'Lowest Cost Per Line',
      desc: 'From 1.92 $ per line on 120 credits down to 1.78 $ on 360 credits — volume pricing above that.',
    },
  ],
  compareTitle: 'Typical IPTV provider vs STRONG 8K IPTV',
  compareSub: 'The four failure points that make people cancel a subscription — and what we do differently.',
  compareBadLabel: 'Typical shared playlist',
  compareGoodLabel: 'STRONG 8K IPTV',
  rows: [
    {
      label: 'Live sport',
      bad: 'Freezes at kick-off, when everyone joins at once',
      good: 'Anti-Freeze 10.0 with adaptive bitrate and load-balanced edge nodes',
    },
    {
      label: 'Uptime',
      bad: 'Overloaded shared servers, silent downtime',
      good: '99.9% uptime target, monitored 24/7',
    },
    {
      label: 'Activation',
      bad: 'Manual, hours or days after payment',
      good: 'Instant line delivery within 5 minutes',
    },
    {
      label: 'Reseller access',
      bad: 'No panel, no credits, no white-label',
      good: 'White-label admin panel, 120 / 240 / 360 credit packages',
    },
  ],
  ctaTrial: 'Start 24h Free Trial',
  ctaOrder: 'Buy IPTV Subscription',
  ctaReseller: 'Get the Reseller Panel',
}

const IT: PainCopy = {
  eyebrow: 'Perché STRONG 8K IPTV',
  title: 'Costruito per due acquirenti diversi — con un prezzo per entrambi',
  subtitle:
    'Chi guarda vuole una cosa sola: nessun blocco durante la partita. Chi rivende vuole una cosa sola: il costo per linea più basso con un pannello che controlla. Stessa infrastruttura, due percorsi dedicati.',
  retailLabel: 'Per chi guarda',
  retailTitle: 'Ogni partita senza un solo blocco',
  retailSub:
    'Un abbonamento costruito sullo sport in diretta: Serie A, Ligue 1, Bundesliga e LaLiga in 8K/4K sul dispositivo che hai già.',
  retailPoints: [
    {
      title: 'Uptime 99,9%',
      desc: 'Server edge ridondanti per paese e monitoraggio 24/7 tengono la linea attiva anche nelle serate più congestionate.',
    },
    {
      title: 'Anti-Freeze 10.0',
      desc: 'Bitrate adattivo e buffer di pre-caricamento: la qualità passa da 8K a 4K senza congelare l’azione.',
    },
    {
      title: 'Attivazione entro 5 minuti',
      desc: 'Credenziali Xtream Codes e M3U arrivano su WhatsApp o Telegram subito dopo il pagamento.',
    },
    {
      title: 'Compatibile con tutti i dispositivi',
      desc: 'Firestick, Android Box, Smart TV LG/Samsung, iPhone, iPad, Windows e MAG: un abbonamento, ogni schermo.',
    },
  ],
  resellerLabel: 'Per rivenditori e B2B',
  resellerTitle: 'Avvia la tua attività IPTV questa settimana',
  resellerSub:
    'Acquisti i crediti una volta, gestisci un pannello white-label e rivendi le linee con il tuo margine. Nessuna infrastruttura, nessun costo mensile di piattaforma.',
  resellerPoints: [
    {
      title: 'Creazione massiva di sub-account',
      desc: 'Crea, rinnova o sospendi centinaia di linee in un’unica operazione.',
    },
    {
      title: 'Pannello admin dedicato',
      desc: 'Il tuo pannello white-label con emissione di prove, controllo scadenze e monitoraggio connessioni.',
    },
    {
      title: 'Costo per linea più basso',
      desc: 'Da 1,92 $ per linea con 120 crediti fino a 1,78 $ con 360 crediti, con prezzi dedicati oltre.',
    },
  ],
  compareTitle: 'Un provider IPTV tipico vs STRONG 8K IPTV',
  compareSub: 'I quattro punti che fanno disdire un abbonamento — e cosa facciamo diversamente.',
  compareBadLabel: 'Playlist condivisa tipica',
  compareGoodLabel: 'STRONG 8K IPTV',
  rows: [
    {
      label: 'Sport in diretta',
      bad: 'Si blocca al calcio d’inizio, quando entrano tutti insieme',
      good: 'Anti-Freeze 10.0 con bitrate adattivo e nodi edge bilanciati',
    },
    {
      label: 'Uptime',
      bad: 'Server condivisi sovraccarichi, down senza avvisi',
      good: 'Obiettivo uptime 99,9%, monitorato 24/7',
    },
    {
      label: 'Attivazione',
      bad: 'Manuale, ore o giorni dopo il pagamento',
      good: 'Linea attiva entro 5 minuti',
    },
    {
      label: 'Accesso reseller',
      bad: 'Nessun pannello, nessun credito, nessun white-label',
      good: 'Pannello admin white-label, pacchetti 120 / 240 / 360 crediti',
    },
  ],
  ctaTrial: 'Inizia la prova gratuita di 24 ore',
  ctaOrder: 'Acquista l’abbonamento IPTV',
  ctaReseller: 'Richiedi il pannello reseller',
}

const FR: PainCopy = {
  eyebrow: 'Pourquoi STRONG 8K IPTV',
  title: 'Conçu pour deux acheteurs très différents — et tarifé pour les deux',
  subtitle:
    'Le spectateur ne veut qu’une chose : aucune coupure pendant le match. Le revendeur ne veut qu’une chose : le coût par ligne le plus bas avec un panneau qu’il maîtrise. Même infrastructure, deux parcours dédiés.',
  retailLabel: 'Pour les particuliers',
  retailTitle: 'Chaque match sans une seule coupure',
  retailSub:
    'Un abonnement pensé pour le sport en direct : Ligue 1, Serie A, Bundesliga et LaLiga en 8K/4K sur l’appareil que vous possédez déjà.',
  retailPoints: [
    {
      title: 'Disponibilité 99,9 %',
      desc: 'Serveurs edge redondants par pays et supervision 24/7 : la ligne reste active les soirs de forte affluence.',
    },
    {
      title: 'Anti-Freeze 10.0',
      desc: 'Débit adaptatif et tampon de préchargement : la 8K passe en 4K sans figer l’action.',
    },
    {
      title: 'Activation en 5 minutes',
      desc: 'Identifiants Xtream Codes et M3U envoyés sur WhatsApp ou Telegram juste après le paiement.',
    },
    {
      title: 'Compatible avec tous les appareils',
      desc: 'Firestick, Android Box, Smart TV LG/Samsung, iPhone, iPad, Windows et MAG : un abonnement, tous les écrans.',
    },
  ],
  resellerLabel: 'Pour les revendeurs et le B2B',
  resellerTitle: 'Lancez votre activité IPTV cette semaine',
  resellerSub:
    'Vous achetez des crédits une fois, vous gérez un panneau white-label et vous revendez les lignes à votre marge. Aucune infrastructure, aucun abonnement mensuel de plateforme.',
  resellerPoints: [
    {
      title: 'Création groupée de sous-comptes',
      desc: 'Créez, renouvelez ou suspendez des centaines de lignes en une seule action.',
    },
    {
      title: 'Panneau d’administration dédié',
      desc: 'Votre panneau white-label avec émission d’essais, contrôle des échéances et suivi des connexions.',
    },
    {
      title: 'Coût par ligne le plus bas',
      desc: 'De 1,92 $ par ligne sur 120 crédits à 1,78 $ sur 360 crédits, avec tarifs dédiés au-delà.',
    },
  ],
  compareTitle: 'Un fournisseur IPTV classique vs STRONG 8K IPTV',
  compareSub: 'Les quatre points qui font résilier un abonnement — et ce que nous faisons différemment.',
  compareBadLabel: 'Playlist partagée classique',
  compareGoodLabel: 'STRONG 8K IPTV',
  rows: [
    {
      label: 'Sport en direct',
      bad: 'Se bloque au coup d’envoi, quand tout le monde se connecte',
      good: 'Anti-Freeze 10.0, débit adaptatif et nœuds edge équilibrés',
    },
    {
      label: 'Disponibilité',
      bad: 'Serveurs partagés saturés, pannes silencieuses',
      good: 'Objectif 99,9 %, supervision 24/7',
    },
    {
      label: 'Activation',
      bad: 'Manuelle, des heures ou des jours après paiement',
      good: 'Ligne active en 5 minutes',
    },
    {
      label: 'Accès revendeur',
      bad: 'Pas de panneau, pas de crédits, pas de white-label',
      good: 'Panneau white-label, packs 120 / 240 / 360 crédits',
    },
  ],
  ctaTrial: 'Démarrer l’essai gratuit de 24 h',
  ctaOrder: 'Acheter l’abonnement IPTV',
  ctaReseller: 'Obtenir le panneau revendeur',
}

const DE: PainCopy = {
  eyebrow: 'Warum STRONG 8K IPTV',
  title: 'Für zwei sehr unterschiedliche Käufer gebaut — und für beide kalkuliert',
  subtitle:
    'Zuschauer wollen eines: keinen Freeze beim Spiel. Reseller wollen eines: die niedrigsten Kosten pro Linie mit einem Panel, das sie kontrollieren. Dieselbe Infrastruktur, zwei dedizierte Wege.',
  retailLabel: 'Für Privatkunden',
  retailTitle: 'Jedes Spiel ohne einen einzigen Freeze',
  retailSub:
    'Ein Abo für Livesport: Bundesliga, Serie A, Ligue 1 und LaLiga in 8K/4K auf dem Gerät, das Sie bereits haben.',
  retailPoints: [
    {
      title: '99,9 % Uptime',
      desc: 'Redundante Edge-Server pro Land und 24/7-Monitoring halten die Leitung auch an vollen Spieltagen online.',
    },
    {
      title: 'Anti-Freeze 10.0',
      desc: 'Adaptive Bitrate plus Vorlade-Puffer: 8K geht fließend auf 4K zurück, statt mitten in der Aktion einzufrieren.',
    },
    {
      title: 'Aktivierung in 5 Minuten',
      desc: 'Xtream-Codes- und M3U-Zugangsdaten kommen direkt nach der Zahlung per WhatsApp oder Telegram.',
    },
    {
      title: 'Unterstützt alle Geräte',
      desc: 'Firestick, Android Box, Smart TV (LG/Samsung), iPhone, iPad, Windows und MAG — ein Abo, jeder Bildschirm.',
    },
  ],
  resellerLabel: 'Für Reseller & B2B',
  resellerTitle: 'Starten Sie Ihr IPTV-Geschäft diese Woche',
  resellerSub:
    'Einmal Reseller-Guthaben kaufen, ein White-Label-Panel betreiben, Leitungen mit eigener Marge weiterverkaufen. Keine Infrastruktur, keine monatliche Plattformgebühr.',
  resellerPoints: [
    {
      title: 'Massenanlage von Sub-Accounts',
      desc: 'Hunderte Leitungen in einem Schritt anlegen, verlängern oder sperren.',
    },
    {
      title: 'Eigenes Admin-Panel',
      desc: 'Ihr White-Label-Panel mit Testlinien, Ablaufkontrolle und Live-Verbindungsmonitoring.',
    },
    {
      title: 'Niedrigste Kosten pro Linie',
      desc: 'Von 1,92 $ pro Linie bei 120 Guthaben bis 1,78 $ bei 360 Guthaben, darüber Staffelpreise.',
    },
  ],
  compareTitle: 'Typischer IPTV-Anbieter vs STRONG 8K IPTV',
  compareSub: 'Die vier Punkte, wegen denen Kunden kündigen — und was wir anders machen.',
  compareBadLabel: 'Typische geteilte Playlist',
  compareGoodLabel: 'STRONG 8K IPTV',
  rows: [
    {
      label: 'Livesport',
      bad: 'Friert zum Anpfiff ein, wenn alle gleichzeitig einsteigen',
      good: 'Anti-Freeze 10.0 mit adaptiver Bitrate und lastverteilten Edge-Knoten',
    },
    {
      label: 'Uptime',
      bad: 'Überlastete geteilte Server, stille Ausfälle',
      good: '99,9 % Ziel-Uptime, 24/7 überwacht',
    },
    {
      label: 'Aktivierung',
      bad: 'Manuell, Stunden oder Tage nach Zahlung',
      good: 'Leitung in 5 Minuten aktiv',
    },
    {
      label: 'Reseller-Zugang',
      bad: 'Kein Panel, keine Guthaben, kein White-Label',
      good: 'White-Label-Panel, 120 / 240 / 360 Guthabenpakete',
    },
  ],
  ctaTrial: '24 Stunden kostenlos testen',
  ctaOrder: 'IPTV-Abo kaufen',
  ctaReseller: 'Reseller-Panel anfragen',
}

const ES: PainCopy = {
  eyebrow: 'Por qué STRONG 8K IPTV',
  title: 'Diseñado para dos compradores muy distintos — y con precio para ambos',
  subtitle:
    'El espectador solo quiere una cosa: que no se corte durante el partido. El revendedor solo quiere una cosa: el coste por línea más bajo con un panel que controle. Misma infraestructura, dos caminos dedicados.',
  retailLabel: 'Para particulares',
  retailTitle: 'Cada partido sin un solo corte',
  retailSub:
    'Una suscripción pensada para deporte en directo: LaLiga, Serie A, Ligue 1 y Bundesliga en 8K/4K en el dispositivo que ya tienes.',
  retailPoints: [
    {
      title: '99,9 % de uptime',
      desc: 'Servidores edge redundantes por país y monitorización 24/7 mantienen la línea activa las noches de máxima audiencia.',
    },
    {
      title: 'Anti-Freeze 10.0',
      desc: 'Bitrate adaptativo y búfer de precarga: la 8K baja a 4K sin congelar la jugada.',
    },
    {
      title: 'Activación en 5 minutos',
      desc: 'Las credenciales Xtream Codes y M3U llegan por WhatsApp o Telegram justo después del pago.',
    },
    {
      title: 'Compatible con todos los dispositivos',
      desc: 'Firestick, Android Box, Smart TV LG/Samsung, iPhone, iPad, Windows y MAG: una suscripción, todas las pantallas.',
    },
  ],
  resellerLabel: 'Para revendedores y B2B',
  resellerTitle: 'Monta tu negocio IPTV esta semana',
  resellerSub:
    'Compras créditos una vez, gestionas un panel white-label y revendes líneas con tu margen. Sin infraestructura y sin cuota mensual de plataforma.',
  resellerPoints: [
    {
      title: 'Creación masiva de subcuentas',
      desc: 'Crea, renueva o suspende cientos de líneas en una sola acción.',
    },
    {
      title: 'Panel de administración dedicado',
      desc: 'Tu panel white-label con emisión de pruebas, control de caducidades y monitorización de conexiones.',
    },
    {
      title: 'Coste por línea más bajo',
      desc: 'Desde 1,92 $ por línea con 120 créditos hasta 1,78 $ con 360 créditos, con precios dedicados por encima.',
    },
  ],
  compareTitle: 'Un proveedor IPTV típico vs STRONG 8K IPTV',
  compareSub: 'Los cuatro motivos por los que la gente cancela — y qué hacemos distinto.',
  compareBadLabel: 'Lista compartida típica',
  compareGoodLabel: 'STRONG 8K IPTV',
  rows: [
    {
      label: 'Deporte en directo',
      bad: 'Se bloquea al inicio, cuando entran todos a la vez',
      good: 'Anti-Freeze 10.0 con bitrate adaptativo y nodos edge balanceados',
    },
    {
      label: 'Uptime',
      bad: 'Servidores compartidos saturados, caídas silenciosas',
      good: 'Objetivo de 99,9 %, monitorizado 24/7',
    },
    {
      label: 'Activación',
      bad: 'Manual, horas o días después del pago',
      good: 'Línea activa en 5 minutos',
    },
    {
      label: 'Acceso de revendedor',
      bad: 'Sin panel, sin créditos, sin white-label',
      good: 'Panel white-label, paquetes de 120 / 240 / 360 créditos',
    },
  ],
  ctaTrial: 'Empezar la prueba gratis de 24 h',
  ctaOrder: 'Comprar suscripción IPTV',
  ctaReseller: 'Solicitar el panel de revendedor',
}

const CATALOG: Partial<Record<SeoLocale, PainCopy>> = { en: EN, it: IT, fr: FR, de: DE, es: ES }

export function painCopy(locale: SeoLocale): PainCopy {
  return CATALOG[locale] ?? EN
}
