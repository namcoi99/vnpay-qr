export enum CreateQrStatusCode {
  /**
   * Thông tin message sẽ hiển thị dạng String : “đặt hàng thành công”
   */
  SUCCESS = "00",
  /**
   * Thiếu hàng trong đơn hàng
   */
  LACK_OF_PRODUCTS = "01",
  /**
   * Hết toàn bộ hàng trong đơn hàng
   */
  OUT_OF_STOCK = "02",
  /**
   * Đơn hàng đã được thanh toán
   */
  ALREADY_PAID = "03",
  /**
   * Lỗi tạo đơn hàng
   */
  CREATE_ORDER_ERROR = "04",
  /**
   * Thông tin message sẽ hiển thị dạng String : “đơn hàng đang được xử lí”
   */
  PROCESSING = "05",
  /**
   * Thông tin message sẽ hiển thị dạng String : “sai thông tin xác thực”
   */
  INVALID_CREDENTIAL = "06",
  /**
   * Thông tin message sẽ hiển thị dạng String : “số tiền không chính xác”
   */
  INCORRECT_AMOUNT = "07",
  /**
   * Giao dịch timeout
   */
  TRANSACTION_TIMEOUT = "08",
  /**
   * QR hết hạn thanh toán
   */
  QR_EXPIRED = "09",
  /**
   * IP không được truy cập
   */
  IP_NOT_ALLOWED = "10",
}
