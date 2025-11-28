'use server';
import { cookies } from 'next/headers';
import { LoginFormType } from './Login.types';


export async function handleLogin(data: LoginFormType) {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });


    const finalresp = await res.json();
    console.log("finalresp", finalresp);


    if (finalresp.message.toLowerCase() === 'success') {

        const cookie = await cookies();
        cookie.set('user-token', finalresp.token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7

        });
        return { success: true, message: "Logged in successfully" };
    } else {
        return { success: false, message: finalresp.message || "Invalid credentials" };
    }
}
