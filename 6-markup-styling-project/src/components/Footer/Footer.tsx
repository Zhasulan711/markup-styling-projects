export default function Footer() {
  return (
    <footer className="w-full bg-[#505050] pt-[30px] flex flex-col items-center space-y-[30px]">
      <section
        className="flex 
        sm-lower:space-y-[10px] md:space-y-[0px] md:space-x-[60px]
        sm-lower:flex-col md:flex-row 
        sm-lower:items-center justify-center"
      >
        <div className="flex flex-col items-center space-y-[10px]">
          <h6 className="text-[#FFFFFF] pr-[255px] font-extralight">
            What makes us so awesome
          </h6>
          <p className="text-[10px] text-[#FFFFFF]">
            Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia,
            metus lectus interdum elit, at consectetur orci <br /> dolor et
            metus. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae <br />
            Suspendisse potenti. Pellentesque habitant morbi tristique senectus
            et netus et malesuada.
          </p>
        </div>
        <div
          className="flex flex-col items-center space-y-[10px]
          sm-lower:pr-[210px] md:pr-[0px]"
        >
          <h6 className="text-[#FFFFFF] pr-[145px] font-extralight">
            Contact Us
          </h6>
          <p className="text-[10px] text-[#FFFFFF]">
            Nulla ut eleifend diam. In feugiat, lacus vitae porttitor <br />{" "}
            lacinia, metus lectus interdum elit, at consectetur orci <br />
            dolor et metus. Vestibulum ante ipsum primis in
          </p>
        </div>
      </section>
      <span
        className="text-[8px] text-white
        sm-lower:pr-[330px] md:pr-[615px]"
      >
        Copyright 201- by blazkobar
      </span>
    </footer>
  );
}
