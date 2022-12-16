import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import "./acc.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <Container className="p-4 " style={{marginTop:"150px"}}>
      <div className="d-flex justify-content-evenly edit">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                src="../Logoxbox.png"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <strong className="title-f fs-4">Xbox Consoles</strong>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="p-0 modal-f">
                <Link to="xbox" className="d-flex pt-2">
                  <img
                    src="../Logoxbox.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  The Consoles
                </Link>
                <Link to="xhead" className="d-flex pt-2">
                  <img
                    src="../Logoxbox.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  Xbox Headphones
                </Link>
                <Link to="XDualshock" className="d-flex pt-2 ">
                  <img
                    src="../Logoxbox.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  Xbox Dualshock
                </Link>
                <Link to="XGame" className="d-flex pt-2">
                  <img
                    src="../Logoxbox.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  Xbox Game
                </Link>
                <Link to="XAccessor" className="d-flex pt-2 ">
                  <img
                    src="../Logoxbox.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  Xbox Accessor
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                src="../logoPs.png"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <strong className="title-f fs-4">Play Station Consoles</strong>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="p-0 modal-f">
                <Link to="ps" className="d-flex pt-2">
                  <img
                    src="../logoPs.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  The Consoles
                </Link>
                <Link to="pshead" className="d-flex pt-2">
                  <img
                    src="../logoPs.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  PS Headphones
                </Link>
                <Link to="psDualshock" className="d-flex pt-2 ">
                  <img
                    src="../logoPs.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  PS Dualshock
                </Link>
                <Link to="psGame" className="d-flex pt-2">
                  <img
                    src="../logoPs.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  PS Game
                </Link>
                <Link to="psAccessor" className="d-flex pt-2 ">
                  <img
                    src="../logoPs.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 15px auto 0",
                    }}
                  />{" "}
                  PS Accessor
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default Product;
