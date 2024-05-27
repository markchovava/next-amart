"use client"
import axiosClientAPI from '@/api/axiosClientAPI';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenRole } from '@/tokens/tokenRole';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { Bounce, toast } from 'react-toastify';




export default function TopNav() {
  const router = useRouter();
  const { getAuthToken, removeAuthToken } = tokenAuth();
  const { removeRoleToken } = tokenRole();
  const [isLogout, setIsLogout] = useState(false);
  const [isActive, setIsActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    profile: false,
  });

  const config = {
    headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${getAuthToken()}`, 
    }
  }

   /* LOGOUT */
  async function postLogout() {
    try{
        const result = await axiosClientAPI.get(`logout`, config)
        .then((response) => {
            removeAuthToken();
            removeRoleToken();
            router.push(`/login`) 
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
            setIsLogout(false) 
        
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    } 
  } 

  useEffect(() => { 
      isLogout == true && postLogout();
  }, [isLogout]);


  return (
    <section className='bg-gradient-to-br from-blue-600 to-pink-600'>
      <div className='container__one mx-auto text-white flex items-center justify-between'>
      
        <ul className='flex items-center justify-start gap-3'>
          <li 
            onClick={() => setIsActive({one: !isActive.one})}
            className='p-2 relative' >
            <Link href='#' className='hover:text-pink-200 flex items-center gap-1'>
            Settings <FaAngleDown />
            </Link>
            <ul className={`${isActive.one ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/app-info'>App Info</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Shop</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/role'>Role</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Settings</Link></li>
            </ul>
          </li>
          {/* USERS */}
          <li className=' relative'>
            <span 
              onClick={() => setIsActive({six: !isActive.six})} 
              className='p-2 hover:text-pink-200 flex cursor-pointer items-center gap-1'>
              Users <FaAngleDown />
            </span>
            <ul className={`${isActive.six ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Suppliers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Retailers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Customers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/user'>Users</Link></li>
            </ul>
          </li>
          {/* PRODUCTS */}
          <li className='p-2 hover:text-pink-200 relative'>
            <span 
              onClick={() => setIsActive({two: !isActive.two})} 
              className='flex cursor-pointer items-center gap-1'>
              Products <FaAngleDown />
            </span>
            <ul className={`${isActive.two ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Categories</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Brands</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Products</Link></li>
            </ul>
          </li>
          {/* SHOPS */}
          <li className='p-2 relative'>
            <span 
              onClick={() => setIsActive({three: !isActive.three})} 
              className='flex hover:text-pink-200 cursor-pointer items-center gap-1'>
              Shops <FaAngleDown />
            </span>
            <ul className={`${isActive.three ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Add Shop</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Shop List</Link></li>
             
            </ul>
          </li>
          {/* ORDERS */}
          <li className='p-2 relative'>
            <span 
              onClick={() => setIsActive({four: !isActive.four})} 
              className='flex hover:text-pink-200 cursor-pointer items-center gap-1'>
              Orders <FaAngleDown />
            </span>
            <ul className={`${isActive.four ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Orders By Suppliers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Orders By Retailers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Orders By Customers</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Orders List</Link></li>
            </ul>
          </li>
          {/* SALES */}
          <li className='p-2 relative'>
            <span 
              onClick={() => setIsActive({five: !isActive.five})} 
              className='flex hover:text-pink-200 cursor-pointer items-center gap-1'>
              Sales <FaAngleDown />
            </span>
            <ul className={`${isActive.five ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>App Info</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Shop</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='#'>Settings</Link></li>
            </ul>
          </li>

        </ul>

        <ul className='flex items-center justify-start gap-3'>
          <li className='p-2 relative'>
            <span 
              onClick={() => setIsActive({profile: !isActive.profile})} 
              className='flex hover:text-pink-200 cursor-pointer items-center gap-1'>
              Profile <FaAngleDown />
            </span>
            <ul className={`${isActive.profile ? 'visible' : 'invisible'} absolute transition-all ease-in-out z-50 border border-white drop-shadow-md top-[100%] right-0 w-[150%] bg-gradient-to-br from-blue-600 to-pink-600`}>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/profile'>Profile</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/password'>Password</Link></li>
              <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                <Link href='/admin/profile/email'>Email</Link></li>
              {getAuthToken() &&
                <li className='px-3 py-1 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600'>
                  <button onClick={() => setIsLogout(true)}>Signout</button>
                </li>
              }
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
