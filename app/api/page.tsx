//import packages
import React from "react";
import { Metadata } from "next";

//import locally
import { ScrollArea } from "@/components/ui/scroll-area";
import { SmallNav } from "@/components/SmallNav";
import { StkPush } from "@/components/StkPush";


export const metadata: Metadata = {
    title: "Api",
  };


const links = [
    "StkPush",

]


const Page = () => {
    return (
        <>
        <ScrollArea className="w-4/6 p-5 h-full">
        <SmallNav />
        <h1 className="text-myTextColor">API</h1>
        <p className="text-myGray">The documentation of all available functions and types.</p>
        <StkPush />


        </ScrollArea >
        </>
    )
}


export default Page;