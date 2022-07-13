import Slimbot from 'slimbot'
import dotenv from 'dotenv'
dotenv.config()

const {TG_BOT_TOKEN, TG_CHAT_ID} = process.env

const slimbot = new Slimbot(TG_BOT_TOKEN);

const createMessage = (message) => {
    return 'A new TODO was created: \n' + JSON.stringify(message, null, 4) + '\n'
}

export const sendMessage = (message) => {
    slimbot.sendMessage(TG_CHAT_ID, createMessage(message))
}