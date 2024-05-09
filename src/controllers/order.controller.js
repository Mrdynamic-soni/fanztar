// src/controllers/ordersController.js

import { mobileDataListPrice } from "../services/order.services.js";

export const getMobileDataPrice = async (req, res) => {
  try {
    const { components } = req.body;
    if (!components || !Array.isArray(components)) {
      return res
        .status(400)
        .json({ status: 400, msg: "Invalid components list" });
    }

    const response = mobileDataListPrice(components);
    res
      .status(200)
      .json({ status: 200, msg: "Data fetched successfully", data: response });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ status: 500, msg: "Internal server error" });
  }
};
