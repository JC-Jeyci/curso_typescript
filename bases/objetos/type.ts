(() => {

    type Hero = {
        name: string,
        age?: number,
        power: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power: ['Súper velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 50,
        power: ['Súper velocidad'],
        getName() {
            return this.name
        },
    }

    console.log(superman.getName?.());

})()