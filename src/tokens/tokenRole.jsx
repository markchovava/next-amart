"use client";
import {setCookie, deleteCookie } from 'cookies-next';




export const tokenRoleName = 'AMART_ROLE_TOKEN';
export const tokenRole = () => {
    
    const setRoleToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(tokenRoleName, token);
            setCookie(tokenRoleName, token);
        }
    }
    const getRoleToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(tokenRoleName);
            return token;
        }
    }
    const removeRoleToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(tokenRoleName);
            deleteCookie(tokenRoleName);
        }
    }

    return {
        setRoleToken, 
        getRoleToken,
        removeRoleToken
    }

  }