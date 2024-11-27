import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/hero_4.png",
    },
    {
        id: 1,
        name: "Fresh panir-matar",
        count: "4 Products",
        img: "/paniar_.jpg",
    },
    {
        id: 2,
        name: "Sandwich",
        count: "6 Products",
        img: "/sandwich_.jpg",
    },
    {
        id: 3,
        name: "Fresh chikan",
        count: "4 Products",
        img: "/chikan_.jpg",
    },
    {
        id: 4,
        name: "Yammy Bragur",
        count: "5 Products",
        img: "/bargur_.jpg",
    },
    {
        id: 5,
        name: "Fresh fiesh",
        count: "3 Products",
        img: "/fish_.jpg",
    },
    {
        id: 6,
        name: "Beutiful Toys",
        count: "7 Products",
        img: "/toys_.jpg",
    },
    {
        id: 7 ,
        name: "Fresh Pizza",
        count: "5 Products",
        img: "/hero_14.jpg",
    },
];

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {data.map(el => 
           <CategoryCard 
           key={el.id} 
           img={el.img}
           name={el.name}
           count={el.count} 
        />
        )}
        </div>
    </div>
  );
};

export default Category;
