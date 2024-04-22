import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="bg-[url(/eiei.png)] bg-bottom  ml-20  ">
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2 "></div>
          <div className="image-content animate slide delay-5"></div>
          <div className="dots animate">
            <div className="dot animate slide-up delay-6"></div>
            <div className="dot animate slide-up delay-7"></div>
            <div className="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div className="text">
          <p className=" text-xl">
            <img className="inset" src="/9.jpg" alt="" />
            🌳ทุเรียนหมอนทอง แกะเนื้อล้วน <br />
            -ขนาด 500 กรัม 2 กล่อง 1,200 บาท (ลด 100 บาท ) <br />
            -ขนาด 1 กิโลกรัม 2 กล่อง 2,400 บาท (ลด 200 บาท ) <br />
            <hr className=" border-b-4" />
            จัดส่งภายใน 1-3 วันของถึงมือลูกค้า ส่งแบบควบคุมอุณหภูมิ
            ไม่ต้องห่วงเรื่องสภาพสินค้าค่ะ
            <hr className=" border-b-4" />
          </p>
          <div>
            <h1>.</h1>
            <h1 className=" text-xl">พร้อมเงื่อนไขรับประกันสุดพิเศษ</h1>
            <p className=" text-lg">
              1.เม็ดอ่อน จืด ไม่ใช่สีเม็ดอ่อนนะคะ อ่อนในที่นี้คือ
              ลักษณะของทุเรียนอ่อน จืด ไม่มีรสชาติ (ไม่ใช่หวานน้อย) ไม่มีกลิ่น
              เนื้อขาว เม็ดขาวซีด{" "}
            </p>
            <p className=" text-lg">2.ขม มีสีดำในเนื้อ หรือเป็นไตแข็งๆ</p>
            <p className=" text-lg">
              3.เปรี้ยว เสีย เละ มีกลิ่นบูด (ต้องแจ้งเคลมทันทีหลังได้รับทุเรียน){" "}
            </p>
            * เคลมได้ *
          </div>
        </div>
      </div>
    </div>
  );
}
