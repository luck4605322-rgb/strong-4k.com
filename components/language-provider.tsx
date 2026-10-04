'use client'

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'

type Language =
  | 'en'
  | 'it'
  | 'fr'
  | 'de'
  | 'es'
  | 'pt'
  | 'nl'
  | 'pl'
  | 'ro'
  | 'el'
  | 'tr'
  | 'ar'

// ISO 3166-1 alpha-2 codes used for flagcdn image flags (works on every OS, unlike emoji flags)
const LANGUAGE_META: Record<Language, { label: string; country: string; rtl?: boolean }> = {
  en: { label: 'English', country: 'gb' },
  it: { label: 'Italiano', country: 'it' },
  fr: { label: 'Français', country: 'fr' },
  de: { label: 'Deutsch', country: 'de' },
  es: { label: 'Español', country: 'es' },
  pt: { label: 'Português', country: 'pt' },
  nl: { label: 'Nederlands', country: 'nl' },
  pl: { label: 'Polski', country: 'pl' },
  ro: { label: 'Română', country: 'ro' },
  el: { label: 'Ελληνικά', country: 'gr' },
  tr: { label: 'Türkçe', country: 'tr' },
  ar: { label: 'العربية', country: 'sa', rtl: true },
}

export function Flag({ country, label }: { country: string; label: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${country}.png`}
      srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
      width={22}
      height={16}
      alt={`${label} flag`}
      className="h-4 w-[22px] shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-white/20"
    />
  )
}

const translations = {
  en: { trial: 'Get 24h Free Trial', whatsapp: 'Contact via WhatsApp', telegram: 'Contact via Telegram', order: 'Order via WhatsApp / Telegram', language: 'Language', trust: '4.9/5 Stars from 1,200+ Happy Customers', review: '“Worked smoothly during Champions League night!”', heroBadge: '20,000+ Live Channels · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — The #1 Premium IPTV Service in Italy, France & Worldwide', heroSubtitle: 'Stream 20,000+ local & international live TV channels including IPTV Italia, France, Germany, UK, USA, and Spain in 8K/4K quality with zero buffering.', privacy: 'Privacy Policy', refund: 'Refund Policy', popupTitle: 'Want a Free 24h Trial?', popupBody: 'Still deciding? Message us and we will activate a free 24-hour test line so you can try every channel in 8K/4K, completely risk-free.', popupLater: 'Maybe later' },
  it: { trial: 'Prova gratuita di 24 ore', whatsapp: 'Contatta via WhatsApp', telegram: 'Contatta via Telegram', order: 'Ordina su WhatsApp / Telegram', language: 'Lingua', trust: '4,9/5 stelle da oltre 1.200 clienti soddisfatti', review: '“Ha funzionato perfettamente durante la serata di Champions League!”', heroBadge: 'Oltre 20.000 canali live · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Il servizio IPTV premium n. 1 in Italia, Francia e nel mondo', heroSubtitle: 'Guarda oltre 20.000 canali TV locali e internazionali in diretta, inclusi IPTV Italia, Francia, Germania, Regno Unito, USA e Spagna, in qualità 8K/4K senza buffering.', privacy: 'Informativa sulla Privacy', refund: 'Politica di Rimborso', popupTitle: 'Vuoi una prova gratuita di 24 ore?', popupBody: 'Non sei ancora convinto? Scrivici e attiveremo una linea di prova gratuita di 24 ore per testare tutti i canali in 8K/4K, senza alcun rischio.', popupLater: 'Forse più tardi' },
  fr: { trial: 'Essai gratuit de 24 h', whatsapp: 'Commander via WhatsApp', telegram: 'Commander via Telegram', order: 'Commander sur WhatsApp / Telegram', language: 'Langue', trust: '4,9/5 étoiles de plus de 1 200 clients satisfaits', review: '“Tout a parfaitement fonctionné pendant la soirée de Ligue des Champions !”', heroBadge: 'Plus de 20 000 chaînes en direct · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Le service IPTV premium n° 1 en France, en Italie et dans le monde', heroSubtitle: 'Regardez plus de 20 000 chaînes TV locales et internationales en direct — France, Italie, Allemagne, Royaume-Uni, USA et Espagne — en qualité 8K/4K sans mise en mémoire tampon.', privacy: 'Politique de Confidentialité', refund: 'Politique de Remboursement', popupTitle: 'Envie d’un essai gratuit de 24 h ?', popupBody: 'Vous hésitez encore ? Écrivez-nous et nous activerons une ligne de test gratuite de 24 h pour essayer toutes les chaînes en 8K/4K, sans aucun risque.', popupLater: 'Plus tard' },
  de: { trial: '24 Stunden kostenlos testen', whatsapp: 'Über WhatsApp bestellen', telegram: 'Über Telegram bestellen', order: 'Via WhatsApp / Telegram bestellen', language: 'Sprache', trust: '4,9/5 Sterne von über 1.200 zufriedenen Kunden', review: '“Hat während des Champions-League-Abends reibungslos funktioniert!”', heroBadge: 'Über 20.000 Live-Sender · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Der Nr.-1-Premium-IPTV-Dienst in Deutschland, Italien und weltweit', heroSubtitle: 'Streamen Sie über 20.000 lokale und internationale Live-TV-Sender, darunter IPTV Deutschland, Italien, Frankreich, UK, USA und Spanien, in 8K/4K-Qualität ohne Pufferung.', privacy: 'Datenschutzrichtlinie', refund: 'Rückerstattungsrichtlinie', popupTitle: 'Kostenlosen 24h-Test sichern?', popupBody: 'Noch unschlüssig? Schreiben Sie uns und wir aktivieren eine kostenlose 24-Stunden-Testlinie, mit der Sie alle Sender in 8K/4K risikofrei testen können.', popupLater: 'Vielleicht später' },
  es: { trial: 'Prueba gratis de 24 h', whatsapp: 'Contactar por WhatsApp', telegram: 'Contactar por Telegram', order: 'Pide por WhatsApp / Telegram', language: 'Idioma', trust: '4,9/5 estrellas de más de 1.200 clientes satisfechos', review: '“¡Funcionó sin problemas durante la noche de Champions League!”', heroBadge: 'Más de 20.000 canales en directo · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — El servicio IPTV premium n.º 1 en España, Italia y todo el mundo', heroSubtitle: 'Disfruta de más de 20.000 canales de TV locales e internacionales en directo, incluidos España, Italia, Francia, Alemania, Reino Unido y EE. UU., en calidad 8K/4K sin buffering.', privacy: 'Política de Privacidad', refund: 'Política de Reembolso', popupTitle: '¿Quieres una prueba gratis de 24 h?', popupBody: '¿Aún lo estás pensando? Escríbenos y activaremos una línea de prueba gratuita de 24 horas para que pruebes todos los canales en 8K/4K, sin ningún riesgo.', popupLater: 'Quizás más tarde' },
  pt: { trial: 'Teste grátis de 24 h', whatsapp: 'Contactar via WhatsApp', telegram: 'Contactar via Telegram', order: 'Peça via WhatsApp / Telegram', language: 'Idioma', trust: '4,9/5 estrelas de mais de 1.200 clientes satisfeitos', review: '“Funcionou perfeitamente durante a noite da Champions League!”', heroBadge: 'Mais de 20.000 canais ao vivo · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — O serviço premium de IPTV n.º 1 em Itália, França e no mundo', heroSubtitle: 'Assista a mais de 20.000 canais de TV locais e internacionais ao vivo, incluindo Itália, França, Alemanha, Reino Unido, EUA e Espanha, em qualidade 8K/4K sem interrupções.', privacy: 'Política de Privacidade', refund: 'Política de Reembolso', popupTitle: 'Quer um teste grátis de 24 h?', popupBody: 'Ainda indeciso? Envie-nos uma mensagem e ativaremos uma linha de teste gratuita de 24 horas para experimentar todos os canais em 8K/4K, sem qualquer risco.', popupLater: 'Talvez mais tarde' },
  nl: { trial: 'Gratis proefperiode van 24 uur', whatsapp: 'Contact via WhatsApp', telegram: 'Contact via Telegram', order: 'Bestel via WhatsApp / Telegram', language: 'Taal', trust: '4,9/5 sterren van meer dan 1.200 tevreden klanten', review: '“Werkte vlekkeloos tijdens de Champions League-avond!”', heroBadge: 'Meer dan 20.000 live kanalen · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — De nr. 1 premium IPTV-dienst in Italië, Frankrijk en wereldwijd', heroSubtitle: 'Stream meer dan 20.000 lokale en internationale live-tv-kanalen, waaronder Italië, Frankrijk, Duitsland, het VK, de VS en Spanje, in 8K/4K-kwaliteit zonder buffering.', privacy: 'Privacybeleid', refund: 'Restitutiebeleid', popupTitle: 'Gratis proefperiode van 24 uur?', popupBody: 'Twijfel je nog? Stuur ons een bericht en we activeren een gratis testlijn van 24 uur, zodat je alle kanalen in 8K/4K zonder risico kunt proberen.', popupLater: 'Misschien later' },
  pl: { trial: 'Darmowy test 24h', whatsapp: 'Kontakt przez WhatsApp', telegram: 'Kontakt przez Telegram', order: 'Zamów przez WhatsApp / Telegram', language: 'Język', trust: '4,9/5 gwiazdek od ponad 1200 zadowolonych klientów', review: '“Działało bez zarzutu podczas wieczoru Ligi Mistrzów!”', heroBadge: 'Ponad 20 000 kanałów na żywo · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Premium usługa IPTV nr 1 we Włoszech, Francji i na całym świecie', heroSubtitle: 'Oglądaj ponad 20 000 lokalnych i międzynarodowych kanałów TV na żywo, w tym Włochy, Francję, Niemcy, Wielką Brytanię, USA i Hiszpanię, w jakości 8K/4K bez buforowania.', privacy: 'Polityka Prywatności', refund: 'Polityka Zwrotów', popupTitle: 'Chcesz darmowy test 24h?', popupBody: 'Nadal się wahasz? Napisz do nas, a aktywujemy darmową linię testową na 24 godziny, abyś mógł wypróbować wszystkie kanały w 8K/4K bez żadnego ryzyka.', popupLater: 'Może później' },
  ro: { trial: 'Probă gratuită de 24 h', whatsapp: 'Contactează pe WhatsApp', telegram: 'Contactează pe Telegram', order: 'Comandă pe WhatsApp / Telegram', language: 'Limbă', trust: '4,9/5 stele de la peste 1.200 de clienți mulțumiți', review: '“A funcționat impecabil în seara de Champions League!”', heroBadge: 'Peste 20.000 de canale live · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Serviciul IPTV premium nr. 1 în Italia, Franța și în toată lumea', heroSubtitle: 'Vizionează peste 20.000 de canale TV locale și internaționale în direct, inclusiv Italia, Franța, Germania, Marea Britanie, SUA și Spania, în calitate 8K/4K fără buffering.', privacy: 'Politica de Confidențialitate', refund: 'Politica de Rambursare', popupTitle: 'Vrei o probă gratuită de 24 h?', popupBody: 'Încă te gândești? Scrie-ne și activăm o linie de test gratuită de 24 de ore, ca să poți încerca toate canalele în 8K/4K, fără niciun risc.', popupLater: 'Poate mai târziu' },
  el: { trial: 'Δωρεάν δοκιμή 24 ωρών', whatsapp: 'Επικοινωνία μέσω WhatsApp', telegram: 'Επικοινωνία μέσω Telegram', order: 'Παραγγείλτε μέσω WhatsApp / Telegram', language: 'Γλώσσα', trust: '4,9/5 αστέρια από 1.200+ ικανοποιημένους πελάτες', review: '“Λειτούργησε άψογα τη βραδιά του Champions League!”', heroBadge: '20.000+ ζωντανά κανάλια · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — Η premium IPTV υπηρεσία Νο. 1 σε Ιταλία, Γαλλία και παγκοσμίως', heroSubtitle: 'Παρακολουθήστε 20.000+ τοπικά και διεθνή τηλεοπτικά κανάλια ζωντανά, συμπεριλαμβανομένων Ιταλίας, Γαλλίας, Γερμανίας, Ην. Βασιλείου, ΗΠΑ και Ισπανίας, σε ποιότητα 8K/4K χωρίς καθυστερήσεις.', privacy: 'Πολιτική Απορρήτου', refund: 'Πολιτική Επιστροφής Χρημάτων', popupTitle: 'Θέλετε δωρεάν δοκιμή 24 ωρών;', popupBody: 'Ακόμα το σκέφτεστε; Στείλτε μας μήνυμα και θα ενεργοποιήσουμε μια δωρεάν δοκιμαστική γραμμή 24 ωρών για να δοκιμάσετε όλα τα κανάλια σε 8K/4K, χωρίς κανένα ρίσκο.', popupLater: 'Ίσως αργότερα' },
  tr: { trial: '24 saat ücretsiz deneme', whatsapp: "WhatsApp'tan iletişim", telegram: "Telegram'dan iletişim", order: "WhatsApp / Telegram'dan sipariş verin", language: 'Dil', trust: "1.200'den fazla mutlu müşteriden 4,9/5 yıldız", review: '“Şampiyonlar Ligi gecesi kusursuz çalıştı!”', heroBadge: '20.000+ Canlı Kanal · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — İtalya, Fransa ve dünya çapında 1 numaralı premium IPTV hizmeti', heroSubtitle: "İtalya, Fransa, Almanya, İngiltere, ABD ve İspanya dahil 20.000'den fazla yerel ve uluslararası canlı TV kanalını donmadan 8K/4K kalitesinde izleyin.", privacy: 'Gizlilik Politikası', refund: 'İade Politikası', popupTitle: 'Ücretsiz 24 saat deneme ister misiniz?', popupBody: 'Hâlâ kararsız mısınız? Bize yazın; tüm kanalları 8K/4K kalitesinde hiçbir risk olmadan denemeniz için 24 saatlik ücretsiz bir test hattı açalım.', popupLater: 'Belki daha sonra' },
  ar: { trial: 'تجربة مجانية لمدة 24 ساعة', whatsapp: 'تواصل عبر واتساب', telegram: 'تواصل عبر تيليجرام', order: 'اطلب عبر واتساب / تيليجرام', language: 'اللغة', trust: 'تقييم 4.9/5 من أكثر من 1200 عميل سعيد', review: '«عمل بسلاسة خلال ليلة دوري أبطال أوروبا!»', heroBadge: 'أكثر من 20,000 قناة مباشرة · 8K / 4K Ultra HD', heroTitle: 'STRONG 8K IPTV — خدمة IPTV المميزة رقم 1 في إيطاليا وفرنسا وحول العالم', heroSubtitle: 'شاهد أكثر من 20,000 قناة تلفزيونية محلية ودولية مباشرة، بما في ذلك إيطاليا وفرنسا وألمانيا والمملكة المتحدة والولايات المتحدة وإسبانيا، بجودة 8K/4K وبدون تقطيع.', privacy: 'سياسة الخصوصية', refund: 'سياسة الاسترداد', popupTitle: 'هل تريد تجربة مجانية لمدة 24 ساعة؟', popupBody: 'ما زلت مترددًا؟ راسلنا وسنفعّل خط تجربة مجانيًا لمدة 24 ساعة لتجربة جميع القنوات بجودة 8K/4K دون أي مخاطرة.', popupLater: 'ربما لاحقًا' },
} as const

type TranslationKey = keyof typeof translations.en

export type ResellerCopy = {
  badge: string
  title: string
  subtitle: string
  features: [string, string, string, string]
  order: string
  telegram: string
  mostPopular: string
  note: string
  faqQ: string
  faqA: string
}

export const RESELLER_I18N: Record<Language, ResellerCopy> = {
  en: {
    badge: 'Reseller Program',
    title: 'Reseller Credit Packages',
    subtitle: 'Start your own IPTV business. Each credit activates one sub-account line — the more credits you buy, the lower your cost per line.',
    features: ['All channels & VOD included', 'Dedicated admin panel', 'Bulk sub-account creation', 'Dedicated account manager'],
    order: 'Order Reseller Credits',
    telegram: 'Contact for Reseller Panel',
    mostPopular: 'Most popular',
    note: 'Need a custom volume above 360 credits? Contact us for wholesale pricing and white-label panel options.',
    faqQ: 'How does the IPTV Reseller Program work?',
    faqA: 'After purchasing a credit package, we will provide you with access to your own dedicated IPTV Admin Panel. You can create sub-accounts, manage users, and issue free trial lines anytime.',
  },
  it: {
    badge: 'Programma Rivenditori',
    title: 'Pacchetti di Crediti Rivenditore',
    subtitle: 'Avvia la tua attività IPTV. Ogni credito attiva una linea sub-account: più crediti acquisti, più basso è il costo per linea.',
    features: ['Tutti i canali e VOD inclusi', 'Pannello di controllo dedicato', 'Creazione massiva di sub-account', 'Account manager dedicato'],
    order: 'Ordina Crediti Rivenditore',
    telegram: 'Richiedi il Pannello Rivenditore',
    mostPopular: 'Più popolare',
    note: 'Ti serve un volume superiore a 360 crediti? Contattaci per prezzi all\u2019ingrosso e opzioni di pannello white-label.',
    faqQ: 'Come funziona il Programma Rivenditori IPTV?',
    faqA: 'Dopo l\u2019acquisto di un pacchetto di crediti, ti forniamo l\u2019accesso al tuo pannello di amministrazione IPTV dedicato. Puoi creare sub-account, gestire gli utenti ed emettere linee di prova gratuite in qualsiasi momento.',
  },
  fr: {
    badge: 'Programme Revendeur',
    title: 'Packs de Crédits Revendeur',
    subtitle: 'Lancez votre propre activité IPTV. Chaque crédit active une ligne sous-compte — plus vous achetez de crédits, plus votre coût par ligne diminue.',
    features: ['Toutes les chaînes et VOD incluses', 'Panneau d\u2019administration dédié', 'Création groupée de sous-comptes', 'Gestionnaire de compte dédié'],
    order: 'Commander des Crédits Revendeur',
    telegram: 'Demander le Panneau Revendeur',
    mostPopular: 'Le plus populaire',
    note: 'Besoin d\u2019un volume supérieur à 360 crédits ? Contactez-nous pour des tarifs de gros et des options de panneau en marque blanche.',
    faqQ: 'Comment fonctionne le Programme Revendeur IPTV ?',
    faqA: 'Après l\u2019achat d\u2019un pack de crédits, nous vous donnons accès à votre propre panneau d\u2019administration IPTV. Vous pouvez créer des sous-comptes, gérer les utilisateurs et émettre des lignes d\u2019essai gratuites à tout moment.',
  },
  de: {
    badge: 'Reseller-Programm',
    title: 'Reseller-Guthabenpakete',
    subtitle: 'Starten Sie Ihr eigenes IPTV-Geschäft. Jedes Guthaben aktiviert eine Sub-Account-Linie — je mehr Guthaben Sie kaufen, desto niedriger Ihre Kosten pro Linie.',
    features: ['Alle Sender & VOD inklusive', 'Eigenes Admin-Panel', 'Massenerstellung von Sub-Accounts', 'Persönlicher Account-Manager'],
    order: 'Reseller-Guthaben bestellen',
    telegram: 'Reseller-Panel anfragen',
    mostPopular: 'Am beliebtesten',
    note: 'Benötigen Sie mehr als 360 Guthaben? Kontaktieren Sie uns für Großhandelspreise und White-Label-Panel-Optionen.',
    faqQ: 'Wie funktioniert das IPTV-Reseller-Programm?',
    faqA: 'Nach dem Kauf eines Guthabenpakets erhalten Sie Zugang zu Ihrem eigenen IPTV-Admin-Panel. Sie können Sub-Accounts erstellen, Nutzer verwalten und jederzeit kostenlose Testlinien ausstellen.',
  },
  es: {
    badge: 'Programa de Revendedores',
    title: 'Paquetes de Créditos para Revendedores',
    subtitle: 'Inicia tu propio negocio IPTV. Cada crédito activa una línea de subcuenta: cuantos más créditos compres, menor será tu costo por línea.',
    features: ['Todos los canales y VOD incluidos', 'Panel de administración dedicado', 'Creación masiva de subcuentas', 'Gestor de cuenta dedicado'],
    order: 'Pedir Créditos de Revendedor',
    telegram: 'Solicitar Panel de Revendedor',
    mostPopular: 'Más popular',
    note: '¿Necesitas un volumen superior a 360 créditos? Contáctanos para precios mayoristas y opciones de panel de marca blanca.',
    faqQ: '¿Cómo funciona el Programa de Revendedores IPTV?',
    faqA: 'Tras comprar un paquete de créditos, te daremos acceso a tu propio panel de administración IPTV. Puedes crear subcuentas, gestionar usuarios y emitir líneas de prueba gratuitas en cualquier momento.',
  },
  pt: {
    badge: 'Programa de Revendedores',
    title: 'Pacotes de Créditos para Revendedores',
    subtitle: 'Comece o seu próprio negócio IPTV. Cada crédito ativa uma linha de subconta — quanto mais créditos comprar, menor o custo por linha.',
    features: ['Todos os canais e VOD incluídos', 'Painel de administração dedicado', 'Criação em massa de subcontas', 'Gestor de conta dedicado'],
    order: 'Encomendar Créditos de Revendedor',
    telegram: 'Solicitar Painel de Revendedor',
    mostPopular: 'Mais popular',
    note: 'Precisa de um volume acima de 360 créditos? Contacte-nos para preços grossistas e opções de painel white-label.',
    faqQ: 'Como funciona o Programa de Revendedores IPTV?',
    faqA: 'Após comprar um pacote de créditos, damos-lhe acesso ao seu próprio painel de administração IPTV. Pode criar subcontas, gerir utilizadores e emitir linhas de teste gratuitas a qualquer momento.',
  },
  nl: {
    badge: 'Reseller-programma',
    title: 'Reseller Credit-pakketten',
    subtitle: 'Start je eigen IPTV-bedrijf. Elke credit activeert één sub-account lijn — hoe meer credits je koopt, hoe lager je kosten per lijn.',
    features: ['Alle kanalen & VOD inbegrepen', 'Eigen beheerpaneel', 'Bulk aanmaken van sub-accounts', 'Persoonlijke accountmanager'],
    order: 'Reseller-credits bestellen',
    telegram: 'Reseller-paneel aanvragen',
    mostPopular: 'Meest populair',
    note: 'Nodig meer dan 360 credits? Neem contact op voor groothandelsprijzen en white-label paneelopties.',
    faqQ: 'Hoe werkt het IPTV Reseller-programma?',
    faqA: 'Na aankoop van een creditpakket geven we je toegang tot je eigen IPTV-beheerpaneel. Je kunt sub-accounts aanmaken, gebruikers beheren en op elk moment gratis proeflijnen uitgeven.',
  },
  pl: {
    badge: 'Program Partnerski',
    title: 'Pakiety Kredytów dla Resellerów',
    subtitle: 'Rozpocznij własny biznes IPTV. Każdy kredyt aktywuje jedną linię subkonta — im więcej kredytów kupisz, tym niższy koszt za linię.',
    features: ['Wszystkie kanały i VOD w zestawie', 'Dedykowany panel administracyjny', 'Masowe tworzenie subkont', 'Dedykowany opiekun konta'],
    order: 'Zamów Kredyty Resellera',
    telegram: 'Poproś o Panel Resellera',
    mostPopular: 'Najpopularniejszy',
    note: 'Potrzebujesz więcej niż 360 kredytów? Skontaktuj się z nami w sprawie cen hurtowych i opcji panelu white-label.',
    faqQ: 'Jak działa Program Resellerski IPTV?',
    faqA: 'Po zakupie pakietu kredytów zapewnimy Ci dostęp do własnego panelu administracyjnego IPTV. Możesz tworzyć subkonta, zarządzać użytkownikami i w każdej chwili wydawać darmowe linie testowe.',
  },
  ro: {
    badge: 'Program de Revânzare',
    title: 'Pachete de Credite pentru Reselleri',
    subtitle: 'Începe-ți propria afacere IPTV. Fiecare credit activează o linie de subcont — cu cât cumperi mai multe credite, cu atât costul per linie este mai mic.',
    features: ['Toate canalele și VOD incluse', 'Panou de administrare dedicat', 'Creare în masă de subconturi', 'Manager de cont dedicat'],
    order: 'Comandă Credite Reseller',
    telegram: 'Solicită Panoul de Reseller',
    mostPopular: 'Cel mai popular',
    note: 'Ai nevoie de un volum peste 360 de credite? Contactează-ne pentru prețuri en-gros și opțiuni de panou white-label.',
    faqQ: 'Cum funcționează Programul de Reselleri IPTV?',
    faqA: 'După achiziționarea unui pachet de credite, îți oferim acces la propriul panou de administrare IPTV. Poți crea subconturi, gestiona utilizatori și emite linii de probă gratuite oricând.',
  },
  el: {
    badge: 'Πρόγραμμα Μεταπωλητών',
    title: 'Πακέτα Πιστώσεων Μεταπωλητή',
    subtitle: 'Ξεκινήστε τη δική σας επιχείρηση IPTV. Κάθε πίστωση ενεργοποιεί μία γραμμή υπο-λογαριασμού — όσο περισσότερες πιστώσεις αγοράζετε, τόσο χαμηλότερο το κόστος ανά γραμμή.',
    features: ['Όλα τα κανάλια & VOD περιλαμβάνονται', 'Αποκλειστικός πίνακας διαχείρισης', 'Μαζική δημιουργία υπο-λογαριασμών', 'Αποκλειστικός διαχειριστής λογαριασμού'],
    order: 'Παραγγελία Πιστώσεων Μεταπωλητή',
    telegram: 'Αίτημα για Πίνακα Μεταπωλητή',
    mostPopular: 'Πιο δημοφιλές',
    note: 'Χρειάζεστε όγκο άνω των 360 πιστώσεων; Επικοινωνήστε μαζί μας για χονδρικές τιμές και επιλογές πίνακα white-label.',
    faqQ: 'Πώς λειτουργεί το Πρόγραμμα Μεταπωλητών IPTV;',
    faqA: 'Μετά την αγορά ενός πακέτου πιστώσεων, σας παρέχουμε πρ��σβαση στον δικό σας πίνακα διαχείρισης IPTV. Μπορείτε να δημιουργείτε υπο-λογαριασμούς, να διαχειρίζεστε χρήστες και να εκδίδετε δωρεάν δοκιμαστικές γραμμές οποτεδήποτε.',
  },
  tr: {
    badge: 'Bayi Programı',
    title: 'Bayi Kredi Paketleri',
    subtitle: 'Kendi IPTV işinizi kurun. Her kredi bir alt hesap hattı açar — ne kadar çok kredi alırsanız, hat başına maliyetiniz o kadar düşer.',
    features: ['Tüm kanallar ve VOD dahil', 'Özel yönetim paneli', 'Toplu alt hesap oluşturma', 'Özel hesap yöneticisi'],
    order: 'Bayi Kredisi Sipariş Et',
    telegram: 'Bayi Paneli Talep Et',
    mostPopular: 'En popüler',
    note: '360 kredinin üzerinde özel hacme mi ihtiyacınız var? Toptan fiyatlar ve beyaz etiket panel seçenekleri için bize ulaşın.',
    faqQ: 'IPTV Bayi Programı nasıl çalışır?',
    faqA: 'Bir kredi paketi satın aldıktan sonra, size kendi özel IPTV Yönetim Panelinize erişim sağlarız. Alt hesaplar oluşturabilir, kullanıcıları yönetebilir ve istediğiniz zaman ücretsiz deneme hatları verebilirsiniz.',
  },
  ar: {
    badge: 'برنامج الوكلاء',
    title: 'باقات أرصدة الوكلاء',
    subtitle: 'ابدأ عملك الخاص في IPTV. كل رصيد يفعّل خط حساب فرعي واحد — كلما اشتريت أرصدة أكثر، انخفضت تكلفة الخط.',
    features: ['جميع القنوات و VOD مشمولة', 'لوحة تحكم مخصصة', 'إنشاء حسابات فرعية بالجملة', 'مدير حساب مخصص'],
    order: 'اطلب أرصدة الوكلاء',
    telegram: 'اطلب لوحة الوكلاء',
    mostPopular: 'الأكثر شعبية',
    note: 'هل تحتاج إلى كمية تزيد عن 360 رصيدًا؟ تواصل معنا للحصول على أسعار الجملة وخيارات اللوحة ذات العلامة البيضاء.',
    faqQ: 'كيف يعمل برنامج وكلاء IPTV؟',
    faqA: 'بعد شراء باقة أرصدة، سنمنحك حق الوصول إلى لوحة إدارة IPTV الخاصة بك. يمكنك إنشاء حسابات فرعية وإدارة المستخدمين وإصدار خطوط تجريبية مجانية في أي وقت.',
  },
}

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string } | null>(null)

const LANGUAGE_STORAGE_KEY = 'strong8k-language'

function isLanguage(code: string | null): code is Language {
  return !!code && code in translations
}

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  // 1. Explicit URL parameter (?lang=it) — matches the hreflang alternates in app/layout.tsx
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLanguage(fromUrl)) return fromUrl
  // 2. Returning visitor's saved preference
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguage(saved)) return saved
  } catch {}
  // 3. Browser language
  const code = navigator.language.toLowerCase().split('-')[0]
  return isLanguage(code) ? code : 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  useEffect(() => setLanguageState(detectLanguage()), [])
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = LANGUAGE_META[language].rtl ? 'rtl' : 'ltr'
  }, [language])

  // Persist the choice and sync the URL so every language has a shareable,
  // crawlable URL that matches its hreflang alternate.
  const setLanguage = (next: Language) => {
    setLanguageState(next)
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
    } catch {}
    const url = new URL(window.location.href)
    if (next === 'en') url.searchParams.delete('lang')
    else url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }

  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClick(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGUAGE_META[language]

  return (
    <div ref={containerRef} className="relative z-50 text-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language')}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold backdrop-blur-md transition hover:border-white/30 hover:bg-black/55"
      >
        <Globe className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
        <Flag country={current.country} label={current.label} />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('language')}
          className="absolute end-0 mt-2 max-h-80 w-52 overflow-auto rounded-2xl border border-white/10 bg-slate-950/95 p-1.5 shadow-2xl backdrop-blur-xl"
        >
          {(Object.entries(LANGUAGE_META) as [Language, (typeof LANGUAGE_META)[Language]][]).map(([value, meta]) => {
            const active = value === language
            return (
              <li key={value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLanguage(value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-start text-sm transition ${
                    active ? 'bg-blue-500/20 font-semibold text-white' : 'text-blue-100/80 hover:bg-white/10'
                  }`}
                >
                  <Flag country={meta.country} label={meta.label} />
                  <span className="flex-1">{meta.label}</span>
                  {active && <Check className="h-4 w-4 text-blue-300" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export const TELEGRAM_LINK = 'https://t.me/IPTVstrong8k_admin'
export const TELEGRAM_HANDLE = '@IPTVstrong8k_admin'

export type PolicyKey = 'privacy' | 'refund'
export type PolicySection = { heading: string; body: string[] }

export const POLICY_I18N: Record<Language, Record<PolicyKey, { updated: string; sections: PolicySection[] }>> = 
{
  "en": {
    "privacy": {
      "updated": "Last updated: October 2026",
      "sections": [
        {
          "heading": "1. Information We Collect",
          "body": [
            "STRONG 8K IPTV does not require account registration on this website. When you contact us or place an order via WhatsApp or Telegram, we receive only the information you choose to share in that conversation (your messaging handle, device type and country).",
            "This website stores a single language preference in your browser localStorage. It is not transmitted to any server."
          ]
        },
        {
          "heading": "2. How We Use Your Information",
          "body": [
            "We use your contact details solely to activate your subscription, deliver login credentials, provide customer support and — where applicable — process refunds. We do not sell or rent your personal data to third parties."
          ]
        },
        {
          "heading": "3. Third-Party Services",
          "body": [
            "Ordering and support happen on WhatsApp and Telegram, which are governed by their own privacy policies. Payment processing is handled by the payment provider you choose at checkout; we never see or store your full card details."
          ]
        },
        {
          "heading": "4. Your Rights & Contact",
          "body": [
            "You may request access to, correction of, or deletion of your personal data at any time by messaging us on WhatsApp or Telegram (@IPTVstrong8k_admin). We respond to all privacy requests within 72 hours."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Last updated: October 2026",
      "sections": [
        {
          "heading": "1. 7-Day Money-Back Guarantee",
          "body": [
            "Every new subscription is covered by a 7-day money-back guarantee. If the service does not work as described on your device, contact us within 7 days of purchase for a full refund — no questions asked."
          ]
        },
        {
          "heading": "2. How to Request a Refund",
          "body": [
            "Message us on WhatsApp or Telegram (@IPTVstrong8k_admin) with the same account you used to order, include your order date and the email or handle used at checkout. Refunds are issued to the original payment method within 3–5 business days."
          ]
        },
        {
          "heading": "3. Try Before You Buy",
          "body": [
            "We recommend every new customer start with the free 24-hour trial to confirm compatibility with their device and internet connection before purchasing a plan."
          ]
        },
        {
          "heading": "4. Exceptions",
          "body": [
            "Reseller credit packages are refundable only while unused. After the 7-day window, or if the service is confirmed working on your device, refunds are evaluated case by case at our discretion."
          ]
        }
      ]
    }
  },
  "it": {
    "privacy": {
      "updated": "Ultimo aggiornamento: ottobre 2026",
      "sections": [
        {
          "heading": "1. Informazioni che raccogliamo",
          "body": [
            "STRONG 8K IPTV non richiede la registrazione di un account su questo sito. Quando ci contatti o effettui un ordine tramite WhatsApp o Telegram, riceviamo solo le informazioni che scegli di condividere nella conversazione (il tuo contatto, il tipo di dispositivo e il Paese).",
            "Questo sito memorizza unicamente la preferenza di lingua nel localStorage del tuo browser. Non viene trasmessa ad alcun server."
          ]
        },
        {
          "heading": "2. Come utilizziamo le tue informazioni",
          "body": [
            "Utilizziamo i tuoi contatti esclusivamente per attivare l’abbonamento, consegnare le credenziali di accesso, fornire assistenza e — se applicabile — elaborare i rimborsi. Non vendiamo né cediamo i tuoi dati personali a terzi."
          ]
        },
        {
          "heading": "3. Servizi di terze parti",
          "body": [
            "Ordini e assistenza avvengono su WhatsApp e Telegram, regolati dalle rispettive informative sulla privacy. I pagamenti sono gestiti dal provider scelto al checkout; non vediamo né conserviamo mai i dati completi della tua carta."
          ]
        },
        {
          "heading": "4. I tuoi diritti e contatti",
          "body": [
            "Puoi richiedere in qualsiasi momento l’accesso, la rettifica o la cancellazione dei tuoi dati personali scrivendoci su WhatsApp o Telegram (@IPTVstrong8k_admin). Rispondiamo a tutte le richieste entro 72 ore."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Ultimo aggiornamento: ottobre 2026",
      "sections": [
        {
          "heading": "1. Garanzia di rimborso di 7 giorni",
          "body": [
            "Ogni nuovo abbonamento è coperto da una garanzia di rimborso di 7 giorni. Se il servizio non funziona come descritto sul tuo dispositivo, contattaci entro 7 giorni dall’acquisto per un rimborso completo, senza domande."
          ]
        },
        {
          "heading": "2. Come richiedere un rimborso",
          "body": [
            "Scrivici su WhatsApp o Telegram (@IPTVstrong8k_admin) dallo stesso account usato per l’ordine, indicando la data di acquisto e il contatto usato al checkout. I rimborsi vengono emessi sul metodo di pagamento originale entro 3–5 giorni lavorativi."
          ]
        },
        {
          "heading": "3. Prova prima di acquistare",
          "body": [
            "Consigliamo a ogni nuovo cliente di iniziare con la prova gratuita di 24 ore per verificare la compatibilità con il proprio dispositivo e la propria connessione prima dell’acquisto."
          ]
        },
        {
          "heading": "4. Eccezioni",
          "body": [
            "I pacchetti di crediti per rivenditori sono rimborsabili solo se inutilizzati. Dopo la finestra di 7 giorni, o se il servizio risulta funzionante sul tuo dispositivo, i rimborsi vengono valutati caso per caso a nostra discrezione."
          ]
        }
      ]
    }
  },
  "fr": {
    "privacy": {
      "updated": "Dernière mise à jour : octobre 2026",
      "sections": [
        {
          "heading": "1. Informations que nous collectons",
          "body": [
            "STRONG 8K IPTV ne nécessite aucune création de compte sur ce site. Lorsque vous nous contactez ou commandez via WhatsApp ou Telegram, nous ne recevons que les informations que vous choisissez de partager dans la conversation (votre identifiant, le type d’appareil et le pays).",
            "Ce site enregistre uniquement votre préférence de langue dans le localStorage de votre navigateur. Elle n’est transmise à aucun serveur."
          ]
        },
        {
          "heading": "2. Comment nous utilisons vos informations",
          "body": [
            "Nous utilisons vos coordonnées uniquement pour activer votre abonnement, livrer vos identifiants, assurer le support client et — le cas échéant — traiter les remboursements. Nous ne vendons ni ne louons vos données personnelles à des tiers."
          ]
        },
        {
          "heading": "3. Services tiers",
          "body": [
            "Les commandes et le support passent par WhatsApp et Telegram, régis par leurs propres politiques de confidentialité. Le paiement est traité par le prestataire choisi au checkout ; nous ne voyons ni ne stockons jamais vos données bancaires complètes."
          ]
        },
        {
          "heading": "4. Vos droits et contact",
          "body": [
            "Vous pouvez demander à tout moment l’accès, la rectification ou la suppression de vos données personnelles en nous écrivant sur WhatsApp ou Telegram (@IPTVstrong8k_admin). Nous répondons à toute demande sous 72 heures."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Dernière mise à jour : octobre 2026",
      "sections": [
        {
          "heading": "1. Garantie satisfait ou remboursé de 7 jours",
          "body": [
            "Chaque nouvel abonnement est couvert par une garantie de remboursement de 7 jours. Si le service ne fonctionne pas comme décrit sur votre appareil, contactez-nous dans les 7 jours suivant l’achat pour un remboursement intégral, sans justification."
          ]
        },
        {
          "heading": "2. Comment demander un remboursement",
          "body": [
            "Écrivez-nous sur WhatsApp ou Telegram (@IPTVstrong8k_admin) avec le même compte que celui de la commande, en indiquant la date d’achat et le contact utilisé au checkout. Les remboursements sont effectués sur le moyen de paiement d’origine sous 3 à 5 jours ouvrés."
          ]
        },
        {
          "heading": "3. Essayez avant d’acheter",
          "body": [
            "Nous recommandons à chaque nouveau client de commencer par l’essai gratuit de 24 h afin de vérifier la compatibilité avec son appareil et sa connexion avant tout achat."
          ]
        },
        {
          "heading": "4. Exceptions",
          "body": [
            "Les packs de crédits revendeur ne sont remboursables que s’ils sont inutilisés. Passé le délai de 7 jours, ou si le service fonctionne normalement sur votre appareil, les remboursements sont étudiés au cas par cas."
          ]
        }
      ]
    }
  },
  "de": {
    "privacy": {
      "updated": "Zuletzt aktualisiert: Oktober 2026",
      "sections": [
        {
          "heading": "1. Welche Daten wir erfassen",
          "body": [
            "STRONG 8K IPTV erfordert keine Kontoerstellung auf dieser Website. Wenn Sie uns über WhatsApp oder Telegram kontaktieren oder bestellen, erhalten wir nur die Angaben, die Sie in der Konversation freiwillig teilen (Ihr Kontakt, Gerätetyp und Land).",
            "Diese Website speichert lediglich Ihre Sprachpräferenz im localStorage Ihres Browsers. Sie wird an keinen Server übertragen."
          ]
        },
        {
          "heading": "2. Wie wir Ihre Daten verwenden",
          "body": [
            "Wir verwenden Ihre Kontaktdaten ausschließlich zur Aktivierung Ihres Abonnements, zur Zustellung der Zugangsdaten, für den Kundensupport und — falls zutreffend — zur Abwicklung von Rückerstattungen. Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte."
          ]
        },
        {
          "heading": "3. Drittanbieter",
          "body": [
            "Bestellung und Support laufen über WhatsApp und Telegram; es gelten deren eigene Datenschutzrichtlinien. Die Zahlungsabwicklung übernimmt der von Ihnen gewählte Zahlungsanbieter; wir sehen oder speichern niemals Ihre vollständigen Kartendaten."
          ]
        },
        {
          "heading": "4. Ihre Rechte & Kontakt",
          "body": [
            "Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten verlangen — schreiben Sie uns einfach auf WhatsApp oder Telegram (@IPTVstrong8k_admin). Wir beantworten jede Anfrage innerhalb von 72 Stunden."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Zuletzt aktualisiert: Oktober 2026",
      "sections": [
        {
          "heading": "1. 7-Tage-Geld-zurück-Garantie",
          "body": [
            "Jedes neue Abonnement ist durch eine 7-tägige Geld-zurück-Garantie abgedeckt. Wenn der Dienst auf Ihrem Gerät nicht wie beschrieben funktioniert, kontaktieren Sie uns innerhalb von 7 Tagen nach dem Kauf für eine vollständige Rückerstattung — ohne Fragen."
          ]
        },
        {
          "heading": "2. So beantragen Sie eine Rückerstattung",
          "body": [
            "Schreiben Sie uns auf WhatsApp oder Telegram (@IPTVstrong8k_admin) über dasselbe Konto wie bei der Bestellung und nennen Sie Kaufdatum sowie den beim Checkout verwendeten Kontakt. Rückerstattungen erfolgen auf die ursprüngliche Zahlungsmethode innerhalb von 3–5 Werktagen."
          ]
        },
        {
          "heading": "3. Erst testen, dann kaufen",
          "body": [
            "Wir empfehlen jedem Neukunden, mit dem kostenlosen 24-Stunden-Test zu beginnen, um die Kompatibilität mit Gerät und Internetverbindung vor dem Kauf zu prüfen."
          ]
        },
        {
          "heading": "4. Ausnahmen",
          "body": [
            "Reseller-Guthabenpakete sind nur im ungenutzten Zustand erstattungsfähig. Nach Ablauf der 7-Tage-Frist — oder wenn der Dienst auf Ihrem Gerät nachweislich funktioniert — entscheiden wir über Rückerstattungen im Einzelfall."
          ]
        }
      ]
    }
  },
  "es": {
    "privacy": {
      "updated": "Última actualización: octubre de 2026",
      "sections": [
        {
          "heading": "1. Información que recopilamos",
          "body": [
            "STRONG 8K IPTV no requiere registro de cuenta en este sitio web. Cuando nos contactas o realizas un pedido por WhatsApp o Telegram, solo recibimos la información que decides compartir en la conversación (tu contacto, tipo de dispositivo y país).",
            "Este sitio solo almacena tu preferencia de idioma en el localStorage de tu navegador. No se transmite a ningún servidor."
          ]
        },
        {
          "heading": "2. Cómo usamos tu información",
          "body": [
            "Usamos tus datos de contacto únicamente para activar tu suscripción, entregar tus credenciales, ofrecer soporte y — cuando corresponda — procesar reembolsos. No vendemos ni alquilamos tus datos personales a terceros."
          ]
        },
        {
          "heading": "3. Servicios de terceros",
          "body": [
            "Los pedidos y el soporte se realizan en WhatsApp y Telegram, regidos por sus propias políticas de privacidad. El pago lo procesa el proveedor que elijas al finalizar la compra; nunca vemos ni almacenamos los datos completos de tu tarjeta."
          ]
        },
        {
          "heading": "4. Tus derechos y contacto",
          "body": [
            "Puedes solicitar acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiéndonos por WhatsApp o Telegram (@IPTVstrong8k_admin). Respondemos a todas las solicitudes en un plazo de 72 horas."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Última actualización: octubre de 2026",
      "sections": [
        {
          "heading": "1. Garantía de devolución de 7 días",
          "body": [
            "Cada suscripción nueva está cubierta por una garantía de devolución de 7 días. Si el servicio no funciona como se describe en tu dispositivo, contáctanos dentro de los 7 días posteriores a la compra para obtener un reembolso completo, sin preguntas."
          ]
        },
        {
          "heading": "2. Cómo solicitar un reembolso",
          "body": [
            "Escríbenos por WhatsApp o Telegram (@IPTVstrong8k_admin) desde la misma cuenta con la que pediste, indicando la fecha de compra y el contacto usado en el pago. Los reembolsos se emiten al método de pago original en 3–5 días hábiles."
          ]
        },
        {
          "heading": "3. Prueba antes de comprar",
          "body": [
            "Recomendamos a cada nuevo cliente comenzar con la prueba gratuita de 24 horas para confirmar la compatibilidad con su dispositivo y conexión antes de comprar un plan."
          ]
        },
        {
          "heading": "4. Excepciones",
          "body": [
            "Los paquetes de créditos para revendedores solo son reembolsables si no se han usado. Pasados los 7 días, o si el servicio funciona correctamente en tu dispositivo, los reembolsos se evalúan caso por caso a nuestra discreción."
          ]
        }
      ]
    }
  },
  "pt": {
    "privacy": {
      "updated": "Última atualização: outubro de 2026",
      "sections": [
        {
          "heading": "1. Informações que recolhemos",
          "body": [
            "A STRONG 8K IPTV não exige criação de conta neste site. Quando nos contacta ou encomenda via WhatsApp ou Telegram, recebemos apenas as informações que opta por partilhar na conversa (o seu contacto, tipo de dispositivo e país).",
            "Este site guarda apenas a sua preferência de idioma no localStorage do navegador. Não é transmitida a nenhum servidor."
          ]
        },
        {
          "heading": "2. Como usamos as suas informações",
          "body": [
            "Usamos os seus dados de contacto apenas para ativar a subscrição, entregar as credenciais, prestar suporte e — quando aplicável — processar reembolsos. Não vendemos nem alugamos os seus dados pessoais a terceiros."
          ]
        },
        {
          "heading": "3. Serviços de terceiros",
          "body": [
            "Encomendas e suporte acontecem no WhatsApp e no Telegram, regidos pelas respetivas políticas de privacidade. O pagamento é processado pelo fornecedor escolhido no checkout; nunca vemos nem guardamos os dados completos do seu cartão."
          ]
        },
        {
          "heading": "4. Os seus direitos e contacto",
          "body": [
            "Pode pedir acesso, retificação ou eliminação dos seus dados pessoais a qualquer momento, escrevendo-nos no WhatsApp ou Telegram (@IPTVstrong8k_admin). Respondemos a todos os pedidos no prazo de 72 horas."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Última atualização: outubro de 2026",
      "sections": [
        {
          "heading": "1. Garantia de reembolso de 7 dias",
          "body": [
            "Cada nova subscrição está coberta por uma garantia de reembolso de 7 dias. Se o serviço não funcionar conforme descrito no seu dispositivo, contacte-nos dentro de 7 dias após a compra para um reembolso total, sem perguntas."
          ]
        },
        {
          "heading": "2. Como pedir um reembolso",
          "body": [
            "Escreva-nos no WhatsApp ou Telegram (@IPTVstrong8k_admin) a partir da mesma conta usada na encomenda, indicando a data da compra e o contacto usado no checkout. Os reembolsos são emitidos para o método de pagamento original em 3–5 dias úteis."
          ]
        },
        {
          "heading": "3. Experimente antes de comprar",
          "body": [
            "Recomendamos que cada novo cliente comece com o teste gratuito de 24 horas para confirmar a compatibilidade com o seu dispositivo e ligação à internet antes de comprar um plano."
          ]
        },
        {
          "heading": "4. Exceções",
          "body": [
            "Os pacotes de créditos de revendedor só são reembolsáveis se não utilizados. Após o prazo de 7 dias, ou se o serviço estiver confirmado como funcional no seu dispositivo, os reembolsos são avaliados caso a caso, ao nosso critério."
          ]
        }
      ]
    }
  },
  "nl": {
    "privacy": {
      "updated": "Laatst bijgewerkt: oktober 2026",
      "sections": [
        {
          "heading": "1. Gegevens die wij verzamelen",
          "body": [
            "STRONG 8K IPTV vereist geen accountregistratie op deze website. Wanneer je contact met ons opneemt of bestelt via WhatsApp of Telegram, ontvangen wij alleen de gegevens die je in het gesprek zelf deelt (je contactgegevens, apparaattype en land).",
            "Deze website slaat alleen je taalvoorkeur op in de localStorage van je browser. Deze wordt naar geen enkele server verzonden."
          ]
        },
        {
          "heading": "2. Hoe wij je gegevens gebruiken",
          "body": [
            "Wij gebruiken je contactgegevens uitsluitend om je abonnement te activeren, inloggegevens te leveren, klantenservice te bieden en — waar van toepassing — terugbetalingen te verwerken. Wij verkopen of verhuren je persoonsgegevens nooit aan derden."
          ]
        },
        {
          "heading": "3. Diensten van derden",
          "body": [
            "Bestellen en support verlopen via WhatsApp en Telegram, die hun eigen privacybeleid hanteren. Betalingen worden verwerkt door de betaalprovider die je bij het afrekenen kiest; wij zien of bewaren nooit je volledige kaartgegevens."
          ]
        },
        {
          "heading": "4. Jouw rechten & contact",
          "body": [
            "Je kunt te allen tijde inzage, correctie of verwijdering van je persoonsgegevens aanvragen via WhatsApp of Telegram (@IPTVstrong8k_admin). Wij beantwoorden elk privacyverzoek binnen 72 uur."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Laatst bijgewerkt: oktober 2026",
      "sections": [
        {
          "heading": "1. 7 dagen geld-terug-garantie",
          "body": [
            "Elk nieuw abonnement valt onder een geld-terug-garantie van 7 dagen. Werkt de dienst niet zoals beschreven op jouw apparaat, neem dan binnen 7 dagen na aankoop contact op voor een volledige terugbetaling — zonder vragen."
          ]
        },
        {
          "heading": "2. Zo vraag je een terugbetaling aan",
          "body": [
            "Stuur ons een bericht via WhatsApp of Telegram (@IPTVstrong8k_admin) vanaf hetzelfde account als bij je bestelling, met de besteldatum en het contact dat je bij het afrekenen gebruikte. Terugbetalingen gaan naar de oorspronkelijke betaalmethode binnen 3–5 werkdagen."
          ]
        },
        {
          "heading": "3. Probeer eerst, koop dan",
          "body": [
            "Wij raden elke nieuwe klant aan te beginnen met de gratis proefperiode van 24 uur om de compatibiliteit met apparaat en internetverbinding te testen voordat je een pakket koopt."
          ]
        },
        {
          "heading": "4. Uitzonderingen",
          "body": [
            "Reseller-creditpakketten zijn alleen terugbetaalbaar zolang ze ongebruikt zijn. Na de termijn van 7 dagen, of als de dienst op jouw apparaat naar behoren werkt, beoordelen wij terugbetalingen per geval."
          ]
        }
      ]
    }
  },
  "pl": {
    "privacy": {
      "updated": "Ostatnia aktualizacja: październik 2026",
      "sections": [
        {
          "heading": "1. Jakie dane zbieramy",
          "body": [
            "STRONG 8K IPTV nie wymaga zakładania konta na tej stronie. Gdy kontaktujesz się z nami lub składasz zamówienie przez WhatsApp lub Telegram, otrzymujemy tylko informacje, które sam podasz w rozmowie (kontakt, typ urządzenia i kraj).",
            "Ta strona zapisuje jedynie preferencję językową w localStorage Twojej przeglądarki. Nie jest ona przesyłana na żaden serwer."
          ]
        },
        {
          "heading": "2. Jak wykorzystujemy Twoje dane",
          "body": [
            "Używamy danych kontaktowych wyłącznie do aktywacji subskrypcji, dostarczenia danych logowania, obsługi klienta oraz — w stosownych przypadkach — realizacji zwrotów. Nie sprzedajemy ani nie wynajmujemy danych osobowych osobom trzecim."
          ]
        },
        {
          "heading": "3. Usługi stron trzecich",
          "body": [
            "Zamówienia i pomoc odbywają się przez WhatsApp i Telegram, które podlegają własnym politykom prywatności. Płatności obsługuje wybrany operator; nigdy nie widzimy ani nie przechowujemy pełnych danych Twojej karty."
          ]
        },
        {
          "heading": "4. Twoje prawa i kontakt",
          "body": [
            "W każdej chwili możesz poprosić o dostęp, poprawienie lub usunięcie swoich danych osobowych, pisząc do nas na WhatsApp lub Telegram (@IPTVstrong8k_admin). Odpowiadamy na wszystkie prośby w ciągu 72 godzin."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Ostatnia aktualizacja: październik 2026",
      "sections": [
        {
          "heading": "1. 7-dniowa gwarancja zwrotu pieniędzy",
          "body": [
            "Każda nowa subskrypcja objęta jest 7-dniową gwarancją zwrotu pieniędzy. Jeśli usługa nie działa zgodnie z opisem na Twoim urządzeniu, skontaktuj się z nami w ciągu 7 dni od zakupu, aby otrzymać pełny zwrot — bez pytań."
          ]
        },
        {
          "heading": "2. Jak złożyć wniosek o zwrot",
          "body": [
            "Napisz do nas na WhatsApp lub Telegram (@IPTVstrong8k_admin) z tego samego konta, z którego zamawiałeś, podając datę zakupu i kontakt użyty przy płatności. Zwroty realizujemy na pierwotną metodę płatności w ciągu 3–5 dni roboczych."
          ]
        },
        {
          "heading": "3. Najpierw przetestuj",
          "body": [
            "Zalecamy każdemu nowemu klientowi rozpoczęcie od darmowego 24-godzinnego testu, aby przed zakupem sprawdzić kompatybilność z urządzeniem i łączem internetowym."
          ]
        },
        {
          "heading": "4. Wyjątki",
          "body": [
            "Pakiety kredytów dla resellerów podlegają zwrotowi tylko, jeśli nie zostały użyte. Po upływie 7 dni — lub gdy usługa działa poprawnie na Twoim urządzeniu — zwroty rozpatrujemy indywidualnie."
          ]
        }
      ]
    }
  },
  "ro": {
    "privacy": {
      "updated": "Ultima actualizare: octombrie 2026",
      "sections": [
        {
          "heading": "1. Informațiile pe care le colectăm",
          "body": [
            "STRONG 8K IPTV nu necesită crearea unui cont pe acest site. Când ne contactezi sau comanzi prin WhatsApp sau Telegram, primim doar informațiile pe care alegi să le împărtășești în conversație (contactul tău, tipul dispozitivului și țara).",
            "Acest site stochează doar preferința de limbă în localStorage-ul browserului tău. Aceasta nu este transmisă niciunui server."
          ]
        },
        {
          "heading": "2. Cum folosim informațiile tale",
          "body": [
            "Folosim datele tale de contact exclusiv pentru activarea abonamentului, livrarea credențialelor, asistența clienți și — unde este cazul — procesarea rambursărilor. Nu vindem și nu închiriem datele tale personale către terți."
          ]
        },
        {
          "heading": "3. Servicii terțe",
          "body": [
            "Comenzile și asistența au loc pe WhatsApp și Telegram, guvernate de propriile politici de confidențialitate. Plata este procesată de furnizorul ales la checkout; nu vedem și nu stocăm niciodată datele complete ale cardului tău."
          ]
        },
        {
          "heading": "4. Drepturile tale și contact",
          "body": [
            "Poți solicita oricând accesul, rectificarea sau ștergerea datelor tale personale scriindu-ne pe WhatsApp sau Telegram (@IPTVstrong8k_admin). Răspundem tuturor solicitărilor în maximum 72 de ore."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Ultima actualizare: octombrie 2026",
      "sections": [
        {
          "heading": "1. Garanție de rambursare de 7 zile",
          "body": [
            "Fiecare abonament nou este acoperit de o garanție de rambursare de 7 zile. Dacă serviciul nu funcționează conform descrierii pe dispozitivul tău, contactează-ne în termen de 7 zile de la achiziție pentru o rambursare integrală, fără întrebări."
          ]
        },
        {
          "heading": "2. Cum soliciți o rambursare",
          "body": [
            "Scrie-ne pe WhatsApp sau Telegram (@IPTVstrong8k_admin) de pe același cont folosit la comandă, indicând data achiziției și contactul folosit la plată. Rambursările se emit către metoda de plată originală în 3–5 zile lucrătoare."
          ]
        },
        {
          "heading": "3. Testează înainte de a cumpăra",
          "body": [
            "Recomandăm fiecărui client nou să înceapă cu proba gratuită de 24 de ore pentru a verifica compatibilitatea cu dispozitivul și conexiunea la internet înainte de achiziție."
          ]
        },
        {
          "heading": "4. Excepții",
          "body": [
            "Pachetele de credite pentru reselleri sunt rambursabile doar dacă nu au fost utilizate. După fereastra de 7 zile, sau dacă serviciul funcționează corect pe dispozitivul tău, rambursările sunt evaluate individual, la discreția noastră."
          ]
        }
      ]
    }
  },
  "el": {
    "privacy": {
      "updated": "Τελευταία ενημέρωση: Οκτώβριος 2026",
      "sections": [
        {
          "heading": "1. Πληροφορίες που συλλέγουμε",
          "body": [
            "Το STRONG 8K IPTV δεν απαιτεί δημιουργία λογαριασμού σε αυτόν τον ιστότοπο. Όταν επικοινωνείτε ή παραγγέλνετε μέσω WhatsApp ή Telegram, λαμβάνουμε μόνο τις πληροφορίες που εσείς επιλέγετε να μοιραστείτε στη συνομιλία (το στοιχείο επικοινωνίας, τον τύπο συσκευής και τη χώρα).",
            "Αυτός ο ιστότοπος αποθηκεύει μόνο την προτίμηση γλώσσας στο localStorage του προγράμματος περιήγησής σας. Δεν μεταδίδεται σε κανέναν διακομιστή."
          ]
        },
        {
          "heading": "2. Πώς χρησιμοποιούμε τις πληροφορίες σας",
          "body": [
            "Χρησιμοποιούμε τα στοιχεία επικοινωνίας σας αποκλειστικά για την ενεργοποίηση της συνδρομής, την παράδοση των διαπιστευτηρίων, την εξυπηρέτηση πελατών και — όπου ισχύει — την επεξεργασία επιστροφών χρημάτων. Δεν πουλάμε ούτε ενοικιάζουμε τα προσωπικά σας δεδομένα σε τρίτους."
          ]
        },
        {
          "heading": "3. Υπηρεσίες τρίτων",
          "body": [
            "Παραγγελίες και υποστήριξη πραγματοποιούνται σε WhatsApp και Telegram, τα οποία διέπονται από τις δικές τους πολιτικές απορρήτου. Η πληρωμή διεκπεραιώνεται από τον πάροχο που επιλέγετε στο ταμείο· δεν βλέπουμε ούτε αποθηκεύουμε ποτέ τα πλήρη στοιχεία της κάρτας σας."
          ]
        },
        {
          "heading": "4. Τα δικαιώματά σας & επικοινωνία",
          "body": [
            "Μπορείτε να ζητήσετε ανά πάσα στιγμή πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας δεδομένων γράφοντάς μας στο WhatsApp ή Telegram (@IPTVstrong8k_admin). Απαντάμε σε κάθε αίτημα εντός 72 ωρών."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Τελευταία ενημέρωση: Οκτώβριος 2026",
      "sections": [
        {
          "heading": "1. Εγγύηση επιστροφής χρημάτων 7 ημερών",
          "body": [
            "Κάθε νέα συνδρομή καλύπτεται από εγγύηση επιστροφής χρημάτων 7 ημερών. Εάν η υπηρεσία δεν λειτουργεί όπως περιγράφεται στη συσκευή σας, επικοινωνήστε μαζί μας εντός 7 ημερών από την αγορά για πλήρη επιστροφή χρημάτων, χωρίς ερωτήσεις."
          ]
        },
        {
          "heading": "2. Πώς να ζητήσετε επιστροφή χρημάτων",
          "body": [
            "Γράψτε μας στο WhatsApp ή Telegram (@IPTVstrong8k_admin) από τον ίδιο λογαριασμό με την παραγγελία, αναφέροντας την ημερομηνία αγοράς και το στοιχείο επικοινωνίας του ταμείου. Οι επιστροφές εκδίδονται στην αρχική μέθοδο πληρωμής εντός 3–5 εργάσιμων ημερών."
          ]
        },
        {
          "heading": "3. Δοκιμάστε πριν αγοράσετε",
          "body": [
            "Συνιστούμε σε κάθε νέο πελάτη να ξεκινήσει με τη δωρεάν δοκιμή 24 ωρών για να επιβεβαιώσει τη συμβατότητα με τη συσκευή και τη σύνδεσή του πριν την αγορά πακέτου."
          ]
        },
        {
          "heading": "4. Εξαιρέσεις",
          "body": [
            "Τα πακέτα πιστώσεων μεταπωλητών επιστρέφονται μόνο εφόσον δεν έχουν χρησιμοποιηθεί. Μετά το παράθυρο των 7 ημερών, ή εάν η υπηρεσία λειτουργεί κανονικά στη συσκευή σας, οι επιστροφές αξιολογούνται κατά περίπτωση κατά την κρίση μας."
          ]
        }
      ]
    }
  },
  "tr": {
    "privacy": {
      "updated": "Son güncelleme: Ekim 2026",
      "sections": [
        {
          "heading": "1. Topladığımız Bilgiler",
          "body": [
            "STRONG 8K IPTV bu web sitesinde hesap oluşturulmasını gerektirmez. WhatsApp veya Telegram üzerinden bize ulaştığınızda ya da sipariş verdiğinizde, yalnızca görüşmede paylaşmayı seçtiğiniz bilgileri alırız (iletişim bilginiz, cihaz türü ve ülke).",
            "Bu web sitesi yalnızca dil tercihinizi tarayıcınızın localStorage alanında saklar. Bu bilgi hiçbir sunucuya iletilmez."
          ]
        },
        {
          "heading": "2. Bilgilerinizi Nasıl Kullanırız",
          "body": [
            "İletişim bilgilerinizi yalnızca aboneliğinizi etkinleştirmek, giriş bilgilerinizi iletmek, müşteri desteği sağlamak ve — gerektiğinde — iadeleri işlemek için kullanırız. Kişisel verilerinizi üçüncü taraflara satmayız veya kiralamayız."
          ]
        },
        {
          "heading": "3. Üçüncü Taraf Hizmetler",
          "body": [
            "Sipariş ve destek, kendi gizlilik politikalarına tabi olan WhatsApp ve Telegram üzerinden yürütülür. Ödeme, ödeme sırasında seçtiğiniz sağlayıcı tarafından işlenir; kart bilgilerinizin tamamını asla görmeyiz veya saklamayız."
          ]
        },
        {
          "heading": "4. Haklarınız ve İletişim",
          "body": [
            "WhatsApp veya Telegram (@IPTVstrong8k_admin) üzerinden bize yazarak kişisel verilerinize erişim, düzeltme veya silme talebinde her zaman bulunabilirsiniz. Tüm gizlilik taleplerine 72 saat içinde yanıt veririz."
          ]
        }
      ]
    },
    "refund": {
      "updated": "Son güncelleme: Ekim 2026",
      "sections": [
        {
          "heading": "1. 7 Gün Para İade Garantisi",
          "body": [
            "Her yeni abonelik 7 günlük para iade garantisi kapsamındadır. Hizmet cihazınızda açıklandığı gibi çalışmazsa, satın alma tarihinden itibaren 7 gün içinde bize ulaşın; koşulsuz tam iade yapılır."
          ]
        },
        {
          "heading": "2. İade Nasıl Talep Edilir",
          "body": [
            "Sipariş verdiğiniz hesapla WhatsApp veya Telegram (@IPTVstrong8k_admin) üzerinden bize yazın; sipariş tarihini ve ödemede kullandığınız iletişim bilgisini belirtin. İadeler 3–5 iş günü içinde orijinal ödeme yöntemine yapılır."
          ]
        },
        {
          "heading": "3. Önce Deneyin",
          "body": [
            "Her yeni müşterinin, bir plan satın almadan önce cihazı ve internet bağlantısıyla uyumluluğu doğrulamak için ücretsiz 24 saatlik denemeyle başlamasını öneririz."
          ]
        },
        {
          "heading": "4. İstisnalar",
          "body": [
            "Bayi kredi paketleri yalnızca kullanılmamışken iade edilebilir. 7 günlük süre dolduktan sonra veya hizmetin cihazınızda çalıştığı doğrulanırsa, iadeler kendi takdirimize bağlı olarak durum bazında değerlendirilir."
          ]
        }
      ]
    }
  },
  "ar": {
    "privacy": {
      "updated": "آخر تحديث: أكتوبر 2026",
      "sections": [
        {
          "heading": "1. المعلومات التي نجمعها",
          "body": [
            "لا يتطلب STRONG 8K IPTV إنشاء حساب على هذا الموقع. عندما تتواصل معنا أو تطلب عبر واتساب أو تيليجرام، نتلقى فقط المعلومات التي تختار مشاركتها في المحادثة (وسيلة التواصل، نوع الجهاز، والبلد).",
            "يخزّن هذا الموقع تفضيل اللغة فقط في localStorage الخاص بمتصفحك. ولا يتم إرساله إلى أي خادم."
          ]
        },
        {
          "heading": "2. كيف نستخدم معلوماتك",
          "body": [
            "نستخدم بيانات التواصل الخاصة بك فقط لتفعيل اشتراكك وتسليم بيانات الدخول وتقديم دعم العملاء و— عند الاقتضاء — معالجة المبالغ المستردة. لا نبيع بياناتك الشخصية ولا نؤجرها لأي طرف ثالث."
          ]
        },
        {
          "heading": "3. خدمات الطرف الثالث",
          "body": [
            "تتم الطلبات والدعم عبر واتساب وتيليجرام، وهما خاضعان لسياسات الخصوصية الخاصة بهما. تتم معالجة الدفع بواسطة مزوّد الدفع الذي تختاره عند إتمام الشراء؛ ولا نطّلع إطلاقًا على بيانات بطاقتك الكاملة ولا نخزّنها."
          ]
        },
        {
          "heading": "4. حقوقك والتواصل",
          "body": [
            "يمكنك في أي وقت طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها بمراسلتنا عبر واتساب أو تيليجرام (@IPTVstrong8k_admin). نرد على جميع طلبات الخصوصية خلال 72 ساعة."
          ]
        }
      ]
    },
    "refund": {
      "updated": "آخر تحديث: أكتوبر 2026",
      "sections": [
        {
          "heading": "1. ضمان استرداد الأموال لمدة 7 أيام",
          "body": [
            "كل اشتراك جديد مشمول بضمان استرداد الأموال لمدة 7 أيام. إذا لم تعمل الخدمة كما هو موضح على جهازك، تواصل معنا خلال 7 أيام من الشراء لاسترداد كامل المبلغ دون أي أسئلة."
          ]
        },
        {
          "heading": "2. كيفية طلب الاسترداد",
          "body": [
            "راسلنا عبر واتساب أو تيليجرام (@IPTVstrong8k_admin) من نفس الحساب الذي استخدمته للطلب، مع ذكر تاريخ الشراء ووسيلة التواصل المستخدمة عند الدفع. تُصدر المبالغ المستردة إلى وسيلة الدفع الأصلية خلال 3–5 أيام عمل."
          ]
        },
        {
          "heading": "3. جرّب قبل الشراء",
          "body": [
            "نوصي كل عميل جديد بالبدء بالتجربة المجانية لمدة 24 ساعة للتأكد من توافق الخدمة مع جهازه واتصاله بالإنترنت قبل شراء أي باقة."
          ]
        },
        {
          "heading": "4. الاستثناءات",
          "body": [
            "باقات أرصدة الوكلاء قابلة للاسترداد فقط ما دامت غير مستخدمة. بعد انقضاء فترة الـ 7 أيام، أو إذا تأكد عمل الخدمة على جهازك، تُقيَّم طلبات الاسترداد كل حالة على حدة وفق تقديرنا."
          ]
        }
      ]
    }
  }
}
