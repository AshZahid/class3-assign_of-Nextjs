
import Link from "next/link"

export default function Footer() {
    return(
        <div>
            <footer>
                <div className="bg-orange-200 text-white">
        <h3 className="text-xl">Timings</h3>
        <p>Mon-Sun 7AM-7PM</p>
        
        
        <Link href ="/about" className="text-blue-900">About Us</Link>
        <br></br>
        <Link href ="/contact"  className="text-blue-900">Contact</Link>
        
        
            <h3 className="bg-orange-200 text-white" >You can find us on</h3>
         <Link href="https://th.bing.com/th/id/OIP.R60Ut22Oh1mlSbQoTm-6jwHaHa?rs=1&pid=ImgDetMain"  className="text-blue-900">FACEBOOK</Link>
         <br></br>
         <Link  className="text-blue-900" href ="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=Og1ujXM2C1AJHQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa5%2fInstagram_icon.png&ehk=1%2fZWXYn2nN%2fR80TOtcKH5SsdLkkUvMLrB%2fHUXRDHk9I%3d&risl=&pid=ImgRaw&r=0">INSTAGRAM</Link>
         </div>
        </footer>
        </div>
    )
}