function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹{price}</p>

      <p>{"⭐".repeat(rating)}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;