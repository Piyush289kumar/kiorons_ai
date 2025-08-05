import GlassButton from "./GlassButton";
export default function AboutSection() {
  return (
    <section className="font-gellix w-full xl:px-12 xl:max-w-8xl px-4 md:px-0 py-44 bg-transparent mx-auto">
      <div
        className="
        max-w-6xl mx-auto
        flex flex-col md:flex-row items-start md:items-center
        justify-between
        gap-12
      "
      >
        {/* Left Part */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:px-10">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-zinc-50 mb-2">
            At Kiorons, we build AI to serve humanity’s long-term well-being.
          </h2>
          <GlassButton className="mt-16">
            View Manifesto
          </GlassButton>
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 p-6 text-zinc-100 font-normal text-sm leading-relaxed shadow max-h-80 overflow-y-auto">
          ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
          cnjhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfu
          <br />
          ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
          njhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfuvhfuvhufhvuhf
          vuhfuvhiufhb viufh bu buh fdubh uibhvhfuvhufhvuhf vuhfuvhiufhb viufh
          bu buh fdubh uibh
          <br />
          <br />
          ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
          njhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfuvhfuvhufhvuhf
          vuhfuvhiufhb viufh bu buh fdubh uibhvhfuvhufhvuhf vuhfuvhiufhb viufh
          bu buh fdubh uibh
        </div>
      </div>
    </section>
  );
}
