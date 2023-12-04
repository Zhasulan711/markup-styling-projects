import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full flex flex-col items-center">
        <div
          className="h-[350px] bg-[#CCCCCC] flex justify-center items-center
        sm-min:w-[350px] xl:w-[1110px]"
        >
          <span className="text-3xl text-[#8D8D8D] font-medium">Main page</span>
        </div>
        <h2
          className="text-3xl pt-[45px] border-b h-[90px]
        xl:pr-[710px]"
        >
          Welcome to Modern Business
        </h2>

        <section
          className="flex pt-[20px] 
        sm-min:flex-col xl:flex-row
        sm-min:space-y-[20px] xl:space-y-[0px] 
        xl:space-x-[30px] "
        >
          <article className="flex flex-col w-[350px]">
            <h3 className="bg-[#F5F5F5] h-[58px] pt-5 pl-4 text-lg border-[#E1E1E1] border rounded-t">
              # Tailwind v3.2.0
            </h3>
            <div className="rounded-b border h-[170px] flex flex-col space-y-[11px] border-[#DADADA text-[#7B7B7B]">
              <p className="pl-[15px] pt-[15px] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Itaque, optio corporis quae nulla aspernatur in
                <br /> alias at numquam rerum ea excepturi expedita
                <br /> tenetur assumenda voluptatibus eveniet incidunt
                <br />
                dicta nostrum quod?
              </p>
              <Link
                href="/more"
                className="ml-[15px] w-[100px] h-[30px] rounded border pl-[15px] p-1 text-sm border-[#DADADA"
              >
                Learn More
              </Link>
            </div>
          </article>
          <article className="flex flex-col w-[350px]">
            <h3 className="bg-[#F5F5F5] h-[58px] pt-5 pl-4 text-lg border border-[#DADADA rounded-t">
              # Free & Open Source
            </h3>
            <div className="rounded-b border h-[170px] flex flex-col space-y-[11px] border-[#DADADA text-[#7B7B7B]">
              <p className="pl-[15px] pt-[15px] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Itaque, optio corporis quae nulla aspernatur in
                <br /> alias at numquam rerum ea excepturi expedita
                <br /> tenetur assumenda voluptatibus eveniet incidunt
                <br />
                dicta nostrum quod?
              </p>
              <Link
                href="/more"
                className="ml-[15px] w-[100px] h-[30px] rounded border pl-[15px] p-1 text-sm border-[#DADADA"
              >
                Learn More
              </Link>
            </div>
          </article>
          <article className="flex flex-col w-[350px]">
            <h3 className="bg-[#F5F5F5] h-[58px] pt-5 pl-4 text-lg border border-[#DADADA rounded-t">
              # Easy to Use
            </h3>
            <div className="rounded-b border h-[170px] flex flex-col space-y-[11px] border-[#DADADA text-[#7B7B7B]">
              <p className="pl-[15px] pt-[15px] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Itaque, optio corporis quae nulla aspernatur in
                <br /> alias at numquam rerum ea excepturi expedita
                <br /> tenetur assumenda voluptatibus eveniet incidunt
                <br />
                dicta nostrum quod?
              </p>
              <Link
                href="/more"
                className="ml-[15px] w-[100px] h-[30px] rounded border pl-[15px] p-1 text-sm"
              >
                Learn More
              </Link>
            </div>
          </article>
        </section>

        <h2
          className="text-3xl pt-[45px] border-b h-[90px]
        sm-min:pr-[120px] xl:pr-[880px]"
        >
          Portfolio Heading
        </h2>
        <figure className="grid xl:grid-cols-3 gap-[30px] mt-4">
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
          <div className="h-[200px] w-[350px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-3xl font-medium">
            700x450
          </div>
        </figure>

        <h2 className="text-3xl xl:pr-[750px] pt-[45px] border-b h-[90px]">
          Modern Business Features
        </h2>
        <div
          className="flex xl:-space-x-[450px] pt-[20px] text-sm border-b pb-5 text-[#7B7B7B]
        sm-min:flex-col xl:flex-row"
        >
          <section className="flex flex-col space-y-[20px] xl:pr-[495px]">
            <h3 className="text-[#7B7B7B]">
              The Modern Business template by Start Bootstrap includes:
            </h3>
            <ul className="pl-[45px] list-disc">
              <li>
                <span className="font-bold text-black">Tailwind</span> v3.2.0
              </li>
              <li className="text-[#7B7B7B]">jQuery v1.11.0</li>
              <li className="text-[#7B7B7B]">Font Awesome v4.1.0</li>
              <li className="text-[#7B7B7B]">
                Working PHP contact form with validation
              </li>
              <li className="text-[#7B7B7B]">
                Unstyled page elements for easy customization
              </li>
              <li className="text-[#7B7B7B]">17 HTML pages</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, omnis doloremque
              <br /> non cum id reprehenderit, quisquam totam aspernatur tempora
              minima unde aliquid ea
              <br /> culpa sunt. Reiciendis quia dolorum ducimus unde.
            </p>
          </section>
          <figure
            className="h-[350px] w-[525px] bg-[#CCCCCC] flex items-center justify-center text-[#919191] text-4xl font-medium
        sm-min:mt-4 xl:mt-0"
          >
            700x450
          </figure>
        </div>

        <div
          className="border border-[#DEDEDE] rounded bg-[#F5F5F5] flex items-center
        sm-min:mt-[20px] xl:mt-[45px]
        sm-min:flex-col xl:flex-row 
        xl:justify-center
        sm-min:space-y-[5px] xl:space-y-0 xl:space-x-[70px]
        sm-min:w-[520px] xl:w-[1100px]
        sm-min:h-[130px] xl:h-[90px]
        sm-min:mr-[10px] xl:mr-0"
        >
          <p
            className="text-sm text-[#7B7B7B]
          sm-min:pt-2 xl:pt-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            expedita, saepe, vero rerum deleniti beatae <br />
            veniam harum neque nemo presentium cum alias asperiores commodi.
          </p>
          <Link
            href="/call"
            className="border bg-white flex items-center justify-center w-[310px] h-[50px] rounded border-[#DEDEDE]"
          >
            Call to Action
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
