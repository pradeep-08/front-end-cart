import Input from "../../components/input";
import "./Price.css"

 function Price({ handleChange }) {
  return <>
  <div>
      <h2 className="sidebar-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"  />
          <span className="checkmark" ></span>All
        </label>
      <div>
      <Input 
          handleChange={handleChange}
          value={499}
          title="₹0-500"
          name="test"
        />
      
      <Input 
          handleChange={handleChange}
          value={799}
          title="₹500-800"
          name="test"
        />
     
      <Input 
          handleChange={handleChange}
          value={999}
          title="₹800-1000"
          name="test"
        />
      <Input 
          handleChange={handleChange}
          value={1299}
          title="Over ₹1000"
          name="test"
        />
     
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Under ₹500
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹500 - ₹1,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹1,000 - ₹2,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹2,000 - ₹3,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Over ₹3,000
        </label> */}
       
      </div>
    </div>
  
  </>
    
  
}
export default Price;