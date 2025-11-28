'use server';
import { cookies } from 'next/headers';
import { RegisterFormType } from './Register.types';


export async function handleRegister(data: RegisterFormType) {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });


    const finalresp = await res.json();
    console.log("finalresp", finalresp);


    if (finalresp.message.toLowerCase() === 'success') {

        const cookie = await cookies();
        cookie.set('user-token',finalresp.token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7

        });
        return {success: true , message: "Acount created Successfuly"};
    }
    else {
         return { success: false, message: finalresp.message || "Something went wrong" };
    }


}