import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/* mobile */}
        <div className="h-full flex items-center justify-between md:hidden">
            <Link href="">
                <div className="text-2xl tracking-wide">
                    LAMA
                </div>
            </Link>
            <Menu/>
        </div>

        {/* Web */}
        <div className="hidden md:flex h-full justify-between items-center">
            <div className=" w-1/3">
                <Link href="">
                    <Image src="/logo.png" alt="" width={24} height={24}/>
                    <div className="text-2xl tracking-wide">
                        LAMA
                    </div>
                </Link>
            </div>

            <div className=" w-2/3">
                Right
            </div>


        </div>

    </div>
  )
}

export default Navbar