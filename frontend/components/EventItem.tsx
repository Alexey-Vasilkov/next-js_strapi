import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import { EventType } from "types/types";

interface IEventItemProps {
  evt: EventType;
}

export default function EventItem({ evt }: IEventItemProps) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
          alt="event image"
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.id}`} className="btn">
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
