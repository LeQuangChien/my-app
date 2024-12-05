import "./styles.css";
import "./login.css";
// JavaScript to dynamically manage the HomeStay website content

// Dynamically create the header section
// Lấy phần tử nút và phần đăng nhập

document.body.insertAdjacentHTML(
  "afterbegin",
  `
<header>

  <div class="trang1">
    <div id="div1">
      <h1><span class="chutrang">HOMESTAY</span> Đà Lạt</h1>
    </div>
    <nav>
      <ul>
       
        <li>
          <table border="2">
            <tr>
              <th><a href="register.html">Register</a></th>
            </tr>
          </table>
        </li>
        <li>
          <table border="2">
            <tr>
              <th><a href="Log_In.html">Log In</a></th>
            </tr>
          </table>
        </li>
      </ul>
    </nav>
  </div>
</header>
  `
);

// Create a section introducing the homestay
document.body.insertAdjacentHTML(
  "beforeend",
  `
<section id="trang2">
  <div class="trang1">
    <h2>Homestay in Đà Lạt</h2>
    <p>Giới thiệu những homestay lý tưởng.</p>
  </div>
</section>
`
);

// Add homestay recommendations section
document.body.insertAdjacentHTML(
  "beforeend",
  `
<div class="nhunghome">
  <h3>Những homestay tốt nhất ở Đà Lạt</h3>
  <p>Xem qua các homestay tuyệt vời ở Đà Lạt được chúng tôi lựa chọn</p>
</div>

     
</section>
`
);

// Add sorting and filtering controls
document.body.insertAdjacentHTML(
  "beforeend",
  `
<section id="main_layout">
  <div class="div2">
    <table border="1" class="khung">
      <tr>
        <th onclick="handleFirstSelection()">Lựa chọn hàng đầu của chúng tôi</th>
        <th onclick="handleSortBaseOnPrice()">Ưu tiên giá thấp nhất</th>
        <th onclick="handleSortBaseOnRate()">Xếp hạng sao</th>
      </tr>
    </table>
  </div>
</section>
<div class="homestay_layout"></div>
`
);

// Add the footer dynamically
document.body.insertAdjacentHTML(
  "beforeend",
  `
<footer>
  <div id="ket">
    <div class="noidung">
      <p>Cung cấp dịch vụ với chất lượng an ninh một cách cho quý khách</p>
    </div>
    <div class="noidung">
      <h3>NỘI DUNG</h3>
      <p>Chủ yếu tạo cho khách hàng một trải nghiệm tốt nhất đến với homestay của chúng tôi</p>
    </div>
    <div class="noidung">
      <h3>LIÊN HỆ</h3>
      <form class="email">
        <input type="text" placeholder="Địa chỉ email" />
        <button>Gửi tin</button>
      </form>
    </div>
  </div>
</footer>
`
);

// JavaScript functions for interactions
export function handleApplyRating(rating) {
  alert(`You selected a ${rating}-star rating.`);
}

export function handleFirstSelection() {
  alert("Showing top recommendations.");
}

export function handleSortBaseOnPrice() {
  alert("Sorting by lowest price.");
}

export function handleSortBaseOnRate() {
  alert("Sorting by star rating.");
}
