// import React from "react";
import ProductCard from "./Card"


const ProductCatalog = () => {
//   const numbers = [1, 2, 4, 5];
  //   const product = {
  //     name: "prodct 1",
  //     price: 100,
  //   };

  // why do we need array of an object
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 100,
      img: "/bg.avif",
      desc: "Product 1 Description",
    }, //position is 0
    {
      id: 2,
      name: "product 2",
      price: 200,
      img: "/bg.avif",
      desc: "Product 2 Description",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      img: "/th.jpg",
      desc: "Product 3 Description",
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
      img: "/th.jpg",
      desc: "Product 4 Description",
    },
    {
      id: 5,
      name: "product 5",
      price: 500,
      img: "/th.jpg",
      desc: "Product 5 Description",
    },
    {
      id: 6,
      name: "product 6",
      price: 300,
      img: "/th.jpg",
      desc: "Product 6 Description",
    }, //position is 1
  ];

  return (
    <section className="w-full mt-10 px-20 h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-8">Product Catalog</h2>
        <div className="flex flex-wrap gap-10  items-center w-full">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard pro={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
 