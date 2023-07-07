import { Context } from "telegraf";

export interface ISessionData {
    coureLike:boolean
}

export interface IBotContext extends Context {
    session: ISessionData
}