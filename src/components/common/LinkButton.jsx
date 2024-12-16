import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LinkButton = ({href,title,className}) => {
  return (
    <Link
      className={`w-80 h-11 rounded-[50px] text-white flex items-center justify-center gap-y-2  py-3  bg-dark-brown  text-xl font-semibold tracking-wide text-center
      ${className}
      `}
      href={href}
    >
      {title}
      <ArrowRight size={24} />
    </Link>
  );
};

export default LinkButton;
