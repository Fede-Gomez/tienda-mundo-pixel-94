// Tipo base para un producto
export interface TypeProductCard {
  id: string;
  name: string;
  price: number;
  image: string[]; // Cambiamos a un arreglo de imágenes
  size:{
    alto:number;
    ancho:number;
  }
}

// Tipo extendido para los productos en el carrito
export interface CartItem extends TypeProductCard {
  quantity: number;
  option: string; // Opción seleccionada (Llavero, Imán, Figura)
}

export interface typeDigimon extends TypeProductCard {
  level?: levelDigimon; // Nivel del Digimon (Rookie, Champion, Ultimate, Mega)
  attribute?: attributeDigimon; // Atributo del Digimon (Vaccine, Data, Virus, Free)
}

export interface typePokemon extends TypeProductCard {
  type?: typePoke; 
  stage?: stagePokemon;
}

export enum attributeDigimon {
  VACCINE = "Vacuna",
  DATA = "Data",
  VIRUS = "Virus",
  FREE = "Free",
}

export enum levelDigimon {
  ROOKIE = "Rookie",
  CHAMPION = "Champion",
  ULTIMATE = "Ultimate",
  MEGA = "Mega",
  ARMOR = "Armor",
}

export enum stagePokemon{
  BASIC = "Básico",
  STAGE1 = "Stage 1",
  STAGE2 = "Stage 2",
}

export enum typePoke{
  PLANTA = "Planta",
  FUEGO = "Fuego",
  AGUA = "Agua",
  ELECTRICO = "Eléctrico",
//  LUCHA = "Lucha",
  PSIQUICO = "Psíquico",
  NORMAL = "Normal",
//  VOLADOR = "Volador",
//  VENENO = "Veneno",
//  BICHO = "Bicho",
//  ROCA = "Roca",
//  TIERRA = "Tierra",
  HADA = "Hada",
//  FANTASMA = "Fantasma",
  ACERO = "Acero",
  DRAGON = "Dragon",
//  OSCURIDAD = "Oscuridad",
  HIELO = "Hielo",
  SINIESTRO = "Siniestro",
}
