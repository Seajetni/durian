import React from "react";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import Card from "./card";

export default function Products() {
  return (
    <div>
      <div>
        <div className=" bg-[url('https://i2.wp.com/files.123freevectors.com/wp-content/original/130926-abstract-blue-and-orange-polygon-triangle-background.jpg')]  bg-top ">
        <h1 className=" text-5xl pt-10 text-white text-center lg:hidden">  <a  className=" ">ฉ่ำฉ่ำ</a>   <br /> มี 2 แบบให้เลือก</h1>
          <div className=" flex lg:justify-between flex-col-reverse lg:flex-row ">
            <div>
              <div  className="lg:flex justify-center hidden">
              <Avatar src="/logo.png" className=" w-72 h-72     " />
              </div>
             <div className="   lg:block  hidden">
             <Card/>
             </div>
             
            </div>
            <div className="  drop-shadow-2xl">
              <div className="flex flex-col lg:flex-row  lg:mr-20 mt-10">
                <div>
                  <div className="flex flex-col  relative top-32">
                    <Image
                      src={"/product.png"}
                      alt=""
                      width={800}
                      height={100}
                      className=" w-[400px] lg:w-[800px] relative bottom-16"
                    />
                    <Image
                      src={"/product3.png"}
                      alt=""
                      width={800}
                      height={100}
                      className=" w-[400px] lg:w-[800px]  bottom-72   lg:right-24  relative "
                    />
                    <p className="  text-xl relative bottom-48 mx-2 flex lg:hidden bg-white bg-opacity-75 px-10 rounded-3xl"> ทุเรียนเบญจพรรณ บรรจุในแพ็คเกจสุดพรีเมียมใน 1 กล่องจะมีทุเรียน 4 สายพันธุ์ หายาก คัดสรรมาอย่างพิถีพิถันเนื้อหอมหวานมันทุกสัมผัสเป็นทุเรียนที่ไม่ใช่ใครจะกินได้ต้องทุเรียนเบญจพรรณจากร้านเราเท่านั้น</p>
                  </div>
                </div>

                <div className=" relative lg:right-32 ">
                  <div>
                    <Image
                      src={"/product4.png"}
                      alt=""
                      width={800}
                      height={100}
                      className="w-[400px] lg:w-[800px]"
                    />
                    <Image
                      src={"/product2.png"}
                      alt=""
                      width={800}
                      height={100}
                      className=" w-[400px] bottom-72 lg:w-[800px] right-0 lg:right-12  relative "
                    />
                      <p className="  text-xl relative bottom-48 mx-2 flex lg:hidden bg-white bg-opacity-75 px-10 rounded-3xl">ทุเรียนหมอนทองแกะเนื้อคัดเกรด ขนาด 800 g / 1 kg คัดอย่างดี
                  หวานฉ่ำ อร่อยทุกคำ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
