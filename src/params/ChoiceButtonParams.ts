export const QNumLimit: number = 50;
export const ChoiceLimit: number = 9;
export const CreateInitialArrays = (QNum: number, ChoiceNum: number) => {
  const initialarrays = new Array(QNum);
  for (let i = 0; i < QNum; i++) {
    initialarrays[i] = Array.from({ length: ChoiceNum }, () => false);
  }
  return initialarrays;
};
export const CreateInitialArraysByLimit = () => {
  const initialarrays = new Array(QNumLimit);
  for (let i = 0; i < QNumLimit; i++) {
    initialarrays[i] = Array.from({ length: ChoiceLimit }, () => false);
  }
  return initialarrays;
};
