import Image from "next/image";
import nature from "../../../../public/nature-img2.jpeg"

const Contact = () =>{
    return(
  <>
   <h1>  This the contact page.</h1>
   <div className="relative">
   <Image
   src={nature}
   width={100}
   height={100}
   alt="nature-image"
   placeholder="blur"
   fill={false}
   className="w-full h-full"
   />
   </div>
   </>
    
    );
}

export default Contact;