import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="w-full h-screen flex justify-center relative items-center">
        <img
          src="./pexels-guillaume-meurice-1591447.jpg"
          className="absolute w-full h-screen"
        />
        <div className="flex flex-col items-center justify-center bg-[#E4F5FB] w-[400px] h-[300px] absolute">
          <div className="flex flex-row space-x-[20px] pr-[145px]">
            <img
              src="./key_password_icon_142997.png"
              className="w-[30px] h-[30px]"
            />
            <h1 className="text-[#6F7777] pt-[3px]">
              ВХОД /{" "}
              <span className="underline decoration-[#2069C3] text-[#2069C3]">
                Регистрация
              </span>
            </h1>
          </div>
          <form
            action="/sign-up"
            method="post"
            className="flex flex-col items-center justify-center space-y-[20px] pt-[20px]"
          >
            <div className="flex flex-row space-x-[20px]">
              <label htmlFor="username-id" className="text-[#6F7777]">
                Логин
              </label>
              <input
                type="text"
                id="username-id"
                className="bg-[#F3F2F6] shadow-md"
              />
            </div>
            <div className="flex flex-row space-x-[10px]">
              <label htmlFor="password-id" className="text-[#6F7777]">
                Пароль
              </label>
              <input
                type="text"
                id="password-id"
                className="bg-[#F3F2F6] shadow-md"
              />
            </div>
            <div className="flex flex-row space-x-[10px]">
              <div className="pr-[80px]">
                <input
                  type="checkbox"
                  id="checkbox-id"
                  className="w-[20px] h-[20px]"
                />
                <label htmlFor="checkbox-id" className="text-[#6F7777]">
                  Запомнить
                </label>
              </div>
              <input
                type="submit"
                value="Войти"
                className="bg-[#248A6E] w-[70px] h-[30px] text-[#FFFCFF] font-thin"
              />
            </div>
          </form>
          <Link
            href="/survey"
            className="underline decoration-[#2069C3] text-[#2069C3] pl-[120px] pt-[10px]"
          >
            Напомнить Пароль
          </Link>
        </div>
      </main>
    </div>
  );
}
