import { Telegraf, session } from "telegraf";
import LocalSession from "telegraf-session-local";
import { Commond } from "./comands/commands.class";
import { StartCommand } from "./comands/start.command";
import { HelpCommand } from "./comands/www";

import { IconfigInterface } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interfase";

export class Bot {
bot: Telegraf<IBotContext>
commands:Commond[] = [] 

    constructor(private readonly configservise:IconfigInterface){
        this.bot = new Telegraf<IBotContext>(this.configservise.get('TOKEN'));
        this.bot.use((new LocalSession({ database: 'example_db.json' })).middleware())
}
init() {
    this.commands = [new StartCommand(this.bot), new HelpCommand(this.bot)]
    for(const command of this.commands) {
        command.handle()
    }
    this.bot.launch();

}

}
const bot = new Bot(new ConfigService);
bot.init()