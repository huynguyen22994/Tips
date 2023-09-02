# Mã Hóa Đối Xứng và Mã Hóa Bất Đối Xứng

Để tăng cường tính bảo mật và an toàn thông tin trong hệ thống phần mềm. Thì một lập trình viên cần phải biết các ứng dụng mã hóa đối xứng và mã hóa bất đối xứng vào hệ thống để thực hiện các việc như xác thực người dùng...

Chúng ta sẽ tìm hiểu mã hóa đối xứng và bất đối xứng trong trong tính năng đăng nhập và authen tài khoản khách hàng trong hệ thống.
    
    - Chúng ta biết rằng, sau khi một khách hàng đăng nhập vào hệ thống thì hệ thống sẽ tạo ra một accessToken và gửi lại cho khách hàng, và token này được dùng để xác thực khách hàng và cho phép khách hàng thực hiện thêm nhiều thao tác trên hệ thống.
    - Việc quản lý những accessToken này nằm phía khách hàng nên vấn đề rò rỉ accessToken và dẫn đến việc hacker lợi dụng để xâm nhập vào hệ thống là điều không thể tránh khỏi.
    - Do đó một lập trình viên cần phải tìm và lựa chọn giải pháp để thiết lập an toàn cho việc cấp và xác thực accessToken là điều phải chú ý, và hiện tạo token bằng mã hóa đối xứng và mã hóa bát đối xứng là 2 lựa chọn cần chú ý.
    
![](/Symmetric-Asymmetric/images/AccessToken.jpg)
- Một mẫu accessToken

## Mã hóa đối xứng (Symmetric encryption) - (AES 256)
- (Bảo mật dữ liệu) - Mã hóa đối xứng sử dụng cùng một khóa để mã hóa và giải mã dữ liệu. Khi người dùng gửi thông tin đăng nhập (ví dụ: mật khẩu) từ máy khách đến máy chủ, thông tin này có thể bị đánh cắp hoặc nhìn thấy bởi kẻ tấn công. Mã hóa đối xứng giúp bảo vệ thông tin này khỏi việc bị đọc hoặc sửa đổi bởi người không được phép.
![](/Symmetric-Asymmetric/images/Symmetric-Encryption.png)

## Mã hóa bất đối xứng (Asymmetric encryption) - (RSA, ECDSA)
- (Xác thực đối tác truy cập) - Mã hóa bất đối xứng sử dụng cặp khóa công khai và khóa riêng tư. Trong quá trình đăng nhập, máy chủ gửi khóa công khai cho máy khách. Máy khách sử dụng khóa công khai này để mã hóa thông tin đăng nhập trước khi gửi lại cho máy chủ. Máy chủ sau đó sử dụng khóa riêng tư để giải mã thông tin. Điều này đảm bảo rằng chỉ máy chủ mới có khóa riêng tư có thể giải mã thông tin đăng nhập, từ đó xác thực tính xác thực của người dùng.

![](/Symmetric-Asymmetric/images/Asymmetric-Encryption.png)


