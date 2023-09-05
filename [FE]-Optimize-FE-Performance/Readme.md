# Những kỹ thuật dùng để tối ưu hiệu suất của FrontEnd một website

Có nhiều kỹ thuật xử lý hiệu suất front-end mà bạn có thể áp dụng để cải thiện tốc độ tải trang và trải nghiệm người dùng. Dưới đây là một số kỹ thuật quan trọng:

1. `Minification`: Giảm kích thước tệp CSS, JavaScript và HTML bằng cách loại bỏ khoảng trắng, dòng trống, comment và các ký tự không cần thiết khác.

2. `Compression`: Nén tệp tin tĩnh (CSS, JavaScript, hình ảnh) sử dụng các công cụ như Gzip hoặc Brotli để giảm kích thước và tăng tốc độ tải trang.

3. `Caching`: Sử dụng HTTP caching để lưu trữ các tệp tin tĩnh trên máy khách (trình duyệt) để tăng tốc độ tải trang khi người dùng truy cập lại trang web.

4. `Lazy loading`: Tải nội dung chỉ khi nó cần thiết, ví dụ: hình ảnh, video, font chữ, để giảm thời gian tải trang ban đầu.

5. `Asynchronous loading`: Sử dụng các thuộc tính `async` hoặc `defer` cho các tệp JavaScript để tải nền và không chặn quá trình tải trang.

6. `Sprite và icon font`: Sử dụng sprite hình ảnh hoặc font biểu tượng (icon font) để giảm số lượng yêu cầu mạng và tăng tốc độ tải trang.

7. `Critical CSS`: Tải trước CSS cần thiết cho phần trên của trang để hiển thị nhanh chóng và sau đó tải CSS phần còn lại.

8. `Code splitting`: Chia nhỏ mã JavaScript thành các tệp nhỏ hơn và chỉ tải những tệp cần thiết cho từng trang hoặc phần của trang.

9. `Image optimization`: Tối ưu hóa hình ảnh bằng cách sử dụng định dạng hình ảnh phù hợp, nén hình ảnh và sử dụng các công cụ tối ưu hóa hình ảnh.

10. `Performance monitoring`: Sử dụng công cụ như Google PageSpeed Insights, Lighthouse hoặc WebPageTest để đo và theo dõi hiệu suất trang web của bạn và tìm ra các vấn đề cần cải thiện.

Ngoài ra, còn nhiều kỹ thuật khác như render-blocking CSS, preloading, prefetching, và nhiều hơn nữa. Tùy thuộc vào yêu cầu cụ thể của dự án và công nghệ sử dụng, bạn có thể áp dụng một hoặc nhiều kỹ thuật này để tối ưu hóa hiệu suất front-end của trang web.