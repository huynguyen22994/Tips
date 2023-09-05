# Kỹ thuật LAYZY LOADING trong FRONT END

Kỹ thuật "lazy loading" là một phương pháp tối ưu hóa hiệu suất trang web bằng cách chỉ tải nội dung cần thiết khi người dùng cần sử dụng đến nó, thay vì tải toàn bộ trang web cùng lúc.

Trong trường hợp "lazy loading" font-end, kỹ thuật này được áp dụng cho việc tải các font chữ (fonts) hoặc hình ảnh trên trang web. "lazy loading" font-end cho phép chỉ tải các font chữ hoặc hình ảnh khi chúng thực sự được sử dụng trong trang web. 

ví dụ như khi người dùng cuộn trang và các phần tử sử dụng font chữ mới xuất hiện trên màn hình.

Cách thức thực hiện "lazy loading" font-end có thể được thực hiện bằng cách sử dụng các kỹ thuật như JavaScript, CSS hoặc các thư viện như Intersection Observer. Khi một phần tử chứa font chữ mới xuất hiện trong tầm nhìn của người dùng, mã JavaScript sẽ được kích hoạt để tải font chữ đó từ máy chủ và áp dụng nó vào phần tử tương ứng trên trang web.

![](/[FE]-LazyLoading/images/Lazy-Loading-Architec.jpg)

Những files khi được hiển thị trên viewport sẽ được trình duyệt gọi xuống server để load lên -> chưa hiển thị sẽ không load

(*) Lưu ý, khi ứng dụng Lazy Loading với image thì nên gán 1 ảnh loding cùng kích thược hoặc dựng width height sẵn cho block để tranh hiện tượng Cumulative Layout Shift (CLS)


# 3 cách tiếp cận để implement lazy loading với JS

## 1. Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

![](/[FE]-LazyLoading/images/intersection-observer.png)

Intersection Observer là một API trong trình duyệt web, cho phép bạn theo dõi và phản ứng vào sự thay đổi trong việc giao thoa của các phần tử trên trang web. Nó cung cấp một cách dễ dàng để kiểm tra xem một phần tử có nằm trong tầm nhìn của người dùng hay không.

Intersection Observer có thể được sử dụng để thực hiện các tác vụ như:
- Lazy loading: Tải nội dung (hình ảnh, video, font chữ, ...) chỉ khi nó xuất hiện trong tầm nhìn của người dùng.
- Infinite scrolling: Tải thêm nội dung khi người dùng cuộn trang và đạt đến cuối trang.
- Analytics: Theo dõi và gửi dữ liệu khi một phần tử xuất hiện trong tầm nhìn của người dùng.
- Hiệu ứng và tương tác: Kích hoạt các hiệu ứng hoặc tương tác khi một phần tử xuất hiện hoặc biến mất.

Cách dùng: 
```
javascript
// Tạo một Intersection Observer instance
const observer = new IntersectionObserver(callback, options);

// Định nghĩa hàm callback để xử lý sự thay đổi giao thoa
function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Xử lý khi phần tử xuất hiện trong tầm nhìn
    } else {
      // Xử lý khi phần tử biến mất khỏi tầm nhìn
    }
  });
}

// Quan sát một phần tử cụ thể
const targetElement = document.querySelector('.target');
observer.observe(targetElement);
```

![](/[FE]-LazyLoading/images/example.gif)

## 2. The new (HTML) approach
Trên trình duyệt version mới hổ trợ thuộc tính `loading="lazy"` trên thẻ img để xử lý lazy loading image.
```
<img src="/path/to/your/image.jpg" loading="lazy" />
```

- Với cách này nên cân nhắc vì một số trình duyệt không hổ trợ thuộc tính này

## 3. Event listeners
Kỹ thuật này sử dụng trình xử lý sự kiện trên các sự kiện cuộn, thay đổi kích thước và định hướngThay đổi trong trình duyệt. Nếu một trong các sự kiện được đề cập được kích hoạt và giả sử hình ảnh đi vào khung nhìn thì thuộc tính data-src sẽ được thay thế bằng thuộc tính src để kích hoạt lệnh gọi tải. 

Xem nó hoạt động: trong file event.listerner.html