import type { SeoLocale } from '@/lib/seo-content'

// Single source of truth for the FAQ block.
//
// Both the visible FAQ accordion (components/faq.tsx) and the FAQPage JSON-LD
// (components/structured-data.tsx) read from this module, so the markup Google
// crawls always matches the answers a visitor actually sees. Duplicating the
// copy in two places is what previously created mismatched rich-result warnings.
//
// Item order is deliberate: setup -> trial -> anti-freeze -> reseller ->
// credits -> activation -> coverage -> protocols -> devices -> speed -> EPG ->
// white-label. Every item targets a distinct long-tail query, and each answer
// carries the exact keyword phrase a buyer types into Google.

export type FaqItem = { q: string; a: string }

const EN: FaqItem[] = [
  {
    q: 'How to setup STRONG 8K IPTV on Firestick, Android Box and Smart TV?',
    a: 'Order over WhatsApp or Telegram and you receive Xtream Codes API credentials plus an M3U playlist link within minutes. On a Firestick or Android Box install IPTV Smarters, TiviMate or IPTVnator, choose the Xtream Codes login, paste the username, password and server URL, and the channel list with full EPG loads automatically. On LG and Samsung Smart TV you enter the same credentials in a compatible player, and on iPhone, iPad or Windows you can open the M3U link in VLC. Our team walks you through the setup on WhatsApp, usually in under five minutes.',
  },
  {
    q: 'Do you offer a 24-hour free trial before purchasing?',
    a: 'Yes. A 24 hours free trial is available on request: message us on WhatsApp or Telegram and we activate a full-access test line with every channel, VOD and EPG included. The trial is completely free, needs no payment details, and lets you test Serie A, Champions League, Bundesliga and LaLiga streams on your own device before you buy a subscription.',
  },
  {
    q: 'What makes your server anti-freeze for live sports (Serie A, Champions League, Bundesliga)?',
    a: 'Anti-Freeze 10.0 IPTV is our delivery stack: load-balanced edge servers in each supported country, adaptive bitrate that steps from 8K to 4K instead of stalling, a pre-load buffer that keeps the next seconds of video ready, and 24/7 monitoring against a 99.9% uptime target. That is why Serie A, Champions League and Bundesliga matches stay stable on crowded match nights, when overloaded shared playlists usually freeze.',
  },
  {
    q: 'How does the IPTV Reseller Program and Admin Panel work?',
    a: 'After buying an IPTV Credit Package you get access to your own dedicated Admin Panel. From that panel you create sub-accounts in bulk, issue free trial lines, set expiry dates, monitor active connections and manage your own pricing. It is a white-label IPTV panel: your customers only ever see your brand, and support for your end users is handled by us in the background.',
  },
  {
    q: 'What is the minimum wholesale credit package to start?',
    a: 'The entry package for IPTV credit packages is 120 credits at $230 (about $1.92 per line), followed by 240 credits at $440 and 360 credits at $640, where the cost per line drops to roughly $1.78. One credit activates one subscription line, so a 120-credit package lets you start an IPTV business with 120 sellable lines and volume pricing is available above 360 credits.',
  },
  {
    q: 'How fast is the account activation after payment (PayPal / Crypto / Card)?',
    a: 'Activation is instant in most cases: credentials are delivered over WhatsApp or Telegram as soon as the payment is confirmed, and the line is live within five minutes, seven days a week. Card, PayPal, bank transfer and crypto (USDT) are accepted, and prices are quoted in USD with no contract and no automatic renewal.',
  },
  {
    q: 'Which countries and channel packages are included — Italia, France, Deutschland, España?',
    a: 'Every subscription includes the full multi-country list: IPTV Italia (RAI, Mediaset, Sky IT, DAZN, Serie A), IPTV France (TF1, M6, Canal+, beIN Sports, Ligue 1), IPTV Deutschland (ARD, ZDF, Sky DE, Bundesliga), IPTV España (RTVE, Antena 3, Movistar Plus+, LaLiga), plus the UK and USA packages and 20,000+ international channels, all at no extra cost.',
  },
  {
    q: 'Does STRONG 8K IPTV support Xtream Codes and M3U playlists?',
    a: 'Yes. Both formats are provided with every plan: Xtream Codes API for IPTV Smarters, TiviMate, IBO Player and most Smart TV apps, and a plain M3U playlist URL for VLC, Kodi, PVR IPTV Simple Client and older set-top boxes. That is what makes the service compatible with virtually every device on the market.',
  },
  {
    q: 'How many devices can I use at the same time?',
    a: 'Each subscription covers one simultaneous connection by default, but you can install the credentials on as many devices as you like as long as you do not stream on them at the same time. Multi-connection options (2, 3 or 5 simultaneous streams) can be added to any plan over WhatsApp, which is the usual choice for families and for resellers testing devices.',
  },
  {
    q: 'What internet speed do I need for 8K IPTV?',
    a: 'A stable 25 Mbps line is enough for 4K, while 8K channels are comfortable from around 50 Mbps. The player adapts the bitrate automatically, so a slower connection simply drops to 4K or Full HD instead of freezing the picture.',
  },
  {
    q: 'Do I get a full EPG and catch-up TV?',
    a: 'Yes. Every plan includes electronic program guide data for the main country packages and catch-up on the most-watched channels, so you can watch a match or a show that already aired, with multi-language audio tracks and subtitles where the broadcaster provides them.',
  },
  {
    q: 'Can I get a white-label panel and start my own IPTV business?',
    a: 'Yes. Buy IPTV reseller credits and you get a White-Label IPTV Panel with your own branding, bulk sub-account creation, trial line issuing and full user management. Combined with the lowest cost per line and 24/7 technical support, it is the fastest way to start IPTV business without building your own streaming infrastructure.',
  },
]

