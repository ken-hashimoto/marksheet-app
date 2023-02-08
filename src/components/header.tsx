import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SelectChoiceFormat, SelectChoiceNum, SelectQNum } from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Recover, Reset } from "../redux/PushedButtonSlice";
import { RootState } from "../redux/store";
import { useRef } from "react";
import styled from "styled-components";
import { setFormat } from "../redux/FormatSlice";
import { setChoiceNum } from "../redux/ChoiceNumSlice";
import { setQNum } from "../redux/QNumSlice";

export const Header = () => {
  // const isloading = useSelector((state: RootState) => state.loading.isloading);
  const dispatch = useDispatch();
  const ButtonCondition: Array<Array<boolean>> = useSelector(
    (state: RootState) => state.ButtonCondition.PushedButtonCondition
  );
  const selectedFormat: string = useSelector(
    (state: RootState) => state.format.format
  );
  const selectedChoiceNum: number = useSelector(
    (state: RootState) => state.ChoiceNum.ChoiceNum
  );
  const selectedQNum: number = useSelector(
    (state: RootState) => state.QNum.QNum
  );
  const onClickReset = () => {
    if (window.confirm("この操作は取り消せません、よろしいですか？")) {
      dispatch(Reset());
    }
  };

  type JSONinput = {
    Format: string;
    ChoiceNum: number;
    QNum: number;
    Buttons: Array<Array<boolean>>;
  };
  const onClickSave = () => {
    const fileName = "marksheet.json";
    const input: JSONinput = {
      Format: selectedFormat,
      ChoiceNum: selectedChoiceNum,
      QNum: selectedQNum,
      Buttons: ButtonCondition,
    };
    const data = new Blob([JSON.stringify(input)], {
      type: "text/json",
    });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
  };
  // ここ本当ににこれでいいのかな
  const inputRef = useRef<HTMLInputElement>(null!);

  const onClickRecover = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 型アサーションとかなくしたい
    if (!event.target.files) return;
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    let result: string | ArrayBuffer | null = "";
    fileReader.onload = (e) => {
      if (!(e.target instanceof FileReader)) {
        return;
      }
      try {
        result = e.target.result as string;
        const data = JSON.parse(result!) as JSONinput;
        dispatch(setFormat(data.Format));
        dispatch(setChoiceNum(data.ChoiceNum));
        dispatch(setQNum(data.QNum));
        dispatch(Recover(data.Buttons));
        return;
      } catch (e) {
        // ここなんとかしたい、現状だとパースに失敗したら真っ白になる
        alert("読み込みに失敗しました、リロードしてください");
        return;
      }
    };
  };

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
              <p></p>
              <Button onClick={onClickRecover} variant="primary">
                塗りつぶしの状態をJSONファイルで復元する
              </Button>
              <input
                hidden
                ref={inputRef}
                type="file"
                onChange={onFileInputChange}
              />
              <p></p>
              <Button onClick={onClickSave} variant="success">
                塗りつぶしの状態をJSONファイルで保存する
              </Button>
              <p></p>
              <Button onClick={onClickReset} variant="danger">
                塗りつぶしの状態をリセットする
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
