import Link from "next/link";

export default function ValidationPage() {
  return (
    <main className="w-full h-screen flex justify-center relative items-center">
      <img
        src="./pexels-guillaume-meurice-1591447.jpg"
        className="absolute w-full h-screen"
      />
      <form
        action="/"
        method="post"
        className="absolute flex flex-col justify-center items-center bg-[#FFFFFF] w-[300px] h-[300px] space-y-[20px]"
      >
        <h1 className="font-semibold">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="flex flex-row space-x-[10px] border border-[#DFE1E3]">
          <div className="border border-[#DFE1E3] p-2 flex justify-center items-center">
            <img
              src="./585e4bf3cb11b227491c339a.png"
              className="w-[20px] h-[20px]"
            />
          </div>
          <input
            type="text"
            id="username_id"
            value="Username"
            className="text-[#D8DBDF]"
          />
        </div>
        <div className="flex flex-row space-x-[10px] border border-[#DFE1E3]">
          <div className="border border-[#DFE1E3] p-2 flex justify-center items-center">
            <img src="./3099886.png" className="w-[20px] h-[20px]" />
          </div>
          <input
            type="password"
            id="password_id"
            value="Password"
            className="text-[#D8DBDF]"
          />
        </div>
        <button
          className="font-bold text-white flex justify-center items-center text-center bg-[#24B8C7] h-[40px] w-[245px] rounded
          hover:bg-sky-500"
        >
          SIGN IN
        </button>
        <div className="flex flex-row space-x-[10px]">
          <h2 className="text-[#798893]">Not a member?</h2>
          <Link href="/survey" className="text-[#002946] hover:text-sky-500">
            Sign Up Now
          </Link>
          <img
            src="./Arrow-right-512.png"
            className="w-[15px] h-[15px] mt-[5px]"
          />
        </div>
      </form>
    </main>
  );
}
