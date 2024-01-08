"use client";

export default function SurveyPage() {
  return (
    <main className="w-full h-screen flex justify-center relative items-center">
      <img
        src="./pexels-guillaume-meurice-1591447.jpg"
        loading="eager"
        className="absolute w-full h-screen"
      />
      <form
        action="/sign-up"
        method="post"
        className="bg-[#FFFFFF] h-[330px] w-[450px] flex flex-col justify-center items-center absolute"
      >
        <h1 className="pr-[185px] text-lg font-semibold">Опрос</h1>
        <h2 className="font-medium">
          Каким способом вы чаще всего <br /> оплачиваете электроэнергию?
        </h2>
        <div className="pl-[90px]">
          <div className="flex flex-row space-x-[10px]">
            <input
              type="radio"
              name="payment"
              value="male"
              id="payment_id"
              className="mt-[7px]"
            />
            <label htmlFor="payment_id" className="text-[#686868]">
              В отделении банка
            </label>
          </div>
          <div className="flex flex-row space-x-[10px]">
            <input
              type="radio"
              name="payment"
              value="male"
              id="payment_id"
              className="mt-[7px]"
            />
            <label htmlFor="payment_id" className="text-[#686868]">
              Банковской картой
            </label>
          </div>
          <div className="flex flex-row space-x-[10px]">
            <input
              type="radio"
              name="payment"
              value="male"
              id="payment_id"
              className="mt-[7px]"
            />
            <label htmlFor="payment_id" className="text-[#686868]">
              Через терминал Qiwi
            </label>
          </div>
          <div className="flex flex-row space-x-[10px]">
            <input
              type="radio"
              name="payment"
              value="male"
              id="payment_id"
              className="mt-[7px]"
            />
            <label htmlFor="payment_id" className="text-[#686868]">
              С помощью мобильного телефона
            </label>
          </div>
          <div className="flex flex-row space-x-[10px]">
            <input
              type="radio"
              name="payment"
              value="male"
              id="payment_id"
              className="mt-[7px]"
            />
            <label htmlFor="payment_id" className="text-[#686868]">
              Автоматическим платежом
            </label>
          </div>
        </div>
        <div className="flex flex-row space-x-[40px] pt-[10px] pr-[15px] justify-center items-center">
          <input
            type="submit"
            value="Ответить"
            className="bg-[#F8F8F8] border border-[#D9D9D9] rounded-sm w-[100px] h-[40px] hover:bg-slate-300"
          />
          <h3 className="underline decoration-[#545454] text-[#545454]">
            Все опросы
          </h3>
        </div>
      </form>
    </main>
  );
}
