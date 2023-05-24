const ChefSingleCard = ({item}) => {
  const {image,recipe,name} = item;
return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={image}
        alt="picture"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        {/* <button className="btn btn-outline btn-primary">Add To Cart</button> */}
        <button className="btn btn-outline border-o border-b-4 mt-4">Add to Cart</button>
      </div>
    </div>
  </div>
);
};

export default ChefSingleCard;