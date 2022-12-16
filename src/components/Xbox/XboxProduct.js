/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { axiosLoop } from "../../rtk/Slices/xbox-slice";
import { Container, Row, Col } from "react-bootstrap";
import "../Cart-box.css";
import { addToCart } from "../../rtk/Slices/cart-Slice";
import { addToFav } from "../../rtk/Slices/fav-Slice";
function Xbox() {
  const items = useSelector((state) => state.xbox);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosLoop());
  }, []);
  return (
    <Container>
      <Row className="p-3">
        {items.map((ele) => (
          <Col key={ele.id} xs={6} md={4}>
            <figure
              className="snip1268"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"400px" }}
            >
              <div className="image">
                <img src={ele.img} alt="sq-sample4" />
                <div className="icons">
                <a onClick={() => dispatch(addToFav(ele))}>
                    <i className="ion-star"></i>
                  </a>
                  <a href="#">
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
                <h2 className="main-f pt-2">{ele.title}</h2>
                <p className="modal-f text-black-50">{ele.model}</p>
                <div className="price">{ele.price}$</div>
              </figcaption>
            </figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Xbox;
