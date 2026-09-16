/* Case-study translations. Merged into window.I18N (defined in translations.js,
   which must load first). Kept in a separate file so homepage and case-study
   dictionaries can be edited independently without one giant file. */
(function () {
  "use strict";
  var CS = {

    /* ===================== THE JERSEY GENERATOR ===================== */
    "jg.nav.overview": { en: "Overview", fr: "Aperçu" },
    "jg.nav.challenge": { en: "Challenge", fr: "Défi" },
    "jg.nav.role": { en: "Role", fr: "Rôle" },
    "jg.nav.product": { en: "Product Thinking", fr: "Réflexion produit" },
    "jg.nav.ux": { en: "UX", fr: "UX" },
    "jg.nav.technical": { en: "Technical", fr: "Technique" },
    "jg.nav.testing": { en: "Testing", fr: "Tests" },
    "jg.nav.outcome": { en: "Outcome", fr: "Résultat" },

    "jg.tag": { en: "Flagship Case Study — E-commerce Product Systems", fr: "Étude de cas principale — Systèmes produit e-commerce" },
    "jg.hero.title": { en: "Configuring a custom product, at scale, in two languages.", fr: "Configurer un produit personnalisé, à grande échelle, en deux langues." },
    "jg.hero.sub": {
      en: "The Jersey Generator is a live WooCommerce platform where individuals and teams design and order custom hockey, baseball, basketball, soccer, lacrosse, volleyball, and football uniforms — with logos, names, numbers, and finish options configured per jersey.",
      fr: "The Jersey Generator est une plateforme WooCommerce active où individus et équipes conçoivent et commandent des chandails personnalisés de hockey, baseball, basketball, soccer, crosse, volleyball et football — avec logos, noms, numéros et options de finition configurés pour chaque chandail."
    },
    "jg.meta.role.label": { en: "Role", fr: "Rôle" },
    "jg.meta.platform.label": { en: "Platform", fr: "Plateforme" },
    "jg.meta.scope.label": { en: "Scope", fr: "Portée" },
    "jg.meta.scope.value": { en: "Product configuration, pricing, localization", fr: "Configuration produit, tarification, localisation" },
    "jg.meta.site.label": { en: "Live site", fr: "Site en ligne" },
    "jg.hero.caption": { en: "Campaign creative built around a completed custom jersey order — one of the marketing assets produced alongside the storefront.", fr: "Création publicitaire bâtie autour d'une commande de chandail personnalisé complétée — l'un des visuels marketing produits en parallèle de la boutique." },

    "jg.challenge.eyebrow": { en: "The Challenge", fr: "Le défi" },
    "jg.challenge.title": { en: "A simple idea, a genuinely complex product.", fr: "Une idée simple, un produit réellement complexe." },
    "jg.challenge.intro": { en: "\"Design your own jersey\" sounds like one decision. In the actual storefront, it's a stack of choices happening at once, and they all affect each other:", fr: "« Conçois ton propre chandail » ressemble à une seule décision. Dans la boutique réelle, c'est un empilement de choix qui se produisent tous en même temps, et qui s'influencent mutuellement :" },
    "jg.challenge.li1": { en: "<strong style=\"color:var(--text-primary);\">Style attributes</strong> — lace color (no lace / black / white) and application method (embroidered vs. sublimated), each of which changes production and price.", fr: "<strong style=\"color:var(--text-primary);\">Attributs de style</strong> — couleur des lacets (aucun / noir / blanc) et méthode d'application (broderie ou sublimation), chacune modifiant la production et le prix." },
    "jg.challenge.li2": { en: "<strong style=\"color:var(--text-primary);\">Per-player detail</strong> — quantity, size, name, number, and captaincy status, all required before checkout.", fr: "<strong style=\"color:var(--text-primary);\">Détails par joueur</strong> — quantité, taille, nom, numéro et statut de capitanat, tous requis avant le paiement." },
    "jg.challenge.li3": { en: "<strong style=\"color:var(--text-primary);\">Tiered pricing</strong> — each jersey is sold as a price range (e.g. <strong>$59.99–$93.98</strong>) rather than a flat price, depending on the variant combination selected.", fr: "<strong style=\"color:var(--text-primary);\">Tarification par palier</strong> — chaque chandail est vendu selon une fourchette de prix (ex. <strong>59,99 $–93,98 $</strong>) plutôt qu'un prix fixe, selon la combinaison de variantes choisie." },
    "jg.challenge.li4": { en: "<strong style=\"color:var(--text-primary);\">Localization</strong> — the storefront runs in English and French (<code>/fr/</code>) with a USD/CAD currency switcher, across dozens of product templates.", fr: "<strong style=\"color:var(--text-primary);\">Localisation</strong> — la boutique fonctionne en anglais et en français (<code>/fr/</code>) avec un sélecteur de devise USD/CAD, sur des dizaines de gabarits de produits." },
    "jg.challenge.li5": { en: "<strong style=\"color:var(--text-primary);\">Volume</strong> — one core configurator has to hold up across seven sports and a large, constantly-refreshed catalog of team templates.", fr: "<strong style=\"color:var(--text-primary);\">Volume</strong> — un seul configurateur central doit tenir le coup à travers sept sports et un vaste catalogue de gabarits d'équipes, constamment renouvelé." },
    "jg.challenge.outro": { en: "None of that is supposed to look like complexity to the person buying a jersey. It's just supposed to feel like picking one.", fr: "Rien de tout ça n'est censé ressembler à de la complexité pour la personne qui achète un chandail. Ça doit simplement donner l'impression d'en choisir un." },
    "jg.challenge.caption": { en: "The storefront is built to handle dozens of team templates across seven sports, each with its own configurable options.", fr: "La boutique est conçue pour gérer des dizaines de gabarits d'équipes à travers sept sports, chacun avec ses propres options configurables." },

    "jg.role.eyebrow": { en: "My Role", fr: "Mon rôle" },
    "jg.role.title": { en: "I sit between what a jersey order needs and what the customer sees.", fr: "Je me situe entre ce qu'exige une commande de chandail et ce que voit le client." },
    "jg.role.intro": { en: "I came in after the storefront was already live, and I upgraded the front-end configurator to the functionality it runs on today. Day to day, that's meant working on:", fr: "Je suis arrivé après la mise en ligne de la boutique, et j'ai fait évoluer le configurateur front-end vers les fonctionnalités qu'il offre aujourd'hui. Au quotidien, cela signifie travailler sur :" },
    "jg.role.b1.label": { en: "Product", fr: "Produit" },
    "jg.role.b1.body": { en: "How variant options, quantity logic, and required fields (size, name, number, captaincy) are structured per product.", fr: "La façon dont les options de variantes, la logique de quantité et les champs obligatoires (taille, nom, numéro, capitanat) sont structurés pour chaque produit." },
    "jg.role.b2.label": { en: "Pricing", fr: "Tarification" },
    "jg.role.b2.body": { en: "How lace, application method, and quantity combine into the price range a customer actually sees.", fr: "La façon dont les lacets, la méthode d'application et la quantité se combinent dans la fourchette de prix que voit réellement le client." },
    "jg.role.b3.label": { en: "Localization", fr: "Localisation" },
    "jg.role.b3.body": { en: "Keeping the EN/FR storefront and currency behavior consistent across product templates.", fr: "Garder la boutique EN/FR et le comportement des devises cohérents à travers les gabarits de produits." },
    "jg.role.b4.label": { en: "Coordination", fr: "Coordination" },
    "jg.role.b4.body": { en: "Working with developers to test the configurator against how WooCommerce actually records the order.", fr: "Travailler avec les développeurs pour tester le configurateur par rapport à la façon dont WooCommerce enregistre réellement la commande." },

    "jg.product.eyebrow": { en: "Product Thinking", fr: "Réflexion produit" },
    "jg.product.title": { en: "Every jersey is priced as a range, not a number.", fr: "Chaque chandail est présenté avec une fourchette de prix, pas un chiffre fixe." },
    "jg.product.quote": { en: "The real price only resolves once someone's actually picked lace, application, and quantity — so I never wanted the storefront pretending otherwise.", fr: "Le vrai prix ne se précise qu'une fois que quelqu'un a réellement choisi les lacets, l'application et la quantité — je ne voulais jamais que la boutique fasse semblant du contraire." },
    "jg.product.body1": { en: "The question I kept coming back to wasn't \"what does a jersey cost,\" it was whether the price on screen actually reflected the combination a customer was building, before they committed to it. Get that wrong and you either surprise someone at checkout or quietly give away margin on options that were priced too low.", fr: "La question à laquelle je revenais sans cesse n'était pas « combien coûte un chandail », mais si le prix affiché reflétait réellement la combinaison que le client était en train de construire, avant qu'il ne s'engage. Se tromper là-dessus, c'est soit surprendre quelqu'un au paiement, soit perdre discrètement de la marge sur des options sous-évaluées." },
    "jg.product.body2": { en: "Quantity, size, name, number, captaincy — I made all five required at the configurator level, not because it's cleaner UX in the abstract, but because a jersey missing any one of them literally can't be produced. Catching that upfront protects both what the customer expects and what production actually gets.", fr: "Quantité, taille, nom, numéro, capitanat — j'ai rendu ces cinq champs obligatoires dès le configurateur, pas parce que c'est plus élégant en théorie, mais parce qu'un chandail auquel il en manque un seul ne peut littéralement pas être produit. Le détecter en amont protège autant les attentes du client que ce que reçoit réellement la production." },
    "jg.product.caption": { en: "Style attributes like lace color and lettering treatment are part of what the configurator has to price and produce correctly.", fr: "Des attributs de style comme la couleur des lacets et le traitement typographique font partie de ce que le configurateur doit tarifer et produire correctement." },

    "jg.ux.eyebrow": { en: "UX", fr: "UX" },
    "jg.ux.title": { en: "Making a seven-field form feel like \"design your jersey.\"", fr: "Faire en sorte qu'un formulaire à sept champs ressemble à « conçois ton chandail »." },
    "jg.ux.b1.label": { en: "Progressive disclosure", fr: "Divulgation progressive" },
    "jg.ux.b1.body": { en: "Style attributes (lace, application) come before player details, so the customer never sees every field at once.", fr: "Les attributs de style (lacets, application) apparaissent avant les détails du joueur, pour que le client ne voie jamais tous les champs à la fois." },
    "jg.ux.b2.label": { en: "Visible price range", fr: "Fourchette de prix visible" },
    "jg.ux.b2.body": { en: "The price range shows up front on every product, before configuration starts — the ceiling and floor are never a surprise.", fr: "La fourchette de prix apparaît dès le départ sur chaque produit, avant même de commencer la configuration — le plancher et le plafond ne sont jamais une surprise." },
    "jg.ux.b3.label": { en: "Persistent design state", fr: "État de conception persistant" },
    "jg.ux.b3.body": { en: "A \"Share Design\" link lets someone send a configured jersey to teammates without making them redo the whole thing.", fr: "Un lien « Partager le design » permet d'envoyer un chandail configuré à des coéquipiers sans qu'ils aient à tout refaire." },
    "jg.ux.caption": { en: "The actual configurator interface — jersey and socks share the same layers-and-color-swatch pattern, so a customer already knows how to use it by the time they get to the second piece.", fr: "L'interface réelle du configurateur — le chandail et les bas partagent le même système de calques et de nuanciers de couleur, si bien que le client sait déjà comment l'utiliser en arrivant à la deuxième pièce." },

    "jg.tech.eyebrow": { en: "Technical Implementation", fr: "Implémentation technique" },
    "jg.tech.title": { en: "What's actually running underneath.", fr: "Ce qui fonctionne réellement en coulisse." },
    "jg.tech.intro": { en: "The storefront runs on <strong style=\"color:var(--text-primary);\">WordPress + WooCommerce</strong>, with a Fancy Product Designer configurator layered on top of WooCommerce's native variation system to handle logo upload, text, and per-jersey customization — this is the tool I upgraded to its current functionality.", fr: "La boutique fonctionne sur <strong style=\"color:var(--text-primary);\">WordPress + WooCommerce</strong>, avec un configurateur Fancy Product Designer superposé au système de variations natif de WooCommerce pour gérer le téléversement de logo, le texte et la personnalisation par chandail — c'est cet outil que j'ai fait évoluer vers ses fonctionnalités actuelles." },
    "jg.tech.li1": { en: "<strong style=\"color:var(--text-primary);\">Variable products</strong> — lace color and application method are modeled as WooCommerce product variations, each with its own price point that rolls up into the displayed price range.", fr: "<strong style=\"color:var(--text-primary);\">Produits variables</strong> — la couleur des lacets et la méthode d'application sont modélisées comme des variations de produit WooCommerce, chacune avec son propre prix, qui se combinent dans la fourchette affichée." },
    "jg.tech.li2": { en: "<strong style=\"color:var(--text-primary);\">Front-end configuration</strong> — quantity, size, name, number, and captaincy are captured as structured order data per jersey, not free text, so it flows cleanly into fulfillment.", fr: "<strong style=\"color:var(--text-primary);\">Configuration front-end</strong> — quantité, taille, nom, numéro et capitanat sont saisis comme données de commande structurées par chandail, et non en texte libre, pour s'intégrer proprement à la production." },
    "jg.tech.li3": { en: "<strong style=\"color:var(--text-primary);\">Localization</strong> — the site serves an English store at the root and a French store at <code>/fr/</code>, consistent with a Polylang-based setup, alongside a USD/CAD currency switcher in the header and footer.", fr: "<strong style=\"color:var(--text-primary);\">Localisation</strong> — le site sert une boutique anglaise à la racine et une boutique française à <code>/fr/</code>, cohérent avec une configuration basée sur Polylang, avec un sélecteur de devise USD/CAD dans l'en-tête et le pied de page." },
    "jg.tech.li4": { en: "<strong style=\"color:var(--text-primary);\">Order data</strong> — because every field is required before checkout, the WooCommerce order record for a jersey line item carries everything production needs, cutting down on back-and-forth after the sale.", fr: "<strong style=\"color:var(--text-primary);\">Données de commande</strong> — comme chaque champ est obligatoire avant le paiement, l'enregistrement de commande WooCommerce pour chaque chandail contient tout ce dont la production a besoin, réduisant les allers-retours après la vente." },
    "jg.tech.outro": { en: "None of that shows up in a screenshot. The configurator only feels simple because the WooCommerce structure underneath it — variations, required meta fields, price rules — was built to match how a jersey actually gets produced, not just how it looks on screen.", fr: "Rien de tout ça n'apparaît dans une capture d'écran. Le configurateur ne paraît simple que parce que la structure WooCommerce en dessous — variations, champs méta obligatoires, règles de prix — a été construite pour correspondre à la façon dont un chandail est réellement produit, pas seulement à son apparence à l'écran." },

    "jg.testing.eyebrow": { en: "Testing & Iteration", fr: "Tests et itération" },
    "jg.testing.title": { en: "Every combination, in both languages, in both currencies.", fr: "Chaque combinaison, dans les deux langues, dans les deux devises." },
    "jg.testing.body": { en: "Price, required fields, and language/currency all interact, so testing a single product actually means testing it across variant combinations, both languages, and both currencies — then checking that what lands in the WooCommerce order matches what the customer configured on screen.", fr: "Le prix, les champs obligatoires et la langue/devise interagissent tous, donc tester un seul produit signifie en réalité le tester à travers les combinaisons de variantes, les deux langues et les deux devises — puis vérifier que ce qui atterrit dans la commande WooCommerce correspond à ce que le client a configuré à l'écran." },

    "jg.outcome.eyebrow": { en: "Final Experience", fr: "Expérience finale" },
    "jg.outcome.title": { en: "It feels simple. The system behind it isn't.", fr: "Ça paraît simple. Le système derrière ne l'est pas." },

    "jg.closing": { en: "This one's still live — the configurator I upgraded is the one people are ordering jerseys through right now, not a snapshot of it.", fr: "Celui-ci est toujours en ligne — le configurateur que j'ai fait évoluer est celui à travers lequel les gens commandent leurs chandails en ce moment même, pas un instantané figé dans le temps." },

    "jg.nav.back": { en: "← Back to", fr: "← Retour vers" },
    "jg.nav.backTitle": { en: "Selected Work", fr: "Projets sélectionnés" },
    "jg.nav.nextLabel": { en: "Next project →", fr: "Projet suivant →" },

    /* ===================== ÆRA SPORTS ===================== */
    "aera.nav.overview": { en: "Overview", fr: "Aperçu" },
    "aera.nav.context": { en: "Context", fr: "Contexte" },
    "aera.nav.role": { en: "Role", fr: "Rôle" },
    "aera.nav.ecommerce": { en: "E-commerce", fr: "Commerce en ligne" },
    "aera.nav.marketplace": { en: "Marketplace", fr: "Marché en ligne" },
    "aera.nav.leadership": { en: "Leadership & Content", fr: "Leadership et contenu" },
    "aera.nav.brandux": { en: "Brand & UX", fr: "Marque et UX" },
    "aera.nav.outcome": { en: "Outcome", fr: "Résultat" },

    "aera.tag": { en: "Flagship Case Study — Premium Consumer E-commerce", fr: "Étude de cas principale — Commerce en ligne grand public" },
    "aera.hero.title": { en: "Turning a lens coating into a reason to buy.", fr: "Transformer un revêtement de lentille en raison d'acheter." },
    "aera.hero.sub": {
      en: "ÆRA Sports sells frameless watersport eyewear on Shopify, built around a small set of named technologies — VisiClear™ Nanotechnology, Chroma+ Lens™, UV 400 — that I have to translate from engineering language into reasons a swimmer, surfer, or paddler actually cares.",
      fr: "ÆRA Sports vend des lunettes de sport nautique sans monture sur Shopify, construites autour d'un petit ensemble de technologies nommées — nanotechnologie VisiClear™, lentille Chroma+™, UV 400 — que je dois traduire du langage technique vers des raisons qui parlent réellement à un nageur, un surfeur ou un pagayeur."
    },
    "aera.meta.role.label": { en: "Role", fr: "Rôle" },
    "aera.meta.platform.label": { en: "Platform", fr: "Plateforme" },
    "aera.meta.scope.label": { en: "Scope", fr: "Portée" },
    "aera.meta.scope.value": { en: "Storefront development, content strategy, team leadership", fr: "Développement de la boutique, stratégie de contenu, leadership d'équipe" },
    "aera.meta.site.label": { en: "Live site", fr: "Site en ligne" },
    "aera.hero.caption": { en: "ÆRA's full frameless eyewear lineup — six colorways sharing one product architecture and one flat price point.", fr: "La gamme complète de lunettes sans monture d'ÆRA — six coloris partageant une même architecture de produit et un prix unique." },

    "aera.context.eyebrow": { en: "Context", fr: "Contexte" },
    "aera.context.title": { en: "One product, sold six different ways.", fr: "Un produit, vendu de six façons différentes." },
    "aera.context.body1": {
      en: "Unlike The Jersey Generator, ÆRA isn't a configuration problem. Every pair is the same product at the same price ($99.97 CAD), just in a different colorway. The challenge here runs almost the opposite direction: how do you keep a simple product interesting across a Shopify storefront, an Instagram feed, and a wall of physical retailers, without it starting to feel repetitive?",
      fr: "Contrairement à The Jersey Generator, ÆRA n'est pas un problème de configuration. Chaque paire est le même produit au même prix (99,97 $ CA), simplement dans un coloris différent. Le défi ici va presque dans le sens inverse : comment garder un produit simple intéressant à travers une boutique Shopify, un fil Instagram et un mur de détaillants physiques, sans que ça devienne répétitif?"
    },
    "aera.context.body2": {
      en: "The site answers that with layered storytelling — a technologies mega-menu, dedicated pages per feature (VisiClear™, Chroma+™, UV 400, Ultrasoft Silicone, Ultrawide View, Ultralight), a retailer-logo wall, and verified customer reviews with photo evidence.",
      fr: "Le site répond à cela par une narration en couches — un méga-menu de technologies, des pages dédiées par caractéristique (VisiClear™, Chroma+™, UV 400, Ultrasoft Silicone, Ultrawide View, Ultralight), un mur de logos de détaillants et des avis clients vérifiés avec preuves photo."
    },

    "aera.role.eyebrow": { en: "My Role", fr: "Mon rôle" },
    "aera.role.title": { en: "Wider than the title suggests.", fr: "Plus large que ce que le titre laisse croire." },
    "aera.role.intro": {
      en: "My title is Digital Marketing Coordinator, but the actual work spans further than content. I maintain and enhance the Shopify store itself — building custom pages, sections, and functionality — while also owning the brand's content direction and, for a three-month stretch, leading the team producing it.",
      fr: "Mon titre est coordonnateur du marketing numérique, mais le travail réel dépasse le contenu. Je maintiens et améliore la boutique Shopify elle-même — en développant des pages, sections et fonctionnalités personnalisées — tout en assurant la direction du contenu de la marque et, pendant trois mois, en dirigeant l'équipe qui le produisait."
    },
    "aera.role.b1.label": { en: "Storefront", fr: "Boutique" },
    "aera.role.b1.body": { en: "Building custom Shopify pages, sections, and functionality to improve UX, performance, and conversion.", fr: "Développer des pages, sections et fonctionnalités Shopify personnalisées pour améliorer l'UX, la performance et la conversion." },
    "aera.role.b2.label": { en: "Content", fr: "Contenu" },
    "aera.role.b2.body": { en: "Producing colorway campaign creative and Amazon A+ Content, and editing product/lifestyle photography for social, web, and marketing use.", fr: "Produire les créations de campagne par coloris et le contenu A+ d'Amazon, et éditer la photographie produit et style de vie pour les réseaux sociaux, le web et le marketing." },
    "aera.role.b3.label": { en: "Leadership", fr: "Leadership" },
    "aera.role.b3.body": { en: "Leading a team of interns over a 3-month period — production schedules, creative direction, and execution.", fr: "Diriger une équipe de stagiaires pendant une période de 3 mois — échéanciers de production, direction créative et exécution." },
    "aera.role.b4.label": { en: "Cross-functional", fr: "Transversal" },
    "aera.role.b4.body": { en: "Working with marketing and business stakeholders on the website roadmap, translating requirements into shipped features.", fr: "Travailler avec les parties prenantes marketing et affaires sur la feuille de route du site, en traduisant les besoins en fonctionnalités livrées." },

    "aera.ecom.eyebrow": { en: "E-commerce", fr: "Commerce en ligne" },
    "aera.ecom.title": { en: "Six identities, one price point to merchandise around.", fr: "Six identités, un seul prix à merchandiser." },
    "aera.ecom.quote": { en: "Every colorway costs the same — so the entire job is making each one feel like a distinct choice, not a repeat of the last.", fr: "Chaque coloris coûte le même prix — tout le travail consiste donc à faire sentir chacun comme un choix distinct, pas une répétition du précédent." },
    "aera.ecom.b1.label": { en: "Flat pricing", fr: "Prix unique" },
    "aera.ecom.b1.body": { en: "All six colorways sit at $99.97 CAD, so differentiation has to come from name, story, and imagery — never price.", fr: "Les six coloris sont tous à 99,97 $ CA — la différenciation doit donc venir du nom, du récit et de l'image, jamais du prix." },
    "aera.ecom.b2.label": { en: "Retailer proof", fr: "Preuve par les détaillants" },
    "aera.ecom.b2.body": { en: "A scrolling wall of authorized retailer logos (Sports Experts, Divers Direct, and others) signals ÆRA exists beyond its own site.", fr: "Un mur défilant de logos de détaillants autorisés (Sports Experts, Divers Direct, entre autres) signale qu'ÆRA existe au-delà de son propre site." },
    "aera.ecom.b3.label": { en: "Verified reviews", fr: "Avis vérifiés" },
    "aera.ecom.b3.body": { en: "Product pages carry star ratings and photo-backed reviews, adding third-party proof next to the sales copy.", fr: "Les pages produit affichent des évaluations en étoiles et des avis appuyés par des photos, ajoutant une preuve tierce à côté du texte de vente." },
    "aera.ecom.photo.intro": { en: "The studio photography below is the kind of asset I work from for the storefront and marketplace listings alike — each colorway shot the same way, with the same retail hang-tag, so the set reads as one coherent product line rather than six separate SKUs.", fr: "La photographie de studio ci-dessous est le type d'actif à partir duquel je travaille, aussi bien pour la boutique que pour les fiches de marché — chaque coloris photographié de la même façon, avec la même étiquette de détail, pour que l'ensemble se lise comme une seule gamme cohérente plutôt que six UGS distinctes." },
    "aera.ecom.cap1": { en: "Black Mirror — the same product from the studio shot above, restyled for a campaign post.", fr: "Black Mirror — le même produit que sur la photo de studio ci-dessus, restylisé pour une publication de campagne." },
    "aera.ecom.cap2": { en: "Clear — the anti-fog benefit translated into a plain-language headline.", fr: "Clear — le bénéfice anti-buée traduit en un titre accessible." },
    "aera.ecom.cap3": { en: "Blushwave — a vibrant colorway that stands out in the lineup.", fr: "Blushwave — une palette de couleurs éclatantes qui se démarque dans la gamme." },
    "aera.ecom.hero.cap1": { en: "Fire — hero-grade photography built for the product page and paid social, not the catalog grid.", fr: "Feu — photographie de qualité héroïque construite pour la page produit et les réseaux sociaux payants, pas pour la grille du catalogue." },
    "aera.ecom.hero.cap4": { en: "Pink — same treatment, same lighting setup, different colorway.", fr: "Rose — même traitement, même configuration d'éclairage, autre coloris." },


/* ===================== ÆRA COLORWAYS (GALLERY DATA) ===================== */
    "aera.gallery.blackChrome.title": { en: "Black Chrome", fr: "Chrome Noir" },
    "aera.gallery.blackChrome.desc": {
      en: "The Black Mirror colorway combines a dark frame with a reflective chrome lens.",
      fr: "Le coloris Miroir Noir combine une monture foncée avec une lentille réfléchissante en chrome."
    },
    "aera.gallery.blueSteel.title": { en: "Blue Steel", fr: "Acier Bleu" },
    "aera.gallery.blueSteel.desc": {
      en: "The Blue Steel colorway pairs a cool blue-toned frame with a blue mirrored lens. The render emphasizes the product's streamlined geometry and lightweight frameless design.",
      fr: "Le coloris Acier Bleu associe une monture aux tons bleus frais à une lentille miroir bleue. Le rendu met en valeur la géométrie épurée du produit et son design sans monture léger."
    },
    "aera.gallery.fire.title": { en: "Fire", fr: "Feu" },
    "aera.gallery.fire.desc": {
      en: "The Fire colorway creates a warm monochromatic look through its amber frame and matching mirrored lens. The studio render focuses on the shape, construction, and reflective finish of the eyewear.",
      fr: "Le coloris Feu crée un style monochrome chaleureux grâce à sa monture ambrée et sa lentille miroir assortie. Le rendu studio met l'accent sur la forme, la fabrication et la finition réfléchissante des lunettes."
    },
    "aera.gallery.blushwave.title": { en: "Blushwave", fr: "Blushwave" },
    "aera.gallery.blushwave.desc": {
      en: "Blushwave combines a soft pink frame with a rose mirrored lens. The image demonstrates how ÆRA's minimal product form can be paired with a more expressive color treatment.",
      fr: "Blushwave combine une monture rose doux avec une lentille miroir rosée. L'image démontre comment la forme minimale des produits ÆRA peut être associée à un traitement de couleur plus expressif."
    },
    "aera.gallery.teal.title": { en: "Teal", fr: "Sarcelle" },
    "aera.gallery.teal.desc": {
      en: "The Teal colorway combines a translucent teal frame with a contrasting gold mirrored lens. This render highlights the relationship between the frame material, lens treatment, and overall product silhouette.",
      fr: "Le coloris Sarcelle combine une monture translucide couleur sarcelle avec une lentille miroir dorée contrastante. Ce rendu met en valeur la relation entre le matériau de la monture, le traitement de la lentille et la silhouette globale du produit."
    },
    "aera.gallery.clear.title": { en: "Clear", fr: "Transparent" },
    "aera.gallery.clear.desc": {
      en: "The Clear colorway uses a transparent frame and clear mirrored lens for a restrained, lightweight visual aesthetic. The image makes the frameless construction and overall geometry particularly visible.",
      fr: "Le coloris Transparent utilise une monture transparente et une lentille miroir claire pour une esthétique visuelle sobre et légère. L'image rend la construction sans monture et la géométrie globale particulièrement visibles."
    },


    "aera.mkt.eyebrow": { en: "Marketplace — Amazon A+ Content", fr: "Marché en ligne — Contenu A+ Amazon" },
    "aera.mkt.title": { en: "Rebuilding the same brand for a channel with no custom layout.", fr: "Reconstruire la même marque pour un canal sans mise en page personnalisée." },
    "aera.mkt.body1": {
      en: "ÆRA's eyewear also sells through Amazon, where product pages run on Amazon's fixed A+ Content module system instead of Shopify's freeform templates. I built the A+ modules for ÆRA's Amazon listing myself — carrying the same VisiClear™ Nanotechnology and Chroma+™ Lens story over from the owned site into Amazon's stricter, comparison-shopping format.",
      fr: "Les lunettes ÆRA sont aussi vendues sur Amazon, où les pages produit reposent sur le système de modules fixes A+ Content d'Amazon plutôt que sur les gabarits libres de Shopify. J'ai construit moi-même les modules A+ de la fiche Amazon d'ÆRA — en reportant le même récit sur la nanotechnologie VisiClear™ et la lentille Chroma+™ du site propre vers le format plus rigide et comparatif d'Amazon."
    },
    "aera.mkt.body2": {
      en: "The constraint is real: no custom CSS, no mega-menu, just Amazon's standard module shapes and a shopper actively comparing listings side by side. I kept every module to the same pattern — one technology or benefit claim, a short bullet list, and an image doing the rest of the convincing.",
      fr: "La contrainte est bien réelle : aucun CSS personnalisé, aucun méga-menu, seulement les formats de modules standards d'Amazon et un acheteur qui compare activement plusieurs fiches côte à côte. J'ai gardé chaque module dans le même motif — une seule technologie ou un seul bénéfice, une courte liste à puces, et une image qui fait le reste du travail de conviction."
    },
    "aera.mkt.why.label": { en: "Why it's worth including here", fr: "Pourquoi l'inclure ici" },
    "aera.mkt.why.body": { en: "It's the same brand-translation instinct as the Shopify site, just inside a template I didn't design — a real test of whether the product story holds up once the layout freedom disappears.", fr: "C'est le même réflexe de traduction de marque que sur le site Shopify, mais dans un gabarit que je n'ai pas conçu — un vrai test pour voir si le récit produit tient toujours une fois la liberté de mise en page disparue." },
    "aera.mkt.cap1": { en: "VisiClear™ Nanotechnology module — opens on the underwater use case, then states the anti-fog claim as four scannable bullets instead of a paragraph.", fr: "Module VisiClear™ Nanotechnology — s'ouvre sur le cas d'usage sous l'eau, puis énonce le bénéfice anti-buée en quatre puces faciles à parcourir plutôt qu'en paragraphe." },
    "aera.mkt.cap2": { en: "Chroma+™ Lens module — labeled honestly as a \"market sample\" comparison rather than passed off as real through-lens photography.", fr: "Module Chroma+™ Lens — étiqueté honnêtement comme un « exemple du marché » plutôt que présenté comme une vraie photo prise à travers la lentille." },
    "aera.mkt.cap3": { en: "\"What is Nanotech?\" module — answers the obvious follow-up question (does this wash off?) before the shopper has to ask it.", fr: "Module « What is Nanotech? » — répond à la question évidente qui suit (est-ce que ça s'use?) avant même que l'acheteur ait à la poser." },
    "aera.mkt.cap4": { en: "\"Experience Color Precision\" module — restates the same optical claim for shoppers who skimmed past the first one.", fr: "Module « Experience Color Precision » — reformule le même bénéfice optique pour les acheteurs qui auraient survolé le premier module." },
    "aera.mkt.cap5": { en: "Closing feature grid — weight, peripheral awareness, chlorine/saltwater resistance, and build durability, grouped into one quadrant module instead of four separate ones.", fr: "Grille de caractéristiques finale — poids, conscience périphérique, résistance au chlore et à l'eau salée, et durabilité, regroupés dans un seul module en quadrants plutôt que quatre modules séparés." },

    "aera.lead.eyebrow": { en: "Leadership & Content", fr: "Leadership et contenu" },
    "aera.lead.title": { en: "Running a team, and rebuilding how the brand shows up on social.", fr: "Diriger une équipe, et reconstruire la présence de la marque sur les réseaux sociaux." },
    "aera.lead.body1": { en: "For three months, I led a team of interns producing ÆRA's digital marketing content — managing production schedules, giving creative direction, and making sure execution actually matched the plan.", fr: "Pendant trois mois, j'ai dirigé une équipe de stagiaires produisant le contenu marketing numérique d'ÆRA — en gérant les échéanciers de production, en donnant la direction créative et en veillant à ce que l'exécution corresponde réellement au plan." },
    "aera.lead.body2": { en: "In parallel, I rebuilt the brand's Instagram content strategy from the ground up and set the direction for short-form content across Instagram and TikTok — short-form video, motion graphics, and 3D animation — defining the themes, visual standards, and storytelling approach behind campaigns, product drops, and audience growth.", fr: "En parallèle, j'ai reconstruit de fond en comble la stratégie de contenu Instagram de la marque et défini l'orientation du contenu court sur Instagram et TikTok — vidéo courte, animation graphique et 3D — en établissant les thèmes, les standards visuels et l'approche narrative derrière les campagnes, les lancements de produits et la croissance de l'audience." },

    "aera.brand.eyebrow": { en: "Brand & UX", fr: "Marque et UX" },
    "aera.brand.title": { en: "Naming the engineering, then restating it as a feeling.", fr: "Nommer l'ingénierie, puis la reformuler en émotion." },
    "aera.brand.caption": { en: "Lifestyle imagery placing the same product across five watersport contexts — swim, surf, jet ski, wakeboard, paddle. The same strip doubles as an A+ Content header module on Amazon, keeping both channels visually consistent.", fr: "Imagerie de style de vie plaçant le même produit dans cinq contextes de sport nautique — natation, surf, motomarine, wakeboard, pagaie. La même bande sert aussi de module d'en-tête A+ Content sur Amazon, gardant les deux canaux visuellement cohérents." },
    "aera.brand.body1": {
      en: "Every technology page on the site follows the same move: name the engineering (VisiClear™ Nanotechnology, Chroma+™ Lens), then immediately restate it as something felt — \"fog-free,\" \"sharper,\" \"all-day comfort\" — before asking for the sale. The product page repeats the pattern across four tabs (Vision, Fit & Comfort, Protection, Durability), so a shopper can pick the one reason that matters to them instead of reading one long feature list.",
      fr: "Chaque page technologique du site suit le même geste : nommer l'ingénierie (nanotechnologie VisiClear™, lentille Chroma+™), puis la reformuler immédiatement en quelque chose de ressenti — « sans buée », « plus net », « confort toute la journée » — avant de demander la vente. La page produit répète ce motif dans quatre onglets (Vision, Confort, Protection, Durabilité), pour que l'acheteur choisisse la raison qui compte le plus pour lui plutôt que de lire une longue liste de caractéristiques."
    },
    "aera.brand.body2": {
      en: "Campaign creative carries the same translation into imagery — mood-driven, colorway-themed posts (Blushwave's beach palette, Fire's warm gradient) next to straightforward on-water action shots, pairing feeling with proof.",
      fr: "Les créations de campagne prolongent cette même traduction dans l'image — des publications axées sur l'ambiance et le coloris (la palette plage de Blushwave, le dégradé chaud de Fire) à côté de photos d'action sur l'eau plus directes, mariant l'émotion à la preuve."
    },

    "aera.outcome.eyebrow": { en: "Final Experience", fr: "Expérience finale" },
    "aera.outcome.title": { en: "One product, six stories, one price.", fr: "Un produit, six histoires, un seul prix." },
    "aera.closing": { en: "The storefront, the Amazon listing, and the Instagram feed are three different constraints on the same brand — most of my job here is making sure they don't contradict each other.", fr: "La boutique, la fiche Amazon et le fil Instagram sont trois contraintes différentes sur la même marque — l'essentiel de mon travail ici consiste à faire en sorte qu'elles ne se contredisent pas." },

    "aera.nav.prev": { en: "← Previous project", fr: "← Projet précédent" },
    "aera.nav.next": { en: "Next project →", fr: "Projet suivant →" },

    /* ===================== MA BOUSSOLE ===================== */
    "mb.nav.overview": { en: "Overview", fr: "Aperçu" },
    "mb.nav.context": { en: "Context", fr: "Contexte" },
    "mb.nav.role": { en: "Role", fr: "Rôle" },
    "mb.nav.concept": { en: "The App Concept", fr: "Le concept d'application" },
    "mb.nav.campaign": { en: "Campaign", fr: "Campagne" },
    "mb.nav.video": { en: "Video & Motion", fr: "Vidéo et mouvement" },
    "mb.nav.outcome": { en: "Outcome", fr: "Résultat" },

    "mb.tag": { en: "Featured Project — Motion & Visual Execution", fr: "Projet vedette — Mouvement et exécution visuelle" },
    "mb.hero.title": { en: "An Earth Day campaign for an app that doesn't exist yet.", fr: "Une campagne pour le Jour de la Terre, pour une application qui n'existe pas encore." },
    "mb.hero.sub": {
      en: "Ma Boussole (\"My Compass\") is a concept app that guides people to sort their waste correctly — promoted here through a poster campaign, UI mockups, a brand mascot, and two motion pieces.",
      fr: "Ma Boussole est une application conceptuelle qui guide les gens à bien trier leurs déchets — présentée ici à travers une campagne d'affiches, des maquettes d'interface, une mascotte de marque et deux pièces animées."
    },
    "mb.meta.team.label": { en: "Team", fr: "Équipe" },
    "mb.meta.team.value": { en: "Anastasia Poissant Ross, Éric Nguyen, Alejandro Yanez del Rio", fr: "Anastasia Poissant Ross, Éric Nguyen, Alejandro Yanez del Rio" },
    "mb.meta.format.label": { en: "Format", fr: "Format" },
    "mb.meta.format.value": { en: "Poster campaign, UI mockups, motion", fr: "Campagne d'affiches, maquettes d'interface, animation" },
    "mb.meta.program.label": { en: "Program", fr: "Programme" },
    "mb.meta.program.value": { en: "Techniques d'intégration multimédia", fr: "Techniques d'intégration multimédia" },
    "mb.hero.caption": { en: "One of four campaign posters: the mascot pitches the app's core trick — scan an item, and Ma Boussole recognizes the material and shape well enough to tell you which bin it belongs in.", fr: "L'une des quatre affiches de la campagne : la mascotte présente l'idée centrale de l'application — numériser un objet, et Ma Boussole reconnaît suffisamment bien la matière et la forme pour indiquer le bon bac." },

    "mb.context.eyebrow": { en: "Context", fr: "Contexte" },
    "mb.context.title": { en: "A recognizable problem: nobody's sure which bin is right.", fr: "Un problème universel : personne n'est certain du bon bac." },
    "mb.context.body1": { en: "This project was built as an Earth Day awareness piece — a series of posters designed to promote a concept mobile app, Ma Boussole, and highlight recycling and environmental responsibility more broadly.", fr: "Ce projet a été conçu comme une pièce de sensibilisation pour le Jour de la Terre — une série d'affiches destinées à promouvoir une application mobile conceptuelle, Ma Boussole, et à mettre en valeur le recyclage et la responsabilité environnementale de façon plus large." },
    "mb.context.body2": { en: "The premise is straightforward and genuinely useful: Ma Boussole is pitched as an app that uses detection technology to identify what you're holding — its material and shape — and tells you, without ambiguity, how to dispose of it responsibly.", fr: "La prémisse est simple et réellement utile : Ma Boussole est présentée comme une application qui utilise une technologie de détection pour identifier ce que l'on tient en main — sa matière et sa forme — et indique, sans ambiguïté, comment en disposer de façon responsable." },

    "mb.role.eyebrow": { en: "My Role", fr: "Mon rôle" },
    "mb.role.title": { en: "A three-person team project.", fr: "Un projet d'équipe à trois personnes." },
    "mb.role.body1": { en: "Ma Boussole is credited on the work itself to three people: Anastasia Poissant Ross, Éric Nguyen, and Alejandro Yanez del Rio. It was produced as part of the Techniques d'intégration multimédia program at Collège de Maisonneuve.", fr: "Ma Boussole est créditée directement sur le projet à trois personnes : Anastasia Poissant Ross, Éric Nguyen et Alejandro Yanez del Rio. Il a été réalisé dans le cadre du programme Techniques d'intégration multimédia au Collège de Maisonneuve." },
    "mb.role.body2": { en: "In the interest of accuracy, I'm presenting this as a team output rather than claiming every individual asset as my own — the credit line doesn't break down who did what, so neither do I here.", fr: "Par souci d'exactitude, je présente ce projet comme une réalisation d'équipe plutôt que de revendiquer chaque élément comme le mien — la mention de crédit ne précise pas qui a fait quoi, donc je ne le fais pas non plus ici." },
    "mb.role.label": { en: "What I can say for certain", fr: "Ce que je peux affirmer avec certitude" },
    "mb.role.value": { en: "I co-created the campaign concept, the visual system, and the deliverables shown below, as one of the three credited creators.", fr: "J'ai co-créé le concept de campagne, le système visuel et les livrables présentés ci-dessous, en tant que l'un des trois créateurs crédités." },

    "mb.concept.caption": { en: "The concept's four core features, shown across five mocked-up app screens.", fr: "Les quatre fonctionnalités principales du concept, présentées sur cinq maquettes d'écrans d'application." },
    "mb.concept.eyebrow": { en: "The App Concept", fr: "Le concept d'application" },
    "mb.concept.title": { en: "Four features, one habit to build.", fr: "Quatre fonctionnalités, une habitude à construire." },
    "mb.concept.f1": { en: "<strong style=\"color:var(--text-primary);\">Scan your waste</strong> — point the camera at an item and the app identifies it by material and shape, then tells you which bin it belongs in.", fr: "<strong style=\"color:var(--text-primary);\">Scanne tes déchets</strong> — pointe la caméra vers un objet et l'application l'identifie par sa matière et sa forme, puis indique le bon bac." },
    "mb.concept.f2": { en: "<strong style=\"color:var(--text-primary);\">Find nearby bins</strong> — a map of recycling centers and bins in the surrounding neighborhood.", fr: "<strong style=\"color:var(--text-primary);\">Trouve les bacs à proximité</strong> — une carte des centres de recyclage et des bacs du quartier environnant." },
    "mb.concept.f3": { en: "<strong style=\"color:var(--text-primary);\">Track your progress</strong> — small, concrete feedback (e.g. how many trees a given amount of recycled paper saves) instead of an abstract \"you did good\" message.", fr: "<strong style=\"color:var(--text-primary);\">Suis tes progrès</strong> — une rétroaction concrète (par ex., combien d'arbres une quantité donnée de papier recyclé permet de sauver) plutôt qu'un message abstrait de félicitations." },
    "mb.concept.f4": { en: "<strong style=\"color:var(--text-primary);\">Read the news</strong> — a feed of ecology-related stories, keeping the app relevant between sorting sessions.", fr: "<strong style=\"color:var(--text-primary);\">Lis l'actualité</strong> — un fil de nouvelles liées à l'écologie, gardant l'application pertinente entre deux séances de tri." },

    "mb.campaign.eyebrow": { en: "Campaign", fr: "Campagne" },
    "mb.campaign.title": { en: "One question per poster, one feature as the answer.", fr: "Une question par affiche, une fonctionnalité comme réponse." },
    "mb.campaign.sub": { en: "Each poster in the series opens with a question a real person might actually think (\"Am I lost?\", \"How many trees have I saved?\"), then answers it with a specific app feature — rather than a generic sustainability slogan. The posters are in French, matching the campaign's Montreal audience.", fr: "Chaque affiche de la série s'ouvre sur une question qu'une vraie personne pourrait se poser (« Suis-je perdu? », « Combien d'arbres ai-je sauvés? »), puis y répond avec une fonctionnalité précise de l'application — plutôt qu'un slogan écologique générique. Les affiches sont en français, en phase avec le public montréalais de la campagne." },
    "mb.campaign.cap1": { en: "\"Tu es perdu?\" — finds every recycling center and bin in the neighborhood.", fr: "« Tu es perdu? » — trouve tous les centres de recyclage et les bacs du quartier." },
    "mb.campaign.cap2": { en: "\"Combien d'arbres j'aurai sauvé?\" — turns recycling into a trackable, personal number.", fr: "« Combien d'arbres j'aurai sauvé? » — transforme le recyclage en un chiffre personnel et mesurable." },
    "mb.campaign.cap3": { en: "\"Dépassé.e des nouvelles?\" — folds ecology news into the same app.", fr: "« Dépassé.e des nouvelles? » — intègre l'actualité écologique à la même application." },
    "mb.campaign.mascot.caption": { en: "The mascot ties every poster, screen, and motion piece back to one consistent, approachable character.", fr: "La mascotte relie chaque affiche, écran et pièce animée à un même personnage cohérent et accessible." },
    "mb.campaign.mascot.eyebrow": { en: "The Character", fr: "Le personnage" },
    "mb.campaign.mascot.title": { en: "A mascot instead of a logo.", fr: "Une mascotte plutôt qu'un logo." },
    "mb.campaign.mascot.body": { en: "Rather than lead with a compass icon alone (used here as a small badge/app-icon mark), the campaign leads with a friendly character — approachable enough to make an environmental-responsibility message feel encouraging rather than guilt-driven.", fr: "Plutôt que de s'appuyer uniquement sur une icône de boussole (utilisée ici comme petit insigne / icône d'application), la campagne mise sur un personnage sympathique — assez accessible pour qu'un message de responsabilité environnementale paraisse encourageant plutôt que culpabilisant." },

    "mb.video.eyebrow": { en: "Video & Motion", fr: "Vidéo et mouvement" },
    "mb.video.title": { en: "Two of the app's moments, brought to life.", fr: "Deux moments de l'application, pris vie." },
    "mb.video.cap1": { en: "Loading sequence — the moment before the app is usable, given its own motion identity instead of a generic spinner.", fr: "Séquence de chargement — le moment avant que l'application soit utilisable, doté de sa propre identité animée plutôt que d'un simple indicateur de chargement générique." },
    "mb.video.cap2": { en: "Map interaction — the \"find nearby bins\" feature, shown in motion rather than a static screenshot.", fr: "Interaction avec la carte — la fonctionnalité « trouve les bacs à proximité », montrée en mouvement plutôt qu'en capture d'écran statique." },

    "mb.outcome.eyebrow": { en: "Closing Slide", fr: "Diapositive finale" },
    "mb.outcome.title": { en: "Where the deck itself ends.", fr: "Là où le diaporama se termine." },
    "mb.outcome.creditCaption": { en: "The project's own title and credit slide — I'm using it here instead of writing my own summary of who did what.", fr: "La diapositive de titre et de crédits du projet lui-même — je l'utilise ici plutôt que d'écrire mon propre résumé de qui a fait quoi." },
    "mb.outcome.body": {
      en: "The Jersey Generator and ÆRA Sports are commerce systems I work inside every day. This one's different — three people, one deadline, and a lot more room to just make something we thought was fun.",
      fr: "The Jersey Generator et ÆRA Sports sont des systèmes commerciaux dans lesquels je travaille au quotidien. Celui-ci est différent — trois personnes, une échéance, et beaucoup plus de liberté pour simplement créer quelque chose qu'on trouvait amusant."
    },
    "mb.nav.prev": { en: "← Previous project", fr: "← Projet précédent" },
    "mb.nav.next": { en: "Back to →", fr: "Retour vers →" }
  };

  window.I18N = window.I18N || {};
  for (var key in CS) { if (CS.hasOwnProperty(key)) window.I18N[key] = CS[key]; }
})();
