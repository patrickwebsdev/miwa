import Link from "next/link";
import React from "react";

interface Props {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  href = "",
  onClick,
  children,
  ...props
}: Props) {
  const primary = "bg-primary text-secondary-0 border-primary border";
  const secondary = "bg-secondary-0 text-primary border-secondary-0 border";
  const buttonClasses = `px-5 py-2 w-100 font-medium rounded-full ${
    variant === "primary" ? primary : secondary
  }`;
  return href ? (
    <Link className={buttonClasses} href={href} {...props}>
      {children}
    </Link>
  ) : (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
