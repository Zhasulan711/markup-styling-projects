import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full">
        <figure>
          <img src="./slide_pic.jpg" className="w-full h-[263px]" />
        </figure>

        <div className="h-[200px] bg-white flex justify-center">
          <section className="flex flex-col items-center text-center space-y-[30px] justify-center">
            <h2 className="text-[#3C0980] text-[20px]">
              La Liberté guidant le peuple
            </h2>
            <p className="text-[#2E2335] text-[15px]">
              La Liberté guidant le peuple est une huile sur toile d'Eugène
              Delacroix réalisée en 1830, inspirée de la révolu
              <br />
              tion des Trois Glorieuses qui s'est passée en 1830. Présentée au
              public au Salon de Paris de 1831 sous le titre <br /> Scènes de
              barricades
            </p>
          </section>
        </div>

        <div className="h-[270px] bg-white border-[#CEDBD4] border-b-2 border-t-2 flex justify-center">
          <section className="flex flex-col items-center text-center justify-center space-y-[20px]">
            <h3 className="text-[#3C0980]">Postérité de l'œuvre</h3>
            <div className="flex flex-row items-center space-x-[10px]">
              <div className="flex flex-col justify-center space-y-[20px] items-center text-center">
                <figure className="h-[35px]">
                  <img
                    src="./ic-1.png"
                    className="w-[30px] rounded-full border-[#5E5A66]"
                  />
                </figure>
                <p className="text-[8px]">
                  Situee dans a salle Molien au musee du louvre
                  <br />
                  l'œuvre est plusieurs fois denlacée nour être prêtée à des
                  <br /> expositions temporaires : une première fois à Tokyo
                  (Japon)
                  <br />
                  en 1999 et une autre à Strasboura en 2004
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-[20px] items-center text-center">
                <figure className="h-[35px]">
                  <img
                    src="./ic-2.png"
                    className="w-[30px] rounded-full border-[#5E5A66]"
                  />
                </figure>
                <p className="text-[8px]">
                  Situee dans a salle Molien au musee du louvre
                  <br />
                  l'œuvre est plusieurs fois denlacée nour être prêtée à des
                  <br /> expositions temporaires : une première fois à Tokyo
                  (Japon)
                  <br />
                  en 1999 et une autre à Strasboura en 2004
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-[20px] items-center text-center">
                <figure className="h-[35px]">
                  <img
                    src="./ic-3.png"
                    className="w-[30px] rounded-full border-[#5E5A66]"
                  />
                </figure>
                <p className="text-[8px]">
                  Situee dans a salle Molien au musee du louvre
                  <br />
                  l'œuvre est plusieurs fois denlacée nour être prêtée à des
                  <br /> expositions temporaires : une première fois à Tokyo
                  (Japon)
                  <br />
                  en 1999 et une autre à Strasboura en 2004
                </p>
              </div>
            </div>
          </section>
        </div>

        <div
          className="bg-white flex flex-col items-center justify-center space-y-[20px]
        sm-lower:h-[730px] md:h-[420px]"
        >
          <h4 className="text-[#836FA2]">Notre Equipe</h4>
          <div className="sm-lower:grid sm-lower:grid-cols-2 gap-[20px] md:flex md:flex-row md:justify-center md:space-x-[20px]">
            <div className="flex flex-col items-center space-y-[10px]">
              <img src="./photo-1.jpg" className="w-[180px] h-[180px]" />
              <h4 className="text-[#AECDBF] border-b-[3px] border-[#81B79D] w-full text-[10px]">
                GRAG GARNEK CEO
              </h4>
              <p className="text-[7px]">
                Amazone blesséo du tune de Sôsiklès Conie romaine
                <br /> d'après un original grec Elle rassemble le peuple, les
                fau-
                <br />
                bourgs et la
              </p>
              <nav className="flex flex-row justify-center">
                <div className="bg-[#3B5997] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-fb.png" className="h-[17px] w-[8px]" />
                </div>
                <div className="bg-[#D14333] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-gplus.png" className="h-[17px] w-[14px]" />
                </div>
              </nav>
            </div>
            <div className="flex flex-col items-center space-y-[10px]">
              <img src="./photo-2.jpg" className="w-[180px] h-[180px]" />
              <h4 className="text-[#AECDBF] border-b-[3px] border-[#81B79D] w-full text-[10px]">
                GRAG GARNEK CEO
              </h4>
              <p className="text-[7px]">
                Amazone blesséo du tune de Sôsiklès Conie romaine
                <br /> d'après un original grec Elle rassemble le peuple, les
                fau-
                <br />
                bourgs et la
              </p>
              <nav className="flex flex-row justify-center">
                <div className="bg-[#3B5997] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-fb.png" className="h-[17px] w-[8px]" />
                </div>
                <div className="bg-[#EA4C87] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-drib.png" className="h-[17px] w-[16px]" />
                </div>
              </nav>
            </div>
            <div className="flex flex-col items-center space-y-[10px] sm-lower:col-start-1 sm-lower:col-end-3">
              <img src="./photo-3.jpg" className="w-[180px] h-[180px]" />
              <h4 className="text-[#AECDBF] border-b-[3px] border-[#81B79D] sm-lower:w-[180px] md:w-full text-[10px]">
                GRAG GARNEK CEO
              </h4>
              <p className="text-[7px]">
                Amazone blesséo du tune de Sôsiklès Conie romaine
                <br /> d'après un original grec Elle rassemble le peuple, les
                fau-
                <br />
                bourgs et la
              </p>
              <nav className="flex flex-row justify-center">
                <div className="bg-[#01ACEE] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-tw.png" className="h-[17px] w-[8px]" />
                </div>
                <div className="bg-[#C70E0C] w-[90px] h-[30px] relative flex justify-center items-center">
                  <img src="./ic-youtube.png" className="h-[17px] w-[16px]" />
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="sm-lower:h-[465px] md:h-[336px] bg-white flex justify-center">
          <div className="flex flex-col items-center space-y-[20px]">
            <h5 className="text-[#533183] text-lg">PORTFOLIO</h5>
            <div className="grid sm-lower:grid-cols-3 md:grid-cols-4">
              <img src="pic-1.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-2.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-3.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-4.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-5.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-6.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-7.jpg" className="w-[145.5px] h-[130px]" />
              <img src="pic-8.jpg" className="w-[145.5px] h-[130px]" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