const IT: FaqItem[] = [
  {
    q: 'Come si configura STRONG 8K IPTV su Firestick, Android Box e Smart TV?',
    a: 'Dopo l’ordine su WhatsApp o Telegram ricevi le credenziali Xtream Codes e il link M3U in pochi minuti. Su Firestick o Android Box installa IPTV Smarters, TiviMate o IPTVnator, scegli l’accesso Xtream Codes e incolla nome utente, password e URL del server: la lista canali con EPG si carica da sola. Su Smart TV LG e Samsung usi le stesse credenziali in un player compatibile, su iPhone, iPad o Windows apri il link M3U in VLC. Il supporto ti segue passo passo su WhatsApp, di solito in meno di cinque minuti.',
  },
  {
    q: 'Offrite una prova gratuita di 24 ore prima dell’acquisto?',
    a: 'Sì. La prova gratuita di 24 ore si richiede su WhatsApp o Telegram e attiva una linea di test a pieno accesso, con tutti i canali, la VOD e l’EPG inclusi. È completamente gratuita, non richiede dati di pagamento e ti permette di verificare Serie A, Champions League, Bundesliga e LaLiga sul tuo dispositivo prima di abbonarti.',
  },
  {
    q: 'Perché il server è anti-freeze per lo sport in diretta (Serie A, Champions League, Bundesliga)?',
    a: 'Anti-Freeze 10.0 IPTV è la nostra infrastruttura: server edge bilanciati in ogni paese supportato, bitrate adattivo che scende da 8K a 4K invece di bloccarsi, buffer di pre-caricamento e monitoraggio 24/7 con obiettivo di uptime al 99,9%. Per questo Serie A, Champions League e Bundesliga restano stabili nelle serate più congestionate, quando le playlist condivise si bloccano.',
  },
  {
    q: 'Come funzionano il Programma Rivenditori IPTV e il pannello admin?',
    a: 'Dopo l’acquisto di un pacchetto di crediti ricevi accesso al tuo pannello di amministrazione dedicato. Da lì crei sub-account in blocco, emetti linee di prova gratuite, imposti le scadenze, controlli le connessioni attive e gestisci i tuoi prezzi. È un pannello IPTV white-label: i tuoi clienti vedono solo il tuo marchio e l’assistenza tecnica ai loro utenti la gestiamo noi.',
  },
  {
    q: 'Qual è il pacchetto minimo di crediti all’ingrosso per iniziare?',
    a: 'Il pacchetto d’ingresso è da 120 crediti a 230 $ (circa 1,92 $ per linea), poi 240 crediti a 440 $ e 360 crediti a 640 $, dove il costo per linea scende a circa 1,78 $. Un credito attiva una linea, quindi con 120 crediti puoi avviare un’attività IPTV con 120 linee vendibili; sopra i 360 crediti sono disponibili prezzi dedicati.',
  },
  {
    q: 'Quanto è veloce l’attivazione dopo il pagamento (PayPal / Crypto / Carta)?',
    a: 'L’attivazione è istantanea nella maggior parte dei casi: ricevute le credenziali su WhatsApp o Telegram, la linea è attiva entro 5 minuti, sette giorni su sette. Accettiamo carta, PayPal, bonifico e criptovalute (USDT). I prezzi sono in dollari, senza contratto e senza rinnovo automatico.',
  },
  {
    q: 'Quali paesi e pacchetti sono inclusi — Italia, Francia, Germania, Spagna?',
    a: 'Ogni abbonamento include la lista multi-paese completa: IPTV Italia (RAI, Mediaset, Sky IT, DAZN, Serie A), IPTV France (TF1, M6, Canal+, beIN Sports, Ligue 1), IPTV Deutschland (ARD, ZDF, Sky DE, Bundesliga), IPTV España (RTVE, Antena 3, Movistar Plus+, LaLiga), più i pacchetti UK e USA e oltre 20.000 canali internazionali, senza costi aggiuntivi.',
  },
  {
    q: 'STRONG 8K IPTV supporta Xtream Codes e le playlist M3U?',
    a: 'Sì, entrambi i formati sono inclusi in ogni piano: API Xtream Codes per IPTV Smarters, TiviMate, IBO Player e la maggior parte delle app per Smart TV, e un URL playlist M3U per VLC, Kodi, PVR IPTV Simple Client e decoder più datati. È questo che rende il servizio compatibile con quasi ogni dispositivo.',
  },
  {
    q: 'Su quanti dispositivi posso guardare contemporaneamente?',
    a: 'Ogni abbonamento include una connessione simultanea, ma puoi installare le credenziali su tutti i dispositivi che vuoi purché non guardino nello stesso momento. Le opzioni multi-connessione (2, 3 o 5 flussi simultanei) si aggiungono a qualsiasi piano su WhatsApp: è la scelta tipica delle famiglie e dei rivenditori che testano i dispositivi.',
  },
  {
    q: 'Che velocità internet serve per l’IPTV in 8K?',
    a: 'Una linea stabile da 25 Mbps basta per il 4K, mentre i canali 8K sono fluidi da circa 50 Mbps. Il player adatta il bitrate automaticamente, quindi una connessione più lenta passa a 4K o Full HD invece di bloccare l’immagine.',
  },
  {
    q: 'L’EPG completo e il catch-up sono inclusi?',
    a: 'Sì. Ogni piano include la guida elettronica dei programmi per i principali pacchetti nazionali e il catch-up sui canali più visti, così puoi recuperare una partita o un programma già andato in onda, con tracce audio e sottotitoli multilingua dove il broadcaster li fornisce.',
  },
  {
    q: 'Posso avere un pannello white-label e avviare la mia attività IPTV?',
    a: 'Sì. Acquistando i crediti reseller ottieni un pannello IPTV white-label con il tuo marchio, creazione massiva di sub-account, emissione di linee di prova e gestione completa degli utenti. Insieme al costo per linea più basso e all’assistenza tecnica 24/7 è il modo più rapido per avviare un’attività IPTV senza costruire la tua infrastruttura di streaming.',
  },
]

