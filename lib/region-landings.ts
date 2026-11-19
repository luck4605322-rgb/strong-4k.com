import type { SeoLocale } from '@/lib/seo-content'

// Localised intent landing pages for the four core European markets.
// Each one targets a country-level search intent ("IPTV Italia", "IPTV France",
// "IPTV Deutschland", "IPTV España") with native-language copy, so Google can
// rank them for regional queries instead of only for the brand query.
//
// They are served through the same optional catch-all route as the locale
// pages (/iptv-italia/, /iptv-france/, /iptv-deutschland/, /iptv-espana/), which
// keeps a single layout and a single build for the whole static export.

export type RegionSlug = 'iptv-italia' | 'iptv-france' | 'iptv-deutschland' | 'iptv-espana'

export type RegionLanding = {
  slug: RegionSlug
  /** Locale used for <html lang>, hreflang and the metadata */
  locale: SeoLocale
  /** ISO 3166-1 alpha-2 for the flag image */
  flag: string
  countryName: string
  metaTitle: string
  metaDescription: string
  h1: string
  sub: string
  primaryKeyword: string
  keywords: string[]
  intro: string
  leagues: string[]
  channels: string[]
  bullets: { title: string; desc: string }[]
  cta: { trial: string; order: string; reseller: string }
  faq: { q: string; a: string }[]
}

