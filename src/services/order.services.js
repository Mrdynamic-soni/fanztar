import { mobileData } from "../utils/mobileData.js";

const isValidOrder = (partsArray) => {
  const requiredPartTypes = [
    "screen",
    "camera",
    "chargingPortType",
    "operatingSystem",
    "bodyType",
  ];
  const partTypeCounts = {};

  for (let partCode of partsArray) {
    for (let partType of requiredPartTypes) {
      if (mobileData.parts[partType].some((part) => part.code === partCode)) {
        partTypeCounts[partType] = (partTypeCounts[partType] || 0) + 1;
        break;
      }
    }
  }

  for (let partType of requiredPartTypes) {
    if (!partTypeCounts[partType] || partTypeCounts[partType] > 1) {
      return false;
    }
  }

  return true;
};

export const mobileDataListPrice = (partsArray) => {
  if (!isValidOrder(partsArray)) {
    return "Invalid order";
  }

  let totalPrice = 0;
  let selectedParts = [];

  for (let partCode of partsArray) {
    for (let partType in mobileData.parts) {
      const part = mobileData.parts[partType].find(
        (part) => part.code === partCode
      );
      if (part) {
        totalPrice += part.price;
        selectedParts.push(part?.part);
        break;
      }
    }
  }
  return {
    order_id: generateOrderId(),
    price: totalPrice.toFixed(2),
    parts: selectedParts,
  };
};

const generateOrderId = () => Math.floor(Math.random() * 100) + 1;
