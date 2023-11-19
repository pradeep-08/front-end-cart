import "../Recommended/Recommended.css"
import Button from "../components/button";

 function Recommended({handleClick}) {
  return <>
      <div>
        <h2 className="recommended-title">Top Brands</h2>
        <div className="recommended-flex">
          <button className="btns">All Brands</button>
          
          <Button  onClickHandler={handleClick} value="Nike"  title="Nike" />
          <Button  onClickHandler={handleClick} value="Puma"  title="Puma" />
          <Button  onClickHandler={handleClick} value="Allen Solly"  title="Allen Solly" />
          <Button  onClickHandler={handleClick} value="Van Heusen"  title="Van Heusen" />
          <Button  onClickHandler={handleClick} value="Others"  title="Others" />

        </div>
      </div>
  </>
}
export default Recommended;