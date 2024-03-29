import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import Link from "next/link";
import { EventType } from "types/types";

interface IHomeProps {
  events: EventType[];
}

export default function HomePage({ events }: IHomeProps) {
  return (
    <Layout>
      <h1>Upcoming Club Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt: EventType) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events" className="btn-secondary">
          View All Events
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
