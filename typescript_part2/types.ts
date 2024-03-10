/**
 * Strings
 * Boolean
 * Number
 * Array
 * Tuplas
 * Enums
 * Any
 * Void
 */

let nombre_variable: string = 'David';
let edad: number = 25;

let lista: number[] = [1,2,3];
let lista2: Array<number> = [1,2,3];

let tupla: [string, number];
tupla = ['David', 25];

enum Animales  {Perro, Gato, Pajaro};
let a: Animales = Animales.Gato;

let cualquier: any = true;
let nada: void = undefined;

/*Clases*/
class NombreClase {
    private _propiedad: string;
    constructor(msg: string) {
        this._propiedad = msg;
    }

    get propiedad(): string {
        return this._propiedad;
    }

    set propiedad(propiedad: string) {
        this._propiedad = propiedad;
    }

    printMsg(): string {
        return "Este mensaje dice: " + this.propiedad;
    }
}

/*Interfaces*/
interface LogInterface {
    msg: string;
    date?: number;
}

function Logger(log: LogInterface) {
    console.log(log.msg);
    console.log(log.date);
}

/*Módulos y Namespace*/
import {Validator} from './path';

export class Validator {
    validate(n: number): boolean {
        return n > 5;
    }
}

namespace Validacion {
    export interface NumberValidator {
        isValid(n: number): boolean;
    }

    export class validationNumberLength implements NumberValidator {
        isValid(n: number): boolean {
            return true;
        }
    }
}

let validador: Validacion.NumberValidator = new Validacion.validationNumberLength();

/*Genéricos*/
function compare<T>(arg1: T, arg2: T): T {
    if(arg1 > arg2)
        return arg1;
    else
        return arg2;
}

function compareAny(arg1: any, arg2: any): any {
    return arg1;
}
