/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { psLoop } from "../rtk/Slices/ps-slice";
import { addToCart } from "../rtk/Slices/cart-Slice";
import { addToFav } from "../rtk/Slices/fav-Slice";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Cart-box.css";
function Error2() {
  const psconsloe = useSelector((state) => state.ps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(psLoop());
  }, [psconsloe]);
  return (
    <>
      <h1 className="text-center m-auto mb-5 title title-f fw-bold">PLAYSTATION - Console</h1>
      <Swiper
        className="swiper"
        modules={[EffectCoverflow]}
        effect="coverflow"
        loop={true}
        slidesPerView={3}
        style={{paddingBottom: '80px', paddingTop: '60px'}}
      >
        {psconsloe.map((ele) => (
          <SwiperSlide key={ele.id}>
            {" "}
            <figure className="snip1268">
              <div className="image">
                <img src={ele.img} alt="sq-sample4" />
                <div className="icons">
                <a onClick={() => dispatch(addToFav(ele))}>
                  <i className="bi bi-star-fill"></i>
                  </a>
                  <a>
                    {" "}
                    <i className="ion-search"></i>
                  </a>
                </div>
                <button
                  onClick={() => dispatch(addToCart(ele))}
                  href="#"
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
              <figcaption>
                <h2 className="main-f">{ele.name}</h2>
                <p className="modal-f text-black-50">{ele.model}</p>
                <div className="price">{ele.price}$</div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Error2;
