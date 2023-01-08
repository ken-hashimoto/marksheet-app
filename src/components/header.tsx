import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SelectChoiceFormat, SelectChoiceNum, SelectQNum } from "../pages/Home";

export const Header = () => {
  const initialQNum: number = 5;
  const initialChoiceNum: number = 5;
  const [ChoiceNum, setChoiceNum] = useState<number>(initialChoiceNum);
  const [ChoiceFormat, setChoiceFormat] = useState<string>("number");
  const [QNum, setQNum] = useState<number>(initialQNum);
  return (
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="/">マークシート</Navbar.Brand>
    //   </Container>
    // </Navbar>
    <Navbar bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">マークシート</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              Customize
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>問題番号の形式を選択してください</Nav.Item>
              <SelectChoiceFormat
                value={ChoiceFormat}
                handler={setChoiceFormat}
              ></SelectChoiceFormat>
              <Nav.Item>選択肢の数(1から9まで)を入力してください</Nav.Item>
              <SelectChoiceNum
                value={ChoiceNum}
                handler={setChoiceNum}
              ></SelectChoiceNum>
              <Nav.Item>問題数を入力してください</Nav.Item>
              <SelectQNum value={QNum} handler={setQNum}></SelectQNum>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
