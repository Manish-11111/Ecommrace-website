import FeatureCard from "./FeatureCard";

import { FiPhoneCall } from "react-icons/fi";
import { LiaMoneyBillWaveSolid, LiaGiftSolid,   } from "react-icons/lia";
import { MdLocalShipping } from "react-icons/md";


const data = [
    {
        title: "Free Shopping",
        icon: <MdLocalShipping />
    },

    {
      title: "Best Price Guarantee",
      icon: <LiaMoneyBillWaveSolid />,    
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />
    }
]

const FeauterSectionr = () => {
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
           { data.map(el => <FeatureCard key={el.title} title={el.title} icon={el.icon}/>)}
        </div>
    </div>
  )
}

export default FeauterSectionr