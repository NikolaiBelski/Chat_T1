import { config, DotenvParseOutput } from "dotenv";
import { IconfigInterface } from "./config.interface";


export class ConfigService implements IconfigInterface {
    private config: DotenvParseOutput;
    constructor() {
    const {error, parsed} = config();
    if(error) {
        throw new Error('Не найден файд .env')
    }
    if(!parsed) {
        throw new Error('Пустой файл .env')
    }
    this.config = parsed

    }
    get(key: string): string {
        const res = this.config[key];
        if(!res) {
            throw new Error('Данный ключ не найден')
        }
        return res
    }
    
}