import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "ping",
    description: "reply with Pong!",
    type: ApplicationCommandType.ChatInput,
    run({interaction}) {
        const row = new ActionRowBuilder<ButtonBuilder>({
            components: [
                new ButtonBuilder({
                    customId: "test-button",
                    label: "Clique Aqui!",
                    style: ButtonStyle.Success
                })
            ]
        })

        interaction.reply({ephemeral: true, content: "Pong!", components: [row]})
    }
})