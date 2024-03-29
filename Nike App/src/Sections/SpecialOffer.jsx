//import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap  items-center max-xl:flex-col-reverse gap-10 max-container ">
       <div className="flex-1">
          <img
            src={offer} width={773} 
            height={687} className="object-contain w-full"
          />
       </div>
       <div className="flex flex-1 flex-col">
   {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
        <h2 className=" font-palanquin text-4xl font-capitalize font-bold lg:max-w-lg">We Provide You     <span className="text-coral-red inline-block mt-3">Special</span> Offer
           
         {/* <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> */}
          {/* <br /> */}
          
      
        
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your Expereince with the unbeatable deals.From premier selections to incredible savings,we offer unparalleled value that sets us apart</p>
        <p className="mt-6 lg-max-w-lg  info-text">Navigate the realm of possibilities designed to fulfill your unique desires,surpassing the lofitiest expectations.Your journey with us is nothng short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="View Details" className="custom-class"/>
        <Button label="Learn More" className="custom-class" backgroundColor="bg-white" borderColor='border-slate-gray' textColor='text-slate-gray'/>

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
