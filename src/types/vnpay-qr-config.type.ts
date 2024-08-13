export type VnpayQrConfig = {
  /**
   * VNPAY QR base url
   */
  baseUrl: string;
  /**
   * Được VNPAY cung cấp riêng cho
   * từng đối tác đi kèm nó là private Key
   */
  appId: string;
  /**
   * secretKey = Sẽ cung riêng cho từng đối tác
   */
  appSecret: string;
  /**
   * Tên viêt tắt của Merchant
   */
  merchantName: string;
  /**
   * Loại hình doanh nghiệp
   */
  merchantType: string;
  /**
   * Mã merchant
   */
  merchantCode: string;
  /**
   * Mã doanh nghiệp phát triển merchant
   * Giá trị mặc định là 'A000000775'
   */
  masterMerCode: string;
};
