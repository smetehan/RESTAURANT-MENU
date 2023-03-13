import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useAuthCalls from "../hooks/useAuthCalls";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthCalls();
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    if (user.masa === "kasa") {
    }
  };

  return (
    <>
      <div className="title-masa">
        <h1 className="text-center mt-4">HOŞGELDİNİZ</h1>
        <h1 className="text-center mt-4">LÜTFEN MASA SEÇİNİZ</h1>
      </div>

      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Row>
              <Col sm={12} md={6} lg={4} xl={3}>
                <div
                  className="btn-masa"
                  type="text"
                  name="masa"
                  onClick={() =>
                    handleSubmit(
                      login({
                        username: "1",
                        password: "1923Tc**.",
                        email: "masa_1@masa.com",
                      })
                    )
                  }
                >
                  MASA 1
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <div
                  className="btn-masa"
                  type="text"
                  name="masa"
                  onClick={() =>
                    login({
                      username: "2",
                      password: "1923Tc**.",
                      email: "masa_2@masa.com",
                    })
                  }
                >
                  MASA 2
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <div
                  className="btn-masa"
                  type="text"
                  name="masa"
                  onClick={() =>
                    login({
                      username: "3",
                      password: "1923Tc**.",
                      email: "masa_3@masa.com",
                    })
                  }
                >
                  MASA 3
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <div
                  className="btn-masa"
                  type="text"
                  name="masa"
                  onClick={() =>
                    login({
                      username: "4",
                      password: "1923Tc**.",
                      email: "masa_4@masa.com",
                    })
                  }
                >
                  MASA 4
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <div
                  className="btn-masa mt-5"
                  type="text"
                  name="masa"
                  onClick={() => {
                    setUser({ ...user, masa: "kasa" });
                    navigate("/kasa");
                  }}
                >
                  KASA
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Login;
