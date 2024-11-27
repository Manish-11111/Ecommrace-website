import ProductCard from "./ProductCard";

const Data = [
  { id: 1, img: "breakfast_2.jpeg", name: "Chikan Gravi", price: "$500" },
  { id: 2, img: "Brakfast_1.jpg", name: "egga&amalate", price: "$50" },
  { id: 3, img: "breakfast_3.jpg", name: "Matter&Panirs", price: "$300" },
  { id: 4, img: "breakfast_4.jpg", name: "DhudhaMalai", price: "$100" },
];

const FeatureSectionBreakfast = () => {
  return (
    <div className="Container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-500 mt-2">
            Buy best quality breakfast online from big-basket stop near you.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Dairy</button>
          <button className="text-red-600 hover:text-accent">Pizza</button>
          <button className="text-red-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/Breakfast-board28.jpg"
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

export default FeatureSectionBreakfast;