const FR: FaqItem[] = [
  {
    q: 'Comment installer STRONG 8K IPTV sur Firestick, Android Box et Smart TV ?',
    a: 'Après la commande sur WhatsApp ou Telegram, vous recevez vos identifiants Xtream Codes et le lien M3U en quelques minutes. Sur un Firestick ou une box Android, installez IPTV Smarters, TiviMate ou IPTVnator, choisissez la connexion Xtream Codes et collez identifiant, mot de passe et URL du serveur : la liste des chaînes avec EPG se charge automatiquement. Sur un Smart TV LG ou Samsung, saisissez les mêmes identifiants dans un lecteur compatible ; sur iPhone, iPad ou Windows, ouvrez le lien M3U dans VLC. Le support vous guide pas à pas sur WhatsApp, souvent en moins de cinq minutes.',
  },
  {
    q: 'Proposez-vous un essai gratuit de 24 h avant l’achat ?',
    a: 'Oui. L’essai gratuit de 24 h se demande sur WhatsApp ou Telegram : nous activons une ligne de test à accès complet, avec toutes les chaînes, la VOD et l’EPG. Il est entièrement gratuit, sans coordonnées bancaires, et vous permet de tester Ligue 1, Ligue des Champions, Bundesliga et LaLiga sur votre propre appareil avant de vous abonner.',
  },
  {
    q: 'Pourquoi votre serveur est-il anti-freeze pour le sport en direct (Ligue 1, Champions League, Bundesliga) ?',
    a: 'Anti-Freeze 10.0 IPTV, c’est notre infrastructure : serveurs edge répartis dans chaque pays couvert, débit adaptatif qui passe de la 8K à la 4K au lieu de figer, tampon de préchargement et supervision 24/7 pour un objectif de disponibilité de 99,9 %. C’est ce qui maintient Ligue 1, Ligue des Champions et Bundesliga stables les soirs de forte affluence, là où les playlists partagées se bloquent.',
  },
  {
    q: 'Comment fonctionnent le Programme Revendeur IPTV et le panneau d’administration ?',
    a: 'Après l’achat d’un pack de crédits, vous accédez à votre propre panneau d’administration. Vous y créez des sous-comptes en masse, émettez des lignes d’essai gratuites, fixez les dates d’expiration, suivez les connexions actives et gérez vos prix. C’est un panneau IPTV white-label : vos clients ne voient que votre marque, et le support technique de leurs utilisateurs finaux est assuré par nos équipes en arrière-plan.',
  },
  {
    q: 'Quel est le pack de crédits minimum pour démarrer ?',
    a: 'Le pack d’entrée est de 120 crédits à 230 $ (environ 1,92 $ par ligne), puis 240 crédits à 440 $ et 360 crédits à 640 $, où le coût par ligne descend à environ 1,78 $. Un crédit active une ligne : avec 120 crédits, vous démarrez une activité IPTV avec 120 lignes revendables, et des tarifs dédiés sont disponibles au-delà de 360 crédits.',
  },
  {
    q: 'Quel est le délai d’activation après paiement (PayPal / Crypto / Carte) ?',
    a: 'L’activation est instantanée dans la plupart des cas : les identifiants sont envoyés sur WhatsApp ou Telegram dès la confirmation du paiement, et la ligne est active en 5 minutes, sept jours sur sept. Carte bancaire, PayPal, virement et cryptomonnaies (USDT) sont acceptés, sans contrat ni reconduction automatique.',
  },
  {
    q: 'Quels pays et bouquets sont inclus — Italie, France, Allemagne, Espagne ?',
    a: 'Chaque abonnement inclut la liste multi-pays complète : IPTV Italia (RAI, Mediaset, Sky IT, DAZN, Serie A), IPTV France (TF1, M6, Canal+, beIN Sports, Ligue 1), IPTV Deutschland (ARD, ZDF, Sky DE, Bundesliga), IPTV España (RTVE, Antena 3, Movistar Plus+, LaLiga), plus les bouquets UK et USA et plus de 20 000 chaînes internationales, sans surcoût.',
  },
  {
    q: 'STRONG 8K IPTV prend-il en charge Xtream Codes et les playlists M3U ?',
    a: 'Oui, les deux formats sont fournis avec chaque formule : API Xtream Codes pour IPTV Smarters, TiviMate, IBO Player et la plupart des applications Smart TV, et une URL de playlist M3U pour VLC, Kodi, PVR IPTV Simple Client et les décodeurs plus anciens. C’est ce qui rend le service compatible avec quasiment tous les appareils du marché.',
  },
  {
    q: 'Combien d’appareils puis-je utiliser en même temps ?',
    a: 'Chaque abonnement couvre une connexion simultanée, mais vous pouvez installer les identifiants sur autant d’appareils que vous voulez tant qu’ils ne diffusent pas en même temps. Les options multi-connexions (2, 3 ou 5 flux simultanés) s’ajoutent à toute formule sur WhatsApp : c’est le choix habituel des familles et des revendeurs.',
  },
  {
    q: 'Quel débit internet faut-il pour l’IPTV en 8K ?',
    a: 'Une ligne stable de 25 Mbps suffit pour la 4K, et les chaînes 8K sont confortables à partir d’environ 50 Mbps. Le lecteur adapte automatiquement le débit : une connexion plus lente bascule en 4K ou Full HD au lieu de figer l’image.',
  },
  {
    q: 'L’EPG complet et le replay sont-ils inclus ?',
    a: 'Oui. Chaque formule inclut le guide électronique des programmes pour les principaux bouquets nationaux et le catch-up sur les chaînes les plus regardées : vous pouvez revoir un match ou une émission déjà diffusée, avec pistes audio et sous-titres multilingues lorsque le diffuseur les propose.',
  },
  {
    q: 'Puis-je obtenir un panneau white-label et lancer mon activité IPTV ?',
    a: 'Oui. En achetant des crédits revendeur, vous obtenez un panneau IPTV white-label à votre marque, avec création groupée de sous-comptes, émission de lignes d’essai et gestion complète des utilisateurs. Avec le coût par ligne le plus bas et un support technique 24/7, c’est le moyen le plus rapide de lancer une activité IPTV sans construire votre propre infrastructure de streaming.',
  },
]

