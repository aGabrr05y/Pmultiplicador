class carro{
    constructor(llantas,puertas,color,año,modelo,retrovisor,ventas){
        this.ruedas = llantas;
        this.puertas= puertas;
        this.color = color;
        this.año = año;
        this.modelo = modelo;
        this.retrovisor= retrovisor;
        this.ventas  = ventas;
        this.informacion = `Soy modelo ${this.modelo} del ${this.año} de color ${this.color}, tengo ${this.ruedas} 
        ruedas, tengo ${this.ventas} ventanas, tengo ${this.puertas} puertas y tengo ${this.retrovisor} retrovisores`;
    }
    mostrarCaracteristicas(){
    document.write(this.informacion + "<br>");
}
}
let hilux = new carro (4,4,"rojo",2017,"Toyota Hilux", 4,4 )
let corolla = new carro (4,4,"Negro",2000,"Corolla", 4,4 )
let rav = new carro (4,4,"Blanco",2019,"Toyota Rav", 4,4 )

hilux.mostrarCaracteristicas()
corolla.mostrarCaracteristicas()
rav.mostrarCaracteristicas()