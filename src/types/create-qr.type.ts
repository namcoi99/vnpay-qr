import { VnpayQrConfig } from ".";
import { CreateQrStatusCode } from "../constants";

export type CreateQr = {
  /**
   * Mã tiền tệ
   * Giá trị mặc định '704'
   */
  ccy: string;
  /**
   * Mã dịch vụ QR
   * Giá trị mặc định là '03'
   */
  serviceCode: string;
  /**
   * Mã Vùng
   * Giá trị mặc định là 'VN'
   */
  countryCode: string;
  /**
   * Mã dịch vụ QR
   * Giá trị mặc định '03'
   */
  payType: string;
  /**
   * Mã sản phẩm
   * (Để trống nếu tạo QR type = '01','03','04')
   */
  productId: string;
  /**
   * Mã đơn hàng, Mã GD
   * Required (Dùng cho payType = '01')
   */
  txnId: string;
  /**
   * Số hóa đơn QR terminal
   * payType = '03' nếu có số hóa đơn
   */
  billNumber: string;
  /**
   * Mã điểm thu
   */
  terminalId: string;
  /**
   * Số tiền
   */
  amount: string;
  /**
   * Tiền tip and fee
   */
  tipAndFee: string;
  /**
   * Thời gian hết hạn thanh toán
   * Định dạng: yyMMddHHmm
   */
  expDate: string;
  /**
   * Ghi chú
   */
  purpose: string;
};

export type VnpayQrParams = Omit<VnpayQrConfig, "baseUrl" | "appSecret"> &
  CreateQr & {
    /**
     * Checksum của dữ liệu gửi
     * Được tính theo công thức (trong đó secretKey là một mã bí mật):
     * data = EncodeMD5(
     * appId + "|" + merchantName + "|" +
     * serviceCode + "|" + countryCode + "|" +
     * masterMerCode + "|" + merchantType + "|" +
     * merchantCode + "|" + terminalId + "|" +
     * payType + "|" + productId + "|" +
     * txnId + "|" + amount + "|" +
     * tipAndFee + "|" + ccy + "|" +
     * expDate + "|" + secretKey)
     * Chú ý:
     * secretKey = Sẽ cung riêng cho từng đối tác
     * appId = Sẽ cung riêng cho từng đối tác
     */
    checksum?: string;
  };

export type CreateQrCodeResponse = {
  /**
   * Mã lỗi trả về
   */
  code: CreateQrStatusCode;
  /**
   * Mô tả mã lỗi chi đính kèm
   */
  message: string;
  /**
   * Dữ liệu qrcode trả về
   */
  data: string;
  /**
   * Checksum được tính theo công thức sau:
   * data = code + "|" + message + "|" + data + "|" + url + "|" + secretKey;
   * Chú ý :
   * checksum = md5(data);
   * secretKey = Sẽ cung riêng cho từng đối tác
   */
  checksum?: string;
};
