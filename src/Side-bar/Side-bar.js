import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Side-bar.css"


 function Sidebar({handleChange}) {
  console.log(handleChange);
return <>

    <section className="sidebar">
        <div className="logo-contaiener">
            <img className="logo-image" src={ require('../Capture.PNG')} alt="" />
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange}/>
    
        
    </section>
  </>
}

export default Sidebar;