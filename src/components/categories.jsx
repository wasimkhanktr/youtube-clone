import "../styles/categories.css"
const Categories = () => {
    let links=[
        {Category:"All"},
        {Category:"News"},
        {Category:"Live"},
        {Category:"Song"},
        {Category:"Movies"},
        {Category:"Bollywood"},
        {Category:"Hollywood"},
        {Category:"Java"},
        {Category:"Python"},
        {Category:"Html"},
        {Category:"React js"},
        {Category:"Song"},
        {Category:"Movies"},
        {Category:"Bollywood"},
        {Category:"Hollywood"},
        {Category:"Java"},
        {Category:"Python"},
        {Category:"Html"},
       
        
    ]
    return ( 
        <div className="categories">
           <div className="categories_link">
           {links.map((data)=>(
                    <a href="#wasim">{data.Category}</a>
                ))}
           </div>
        </div>
     );
}
 
export default Categories;