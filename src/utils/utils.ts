import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";




export async function getMyUserToken() {
  const cookie = await cookies();
  // const sessionToken = cookie.get('next-auth.session-token')?.value
  const sessionToken = cookie.get('__Secure-next-auth.session-token')?.value || // Production
    cookie.get('next-auth.session-token')?.value;            // Dev
  const decodedToken = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET! })
  return decodedToken?.credentialToken

}

export function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
