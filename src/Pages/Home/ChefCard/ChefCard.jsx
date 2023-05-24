// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefSingleCard from "./ChefSingleCard";

const ChefCard = () => {
    const [chefs, setChef] = useState([]);
    useEffect(() => {
        fetch("menu.json")
          .then((res) => res.json())
          .then((data) => {
            
            setChef(data.slice(0,3));
          });
      }, []);

    return (
        <section>
            <SectionTitle
            heading={"Should try"}
            subHeading={"Chef Recommends"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
        {
            chefs.map(item => <ChefSingleCard
            key={item._id}
            item={item}
            ></ChefSingleCard>)
        }
      </div>
            
        </section>
    );
};

export default ChefCard;