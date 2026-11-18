// Server-side, per-language SEO content for strong-4k.com.
// Rendered inside the static HTML for every locale route (/ , /it , /fr ...),
// so crawlers receive real translated copy instead of client-side swapped text.

export type SeoSection = { h2: string; paragraphs: string[] }
export type SeoFaqItem = { q: string; a: string }
export type SeoContent = {
  headline: string
  intro: string
  sections: SeoSection[]
  faq: SeoFaqItem[]
}

export const SEO_LOCALES = [
  'en', 'it', 'fr', 'de', 'es', 'pt', 'nl', 'pl', 'ro', 'el', 'tr', 'ar',
] as const

export type SeoLocale = (typeof SEO_LOCALES)[number]

export function isSeoLocale(value: string | undefined): value is SeoLocale {
  return !!value && (SEO_LOCALES as readonly string[]).includes(value)
}

export const SEO_CONTENT: Record<SeoLocale, SeoContent> = {
  en: {
  "headline": "STRONG 8K IPTV — Premium 8K/4K IPTV Subscription for Italy, France, Germany, UK, USA & Worldwide",
  "intro": "STRONG 8K IPTV is a premium streaming subscription built for expats, football fans and households that are tired of buffering. One account unlocks more than 20,000 live channels and a large video-on-demand library in 8K, 4K and Full HD, with regional servers tuned for Italy, France, Germany, Spain, the UK and the USA. Setup takes minutes on Firestick, Android TV, Smart TV, iPhone, iPad, Windows and MAG, and activation is handled directly over WhatsApp or Telegram.",
  "sections": [
    {
      "h2": "Why STRONG 8K IPTV streams without freezing",
      "paragraphs": [
        "Most cheap IPTV resellers sell the same overloaded playlist to thousands of users, which is exactly why channels freeze during Serie A or Champions League evenings. STRONG 8K IPTV runs an Anti-Freeze 10.0 delivery stack: load-balanced edge servers in each supported country, adaptive bitrate switching that drops from 8K to 4K instead of stalling, and a 99.9% uptime target backed by 24/7 monitoring.",
        "Every package includes full EPG data, catch-up on major channels, multi-language audio tracks and subtitles, plus an anti-buffer buffer that pre-loads the next few seconds of video. In practice that means a stable picture on a 50 Mbps connection, and true 8K quality once your line and screen can handle it."
      ]
    },
    {
      "h2": "IPTV Italia, France, Deutschland, España, UK and USA in one subscription",
      "paragraphs": [
        "Local channels matter more than raw channel counts. The Italian package covers RAI, Mediaset, Sky IT and full Serie A coverage; France includes TF1, Canal+, beIN Sports and Ligue 1; Germany carries ARD, ZDF, Sky DE and Bundesliga; Spain adds LaLiga and Movistar; the UK and USA packages bring Premier League, NBA, NFL and every major entertainment network.",
        "Servers are routed per region, so a viewer in Milan connects to an Italian edge node while a viewer in Manchester hits a UK node. That routing is what keeps local channels in their native quality instead of being relayed halfway across Europe."
      ]
    },
    {
      "h2": "How to install STRONG 8K IPTV on Firestick, Smart TV and mobile in 5 minutes",
      "paragraphs": [
        "After your order is confirmed you receive Xtream Codes API credentials and an M3U playlist link. On a Firestick or Android box, install any IPTV player such as IPTV Smarters, TiviMate or IPTVnator, choose the Xtream Codes login option, paste the username, password and server URL, and the channel list and EPG load automatically. On LG and Samsung Smart TVs you can use the same credentials in a supported player app, and on iPhone, iPad or Windows you can load the M3U link in VLC or any compatible client.",
        "If anything looks unclear, support walks you through it on WhatsApp step by step, usually within minutes. There is no contract, no hardware to buy, and no long-term lock-in: the 1-month plan starts at $6.99, the 6-month plan at $22.99 and the 12-month plan at $32.99, all including the full channel list."
      ]
    },
    {
      "h2": "Who STRONG 8K IPTV is built for",
      "paragraphs": [
        "The service is designed for three groups: Italian, French, German and Spanish speakers living abroad who want their home channels back; sports fans who need a reliable stream on match night; and resellers who want a white-label admin panel to issue their own trial lines and sub-accounts. A 24-hour free trial lets you test channel quality and stability before paying anything."
      ]
    }
  ],
  "faq": [
    {
      "q": "How much internet speed do I need for 8K IPTV?",
      "a": "A stable 25 Mbps line is enough for 4K, while 8K channels are comfortable from around 50 Mbps. Because the player adapts the bitrate automatically, a slower connection simply drops to 4K or Full HD instead of freezing."
    },
    {
      "q": "Can I use one STRONG 8K IPTV account on several devices?",
      "a": "Each subscription covers one simultaneous connection by default. Multi-device (2, 3 or 5 connections) can be added to any plan over WhatsApp, and you can install the same credentials on more devices as long as you do not stream on them at the same time."
    },
    {
      "q": "Does the subscription work outside Italy, France and Germany?",
      "a": "Yes. The channel list is worldwide: local packages for Italy, France, Germany, Spain, the UK and the USA, plus thousands of international channels from the Balkans, Latin America, the Middle East and Asia. The account works from any country."
    },
    {
      "q": "How fast is activation after payment?",
      "a": "Activation is instant in most cases. Credentials are sent over WhatsApp or Telegram as soon as the payment is confirmed, and the line is live within a few minutes, 7 days a week."
    },
    {
      "q": "Do I get a full EPG and catch-up TV?",
      "a": "Yes. Every plan includes electronic program guide data for the main country packages and catch-up on the most-watched channels, so you can watch a match or a show that already aired."
    },
    {
      "q": "Can I use a VPN with STRONG 8K IPTV?",
      "a": "You can. Some ISPs throttle streaming traffic, and a VPN sometimes improves stability. If a VPN slows your connection down, switch it off or pick a server closer to your country edge node."
    },
    {
      "q": "Which payment methods are accepted?",
      "a": "Payment is arranged over WhatsApp or Telegram, including card, PayPal, crypto and bank transfer depending on your region. Prices are quoted in USD and no contract or auto-renewal is required."
    },
    {
      "q": "How does the IPTV reseller panel work?",
      "a": "After buying a credit package you receive a white-label admin panel where you create sub-accounts, issue free trial lines, set expiry dates and monitor usage. Credits never expire and the panel is branded for your own business."
    }
  ]
},
  it: {
  "headline": "STRONG 8K IPTV — Abbonamento IPTV premium 8K/4K per Italia, Francia, Germania e resto del mondo",
  "intro": "STRONG 8K IPTV è un abbonamento di streaming premium pensato per italiani all'estero, tifosi di calcio e famiglie stanche del buffering. Un solo account sblocca oltre 20.000 canali live e una vasta libreria on demand in 8K, 4K e Full HD, con server regionali ottimizzati per Italia, Francia, Germania, Spagna, Regno Unito e USA. L'installazione richiede pochi minuti su Firestick, Android TV, Smart TV, iPhone, iPad, Windows e MAG, mentre l'attivazione avviene direttamente su WhatsApp o Telegram.",
  "sections": [
    {
      "h2": "Perché STRONG 8K IPTV non si blocca durante le partite",
      "paragraphs": [
        "La maggior parte dei rivenditori IPTV economici vende la stessa playlist sovraccarica a migliaia di utenti: è proprio questo il motivo per cui i canali si bloccano durante Serie A o Champions League. STRONG 8K IPTV utilizza lo stack Anti-Freeze 10.0: server edge bilanciati in ogni paese supportato, bitrate adattivo che passa dall'8K al 4K invece di fermarsi e un obiettivo di uptime del 99,9% con monitoraggio 24/7.",
        "Ogni pacchetto include EPG completo, catch-up sui principali canali, tracce audio multilingua e sottotitoli, oltre a un buffer che precarica i secondi successivi del video. In pratica: immagine stabile con una linea da 50 Mbps e vera qualità 8K quando la connessione e lo schermo lo permettono."
      ]
    },
    {
      "h2": "IPTV Italia, Francia, Germania, Spagna, Regno Unito e USA in un unico abbonamento",
      "paragraphs": [
        "I canali locali contano più del numero totale di canali. Il pacchetto italiano copre RAI, Mediaset, Sky IT e tutta la Serie A; la Francia include TF1, Canal+, beIN Sports e Ligue 1; la Germania porta ARD, ZDF, Sky DE e Bundesliga; la Spagna aggiunge LaLiga e Movistar; i pacchetti UK e USA offrono Premier League, NBA, NFL e tutte le principali reti di intrattenimento.",
        "Il routing è regionale: chi guarda da Milano si collega a un nodo italiano, chi guarda da Manchester a un nodo britannico. È questo che mantiene i canali locali nella loro qualità nativa, senza rilanci attraverso mezza Europa."
      ]
    },
    {
      "h2": "Come installare STRONG 8K IPTV su Firestick, Smart TV e smartphone in 5 minuti",
      "paragraphs": [
        "Dopo la conferma dell'ordine ricevi le credenziali Xtream Codes e il link della playlist M3U. Su Firestick o box Android installa un player come IPTV Smarters, TiviMate o IPTVnator, scegli l'accesso Xtream Codes, incolla username, password e URL del server: lista canali ed EPG si caricano automaticamente. Su Smart TV LG e Samsung puoi usare le stesse credenziali in un'app compatibile, mentre su iPhone, iPad o Windows carichi il link M3U in VLC o in un client equivalente.",
        "Se qualcosa non è chiaro, l'assistenza ti guida passo per passo su WhatsApp, di solito in pochi minuti. Nessun contratto, nessun hardware da comprare: il piano da 1 mese parte da 6,99 $, quello da 6 mesi da 22,99 $ e quello da 12 mesi da 32,99 $, sempre con lista canali completa."
      ]
    },
    {
      "h2": "A chi è dedicato STRONG 8K IPTV",
      "paragraphs": [
        "Il servizio nasce per tre gruppi: italiani, francesi, tedeschi e spagnoli che vivono all'estero e vogliono ritrovare i canali di casa; appassionati di sport che cercano uno stream affidabile il giorno della partita; e rivenditori che desiderano un pannello admin white-label per gestire linee di prova e sotto-account. La prova gratuita di 24 ore permette di verificare qualità e stabilità prima di pagare."
      ]
    }
  ],
  "faq": [
    {
      "q": "Che velocità internet serve per l'IPTV in 8K?",
      "a": "Una linea stabile da 25 Mbps basta per il 4K, mentre i canali 8K sono fluidi da circa 50 Mbps. Il player adatta automaticamente il bitrate: con una connessione più lenta si passa a 4K o Full HD senza blocchi."
    },
    {
      "q": "Posso usare lo stesso account su più dispositivi?",
      "a": "Ogni abbonamento include una connessione simultanea. Le opzioni multi-dispositivo (2, 3 o 5 connessioni) si aggiungono su WhatsApp, e puoi installare le stesse credenziali su più dispositivi purché non li usi contemporaneamente."
    },
    {
      "q": "Il servizio funziona anche fuori dall'Italia?",
      "a": "Sì. La lista canali è mondiale: pacchetti locali per Italia, Francia, Germania, Spagna, Regno Unito e USA, più migliaia di canali internazionali dai Balcani, dall'America Latina, dal Medio Oriente e dall'Asia."
    },
    {
      "q": "Quanto tempo serve per l'attivazione?",
      "a": "Nella maggior parte dei casi è immediata. Le credenziali vengono inviate su WhatsApp o Telegram appena il pagamento è confermato e la linea è attiva in pochi minuti, 7 giorni su 7."
    },
    {
      "q": "Sono inclusi EPG e catch-up TV?",
      "a": "Sì. Ogni piano include la guida elettronica dei programmi per i principali pacchetti nazionali e il catch-up sui canali più visti, così puoi recuperare una partita o una trasmissione già andata in onda."
    },
    {
      "q": "Posso usare una VPN con STRONG 8K IPTV?",
      "a": "Sì. Alcuni provider limitano il traffico streaming e una VPN può migliorare la stabilità. Se però la VPN rallenta la connessione, disattivala o scegli un server più vicino al nodo del tuo paese."
    },
    {
      "q": "Quali metodi di pagamento accettate?",
      "a": "Il pagamento si gestisce su WhatsApp o Telegram: carta, PayPal, criptovalute e bonifico a seconda della regione. I prezzi sono in USD e non ci sono contratti né rinnovi automatici."
    },
    {
      "q": "Come funziona il pannello reseller IPTV?",
      "a": "Dopo l'acquisto di un pacchetto crediti ricevi un pannello admin white-label per creare sotto-account, emettere linee di prova gratuite, impostare le scadenze e monitorare l'utilizzo. I crediti non scadono e il pannello è brandizzabile."
    }
  ]
},
  fr: {
  "headline": "STRONG 8K IPTV — Abonnement IPTV premium 8K/4K pour la France, l'Italie, l'Allemagne et le monde",
  "intro": "STRONG 8K IPTV est un abonnement de streaming premium conçu pour les expatriés, les passionnés de football et les foyers fatigués des coupures. Un seul compte donne accès à plus de 20 000 chaînes en direct et à un large catalogue VOD en 8K, 4K et Full HD, avec des serveurs régionaux optimisés pour la France, l'Italie, l'Allemagne, l'Espagne, le Royaume-Uni et les États-Unis. L'installation prend quelques minutes sur Firestick, Android TV, Smart TV, iPhone, iPad, Windows et MAG, et l'activation se fait directement via WhatsApp ou Telegram.",
  "sections": [
    {
      "h2": "Pourquoi STRONG 8K IPTV ne saccade pas pendant les matchs",
      "paragraphs": [
        "La plupart des revendeurs IPTV bon marché vendent la même playlist surchargée à des milliers d'utilisateurs : c'est exactement pour cela que les chaînes se figent pendant la Ligue 1 ou la Ligue des Champions. STRONG 8K IPTV repose sur la pile Anti-Freeze 10.0 : serveurs edge répartis par pays, débit adaptatif qui passe de la 8K à la 4K au lieu de bloquer, et un objectif de disponibilité de 99,9 % surveillé 24/7.",
        "Chaque formule inclut un EPG complet, le replay sur les grandes chaînes, des pistes audio multilingues et des sous-titres. En pratique, l'image reste stable sur une ligne de 50 Mbps et la qualité 8K est réelle dès que votre connexion et votre écran le permettent."
      ]
    },
    {
      "h2": "IPTV France, Italie, Allemagne, Espagne, Royaume-Uni et USA dans un seul abonnement",
      "paragraphs": [
        "Les chaînes locales comptent plus que le nombre total de chaînes. Le pack français couvre TF1, Canal+, beIN Sports et toute la Ligue 1 ; l'Italie propose RAI, Mediaset, Sky IT et la Serie A ; l'Allemagne ARD, ZDF, Sky DE et la Bundesliga ; l'Espagne LaLiga et Movistar ; les packs UK et USA apportent Premier League, NBA, NFL et les grandes chaînes de divertissement.",
        "Le routage est régional : un spectateur à Paris se connecte à un nœud français, un spectateur à Londres à un nœud britannique. C'est ce routage qui conserve la qualité d'origine des chaînes locales."
      ]
    },
    {
      "h2": "Installer STRONG 8K IPTV sur Firestick, Smart TV et mobile en 5 minutes",
      "paragraphs": [
        "Après confirmation de la commande, vous recevez vos identifiants Xtream Codes et le lien de la playlist M3U. Sur un Firestick ou un box Android, installez un lecteur comme IPTV Smarters, TiviMate ou IPTVnator, choisissez la connexion Xtream Codes, collez identifiant, mot de passe et URL du serveur : la liste des chaînes et l'EPG se chargent automatiquement. Sur Smart TV LG et Samsung, les mêmes identifiants fonctionnent dans une application compatible ; sur iPhone, iPad ou Windows, chargez le lien M3U dans VLC.",
        "En cas de doute, le support vous guide étape par étape sur WhatsApp, généralement en quelques minutes. Sans contrat ni matériel : la formule 1 mois démarre à 6,99 $, 6 mois à 22,99 $ et 12 mois à 32,99 $, toujours avec la liste complète des chaînes."
      ]
    },
    {
      "h2": "À qui s'adresse STRONG 8K IPTV",
      "paragraphs": [
        "Le service vise trois publics : les francophones, Italiens, Allemands et Espagnols expatriés qui veulent retrouver leurs chaînes ; les amateurs de sport qui exigent un flux fiable le soir du match ; et les revendeurs qui souhaitent un panneau d'administration white-label pour gérer lignes d'essai et sous-comptes. L'essai gratuit de 24 heures permet de tester qualité et stabilité avant tout paiement."
      ]
    }
  ],
  "faq": [
    {
      "q": "Quel débit internet faut-il pour l'IPTV en 8K ?",
      "a": "Une ligne stable de 25 Mbps suffit pour la 4K ; les chaînes 8K sont confortables à partir de 50 Mbps. Le lecteur adapte automatiquement le débit et bascule en 4K ou Full HD au lieu de bloquer."
    },
    {
      "q": "Puis-je utiliser un seul compte sur plusieurs appareils ?",
      "a": "Chaque abonnement couvre une connexion simultanée. Des options multi-appareils (2, 3 ou 5 connexions) s'ajoutent via WhatsApp ; vous pouvez installer les identifiants ailleurs sans les utiliser en même temps."
    },
    {
      "q": "Le service fonctionne-t-il hors de France ?",
      "a": "Oui. La liste est mondiale : packs locaux pour la France, l'Italie, l'Allemagne, l'Espagne, le Royaume-Uni et les USA, plus des milliers de chaînes internationales."
    },
    {
      "q": "L'activation est-elle immédiate ?",
      "a": "Dans la plupart des cas, oui. Les identifiants sont envoyés sur WhatsApp ou Telegram dès la confirmation du paiement et la ligne est active en quelques minutes, 7 jours sur 7."
    },
    {
      "q": "L'EPG et le replay sont-ils inclus ?",
      "a": "Oui. Chaque formule comprend le guide électronique des programmes des principaux packs nationaux et le replay des chaînes les plus regardées."
    },
    {
      "q": "Un VPN est-il compatible ?",
      "a": "Oui. Certains fournisseurs d'accès limitent le streaming et un VPN peut améliorer la stabilité. S'il ralentit la connexion, désactivez-le ou choisissez un serveur proche de votre pays."
    },
    {
      "q": "Quels moyens de paiement acceptez-vous ?",
      "a": "Le paiement se règle via WhatsApp ou Telegram : carte, PayPal, crypto et virement selon la région. Les prix sont en USD, sans contrat ni reconduction automatique."
    },
    {
      "q": "Comment fonctionne le panneau revendeur IPTV ?",
      "a": "Après l'achat d'un pack de crédits, vous recevez un panneau admin white-label pour créer des sous-comptes, générer des lignes d'essai, fixer les dates d'expiration et suivre l'usage. Les crédits n'expirent pas."
    }
  ]
},
  de: {
  "headline": "STRONG 8K IPTV — Premium IPTV Abo in 8K/4K für Deutschland, Österreich, die Schweiz und weltweit",
  "intro": "STRONG 8K IPTV ist ein Premium-Streaming-Abo für Auswanderer, Fußballfans und Haushalte, die keine Buffer mehr tolerieren. Ein Account schaltet über 20.000 Live-Sender und eine große VOD-Bibliothek in 8K, 4K und Full HD frei, mit regionalen Servern für Deutschland, Italien, Frankreich, Spanien, UK und die USA. Die Einrichtung dauert wenige Minuten auf Firestick, Android TV, Smart TV, iPhone, iPad, Windows und MAG, die Aktivierung erfolgt direkt über WhatsApp oder Telegram.",
  "sections": [
    {
      "h2": "Warum STRONG 8K IPTV beim Bundesliga-Abend nicht einfriert",
      "paragraphs": [
        "Die meisten billigen IPTV-Händler verkaufen dieselbe überlastete Playlist an tausende Nutzer – genau deshalb frieren Sender während Bundesliga oder Champions League ein. STRONG 8K IPTV nutzt den Anti-Freeze-10.0-Stack: lastverteilte Edge-Server pro Land, adaptives Bitrate-Switching, das von 8K auf 4K wechselt statt zu stoppen, und 99,9 % Uptime mit 24/7-Überwachung.",
        "Jedes Paket enthält vollständige EPG-Daten, Catch-up bei den wichtigsten Sendern, mehrsprachige Tonspuren und Untertitel. Praktisch heißt das: stabiles Bild ab 50 Mbps und echte 8K-Qualität, sobald Leitung und Bildschirm es hergeben."
      ]
    },
    {
      "h2": "IPTV Deutschland, Italien, Frankreich, Spanien, UK und USA in einem Abo",
      "paragraphs": [
        "Lokale Sender zählen mehr als die reine Senderzahl. Das Deutschland-Paket enthält ARD, ZDF, Sky DE und die Bundesliga; Italien bietet RAI, Mediaset, Sky IT und die Serie A; Frankreich TF1, Canal+, beIN Sports und Ligue 1; Spanien LaLiga und Movistar; UK und USA liefern Premier League, NBA, NFL und alle großen Unterhaltungssender.",
        "Das Routing erfolgt regional: Ein Zuschauer in München verbindet sich mit einem deutschen Edge-Knoten, ein Zuschauer in London mit einem britischen. Dadurch bleiben lokale Sender in ihrer Originalqualität."
      ]
    },
    {
      "h2": "STRONG 8K IPTV in 5 Minuten auf Firestick, Smart TV und Handy einrichten",
      "paragraphs": [
        "Nach der Bestellbestätigung erhalten Sie Xtream-Codes-Zugangsdaten und einen M3U-Playlist-Link. Auf Firestick oder Android-Box installieren Sie einen Player wie IPTV Smarters, TiviMate oder IPTVnator, wählen die Xtream-Codes-Anmeldung, fügen Benutzername, Passwort und Server-URL ein – Senderliste und EPG laden automatisch. Auf LG- und Samsung-Smart-TVs funktionieren dieselben Zugangsdaten in einer kompatiblen App, auf iPhone, iPad oder Windows laden Sie den M3U-Link in VLC.",
        "Bei Fragen führt Sie der Support auf WhatsApp Schritt für Schritt durch die Einrichtung, meist innerhalb weniger Minuten. Kein Vertrag, keine Hardware: Das 1-Monats-Paket startet bei 6,99 $, das 6-Monats-Paket bei 22,99 $ und das 12-Monats-Paket bei 32,99 $, immer mit vollständiger Senderliste."
      ]
    },
    {
      "h2": "Für wen STRONG 8K IPTV gedacht ist",
      "paragraphs": [
        "Der Dienst richtet sich an drei Gruppen: deutschsprachige Auswanderer, die ihre Heimatsender zurückhaben wollen; Sportfans, die am Spieltag einen zuverlässigen Stream brauchen; und Reseller, die ein White-Label-Adminpanel für Testlinien und Unterkonten suchen. Eine 24-Stunden-Testphase zeigt Qualität und Stabilität vor jeder Zahlung."
      ]
    }
  ],
  "faq": [
    {
      "q": "Welche Internetgeschwindigkeit brauche ich für 8K IPTV?",
      "a": "Für 4K reichen stabile 25 Mbps, 8K-Sender laufen ab etwa 50 Mbps flüssig. Der Player passt die Bitrate automatisch an und wechselt auf 4K oder Full HD statt zu stoppen."
    },
    {
      "q": "Kann ich einen Account auf mehreren Geräten nutzen?",
      "a": "Jedes Abo umfasst eine gleichzeitige Verbindung. Multi-Device-Optionen (2, 3 oder 5 Verbindungen) sind über WhatsApp buchbar; die Zugangsdaten lassen sich auf weiteren Geräten installieren, solange sie nicht parallel laufen."
    },
    {
      "q": "Funktioniert das Abo auch außerhalb Deutschlands?",
      "a": "Ja. Die Senderliste ist weltweit: lokale Pakete für Deutschland, Italien, Frankreich, Spanien, UK und USA plus tausende internationale Sender."
    },
    {
      "q": "Wie schnell erfolgt die Aktivierung?",
      "a": "In den meisten Fällen sofort. Die Zugangsdaten kommen nach Zahlungsbestätigung per WhatsApp oder Telegram, die Leitung ist in wenigen Minuten aktiv – 7 Tage pro Woche."
    },
    {
      "q": "Sind EPG und Replay enthalten?",
      "a": "Ja. Jedes Paket enthält Programmdaten für die wichtigsten Länderpakete und Catch-up bei den meistgesehenen Sendern."
    },
    {
      "q": "Ist ein VPN erlaubt?",
      "a": "Ja. Manche Anbieter drosseln Streaming-Traffic, ein VPN kann die Stabilität verbessern. Bremst es die Verbindung, schalten Sie es ab oder wählen Sie einen näheren Server."
    },
    {
      "q": "Welche Zahlungsmethoden gibt es?",
      "a": "Die Zahlung wird über WhatsApp oder Telegram abgewickelt: Karte, PayPal, Krypto und Überweisung je nach Region. Preise in USD, ohne Vertrag und ohne automatische Verlängerung."
    },
    {
      "q": "Wie funktioniert das Reseller-Panel?",
      "a": "Nach dem Kauf eines Credit-Pakets erhalten Sie ein White-Label-Adminpanel zum Anlegen von Unterkonten, Ausgeben von Testlinien, Setzen von Ablaufdaten und Überwachen der Nutzung. Credits verfallen nicht."
    }
  ]
},
  es: {
  "headline": "STRONG 8K IPTV — Suscripción IPTV premium 8K/4K para España, Italia, Francia y todo el mundo",
  "intro": "STRONG 8K IPTV es una suscripción de streaming premium pensada para expatriados, aficionados al fútbol y hogares cansados de los cortes. Una sola cuenta desbloquea más de 20.000 canales en directo y un amplio catálogo VOD en 8K, 4K y Full HD, con servidores regionales optimizados para España, Italia, Francia, Alemania, Reino Unido y EE. UU. La instalación lleva minutos en Firestick, Android TV, Smart TV, iPhone, iPad, Windows y MAG, y la activación se gestiona por WhatsApp o Telegram.",
  "sections": [
    {
      "h2": "Por qué STRONG 8K IPTV no se congela en LaLiga",
      "paragraphs": [
        "La mayoría de los revendedores IPTV baratos venden la misma lista sobrecargada a miles de usuarios: por eso los canales se bloquean en las noches de LaLiga o Champions League. STRONG 8K IPTV usa la pila Anti-Freeze 10.0: servidores edge balanceados por país, bitrate adaptativo que baja de 8K a 4K en vez de detenerse, y un objetivo de disponibilidad del 99,9 % con monitorización 24/7.",
        "Cada plan incluye EPG completo, catch-up en los canales principales, pistas de audio en varios idiomas y subtítulos. En la práctica: imagen estable con una línea de 50 Mbps y calidad 8K real cuando la conexión y la pantalla lo permiten."
      ]
    },
    {
      "h2": "IPTV España, Italia, Francia, Alemania, Reino Unido y EE. UU. en una sola suscripción",
      "paragraphs": [
        "Los canales locales importan más que el número total. El paquete español incluye LaLiga, Movistar y los principales canales nacionales; Italia aporta RAI, Mediaset, Sky IT y la Serie A; Francia TF1, Canal+, beIN Sports y Ligue 1; Alemania ARD, ZDF, Sky DE y Bundesliga; los paquetes UK y USA añaden Premier League, NBA, NFL y todas las grandes cadenas de entretenimiento.",
        "El enrutado es regional: un espectador en Madrid se conecta a un nodo español y uno en Londres a un nodo británico, lo que mantiene la calidad original de los canales locales."
      ]
    },
    {
      "h2": "Cómo instalar STRONG 8K IPTV en Firestick, Smart TV y móvil en 5 minutos",
      "paragraphs": [
        "Tras confirmar el pedido recibes credenciales Xtream Codes y el enlace de la lista M3U. En Firestick o un box Android instala un reproductor como IPTV Smarters, TiviMate o IPTVnator, elige el acceso Xtream Codes e introduce usuario, contraseña y URL del servidor: la lista de canales y el EPG se cargan automáticamente. En Smart TV LG y Samsung funcionan las mismas credenciales en una app compatible, y en iPhone, iPad o Windows puedes cargar el enlace M3U en VLC.",
        "Si algo no queda claro, el soporte te guía paso a paso por WhatsApp, normalmente en pocos minutos. Sin contratos ni hardware: el plan de 1 mes desde 6,99 $, el de 6 meses desde 22,99 $ y el de 12 meses desde 32,99 $, siempre con la lista completa."
      ]
    },
    {
      "h2": "Para quién está pensado STRONG 8K IPTV",
      "paragraphs": [
        "El servicio está diseñado para tres grupos: hispanohablantes, italianos, franceses y alemanes que viven fuera y quieren recuperar sus canales; aficionados al deporte que necesitan un stream fiable el día del partido; y revendedores que buscan un panel de administración white-label para emitir líneas de prueba y subcuentas. La prueba gratuita de 24 horas permite comprobar calidad y estabilidad antes de pagar."
      ]
    }
  ],
  "faq": [
    {
      "q": "¿Qué velocidad de internet necesito para IPTV en 8K?",
      "a": "Con una línea estable de 25 Mbps basta para 4K; los canales 8K funcionan cómodos desde unos 50 Mbps. El reproductor ajusta el bitrate automáticamente y baja a 4K o Full HD en lugar de congelarse."
    },
    {
      "q": "¿Puedo usar la misma cuenta en varios dispositivos?",
      "a": "Cada suscripción cubre una conexión simultánea. Las opciones multidispositivo (2, 3 o 5 conexiones) se añaden por WhatsApp, y puedes instalar las credenciales en más equipos siempre que no los uses a la vez."
    },
    {
      "q": "¿Funciona fuera de España?",
      "a": "Sí. La lista es mundial: paquetes locales para España, Italia, Francia, Alemania, Reino Unido y EE. UU., además de miles de canales internacionales de Latinoamérica, Europa del Este, Oriente Medio y Asia."
    },
    {
      "q": "¿Cuánto tarda la activación?",
      "a": "En la mayoría de los casos es inmediata. Las credenciales se envían por WhatsApp o Telegram al confirmar el pago y la línea queda activa en pocos minutos, los 7 días de la semana."
    },
    {
      "q": "¿Incluye EPG y catch-up?",
      "a": "Sí. Todos los planes incluyen guía electrónica de programación de los principales paquetes nacionales y catch-up en los canales más vistos."
    },
    {
      "q": "¿Puedo usar una VPN?",
      "a": "Sí. Algunos operadores limitan el tráfico de streaming y una VPN puede mejorar la estabilidad. Si ralentiza la conexión, desactívala o elige un servidor cercano."
    },
    {
      "q": "¿Qué métodos de pago aceptan?",
      "a": "El pago se gestiona por WhatsApp o Telegram: tarjeta, PayPal, cripto y transferencia según la región. Precios en USD, sin contrato ni renovación automática."
    },
    {
      "q": "¿Cómo funciona el panel de revendedor?",
      "a": "Tras comprar un paquete de créditos recibes un panel admin white-label para crear subcuentas, emitir líneas de prueba, fijar vencimientos y controlar el uso. Los créditos no caducan."
    }
  ]
},
  pt: {
  "headline": "STRONG 8K IPTV — Assinatura IPTV premium 8K/4K para Portugal, Brasil, Itália e o mundo",
  "intro": "STRONG 8K IPTV é uma assinatura de streaming premium para expatriados, fãs de futebol e famílias cansadas de travamentos. Uma única conta desbloqueia mais de 20.000 canais ao vivo e um catálogo VOD em 8K, 4K e Full HD, com servidores regionais para Portugal, Brasil, Itália, França, Alemanha, Espanha, Reino Unido e EUA. A instalação leva minutos em Firestick, Android TV, Smart TV, iPhone, iPad, Windows e MAG, e a ativação é feita pelo WhatsApp ou Telegram.",
  "sections": [
    {
      "h2": "Por que a STRONG 8K IPTV não trava nos jogos",
      "paragraphs": [
        "A maioria dos revendedores IPTV baratos vende a mesma lista sobrecarregada para milhares de usuários — é exatamente por isso que os canais travam em noites de campeonato. A STRONG 8K IPTV usa a pilha Anti-Freeze 10.0: servidores edge balanceados por país, bitrate adaptativo que cai de 8K para 4K em vez de parar e meta de 99,9 % de disponibilidade com monitorização 24/7.",
        "Cada plano inclui EPG completo, catch-up nos principais canais, faixas de áudio em vários idiomas e legendas. Na prática: imagem estável com 50 Mbps e qualidade 8K real quando a ligação e o ecrã permitem."
      ]
    },
    {
      "h2": "IPTV Portugal, Brasil, Itália, França e Alemanha numa só assinatura",
      "paragraphs": [
        "Os canais locais valem mais do que a contagem total. O pacote português cobre os principais canais nacionais e a liga portuguesa; o Brasil traz Globo, SBT, Record e campeonatos nacionais; Itália, RAI, Mediaset e Serie A; França, TF1, Canal+ e Ligue 1; Alemanha, ARD, ZDF e Bundesliga; os pacotes UK e EUA incluem Premier League, NBA e NFL.",
        "O roteamento é regional: quem vê de Lisboa liga-se a um nó português e quem vê de São Paulo a um nó brasileiro, mantendo a qualidade original dos canais locais."
      ]
    },
    {
      "h2": "Como instalar a STRONG 8K IPTV em 5 minutos",
      "paragraphs": [
        "Após a confirmação do pedido recebe as credenciais Xtream Codes e o link M3U. No Firestick ou numa box Android instale um leitor como IPTV Smarters, TiviMate ou IPTVnator, escolha o acesso Xtream Codes e cole utilizador, senha e URL do servidor: a lista de canais e o EPG carregam automaticamente. Em Smart TV LG e Samsung as mesmas credenciais funcionam numa app compatível; no iPhone, iPad ou Windows carregue o link M3U no VLC.",
        "Se algo não estiver claro, o suporte orienta passo a passo pelo WhatsApp, normalmente em poucos minutos. Sem contrato e sem hardware: o plano de 1 mês começa em 6,99 $, o de 6 meses em 22,99 $ e o de 12 meses em 32,99 $."
      ]
    },
    {
      "h2": "Para quem é a STRONG 8K IPTV",
      "paragraphs": [
        "O serviço serve três públicos: lusófonos, italianos, franceses e alemães no exterior que querem os canais de casa; fãs de desporto que exigem um stream fiável no dia do jogo; e revendedores que procuram um painel admin white-label para gerir linhas de teste e subcontas. O teste gratuito de 24 horas permite avaliar qualidade e estabilidade antes de pagar."
      ]
    }
  ],
  "faq": [
    {
      "q": "Que velocidade de internet preciso para IPTV em 8K?",
      "a": "Uma ligação estável de 25 Mbps chega para 4K; canais 8K ficam confortáveis a partir de 50 Mbps. O leitor ajusta o bitrate automaticamente e desce para 4K ou Full HD em vez de travar."
    },
    {
      "q": "Posso usar a mesma conta em vários dispositivos?",
      "a": "Cada assinatura cobre uma ligação simultânea. Opções multi-dispositivo (2, 3 ou 5 ligações) são adicionadas pelo WhatsApp, e pode instalar as credenciais noutros aparelhos desde que não os use ao mesmo tempo."
    },
    {
      "q": "Funciona fora de Portugal?",
      "a": "Sim. A lista é mundial: pacotes locais para Portugal, Brasil, Itália, França, Alemanha, Espanha, Reino Unido e EUA, além de milhares de canais internacionais."
    },
    {
      "q": "A ativação é imediata?",
      "a": "Na maioria dos casos, sim. As credenciais são enviadas por WhatsApp ou Telegram assim que o pagamento é confirmado e a linha fica ativa em poucos minutos, 7 dias por semana."
    },
    {
      "q": "O EPG e o catch-up estão incluídos?",
      "a": "Sim. Todos os planos incluem guia de programação dos principais pacotes nacionais e catch-up nos canais mais vistos."
    },
    {
      "q": "Posso usar VPN?",
      "a": "Sim. Alguns operadores limitam o tráfego de streaming e a VPN pode melhorar a estabilidade. Se deixar a ligação mais lenta, desative ou escolha um servidor próximo."
    },
    {
      "q": "Que métodos de pagamento aceitam?",
      "a": "O pagamento é combinado pelo WhatsApp ou Telegram: cartão, PayPal, criptomoedas e transferência conforme a região. Preços em USD, sem contrato nem renovação automática."
    },
    {
      "q": "Como funciona o painel de revendedor?",
      "a": "Depois de comprar um pacote de créditos recebe um painel admin white-label para criar subcontas, emitir linhas de teste, definir validades e acompanhar o uso. Os créditos não expiram."
    }
  ]
},
  nl: {
  "headline": "STRONG 8K IPTV — Premium 8K/4K IPTV-abonnement voor Nederland, België en heel Europa",
  "intro": "STRONG 8K IPTV is een premium streamingabonnement voor expats, voetbalfans en huishoudens die geen buffer meer accepteren. Eén account geeft toegang tot meer dan 20.000 live zenders en een grote VOD-bibliotheek in 8K, 4K en Full HD, met regionale servers voor Nederland, België, Italië, Frankrijk, Duitsland, Spanje, het VK en de VS. Installatie duurt enkele minuten op Firestick, Android TV, Smart TV, iPhone, iPad, Windows en MAG; activatie verloopt via WhatsApp of Telegram.",
  "sections": [
    {
      "h2": "Waarom STRONG 8K IPTV niet vastloopt tijdens de wedstrijd",
      "paragraphs": [
        "De meeste goedkope IPTV-resellers verkopen dezelfde overbelaste playlist aan duizenden gebruikers, waardoor zenders vastlopen tijdens Eredivisie- of Champions League-avonden. STRONG 8K IPTV draait op de Anti-Freeze 10.0-stack: edge-servers per land met load balancing, adaptieve bitrate die terugschakelt van 8K naar 4K in plaats van te stoppen, en 99,9 % uptime met 24/7 monitoring.",
        "Elk pakket bevat volledige EPG, catch-up op de belangrijkste zenders, meertalige audiotracks en ondertitels. In de praktijk: een stabiel beeld op 50 Mbps en echte 8K-kwaliteit zodra je lijn en scherm dat aankunnen."
      ]
    },
    {
      "h2": "IPTV Nederland, België, Italië, Frankrijk en Duitsland in één abonnement",
      "paragraphs": [
        "Lokale zenders tellen zwaarder dan het totale zenderaantal. Het Nederlandse pakket bevat de landelijke publieke en commerciële zenders plus sportkanalen, België voegt VRT en RTBF toe, Italië biedt RAI, Mediaset en Serie A, Frankrijk TF1, Canal+ en Ligue 1, Duitsland ARD, ZDF en Bundesliga, en de VK/VS-pakketten leveren Premier League, NBA en NFL.",
        "Het routeren gebeurt per regio: kijkers in Amsterdam verbinden met een Nederlandse node, kijkers in Brussel met een Belgische. Zo blijven lokale zenders in hun oorspronkelijke kwaliteit."
      ]
    },
    {
      "h2": "STRONG 8K IPTV in 5 minuten installeren",
      "paragraphs": [
        "Na je bestelling ontvang je Xtream Codes-inloggegevens en een M3U-playlistlink. Installeer op Firestick of Android-box een speler zoals IPTV Smarters, TiviMate of IPTVnator, kies Xtream Codes en plak gebruikersnaam, wachtwoord en server-URL: zenderlijst en EPG laden automatisch. Op LG- en Samsung-smart-tv's werken dezelfde gegevens in een compatibele app; op iPhone, iPad of Windows laad je de M3U-link in VLC.",
        "Twijfel je? De support begeleidt je stap voor stap via WhatsApp, meestal binnen enkele minuten. Geen contract en geen hardware: 1 maand vanaf $ 6,99, 6 maanden vanaf $ 22,99 en 12 maanden vanaf $ 32,99."
      ]
    }
  ],
  "faq": [
    {
      "q": "Hoeveel internetsnelheid heb ik nodig voor 8K IPTV?",
      "a": "Een stabiele lijn van 25 Mbps volstaat voor 4K; 8K-zenders lopen comfortabel vanaf ongeveer 50 Mbps. De speler past de bitrate automatisch aan en schakelt terug naar 4K of Full HD."
    },
    {
      "q": "Kan ik één account op meerdere apparaten gebruiken?",
      "a": "Elk abonnement dekt één gelijktijdige verbinding. Multi-device opties (2, 3 of 5 verbindingen) zijn via WhatsApp toe te voegen."
    },
    {
      "q": "Werkt het abonnement ook buiten Nederland?",
      "a": "Ja. De zenderlijst is wereldwijd, met lokale pakketten voor Nederland, België, Italië, Frankrijk, Duitsland, Spanje, het VK en de VS plus duizenden internationale zenders."
    },
    {
      "q": "Hoe snel is de activatie?",
      "a": "Meestal direct. De inloggegevens komen na betalingsbevestiging via WhatsApp of Telegram en de lijn is binnen enkele minuten actief."
    },
    {
      "q": "Zijn EPG en catch-up inbegrepen?",
      "a": "Ja. Elk pakket bevat programmagids voor de belangrijkste landenpakketten en catch-up op de meest bekeken zenders."
    },
    {
      "q": "Welke betaalmethoden zijn mogelijk?",
      "a": "Betaling verloopt via WhatsApp of Telegram: kaart, PayPal, crypto en bankoverschrijving, afhankelijk van je regio. Prijzen in USD, zonder contract."
    }
  ]
},
  pl: {
  "headline": "STRONG 8K IPTV — Abonament IPTV premium 8K/4K dla Polski, Europy i świata",
  "intro": "STRONG 8K IPTV to abonament streamingowy dla emigrantów, kibiców i gospodarstw domowych zmęczonych buforowaniem. Jedno konto odblokowuje ponad 20 000 kanałów na żywo oraz bibliotekę VOD w 8K, 4K i Full HD, z serwerami regionalnymi dla Polski, Włoch, Francji, Niemiec, Hiszpanii, Wielkiej Brytanii i USA. Instalacja zajmuje kilka minut na Firestick, Android TV, Smart TV, iPhone, iPad, Windows i MAG, a aktywacja odbywa się przez WhatsApp lub Telegram.",
  "sections": [
    {
      "h2": "Dlaczego STRONG 8K IPTV nie zacina się podczas meczu",
      "paragraphs": [
        "Większość tanich resellerów IPTV sprzedaje tę samą przeciążoną playlistę tysiącom użytkowników — dlatego kanały zacinają się w wieczory z Ekstraklasą lub Ligą Mistrzów. STRONG 8K IPTV działa na stosie Anti-Freeze 10.0: serwery edge z balansowaniem obciążenia w każdym kraju, adaptacyjny bitrate, który zamiast się zatrzymać schodzi z 8K do 4K, oraz 99,9 % dostępności monitorowanej 24/7.",
        "Każdy pakiet zawiera pełny EPG, catch-up na głównych kanałach, ścieżki audio w wielu językach i napisy. W praktyce: stabilny obraz przy 50 Mbps i prawdziwe 8K, gdy pozwala na to łącze i ekran."
      ]
    },
    {
      "h2": "IPTV Polska, Włochy, Francja i Niemcy w jednym abonamencie",
      "paragraphs": [
        "Kanały lokalne liczą się bardziej niż ich całkowita liczba. Pakiet polski obejmuje stacje ogólnopolskie i sportowe, Włochy dają RAI, Mediaset i Serie A, Francja TF1, Canal+ i Ligue 1, Niemcy ARD, ZDF i Bundesligę, a pakiety UK i USA — Premier League, NBA i NFL.",
        "Routing jest regionalny: widz w Warszawie łączy się z węzłem polskim, a widz w Londynie z brytyjskim, dzięki czemu kanały lokalne zachowują oryginalną jakość."
      ]
    },
    {
      "h2": "Jak zainstalować STRONG 8K IPTV w 5 minut",
      "paragraphs": [
        "Po potwierdzeniu zamówienia otrzymujesz dane Xtream Codes i link do playlisty M3U. Na Firesticku lub w boxie Android zainstaluj odtwarzacz IPTV Smarters, TiviMate lub IPTVnator, wybierz logowanie Xtream Codes i wklej nazwę użytkownika, hasło oraz adres serwera: lista kanałów i EPG wczytają się automatycznie. Na Smart TV LG i Samsung te same dane działają w kompatybilnej aplikacji, a na iPhone, iPad lub Windows wczytaj link M3U w VLC.",
        "W razie wątpliwości wsparcie prowadzi krok po kroku przez WhatsApp, zwykle w kilka minut. Bez umów i sprzętu: plan 1-miesięczny od 6,99 USD, 6-miesięczny od 22,99 USD, 12-miesięczny od 32,99 USD."
      ]
    }
  ],
  "faq": [
    {
      "q": "Jakiej prędkości internetu potrzebuję do IPTV 8K?",
      "a": "Stabilne 25 Mbps wystarczą do 4K, a kanały 8K działają komfortowo od około 50 Mbps. Odtwarzacz sam dostosowuje bitrate i schodzi do 4K lub Full HD zamiast się zatrzymywać."
    },
    {
      "q": "Czy mogę używać jednego konta na kilku urządzeniach?",
      "a": "Każdy abonament obejmuje jedno jednoczesne połączenie. Opcje multi-device (2, 3 lub 5 połączeń) można dodać przez WhatsApp."
    },
    {
      "q": "Czy usługa działa poza Polską?",
      "a": "Tak. Lista kanałów jest światowa: pakiety lokalne dla Polski, Włoch, Francji, Niemiec, Hiszpanii, Wielkiej Brytanii i USA oraz tysiące kanałów międzynarodowych."
    },
    {
      "q": "Jak szybka jest aktywacja?",
      "a": "Zwykle natychmiastowa. Dane logowania trafiają na WhatsApp lub Telegram po potwierdzeniu płatności, a linia jest aktywna w kilka minut."
    },
    {
      "q": "Czy EPG i catch-up są w cenie?",
      "a": "Tak. Każdy plan zawiera elektroniczny przewodnik po programach dla głównych pakietów krajowych oraz catch-up na najczęściej oglądanych kanałach."
    },
    {
      "q": "Jakie metody płatności są dostępne?",
      "a": "Płatność ustalana jest przez WhatsApp lub Telegram: karta, PayPal, kryptowaluty i przelew w zależności od regionu. Ceny w USD, bez umowy i automatycznego odnawiania."
    }
  ]
},
  ro: {
  "headline": "STRONG 8K IPTV — Abonament IPTV premium 8K/4K pentru România, Europa și întreaga lume",
  "intro": "STRONG 8K IPTV este un abonament de streaming premium pentru românii din diaspora, pasionații de fotbal și gospodăriile sătule de buffering. Un singur cont deblochează peste 20.000 de canale live și o bibliotecă VOD în 8K, 4K și Full HD, cu servere regionale pentru România, Italia, Franța, Germania, Spania, Marea Britanie și SUA. Instalarea durează câteva minute pe Firestick, Android TV, Smart TV, iPhone, iPad, Windows și MAG, iar activarea se face prin WhatsApp sau Telegram.",
  "sections": [
    {
      "h2": "De ce STRONG 8K IPTV nu se blochează în timpul meciurilor",
      "paragraphs": [
        "Majoritatea revânzătorilor IPTV ieftini vând aceeași listă supraîncărcată miilor de utilizatori — de aceea canalele se blochează în serile cu Liga 1 sau Champions League. STRONG 8K IPTV folosește stiva Anti-Freeze 10.0: servere edge echilibrate pe țară, bitrate adaptiv care coboară de la 8K la 4K în loc să se oprească și o disponibilitate de 99,9 % monitorizată 24/7.",
        "Fiecare pachet include EPG complet, catch-up pe canalele principale, piste audio multilingve și subtitrări. Practic: imagine stabilă la 50 Mbps și calitate 8K reală când conexiunea și ecranul o permit."
      ]
    },
    {
      "h2": "IPTV România, Italia, Franța și Germania într-un singur abonament",
      "paragraphs": [
        "Canalele locale contează mai mult decât numărul total. Pachetul românesc include canalele naționale și sportive, Italia oferă RAI, Mediaset și Serie A, Franța TF1, Canal+ și Ligue 1, Germania ARD, ZDF și Bundesliga, iar pachetele UK și SUA aduc Premier League, NBA și NFL.",
        "Rutarea este regională: un telespectator din București se conectează la un nod românesc, iar unul din Londra la un nod britanic, astfel încât canalele locale își păstrează calitatea originală."
      ]
    },
    {
      "h2": "Cum instalezi STRONG 8K IPTV în 5 minute",
      "paragraphs": [
        "După confirmarea comenzii primești datele Xtream Codes și linkul playlistului M3U. Pe Firestick sau un box Android instalează un player precum IPTV Smarters, TiviMate sau IPTVnator, alege autentificarea Xtream Codes și lipește utilizatorul, parola și URL-ul serverului: lista de canale și EPG se încarcă automat. Pe Smart TV LG și Samsung aceleași date funcționează într-o aplicație compatibilă, iar pe iPhone, iPad sau Windows încarci linkul M3U în VLC.",
        "Dacă apar nelămuriri, suportul te ghidează pas cu pas pe WhatsApp, de obicei în câteva minute. Fără contracte și fără hardware: planul de 1 lună de la 6,99 USD, cel de 6 luni de la 22,99 USD și cel de 12 luni de la 32,99 USD."
      ]
    }
  ],
  "faq": [
    {
      "q": "Ce viteză de internet am nevoie pentru IPTV 8K?",
      "a": "25 Mbps stabili sunt suficienți pentru 4K, iar canalele 8K rulează confortabil de la aproximativ 50 Mbps. Playerul ajustează automat bitrate-ul și coboară la 4K sau Full HD în loc să se blocheze."
    },
    {
      "q": "Pot folosi un cont pe mai multe dispozitive?",
      "a": "Fiecare abonament acoperă o conexiune simultană. Opțiunile multi-dispozitiv (2, 3 sau 5 conexiuni) se adaugă prin WhatsApp."
    },
    {
      "q": "Serviciul funcționează și în afara României?",
      "a": "Da. Lista este mondială: pachete locale pentru România, Italia, Franța, Germania, Spania, Marea Britanie și SUA, plus mii de canale internaționale."
    },
    {
      "q": "Cât durează activarea?",
      "a": "În majoritatea cazurilor este imediată. Datele de acces sunt trimise pe WhatsApp sau Telegram după confirmarea plății, iar linia devine activă în câteva minute."
    },
    {
      "q": "Sunt incluse EPG și catch-up?",
      "a": "Da. Fiecare plan include ghid electronic al programelor pentru principalele pachete naționale și catch-up pe canalele cele mai vizionate."
    },
    {
      "q": "Ce metode de plată acceptați?",
      "a": "Plata se stabilește prin WhatsApp sau Telegram: card, PayPal, criptomonede și transfer bancar, în funcție de regiune. Prețurile sunt în USD, fără contract."
    }
  ]
},
  el: {
  "headline": "STRONG 8K IPTV — Premium συνδρομή IPTV 8K/4K για Ελλάδα, Ευρώπη και όλο τον κόσμο",
  "intro": "Το STRONG 8K IPTV είναι μια premium συνδρομή streaming για Έλληνες του εξωτερικού, φιλάθλους και νοικοκυριά που δεν ανέχονται άλλο buffering. Ένας λογαριασμός ξεκλειδώνει πάνω από 20.000 ζωντανά κανάλια και μεγάλη βιβλιοθήκη VOD σε 8K, 4K και Full HD, με περιφερειακούς διακομιστές για Ελλάδα, Ιταλία, Γαλλία, Γερμανία, Ισπανία, Ηνωμένο Βασίλειο και ΗΠΑ. Η εγκατάσταση διαρκεί λίγα λεπτά σε Firestick, Android TV, Smart TV, iPhone, iPad, Windows και MAG, ενώ η ενεργοποίηση γίνεται μέσω WhatsApp ή Telegram.",
  "sections": [
    {
      "h2": "Γιατί το STRONG 8K IPTV δεν κολλάει στα ντέρμπι",
      "paragraphs": [
        "Οι περισσότεροι φθηνοί μεταπωλητές IPTV πουλούν την ίδια υπερφορτωμένη λίστα σε χιλιάδες χρήστες — γι' αυτό τα κανάλια κολλάνε τις βραδιές της Super League ή του Champions League. Το STRONG 8K IPTV χρησιμοποιεί την υποδομή Anti-Freeze 10.0: edge διακομιστές ανά χώρα με εξισορρόπηση φόρτου, προσαρμοστικό bitrate που πέφτει από 8K σε 4K αντί να σταματήσει, και διαθεσιμότητα 99,9 % με παρακολούθηση 24/7.",
        "Κάθε πακέτο περιλαμβάνει πλήρες EPG, catch-up στα βασικά κανάλια, πολυγλωσσικά κανάλια ήχου και υπότιτλους. Στην πράξη: σταθερή εικόνα με 50 Mbps και πραγματική ποιότητα 8K όταν το επιτρέπουν η γραμμή και η οθόνη."
      ]
    },
    {
      "h2": "IPTV Ελλάδα, Ιταλία, Γαλλία και Γερμανία σε μία συνδρομή",
      "paragraphs": [
        "Τα τοπικά κανάλια μετράνε περισσότερο από τον συνολικό αριθμό. Το ελληνικό πακέτο περιλαμβάνει τα κύρια εθνικά και αθλητικά κανάλια, η Ιταλία προσφέρει RAI, Mediaset και Serie A, η Γαλλία TF1, Canal+ και Ligue 1, η Γερμανία ARD, ZDF και Bundesliga, ενώ τα πακέτα ΗΒ και ΗΠΑ φέρνουν Premier League, NBA και NFL.",
        "Η δρομολόγηση γίνεται ανά περιοχή: ένας θεατής στην Αθήνα συνδέεται σε ελληνικό κόμβο και ένας στο Λονδίνο σε βρετανικό, κρατώντας την αρχική ποιότητα των τοπικών καναλιών."
      ]
    },
    {
      "h2": "Εγκατάσταση σε 5 λεπτά",
      "paragraphs": [
        "Μετά την επιβεβαίωση της παραγγελίας λαμβάνεις διαπιστευτήρια Xtream Codes και σύνδεσμο playlist M3U. Σε Firestick ή Android box εγκαθιστάς έναν player όπως IPTV Smarters, TiviMate ή IPTVnator, επιλέγεις σύνδεση Xtream Codes και επικολλάς όνομα χρήστη, κωδικό και URL διακομιστή: η λίστα καναλιών και το EPG φορτώνονται αυτόματα. Σε Smart TV LG και Samsung τα ίδια στοιχεία λειτουργούν σε συμβατή εφαρμογή, ενώ σε iPhone, iPad ή Windows φορτώνεις τον σύνδεσμο M3U στο VLC.",
        "Αν κάτι δεν είναι ξεκάθαρο, η υποστήριξη σε καθοδηγεί βήμα βήμα στο WhatsApp, συνήθως μέσα σε λίγα λεπτά. Χωρίς συμβόλαια και χωρίς hardware: το πακέτο 1 μήνα από 6,99 $, 6 μηνών από 22,99 $ και 12 μηνών από 32,99 $."
      ]
    }
  ],
  "faq": [
    {
      "q": "Τι ταχύτητα internet χρειάζομαι για IPTV 8K;",
      "a": "Σταθερή γραμμή 25 Mbps αρκεί για 4K, ενώ τα κανάλια 8K είναι άνετα από περίπου 50 Mbps. Ο player προσαρμόζει αυτόματα το bitrate και πέφτει σε 4K ή Full HD αντί να κολλήσει."
    },
    {
      "q": "Μπορώ να χρησιμοποιήσω τον ίδιο λογαριασμό σε πολλές συσκευές;",
      "a": "Κάθε συνδρομή καλύπτει μία ταυτόχρονη σύνδεση. Επιλογές multi-device (2, 3 ή 5 συνδέσεις) προστίθενται μέσω WhatsApp."
    },
    {
      "q": "Λειτουργεί εκτός Ελλάδας;",
      "a": "Ναι. Η λίστα είναι παγκόσμια: τοπικά πακέτα για Ελλάδα, Ιταλία, Γαλλία, Γερμανία, Ισπανία, ΗΒ και ΗΠΑ, μαζί με χιλιάδες διεθνή κανάλια."
    },
    {
      "q": "Πόσο γρήγορη είναι η ενεργοποίηση;",
      "a": "Συνήθως άμεση. Τα στοιχεία σύνδεσης αποστέλλονται μέσω WhatsApp ή Telegram μόλις επιβεβαιωθεί η πληρωμή και η γραμμή ενεργοποιείται σε λίγα λεπτά."
    },
    {
      "q": "Περιλαμβάνονται EPG και catch-up;",
      "a": "Ναι. Κάθε πακέτο περιλαμβάνει ηλεκτρονικό οδηγό προγράμματος για τα βασικά εθνικά πακέτα και catch-up στα πιο δημοφιλή κανάλια."
    },
    {
      "q": "Ποιες μέθοδοι πληρωμής είναι διαθέσιμες;",
      "a": "Η πληρωμή κανονίζεται μέσω WhatsApp ή Telegram: κάρτα, PayPal, κρυπτονομίσματα και τραπεζική μεταφορά ανάλογα με την περιοχή. Τιμές σε USD, χωρίς συμβόλαιο."
    }
  ]
},
  tr: {
  "headline": "STRONG 8K IPTV — Türkiye, Avrupa ve dünya için premium 8K/4K IPTV aboneliği",
  "intro": "STRONG 8K IPTV; yurt dışında yaşayanlar, futbol tutkunları ve artık donma yaşamak istemeyen evler için hazırlanmış premium bir yayın aboneliğidir. Tek bir hesap 20.000'den fazla canlı kanalı ve 8K, 4K, Full HD kalitede geniş bir VOD arşivini açar; sunucular Türkiye, İtalya, Fransa, Almanya, İspanya, İngiltere ve ABD için bölgesel olarak optimize edilmiştir. Firestick, Android TV, Smart TV, iPhone, iPad, Windows ve MAG üzerinde kurulum birkaç dakika sürer, aktivasyon WhatsApp veya Telegram ile yapılır.",
  "sections": [
    {
      "h2": "STRONG 8K IPTV maç gecelerinde neden takılmaz",
      "paragraphs": [
        "Ucuz IPTV bayilerinin çoğu aynı aşırı yüklenmiş listeyi binlerce kullanıcıya satar; Süper Lig veya Şampiyonlar Ligi akşamlarında kanalların donmasının nedeni tam olarak budur. STRONG 8K IPTV, Anti-Freeze 10.0 altyapısını kullanır: ülke bazında yük dengeli edge sunucuları, durmak yerine 8K'dan 4K'ya düşen uyarlanabilir bit hızı ve 7/24 izlenen %99,9 çalışma süresi.",
        "Her paket tam EPG, ana kanallarda catch-up, çok dilli ses kanalları ve altyazı içerir. Pratikte: 50 Mbps hatta sabit görüntü, hat ve ekran desteklediğinde gerçek 8K kalite."
      ]
    },
    {
      "h2": "Tek abonelikte IPTV Türkiye, İtalya, Fransa ve Almanya",
      "paragraphs": [
        "Yerel kanallar toplam kanal sayısından daha önemlidir. Türkiye paketi ulusal ve spor kanallarını, İtalya RAI, Mediaset ve Serie A'yı, Fransa TF1, Canal+ ve Ligue 1'i, Almanya ARD, ZDF ve Bundesliga'yı, İngiltere ve ABD paketleri Premier League, NBA ve NFL'i getirir.",
        "Yönlendirme bölgeseldir: İstanbul'daki bir izleyici Türkiye düğümüne, Londra'daki bir izleyici İngiltere düğümüne bağlanır; yerel kanallar böylece özgün kalitesini korur."
      ]
    },
    {
      "h2": "5 dakikada kurulum",
      "paragraphs": [
        "Sipariş onaylandıktan sonra Xtream Codes bilgileri ve M3U oynatma listesi bağlantısı gelir. Firestick veya Android box'a IPTV Smarters, TiviMate ya da IPTVnator kurun, Xtream Codes girişini seçin, kullanıcı adı, şifre ve sunucu URL'sini yapıştırın: kanal listesi ve EPG otomatik yüklenir. LG ve Samsung Smart TV'lerde aynı bilgiler uyumlu bir uygulamada çalışır; iPhone, iPad veya Windows'ta M3U bağlantısını VLC'ye yükleyebilirsiniz.",
        "Bir şey net değilse destek WhatsApp üzerinden adım adım yönlendirir, genellikle birkaç dakika içinde. Sözleşme ve donanım yok: 1 aylık paket 6,99 $, 6 aylık 22,99 $, 12 aylık 32,99 $."
      ]
    }
  ],
  "faq": [
    {
      "q": "8K IPTV için hangi internet hızı gerekir?",
      "a": "4K için sabit 25 Mbps yeterlidir; 8K kanallar yaklaşık 50 Mbps'den itibaren rahat çalışır. Oynatıcı bit hızını otomatik ayarlar ve donmak yerine 4K veya Full HD'ye düşer."
    },
    {
      "q": "Aynı hesabı birden fazla cihazda kullanabilir miyim?",
      "a": "Her abonelik bir eşzamanlı bağlantı içerir. 2, 3 veya 5 bağlantılı çoklu cihaz seçenekleri WhatsApp üzerinden eklenir."
    },
    {
      "q": "Hizmet Türkiye dışında çalışır mı?",
      "a": "Evet. Kanal listesi dünya genelindedir: Türkiye, İtalya, Fransa, Almanya, İspanya, İngiltere ve ABD için yerel paketler ile binlerce uluslararası kanal."
    },
    {
      "q": "Aktivasyon ne kadar sürer?",
      "a": "Çoğu durumda anındadır. Giriş bilgileri ödeme onaylandıktan sonra WhatsApp veya Telegram ile gönderilir ve hat birkaç dakika içinde aktif olur."
    },
    {
      "q": "EPG ve catch-up dahil mi?",
      "a": "Evet. Her pakette ana ülke paketleri için elektronik program rehberi ve en çok izlenen kanallarda catch-up bulunur."
    },
    {
      "q": "Hangi ödeme yöntemleri kabul ediliyor?",
      "a": "Ödeme WhatsApp veya Telegram üzerinden yapılır: bölgeye göre kart, PayPal, kripto ve banka havalesi. Fiyatlar USD, sözleşme ve otomatik yenileme yok."
    }
  ]
},
  ar: {
  "headline": "STRONG 8K IPTV — اشتراك IPTV مميز بجودة 8K/4K لإيطاليا وفرنسا وألمانيا والعالم",
  "intro": "STRONG 8K IPTV خدمة بث مميزة مصممة للمغتربين وعشاق كرة القدم والمنازل التي تعبت من التقطيع. حساب واحد يفتح أكثر من 20,000 قناة مباشرة ومكتبة كبيرة من الأفلام والمسلسلات بجودة 8K و4K وFull HD، مع خوادم إقليمية محسّنة لإيطاليا وفرنسا وألمانيا وإسبانيا وبريطانيا والولايات المتحدة. التثبيت يستغرق دقائق على Firestick وAndroid TV والتلفاز الذكي وiPhone وiPad وWindows وMAG، ويتم التنشيط مباشرة عبر واتساب أو تيليجرام.",
  "sections": [
    {
      "h2": "لماذا لا يتوقف STRONG 8K IPTV في ليالي المباريات",
      "paragraphs": [
        "معظم الموزعين الرخيصين لخدمات IPTV يبيعون القائمة نفسها المثقلة لآلاف المستخدمين، وهذا بالتحديد سبب توقف القنوات في ليالي الدوري أو دوري الأبطال. يعتمد STRONG 8K IPTV على بنية Anti-Freeze 10.0: خوادم طرفية موزعة بحسب البلد مع موازنة للحمل، ومعدل بتك متكيف ينتقل من 8K إلى 4K بدلاً من التوقف، ونسبة تشغيل 99.9% تحت مراقبة مستمرة.",
        "كل باقة تشمل دليل برامج كاملاً، وميزة الإرجاع على القنوات الرئيسية، ومسارات صوت متعددة اللغات وترجمة. عملياً: صورة ثابتة على اتصال 50 ميجابت، وجودة 8K حقيقية عندما يسمح الاتصال والشاشة."
      ]
    },
    {
      "h2": "قنوات إيطاليا وفرنسا وألمانيا وإسبانيا وبريطانيا وأمريكا في اشتراك واحد",
      "paragraphs": [
        "القنوات المحلية أهم من العدد الإجمالي. تشمل الباقة الإيطالية RAI وMediaset وSky IT والدوري الإيطالي، وفرنسا TF1 وCanal+ وbeIN Sports والدوري الفرنسي، وألمانيا ARD وZDF وSky DE والدوري الألماني، وإسبانيا LaLiga وMovistar، بينما توفر باقتا بريطانيا وأمريكا الدوري الإنجليزي وNBA وNFL وأكبر شبكات الترفيه.",
        "التوجيه إقليمي: المشاهد في ميلانو يتصل بخادم إيطالي، والمشاهد في مانشستر بخادم بريطاني، وبذلك تحافظ القنوات المحلية على جودتها الأصلية."
      ]
    },
    {
      "h2": "التثبيت على Firestick والتلفاز الذكي والهاتف في خمس دقائق",
      "paragraphs": [
        "بعد تأكيد الطلب تستلم بيانات Xtream Codes ورابط قائمة M3U. على Firestick أو جهاز Android ثبّت مشغلاً مثل IPTV Smarters أو TiviMate أو IPTVnator، واختر تسجيل الدخول عبر Xtream Codes، وألصق اسم المستخدم وكلمة المرور وعنوان الخادم، فتُحمَّل قائمة القنوات ودليل البرامج تلقائياً. على تلفازات LG وSamsung تعمل البيانات نفسها داخل تطبيق متوافق، وعلى iPhone وiPad وWindows يمكن تحميل رابط M3U في VLC.",
        "وإذا لم يكن شيء واضحاً، يرافقك الدعم خطوة بخطوة على واتساب، وغالباً خلال دقائق. بلا عقود وبلا أجهزة: باقة الشهر تبدأ من 6.99 دولار، وستة أشهر من 22.99 دولار، وسنة كاملة من 32.99 دولار."
      ]
    }
  ],
  "faq": [
    {
      "q": "ما سرعة الإنترنت المطلوبة لبث 8K؟",
      "a": "يكفي اتصال ثابت بسرعة 25 ميجابت لجودة 4K، أما قنوات 8K فتعمل بسلاسة من حوالي 50 ميجابت. يضبط المشغل معدل البتك تلقائياً وينزل إلى 4K أو Full HD بدلاً من التوقف."
    },
    {
      "q": "هل يمكن استخدام الحساب على أكثر من جهاز؟",
      "a": "كل اشتراك يشمل اتصالاً واحداً في الوقت نفسه. ويمكن إضافة خيارات الأجهزة المتعددة (2 أو 3 أو 5 اتصالات) عبر واتساب."
    },
    {
      "q": "هل تعمل الخدمة خارج إيطاليا؟",
      "a": "نعم، القائمة عالمية: باقات محلية لإيطاليا وفرنسا وألمانيا وإسبانيا وبريطانيا وأمريكا، إضافة إلى آلاف القنوات الدولية."
    },
    {
      "q": "كم يستغرق التنشيط؟",
      "a": "غالباً فوري. تُرسَل بيانات الدخول عبر واتساب أو تيليجرام بعد تأكيد الدفع ويصبح الخط نشطاً خلال دقائق، سبعة أيام في الأسبوع."
    },
    {
      "q": "هل دليل البرامج والإرجاع مشمولان؟",
      "a": "نعم، كل باقة تتضمن دليل البرامج الإلكتروني للباقات الوطنية الرئيسية وميزة الإرجاع على القنوات الأكثر مشاهدة."
    },
    {
      "q": "ما طرق الدفع المتاحة؟",
      "a": "يُتفق على الدفع عبر واتساب أو تيليجرام: بطاقة أو PayPal أو عملات رقمية أو تحويل بنكي حسب المنطقة. الأسعار بالدولار ودون عقود أو تجديد تلقائي."
    }
  ]
},
}

export function seoContent(locale: string): SeoContent {
  return isSeoLocale(locale) ? SEO_CONTENT[locale] : SEO_CONTENT.en
}

// Human-readable language labels for the SEO block headings.
export const SEO_LANG_LABEL: Record<SeoLocale, string> = {
  en: 'English', it: 'Italiano', fr: 'Français', de: 'Deutsch', es: 'Español',
  pt: 'Português', nl: 'Nederlands', pl: 'Polski', ro: 'Română',
  el: 'Ελληνικά', tr: 'Türkçe', ar: 'العربية',
}

// hreflang value used for each route (x-default -> root).
export function hreflangFor(locale: SeoLocale): string {
  return locale
}

export function pathFor(locale: SeoLocale): string {
  return locale === 'en' ? '' : `/${locale}`
}
