import Link from "next/link"
export default function Header(){
    return(
        <div className="bg-orange-200 text-white">
              <h1 className="color-white texe-left text-2xl text-bold">Coffee</h1>
              <div className="bg-orange-200 text-blue flex justify-around text-blue-800">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/services">Services</Link>
              </div>
        </div>
    )
}