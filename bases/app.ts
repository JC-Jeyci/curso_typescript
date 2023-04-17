(() => {

    // Tipos
    const batman: string = 'Bruce'
    const superman: string = 'Clark'

    const existe: boolean = false

    // Tuplas
    const parejaHeroes: [string, string] = [batman, superman]
    const villano: [string, number, boolean] = ['Lex Lutor', 5, true]

    // Arreglos
    const aliados: (string)[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash']

    // Enumeraciones
    enum powerHero {
        acuaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
    }

    const fuerzaFlash: powerHero = powerHero.flash
    const fuerzaSuperman: powerHero = powerHero.superman
    const fuerzaBatman: powerHero = powerHero.batman
    const fuerzaAcuaman: powerHero = powerHero.acuaman

    // Retorno de funciones
    function activar_batiseñal(): string {
        return 'activada'
    }

    function pedir_ayuda(): void {
        console.log('Auxilio!!!');
    }

    // Aserciones de tipo
    const poder: any = '100'
    const largoDelPoder: number = (poder as string).length
    console.log(largoDelPoder);



})()
