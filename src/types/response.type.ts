import { RefundStatusCode } from "../constants";

export type RefundResponse = {
  resCode: RefundStatusCode;
  resDesc: string;
  qrTraceRefund: string;
  refundDate: string;
  payTxnId: string;
  refundTxnId: string;
  checkSum: string;
};
