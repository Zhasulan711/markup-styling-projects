import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full">
        <div className="relative h-[270px]">
          <img
            src="./slider-pic.jpg"
            alt="slide"
            className="w-full h-[270px] absolute"
          />
          <h1
            className="absolute font-bold w-full pt-[180px] text-center 
          sm-lower:text-xl md:text-3xl"
          >
            <span className="text-[#5CBC30]">WHERE WILL</span> GREAT WORK <br />{" "}
            <span className="text-[#5CBC30]">TAKE YOU?</span>
          </h1>
        </div>

        <section className="bg-[#F9F9F9] h-[297px] flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center space-y-[30px]">
            <div className="flex flex-col items-center space-y-[5px]">
              <h2 className="font-bold text-3xl">
                WE GIVE <span className="text-[#5CBC30]">BEST SERVICES</span>
              </h2>
              <p className="text-[7px] text-[#8F8F8F]">
                At vero eos et accusamus et usto odio dianissimos ducimus qui
                blanditiis praesentium voluntatum deleniti ataue corruot
                <br />
                quos dolores et quas molestas excetur sint occaecau cupiditate
                non providen
              </p>
            </div>
            <div className="flex flex-row space-x-[40px] justify-center">
              <div className="flex flex-col items-center space-y-[10px]">
                <figure className="h-[25px]">
                  <img src="./ic-1.png" className="w-[30px] h-[20px]" />
                </figure>
                <h3 className="text-[10px] text-[#76C457]">
                  NEX XAV OFVISIONI
                </h3>
                <p className="text-[7px] text-[#8F8F8F]">
                  lemporibus autem quibusdam et aut <br />
                  officiis debitis aut rerum necessitatibus <br />
                  saeve eveniet ut et voluntates
                </p>
              </div>
              <div className="flex flex-col items-center space-y-[10px]">
                <figure className="h-[25px]">
                  <img src="./ic-2.png" className="w-[30px] h-[20px]" />
                </figure>
                <h3 className="text-[10px] text-[#76C457]">
                  NEX XAV OFVISIONI
                </h3>
                <p className="text-[7px] text-[#8F8F8F]">
                  lemporibus autem quibusdam et aut <br />
                  officiis debitis aut rerum necessitatibus <br />
                  saeve eveniet ut et voluntates
                </p>
              </div>
              <div className="flex flex-col items-center space-y-[10px]">
                <figure className="h-[25px]">
                  <img src="./ic-3.png" className="w-[30px] h-[20px]" />
                </figure>
                <h3 className="text-[10px] text-[#76C457]">
                  NEX XAV OFVISIONI
                </h3>
                <p className="text-[7px] text-[#8F8F8F]">
                  lemporibus autem quibusdam et aut <br />
                  officiis debitis aut rerum necessitatibus <br />
                  saeve eveniet ut et voluntates
                </p>
              </div>
              <div className="flex flex-col items-center space-y-[10px]">
                <figure className="h-[25px]">
                  <img src="./ic-4.png" className="w-[30px] h-[20px]" />
                </figure>
                <h3 className="text-[10px] text-[#76C457]">
                  NEX XAV OFVISIONI
                </h3>
                <p className="text-[7px] text-[#8F8F8F]">
                  lemporibus autem quibusdam et aut <br />
                  officiis debitis aut rerum necessitatibus <br />
                  saeve eveniet ut et voluntates
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[220px]">
          <div className="flex flex-row justify-center space-x-[100px] items-center pr-[50px]">
            <figure className="w-[200px] h-[200px] pt-[20px]">
              <img src="./pic-big-1.png" className="w-[180px] h-[180px]" />
            </figure>
            <div className="flex flex-col space-y-[10px]">
              <h4 className="font-bold text-[#8B8B8B] leading-4">
                FIND <span className="text-[#3CB700]">THE PERFECT</span> MATCH{" "}
                <br /> FAST
              </h4>
              <p className="text-[7px] text-[#8F8F8F]">
                Start vour 1ob in hours, not weeks Get a short ist of skilled
                treelancers <br /> instantly, tapping into our hiring know-how
                and matching technology <br /> Interview favorites online and
                hire with the click of a button
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F5] h-[215px] flex items-center justify-center">
          <div
            className="flex flex-row justify-center 
          sm-lower:space-x-[0px] md:space-x-[100px]"
          >
            <div className="flex flex-col space-y-[20px]">
              <h5 className="text-[#848484] font-bold">
                GREAT <span className="text-[#4CB700]">WORK STARTS</span> WITH{" "}
                <br /> GREAT TALENT
              </h5>
              <ul className="list-none flex flex-col space-y-[2px] pr-[114px]">
                <div className="flex flex-row justify-center space-x-[5px]">
                  <figure className="w-[11px] h-[11px] pt-[3px]">
                    <img src="./arrow.png" className="w-[8px] h-[8px]" />
                  </figure>
                  <li className="text-[7px] text-[#7A7A7A] w-[198px]">
                    Get amazing results working with the best programmers
                  </li>
                </div>
                <div className="flex flex-row justify-center space-x-[5px]">
                  <figure className="w-[11px] h-[11px] pt-[3px]">
                    <img src="./arrow.png" className="w-[8px] h-[8px]" />
                  </figure>
                  <li className="text-[7px] text-[#7A7A7A] w-[198px]">
                    Desianers writers and other ton online pros
                  </li>
                </div>
                <div className="flex flex-row justify-center space-x-[5px]">
                  <figure className="w-[11px] h-[11px] pt-[3px]">
                    <img src="./arrow.png" className="w-[8px] h-[8px]" />
                  </figure>
                  <li className="text-[7px] text-[#7A7A7A] w-[198px]">
                    Hire freelancers with confidence, always knowind
                  </li>
                </div>
                <div className="flex flex-row justify-center space-x-[5px]">
                  <figure className="w-[11px] h-[11px] pt-[3px]">
                    <img src="./arrow.png" className="w-[8px] h-[8px]" />
                  </figure>
                  <li className="text-[7px] text-[#7A7A7A] w-[198px]">
                    Their work experience and feedback from other clients
                  </li>
                </div>
                <div className="flex flex-row justify-center space-x-[5px]">
                  <figure className="w-[11px] h-[11px] pt-[3px]">
                    <img src="./arrow.png" className="w-[8px] h-[8px]" />
                  </figure>
                  <li className="text-[7px] text-[#7A7A7A] w-[198px]">
                    Desianers writers and other top online pros
                  </li>
                </div>
              </ul>
            </div>

            <figure>
              <img src="./pic-big-2.png" className="w-[180px] h-[140px]" />
            </figure>
          </div>
        </section>

        <div className="h-[477px] flex flex-col justify-center items-center space-y-[40px]">
          <h6 className="text-[#727272] font-bold">
            RECENT WORK DONE ON{" "}
            <span className="text-[#4CB700]">JOB BOARD</span>
          </h6>
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-1.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  ROUND ICONS DESIGN
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-2.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  STATIONAPY DESIGN
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-3.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  LOGO DESIGN
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-4.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  BRANDING
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-5.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  VISITING CAPN DESIGN
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-6.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  RPOCHUPF DESIGN
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-7.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  RPANDING
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center border border-[#DBDBDB] space-y-[5px] pb-[5px]">
              <figure>
                <img src="./pic-8.jpg" className="w-[130px] h-[90px]" />
              </figure>
              <div className="flex flex-col items-center space-y-[10px]">
                <button className="text-[#FFFFFF] font-bold text-[7px] bg-[#2BA7DF] w-[62.5px] h-[20px] flex justify-center items-center">
                  <Link href="/">GRAPHICS</Link>
                </button>
                <span className="text-[#4D4D4D] text-[7px] font-bold">
                  STATIONAPY DESIGN
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
