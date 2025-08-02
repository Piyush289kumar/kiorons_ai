import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/video.png"
        alt="Hero Video"
        className="object-cover w-full h-full"
        width={8000}
        height={8000}
        priority
      />
    </>
  );
}
