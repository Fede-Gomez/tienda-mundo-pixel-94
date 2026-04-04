

const VALOR_CADA_HAMMA = 6;
const VALOR_MANO_DE_OBRA = 2500;
const COSTE_PACKAGING = 200;

export const calcularPrecio = (totalHammas: number, minutosParaHacerlo: number): number => {
    const costeHammas = Math.ceil((totalHammas * VALOR_CADA_HAMMA) / 100) * 100;
    const manoDeObraPorMinutos = Math.ceil(((minutosParaHacerlo / 60) * VALOR_MANO_DE_OBRA) / 100) * 100;
    const totalDeHammas = costeHammas + manoDeObraPorMinutos;
    return totalDeHammas + COSTE_PACKAGING;
}