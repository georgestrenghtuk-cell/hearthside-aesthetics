import productPlaceholder from "@/assets/product-placeholder.jpg";

export type Product = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  tag: string | null;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  seoDescription: { heading: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "forge-pellets",
    name: "Forge Pellets",
    description: "Premium ENplus A1 pellets met hoge warmte-afgifte en minimale asrest.",
    longDescription:
      "Forge Pellets zijn onze topkwaliteit houtpellets, geproduceerd uit 100% schoon naaldhout. Met een hoge calorische waarde en minimale asrest zijn ze perfect voor dagelijks gebruik in elke pelletkachel of -ketel.",
    price: "Vanaf €4,49/zak",
    tag: "Bestseller",
    image: productPlaceholder,
    specs: [
      { label: "Certificering", value: "ENplus A1" },
      { label: "Houtsoort", value: "100% naaldhout" },
      { label: "Calorische waarde", value: "≥ 4,8 kWh/kg" },
      { label: "Asgehalte", value: "< 0,5%" },
      { label: "Vochtgehalte", value: "< 8%" },
      { label: "Verpakking", value: "15 kg zak" },
    ],
    features: [
      "Hoogste warmte-afgifte in ons assortiment",
      "Vrijwel geen asresten",
      "Lange brandtijd per zak",
      "Schone verbranding zonder rook",
    ],
    seoDescription: [
      {
        heading: "Premium ENplus A1 houtpellets voor maximale warmte",
        body: "Forge Pellets zijn premium houtpellets met het ENplus A1 keurmerk, het hoogste kwaliteitscertificaat voor houtpellets in Europa. Geproduceerd uit 100% schoon naaldhout zonder bindmiddelen of additieven, leveren deze pellets een uitzonderlijke calorische waarde van minimaal 4,8 kWh per kilogram. Hierdoor verwarmt u uw woning efficiënter en bespaart u op uw stookkosten gedurende het gehele stookseizoen.",
      },
      {
        heading: "Schone verbranding met minimale asrest",
        body: "Dankzij het lage asgehalte van minder dan 0,5% en een vochtpercentage onder de 8%, branden Forge Pellets uitzonderlijk schoon. Dit betekent minder onderhoud aan uw pelletkachel of CV-ketel, een langere levensduur van uw apparaat en minimale uitstoot van fijnstof. De pellets zijn geschikt voor alle gangbare merken pelletkachels en pelletketels.",
      },
      {
        heading: "Duurzaam verwarmen met houtpellets uit de Veluwe",
        body: "Door te kiezen voor Forge Pellets kiest u voor een CO2-neutrale brandstof uit duurzaam beheerde Europese bossen. Onze pellets worden geleverd in handzame zakken van 15 kg, eenvoudig te stapelen en op te slaan. Bestel online en profiteer van snelle levering door heel Nederland, met de mogelijkheid om achteraf te betalen na ontvangst.",
      },
    ],
  },
  {
    slug: "anvil-pellets",
    name: "Anvil Pellets",
    description: "Uitstekende kwaliteit pellets voor een constante en efficiënte verbranding.",
    longDescription:
      "Anvil Pellets bieden een uitstekende balans tussen prijs en kwaliteit. Ideaal voor wie dagelijks zijn kachel stookt en op zoek is naar betrouwbare prestaties.",
    price: "Vanaf €4,29/zak",
    tag: "Populair",
    image: productPlaceholder,
    specs: [
      { label: "Certificering", value: "ENplus A1" },
      { label: "Houtsoort", value: "Naaldhout mix" },
      { label: "Calorische waarde", value: "≥ 4,7 kWh/kg" },
      { label: "Asgehalte", value: "< 0,7%" },
      { label: "Vochtgehalte", value: "< 9%" },
      { label: "Verpakking", value: "15 kg zak" },
    ],
    features: [
      "Constante kwaliteit per batch",
      "Goede prijs-kwaliteitverhouding",
      "Efficiënte verbranding",
      "Geschikt voor alle kachelmerken",
    ],
    seoDescription: [
      {
        heading: "Anvil Pellets: betrouwbare ENplus A1 houtpellets",
        body: "Anvil Pellets zijn ENplus A1 gecertificeerde houtpellets die staan voor consistente kwaliteit en betrouwbare prestaties. Met een calorische waarde van minimaal 4,7 kWh/kg bieden deze pellets een uitstekende warmte-afgifte tegen een aantrekkelijke prijs. Ideaal voor huishoudens die hun pelletkachel dagelijks gebruiken en op zoek zijn naar een vaste, betrouwbare brandstof.",
      },
      {
        heading: "Optimale prijs-kwaliteitverhouding voor dagelijks gebruik",
        body: "Anvil Pellets zijn samengesteld uit een zorgvuldig geselecteerde mix van naaldhout, wat zorgt voor een stabiele vlam en een gelijkmatige verbranding. Het asgehalte blijft onder de 0,7% en het vochtgehalte onder de 9%, waardoor uw pelletkachel langer schoon blijft en u minder vaak hoeft te legen. Compatibel met alle gangbare pelletkachels en CV-ketels.",
      },
      {
        heading: "Snel geleverd, achteraf betalen",
        body: "Bestel Anvil Pellets eenvoudig online en profiteer van snelle levering door heel Nederland. Betaal pas na ontvangst en ervaar zelf waarom duizenden klanten kiezen voor de pellets van VeluwsePellets. Verkrijgbaar per zak van 15 kg of voordelig per pallet.",
      },
    ],
  },
  {
    slug: "piniera-pellets",
    name: "Piniera Pellets",
    description: "Betrouwbare pellets van naaldhout met een schone verbranding.",
    longDescription:
      "Piniera Pellets zijn gemaakt van zorgvuldig geselecteerd naaldhout en bieden een schone, geurloze verbranding. Een betrouwbare keuze voor het hele stookseizoen.",
    price: "Vanaf €4,19/zak",
    tag: null,
    image: productPlaceholder,
    specs: [
      { label: "Certificering", value: "ENplus A1" },
      { label: "Houtsoort", value: "Den & spar" },
      { label: "Calorische waarde", value: "≥ 4,7 kWh/kg" },
      { label: "Asgehalte", value: "< 0,7%" },
      { label: "Vochtgehalte", value: "< 9%" },
      { label: "Verpakking", value: "15 kg zak" },
    ],
    features: [
      "Schone, geurloze verbranding",
      "Stabiele vlam",
      "Lage stofuitstoot",
      "Milieuvriendelijk geproduceerd",
    ],
    seoDescription: [
      {
        heading: "Piniera Pellets: pure naaldhoutpellets met ENplus A1 keurmerk",
        body: "Piniera Pellets zijn premium houtpellets vervaardigd uit zuiver den- en sparrenhout. Het hoge ligninegehalte van naaldhout zorgt van nature voor een stevige pellet zonder toevoeging van bindmiddelen. Met het ENplus A1 certificaat bent u verzekerd van constante kwaliteit, een hoge calorische waarde en een lage uitstoot.",
      },
      {
        heading: "Geurloze en stabiele verbranding voor optimaal comfort",
        body: "De Piniera houtpellets branden bijzonder schoon en geurloos, wat ze ideaal maakt voor gebruik in woonkamers en leefruimtes. De stabiele vlam zorgt voor een gelijkmatige warmteafgifte en het lage stofgehalte voorkomt verstoppingen in de pelletvoer van uw kachel. Met een asgehalte onder de 0,7% blijft uw kachel langer schoon.",
      },
      {
        heading: "Milieuvriendelijke keuze voor uw pelletkachel",
        body: "Piniera Pellets zijn geproduceerd uit reststromen van duurzaam beheerd Europees bos. Door te kiezen voor deze houtpellets draagt u bij aan een circulaire economie en vermindert u uw CO2-voetafdruk. Verkrijgbaar in zakken van 15 kg, eenvoudig te bestellen en snel geleverd door heel Nederland.",
      },
    ],
  },
  {
    slug: "ten-damme-pellets",
    name: "Ten Damme Pellets",
    description: "Nederlandse kwaliteitspellets, lokaal geproduceerd en duurzaam.",
    longDescription:
      "Ten Damme Pellets worden lokaal in Nederland geproduceerd uit duurzaam beheerde bossen. Korte transportlijnen en hoge kwaliteit gaan hier hand in hand.",
    price: "Vanaf €4,39/zak",
    tag: null,
    image: productPlaceholder,
    specs: [
      { label: "Certificering", value: "ENplus A1" },
      { label: "Houtsoort", value: "Naaldhout NL" },
      { label: "Calorische waarde", value: "≥ 4,8 kWh/kg" },
      { label: "Asgehalte", value: "< 0,5%" },
      { label: "Vochtgehalte", value: "< 8%" },
      { label: "Verpakking", value: "15 kg zak" },
    ],
    features: [
      "Lokaal Nederlands product",
      "Korte transportafstand",
      "Duurzaam bosbeheer",
      "Hoge calorische waarde",
    ],
    seoDescription: [
      {
        heading: "Ten Damme Pellets: Nederlandse houtpellets van eigen bodem",
        body: "Ten Damme Pellets zijn ENplus A1 gecertificeerde houtpellets die volledig in Nederland worden geproduceerd uit lokaal naaldhout. Door de korte transportafstand en het gebruik van Nederlandse grondstoffen zijn deze pellets een van de meest duurzame keuzes voor uw pelletkachel. Met een calorische waarde van minimaal 4,8 kWh/kg leveren ze topprestaties.",
      },
      {
        heading: "Duurzaam bosbeheer en korte transportlijnen",
        body: "Het hout voor Ten Damme Pellets is afkomstig uit FSC- en PEFC-gecertificeerde Nederlandse bossen, beheerd volgens de strengste duurzaamheidsnormen. Door productie en distributie binnen Nederland te houden, blijft de CO2-uitstoot van transport minimaal. U steunt direct de lokale economie en kiest voor maximale traceerbaarheid.",
      },
      {
        heading: "Hoge kwaliteit voor een eerlijke prijs",
        body: "Met een asgehalte onder de 0,5% en een vochtgehalte onder de 8% behoren Ten Damme Pellets tot de schoonste pellets op de Nederlandse markt. Verkrijgbaar in zakken van 15 kg, met snelle bezorging door heel Nederland en de mogelijkheid om achteraf te betalen na levering.",
      },
    ],
  },
  {
    slug: "my-pellets",
    name: "My Pellets",
    description: "Betaalbare pellets zonder in te leveren op kwaliteit.",
    longDescription:
      "My Pellets zijn de slimme keuze voor wie kwaliteit wil tegen een scherpe prijs. Perfect als instapproduct of voor wie veel stookt.",
    price: "Vanaf €3,99/zak",
    tag: "Voordelig",
    image: productPlaceholder,
    specs: [
      { label: "Certificering", value: "ENplus A1" },
      { label: "Houtsoort", value: "Naaldhout mix" },
      { label: "Calorische waarde", value: "≥ 4,6 kWh/kg" },
      { label: "Asgehalte", value: "< 0,8%" },
      { label: "Vochtgehalte", value: "< 10%" },
      { label: "Verpakking", value: "15 kg zak" },
    ],
    features: [
      "Beste prijs in ons assortiment",
      "Goede kwaliteit voor dagelijks gebruik",
      "Geschikt voor de meeste kachels",
      "Voordelig in grote hoeveelheden",
    ],
    seoDescription: [
      {
        heading: "My Pellets: voordelige houtpellets met ENplus A1 keurmerk",
        body: "My Pellets zijn de meest voordelige ENplus A1 gecertificeerde houtpellets in ons assortiment, zonder dat u inlevert op kwaliteit of prestaties. Met een calorische waarde van minimaal 4,6 kWh/kg bieden deze pellets een uitstekende warmte-afgifte voor een scherpe prijs. Ideaal voor huishoudens die veel stoken en hun stookkosten willen verlagen.",
      },
      {
        heading: "Betrouwbare verbranding voor dagelijks gebruik",
        body: "Geproduceerd uit een mix van Europees naaldhout, leveren My Pellets een constante en efficiënte verbranding. Het asgehalte blijft onder de 0,8% en het vochtgehalte onder de 10%, ruim binnen de ENplus A1 normen. Geschikt voor vrijwel alle merken pelletkachels en pelletketels op de Nederlandse markt.",
      },
      {
        heading: "Slim besparen met voordelige pellets per pallet",
        body: "My Pellets zijn vooral voordelig bij afname per pallet. Bestel online, betaal achteraf en ontvang uw pellets snel thuis door heel Nederland. Een slimme keuze voor wie het hele stookseizoen warm en betaalbaar wil verwarmen met houtpellets.",
      },
    ],
  },
  {
    slug: "pellet-kachel",
    name: "Pellet Kachel",
    description: "Ontdek onze selectie pelletkachels voor optimaal comfort thuis.",
    longDescription:
      "Onze pelletkachels combineren modern design met efficiënte warmte. Vraag advies aan voor het juiste model voor uw woning.",
    price: "Bekijk opties",
    tag: "Nieuw",
    image: productPlaceholder,
    specs: [
      { label: "Vermogen", value: "6 - 12 kW" },
      { label: "Rendement", value: "≥ 90%" },
      { label: "Bediening", value: "Digitaal / WiFi" },
      { label: "Tankinhoud", value: "15 - 25 kg" },
      { label: "Geluidsniveau", value: "< 45 dB" },
      { label: "Garantie", value: "2 jaar" },
    ],
    features: [
      "Hoog rendement, laag verbruik",
      "Programmeerbare timer",
      "Stille werking",
      "Modern design voor elk interieur",
    ],
    seoDescription: [
      {
        heading: "Moderne pelletkachels met hoog rendement",
        body: "Onze pelletkachels combineren een efficiënte verbrandingstechniek met een modern, tijdloos design. Met een rendement van meer dan 90% halen ze maximale warmte uit elke kilogram houtpellets, wat resulteert in lage stookkosten en een minimale CO2-uitstoot. Verkrijgbaar in vermogens van 6 tot 12 kW, geschikt voor zowel kleine appartementen als ruime woonkamers.",
      },
      {
        heading: "Slimme bediening met WiFi en programmeerbare timer",
        body: "Bedien uw pelletkachel eenvoudig via het digitale display of op afstand via een smartphone-app met WiFi-functionaliteit. Stel de gewenste temperatuur en stooktijden in met de programmeerbare timer, zodat uw woning altijd warm is wanneer u thuiskomt. Het stille geluidsniveau van minder dan 45 dB zorgt voor optimaal woongenot.",
      },
      {
        heading: "Persoonlijk advies voor de juiste pelletkachel",
        body: "Het kiezen van de juiste pelletkachel hangt af van factoren zoals isolatie, woningoppervlak en uw persoonlijke voorkeuren. Onze experts helpen u graag met vrijblijvend advies om de perfecte kachel voor uw situatie te vinden. Met 2 jaar fabrieksgarantie en de mogelijkheid tot installatie door een erkend installateur bent u verzekerd van jarenlang stookplezier.",
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
