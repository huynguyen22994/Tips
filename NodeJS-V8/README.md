# NodeJS - [ V8 + libuv ]
- V8 là một trình thông dịch mã nguồn mở được phát triển bởi Google. Nó là trình thông dịch chính được sử dụng trong trình duyệt Google Chrome và một số ứng dụng khác như Node.js.
- V8 được viết bằng ngôn ngữ C++ và được xây dựng để thực thi mã JavaScript nhanh và hiệu quả. Nó sử dụng các kỹ thuật biên dịch Just-in-Time (JIT) để biên dịch mã JavaScript thành mã máy trực tiếp và thực thi nhanh chóng.
- V8 có khả năng xử lý các tính năng phức tạp của JavaScript như bất đồng bộ (asynchronous) và đa luồng (multithreading)

## Nhiệm vụ chính của NodeJS xuất hiện với 3 tính năng:
1. Giải quyết bài toán về tính đồng thời cao của Web Server
    - Tính đồng thời cao của một web server là khả năng xử lý nhiều yêu cầu từ người dùng cùng lúc. Mà không gây chậm trễ hoặc gián đoạn trong việc phục vụ.
2. Dựa trên V8 Chrome của Google
3. Bản chất là runtime javascript (môi trường chạy)

![](/NodeJS-V8//images/node-architecture.png)

Giải quyết nút thắt cổ chai của server [hình ảnh]

## Core của Chrome - NodeJS
- Chrome có core là Webkit:
    - Webkit chia thành 2 công cụ:
        - Web Core: Công cụ kết xuất
        - Javascript Core: Công cụ thông dịch

- Vì Javascript Core không thật sự tối ưu, nên Google quyết định phát triển V8 thay cho Javascript Core. V8 mạnh mẽ với các tính năng cấp phát HEAP, xử lý rác (các biến khai báo nhưng không dùng), runtime...
![](/NodeJS-V8//images//v8.png)
![](/NodeJS-V8//images//v8-node.png)

## Runtime Javascript
- Runtime Javascript được cung cấp bởi V8

![](/NodeJS-V8/images/javascript_runtime.png)


## Runtime sử dụng libuv (by C++)
- libuv là một thư viện đa nền tảng được sử dụng trong Node.js để xử lý các tác vụ không đồng bộ (asynchronous) và các sự kiện I/O (input/output). Nó cung cấp một API cho việc quản lý luồng sự kiện, xử lý tác vụ I/O không đồng bộ, và quản lý bộ đệm.
- libuv giúp Node.js có thể thực thi mã JavaScript một cách hiệu quả trên cả môi trường đơn luồng (single Thread) và đa luồng (multi Thread). Nó xử lý các tác vụ như đọc/ghi file, tạo socket kết nối mạng, xử lý DNS, và nhiều hoạt động I/O khác một cách không đồng bộ, giúp tăng hiệu suất và độ ổn định của ứng dụng.

![](/NodeJS-V8/images/features-of-libuv.webp)
- Features của Libuv

![](/NodeJS-V8/images/libuv.png)
- Vị trí chạy Libuv

## Stream NodeJs
-  Stream (dòng dữ liệu) dùng để xử lý dữ liệu một cách hiệu quả và không tốn nhiều bộ nhớ. Stream là một chuỗi liên tục các dữ liệu được chia thành các phần nhỏ gọi là chunks và được xử lý theo từng phần.
- Stream trong Node.js được sử dụng để đọc và ghi dữ liệu, xử lý dữ liệu từ các nguồn như file, mạng, hoặc các nguồn dữ liệu khác một cách hiệu quả và không tốn nhiều tài nguyên. Stream giúp xử lý dữ liệu một cách tuần tự và không phải chờ tải toàn bộ dữ liệu vào bộ nhớ trước khi xử lý.

Có 4 loại Stream chính trong Node.js:
- Readable Stream: Được sử dụng để đọc dữ liệu từ một nguồn như file hoặc mạng.
- Writable Stream: Được sử dụng để ghi dữ liệu vào một nguồn như file hoặc mạng.
- Duplex Stream: Là sự kết hợp của Readable và Writable Stream, cho phép đọc và ghi dữ liệu cùng lúc.
- Transform Stream: Là một dạng đặc biệt của Duplex Stream, cho phép thay đổi dữ liệu khi nó chảy qua.

![](/NodeJS-V8/images/stream-chuck.png)
- Strean thực hiện từng chunks đến khi hoàn thành task

![](/NodeJS-V8/images/file-streams.svg)
- API xử lý file với stream và không stream

=> Việc dùng Stream để xử lý các file hoặc gửi data lớn thông qua client server sẽ giúp tối ưu hiệu suất web.

Read more and using Stream here: https://devhints.io/nodejs-stream

## Event Loop

![](/NodeJS-V8/images/event-loop-1.webp)

### HEAP
![](/NodeJS-V8/images/heap-runtime.png)

### Queue - Micro Task and Macro Task
![](/NodeJS-V8/images/microtask-and-macrotask-in-javascript.webp)

### Call Stack

![](/NodeJS-V8/images/event-loop-2.gif)
![](/NodeJS-V8/images/event-loop-3.gif)
![](/NodeJS-V8/images/event-loop-4.gif)
![](/NodeJS-V8/images/event-loop-5.gif)
![](/NodeJS-V8/images/event-loop-6.gif)

### Sumary
![](/NodeJS-V8/images/event-loop-7.gif)