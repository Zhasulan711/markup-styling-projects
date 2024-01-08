"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [passwordInputType, setPasswordInputType] = useState("password"); // first password

  const togglePasswordVisibility = () => {
    setPasswordInputType(
      passwordInputType === "password" ? "text" : "password"
    );
  };

  const [repeatPasswordType, setRepeatPasswordType] = useState("password"); // second password

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordType(
      repeatPasswordType === "password" ? "text" : "password"
    );
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event: any) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!email || !password || !repeatPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    if (email && password && repeatPassword && password === repeatPassword) {
      // Если все поля заполнены и пароли совпадают
      setError(""); // Очистка ошибок
      router.push("/"); // Перенаправление на главную страницу
    }
  };

  return (
    <div>
      <main className="relative w-full h-screen flex justify-center items-center">
        <img
          src="./pexels-craig-adderley-1563356.jpg"
          loading="eager"
          className="w-full h-screen object-cover blur-sm"
        />
        <form
          onSubmit={handleSubmit}
          action="/"
          method="post"
          className={`bg-[#FFFFFF] w-[400px] absolute flex flex-col items-center space-y-[30px] justify-center ${
            error ? "h-[300px]" : "h-[250px]"
          }`}
        >
          <h1 className="text-[#4E5155]">Login</h1>
          <div className="flex flex-col items-center space-y-[10px]">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className={`border rounded-sm text-[#7D858C] w-[370px] pl-[10px] pt-[5px] pb-[5px] ${
                error
                  ? "border-red-500 placeholder-red-500"
                  : "border-[#CED4DA]"
              }`}
            />
            <input
              type={passwordInputType}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={`border rounded-sm text-[#7D858C] w-[370px] pl-[10px] pt-[5px] pb-[5px] ${
                error
                  ? "border-red-500 placeholder-red-500"
                  : "border-[#CED4DA]"
              }`}
            />
            <span
              onClick={togglePasswordVisibility}
              className={`absolute right-[50px] cursor-pointer ${
                error ? "top-[118px]" : "top-[110px]"
              }`}
            >
              {passwordInputType === "password" ? "Show" : "Hide"}
            </span>
            <input
              type={repeatPasswordType}
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              placeholder="Repeat password"
              className={`border rounded-sm text-[#7D858C] w-[370px] pl-[10px] pt-[5px] pb-[5px] ${
                error
                  ? "border-red-500 placeholder-red-500"
                  : "border-[#CED4DA]"
              }`}
            />
            <span
              onClick={toggleRepeatPasswordVisibility}
              className={`absolute right-[50px] cursor-pointer ${
                error ? "top-[165px]" : "top-[156px]"
              }`}
            >
              {repeatPasswordType === "password" ? "Show" : "Hide"}
            </span>
            {error && <div className="text-red-500">{error}</div>}
            <input
              type="submit"
              value="Ready!"
              className="rounded-sm bg-[#28A745] text-[#FFFFFF] w-[370px] h-[30px] font-thin text-[13px]"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
