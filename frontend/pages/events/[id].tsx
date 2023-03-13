import { API_URL } from "@/config/index";
import { EventType } from "types/types";
import Layout from "../../components/Layout";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

interface IEventPageProps {
  evt: EventType;
}

export default function EventPage({ evt }: IEventPageProps) {
  const deleteEvent = () => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
            <a href="#" className={styles.delete} onClick={deleteEvent}>
              <FaTimes /> Delete Event
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }: any) {
  const res = await fetch(`${API_URL}/events?slug=${id}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
