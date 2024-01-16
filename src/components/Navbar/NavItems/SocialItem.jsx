import { socialItems } from "../../../data";

export default function SocialItem({ className }) {
  return (
    <ul className={className}>
      {socialItems.map((si) => (
        <li key={si.id}>
          <a href={si.href}>
            <i className={si.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
