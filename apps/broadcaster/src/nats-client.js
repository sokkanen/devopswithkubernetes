import NATS from "nats"
import { sendMessage } from "./tg-service.js"

export const connectAndSubscribe = async () => {
  const queue = 'broadcasters'
  try {
    const server = "http://todo-nats:4222"
    const nc = await NATS.connect({ servers: server, name: queue });
    console.log(`Connected to ${server}`)
    const sc = NATS.StringCodec();
    const sub = nc.subscribe("todos", { queue: queue });
    console.log('Subscribed to \'todos\'');
    (async () => {
      for await (const m of sub) {
        sendMessage(sc.decode(m.data))
      }
      console.log("subscription closed");
    })()
  } catch (error) {
    console.log(error.message)
  }
}