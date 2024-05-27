"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';



export default function EmailEdit() {
    const router = useRouter()
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [msgErr, setMsgErr] = useState({});
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    };

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


    /* GET DATA */
    async function getData() {
        try{
        const result = await axiosClientAPI.get(`auth`, config)
        .then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
        })
        } catch (error) {
        console.error(`Error: ${error}`)
        }   
    }  


    const postData = async () => {
        if(!data.email){
            setMsgErr({email: 'Email is required.'})
            setIsSubmit(false);
            return;
        }
        const formData = {
            email: data?.email,
        }
        try{
            const result = await axiosClientAPI.post(`auth/email`, formData, config)
            .then((response) => {
                
                if(response.data.status == 0){
                    setMsgErr({email: response.data.message})
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    setIsSubmit(false) 
                    return;
                }
                router.push(`/admin/profile`);
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
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
    }, []);

    useEffect(() => {
        isSubmit == true && postData();
    }, [isSubmit]);


    if(!data){
        return ( <Loader /> );
    }


  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[90%]'>
            {/* EMAIL */}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Email:</p>
                <input 
                    type='text'
                    name='email'
                    onChange={handleInput} 
                    value={data.email}
                    placeholder='Enter Password here...'
                    className='mb-2 w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
                {msgErr.email &&
                    <p className='text-red-500'>{msgErr.email}</p>
                }
            </div>
    
            <div className='flex items-center justify-center pb-[4rem]'>
                <button
                    onClick={() => setIsSubmit(true)}
                    className='btn__form'>
                    { isSubmit === true ? 'Processing' : 'Submit' }
                </button>
            </div>

        </div>
    </section>
  )
}
