"use client"
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[45rem] overflow-hidden mr-8 md:mr-18 bg-[#652126] flex items-center rounded-tr-[5rem]">
        <div className="container mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#652126]/80" />

            <div className="relative text-left text-white md:ml-12 px-6 md:px-24">
                <div>
                    <p className="font-text text-sm md:text-md tracking-widest mb-4 uppercase">
                        Legal Conseling            
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl leading-[1.2] font-style md:text-5xl font-medium">
                        If you have any- <br />
                        legal problem in your life... <br />
                        <span className="text-[#E0C392]">we are available</span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
                    <Link href="/#about" scroll className="border border-white px-6 py-3 rounded-full">
                        Get Consultation
                    </Link>
                </div>
            </div>

        </div>
        
    </section>
  );
}
