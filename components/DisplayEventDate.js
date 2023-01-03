export default function DisplayEventDate({ start, end }) {
  const startObj = new Date(Date.parse(start))
  const endObj = new Date(Date.parse(end))
  const dateStr = startObj.toLocaleDateString("en-GB", { dateStyle: "long" })
  const startTimeStr = startObj.toLocaleTimeString("en-GB", { timeStyle: "short" })
  const endTimeStr = endObj.toLocaleTimeString("en-GB", { timeStyle: "short" })

  return (
    <p className="event-date">
      {dateStr} at {startTimeStr} to {endTimeStr}
    </p>
  )
}
