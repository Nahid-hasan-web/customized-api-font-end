import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {


    const storeData = useSelector((state)=>state.singelData.value)
  return (
    <>
        <section className='pt-20 bg-white' >
            <div className="container">
                <div className="main_row flex gap-10 flex-wrap pb-5">
                    <div className="product_image w-[500px]">
                        <img src='' alt="prodct image" />
                    </div>
                    <div className="product_text w-[900px]">
                        <h2 className='text-[25px]  font-semibold  italic mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <h3 className='text-2xl font-semibold'>Key Features</h3>
                        <ul className='mt-[50px] text-[18px] font-normal'>
                            <li>Model: </li>
                            <li>Processor: </li>
                            <li>RAM: </li>
                            <li>Storage:</li>
                            <li>Display: </li>
                            <li></li>
                        </ul>
                        <h2 className='text-3xl font-bold italic mt-5 text-[#FFA62F]'>price: </h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20'>
            <div className="container">
                <div className="main_data bg-white p-5 rounded-lg">
                    <h2 className=' text-xl font-bold text-black'>Specification</h2>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Processor</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>processor</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>operating_system</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Memory</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>ram</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>storage</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Display</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>screen_size</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>display_type</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>display_resolution</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>touch</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Battery</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>battery_backup</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>charger_capacity</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Others</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>weight</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>warranty</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'></h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Data