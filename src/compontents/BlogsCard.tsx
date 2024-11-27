interface propsType {
    img: string;
    title: string;
    comment: number;
    data: string;
}

const BlogsCard:React.FC<propsType> = ({ img, title, data, comment }) => {
  return (
    <div className="space-y-4">
        <img className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="Post"
        />
        <div className="text-accent font-medium">
            <span>{data} / </span>
            <span>{comment} Comments</span>

        </div>
        <h3 className="font-bold text-xl">{title}</h3>
        
    </div>
  )
};

export default BlogsCard;
