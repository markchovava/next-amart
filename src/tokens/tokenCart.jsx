"use client";
import {setCookie, deleteCookie } from 'cookies-next';



export const tokenCartName = 'AMART_CART_TOKEN';
export const tokenCart = () => {
    const setCartToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(tokenCartName, token);
            setCookie(tokenCartName, token);
        }
    }
    const getCartToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(tokenCartName);
            return token;
        }
    }
    const removeCartToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(tokenCartName);
            deleteCookie(tokenCartName);
        }
    }

    return {
        setCartToken, 
        getCartToken,
        removeCartToken
    }

  }