'use client'
import { SERVICES } from "@/lib/data"
import Image from "next/image"

export default function Service() {
    return (
        <section className="relative flex flex-col justify-center items-center p-6 md:mb-20 bg-[url(https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-maroon/80 z-10" />
            <div className="container mx-auto w-[85%] z-30" id="practice">
                <div className="flex flex-col bg-cream rounded-xl md:py-16 md:px-28 md:mt-[-20rem] mb-8">
                    <div className="p-6 md:w-[40%] text-black flex flex-col max-w-4xl mb-4 md:mb-8">
                        <h6 className="text-brown text-sm tracking-widest md:text-md mb-4 uppercase">
                            What we do         
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-[#652126] font-medium mb-6">
                            Practice Areas
                        </h1>
                        <p className="leading-[1.6] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 md:gap-8">
                        {
                            SERVICES.map((item) =>(
                                <div 
                                    key={item.id}
                                    className="flex flex-col justify-center space-y-2 bg-white py-8 px-6 md:p-8 rounded-xl w-full">
                                    <Image src={item.image} alt="law" width={40} height={40} />
                                    <h1 className="text-md text-[#652126] font-style font-bold">{item.name}</h1>
                                    <p className="text-sm text-gray-700">
                                        {item.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="z-40 my-8">
                <h6 className="text-white text-center">
                    If you have any legal problem in your life... 
                    <span className="text-[#E0C392] font-bold underline px-2">Free Consultation</span>
                </h6>
            </div>
        </section>
    )
}