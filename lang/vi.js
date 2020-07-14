export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com",
  gender_incorrect: "Oops, tại sao trường giới tính lại sai",
  password_incorrect: "Mật khẩu có ít nhất 8 kí tự, gồm chữ hoa, chữ số và kí tự đặc biệt",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
  update_username: "Username gới hạn từ 3-16 kí tự và không chứa kí tự đặc biệt.",
  update_gender: "Oops! dữ liệu trường không hợp lệ.",
  update_address: "Địa chỉ từ 3-30 kí tự.",
  update_phone: "Số điện thoại bắt đầu từ 0, gồm 9-10 số.",
  keyword_find_user: "Nội dung tìm kiếm gồm 1-16 kí tự, không được chứa kí tự đặc biệt, chỉ cho phép chữ cái, số và khoảng trống",
  message_text_emoji_incorrect: "Tin nhắn không hợp lệ. Đảm bảo tối thiểu 1 ký tự, tối đa 400 kí tự"
}

export const transError = {
  account_in_use: "Email này đã được sử dụng",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống, nếu thông tin không chính xác, vui lòng liên hệ với bộ phận hỗ trợ",
  account_not_active: "Tài khoản này chưa được kích hoạt, vui lòng kiểm tra email để kích hoạt tài khoản",
  account_undefined: "Tài khoản này không tồn tại",
  token_undefined: "Token không tồn tại",
  login_failed: "Sai tài khoản hoặc mật khẩu",
  server_error: "Lỗi ở máy chủ, vui lòng liên hệ đến bộ phận hỗ trợ để thông báo lỗi này, xin cảm ơn!",
  avatar_type: "Kiểu file Không hợp lệ, chỉ chấp nhận file png, jpg hoặc jpeg",
  avatar_size: "Ảnh có kích thước tối đa 1MB",
  user_current_password_failed: "Mật khẩu hiện tại không chính xác",
  conversation_not_found: "Cuộc trò chuyện không tồn tại.",
  image_message_type: "Kiểu file Không hợp lệ, chỉ chấp nhận file png, jpg hoặc jpeg",
  image_message_size: "Ảnh có kích thước tối đa 1MB",
}

export const transSuccess = {
  userCreated(userEmail) {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email để kích hoạt tài khoản, xin cảm ơn!`
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn có thể đăng nhập",
  loginSuccess(username) {
    return `Xin chào ${username}!`
  },
  logout_success: "Đăng xuất thành công!",
  user_info_updated: "Cập nhật thông tin người dùng thành công",
  user_password_updated: "Cập nhật mật khẩu thành công"
}

export const transMail = {
  subject: "Anwesome Chat: Kích hoạt tài khoản.",
  template(linkVerify) {
    return `
      <h2>Bạn nhận được mail này vì đã đăng ký tài khoản trên Anwesome Chat</h2>  
      <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
      <h3><a href="${linkVerify}" target="_blank">${linkVerify}</a></h3>
      <h4>Nếu tin rằng email này là nhầm lẫn, hãy bỏ qua nó. Trân trọng.</h4>
    `
  },
  send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi."
}
