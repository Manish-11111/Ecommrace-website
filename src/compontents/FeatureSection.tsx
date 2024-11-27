import ProductCard from "./ProductCard";

const Data = [
  { id: 1, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 2, img: "product_2.webp", name: "Crunchy Crisps", price: "$300" },
  { id: 3, img: "product_3.webp", name: "Jewel Cranberries", price: "$200" },
  { id: 4, img: "product__4.jpg", name: "Almond Organic", price: "$100" },
];

const FeatureSection = () => {
  return (
    <div className="Container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-500 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-red-600 hover:text-accent">Vegetables</button>
          <button className="text-red-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/hero__2.jpg"
            alt="banner"
          />
        </div>
        {Data.map((el) => (
          <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
