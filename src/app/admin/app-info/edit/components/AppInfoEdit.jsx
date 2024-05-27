"use client";
import axiosClientAPI from "@/api/axiosClientAPI";
import { baseURL } from "@/api/baseURL";
import Loader from "@/app/components/Loader";
import { tokenAuth } from "@/tokens/tokenAuth";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function AppInfoEdit({ appInfo }) {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false);
    const { getAuthToken } = tokenAuth();
    const [image, setImage] = useState(baseURL + appInfo?.data?.image);
    const [data, setData] = useState();

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    }
    
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    /* GET DATA */
    async function getData() {
        try{
        const result = await axiosClientAPI.get(`app-info`, config)
        .then((response) => {
            setData(response.data.data)
        })
        } catch (error) {
        console.error(`Error: ${error}`)
        }   
    }  

    const postData = async () => {
        const formData = {
            name: data?.name,
            phone: data?.phone,
            website: data?.website,
            image: data?.image,
            email: data?.email,
            address: data?.address,
            whatsapp: data?.whatsapp,
            facebook: data?.facebook,
            instagram: data?.instagram,
        }
        try{
            const result = await axiosClientAPI.post(`app-info`, formData, config)
            .then((response) => {
                    router.push(`/admin/app-info`);
                    redirect(`/admin/app-info`)
                    setIsSubmit(false)
                }
            );    
            } catch (error) {
                console.error(`Error: ${error}`);
                console.error(`Error Message: ${error.message}`);
                console.error(`Error Response: ${error.response}`);
                setIsSubmit(false);
            }

    }


    useEffect(() => {
        getData();
      },[]);


    useEffect(() => {
        isSubmit === true && postData();
    }, [isSubmit]);


    if(!data){ return ( <Loader /> )}

    return (
      <section className='w-[100%]'>
          <div className='mx-auto w-[80%]'>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Image:</p>
                  <input 
                    type='file' 
                    onChange={(e) => {
                        setData({...data, image: e.target.files[0]})
                        setImage(URL.createObjectURL(e.target.files[0]))
                    }}
                    className='mb-4 w-[40%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                  <div className="w-[30%] overflow-hidden rounded-lg bg-slate-50 aspect-[5/3]">
                    <img src={image} className="w-[100%] h-[100%] object-cover" />
                  </div>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Name:</p>
                  <input 
                    placeholder="Enter Name here..."
                    name="name"
                    onChange={handleInput}
                    value={data.name}
                    type='text' 
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Address:</p>
                  <input 
                    type='text'
                    name="address"
                    onChange={handleInput}
                    value={data.address} 
                    placeholder="Enter Address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              {/* PHONE */}
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Phone Number:</p>
                  <input 
                    type='text' 
                    name="phone"
                    onChange={handleInput}
                    value={data.phone}
                    placeholder="Enter Phone Number here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              {/* PHONE */}
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Email:</p>
                  <input 
                    type='text' 
                    name="email"
                    onChange={handleInput}
                    value={data.email}
                    placeholder="Enter Email here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Website:</p>
                  <input 
                    type='text' 
                    name="website"
                    onChange={handleInput}
                    value={data.website}
                    placeholder="Enter website address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Instagram:</p>
                  <input 
                    type='text' 
                    name="instagram"
                    onChange={handleInput}
                    value={data.instagram}
                    placeholder="Enter website address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>WhatsApp:</p>
                  <input 
                    type='text' 
                    name="whatsapp"
                    onChange={handleInput}
                    value={data.whatsapp}
                    placeholder="Enter website address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <p className='font-bold mb-2'>Facebook:</p>
                  <input 
                    type='text' 
                    name="facebook"
                    onChange={handleInput}
                    value={data.facebook}
                    placeholder="Enter website address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='flex items-center justify-center pb-[4rem]'>
                  <button
                   onClick={() => setIsSubmit(true)}
                   className='btn__form'>
                      {isSubmit === true ? 'Processing' : 'Submit'}
                  </button>
              </div>
          </div>
      </section>
    )
  }