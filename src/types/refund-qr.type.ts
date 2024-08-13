import { RefundQrType } from "../constants";

export type RefundQr = {
  qrTrace: string;
  payTxnId: string;
  refundTxnId: string;
  typeRefund: RefundQrType;
  amount: string;
  refundContent: string;
  payDate: string;
  checkSum: string;
};

export type RefundQrParams = { merchantCode: string } & RefundQr;
