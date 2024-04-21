import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
export default function Contect() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497982.93682437966!2d101.78075356463219!3d12.811472074280873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3103760bec547243%3A0xc7d8432079ce1781!2sChanthaburi%2C%20Thailand!5e0!3m2!1sen!2sus!4v1712909880699!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/4 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className=" text-lg">
              <div className=" flex justify-center  lg:justify-start lg:items-start ">
                <h2 className=" text-2xl text-black my-2">
                  ซื้อเลยตอนนี้
                </h2>
              </div>
              <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start ">
                <Typography as={"a"} href="https://lin.ee/SCYHXfq">
                  <Button
                    size="lg"
                    variant="gradient"
                    color="green"
                    className=" my-2   group relative flex items-center gap-3 overflow-hidden pr-[72px] w-64 pulse"
                  >
                    ติดต่อผ่านทาง Line
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#51A655] transition-colors group-hover:bg-light-green-900">
                      <img
                        src="https://www.svgrepo.com/show/303189/line-messenger-logo.svg"
                        alt="metamask"
                        className="h-8 w-8"
                      />
                    </span>
                  </Button>
                </Typography>
                <Typography
                  as={"a"}
                  href="https://www.facebook.com/profile.php?id=100080641484160"
                >
                  <Button
                    size="lg"
                    variant="gradient"
                    color="light-blue"
                    className=" my-2   group relative flex items-center gap-3 overflow-hidden pr-[72px]  w-64 pulse"
                  >
                    ติดต่อผ่านทาง Facebook
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                      <img
                        src="https://www.svgrepo.com/show/448224/facebook.svg"
                        alt="metamask"
                        className="h-8 w-8"
                      />
                    </span>
                  </Button>
                </Typography>
                <Typography as={"a"} href="tel:098-9244613">
                  <Button
                    size="lg"
                    variant="gradient"
                    color="lime"
                    className=" my-2   group relative flex items-center gap-3 overflow-hidden pr-[72px] w-64 pulse"
                  >
                    ติดต่อผ่านทาง โทรคัพท์
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#cddc39] transition-colors group-hover:bg-[#afb42b] ">
                      <img
                        src="https://www.svgrepo.com/show/524803/phone-calling.svg"
                        alt="metamask"
                        className="h-8 w-8"
                      />
                    </span>
                  </Button>
                </Typography>
                <p>
                  เพียงท่านทัก Inbox หรือ โทรและแจ้งโค๊ดลับว่า “ฉ่ำฉ่ำ1”
                  ทีมงานจะล็อคสิทธิ์รับประกันให้ทันที!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
