"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const testimonials = [
  {
    name: "OpenAI API",
  },
  {
    name: "Riffusion ",
    description :"From Replicate"
 
  },  
  {
    name: "zeroscope-v2-xl",
    description :"From Replicate"
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">API Used</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-125px className=bg-[#192339] border-none text-white">{item.name}</p>
                  {/* <p className="text-zinc-400 text-sm">{item.title}</p> */}
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
           </Card>
        ))}
      </div>
    </div>
  )
}