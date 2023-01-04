import Layout from "../components/Layout.js"
import DisplayDate from "../components/DisplayEventDate.js"
import EventsIntro from "../components/EventsIntro.mdx"

export default function Events({ events = defaultEvent }) {

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
          <li key={event.id}>
            <h3>{event.name}</h3>
            <DisplayDate start={event.scheduled_start_time} end={event.scheduled_end_time} />
            <p className="event-description">{event.description}</p>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.URL_FUNC}.netlify/functions/fetch-events`)
  if (!response.ok) console.error("Fetch response status: " + response.status)
  const data = await response.json()

  return {
    revalidate: 86400,
    props: {
      events: data.events
    }
  }
}

const defaultEvent = [{
  "id": "00",
  "name": "Storygame Hangout",
  "description": "This is our monthly in-person meetup",
  "scheduled_start_time": "2023-01-07T18:30:00+00:00",
  "scheduled_end_time": "2023-01-07T21:30:00+00:00"
}]
