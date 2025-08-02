import Image from "next/image";

export default function Home() {
  return (
    //     <>
    //

    //      <Image
    //       src="/images/video.png"
    //       alt="Hero Video"
    //       className="object-cover w-full h-full"
    //       width={800}
    //       height={800}
    //       priority
    //     />

    //      <Image
    //       src="/images/video.png"
    //       alt="Hero Video"
    //       className="object-cover w-full h-full"
    //       width={800}
    //       height={800}
    //       priority
    //     />
    // </>

    <>
      {/* <Image
        src="/images/video.png"
        alt="Hero Video"
        className="object-cover w-full h-full"
        width={800}
        height={800}
        priority
      /> */}
      <div className="h-auto flex justify-center mx-auto">
        <div className="bg-amber-50 w-10 h-[300px]"></div>
        <div className="bg-red-800 w-10 h-[300px]"></div>
        <div className="bg-green-900 w-10 h-[300px]"></div>
        <div className="bg-yellow-500 w-10 h-[300px]"></div>
        <div className="bg-amber-700 w-10 h-[300px]"></div>
        <div className="bg-blue-700 w-10 h-[300px]"></div>
        <div className="bg-yellow-50 w-10 h-[300px]"></div>
        <div className="bg-purple-800 w-10 h-[300px]"></div>        
      </div>
      
    </>
  );
}
