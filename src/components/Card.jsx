/* eslint-disable react/prop-types */
const ProductCard = ({ pro }) => {
    return (
      <div className=" text-black rounded-lg w-[300px] bg-gray-100  shadow-lg h-max flex flex-col justify-center items-center pt-4">
        <img src={pro.img} alt="product" className="w-[650px] h-[400px]" />
        <h2 className="text-xl font-bold">{pro.name}</h2>
        <p className="text-lg">Price: ${pro.price}</p>
        <p className="text-lg">Desc: {pro.desc}</p>
      </div>
    );
  };
  
  export default ProductCard;
  