import { useState } from "react";
import '../styles/CardCarousal.css';

const products = [
  {
    src1: "https://img.buzzfeed.com/buzzfeed-static/static/2020-10/12/14/asset/746ba16bb873/sub-buzz-87-1602511463-1.jpg?crop=1025:1400;0,0",
    text: "First Product",
    price: "999",
    prod_id: "1",
  },
  {
    src1: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    text: "Second Product",
    price: "899",
    prod_id: "2",
  },
  {
    src1: "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
    text: "Third Product",
    price: "499",
    prod_id: "3",
  },
  {
    src1: "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2018/07/colourpop-no-filter-foundation-071318-social-071318-1024x538.jpg",
    text: "Fourth Product",
    price: "599",
    prod_id: "4",
  },
];

function CardCarousel() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistClick = (prod_id) => {
    if (wishlist.includes(prod_id)) {
      // If product is already in wishlist, remove it
      setWishlist(wishlist.filter(id => id !== prod_id));
    } else {
      // If product is not in wishlist, add it
      setWishlist([...wishlist, prod_id]);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Best Sellers</h2>
      <div className="card-carousel">
        {products.map(({ src1, text, price, prod_id }) => (
          <div className="card_bestseller" key={prod_id}>
            <div className="image-container">
              <img src={src1} alt={text} />
            </div>
            <div className="card-body">
              <p>{text}</p>
              <p className="price">₹{price}</p>
              <div className="button-container">
                <div
                  className="wishlist"
                  onClick={() => handleWishlistClick(prod_id)}
                >
                  <svg
                    fill={wishlist.includes(prod_id) ? "red" : "black"}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                  >
                    <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                  </svg>
                </div>
                <button className="shop-now-button">SHOP NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
