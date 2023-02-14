//practice one with carz

class carBlueprint {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year

    }


    drive(){
        return console.log(`vroomo`)
    }

}


// let JosesCar = new carBlueprint(`toyota`, `Avalon`, 2015)
// console.log(JosesCar)

let rigosCar = new carBlueprint('Toyota', `Camary`, 2018)
console.log(rigosCar)
rigosCar.drive()