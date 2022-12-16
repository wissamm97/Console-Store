import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="bg-dark text-white rounded-5">
        <Container className=" text-center p-4">
          <h1 className="text-white modal-f pb-2">Design By :</h1>
          <Row>
            <Col>
              <h4 className="main-f">Wissam Abdalwhab</h4>
              <a
                href="mailto:WissamAbdalwhab.97@gmail.com?subject=Contact"
                className="link-info title-f link-colors"
              >
                WissamAbdalwhab.97@gmail.com
              </a>
              <ul className="social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/wissam.wesam.5/"
                    target="_blank" rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/wissam-abd-84417a226/"
                    target="_blank"
                    className="linkedin" rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/wissamm97?tab=repositories"
                    target="_blank"
                    className="github" rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className="main-f">Mahmoud Habab</h4>
              <a
                href="mailto:memo12memo34memo@gmail.com?subject=Contact"
                className="link-info title-f link-colors"
              >
                memo12memo34memo@gmail.com
              </a>
              <ul className="social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/memo12memo34memo/"
                    target="_blank" rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/mahmoud-habab"
                    target="_blank" rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mahmoud-habab"
                    target="_blank"
                    className="github" rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Contact;
