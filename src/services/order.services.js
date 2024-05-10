import { mobileData } from "../utils/mobileData.js";

export const mobileDataListPrice = (codeList) => {
  let price = 0;
  const parts = [];

  const partsMap = new Map();
  mobileData.parts.forEach((part) =>
    partsMap.set(part.code.toUpperCase(), part)
  );

  for (const code of codeList) {
    const part = partsMap.get(code.toUpperCase());
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
