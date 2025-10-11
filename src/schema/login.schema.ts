

import * as z from "zod" ;


export const loginschema = z.object({
    email : z.email ('invalid email'),
    password:z.string().min(6, "min Length 6").max(12, "max Length 12")
})



export type LoginSchemaType =z.infer<typeof loginschema>