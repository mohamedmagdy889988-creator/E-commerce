import * as zod from 'zod';


export const Loginschema = zod.object({
    email: zod.email("Email is not valid"),
    password: zod.string().nonempty("Password is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),


});