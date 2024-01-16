import { menuItems } from "../../../data";

export default function MenuItem({ className }) {
  return (
    <ul className={className}>
      {menuItems.map((mi) => (
        <li key={mi.id}>
          <a
            className="capitalize duration-300 hover:text-primary-4"
            href={mi.href}
          >
            {mi.menuText}
          </a>
        </li>
      ))}
    </ul>
  );
}
