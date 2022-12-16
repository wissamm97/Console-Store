/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../rtk/Slices/cart-Slice";
import { addToFav } from "../rtk/Slices/fav-Slice";
import axios from "axios";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Cart-box.css";
function Error() {
  const dispatch = useDispatch();
  const [xboxconsloe, setxboxConsloe] = useState([]);
  useEffect(() => {
    axios.get("../data.json").then((res) => setxboxConsloe(res.data.Xbox));
  }, []);

  return (
    <>
      <h1 className="text-center title pt-4 title-f fw-bold">XBOX - Console</h1>
      <Swiper
        className="swiper"
        modules={[EffectCoverflow]}
        effect="coverflow"
        loop={true}
        slidesPerView={3}
        style={{paddingBottom: '80px', paddingTop: '60px'}}
      >
        {xboxconsloe.map((item) => (
          <SwiperSlide
            style={{ width: "25%" }}
            className="swiper-slide pt-5"
            key={item.id}
          >
            <figure className="snip1268">
              <div className="image">
                <img src={item.img} alt="sq-sample4" />
                <div className="icons">
                  <a onClick={() => dispatch(addToFav(item))}>
                  <i className="bi bi-star-fill"></i>
                  </a>
                  <a>
                    {" "}
                    <i className="ion-search"></i>
                  </a>
                </div>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  href="#"
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
              <figcaption>
                <h2 className="main-f">{item.title}</h2>
                <p className="modal-f text-black-50">{item.model}</p>
                <div className="price">{item.price}$</div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Error;
