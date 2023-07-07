import { Telegraf,Markup } from "telegraf";
import { IBotContext } from "../context/context.interfase";
import { Commond } from "./commands.class";


export class StartCommand extends Commond {
    constructor(bot : Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session)
            ctx.reply('Вам понравился курс',Markup.inlineKeyboard([
                Markup.button.callback('Yes', 'Like'),
                Markup.button.callback('No', 'Dis_Like'),
            ])
            )
        });
        this.bot.action('Like', (ctx) => {
            ctx.session.coureLike = true;
            ctx.editMessageText('круто')
        });
        this.bot.action('Dis_Like', (ctx) => {
            ctx.session.coureLike = false;
            ctx.editMessageText('не круто')
        })
    }

}