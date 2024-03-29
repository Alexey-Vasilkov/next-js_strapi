import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import { EventType } from "types/types";
import Layout from "../../components/Layout";

interface IEventsPageProps {
  events: EventType[];
}

export default function EventsPage({ events }: IEventsPageProps) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt: EventType) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
