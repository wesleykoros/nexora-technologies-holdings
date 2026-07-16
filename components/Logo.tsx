import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  className?: string;
};

export function Logo({
  light = true,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Nexora Technologies Holdings LLC"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={
          light
            ? "/brand/nexora-horizontal-light.svg"
            : "/brand/nexora-horizontal-dark.svg"
        }
        alt="Nexora Technologies Holdings LLC"
        width={360}
        height={68}
        priority
        className="h-11 w-auto transition duration-300 hover:opacity-90"
      />
    </Link>
  );
}