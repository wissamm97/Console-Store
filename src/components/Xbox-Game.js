/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/Slices/cart-Slice";
import { addToFav } from "../../rtk/Slices/fav-Slice";
import { xGame } from "../../rtk/Slices/xbox-slice";

function XGame() {
  const item = useSelector((state) => state.xbox);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(xGame());
  }, []);
  console.log(item);
  return (
    <Container>
      <Row className="p-3">
        {item.map((ele) => (
          <Col key={ele.id} xs={6} md={4}>
            <figure
              className="snip1268"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                height: "400px",
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
              <figcaption
                style={{
                  height: "142px",
                  margin: "20px auto",
                  overflow: "auto",
                }}
              >
                <h2 className="main-f pt-2">{ele.name}</h2>
                <p className="modal-f text-black-50">{ele.description}...</p>
                <div className="price">{ele.price}$</div>
              </figcaption>
            </figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default XGame;
