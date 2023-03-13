import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import Title from "../components/helper/Title";
import Döner from "../components/menuList/Döner";
import Icecek from "../components/menuList/Icecek";
import Kebap from "../components/menuList/Kebap";
import Pide from "../components/menuList/Pide";
import Salata from "../components/menuList/Salata";
import Tatlı from "../components/menuList/Tatlı";
import MenuRead from "../components/MenuRead";
import NavbarMenu from "../components/NavbarMenu";
import { useLoginContext } from "../context/LoginProvider";
import useAuthCalls from "../hooks/useAuthCalls";

const Home = () => {
  const { wait, setWait, swic, user } = useLoginContext();
  const { siparisUyari } = useAuthCalls();

  return (
    <Container>
      {swic && <Title />}
      {swic && <NavbarMenu />}

      {swic === "pide" && <Pide />}
      {swic === "kebap" && <Kebap />}
      {swic === "doner" && <Döner />}
      {swic === "salata" && <Salata />}
      {swic === "icecek" && <Icecek />}
      {swic === "tatli" && <Tatlı />}
      {swic && (
        <Col md={{ span: 6, offset: 3 }} className=" mb-5 menu-read">
          <h5> SEÇİLEN MENU</h5>
          <MenuRead />
          {wait === "2" && (
            <Button
              className="mt-3"
              size="lg"
              onClick={() => {
                setWait("3");
                siparisUyari(user);
              }}
            >
              Sipariş Ver
            </Button>
          )}
          {wait === "3" && (
            <div>
              <h4>Siparişiniz Alındı</h4>
            </div>
          )}
        </Col>
      )}
    </Container>
  );
};

export default Home;
