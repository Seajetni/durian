import React from "react";

import { Typography } from "@material-tailwind/react";

export default function Footer({
  scrollTo,
  contentRef,
  contectRef,
  aboutRef,
  mainRef,
}) {
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/logo.png" alt="logo-ct" className="w-20" />
        <ul className="lg:flex flex-wrap items-center gap-y-2 gap-x-8 grid-cols-4 grid">
          <li>
            <button onClick={() => scrollTo(mainRef)}>
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-lg"
              >
                หน้าเเเรก
              </Typography>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo(contentRef)}>
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-lg"
              >
                รายละเอียด
              </Typography>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo(aboutRef)}>
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-lg"
              >
                ทำไมต้องซื้อกับ ฉ่ำฉ่ำ
              </Typography>
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo(contectRef)}>
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500  text-xs lg:text-lg"
              >
                ซื้อเลย
              </Typography>
            </button>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 ฉ่ำฉ่ำ-ทุเรียนคัดเกรดแกะเนื้อพร้อมทาน
      </Typography>
    </footer>
  );
}
