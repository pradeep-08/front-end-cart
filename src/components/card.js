

function Card({ image, name, stars,  prevPrice, newPrice }) {
  return <>
    
    <section className="card">
      <img src={image} alt="" className="card-img" />
      <div className="card-details">
        <h3  className="card-title">{name} </h3>
        <section className="card-reviews">
          <span className="total-reviews">{stars} stars</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>₹{prevPrice}</del> ₹{newPrice}
          </div>
          <div className="add"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/shopping-basket-add.png" alt="shopping-basket-add"/></div>
        </section>
        
      </div>
    </section>
    
    </>
}
export default Card;