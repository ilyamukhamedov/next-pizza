import React from "react";
import { cn } from "@/lib/utils"
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";



interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
return (
    <header className={cn('border border-b', className)}>
       <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
            <Image  src="/logo.svg" alt="logo" width={45} height={45} />
            <div>
                <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">The best pizza in town</p>
            </div>
            </div>

          <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
          <User size={16}/>
            Log in</Button>

            <div>
                <Button className="group relative">
                    <b>520p</b>
                    <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                    <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />

                </Button>
            </div>
          </div>
       
     
       </Container>
    </header>
)
}