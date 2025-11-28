'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { handleRegister } from './register.action';
import { Registerschema } from './Register.schema';
import { RegisterFormType } from './Register.types';



export default function RegisterForm() {

    const router = useRouter();

    const Rhfobj = useForm({
        resolver: zodResolver(Registerschema)
    });
    const { control, handleSubmit } = Rhfobj;

    async function mySubmit(data: RegisterFormType) {

        const resOutput = await handleRegister(data);
        console.log("resOutput => ", resOutput);

        if (resOutput.success) {
            toast.success("Congratulations created Successufully", { position: 'top-right', duration: 3000 })
            router.push('/login');
        }
        else {
            toast.error(resOutput.message, { position: 'top-right', duration: 3000 })

        }
    }




    return (
        <div className=''>
            <Form  {...Rhfobj}  >
                <form onSubmit={handleSubmit(mySubmit)}>




                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>UserName:</FormLabel>
                                <FormControl>

                                </FormControl>
                                <Input {...field} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email:</FormLabel>
                                <FormControl>

                                </FormControl>
                                <Input {...field} type='email' />
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>

                                </FormControl>
                                <Input {...field} type='password' />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={control}
                        name="rePassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password:</FormLabel>
                                <FormControl>

                                </FormControl>
                                <Input {...field} type='password' />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> User Phone:</FormLabel>
                                <FormControl>

                                </FormControl>
                                <Input {...field} type='tel' />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='my-5 px-7 py-5 '>Register</Button>


                </form>


            </Form>
        </div>


    )
}
