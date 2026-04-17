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
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
