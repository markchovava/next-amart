"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import ImagesData from "@/data/ImagesData.json"
import { FaStar, FaRegStar } from "react-icons/fa";



export default function ProductView() {
    console.log(ImagesData[0].img)
    const [specs, setSpecs] = useState([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,6])
    const [images, setImages] = useState(ImagesData);
    const [isActive, setIsActive] = useState(ImagesData[0].img);
    const [isTab, setIsTab] = useState({
        one: true,
        two: false
    })
    
  return (
    <section>
        <div className='container__one py-1 flex items-center gap-3 border-y border-slate-50 mb-[4rem]'>
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
        </div>

        <div className='container__one flex lg:flex-row flex-col lg:items-start items-center lg:justify-start justify-center gap-8 mb-[4rem]'>
            <div className='lg:w-[46%] w-[100%]'>
                <div className={`group mx-auto w-[100%] aspect-[10/7] rounded-lg overflow-hidden bg-green-200`}>
                    <img src={isActive} className="w-[100%] h-[100%] group-hover:scale-110 duration-200 transition-all ease-in-out object-cover" />
                </div>
                <div className="flex items-center justify-start gap-4 py-6">
                    {images && images.map((i, key) => (
                        <div 
                            key={key} 
                            onClick={() => setIsActive(i.img)}
                            className={`group w-[100%] aspect-square rounded-lg bg-blue-200 overflow-hidden`}>
                            <img src={i.img} className="w-[100%] h-[100%] object-cover transition-all duration-200 ease-in-out group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:w-[54%] w-[100%]'>
                <p className="font-semibold text-[2.5rem] leading-none mb-3 text-blue-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="mb-3">
                    <p className="mb-1">Reviews:</p>
                    <p className="flex items-center justify-start gap-3 text-red-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                    </p>
                </div>
                <div className="mb-3">
                    <p className="mb-1 font-semibold">Shop:</p>
                    <p className="text-lg">The Apprel Shop </p>
                </div>
                <div className="mb-3 ">
                    <p className="font-semibold">Category:</p>
                    <p className="text-lg text-blue-600 italic">
                        Testing, Going it, Product Category
                    </p>
                </div>
                <p className="text-[2.5rem] font-bold mb-3">$20.00</p>
                <div className="mb-3">
                    <p className="font-semibold mb-1">Description:</p>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                        dolore. Dolor accusantium ab neque sint ipsa. Quod voluptatem saepe consequatur!
                    </p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold mb-1">Variation</p>
                    <div className="grid lg:grid-cols-6 grid-cols-3 gap-3 text-lg">
                        <div className="flex items-center justify-start gap-1">
                            <input type="radio" name="variation" />
                            Option 1
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <input type="radio" name="variation" />
                            Option 1
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <input type="radio" name="variation" />
                            Option 1
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <input type="radio" name="variation" />
                            Option 1
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <input type="radio" name="variation" />
                            Option 1
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="font-semibold mb-1">Variation</p>
                    <select className="lg:w-[70%] w-[100%] text-lg rounded-xl outline-none border border-slate-300 p-3">
                        <option>Option 1</option>
                        <option value='1'>Option 2</option>
                        <option value='2'>Option 3</option>
                        <option value='3'>Option 4</option>
                        <option value='4'>Option 5</option>
                    </select>
                </div>

                <div className="flex items-center justify-start lg:w-[70%] w-[100%] mt-8 ">
                    <input 
                        type="number"
                        name="quantity"
                        placeholder="00"
                        className="text-lg w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[4rem] px-3" />
                    <button
                        className="w-[40%] text-lg rounded-r-xl btn__one h-[4rem]"> 
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>


        <div className="container__one mb-[4rem] border-t border-slate-200">
            <ul className="flex items-center justify-start gap-4 font-semibold text-lg">
                <li 
                    onClick={() => setIsTab({one: !isTab.one})} 
                    className="px-3 py-2 cursor-pointer">
                    Specifications 
                </li>
                <li 
                    onClick={() => setIsTab({two: true})} 
                    className="px-3 py-2 cursor-pointer">
                    Ratings & Reviews
                </li>
            </ul>
            <div className="relative w-[100%] h-[21rem]">
                {/* ONE */}
                <div className={` ${isTab.one ? 'visible' : 'invisible'} h-[100%] w-[100%] absolute overflow-y-scroll`}>
                    <div className="w-[100%] flex items-center justify-start text-lg font-semibold border border-slate-200 bg-slate-100">
                        <div className="w-[50%] px-3 py-2">Name</div>
                        <div className="w-[50%] px-3 py-2">Value</div>
                    </div>

                    {specs.map((i, key) => (
                        <div key={key} className="w-[100%] flex items-center justify-start text-lg border border-slate-200">
                            <div className="w-[50%] px-3 py-2 border-r border-slate-200">Weight</div>
                            <div className="w-[50%] px-3 py-2">34kgs</div>
                        </div>
                    ))}
                   
                </div>
                {/* TWO */}
                <div className={` ${isTab.two ? 'visible' : 'invisible'} h-[100%] w-[100%] absolute overflow-y-scroll`}>
                    <div className="px-3 py-2">
                        <p className="font-semibold">Email:</p>
                        <input type="text" className="w-[100%] px-3 py-2 outline-none border border-slate-200 rounded-lg" />
                    </div>
                    <div className="px-3 py-2">
                        <p className="font-semibold mb-1">Review:</p>
                        <p className="flex cursor-pointer items-center justify-start gap-3 text-red-600">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </p>
                    </div>
                    <div className="px-3 py-2">
                        <p className="font-semibold">Write Review:</p>
                        <textarea className="w-[100%] h-[4rem] px-3 py-2 outline-none border border-slate-200 rounded-lg"></textarea>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-center">
                        <button
                            className="text-lg rounded-full text-white bg-gradient-to-br from-blue-600 to-green-600 transition-all duration-200 ease-in-out hover:bg-gradient-to-br hover:from-green-600 hover:to-blue-600 px-[4rem] py-4"> 
                            Add Review
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}
