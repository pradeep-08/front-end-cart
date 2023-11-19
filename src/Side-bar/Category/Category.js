import Input from "../../components/input";
import "./Category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
    
        <label className="sidebar-label-container">
         <input className="input-radio"  onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark" ></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="mens"
          title="MEN"
          name="test"
          
        />
        <Input
          handleChange={handleChange}
          value="womens"
          title="WOMEN"
          name="test"
          
        />
        <Input
          handleChange={handleChange}
          value="kids"
          title="KIDS"
          name="test"
          
        />

       
    
    </div>
    </div>
    
  );
}

export default Category;