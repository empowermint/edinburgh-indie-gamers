exports.handler = async (event, context) => {
  try {
    const response = await fetch(`https://discord.com/api/v10/guilds/${process.env.DISCORD_GUILD_ID}/scheduled-events`, { // Docs: https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
      headers: {
        'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'DiscordBot (https://edinburghindiegamers.com, 1.0.0)'
      }
    })
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({
        events: data
      })
    }
  } catch (e) {
    console.error(e)
    
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: e
      })
    }
  }
}
