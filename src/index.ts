import { ExtendedClient } from "./structs/types/ExtendedClient";
export * from "colors";

const client = new ExtendedClient();
client.start();

export { client }

client.on("ready", () => {
    console.log("Bot Online".green);
})

client.on("messageCreate", (message) => {
    if (message.author.id == client.user?.id) return;
    message.reply({
        content: `Olá ${message.author.username}!`
    })
})