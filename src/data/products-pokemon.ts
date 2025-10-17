import { stagePokemon, typePoke, type typePokemon } from "../types/product";
import imgBayleef01 from "../assets/pokemon/bayleef-01.jpg";
import imgBlastoise01 from "../assets/pokemon/blastoise-01.jpg";
import imgBlaziken01 from "../assets/pokemon/blaziken-01.jpg";
import imgCharmander01 from "../assets/pokemon/charmander-01.jpg";
import imgCharmeleon01 from "../assets/pokemon/charmeleon-01.jpg";
import imgChicorita01 from "../assets/pokemon/chicorita-01.jpg";
import imgCombusken01 from "../assets/pokemon/combusken-01.jpg";
import imgEevee01 from "../assets/pokemon/eevee-01.jpg";
import imgEspeon01 from "../assets/pokemon/espeon-01.jpg";
import imgFlareon01 from "../assets/pokemon/flareon-01.jpg";
import imgGlaceon01 from "../assets/pokemon/glaceon-01.jpg";
import imgJolteon01 from "../assets/pokemon/jolteon-01.jpg";
import imgLeafeon01 from "../assets/pokemon/leafeon-01.jpg";
import imgMarshtomp01 from "../assets/pokemon/marshtomp-01.jpg";
import imgMeganium01 from "../assets/pokemon/meganium-01.jpg";
import imgMudkip01 from "../assets/pokemon/mudkip-01.jpg";
import imgPokeball01 from "../assets/pokemon/pokeball-01.jpg";
import imgPokeball02 from "../assets/pokemon/pokeball-02.jpg";
import imgPokeball03 from "../assets/pokemon/pokeball-03.jpg";
import imgPokeball04 from "../assets/pokemon/pokeball-04.jpg";
import imgQuilava01 from "../assets/pokemon/quilava-01.jpg";
import imgSceptile01 from "../assets/pokemon/sceptile-01.jpg";
import imgSwampert01 from "../assets/pokemon/swampert-01.jpg";
import imgSylveon01 from "../assets/pokemon/sylveon-01.jpg";
import imgTorchic01 from "../assets/pokemon/torchic-01.jpg";
import imgTyplosion01 from "../assets/pokemon/typlosion-01.jpg";
import imgUmbreon01 from "../assets/pokemon/umbreon-01.jpg";
import imgVaporeon01 from "../assets/pokemon/vaporeon-01.jpg";
import imgWartortle01 from "../assets/pokemon/wartortle-01.jpg";
import imgArcanine01 from "../assets/pokemon/arcanine-01.jpg";
import imgCroconaw01 from "../assets/pokemon/croconaw-01.jpg";
import imgGardevoirShiny01 from "../assets/pokemon/gardevoir-shiny-01.jpg";
import imgHydregon01 from "../assets/pokemon/hydregon-01.jpg";
import imgInfernape01 from "../assets/pokemon/infernape-01.jpg";
import imgMetagrossShiny01 from "../assets/pokemon/metagross-shiny-01.jpg";
import imgStaraptor01 from "../assets/pokemon/staraptor-01.jpg";
import imgTotodile01 from "../assets/pokemon/totodile-01.jpg";


