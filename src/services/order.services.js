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
    let found = false;
    for (let partType of requiredPartTypes) {
      if (mobileData[partType][partCode]) {
        partTypeCounts[partType] = (partTypeCounts[partType] || 0) + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
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
    for (let partType in mobileData) {
      if (mobileData[partType][partCode]) {
        totalPrice += mobileData[partType][partCode].price;
        selectedParts.push(mobileData[partType][partCode].part);
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
