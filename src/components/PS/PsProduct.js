/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { psLoop } from "../../rtk/Slices/ps-slice";
import { Container, Row, Col } from "react-bootstrap";
import { addToCart } from "../../rtk/Slices/cart-Slice";
import { addToFav } from "../../rtk/Slices/fav-Slice";
function PS() {
  const items = useSelector((state) => state.ps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(psLoop());
  }, []);

  return (
    <Container>
      <Row className="p-3">
        {items.map((ele) => (
          <Col key={ele.id} xs={6} md={4}>
            <figure
              className="snip1268"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                height: "350px",
              }}
            >
              <div className="image">
                <img src={ele.img} alt="sq-sample4" />
                <div className="icons">
                <a onClick={() => dispatch(addToFav(ele))}>
                    <i className="ion-star"></i>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PS;
