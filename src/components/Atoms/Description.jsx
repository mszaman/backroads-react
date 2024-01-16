import { Children } from "react";

export default function Description({
  size = "text-sm",
  mx = "",
  mb = "mb-5",
  width = "",
  color = "text-grey-5",
  spacing = "tracking-[0.25rem]",
  className = "",
  children,
}) {
  return (
    <p
      className={`${mb} ${mx} ${width} ${size} ${spacing} ${color} ${className}`}
    >
      {children}
    </p>
  );
}
