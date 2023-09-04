# Kỹ Thuật Khóa lạc quan (Optimistic lock) và Khóa bi quan (Pessimistic lock)

### Khóa lạc quan và khóa bi quan là gì?
- Là 2 kỹ thuật phổ biến trong việc xử lý lock một record để xử lý read/write với lần lượt các phiên để tránh xung đột dữ liệu trong database.

### Kỹ thuật này dùng để làm gì?
- Kỹ thuật Optimistic locking và Pessimistic locking được sử dụng trong hệ thống cơ sở dữ liệu để giải quyết vấn đề xung đột dữ liệu khi có nhiều phiên làm việc cùng thao tác trên cùng một tài nguyên (ví dụ: record trong cơ sở dữ liệu). Cả hai kỹ thuật này đều có mục tiêu là đảm bảo tính nhất quán và độ tin cậy của dữ liệu, nhưng cách thức và thời điểm sử dụng khác nhau.

### Vấn đề thực tế trong hệ thống

![](/OptimisticLocking-PessimisticLocking/images/problem.png)

Ví dụ: Về quy trình thanh toán giỏ hàng trong một hệ thống. 

- Giả sử có 2 khách hàng mua cùng một sản phẩm là chiếc áo cam của một shop. Vì trùng hợp cả 2 cùng tiến hành thanh toán gần như cùng lúc. 
    - [1] User 1 mua 5 chiếc áo, gửi yêu cầu thanh toán trước và 
    - [2] hệ thống kiểm tra tồn kho thấy còn 6 sản phầm nên cho phép thực hiện tiến trình tiếp theo là thanh toán. Nhưng vì một ly do nào đó nên tiến trình thanh toán hơi chậm
    - [3] User 2 mua 2 chiếc áo, gửi yêu cầu thanh toán gần như cùng thời điểm với User 1 và
    - [4] hệ thống kiểm tra tồn kho đồng thời với thời điểm kiểm tra của User 1, nên thấy kho con 6 sản phẩm nên cho phép thực hiện tiến trình tiếp theo là thanh toán. Nhưng phiên làm việc của User 2 chạy trên thread khác nên thực hiện thanh toán xong nhanh và 
    - [5] update lại số lượng kho thành 4 và 
    - [6] phản hồi lại cho User 2 là thanh toán thành công
    - [7] Tiến tình thanh toán của User 1 lúc này xong và tiến hành update lại số lượng kho. Nhưng lúc này User 1 mua 5 cái áo nhưng hiện kho chỉ còn 4 cái áo nên hệ thống xuất hiện hiện tượng VƯỢT MUA, QUÁ BÁN. HỆ THỐNG UPDATE LẠI STOCK CỦA KHO BỊ SAI Ở ĐÂY
    - [8] phản hồi lại cho User 2 là thanh toán thành công

Chính vì nhiều vấn đề trong thực tế xảy ra giống như ví dụ trên nên dẫn đến hệ thống đọc và ghi dữ liệu không còn nhất quán nữa. Để khắc phục thì có thể xử dụng 2 kỹ thuật khóa bi quan và khóa lạc quan để giải quyết.

## Khóa bi quan (Pessimistic lock)

Pessimistic lock là kỹ thuật giải quyết xung đột khi có nhiều transaction cùng thay đổi dữ liệu trên một hoặc một tập các records.

Pessimistic lock hoạt động như sau. Khi User(1) start và modify stock trong kho, nó sẽ thực hiện lock record, page hoặc table tùy thuộc vào điều kiện query. Các User(x) sau không thể modify data trên record đó mà bắt buộc phải chờ cho đến khi User(1) hoàn thành.

Nhược điểm: là toàn bộ các thao tác update record sau phải chờ cho đến khi update record trước đó hoàn thành. Nếu chưa hoàn thành thì.. tiếp tục chờ đợi. Nên sẽ làm trải nghiệm người dùng không tốt vì quá trình xử lý lâu.

Pessimistic lock, về cơ bản toàn bộ quá trình update diễn ra như sau:

    Acquire lock.
    Update data.
    Release lock.

Nếu quá trình update quá lâu dẫn đến User1 ko trả lại lock cho các User tiếp theo thì sẽ dẫn đến `deadlock`    

![](/OptimisticLocking-PessimisticLocking/images/pessimictic.png)

Hình ảnh dùng Pessimistic giải quyết vấn đề conflict data khi update record

Từng bước luồng chạy khi ứng dụng lỹ thuật Khóa Bi Quan

- [1] User 1 mua 5 chiếc áo, gửi yêu cầu thanh toán trước
- [2] User 2 cùng lúc gửi yêu cầu thanh toán mua 2 cái áo
- [3] Ở phiên thanh toán của User 1, do thực hiện thanh toán trước nên User 1 giành được key lock `Acquire lock` để có thể update stock trong kho, khi này chỉ có User 1 có key lock nên chỉ User 1 mới có quyền update stoc, tất cả User khác vào tiến trình phải đởi để lấy được key lock
- [4] User 2 chờ timeout để lấy key lock sau khi User 1 hoàn tất tiến trình thanh toán, update stock
- [5] User 1 hoàn tất tiến trình thanh toán và nhả key lock cho các User khác đang đợi lấy key
- [6] User 2 lấy được key lock sau khi User 1 nhả ra, và tiến hành thanh toán và update dữ liệu stock trong inventory. Trường hợp này không được phép update vì stock ít hơn số lượng User đặt.
- [7] Kiểm tra thấy trong kho còn số lượng áo ít hơn giả hàng đặt nên báo lỗi cho User 2.

## Khóa lạc quan (Optimistic lock)

Updating ...