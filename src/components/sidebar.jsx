import '../styles/sidebar.css'
const Sidebar = () => {
    let links=[
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },
        {
            logo:"images/home.png",
            name:"Home"
        },

    ]
    return ( 
        <div className="sidebar">
            {links.map((data)=>(
                    <div className="icons">
                        <img  src={data.logo} alt="" />
                        <p>{data.name}</p>
                    </div>
                ))}
        </div>
     );
}
 
export default Sidebar;