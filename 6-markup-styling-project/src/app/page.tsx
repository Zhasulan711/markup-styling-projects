import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full">
        <div className="relative flex flex-col items-center text-center h-[644px]">
          <img src="./promo.jpg" className="w-full h-[644px] absolute" />
          <div className="absolute pt-[80px]">
            <div className="flex flex-col -space-y-[10px]">
              <h2 className="text-[#4F4C69]">WE ARE</h2>
              <div className="flex flex-col -space-y-[20px]">
                <h2
                  className="text-[#4F4C69] font-bold
                sm-lower:text-[60px] md:text-[90px]"
                >
                  STUDIO BANX
                </h2>

                <p
                  className="border-b-2 border-[##FBF9FA] pb-[15px] text-[#4F4C69] font-semibold
                sm-lower:text-[8px] md:text-xs"
                >
                  A CREATIVE WEB & PRINT DIGITAL AGENCY BUILT ON METHOD AND
                  CREATIVE JUICES
                </p>
              </div>
              <aside className="flex flex-row justify-center space-x-[15px] pt-[30px]">
                <Link
                  href="/"
                  className="rounded-[20px] h-[30px] w-[150px] flex items-center justify-center bg-[#676382] text-[#FEFEFD] text-xs font-sans"
                >
                  See our work
                </Link>
                <Link
                  href="/"
                  className="rounded-[20px] h-[30px] w-[150px] flex items-center justify-center bg-[#AC96A6] text-[#FEFEFD] text-xs font-sans"
                >
                  meet the team
                </Link>
              </aside>
            </div>
          </div>
        </div>

        <div
          className="bg-[#EBEBEB] flex flex-col items-center text-center pt-10
        sm-lower:h-[700px] md:h-[490px]"
        >
          <div className="flex flex-col items-center -space-y-[8px]">
            <h3 className="text-[#504E6B] text-[12px]">CHECK OUT</h3>
            <h3 className="text-[#4F4C69] font-bold text-[45px]">OUR WORX</h3>
          </div>
          <div
            className=" text-center bg-[#EBEBEB] border-[#F9F9F9] border-b-2 border-t-2 pt-5 pb-5 
          sm-lower:grid-cols-2 sm-lower:grid sm-lower:gap-[30px]
          md:flex md:flex-row md:space-x-[20px] md:justify-center"
          >
            <div className="flex flex-col items-center text-left">
              <img
                src="./city-1.jpg"
                alt="city-one"
                className="border-[#EFEFEF] rounded-full w-[110px]"
              ></img>
              <h4 className="pr-[119px] text-[#35325B]">Desire</h4>
              <p className="text-[#908D9B] text-[10px]">
                Lorem ipsum dolor si amet. consectetur <br /> aciniscina eut Dus
                eros noula, lacinia <br /> quis euismod in, dignissim at neque.{" "}
                <br /> Aliquam quis consectetur magna.
              </p>
            </div>
            <div className="flex flex-col items-center text-left">
              <img
                src="./city-2.jpg"
                alt="city-one"
                className="border-[#EFEFEF] rounded-full w-[110px]"
              ></img>
              <h4 className="pr-[94px] text-[#35325B]">Aspiration</h4>
              <p className="text-[#908D9B] text-[10px]">
                Lorem ipsum dolor si amet. consectetur <br /> aciniscina eut Dus
                eros noula, lacinia <br /> quis euismod in, dignissim at neque.{" "}
                <br /> Aliquam quis consectetur magna.
              </p>
            </div>
            <div className="flex flex-col items-center text-left">
              <img
                src="./city-3.jpg"
                alt="city-one"
                className="border-[#EFEFEF] rounded-full w-[110px]"
              ></img>
              <h4 className="pr-[114px] text-[#35325B]">Design</h4>
              <p className="text-[#908D9B] text-[10px]">
                Lorem ipsum dolor si amet. consectetur <br /> aciniscina eut Dus
                eros noula, lacinia <br /> quis euismod in, dignissim at neque.{" "}
                <br /> Aliquam quis consectetur magna.
              </p>
            </div>
            <div className="flex flex-col items-center text-left">
              <img
                src="./city-4.jpg"
                alt="city-one"
                className="border-[#EFEFEF] rounded-full w-[110px]"
              ></img>
              <h4 className="pr-[130px] text-[#35325B]">Lust</h4>
              <p className="text-[#908D9B] text-[10px]">
                Lorem ipsum dolor si amet. consectetur <br /> aciniscina eut Dus
                eros noula, lacinia <br /> quis euismod in, dignissim at neque.{" "}
                <br /> Aliquam quis consectetur magna.
              </p>
            </div>
          </div>
          <aside className="flex flex-row justify-center space-x-[15px] pt-[30px]">
            <Link
              href="/"
              className="rounded-[20px] h-[30px] w-[150px] flex items-center justify-center bg-[#676382] text-[#FEFEFD] text-xs font-sans"
            >
              See our work
            </Link>
            <Link
              href="/"
              className="rounded-[20px] h-[30px] w-[150px] flex items-center justify-center bg-[#AC96A6] text-[#FEFEFD] text-xs font-sans"
            >
              meet the team
            </Link>
          </aside>
        </div>

        <section
          className="flex flex-col items-center space-y-[10px] pt-[40px] bg-[#FFFFFF]
        sm-lower:h-[400px] md:h-[190px]"
        >
          <h5 className="text-[#646479] md:pr-[517px]">
            What makes us so awesome
          </h5>
          <div
            className="flex 
          sm-lower:space-y-[10px] md:space-y-[0px] md:space-x-[15px]
          sm-lower:flex-col md:flex-row
          sm-lower:items-center md:justify-center"
          >
            <div className="flex flex-col items-center space-y-[20px]">
              <p className="text-[#807D8C] text-[10px]">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                Duis eros ligula, lacinia quis euismod in, dignissim at <br />
                neque. Anguam quis consectent magna
              </p>
              <aside className="bg-[#4F4C69] mr-[150px] h-[20px] w-[70px] items-center flex justify-center">
                <Link href="/more" className="text-white text-[10px]">
                  View More
                </Link>
              </aside>
            </div>
            <div className="flex flex-col items-center space-y-[20px]">
              <p className="text-[#807D8C] text-[10px]">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                Duis eros ligula, lacinia quis euismod in, dignissim at <br />
                neque. Anguam quis consectent magna
              </p>
              <aside className="bg-[#4F4C69] mr-[150px] h-[20px] w-[70px] items-center flex justify-center">
                <Link href="/more" className="text-white text-[10px]">
                  View More
                </Link>
              </aside>
            </div>
            <div className="flex flex-col items-center space-y-[20px]">
              <p className="text-[#807D8C] text-[10px]">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                Duis eros ligula, lacinia quis euismod in, dignissim at <br />
                neque. Anguam quis consectent magna
              </p>
              <aside className="bg-[#4F4C69] mr-[150px] h-[20px] w-[70px] items-center flex justify-center">
                <Link href="/more" className="text-white text-[10px]">
                  View More
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
