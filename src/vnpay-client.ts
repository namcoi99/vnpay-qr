import {
  CreateQr,
  CreateQrCodeResponse,
  RefundQr,
  RefundQrParams,
  RefundResponse,
  VnpayQrConfig,
  VnpayQrParams,
} from "./types";
import { generateChecksum } from "./utils";
import axios from "axios";

export class VnpayQrClient {
  constructor(private readonly config: VnpayQrConfig) {}

  async createQrCode(query: CreateQr) {
    const { baseUrl, appSecret, ...config } = this.config;
    const body: VnpayQrParams = {
      ...config,
      ...query,
    };
    body.checksum = generateChecksum(body, appSecret);

    const response = await axios.post(
      `${baseUrl}/QRCreateAPIRestV2/rest/CreateQrcodeApi/createQrcode`,
      body,
      {
        headers: { "Content-Type": "text/plain" },
      }
    );
    const data = response.data as CreateQrCodeResponse;
    return data;
  }

  async refund(query: RefundQr) {
    const { baseUrl, merchantCode } = this.config;
    const body: RefundQrParams = {
      merchantCode,
      ...query,
    };
    const response = await axios.post(
      `${baseUrl}/VnPaymentRefund/rest/vnpayment/refund`,
      body
    );
    const data = response.data as RefundResponse;
    return data;
  }
}
