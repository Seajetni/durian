import Image from 'next/image'
import React from 'react'

export default function Send() {
  return (
    <div className='bg-[url(/eiei.png)] bg-bottom   ' >
      <div className=' flex  justify-center flex-col  sm:flex-row '>
        <div className=''>
            <h1  className=' text-xl lg:text-3xl  py-10 text-white font-bold  text-center '>จัดส่งด้วยรถเย็นรักษาอุณหภูมิ รักษาความอร่อยจนถึงมือลูกค้า</h1>
            <h2 className=' text-4xl text-orange-500 font-bold border-orange-500  border-b-8 w-fit my-10  '>ถึงมือผู้รับใน  <br /> 1-3 วัน</h2>
            <h2 className=' bg-orange-500  text-white text-xl  w-fit p-2  font-semibold rounded-2xl'>ค่าจัดส่ง ราคาเดียวทั่วประเทศไทย</h2>
           <div className=' flex'>
           <h3 className=' flex  text-9xl font-extrabold bg-clip-text text-transparent  bg-[url(/eiei.png)]  drop-shadow-2xl'> 160  </h3>
           <p   className=' flex  text-xl items-end '>บาท</p>
           </div>
           <div className="flex flex-col  relative top-32">
              <Image
                src={"/product4.png"}
                alt=""
                width={300}
                height={100}
                className="   hidden lg:flex rotate-90 lg:rotate-0   relative bottom-36 mx-20 lg:bottom-16 "
              />
              <Image
                src={"/product2.png"}
                alt=""
                width={300}
                height={100}
                className="  hidden lg:flex bottom-72   lg:right-24  relative "
              />
            </div>
        </div>
 
        <div className=' flex items-end'>
          
          <Image src={'/car.png'} width={800} height={100} alt='' />
        </div>
      </div>
    </div>
  )
}
