const roblox = require('noblox.js');
const Discord = require('discord.js');
const path = require('path');
require('dotenv').config();

const config = {
    description: 'Posts a shout in the Roblox group.',
    aliases: [],
    usage: '<message>',
    rolesRequired: ['Ranking Permissions', 'Shout Permissions'],
    category: 'Group Shouts'
}

module.exports = {
    config,
    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed();

        let msg = args.join(' ');
        if(!msg) {
            embed.setDescription(`Missing arguments.\n\nUsage: \`${client.config.prefix}${path.basename(__filename).split('.')[0]}${' ' + config.usage || ''}\``);
            embed.setColor(client.config.colors.error);
            embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
            return message.channel.send(embed);
        }

        let shoutInfo;
        try {
            shoutInfo = await roblox.shout(client.config.groupId, msg);
        } catch (err) {
            console.log(`Error: ${err}`);
            embed.setDescription('Oops! An unexpected error has occured. The bot owner can check the bot logs for more information.');
            embed.setColor(client.config.colors.error);
            embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
            return message.channel.send(embed);
        }

        embed.setDescription(`**Success!** Posted a group shout with the following message:\n\`\`\`${msg}\`\`\``);
        embed.setColor(client.config.colors.success);
        embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(embed);

        if(client.config.logChannelId !== 'false') {
            let logEmbed = new Discord.MessageEmbed();
            let logChannel = await client.channels.fetch(client.config.logChannelId);
            logEmbed.setDescription(`**Moderator:** <@${message.author.id}> (\`${message.author.id}\`)\n**Action:** Shout\n**Message:**\n\`\`\`${msg}\`\`\``);
            logEmbed.setColor(client.config.colors.info);
            logEmbed.setAuthor(message.author.tag, message.author.displayAvatarURL());
            logEmbed.setTimestamp();
            return logChannel.send(logEmbed);
        } else {
            return;
        }
    }
}
