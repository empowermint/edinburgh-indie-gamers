import Layout from "../components/Layout.js"
import DisplayDate from "../components/DisplayEventDate.js"
import EventsIntro from "../components/EventsIntro.mdx"

export default function Events(props) {
  const meta = {
    title: "Events",
    description: "Edinburgh Indie Gamers' vibrant event calendar"
  }
  
  return (
    <Layout meta={meta}>
      <EventsIntro />
      <h2 className="event-title">Upcoming Events</h2>
      {console.dir(props)}
      <ul className="event-list">
        {props.events.map((event) =>
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
  const response = await fetch('http://localhost:8888/.netlify/functions/fetch-events')
  if (!response.ok) console.error("Fetch response status: " + response.status)
  const data = await response.json()

  return {
    revalidate: 86400,
    props: {
      events: data.events
    }
  }
}