const DE: FaqItem[] = [
  {
    q: 'Wie richte ich STRONG 8K IPTV auf Firestick, Android Box und Smart TV ein?',
    a: 'Nach der Bestellung über WhatsApp oder Telegram erhalten Sie die Xtream-Codes-Zugangsdaten und den M3U-Link innerhalb von Minuten. Auf Firestick oder Android Box installieren Sie IPTV Smarters, TiviMate oder IPTVnator, wählen den Xtream-Codes-Login und fügen Benutzername, Passwort und Server-URL ein – Senderliste und EPG laden automatisch. Auf LG- und Samsung-Smart-TVs nutzen Sie dieselben Zugangsdaten in einer kompatiblen Player-App, auf iPhone, iPad oder Windows öffnen Sie den M3U-Link in VLC. Unser Team begleitet die Einrichtung per WhatsApp, meist in unter fünf Minuten.',
  },
  {
    q: 'Bieten Sie vor dem Kauf einen kostenlosen 24-Stunden-Test an?',
    a: 'Ja. Der 24-Stunden-Test wird per WhatsApp oder Telegram angefragt: Wir aktivieren eine Testlinie mit Vollzugriff inklusive aller Sender, VOD und EPG. Der Test ist kostenlos, erfordert keine Zahlungsdaten und lässt Sie Bundesliga, Champions League, Serie A und LaLiga auf Ihrem eigenen Gerät prüfen, bevor Sie ein Abo kaufen.',
  },
  {
    q: 'Warum ist Ihr Server bei Livesport anti-freeze (Bundesliga, Champions League, Serie A)?',
    a: 'Anti-Freeze 10.0 IPTV ist unsere Infrastruktur: lastverteilte Edge-Server in jedem unterstützten Land, adaptive Bitrate, die von 8K auf 4K heruntergeht statt einzufrieren, ein Vorlade-Puffer und 24/7-Monitoring auf 99,9 % Uptime. Deshalb bleiben Bundesliga, Champions League und Serie A auch an vollen Spieltagen stabil, an denen überlastete geteilte Playlists einfrieren.',
  },
  {
    q: 'Wie funktionieren das IPTV-Reseller-Programm und das Admin-Panel?',
    a: 'Nach dem Kauf eines Guthabenpakets erhalten Sie Zugang zu Ihrem eigenen Admin-Panel. Dort erstellen Sie Sub-Accounts in großen Mengen, stellen kostenlose Testlinien aus, setzen Ablaufdaten, überwachen aktive Verbindungen und verwalten Ihre Preise. Es ist ein White-Label-IPTV-Panel: Ihre Kunden sehen nur Ihre Marke, der technische Support für deren Endnutzer läuft im Hintergrund über uns.',
  },
  {
    q: 'Welches Mindest-Großhandelspaket ist zum Start nötig?',
    a: 'Das Einstiegspaket sind 120 Guthaben für 230 $ (rund 1,92 $ pro Linie), danach 240 Guthaben für 440 $ und 360 Guthaben für 640 $, wo die Kosten pro Linie auf etwa 1,78 $ sinken. Ein Guthaben aktiviert eine Linie: Mit 120 Guthaben starten Sie ein IPTV-Geschäft mit 120 verkaufbaren Linien, Staffelpreise gibt es oberhalb von 360 Guthaben.',
  },
  {
    q: 'Wie schnell ist die Aktivierung nach der Zahlung (PayPal / Krypto / Karte)?',
    a: 'Die Aktivierung erfolgt in den meisten Fällen sofort: Die Zugangsdaten kommen nach Zahlungsbestätigung über WhatsApp oder Telegram, die Linie ist binnen fünf Minuten live, sieben Tage pro Woche. Karte, PayPal, Überweisung und Krypto (USDT) werden akzeptiert; Preise in USD, ohne Vertrag und ohne automatische Verlängerung.',
  },
  {
    q: 'Welche Länder und Senderpakete sind enthalten – Italien, Frankreich, Deutschland, Spanien?',
    a: 'Jedes Abo enthält die komplette Multi-Country-Liste: IPTV Italia (RAI, Mediaset, Sky IT, DAZN, Serie A), IPTV France (TF1, M6, Canal+, beIN Sports, Ligue 1), IPTV Deutschland (ARD, ZDF, Sky DE, Bundesliga), IPTV España (RTVE, Antena 3, Movistar Plus+, LaLiga) sowie die UK- und USA-Pakete und über 20.000 internationale Sender ohne Aufpreis.',
  },
  {
    q: 'Unterstützt STRONG 8K IPTV Xtream Codes und M3U-Playlists?',
    a: 'Ja, beide Formate sind in jedem Paket enthalten: Xtream-Codes-API für IPTV Smarters, TiviMate, IBO Player und die meisten Smart-TV-Apps sowie eine M3U-Playlist-URL für VLC, Kodi, PVR IPTV Simple Client und ältere Receiver. Genau das macht den Dienst mit praktisch jedem Gerät am Markt kompatibel.',
  },
  {
    q: 'Auf wie vielen Geräten kann ich gleichzeitig streamen?',
    a: 'Jedes Abo umfasst standardmäßig eine gleichzeitige Verbindung; Sie können die Zugangsdaten aber auf beliebig vielen Geräten installieren, solange diese nicht gleichzeitig streamen. Multi-Connection-Optionen (2, 3 oder 5 gleichzeitige Streams) lassen sich per WhatsApp zu jedem Paket hinzufügen – die übliche Wahl für Familien und für Reseller, die Geräte testen.',
  },
  {
    q: 'Welche Internetgeschwindigkeit brauche ich für 8K-IPTV?',
    a: 'Eine stabile 25-Mbit/s-Leitung reicht für 4K, 8K-Sender laufen ab etwa 50 Mbit/s komfortabel. Der Player passt die Bitrate automatisch an, eine langsamere Verbindung wechselt daher auf 4K oder Full HD, statt das Bild einzufrieren.',
  },
  {
    q: 'Sind vollständiges EPG und Catch-Up enthalten?',
    a: 'Ja. Jedes Paket enthält EPG-Daten für die wichtigsten Länderpakete und Catch-Up auf den meistgesehenen Sendern, sodass Sie ein bereits gelaufenes Spiel oder eine Sendung nachholen können – inklusive mehrsprachiger Tonspuren und Untertitel, wo der Sender sie anbietet.',
  },
  {
    q: 'Kann ich ein White-Label-Panel bekommen und ein eigenes IPTV-Geschäft starten?',
    a: 'Ja. Mit Reseller-Guthaben erhalten Sie ein White-Label-IPTV-Panel unter Ihrer Marke mit Massenanlage von Sub-Accounts, Ausgabe von Testlinien und vollständiger Nutzerverwaltung. Zusammen mit den niedrigsten Kosten pro Linie und 24/7-Support ist das der schnellste Weg, ein IPTV-Geschäft zu starten, ohne eigene Streaming-Infrastruktur aufzubauen.',
  },
]

