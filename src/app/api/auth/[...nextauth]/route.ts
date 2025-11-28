import { nextAuthConfig } from "@/next-auth/nextAuth.config";
import NextAuth from "next-auth"; 


const nextHandler = NextAuth(nextAuthConfig); 


export { nextHandler as GET, nextHandler as POST };