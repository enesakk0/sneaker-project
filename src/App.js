import "./styles.css";
import { useState } from "react";
import ImageSlider from "./ImgSlider";
import CartProduct from "./CartProduct";

export default function App() {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState(false);
  const [product, setProduct] = useState([]);
  const [menu, setShowMenu] = useState(false);

  const deletedCart = (id) => {
    const updateCart = product.filter((item) => item.key !== id);
    setProduct(updateCart);
  };

  const MobilMenu = () => {
    return (
      <>
        <div className="MobileMenu">
          <img
            src="../images/icon-close.svg"
            alt="Close Menu"
            width="50"
            height="50"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          <ul className="MobileMenuItem">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        {menu ? <div id="overlay"></div> : null}
      </>
    );
  };

  const images = [
    { key: 1, bannerCode: "../images/image-product-1.jpg" },
    { key: 2, bannerCode: "../images/image-product-2.jpg" },
    { key: 3, bannerCode: "../images/image-product-3.jpg" },
    { key: 4, bannerCode: "../images/image-product-4.jpg" }
  ];

  const productItems = (productImage, counter, productName) => {
    const productList = () => {
      return [
        ...product,
        {
          key: crypto.randomUUID(),
          image: productImage,
          productCount: counter,
          name: productName
        }
      ];
    };
    setProduct(productList);
  };

  return (
    <section className="Container">
      {menu ? <MobilMenu /> : null}
      <header className="Header">
        <img
          onClick={() => setShowMenu((prev) => !prev)}
          className="MenuMobile"
          src="../images/icon-menu.svg"
          alt="Logo"
        />
        <img
          id="Logo"
          src="../images/logo.svg"
          alt="Logo"
          width="150"
          height="20"
        />
        <nav className="Menu">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="AvatarCart">
          <div
            onClick={() => setCart((prev) => !prev)}
            className="CartContainer"
          >
            <img
              id="Cart"
              src="../images/icon-cart.svg"
              alt="Cart"
              width="20"
              height="20"
            />
            <div className="CartIcon">{product.length}</div>
          </div>
          <img
            id="Avatar"
            src="../images/image-avatar.png"
            alt="Avatar"
            width="50"
          />
        </div>
      </header>
      {cart && (
        <CartProduct
          images={images}
          product={product}
          deletedProduct={deletedCart}
        />
      )}
      <main className="Content">
        <ImageSlider images={images} />
        <section className="ProductDesc">
          <h3 className="ProductDescTitle">SNEAKER COMPANY</h3>
          <h1 className="ProductMainTitle">Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <article className="Price">
            <p>$125.00</p>
            <p>50%</p>
          </article>
          <article className="ProductCount">
            <article className="ProductCounter">
              <button
                onClick={() => {
                  setCounter((prev) => {
                    if (prev <= 1) {
                      return 1;
                    }
                    return prev - 1;
                  });
                }}
                className="ProductCounterButton"
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="ProductCounterButton"
              >
                +
              </button>
            </article>
            <div
              onClick={() =>
                productItems(
                  images[0].bannerCode,
                  counter,
                  "Fall Limited Edition Sneakers"
                )
              }
              className="ProductCartButton"
            >
              <p>Add to Cart</p>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}
