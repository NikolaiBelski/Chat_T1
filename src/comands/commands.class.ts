import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interfase";


export abstract class Commond {
    constructor(public bot:Telegraf<IBotContext>) {}
    abstract handle():void 
}