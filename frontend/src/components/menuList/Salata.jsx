import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoginContext } from "../../context/LoginProvider";
import useAuthCalls from "../../hooks/useAuthCalls";
import useAxios from "../../hooks/useAxios";

const Salata = () => {
  const { postMenuData, siparisMenuData, getKasaData } = useAuthCalls();
  const { box, setBox, wait, setWait } = useLoginContext();
  const [menu, setMenu] = useState([]);
  const { axiosWithToken } = useAxios();
  const getMenuData = async () => {
    const data = await axiosWithToken("menu/salata/");
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
        <Row>
          <h4>SALATALAR</h4>
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
                <form>
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
                </form>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Salata;
