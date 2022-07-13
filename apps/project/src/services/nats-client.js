import NATS from "nats"

let nc, sc

export const connect = async () => {
  try {
    const server = "http://todo-nats:4222"
    nc = await NATS.connect({ servers: server });
    console.log(`Connected to ${server}`)
    sc = NATS.StringCodec();
  } catch (error) {
    console.log(error.message)
  }
}

export const publish = (newTodo) => {
    nc.publish("todos", sc.encode(JSON.stringify(newTodo)));
    console.log('new todo published.');
}