import { md5 } from ".";
import { VnpayQrParams } from "../types";

export const generateChecksum = (
  data: VnpayQrParams,
  secret: string
): string => {
  const {
    appId,
    merchantName,
    serviceCode,
    countryCode,
    masterMerCode,
    merchantType,
    merchantCode,
    terminalId,
    payType,
    productId,
    txnId,
    amount,
    tipAndFee,
    ccy,
    expDate,
  } = data;
  return md5(
    appId +
      "|" +
      merchantName +
      "|" +
      serviceCode +
      "|" +
      countryCode +
      "|" +
      masterMerCode +
      "|" +
      merchantType +
      "|" +
      merchantCode +
      "|" +
      terminalId +
      "|" +
      payType +
      "|" +
      productId +
      "|" +
      txnId +
      "|" +
      amount +
      "|" +
      tipAndFee +
      "|" +
      ccy +
      "|" +
      expDate +
      "|" +
      secret
  );
};
