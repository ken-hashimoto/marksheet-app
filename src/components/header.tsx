import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SelectChoiceFormat, SelectChoiceNum, SelectQNum } from "../pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import { Button } from "react-bootstrap";

export const Header = () => {
  // const isloading = useSelector((state: RootState) => state.loading.isloading);
  return (
    <Navbar bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">マークシート</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar`}
          aria-labelledby={`offcanvasNavbarLabel`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
              Customize
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* {isloading ? <p>読み込み中</p> : <p></p>} */}
              <Nav.Item>問題番号の形式を選択してください</Nav.Item>
              <SelectChoiceFormat></SelectChoiceFormat>
              <Nav.Item>選択肢の数(1から9まで)を入力してください</Nav.Item>
              <SelectChoiceNum></SelectChoiceNum>
              <Nav.Item>問題数を入力してください</Nav.Item>
              <SelectQNum></SelectQNum>
              {/* <Button>塗りつぶしの状態をリセットする</Button> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
