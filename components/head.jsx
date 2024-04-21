import Image from "next/image";
import React from "react";
import StickyNavbar from "./nav";

export default function Head() {
  return (
    <div className="bg-[url(/eiei.png)] bg-cover ">
      <div className=" hidden lg:flex lg:flex-col">
        <div></div>
        <div className=" flex justify-around items-center">
          <div>{""}</div>
          <div className=" flex  m-2 relative left-64">
            <div className="  flex text-3xl">
              <div className="p-2 mr-2">
                <p className="font-bold  text-white">MADE</p>
                <p className=" flex justify-end">with</p>
              </div>
              <div className=" border-l-2   border-black h-24  px-3 py-3">
                <p className=" relative bottom-16 bg-black text-white text-center p-2">
                  ห้ามพลาด…ทุเรียนแกะเนื้อพร้อมทานสำหรับคนเมือง
                </p>
                <p className="font-bold bottom-8 relative  text-white">
                  ฉ่ำฉ่ำ-ทุเรียนคัดเกรดแกะเนื้อพร้อมทาน
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/product4.png"}
              width={500}
              height={100}
              alt="test"
              className=" relative top-80  right-32"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-around ">
            <div className=" flex  items-end gap-2 my-10">
              <div className=" bg-white p-2 rounded-3xl">
                <Image
                  src={"/1.png"}
                  width={200}
                  height={100}
                  alt=""
                  className="rounded-3xl"
                />
                <p className=" text-center">ทุเรียนคัดเกรดแกะเนื้อ</p>
              </div>
              <div className=" bg-white p-2 rounded-3xl">
                <Image
                  src={"/2.png"}
                  width={200}
                  height={100}
                  alt=""
                  className="rounded-3xl"
                />
                <p className=" text-center">ทุเรียนหมอนทองแกะเนื้อ</p>
              </div>
            </div>
            <div>
              <h2 className=" text-5xl  font-bold text-white">
              ฉ่ำฉ่ำ เนื้อทุเรียนเกรด PREMIUM
              </h2>
              <p className=" bg-green-600 text-white text-center  p-2 my-2">
              การันตีได้เลยว่าเงินทุกบาทที่จ่าย ไม่เสียเปล่า ได้กินของอร่อยทุกคำ 
              </p>
            </div>
            <div>
              <Image
                src={"/product2.png"}
                width={500}
                height={100}
                alt="test"
                className=" right-56 relative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex flex-col ">
        <div>
        <div></div>
        <div>
          <div className=" flex  m-2  relative top-56">
            <div className="  flex text-3xl">
              <div className="p-2 mr-2">
                <p className="font-bold  text-white">MADE</p>
                <p className=" flex justify-end">with</p>
              </div>
              <div className=" border-l-2   border-black h-24  px-3 py-3">
              
                <p className="font-bold  text-white">
                  ฉ่ำฉ่ำ-ทุเรียนคัดเกรดแกะเนื้อพร้อมทาน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end relative top-96">
          <Image alt="" src={"/product4.png"} width={300} height={100} className="" />
        </div>
        </div>
      
        <div>
        <div>
          <div className="flex  flex-col-reverse">
            <div className=" flex  items-end gap-2 my-10">
              <div className=" bg-white p-2 rounded-3xl">
                <Image
                  src={"/1.png"}
                  width={200}
                  height={100}
                  alt=""
                  className="rounded-3xl"
                />
                <p className=" text-center">ทุเรียนคัดเกรดแกะเนื้อ</p>
              </div>
              <div className=" bg-white p-2 rounded-3xl">
                <Image
                  src={"/2.png"}
                  width={200}
                  height={100}
                  alt=""
                  className="rounded-3xl"
                />
                <p className=" text-center">ทุเรียนหมอนทองแกะเนื้อ</p>
              </div>
            </div>
            <div>
           
              <Image
                src={"/product2.png"}
                width={400}
                height={100}
                alt="test"
                className=" relative top-44"
              />
              <div  className=" h-36"/>
            </div>
       
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
}
