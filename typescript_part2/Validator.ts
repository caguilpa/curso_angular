import { ValidatorInterface } from "./ValidatorInterface";

export class Validator implements ValidatorInterface {
    validateString(n: any): boolean {
        return n instanceof String;
    }
    validateNumber(n: any): boolean {
        return n instanceof Number;
    }
}