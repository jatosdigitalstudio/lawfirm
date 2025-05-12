import Image from "next/image"
export default function About() {
    return (
        <section className="flex justify-center items-center md:h-[40rem] my-20 px-6 md:mb-[20rem]" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center px-6">
                    <div className="text-black flex flex-col max-w-4xl mb-8 md:px-24">
                        <h6 className="text-brown text-sm tracking-widest md:text-md mb-4 uppercase">
                            who we are         
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            We are here to fight against any violance with experience
                        </h1>
                        <p className="leading-[1.6] text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p>
                        <p className="leading-[1.6] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget. Dolor dictum nibh aliquam nunc mattis amet       
                        </p>
                    </div>
                    <div className="md:px-12">
                        <Image src="/about.png" width={400} height={400} alt="about lawfirm" />
                    </div>
                </div>
            </div>
        </section>
    )
}