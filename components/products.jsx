import React from 'react'

export default function Products() {
  return (
    <div className=' bg-[url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80)] bg-cover'>
   <div id="header" className=' py-10'>
    <h1>ต้องลองแล้วแหละจริงไหม?</h1>
<h1>ทุเรียนแกะพร้อมทาน “ฉ่ำฉ่ำ”  มี 2 แบบให้เลือก</h1>
  </div>
<div className="container">
<div className="card">
  <div className="card-image ">
    <img src="/product3.png" className=' '/>
  </div>
  <div className="card-text">
    <h2 className="card-title">ทุเรียนหมอนทอง</h2>
    <p className="card-body">ทุเรียนหมอนทองแกะเนื้อคัดเกรด ขนาด 500 g / 1 kg
คัดอย่างดี หวานฉ่ำ อร่อยทุกคำ.</p>
  </div>
  <div className="card-price">฿xxx</div>
</div>
  <div className="card">
  <div className="card-image">
    <img src="/product2.png"/>
  </div>
  <div className="card-text">
    <h2 className="card-title">ทุเรียนเบญจพรรณ</h2>
    <p className="card-body">ทุเรียนเบญจพรรณ บรรจุในแพ็คเกจสุดพรีเมียมใน 1 กล่องจะมีทุเรียน 4 สายพันธุ์
หายาก คัดสรรมาอย่างพิถีพิถัน เนื้อหอมหวานมันทุกสัมผัสเป็นทุเรียนที่ไม่ใช่ใครจะกินได้
ต้องทุเรียนเบญจพรรณจากร้านเราเท่านั้น</p>
  </div>
  <div className="card-price">฿xxx</div>
</div>



</div>
    </div>
 
  )
}