const ES: FaqItem[] = [
  {
    q: '¿Cómo configurar STRONG 8K IPTV en Firestick, Android Box y Smart TV?',
    a: 'Tras pedir por WhatsApp o Telegram recibes las credenciales Xtream Codes y el enlace M3U en pocos minutos. En un Firestick o Android Box instala IPTV Smarters, TiviMate o IPTVnator, elige el acceso Xtream Codes y pega usuario, contraseña y URL del servidor: la lista de canales con EPG se carga sola. En Smart TV LG y Samsung usas las mismas credenciales en un reproductor compatible, y en iPhone, iPad o Windows abres el enlace M3U en VLC. El soporte te guía paso a paso por WhatsApp, normalmente en menos de cinco minutos.',
  },
  {
    q: '¿Ofrecéis una prueba gratis de 24 horas antes de comprar?',
    a: 'Sí. La prueba gratis de 24 horas se solicita por WhatsApp o Telegram y activa una línea de prueba con acceso completo, incluidos todos los canales, la VOD y el EPG. Es totalmente gratuita, no requiere datos de pago y te permite comprobar LaLiga, Champions League, Bundesliga y Serie A en tu propio dispositivo antes de abonarte.',
  },
  {
    q: '¿Por qué el servidor es anti-freeze para deporte en directo (LaLiga, Champions League, Bundesliga)?',
    a: 'Anti-Freeze 10.0 IPTV es nuestra infraestructura: servidores edge balanceados en cada país cubierto, bitrate adaptativo que baja de 8K a 4K en vez de congelarse, búfer de precarga y monitorización 24/7 con objetivo de 99,9 % de uptime. Por eso LaLiga, Champions League y Bundesliga se mantienen estables las noches de máxima audiencia, cuando las listas compartidas se bloquean.',
  },
  {
    q: '¿Cómo funcionan el Programa de Revendedores IPTV y el panel de administración?',
    a: 'Tras comprar un paquete de créditos accedes a tu propio panel de administración. Desde ahí creas subcuentas en masa, emites líneas de prueba gratis, fijas fechas de caducidad, controlas conexiones activas y gestionas tus precios. Es un panel IPTV white-label: tus clientes solo ven tu marca y el soporte técnico de sus usuarios finales lo gestionamos nosotros en segundo plano.',
  },
  {
    q: '¿Cuál es el paquete mínimo de créditos al por mayor para empezar?',
    a: 'El paquete de entrada es de 120 créditos por 230 $ (unos 1,92 $ por línea), después 240 créditos por 440 $ y 360 créditos por 640 $, donde el coste por línea baja a unos 1,78 $. Un crédito activa una línea: con 120 créditos inicias un negocio IPTV con 120 líneas vendibles, y por encima de 360 créditos hay precios dedicados.',
  },
  {
    q: '¿Qué rapidez tiene la activación tras el pago (PayPal / Cripto / Tarjeta)?',
    a: 'La activación es instantánea en la mayoría de los casos: las credenciales se envían por WhatsApp o Telegram al confirmar el pago y la línea está activa en 5 minutos, siete días a la semana. Aceptamos tarjeta, PayPal, transferencia y criptomonedas (USDT), con precios en USD, sin contrato ni renovación automática.',
  },
  {
    q: '¿Qué países y paquetes se incluyen: Italia, Francia, Alemania, España?',
    a: 'Cada suscripción incluye la lista multipaís completa: IPTV Italia (RAI, Mediaset, Sky IT, DAZN, Serie A), IPTV France (TF1, M6, Canal+, beIN Sports, Ligue 1), IPTV Deutschland (ARD, ZDF, Sky DE, Bundesliga), IPTV España (RTVE, Antena 3, Movistar Plus+, LaLiga), además de los paquetes UK y USA y más de 20.000 canales internacionales, sin coste extra.',
  },
  {
    q: '¿STRONG 8K IPTV admite Xtream Codes y listas M3U?',
    a: 'Sí, los dos formatos se entregan con cada plan: API Xtream Codes para IPTV Smarters, TiviMate, IBO Player y la mayoría de apps de Smart TV, y una URL de lista M3U para VLC, Kodi, PVR IPTV Simple Client y decodificadores antiguos. Eso hace que el servicio sea compatible con prácticamente cualquier dispositivo del mercado.',
  },
  {
    q: '¿En cuántos dispositivos puedo ver a la vez?',
    a: 'Cada suscripción cubre una conexión simultánea, pero puedes instalar las credenciales en todos los dispositivos que quieras siempre que no emitan al mismo tiempo. Las opciones multiconexión (2, 3 o 5 flujos simultáneos) se añaden a cualquier plan por WhatsApp: es la elección habitual de familias y de revendedores que prueban dispositivos.',
  },
  {
    q: '¿Qué velocidad de internet necesito para IPTV en 8K?',
    a: 'Una línea estable de 25 Mbps basta para 4K, y los canales 8K van cómodos a partir de unos 50 Mbps. El reproductor adapta el bitrate automáticamente, así que una conexión más lenta pasa a 4K o Full HD en vez de congelar la imagen.',
  },
  {
    q: '¿Incluye EPG completo y catch-up?',
    a: 'Sí. Cada plan incluye la guía electrónica de programación de los principales paquetes nacionales y catch-up en los canales más vistos, así puedes recuperar un partido o un programa ya emitido, con pistas de audio y subtítulos en varios idiomas cuando el emisor los ofrece.',
  },
  {
    q: '¿Puedo tener un panel white-label y montar mi propio negocio IPTV?',
    a: 'Sí. Al comprar créditos de revendedor obtienes un panel IPTV white-label con tu marca, creación masiva de subcuentas, emisión de líneas de prueba y gestión completa de usuarios. Junto al coste por línea más bajo y al soporte técnico 24/7, es la vía más rápida para montar un negocio IPTV sin construir tu propia infraestructura de streaming.',
  },
]

const CATALOG: Partial<Record<SeoLocale, FaqItem[]>> = { en: EN, it: IT, fr: FR, de: DE, es: ES }

/**
 * FAQ set for a locale. Locales without a translated catalogue fall back to the
 * English set so the FAQPage markup is always complete (never an empty array).
 */
export function faqFor(locale: SeoLocale): FaqItem[] {
  return CATALOG[locale] ?? EN
}

/** Locales that currently ship a fully translated FAQ catalogue. */
export const FAQ_TRANSLATED_LOCALES: SeoLocale[] = ['en', 'it', 'fr', 'de', 'es']
