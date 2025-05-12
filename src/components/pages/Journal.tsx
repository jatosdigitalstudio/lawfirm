import { JOURNALS } from "@/lib/data"
import Image from "next/image"

export default function Journal() {
    return (
        <section className="flex justify-center items-center px-6 my-20" id="journal">
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-col justify-center rounded-xl p-6 md:py-20 md:px-28 mb-12">
                    <div className="md:w-[50%] mx-auto text-black flex flex-col justify-center mb-16">
                        <h6 className="text-brown text-sm tracking-widest md:text-md mb-4 uppercase">
                            journal      
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            Our Journal
                        </h1>
                        <p className="leading-[1.6] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {
                            JOURNALS.map((item, idx) =>(
                                <div className="flex flex-col overflow-hidden md:w-80 rounded-xl" key={idx}>
                                    <Image
                                        src={item.image}
                                        alt="background"
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                    />
                                    <div className="flex flex-col space-y-2 mt-6 px-2">
                                        <h6 className="text-brown text-xs tracking-widest uppercase">
                                            {item.category}      
                                        </h6>
                                        <h1 className="text-lg font-style text-maroon font-medium">
                                            {item.title}
                                        </h1>
                                        <p className="leading-[1.6] text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                                            donec magna.        
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                      
                    </div>
                </div>
            </div>
        </section>
    )
}