import {Usuario} from './Usuario';
import {Validator} from './Validator';


function ejecutarPrueba(){
    let usuario: Usuario = new Usuario('Prueba', 0);
    let validador: Validator = new Validator();
    
    let edadIncorrecta = '26';
    let edadCorrecta = new Number(26);

    let nombreIncorrecto = 0;
    let nombreCorrecto = new String("Cristóbal");

    if(validador.validateNumber(edadIncorrecta)){
        console.log('No funciona bien el validador de numeros')
    }else{
        console.log('Funciona el validador de numeros')
    }

    if(validador.validateNumber(edadCorrecta)){
        console.log('Funciona el validador de numeros y se le asigna al usuario');
        usuario.edad = edadCorrecta;
        console.log('Edad del usuario: ' + usuario.edad);

    }else{
        console.log('No funciona el validador de numeros')
    }

    if(validador.validateString(nombreIncorrecto)){
        console.log('No funciona bien el validador de String')
    }else{
        console.log('Funciona el validador de String')
    }

    if(validador.validateString(nombreCorrecto)){
        console.log('Funciona el validador de String y se le asigna al usuario');
        usuario.nombre = nombreCorrecto;
        console.log('Nombre del usuario: ' + usuario.nombre);

    }else{
        console.log('No funciona el validador de String')
    }

}

ejecutarPrueba();