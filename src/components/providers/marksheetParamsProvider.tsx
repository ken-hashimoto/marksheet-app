import {
  useState,
  FC,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

type Props = {
  children: ReactNode;
};
export const MarkSheetParamsContext = createContext(
  {} as {
    ChoiceFormat: string;
    setChoiceFormat: Dispatch<SetStateAction<string>>;
    ChoiceNum: number;
    setChoiceNum: Dispatch<SetStateAction<number>>;
    QNum: number;
    setQNum: Dispatch<SetStateAction<number>>;
  }
);
export const MarkSheetParamsProvider: FC<Props> = (props) => {
  const { children } = props;
  const [ChoiceFormat, setChoiceFormat] = useState<string>("number");
  const initialChoiceNum: number = 5;
  const [ChoiceNum, setChoiceNum] = useState<number>(initialChoiceNum);
  const initialQNum: number = 5;
  const [QNum, setQNum] = useState<number>(initialQNum);
  return (
    <MarkSheetParamsContext.Provider
      value={{
        ChoiceFormat,
        setChoiceFormat,
        ChoiceNum,
        setChoiceNum,
        QNum,
        setQNum,
      }}
    >
      {children}
    </MarkSheetParamsContext.Provider>
  );
};
