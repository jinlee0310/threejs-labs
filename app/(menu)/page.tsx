import Link from "next/link";
import { MENU_LIST } from "@/constants";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          {MENU_LIST.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
