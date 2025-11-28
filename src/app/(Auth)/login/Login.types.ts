import * as zod from 'zod';
import { Loginschema } from './Login.schema';


 export type LoginFormType = zod.infer<typeof Loginschema>;