function sumar(a: number, b: number): number {
    return a + b
}

const contar = (heroes: string[]): number => {
    return heroes.length;
}

let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"]
contar(superHeroes)

const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}

llamarBatman()

const unirHeroes = (...personas: string[]): string => {
    return personas.join(",")
}

const noHaceNada = (numero: number, texto: string, estado: boolean, arreglo: string[]): void => { }

let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: string[]) => void;

noHaceNadaTampoco = noHaceNada