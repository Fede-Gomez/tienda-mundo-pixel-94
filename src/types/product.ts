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
  level?: level; // Nivel del Digimon (Rookie, Champion, Ultimate, Mega)
  attribute?: attribute; // Atributo del Digimon (Vaccine, Data, Virus, Free)
}

export enum attribute {
  VACCINE = "Vacuna",
  DATA = "Data",
  VIRUS = "Virus",
  FREE = "Free",
}

export enum level {
  ROOKIE = "Rookie",
  CHAMPION = "Champion",
  ULTIMATE = "Ultimate",
  MEGA = "Mega",
  ARMOR = "Armor",
}