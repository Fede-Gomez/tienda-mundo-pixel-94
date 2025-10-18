import { arcanine01, blastoise01, charmander01, charmeleon01, eevee01, flareon01, jolteon01, pikachu01, psyduck01, vaporeon01, warturtle01 } from "../assets/pokemon/1-gen";
import { bayleef01, chicorita01, croconaw01, espeon01, meganium01, quilava01, totodile01, typlosion01, umbreon01 } from "../assets/pokemon/2-gen";
import { blaziken01, combusken01, gardevoirShiny01, grovyle01, marshtomp01, metagrossShiny01, mudkip01, sceptile01, swampert01, torchic01, treecko01 } from "../assets/pokemon/3-gen";
import { glaceon01, infernape01, leafeon01, staraptor01 } from "../assets/pokemon/4-gen";
import { hydregon01 } from "../assets/pokemon/5-gen";
import { sylveon01 } from "../assets/pokemon/6-gen";
import { pokeball01, pokeball02, pokeball03, pokeball04 } from "../assets/pokemon/pokeballs";
import { stagePokemon, typePoke, type typePokemon } from "../types/product";



export const productsPokemon: typePokemon[] = [
  {
    id: "bayleef-01",
    name: "Bayleef",
    price: 3000,
    image: [
      bayleef01,
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
      blastoise01,
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
      blaziken01,
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
      charmander01,
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
      charmeleon01,
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
      chicorita01,
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
      combusken01,
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
      eevee01,
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
      espeon01,
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
      flareon01,
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
      glaceon01,
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
      jolteon01,
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
      leafeon01,
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
      marshtomp01,
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
      meganium01,
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
      mudkip01,
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
      pokeball01,
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
      pokeball02,
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
      pokeball03,
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
      pokeball04,
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
      quilava01,
    ],
    size:{
      ancho: 6,
      alto: 5.2
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.FUEGO,
  },
  {
    id: "treeko-01",
    name: "Treecko",
    price: 2000,
    image: [
      treecko01,
    ],
    size:{
      ancho: 5.2,
      alto: 5.2
    },
    stage: stagePokemon.BASIC,
    type: typePoke.PLANTA,
  },
  {
    id: "grovyle-01",
    name: "Grovyle",
    price: 3500,
    image: [
      grovyle01,
    ],
    size:{
      ancho: 7.2,
      alto: 5.7
    },
    stage: stagePokemon.STAGE1,
    type: typePoke.PLANTA,
  },
  {
    id: "sceptile-01",
    name: "Sceptile",
    price: 3500,
    image: [
      sceptile01,
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
      swampert01,
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
      sylveon01,
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
      torchic01,
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
      typlosion01,
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
      umbreon01,
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
      vaporeon01,
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
      warturtle01,
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
      arcanine01
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
      croconaw01
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
      gardevoirShiny01,
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
      hydregon01,
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
      infernape01,
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
      metagrossShiny01,
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
      staraptor01,
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
      totodile01,
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
      psyduck01,
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
      pikachu01,
    ],
    size:{
      ancho: 5.9,
      alto: 5.4
    },
    stage: stagePokemon.BASIC,
    type: typePoke.ELECTRICO,
  },
];
