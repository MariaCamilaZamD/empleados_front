import React from "react"; //imr atajo para importar react
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';
import app from "../../app.json";

const { APIHOST } = app;

export default class login extends React.Component {
  //ccc atajo para traer estructura del construtor
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      pass: '',
    };
  }
  iniciarSesion (){
    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                    onChange={(e) =>
                    this.setState({ usuario: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Contraseña
                    </Form.Label>
                    <Form.Control type="password" placeholder="********"
                    onChange={(e) =>
                      this.setState({ pass: e.target.value})}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick= {() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
