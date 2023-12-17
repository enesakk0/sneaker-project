export default function CartProduct({ images, product, deletedProduct }) {
  const updateProduct = (id) => {
    deletedProduct(id);
  };

  const showProduct = product.map((item) => {
    return (
      <>
        <article key={item.key} className="CartProduct">
          <img src={images[0].bannerCode} alt="ProductImage" />
          <article className="CartProductDetails">
            <p>Fall Limited Edition Sneakers</p>
            <article className="CartProductPrice">
              <section className="CartCounterPriceDetail">
                <p>{`$125.00 x ${item.productCount}`}</p>
              </section>
              <p>{`$ ${item.productCount * 125}`}</p>
            </article>
          </article>
          <img
            onClick={() => updateProduct(item.key)}
            src="../images/icon-delete.svg"
            alt="Delete Product"
          />
        </article>
      </>
    );
  });

  const MenuCart = () => {
    return (
      <div className="CartMenu">
        <section className="CartDetail">
          <p>Cart Details</p>
          <p className="CartBreak"></p>
          {product.length ? (
            <>
              {showProduct}
              <div className="ProductCartButton">
                <p>Checkout</p>
              </div>
            </>
          ) : (
            <div className="CartEmpty">
              <p>Your cart is empty</p>
            </div>
          )}
        </section>
      </div>
    );
  };

  return <MenuCart />;
}
