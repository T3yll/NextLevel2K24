"use server"

import { revalidateTag } from "next/cache"

const revalidateTagx= (tag:string)=>{
    console.log("revalidateTagx",tag);
    revalidateTag(tag)
}

export { revalidateTagx}