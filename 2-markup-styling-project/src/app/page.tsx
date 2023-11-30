import Image from "next/image";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <figure>
        <img
          src="./main-pic.jpg"
          alt="main-pic with person"
          className="w-full"
        />
      </figure>

      <main className="w-full h-[600px]">
        <section>
          <div className="pt-[100px] text-center leading-8">
            <h2 className="text-[#02918D] text-4xl font-bold">ABOUT ME</h2>
            <p className="pt-[35px] text-[#ABADB1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
              <br />
              enim ad minim veniam,{" "}
              <span className="text-[#61686E]">
                quis nostrud exercitation ullamco
              </span>{" "}
              laboris nisi ut aliquip ex ea commodo consequat duis aute <br />{" "}
              irure dolor.
            </p>
          </div>

          <div className=" w-full flex flex-row space-x-[50px] justify-center text-center pt-[70px]">
            <div className="flex flex-col items-center">
              <figure className="h-[30px]">
                <img src="./ic-lamp.png" alt="lamp" />
              </figure>
              <article className="flex flex-col items-center space-y-[30px] pt-[30px]">
                <h3 className="text-[#61686E]">Title goes here</h3>
                <p className="text-[#ABADB1]">
                  onsectetur adipisicing elit, sedo <br /> eiusmod tempor incidi{" "}
                  <br /> et dolorerserss eerhfre mag.
                </p>
              </article>
            </div>
            <div className="flex flex-col items-center ">
              <figure className="h-[30px]">
                <img src="./ic-pencil.png" alt="pencil" />
              </figure>
              <article className="flex flex-col items-center space-y-[30px] pt-[30px]">
                <h3 className="text-[#61686E]">Title goes here</h3>
                <p className="text-[#ABADB1]">
                  onsectetur adipisicing elit, sedo <br /> eiusmod tempor incidi{" "}
                  <br /> et dolorerserss eerhfre mag.
                </p>
              </article>
            </div>
            <div className="flex flex-col items-center ">
              <figure className="h-[30px]">
                <img src="./ic-set.png" alt="set" />
              </figure>
              <article className="flex flex-col items-center space-y-[30px] pt-[30px]">
                <h3 className="text-[#61686E]">Title goes here</h3>
                <p className="text-[#ABADB1]">
                  onsectetur adipisicing elit, sedo <br /> eiusmod tempor incidi{" "}
                  <br /> et dolorerserss eerhfre mag.
                </p>
              </article>
            </div>
            <div className="flex flex-col items-center">
              <figure className="h-[30px]">
                <img src="./ic-laptop.png" alt="laptop" className="pt-[8px]" />
              </figure>
              <article className="flex flex-col items-center space-y-[30px] pt-[30px]">
                <h3 className="text-[#61686E]">Title goes here</h3>
                <p className="text-[#ABADB1]">
                  onsectetur adipisicing elit, sedo <br /> eiusmod tempor incidi{" "}
                  <br /> et dolorerserss eerhfre mag.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
