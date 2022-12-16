/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Cart-box.css";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromFav } from "../rtk/Slices/fav-Slice";
import { addToCart } from "../rtk/Slices/cart-Slice";
import { Col, Container, Row } from "react-bootstrap";

function Fav() {
  const cart = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, produce) => {
    acc += produce.price * produce.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <div className="pb-3 pt-1 d-flex justify-content-between">
        <button className="btn btn-outline-primary" style={{width: '30%'}}> {totalPrice} $ </button>
        <button className="btn btn-outline-danger" style={{width: '30%'}} onClick={() => dispatch(clear())}> Delete All </button>
      </div>
      <Row>
        {cart.map((i) => (
          <Col md="4">
            <figure className="snip1268" key={i.id}>
              <div className="image">
                <img src={i.img} alt="sq-sample4" />
                <div className="icons">
                  <a>
                  <i className="bi bi-star-fill"></i>
                  </a>
                  <a>
                    {" "}
                    <i className="bi bi-box2-fill"></i>
                  </a>
                  <a onClick={() => dispatch(deleteFromFav(i))}>
                    {" "}
                    <i className="bi bi-trash-fill"></i>
                  </a>
                </div>
                <button
                  onClick={() => dispatch(addToCart(i))}
                  href="#"
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
              <figcaption>
                <h2>{i.title}</h2>
                <p>{i.model}</p>
                <div className="price">{i.price}$</div>
              </figcaption>
            </figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Fav;
