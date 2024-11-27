import BlogsCard from "./BlogsCard";


const data = [
    {
        img: "/Latest_3.webp",
        title: "Healthy Food Healthy Life",
        date: "Aug 27, 2024",
        comment: 8,
    },
    {
        img: "/Latest_1.jpg",
        title: "Healthy Food Healthy Life",
        date: "Sept 12, 2024",
        comment: 2,
    },
    {
        img: "/Latest_2.jpg",
        title: "Healthy Food Healthy Life",
        date: "Oct 07, 2024",
        comment: 4,
    },

];


const BlogSection = () => {
  return <div className="container pt-16">
    <h2 className="font-bold text-2xl">Latest News</h2>
    <p className="text-gray-500"> Present Posts in a best way to highlight intersting moments of your blog</p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
    {data.map(el => (
  <BlogsCard 
    key={el.date} 
    img={el.img} 
    title={el.title} 
    data={el.date} 
    comment={el.comment}
  />
))}

    </div>
     </div>
  
}

export default BlogSection;
