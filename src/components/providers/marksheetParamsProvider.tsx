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
export const ChoiceFormatContext = createContext(
  {} as {
    ChoiceFormat: string;
    setChoiceFormat: Dispatch<SetStateAction<string>>;
  }
);
export const ChoiceFormatProvider: FC<Props> = (props) => {
  const { children } = props;
  const [ChoiceFormat, setChoiceFormat] = useState<string>("number");
  return (
    <ChoiceFormatContext.Provider value={{ ChoiceFormat, setChoiceFormat }}>
      {children}
    </ChoiceFormatContext.Provider>
  );
};
