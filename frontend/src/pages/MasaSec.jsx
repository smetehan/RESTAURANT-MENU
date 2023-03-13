import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useLoginContext } from "../context/LoginProvider";
import useAuthCalls from "../hooks/useAuthCalls";

const MasaSec = () => {
  const { kasa, setKasa, setWait } = useLoginContext();
  const { logout } = useAuthCalls();

  const handleSubmit = (e) => {};

  return (
    <Container>
      <Row>
        <Col>
          <div className="masa-sec-baslik">
            <h2>SİPARİŞ VE ÖDEME İÇİN MASA SEÇİNİZ</h2>
          </div>
        </Col>
      </Row>
      <Row className="masa-sec-div">
        <Col
          sm={12}
          md={6}
          lg={4}
          xl={3}
          onClick={(e) => {
            handleSubmit(
              e.preventDefault(),
              setKasa({ ...kasa, masa: "1" }),
              setWait("1")
            );
          }}
          className="masa-sec text-center "
        >
          MASA 1
        </Col>
        <Col
          sm={12}
          md={6}
          lg={4}
          xl={3}
          onClick={(e) => {
            handleSubmit(
              e.preventDefault(),
              setKasa({ ...kasa, masa: "2" }),
              setWait("1")
            );
          }}
          className="masa-sec text-center"
        >
          MASA 2
        </Col>
        <Col
          sm={12}
          md={6}
          lg={4}
          xl={3}
          onClick={(e) => {
            handleSubmit(
              e.preventDefault(),
              setKasa({ ...kasa, masa: "3" }),
              setWait("1")
            );
          }}
          className="masa-sec text-center"
        >
          MASA 3
        </Col>
        <Col
          sm={12}
          md={6}
          lg={4}
          xl={3}
          onClick={(e) => {
            handleSubmit(
              e.preventDefault(),
              setKasa({ ...kasa, masa: "4" }),
              setWait("1")
            );
          }}
          className="masa-sec text-center"
        >
          MASA 4
        </Col>
      </Row>
      <Row>
        <Col
          onClick={(e) => {
            handleSubmit(logout());
          }}
          className="masa-sec-cikis text-center"
        >
          ÇIKIŞ YAP
        </Col>
      </Row>
    </Container>
  );
};

export default MasaSec;
