import * as zod from 'zod';
import { Registerschema } from './Register.schema';


 export type RegisterFormType = zod.infer<typeof Registerschema>;