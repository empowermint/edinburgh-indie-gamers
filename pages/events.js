import Layout from "../components/Layout.js"
import EventsIntro from "../components/EventsIntro.mdx"

export default function Events(props) {
  const meta = {
    title: "Events",
    description: "Edinburgh Indie Gamers' vibrant event calendar"
  }
  
  return (
    <Layout meta={meta}>
      <EventsIntro />
      <h4>Discord Events List</h4>
      <p>{props.testString}</p>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.URL}/.netlify/functions/fetch-events`)
  if (!response.ok) console.error("Fetch response status: " + response.status)
  const data = await response.json()

  return {
    revalidate: 86400,
    props: {
      testString: data.testString
    }
  }
}
