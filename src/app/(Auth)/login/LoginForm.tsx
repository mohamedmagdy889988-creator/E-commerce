

'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Loginschema } from './Login.schema'
import { LoginFormType } from './Login.types'


export default function LoginForm() {
    const RhfObj = useForm(
        {
            resolver: zodResolver(Loginschema),
        }
    )
    const { control, handleSubmit } = RhfObj
    const LoginSubmit = async (values: LoginFormType) => {
        const res = await signIn('credentials', { ...values, redirect: false })
        if (res?.ok) {
            window.location.href = '/'
            toast.success('Login Successful')
        } else {
            toast.error(res?.error || 'Login Failed')
        }

    }
    return (
       <Form {...RhfObj}>
  <form onSubmit={handleSubmit(LoginSubmit)} className="space-y-6">
    <div className="flex flex-col gap-6">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative ">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="pl-10 input-Auth h-12"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="pl-10 input-Auth h-12"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <button
      disabled={!RhfObj.formState.isValid || RhfObj.formState.isSubmitting}
      className="w-full mt-5 py-3 button-primary border rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition"
      type="submit"
    >
      Login
    </button>

    <div className="text-center space-y-4">
      <button
        type="button"
        className="w-full border py-3 rounded-md hover:bg-gray-50 transition"
      >
        Sign in with Google
      </button>
      <p className="text-sm text-gray-600">
        Don’t have an account?
        <Link
          href="/register"
          className="ml-2 font-medium text-primary underline underline-offset-4"
        >
          Register
        </Link>
      </p>
    </div>
  </form>
</Form>
    )
}