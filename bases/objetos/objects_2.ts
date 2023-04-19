(() => {

    let flash: { name: string, age?: number, power: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        power: ['Súper velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        //age: 60,
        power: ['Súper fuerza'],
        getName() {
            return this.name
        }
    }

    console.log(flash.getName?.())
})()