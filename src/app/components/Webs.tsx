
import Image from "next/image"
import coffee from "../images/coffee.jpg"

export default function Webs(){
    return(
      
        <div>
             <Image src={coffee} alt="coffee cup" style={{height:"450px", width:"1075px"}}
          />
         
        </div>
    )
}