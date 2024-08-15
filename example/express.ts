import express, { type Request, type Response } from "express";
import { VnpayQrClient } from "../src/vnpay-qr-client";
import { CountryCode, CurrencyCode } from "../src/constants";
import dotenv from "dotenv";
dotenv.config();

const {
  BASE_URL,
  APP_ID,
  APP_SECRET,
  MERCHANT_CODE,
  MERCHANT_NAME,
  MERCHANT_TYPE,
  REFUND_SECRET,
} = process.env;

const app = express();
const port = 3000;
const vnpayQrClient = new VnpayQrClient({
  baseUrl: BASE_URL || "",
  appId: APP_ID || "",
  appSecret: APP_SECRET || "",
  merchantCode: MERCHANT_CODE || "",
  merchantName: MERCHANT_NAME || "",
  merchantType: MERCHANT_TYPE || "",
  masterMerCode: "A000000775",
  refundSecret: REFUND_SECRET || "",
});

app.get("/ping", (req: Request, res: Response) => {
  return res.send("pong");
});

app.get("/qr-code", async (req: Request, res: Response) => {
  const response = await vnpayQrClient.createQrCode({
    ccy: CurrencyCode.VND,
    serviceCode: "03",
    countryCode: CountryCode.VN,
    payType: "03",
    productId: "",
    txnId: "",
    billNumber: "123456",
    terminalId: "TERMINAL_ID",
    amount: "10000",
    tipAndFee: "",
    expDate: "2408091900",
    purpose: "",
  });
  return res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
