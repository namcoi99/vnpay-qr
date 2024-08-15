import { md5 } from ".";
import { RefundQrParams, VnpayQrParams } from "../types";

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

export const generateRefundChecksum = (
  data: RefundQrParams,
  secret: string,
) => {
  const {
      merchantCode,
      qrTrace,
      payTxnId,
      refundTxnId,
      typeRefund,
      amount,
      payDate,
  } = data;
  return md5(
      secret +
          merchantCode +
          qrTrace +
          payTxnId +
          refundTxnId +
          typeRefund +
          amount +
          payDate,
  );
};