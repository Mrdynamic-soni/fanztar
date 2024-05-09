import { uuid } from "uuidv4";
import { mobileData } from "../utils/mobileData.js";

export const mobileDataListPrice = (codeList) => {
  let price = 0;
  const parts = [];

  for (const code of codeList) {
    const part = mobileData.parts.find((part) => part.code === code);
    if (part) {
      price += part.price;
      parts.push(part.part);
    }
  }

  return {
    order_id: uuid(),
    price: price.toFixed(2),
    parts: parts,
  };
};