export const REGION_LANDINGS: Record<RegionSlug, RegionLanding> = {
  'iptv-italia': {
    slug: 'iptv-italia',
    locale: 'it',
    flag: 'it',
    countryName: 'Italia',
    metaTitle:
      'IPTV Italia 8K/4K — Serie A, Sky, DAZN e Mediaset senza freeze | STRONG 8K IPTV',
    metaDescription:
      'IPTV Italia premium: Serie A, Sky IT, DAZN, Mediaset e RAI in 8K/4K con Anti-Freeze 10.0, uptime 99,9% e attivazione della linea entro 5 minuti. Prova gratuita di 24 ore su Firestick, Smart TV, Android e iOS.',
    h1: 'IPTV Italia in 8K/4K — Serie A, Sky e DAZN senza blocchi',
    sub:
      'Server dedicati in Italia, commento in italiano ed EPG completo. Guarda ogni partita di Serie A, Champions League e i canali Mediaset e Sky senza buffering, su Firestick, Smart TV o Android Box.',
    primaryKeyword: 'IPTV Italia',
    keywords: [
      'IPTV Italia',
      'IPTV italiano 8K',
      'Serie A IPTV 4K',
      'IPTV Sky Italia',
      'IPTV DAZN Italia',
      'abbonamento IPTV Italia',
      'IPTV Mediaset RAI',
      'IPTV Anti-Freeze 10.0',
    ],
    intro:
      'STRONG 8K IPTV è l’abbonamento IPTV italiano pensato per chi vuole rivedere Serie A, Sky e DAZN in qualità 8K/4K senza interruzioni. Ogni abbonamento include oltre 20.000 canali live, il pacchetto Italia completo (RAI, Mediaset, Sky IT, DAZN, La7, TV8) e un server edge dedicato che serve gli utenti italiani da nodi europei a bassa latenza.',
    leagues: ['Serie A', 'Serie B', 'Coppa Italia', 'Champions League', 'Europa League', 'MotoGP'],
    channels: [
      'RAI 1 / 2 / 3',
      'Mediaset (Canale 5, Italia 1, Rete 4)',
      'Sky IT — Calcio, Sport, Cinema',
      'DAZN Italia',
      'La7 e TV8',
      'Eurosport Italia',
    ],
    bullets: [
      {
        title: 'Server Italia dedicati',
        desc: 'Nodi edge ottimizzati per Milano, Roma e Napoli: nessun relay dall’estero durante la partita.',
      },
      {
        title: 'EPG e commento in italiano',
        desc: 'Guida TV completa, telecronaca e sottotitoli italiani su tutti i canali principali.',
      },
      {
        title: 'Catch-up 7 giorni',
        desc: 'Recupera la partita o il programma perso con la funzione replay inclusa.',
      },
      {
        title: 'Assistenza in italiano',
        desc: 'Supporto WhatsApp e Telegram in italiano, con attivazione della linea entro 5 minuti.',
      },
    ],
    cta: {
      trial: 'Attiva la prova gratuita di 24 ore',
      order: 'Ordina IPTV Italia su WhatsApp',
      reseller: 'Diventa rivenditore IPTV',
    },
    faq: [
      {
        q: 'Con l’IPTV Italia posso vedere la Serie A in 4K?',
        a: 'Sì. Le partite di Serie A e di Champions League vengono trasmesse in 4K nativo sui canali Sky IT e DAZN inclusi nell’abbonamento, con fallback automatico a Full HD se la banda scende, così il flusso non si blocca mai.',
      },
      {
        q: 'Serve una VPN per usare l’IPTV italiano dall’estero?',
        a: 'No. I nodi europei di STRONG 8K IPTV servono gli italiani residenti all’estero senza VPN: la linea funziona da Germania, Francia, Spagna, Regno Unito e Stati Uniti con gli stessi canali italiani.',
      },
      {
        q: 'Quanto tempo serve per configurare Firestick o Smart TV?',
        a: 'Circa 5 minuti: ricevi le credenziali Xtream Codes su WhatsApp, le inserisci in IPTV Smarters, TiviMate o nell’app compatibile del tuo Smart TV e la lista canali con EPG si carica da sola.',
      },
      {
        q: 'La prova gratuita di 24 ore include anche i canali Sky?',
        a: 'Sì, la prova è a pieno accesso: include Serie A, Sky IT, DAZN, Mediaset, RAI e tutti i pacchetti internazionali, senza alcun pagamento anticipato.',
      },
    ],
  },

  'iptv-france': {
    slug: 'iptv-france',
    locale: 'fr',
    flag: 'fr',
    countryName: 'France',
    metaTitle:
      'IPTV France 8K/4K — Ligue 1, Canal+, beIN Sports et TF1 sans coupure | STRONG 8K IPTV',
    metaDescription:
      'IPTV France premium : Ligue 1, Canal+, beIN Sports, TF1, M6 et RMC Sport en 8K/4K avec Anti-Freeze 10.0, disponibilité 99,9 % et activation en 5 minutes. Essai gratuit de 24 h sur Firestick, Smart TV et Android.',
    h1: 'IPTV France en 8K/4K — Ligue 1, Canal+ et beIN Sports sans buffering',
    sub:
      'Serveurs dédiés en France, commentaires en français et EPG complet. Regardez chaque match de Ligue 1, de Ligue des Champions et les chaînes TNT sans coupure, sur Firestick, Smart TV ou box Android.',
    primaryKeyword: 'IPTV France',
    keywords: [
      'IPTV France',
      'IPTV français 8K',
      'Ligue 1 IPTV 4K',
      'IPTV Canal+',
      'IPTV beIN Sports',
      'abonnement IPTV France',
      'IPTV RMC Sport',
      'IPTV Anti-Freeze 10.0',
    ],
    intro:
      'STRONG 8K IPTV est l’abonnement IPTV français conçu pour regarder la Ligue 1, Canal+ et beIN Sports en 8K/4K sans interruption. Chaque abonnement comprend plus de 20 000 chaînes live, le bouquet France complet (TF1, M6, Canal+, beIN Sports, RMC Sport) et un serveur edge dédié qui dessert les spectateurs français depuis des nœuds européens à faible latence.',
    leagues: ['Ligue 1', 'Ligue 2', 'Coupe de France', 'Champions League', 'Europa League', 'Top 14'],
    channels: [
      'TF1 / France 2 / France 3',
      'M6 et W9',
      'Canal+ Sport',
      'beIN Sports 1-3',
      'RMC Sport',
      'Eurosport France',
    ],
    bullets: [
      {
        title: 'Serveurs France dédiés',
        desc: 'Nœuds edge optimisés pour Paris, Lyon et Marseille : aucun relais hors de France le soir de match.',
      },
      {
        title: 'EPG et commentaires en français',
        desc: 'Guide TV complet, commentaires et sous-titres français sur toutes les chaînes principales.',
      },
      {
        title: 'Replay 7 jours',
        desc: 'Retrouvez le match ou l’émission manquée grâce à la fonction catch-up incluse.',
      },
      {
        title: 'Support en français',
        desc: 'Assistance WhatsApp et Telegram en français, ligne activée en 5 minutes.',
      },
    ],
    cta: {
      trial: 'Activer l’essai gratuit de 24 h',
      order: 'Commander IPTV France sur WhatsApp',
      reseller: 'Devenir revendeur IPTV',
    },
    faq: [
      {
        q: 'Puis-je regarder la Ligue 1 en 4K avec IPTV France ?',
        a: 'Oui. Les matchs de Ligue 1 et de Ligue des Champions sont diffusés en 4K native sur les chaînes Canal+ et beIN Sports incluses, avec bascule automatique en Full HD si le débit baisse pour éviter tout gel de l’image.',
      },
      {
        q: 'Faut-il un VPN pour utiliser l’IPTV français depuis l’étranger ?',
        a: 'Non. Les nœuds européens de STRONG 8K IPTV desservent les Français expatriés sans VPN : la ligne fonctionne depuis l’Allemagne, l’Italie, l’Espagne, le Royaume-Uni et les États-Unis avec les mêmes chaînes françaises.',
      },
      {
        q: 'Combien de temps pour configurer un Firestick ou un Smart TV ?',
        a: 'Environ 5 minutes : vous recevez vos identifiants Xtream Codes sur WhatsApp, vous les saisissez dans IPTV Smarters, TiviMate ou l’application compatible de votre Smart TV, et la liste des chaînes avec EPG se charge automatiquement.',
      },
      {
        q: 'L’essai gratuit de 24 h inclut-il les chaînes Canal+ ?',
        a: 'Oui, l’essai donne un accès complet : Ligue 1, Canal+, beIN Sports, TF1, M6 et tous les bouquets internationaux, sans aucun paiement préalable.',
      },
    ],
  },

  'iptv-deutschland': {
    slug: 'iptv-deutschland',
    locale: 'de',
    flag: 'de',
    countryName: 'Deutschland',
    metaTitle:
      'IPTV Deutschland 8K/4K — Bundesliga, Sky, DAZN ohne Freeze | STRONG 8K IPTV',
    metaDescription:
      'IPTV Deutschland Premium: Bundesliga, Sky DE, DAZN, ARD und ZDF in 8K/4K mit Anti-Freeze 10.0, 99,9 % Uptime und Aktivierung in 5 Minuten. 24 Stunden kostenlos testen auf Firestick, Smart TV und Android.',
    h1: 'IPTV Deutschland in 8K/4K — Bundesliga, Sky und DAZN ohne Ruckeln',
    sub:
      'Dedizierte Server in Deutschland, deutsche Kommentare und vollständige EPG. Jeder Bundesliga-Spieltag, Champions League und alle ARD-/ZDF-Sender ohne Pufferung – auf Firestick, Smart TV oder Android Box.',
    primaryKeyword: 'IPTV Deutschland',
    keywords: [
      'IPTV Deutschland',
      'IPTV deutsch 8K',
      'Bundesliga IPTV 4K',
      'IPTV Sky Deutschland',
      'IPTV DAZN Deutschland',
      'IPTV Abo Deutschland',
      'IPTV ARD ZDF',
      'IPTV Anti-Freeze 10.0',
    ],
    intro:
      'STRONG 8K IPTV ist das IPTV-Abo für alle, die Bundesliga, Sky und DAZN in 8K/4K ohne Unterbrechung sehen wollen. Jedes Abo enthält über 20.000 Live-Sender, das komplette Deutschland-Paket (ARD, ZDF, Sky DE, DAZN, RTL, ProSieben) und einen dedizierten Edge-Server, der deutsche Zuschauer über europäische Knoten mit niedriger Latenz bedient.',
    leagues: ['Bundesliga', '2. Bundesliga', 'DFB-Pokal', 'Champions League', 'Europa League', 'DEL'],
    channels: [
      'ARD und ZDF',
      'Sky DE — Sport, Bundesliga, Cinema',
      'DAZN Deutschland',
      'RTL und ProSieben',
      'Sport1',
      'Eurosport Deutschland',
    ],
    bullets: [
      {
        title: 'Dedizierte Deutschland-Server',
        desc: 'Edge-Knoten für Frankfurt, Berlin und München: kein Umweg über Übersee am Spieltag.',
      },
      {
        title: 'EPG und deutsche Kommentare',
        desc: 'Vollständige Programmzeitschrift, deutsche Kommentare und Untertitel auf allen Hauptsendern.',
      },
      {
        title: '7-Tage-Catch-Up',
        desc: 'Verpasstes Spiel oder Sendung jederzeit über die integrierte Replay-Funktion nachholen.',
      },
      {
        title: 'Support auf Deutsch',
        desc: 'WhatsApp- und Telegram-Support auf Deutsch, Leitung in 5 Minuten aktiviert.',
      },
    ],
    cta: {
      trial: '24 Stunden kostenlos testen',
      order: 'IPTV Deutschland über WhatsApp bestellen',
      reseller: 'IPTV-Reseller werden',
    },
    faq: [
      {
        q: 'Kann ich die Bundesliga mit IPTV Deutschland in 4K sehen?',
        a: 'Ja. Bundesliga- und Champions-League-Spiele laufen in nativem 4K auf den enthaltenen Sky-DE- und DAZN-Sendern, mit automatischem Fallback auf Full HD bei sinkender Bandbreite – das Bild friert dadurch nicht ein.',
      },
      {
        q: 'Brauche ich eine VPN, um deutsches IPTV im Ausland zu nutzen?',
        a: 'Nein. Die europäischen Knoten von STRONG 8K IPTV versorgen Auslandsdeutsche ohne VPN: die Leitung funktioniert aus Italien, Frankreich, Spanien, Großbritannien und den USA mit denselben deutschen Sendern.',
      },
      {
        q: 'Wie lange dauert die Einrichtung auf Firestick oder Smart TV?',
        a: 'Etwa 5 Minuten: Sie erhalten die Xtream-Codes-Zugangsdaten per WhatsApp, tragen sie in IPTV Smarters, TiviMate oder die kompatible App Ihres Smart TVs ein, und Senderliste samt EPG lädt automatisch.',
      },
      {
        q: 'Sind Sky-Sender im kostenlosen 24-Stunden-Test enthalten?',
        a: 'Ja, der Test ist ein Vollzugang: Bundesliga, Sky DE, DAZN, ARD, ZDF und alle internationalen Pakete inklusive, ohne Vorauszahlung.',
      },
    ],
  },

  'iptv-espana': {
    slug: 'iptv-espana',
    locale: 'es',
    flag: 'es',
    countryName: 'España',
    metaTitle:
      'IPTV España 8K/4K — LaLiga, Movistar+, DAZN sin cortes | STRONG 8K IPTV',
    metaDescription:
      'IPTV España premium: LaLiga, Movistar Plus+, DAZN, RTVE y Antena 3 en 8K/4K con Anti-Freeze 10.0, 99,9 % de uptime y activación en 5 minutos. Prueba gratis de 24 horas en Firestick, Smart TV y Android.',
    h1: 'IPTV España en 8K/4K — LaLiga, Movistar+ y DAZN sin buffering',
    sub:
      'Servidores dedicados en España, comentarios en español y EPG completo. Disfruta de cada jornada de LaLiga, la Champions League y todos los canales de TDT sin cortes, en Firestick, Smart TV o Android Box.',
    primaryKeyword: 'IPTV España',
    keywords: [
      'IPTV España',
      'IPTV español 8K',
      'LaLiga IPTV 4K',
      'IPTV Movistar Plus',
      'IPTV DAZN España',
      'abono IPTV España',
      'IPTV Antena 3 Telecinco',
      'IPTV Anti-Freeze 10.0',
    ],
    intro:
      'STRONG 8K IPTV es el abono IPTV español pensado para ver LaLiga, Movistar Plus+ y DAZN en 8K/4K sin interrupciones. Cada suscripción incluye más de 20.000 canales en directo, el paquete España completo (RTVE, Antena 3, Telecinco, Movistar+, DAZN) y un servidor edge dedicado que atiende a espectadores españoles desde nodos europeos de baja latencia.',
    leagues: ['LaLiga', 'LaLiga Hypermotion', 'Copa del Rey', 'Champions League', 'Europa League', 'ACB'],
    channels: [
      'RTVE (La 1, La 2, Teledeporte)',
      'Antena 3 y Telecinco',
      'Movistar Plus+ — Deportes, Cine',
      'DAZN España',
      'Gol Play',
      'Eurosport España',
    ],
    bullets: [
      {
        title: 'Servidores dedicados en España',
        desc: 'Nodos edge optimizados para Madrid, Barcelona y Valencia: sin desvíos fuera del país en noche de partido.',
      },
      {
        title: 'EPG y comentarios en español',
        desc: 'Guía de programación completa, comentarios y subtítulos en español en todos los canales principales.',
      },
      {
        title: 'Catch-up de 7 días',
        desc: 'Recupera el partido o el programa que te perdiste con la función de repetición incluida.',
      },
      {
        title: 'Soporte en español',
        desc: 'Atención por WhatsApp y Telegram en español, con la línea activada en 5 minutos.',
      },
    ],
    cta: {
      trial: 'Activar prueba gratis de 24 horas',
      order: 'Pedir IPTV España por WhatsApp',
      reseller: 'Hazte revendedor IPTV',
    },
    faq: [
      {
        q: '¿Puedo ver LaLiga en 4K con IPTV España?',
        a: 'Sí. Los partidos de LaLiga y de la Champions League se emiten en 4K nativo en los canales de Movistar Plus+ y DAZN incluidos, con conmutación automática a Full HD si baja el ancho de banda para que la imagen nunca se congele.',
      },
      {
        q: '¿Necesito una VPN para usar IPTV español desde el extranjero?',
        a: 'No. Los nodos europeos de STRONG 8K IPTV atienden a españoles residentes en el extranjero sin VPN: la línea funciona desde Alemania, Francia, Italia, Reino Unido y Estados Unidos con los mismos canales españoles.',
      },
      {
        q: '¿Cuánto tarda la configuración en Firestick o Smart TV?',
        a: 'Unos 5 minutos: recibes las credenciales Xtream Codes por WhatsApp, las introduces en IPTV Smarters, TiviMate o la app compatible de tu Smart TV y la lista de canales con EPG se carga sola.',
      },
      {
        q: '¿La prueba gratis de 24 horas incluye los canales de Movistar+?',
        a: 'Sí, la prueba es de acceso completo: incluye LaLiga, Movistar+, DAZN, Antena 3, Telecinco y todos los paquetes internacionales, sin ningún pago previo.',
      },
    ],
  },
}

export const REGION_SLUGS = Object.keys(REGION_LANDINGS) as RegionSlug[]

export function isRegionSlug(value: string | undefined): value is RegionSlug {
  return !!value && (REGION_SLUGS as string[]).includes(value)
}

export function regionLanding(slug: string): RegionLanding | undefined {
  return isRegionSlug(slug) ? REGION_LANDINGS[slug] : undefined
}

export function regionPath(slug: RegionSlug): string {
  return `/${slug}`
}
