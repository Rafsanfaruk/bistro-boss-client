// import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss "
        heading="Todays Offers"
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={desserts}title="Dessert"img={dessertImg}></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
      {/* salad items menu */}
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
      {/* soup items menu */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
