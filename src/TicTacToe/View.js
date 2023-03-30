import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const View = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <i class="fa-solid fa-gamepad">Tictactoe Game</i>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default View;
