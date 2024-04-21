import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Main1() {
  return (
    <div className=" bg-[url(/eiei.png)]  bg-center">
    <div className=" flex justify-center">

      <h1 className=" text-3xl lg:text-5xl my-10 text-white">การผลิตสินค้าของโรงงานเรา</h1>
      
    </div>
      <div>
        <ul className=" grid grid-cols-1 lg:grid-cols-5 my-2">
          <li className=" hidden lg:flex justify-center items-center">
            <Image src={"/1.png"} alt="" width={300} height={100}  className=" rounded-3xl shadow-2xl" />
          </li>
          <li className=" hidden lg:flex justify-center items-center">
            {" "}
            <Image src={"/3.png"} alt="" width={300} height={100}  className=" rounded-3xl shadow-2xl" />
          </li>
          <li className=" hidden lg:flex justify-center items-center">
            {" "}
            <Image src={"/4.png"} alt="" width={300} height={100}  className=" rounded-3xl shadow-2xl" />
          </li>
          <li className=" hidden lg:flex justify-center items-center">
            <Image src={"/5.png"} alt="" width={300} height={100}  className=" rounded-3xl shadow-2xl" />
          </li>
          <li className=" flex justify-center items-center mb-10 ">
          <div className="   mx-20 rounded-3xl shadow-2xl w-full  ">
              <video
                className="rounded-lg    w-96  "
                controls
                autoPlay
                muted
              >
                <source src="/review.mp4" type="video/mp4" />
              </video>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
