export enum ProductType {
  COMPUTER = "COMPUTER",
  NOTEBOOK = "NOTEBOOK",
  CELL = "CELL",
  MOUSE = "MOUSE",
  KEYBOARD = "KEYBOARD",
  SOUND_PHONE = "SOUND_PHONE",
  PRINTER = "PRINTER",
  MONITOR = "MONITOR",
  PERIPHERAL = "PERIPHERAL",
  USB = "USB",
  OTHERS = "OTHERS",
}
interface IProdutcType {
  title: string;
  value: string;
}

export const ProductTypes: IProdutcType[] = [
  {
    title: "COMPUTER",
    value: "COMPUTER",
  },
  {
    title: "NOTEBOOK",
    value: "NOTEBOOK",
  },
  {
    title: "CELL",
    value: "CELL",
  },
  {
    title: "MOUSE",
    value: "MOUSE",
  },
  {
    title: "KEYBOARD",
    value: "KEYBOARD",
  },
  {
    title: "SOUND_PHONE",
    value: "SOUND_PHONE",
  },
  {
    title: "PRINTER",
    value: "PRINTER",
  },
  {
    title: "MONITOR",
    value: "MONITOR",
  },
  {
    title: "PERIPHERAL",
    value: "PERIPHERAL",
  },
  { title: "USB", value: "USB" },
  { title: "OTHERS", value: "OTHERS" },
];
