export class Usuario{
    _nombre :String;
    _edad :Number;

    constructor(nombre: String, edad: Number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(): String{
        return this._nombre;
    }

    get edad(): Number{
        return this._edad;
    }

    set nombre(nombre: String){
        this._nombre = nombre;
    }

    set edad(edad: Number){
        this._edad = edad;
    }
}