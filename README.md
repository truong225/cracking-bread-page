# Cracking Bread Studio — landing page Đất Độc (Evil Hometown)

Trang tĩnh thuần HTML/CSS/JS, không cần build, không phụ thuộc dịch vụ ngoài (font được nhúng sẵn). Chạy được trên mọi host tĩnh miễn phí.

## Cấu trúc

```
index.html              Trang chính (nội dung tiếng Việt viết trực tiếp ở đây)
.nojekyll               Báo GitHub Pages không xử lý Jekyll
assets/
  style.css             Toàn bộ giao diện; bảng màu ở đầu file (:root)
  main.js               Chuyển ngôn ngữ VI/EN + header đổi nền khi cuộn
  fonts.css, fonts/     Font Alegreya + Be Vietnam Pro (giấy phép SIL OFL)
  hero-scene.svg        Minh họa tạm: hoàng hôn làng ven sông (ảnh nền hero)
  well-night.svg        Minh họa tạm: giếng làng ban đêm (key art phần giới thiệu game)
  logo.svg              Logo tạm của studio (ổ bánh mì nứt), dùng luôn làm favicon
```

## Xem thử trên máy

Mở thẳng `index.html` bằng trình duyệt là xem được. Hoặc chạy một server tĩnh trong thư mục này:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Đưa lên GitHub Pages (miễn phí)

1. Đăng nhập GitHub, tạo repository mới (Public). Đặt tên tùy ý, ví dụ `cracking-bread-studio`.
   - Nếu đặt tên đúng dạng `<tên-tài-khoản>.github.io`, trang sẽ ở địa chỉ gốc `https://<tên-tài-khoản>.github.io/`.
   - Tên khác thì địa chỉ là `https://<tên-tài-khoản>.github.io/<tên-repo>/`. Trang dùng đường dẫn tương đối nên chạy được ở cả hai kiểu.
2. Đưa toàn bộ nội dung thư mục này lên nhánh `main` (lưu ý: `index.html` phải nằm ở **gốc** repo, không nằm trong thư mục con).
   - Cách không cần dòng lệnh: trong repo vừa tạo, bấm **Add file → Upload files**, kéo thả tất cả file và thư mục `assets` vào, bấm **Commit changes**. File `.nojekyll` là file ẩn; nếu trình duyệt không cho chọn thì có thể bỏ qua, trang vẫn chạy.
   - Cách dùng dòng lệnh:
     ```bash
     git init
     git add .
     git commit -m "Landing page"
     git branch -M main
     git remote add origin https://github.com/<tên-tài-khoản>/<tên-repo>.git
     git push -u origin main
     ```
3. Vào repo → **Settings → Pages**. Ở mục **Build and deployment**, chọn **Source: Deploy from a branch**, **Branch: main**, thư mục **/ (root)**, bấm **Save**.
4. Đợi khoảng 1–2 phút, địa chỉ trang sẽ hiện ở đầu trang Settings → Pages.

### Tên miền riêng (tùy chọn)

Nếu sau này mua tên miền, vào **Settings → Pages → Custom domain**, nhập tên miền và trỏ DNS theo hướng dẫn của GitHub (bản ghi CNAME tới `<tên-tài-khoản>.github.io`). Tài liệu: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

### Host miễn phí khác

Cloudflare Pages hoặc Netlify đều nhận thẳng thư mục này (kéo thả, không cần cấu hình build).

## Chỉnh sửa thường gặp

- **Sửa nội dung chữ**: tiếng Việt sửa trong `index.html`; tiếng Anh sửa trong `assets/main.js` (khối `en`). Nếu sửa tiếng Việt trong `index.html`, sửa luôn câu tương ứng ở khối `vi` trong `main.js` để khi chuyển EN rồi quay lại VI vẫn đúng.
- **Thêm tin tức**: chép một khối `<li>…</li>` trong phần `news-list` ở `index.html`, đổi ngày và nội dung, đặt khóa mới cho `data-i18n` (ví dụ `news3`) rồi thêm câu VI/EN cho khóa đó trong `main.js`.
- **Thay ảnh minh họa tạm bằng ảnh thật**:
  - Ảnh nền hero: thay `assets/hero-scene.svg` (hoặc đổi `src` của thẻ `img.hero-scene` sang file `.jpg`/`.webp` mới). Ảnh ngang, khuyến nghị ≥ 1920×1080.
  - Key art phần giới thiệu: thay `assets/well-night.svg`, tỉ lệ dọc 4:5.
  - Logo: thay `assets/logo.svg`.
- **Thư viện ảnh**: trong `index.html` có sẵn khối Gallery đang được comment. Khi có ảnh trong game, đặt ảnh vào `assets/gallery/`, bỏ comment khối đó và sửa đường dẫn.
- **Mở trang thẳng bằng tiếng Anh**: thêm `?lang=en` vào cuối địa chỉ.
