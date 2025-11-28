import * as zod from 'zod';


export const Registerschema = zod.object({
    name: zod.string().nonempty("Name is Required").min(3, "Name must be at 3 chars ").max(10, "Max 10 Chars"),
    email: zod.email("Email is not valid"),
    password: zod.string().nonempty("Password is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    rePassword: zod.string().nonempty("Password is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    phone: zod.string().nonempty('Phone is Required').regex(/^01[0125][0-9]{8}$/, 'Form must be an Egyption Number')


}).refine(function (object) {
    return object.password === object.rePassword;
}, {
    path: ['Repassword'], error: "Password and rePassword don't match",

});
type RegisterFormType = zod.infer<typeof Registerschema>;
