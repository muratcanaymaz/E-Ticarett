const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products');
const openBtn = document.getElementById('open-btn');

const modal = document.getElementById('modal-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  //CALLBACK > İçerisinde başka fonksiyon çalıştıran fonksiyon
  fetchCategories();
  fetchProducts();
});

function fetchCategories() {
  fetch('https://api.escuelajs.co/api/v1/categories')
    // GELEN VERİYİ İŞLEME
    .then((response) => response.json())
    // OLUŞAN DATAYI FOREACH İLE HERR BİR OBJE İÇİN FONKSİYON ÇALIŞTIRMA
    .then((data) =>
      data.slice(0, 4).forEach((category) => {
        // GELEN HERBİR OBJE İÇİN dıv oluşturma
        const categoryDıv = document.createElement('div');
        // Dive class ekleme
        categoryDıv.classList.add('category');
        // Divin içeriğini değiştirme
        categoryDıv.innerHTML = `
           <img src="${category.image}"/>
           <span>${category.name}</span>
        `;
        // Oluşan categoryi htmldeki listeye atma
        categoryList.appendChild(categoryDıv);
      })
    )
    .catch((err) => console.log(err));
}
// ÜRÜNLERİ ÇEKME
function fetchProducts() {
  // apı YE İSTEK ATMA
  fetch('https://api.escuelajs.co/api/v1/products/') //endpoint
    // İstek başarılı olursa veriyi işle
    .then((res) => res.json())
    // işlenen veriyi al ve ekrana bas
    .then((data) =>
      data.slice(0, 25).forEach((product) => {
        // DİV oluştur
        const productDıv = document.createElement('div');
        productDıv.classList.add('product');
        // içeiriği değiştir
        productDıv.innerHTML = `
          <img src="${product.images[0]}" />
            <p class="product-title">${product.title}</p>
            <p class="product-category">${product.category.name}</p>
            <div class="product-action">
              <p>${product.price} $</p>
              <button>Sepete Ekle</button>
            </div>
          </div>
        `;
        // htmle göndericez
        productList.appendChild(productDıv);
      })
    )
    // hata olursa devreye gir
    .catch();
}

openBtn.addEventListener("click",() => {
  modal.classList.toggle('active');
});
