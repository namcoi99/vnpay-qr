export enum RefundStatusCode {
  /**
   * Refund Success
   */
  SUCCESS = "00",
  /**
   * Checksum is wrong
   */
  CHECKSUM_INVALID = "01",
  /**
   * Money is invalid - a part
   */
  MONEY_PART_INVALID = "02",
  /**
   * Money is invalid - totality
   */
  MONEY_TOTALITY_INVALID = "03",
  /**
   * Not allow refund totality after refund a part
   */
  REFUND_TOTALITY_FORBIDDEN = "04",
  /**
   * Balance is not enough to refund
   */
  BALANCE_INSUFFICIENT = "06",
  /**
   * Format data is wrong
   */
  FORMAT_INVALID = "11",
  /**
   * Transaction not found
   */
  TRANSACTION_NOT_FOUND = "12",
  /**
   * IP is denied
   */
  IP_NOT_ALLOWED = "14",
  /**
   * Refund request is duplicate
   */
  REQUEST_DUPLICATED = "16",
}
