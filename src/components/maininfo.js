import React from "react";
import Moreinfo from "./more.info";

const firstNgo = {
    img : "",
    name: " Water For People India ",
    info: `Water For People India is a public charitable trust focused on providing sustainable access to high-quality drinking water, sanitation and hygiene (WASH) services to create a water secure environment, sustained by local communities, businesses and governments.
    Established in 2008, we design and implement ground – level
     solutions that help the marginalized communities – rural areas and urban slums – access their share of water resources.`,
};

function MainInfo(){
    return (
        <Moreinfo  name={firstNgo.name} info={firstNgo.info}   />
    );
}

export default MainInfo;