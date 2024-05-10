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
    order_id: Math.floor(Math.random() * 100) + 1,
    price: price.toFixed(2),
    parts: parts,
  };
};
