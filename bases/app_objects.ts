// Objectos
type carro = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
}

const batimovil: carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
}

const bumblebee: carro = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");

    }
}

// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
    nombre: string,
    edad: number | undefined,
    mutante: boolean
}

const villanos: Villano[] = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }
]

// Multiples tipos
// Cree dos tipos, uno para charles y otra para apocalipsis

type Charles = {
    poder: string,
    estatura: number
}

type Apocalipsis = {
    lider: boolean,
    mienbros: string[]
}

const charles: Charles = {
    poder: "psiquico",
    estatura: 1.78
}

const apocalipsis: Apocalipsis = {
    lider: true,
    mienbros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis

mystique = charles
mystique = apocalipsis