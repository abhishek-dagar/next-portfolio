import Link from "next/link";
import React from "react";

function Button({
  text,
  link,
  className,
  target,
}: {
  text: string;
  link: string;
  className?: string;
  target?: string;
}) {
  return (
    <Link className={"btn " + className} href={link} target={target}>
      {text}
    </Link>
  );
}

export default Button;
