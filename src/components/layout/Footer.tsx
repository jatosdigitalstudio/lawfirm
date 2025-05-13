import Link from "next/link";

export default function Footer() {
    return (
      <footer className="py-4 md:py-8 px-6 md:px-16">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="mb-2 max-w-md">
                <Link href="/" >
                    <h1 className='text-2xl font-style mb-4'><span className='text-[#652126] font-bold'>LAW</span>FIRM</h1>
                </Link>
                <p className="text-md text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget.
                </p>
                <div className="flex flex-row mt-6 gap-2">
                    <Link className="bg-red p-2 rounded-full" href="www.facebook.com">
                        {/* <RiFacebookCircleFill size={32} className= text-gray-800" /> */}
                    </Link>
                    <Link className="bg-red p-2 rounded-full" href="https://www.instagram.com/">
                        {/* <RiInstagramFill size={32} className= text-gray-800" /> */}
                    </Link>
                    <Link className="bg-red p-2 rounded-full" href="https://www.linkedin.com/">
                        {/* <RiLinkedinBoxFill size={32} className= text-gray-800" /> */}
                    </Link>
                </div>
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h3 className="font-style text-maroon text-xl mb-4">Company</h3>
                  <ul className="space-y-2 text-md ">
                      <li><Link href="/#about" className="text-gray-800">About Us</Link></li>
                      <li><Link href="/#practice" className="text-gray-800">Practice Areas</Link></li>
                      <li><Link href="/#attorney" className="text-gray-800">Attorneys</Link></li>
                      <li><Link href="/#journal" className="text-gray-800">Journal</Link></li>
                  </ul>
                </div>

                <div>
                <h3 className="font-style text-maroon text-xl mb-4">Practice Areas</h3>
                <ul className="space-y-2 text-md ">
                    <li><Link href="/" className="text-gray-800">Real Estate Law</Link></li>
                    <li><Link href="/" className="text-gray-800">Finance Law</Link></li>
                    <li><Link href="/" className="text-gray-800">Transportation Law</Link></li>
                    <li><Link href="/" className="text-gray-800">Corporate Law</Link></li>
                    <li><Link href="/" className="text-gray-800">Maritim Law</Link></li>
                    <li><Link href="/" className="text-gray-800">Insurance Law</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-style text-maroon text-xl mb-4">Contact Us</h3>
                <ul className="space-y-2 text-md ">
                    <li><Link href="/" className="text-gray-800">+6221 22441337 </Link></li>
                    <li><Link href="/" className="text-gray-800">+6221 22442642 </Link></li>
                </ul>
                </div>
            </div>
          </div>

  
          <div className="border-t border-maroon mt-4 md:mt-2 pt-8 text-center text-sm md:text-md">
            <p>© 2025 LAWFIRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }