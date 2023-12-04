import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-[60px] items-center text-center pt-[140px]">
      <div>
        <h1 className="text-5xl"><span className="text-[#FD8E75]">Working</span> Process</h1>
        <p className="text-[#8D8D8D] pt-[30px]">
          Lorem ipsum dolor sit amet consectet ur adipiscing elit Vestibulum
          bibend um vestibulum.
        </p>
      </div>

      <section className="flex 
      sm-little:flex-col sm-min:flex-col xl:flex-row pc-sm:flex-row 
      sm-little:items-center sm-min:items-center xl:justify-center pc-sm:justify-center 
      sm-little:space-y-[20px] sm-min:space-y-[20px] xl:space-x-[30px] xl:space-y-0 pc-sm:space-x-[30px]">
        <div className="w-[260px] h-[260px] bg-[#4EB1F6] flex flex-col items-center pt-[50px] ">
          <figure className="h-[70px]">
            <img src="./ic-1.png" alt="magnitude"/>
          </figure>
          <article>
            <h2 className="text-[#F7EFF8]">Koc Koi Tomi</h2>
            <p className="text-[#F7EFF8] pt-[20px]"> Lorem ipsum is dummy lorem very dumy</p>
          </article>
        </div>
        <div className="w-[260px] h-[260px] bg-[#C04AF9] flex flex-col items-center pt-[50px]">
          <figure className="h-[70px]">
            <img src="./ic-2.png" alt="zhuk"/>
          </figure>
          <article>
            <h2 className="text-[#F7EFF8]">Kotmona Set</h2>
            <p className="text-[#F7EFF8] pt-[20px]">Lorem ipsum is dummy you lorem very dumyl is</p>
          </article>
        </div>
        <div className="w-[260px] h-[260px] bg-[#817EFF] flex flex-col items-center pt-[50px]">
          <figure className="h-[70px]">
            <img src="./ic-3.png" alt="set"/>
          </figure>
          <article>
            <h2 className="text-[#F7EFF8]">Setting Koire</h2>
            <p className="text-[#F7EFF8] pt-[20px]">Lorem ipsum is dummy lorem very yLorem ipsus</p>
          </article>
        </div>
        <div className="w-[260px] h-[260px] bg-[#F74770] flex flex-col items-center pt-[50px]">
          <figure className="h-[70px]">
            <img src="./ic-4.png" alt="photo"/>
          </figure>
          <article>
            <h2 className="text-[#F7EFF8]">Ko Image Lara</h2>
            <p className="text-[#F7EFF8] pt-[20px]"> Lorem ipsum is dummy ry dumyLorem ipsum is</p>
          </article>
        </div>
      </section>
    </main>
  );
}
