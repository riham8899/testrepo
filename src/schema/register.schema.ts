
import *  as z from "zod";


export const registerSchema = z.object({

    name: z.string().min(4, "min Length 4").max(16, "max Length 16"),
    email: z.email("invalid email"),
    password: z.string().min(6, "min Length 6").max(12, "max Length 12"),
    rePassword: z.string().min(6, "min Length 6").max(12, "max Length 12"),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, "invalid phone number")
}).refine(function (object) {

    if (object.password === object.rePassword) {

        return true
    }
    return false
}, {
    path: ["rePassword"],

    error: "password dont match"
})


export type RegisterSchemType = z.infer<typeof registerSchema> 