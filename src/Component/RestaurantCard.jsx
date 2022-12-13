import styles from "./RestaurantCard.module.css"
function RestaurantCard({id, name, image,type,rating,price_starts_from,number_of_votes }) {
  return (
  <div data-testid="restaurant-card" className={styles.container}>
   {/* display the props */}
         <div key={id} className={styles.cardsingle}>
         <img src={image} alt="" />
         <div className={styles.cardsec}>
         <h3>Name : {name}</h3>
         <h3>Type : {type}</h3>
         <h4>Price : {price_starts_from}</h4>
         <h3>Rating : {rating}</h3>
         <h3>votes : {number_of_votes}</h3>
         </div>
        </div>
    </div>
  );
}

export default RestaurantCard;
