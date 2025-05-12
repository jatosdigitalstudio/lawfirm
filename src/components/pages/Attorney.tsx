import Image from "next/image"
import { ATTORNEYS } from "@/lib/data"


export default function Attorney() {
    return (
        <section className="flex justify-center items-center px-6 my-20" id="attorney">
            <div className="container max-w-6xl mx-auto">
                <div className="flex flex-col justify-center rounded-xl p-6 md:py-20 md:px-28 mb-12">
                    <div className="md:w-[60%] px-2 mx-auto text-black flex flex-col justify-center mb-16">
                        <h6 className="text-brown text-sm tracking-widest md:text-md mb-4 uppercase">
                            attorneys      
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            Best Attorneys
                        </h1>
                        <p className="leading-[1.6] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
                        {
                            ATTORNEYS.map((item, idx) =>(
                                <div className="relative overflow-hidden w-70 md:w-50 h-80 rounded-xl" key={idx}>
                                    <Image
                                        src={item.image}
                                        alt="background"
                                        fill={true}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute flex bottom-4 bg-maroon rounded-r-lg px-6 py-2">
                                        <p className="text-white">{item.name}</p>
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