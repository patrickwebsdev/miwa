import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      className="h-14 object-contain"
      alt="MIWA - Poda y servicios forestales"
      width={80}
      height={80}
    />
  );
};
export default Logo;
