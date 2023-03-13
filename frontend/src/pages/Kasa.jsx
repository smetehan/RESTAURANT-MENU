import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";
import useAuthCalls from "../hooks/useAuthCalls";
import MasaSec from "./MasaSec";

const Kasa = () => {
  const { kasa, wait, setKasa, cash, setCash, setWait } = useLoginContext();

  const { siparisMenuData, getKasaData, kasaDelData } = useAuthCalls();

  const [totalPrice, setTotalPrice] = useState([]);

  const total = () => {
    let toplam = 0;
    setTotalPrice(
      cash?.map((item) => (toplam += Number(item.price)))[cash.length - 1]
    );
  };

  const handleGetirClick = () => {
    getKasaData();
    siparisMenuData();
    setWait("1");
  };
  const handleClick = () => {
    total();
    setWait("1");
  };

  const handleOdeClick = () => {
    setWait("1");
    kasaDelData();
    getKasaData();
    siparisMenuData();
    setTotalPrice([]);
  };

  useEffect(() => {
    getKasaData();
    handleClick();
  }, [wait]);

  return (
    <div className="kasa-bcg">
      {!kasa?.masa && <MasaSec />}
      {kasa?.masa && (
        <Container>
          <h3>KASA ÖDEME VE SİPARİŞ EKRANI</h3>
          <h3>MASA NO : {kasa?.masa}</h3>
          <Row>
            {cash?.map((item) => {
              const { title, price, image, id } = item;

              return (
                <Col key={id} sm={12} md={6} lg={4} xl={4} className="mb-3">
                  <div className="kasa-hesap">
                    <img className="kasa-img" src={image} alt="kasa" />
                    <div className="kasa-masa-no"></div>

                    <div className="kasa-baslik">
                      <h5>{title}</h5>
                      <h5>{price}₺</h5>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <div className="toplam-div">TOPLAM : {totalPrice}₺</div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Button
                className="btn-kasa-hesap"
                onClick={() => {
                  handleGetirClick();
                }}
              >
                Siparişleri Getir
              </Button>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Button
                className="btn-kasa-hesap"
                onClick={() => {
                  handleClick();
                }}
              >
                Hesapla
              </Button>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Button
                className="btn-kasa-hesap"
                onClick={() => handleOdeClick()}
              >
                Öde
              </Button>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Button
                className="btn-kasa-hesap"
                onClick={() => {
                  setKasa({ masa: "" });
                  setCash([]);
                  setTotalPrice([]);
                }}
              >
                Geri
              </Button>
            </Col>
          </Row>
        </Container>
      )}

      <Outlet />
    </div>
  );
};

export default Kasa;
