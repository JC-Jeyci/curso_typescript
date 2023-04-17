(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase()
        } else {
            return `${firstName} ${lastName || 'no last name'}`
        }
    }

    const name = fullName('Tony', 'start', true)

    console.log({ name });

})()