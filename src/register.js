// JavaScript to dynamically create a login page for HomeStay

// Create the header dynamically
document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <header>
    <div class="trang1">
      <div id="div1">
        <h1><span class="chutrang">HOMESTAY</span> Đà Lạt</h1>
        </div>
  </header>
    `
);

// Create the main login form section
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <h3>Đăng nhập hoặc tạo tài khoản</h3>
  <div class="dang_nhap">
    <form action="/submit-your-login-form" method="post">
      <label for="email">Địa chỉ email</label><br>
      <input type="email" id="email" name="email" placeholder="Nhập địa chỉ email của bạn"><br>
      <input type="submit" value="Tiếp tục với email">
    </form>
  </div>
  
  <div class="dang_nhap1">
    <p>hoặc sử dụng một trong các lựa chọn này</p>
    <br>
    <button id="facebook-login">Facebook</button>
    <button id="google-login">Google</button>
    <button id="apple-login">Apple</button>
  </div>
    `
);

// Add the footer dynamically
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <footer>
    <div id="ket">
      <div class="noidung">
        <div class="logo">
          <img src="../RES/logo.PNG" alt="Logo" width="220" height="100">
        </div>
        <p>Cung cấp dịch vụ với chất lượng an ninh một cách cho quý khách</p>
      </div>
      <div class="noidung">
        <h3>NỘI DUNG</h3>
        <p>Chủ yếu tạo cho khách hàng một trải nghiệm tốt nhất đến với homestay của chúng tôi</p>
      </div>
      <div class="noidung">
        <h3>LIÊN HỆ</h3>
        <form class="email">
          <input type="text" placeholder="Địa chỉ email">
          <button>Gửi tin</button>
        </form>
      </div>
    </div>
  </footer>
    `
);
