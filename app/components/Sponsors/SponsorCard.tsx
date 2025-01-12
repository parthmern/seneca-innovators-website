import React from "react";
import Image from "next/image";

interface SponsorCardProps {
  src: string;
  alt: string;
  href: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="h-[200px] hover:h-[215px] w-[400px] hover:w-[430px] transition-all duration-300 p-3 rounded-xl bg-white flex items-center justify-center shadow-seneca-bright-red">
        <Image height={300} width={300} alt={alt} src={src} />
      </div>
    </a>
  );
};

export default SponsorCard;
