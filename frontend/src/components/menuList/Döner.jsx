import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useLoginContext } from "../../context/LoginProvider";
import useAuthCalls from "../../hooks/useAuthCalls";
import useAxios from "../../hooks/useAxios";

const Döner = () => {
  const { axiosWithToken } = useAxios();

  const { postMenuData, siparisMenuData, getKasaData } = useAuthCalls();
  const { box, setBox, setWait } = useLoginContext();

  const [menu, setMenu] = useState([]);

  const getMenuData = async () => {
    const data = await axiosWithToken("menu/doner/");
    setMenu(data.data);
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const handleClick = (title, price, image, user, e) => {
    e.preventDefault();
    setBox([...box, { title, price, image, user }]);
    setWait("2");
    siparisMenuData();
    getKasaData();
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Row>
              <h4>DÖNERLER</h4>
              {menu?.map((item) => {
                const { title, image, id, price, user } = item;
                return (
                  <Col
                    key={id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className="mb-3 text-center siralama"
                  >
                    <img className="img-menu" src={image} alt="pide" />
                    <div className="menu-yazi">
                      <h5>{title}</h5>
                      <h5>{price}₺</h5>
                    </div>

                    <div className="div-btn">
                      <button
                        className="btn-edit-add"
                        type="submit"
                        onClick={(e) => {
                          handleClick(title, price, image, user, e);
                          postMenuData(title, price, image);
                        }}
                      >
                        Ekle
                      </button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Döner;
