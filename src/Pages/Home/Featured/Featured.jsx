// // import React from 'react';

// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import featuredImg from "../../../assets/home/featured.jpg";
// import './Featured.css'

// const Featured = () => {
//   return (
//     <div className="featured-item bg-fixed text-white pt-8 my-20">
//       <SectionTitle
//         heading={"Featured Items"}
//         subHeading={"Check it out"}
//       ></SectionTitle>
//       <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 ">
//         <div>
//           <img src={featuredImg} alt="" />
//         </div>
//         <div className="md:ml-10">
//           <p>May 24,2026</p>
//           <p className="uppercase">WHERE CAN I GET SOME?</p>
//           <p>
//             Welcome to our restaurant! We take pride in offering a diverse menu
//             filled with delicious and mouth-watering dishes prepared by our
//             talented chefs. Whether you are craving a sizzling steak, fresh
//             seafood.
//           </p>
//           <button className="btn btn-outline border-o border-b-4 mt-4">Order Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-cover bg-center bg-no-repeat bg-fixed text-white pt-8 my-20" style={{ backgroundImage: `url(${featuredImg})` }}>
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 ">
        <div>
          <img src={featuredImg} alt="" className="hidden md:block" />
        </div>
        <div className="md:ml-10">
          <p>May 24,2026</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Welcome to our restaurant! We take pride in offering a diverse menu
            filled with delicious and mouth-watering dishes prepared by our
            talented chefs. Whether you are craving a sizzling steak, fresh seafood.
          </p>
          <button className="btn btn-outline border-o border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
