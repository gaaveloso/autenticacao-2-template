import { BaseError } from "./BaseError";

export class ForbidenError extends BaseError {
    constructor(
        message: string = "Usuario não autenticado" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(403, message)
    }
}