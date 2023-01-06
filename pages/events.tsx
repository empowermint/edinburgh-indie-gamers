import Layout from "../components/Layout"
import DisplayDate from "../components/DisplayEventDate"
import EventsIntro from "../components/EventsIntro.mdx"

import {  GetServerSideProps } from 'next';
interface Event {
  id: Number,
  name: String,
  scheduled_start_time: String,
  scheduled_end_time: String,
  description: String
}

export default function Events({ events }: { events: Event[]}) {
  const meta = {
    title: "Events",
    description: "Edinburgh Indie Gamers' vibrant event calendar"
  }
  
  return (
    <Layout meta={meta}>
      <EventsIntro />
      <h2 className="event-title">Upcoming Events</h2>
      <ul className="event-list">
        {events.map((event) =>
          <li key={event.id.toString()}>
            <h3>{event.name}</h3>
            <DisplayDate start={event.scheduled_start_time} end={event.scheduled_end_time} />
            <p className="event-description">{event.description}</p>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(`https://discord.com/api/v10/guilds/${process.env.DISCORD_GUILD_ID}/scheduled-events`, { // Docs: https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
      headers: {
        'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'DiscordBot (https://edinburghindiegamers.com, 1.0.0)'
      }
    })
    const data: Array<Event> = await response.json()

    return {
      props: {
        events: data
      }
    }
  } catch (e) {
    console.error(e)
  }
}