export const productsPokemon: typePokemon[] = [
  {
    id: "bayleef-01",
    name: "Bayleef",
    price: 3000,
    image: [
      imgBayleef01,
    ],
    size:{
      ancho: 5.2,
      alto: 5.9
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.PLANTA,
  },
  {
    id: "blastoise-01",
    name: "Blastoise",
    price: 3500,
    image: [
      imgBlastoise01,
    ],
    size:{
      ancho: 6.5,
      alto: 6.2
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.AGUA,
  },
  {
    id: "blaziken-01",
    name: "Blaziken",
    price: 3500,
    image: [
      imgBlaziken01,
    ],
    size:{
      ancho: 5.7,
      alto: 6.7
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.FUEGO,
  },
  {
    id: "charmander-01",
    name: "Charmander",
    price: 2500,
    image: [
      imgCharmander01,
    ],
    size:{
      ancho: 5.4,
      alto: 4.6
    },
    stage: stagePokemon.BASIC,
    type: typePoke.FUEGO,
  },
  {
    id: "charmeleon-01",
    name: "Charmeleon",
    price: 3000,
    image: [
      imgCharmeleon01,
    ],
    size:{
      ancho: 5.7,
      alto: 5.7
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "chicorita-01",
    name: "Chicorita",
    price: 2500,
    image: [
      imgChicorita01,
    ],
    size:{
      ancho: 7.8,
      alto: 6.2
    },
    stage: stagePokemon.BASIC,
    type: typePoke.PLANTA,
  },
  {
    id: "combusken-01",
    name: "Combusken",
    price: 3000,
    image: [
      imgCombusken01,
    ],
    size:{
      ancho: 5.7,
      alto: 6.5
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "eevee-01",
    name: "Eevee",
    price: 2500,
    image: [
      imgEevee01,
    ],
    size:{
      ancho: 4.4,
      alto: 4.6
    },
    stage: stagePokemon.BASIC,
    type: typePoke.NORMAL,
  },
  {
    id: "espeon-01",
    name: "Espeon",
    price: 3000,
    image: [
      imgEspeon01,
    ],
    size:{
      ancho: 7,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.PSIQUICO,
  },
  {
    id: "flareon-01",
    name: "Flareon",
    price: 3000,
    image: [
      imgFlareon01,
    ],
    size:{
      ancho: 6,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "glaceon-01",
    name: "Glaceon",
    price: 3000,
    image: [
      imgGlaceon01,
    ],
    size:{
      ancho: 7,
      alto: 6
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.HIELO,
  },
  {
    id: "jolteon-01",
    name: "Jolteon",
    price: 2500,
    image: [
      imgJolteon01,
    ],
    size:{
      ancho: 5,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.ELECTRICO,
  },
  {
    id: "leafeon-01",
    name: "Leafeon",
    price: 3000,
    image: [
      imgLeafeon01,
    ],
    size:{
      ancho: 6.5,
      alto: 5.7
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.PLANTA,
  },
  {
    id: "marshtomp-01",
    name: "Marshtomp",
    price: 3000,
    image: [
      imgMarshtomp01,
    ],
    size:{
      ancho: 5.2,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.AGUA,
  },
  {
    id: "meganium-01",
    name: "Meganium",
    price: 3500,
    image: [
      imgMeganium01,
    ],
    size:{
      ancho: 6,
      alto: 7
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.PLANTA,
  },
  {
    id: "mudkip-01",
    name: "Mudkip",
    price: 2500,
    image: [
      imgMudkip01,
    ],
    size:{
      ancho: 5,
      alto: 4.6
    },
    stage: stagePokemon.BASIC,
    type: typePoke.AGUA,
  },
  {
    id: "pokeball-01",
    name: "Superball",
    price: 1500,
    image: [
      imgPokeball01,
    ],
    size:{
      ancho: 3.1,
      alto: 3.1
    },
  },
  {
    id: "pokeball-02",
    name: "Masterball",
    price: 1500,
    image: [
      imgPokeball02,
    ],
    size:{
      ancho: 3.1,
      alto: 3.1
    },
  },
  {
    id: "pokeball-03",
    name: "Pokeball",
    price: 1500,
    image: [
      imgPokeball03,
    ],
    size:{
      ancho: 3.1,
      alto: 3.1
    },
  },
  {
    id: "pokeball-04",
    name: "Ultraball",
    price: 1500,
    image: [
      imgPokeball04,
    ],
    size:{
      ancho: 3.1,
      alto: 3.1
    },
  },
  {
    id: "quilava-01",
    name: "Quilava",
    price: 3000,
    image: [
      imgQuilava01,
    ],
    size:{
      ancho: 6,
      alto: 5.2
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "sceptile-01",
    name: "Sceptile",
    price: 3500,
    image: [
      imgSceptile01,
    ],
    size:{
      ancho: 7.2,
      alto: 6.7
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.PLANTA,
  },
  {
    id: "swampert-01",
    name: "Swampert",
    price: 4500,
    image: [
      imgSwampert01,
    ],
    size:{
      ancho: 6.7,
      alto: 6.5
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.AGUA,
  },
  {
    id: "sylveon-01",
    name: "Sylveon",
    price: 3000,
    image: [
      imgSylveon01,
    ],
    size:{
      ancho: 5.7,
      alto: 6
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.HADA,
  },
  {
    id: "torchic-01",
    name: "Torchic",
    price: 2500,
    image: [
      imgTorchic01,
    ],
    size:{
      ancho: 3.3,
      alto: 5
    },
    stage: stagePokemon.BASIC,
    type: typePoke.FUEGO,
  },
  {
    id: "typlosion-01",
    name: "Typlosion",
    price: 3500,
    image: [
      imgTyplosion01,
    ],
    size:{
      ancho: 6,
      alto: 6.5
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.FUEGO,
  },
  {
    id: "umbreon-01",
    name: "Umbreon",
    price: 2500,
    image: [
      imgUmbreon01,
    ],
    size:{
      ancho: 5.2,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.SINIESTRO,
  },
  {
    id: "vaporeon-01",
    name: "Vaporeon",
    price: 3000,
    image: [
      imgVaporeon01,
    ],
    size:{
      ancho: 6,
      alto: 5.4
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.AGUA,
  },
  {
    id: "wartortle-01",
    name: "Wartortle",
    price: 3000,
    image: [
      imgWartortle01,
    ],
    size:{
      ancho: 6.2,
      alto: 5.7
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.AGUA,
  },
  {
    id: "arcanine-01",
    name: "Arcanine",
    price: 4500,
    image: [
      imgArcanine01
    ],
    size:{
      ancho: 7.5,
      alto: 7
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "croconaw-01",
    name: "Croconaw",
    price: 3000,
    image: [
      imgCroconaw01
    ],
    size:{
      ancho: 5.4,
      alto: 6.5
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.AGUA,
  },
  {
    id: "gardevoir-shiny-01",
    name: "Gardevoir Shiny",
    price: 4000,
    image: [
      imgGardevoirShiny01,
    ],
    size:{
      ancho: 6.7,
      alto: 6.2
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.PSIQUICO,
  },
  {
    id: "hydregon-01",
    name: "Hydregon",
    price: 4500,
    image: [
      imgHydregon01,
    ],
    size:{
      ancho: 7.5,
      alto: 6.5
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.DRAGON,
  },
  {
    id: "infernape-01",
    name: "Infernape",
    price: 3500,
    image: [
      imgInfernape01,
    ],
    size:{
      ancho: 6.7,
      alto: 6.2
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.FUEGO,
  },
  {
    id: "metagross-shiny-01",
    name: "Metagross Shiny",
    price: 4000,
    image: [
      imgMetagrossShiny01,
    ],
    size:{
      ancho: 8.4,
      alto: 5.7
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.ACERO,
  },
  {
    id: "staraptor-01",
    name: "Staraptor",
    price: 3500,
    image: [
      imgStaraptor01,
    ],
    size:{
      ancho: 6,
      alto: 6.5
    },
    stage: stagePokemon.STAGE2,
    type: typePoke.NORMAL,
  },
  {
    id: "totodile-01",
    name: "Totodile",
    price: 2500,
    image: [
      imgTotodile01,
    ],
    size:{
      ancho: 4.6,
      alto: 4.6
    },
    stage: stagePokemon.BASIC,
    type: typePoke.AGUA,
  },
  {
    id: "psyduck-01",
    name: "Psyduck",
    price: 3000,
    image: [
      imgTotodile01,
    ],
    size:{
      ancho: 4.6,
      alto: 5.4
    },
    stage: stagePokemon.BASIC,
    type: typePoke.AGUA,
  },
  {
    id: "pikachu-01",
    name: "Pikachu",
    price: 3000,
    image: [
      imgTotodile01,
    ],
    size:{
      ancho: 5.9,
      alto: 5.4
    },
    stage: stagePokemon.BASIC,
    type: typePoke.ELECTRICO,
  },
];
