import { mobileDataListPrice } from "../services/order.services";

describe("mobileDataListPrice", () => {
  test("should calculate total price and list of parts correctly for valid input", () => {
    const codeList = ["A", "B", "C"];
    const expectedPrice = 67.65;
    const expectedOrderId = expect.any(Number);
    const expectedParts = ["LED Screen", "OLED Screen", "AMOLED Screen"];

    const result = mobileDataListPrice(codeList);

    expect(result.order_id).toEqual(expectedOrderId);
    expect(parseFloat(result.price)).toEqual(expectedPrice);
    expect(result.parts).toEqual(expectedParts);
  });

  test("should return 0 price and empty parts array for empty input", () => {
    const codeList = [];
    const expectedPrice = 0;
    const expectedOrderId = expect.any(Number);
    const expectedParts = [];

    const result = mobileDataListPrice(codeList);

    expect(result.order_id).toEqual(expectedOrderId);
    expect(parseFloat(result.price)).toEqual(expectedPrice);
    expect(result.parts).toEqual(expectedParts);
  });

  test("should handle non-existent part codes gracefully", () => {
    const codeList = ["nonExistentCode"];
    const expectedPrice = 0;
    const expectedOrderId = expect.any(Number);
    const expectedParts = [];

    const result = mobileDataListPrice(codeList);

    expect(result.order_id).toEqual(expectedOrderId);
    expect(parseFloat(result.price)).toEqual(expectedPrice);
    expect(result.parts).toEqual(expectedParts);
  });
});
