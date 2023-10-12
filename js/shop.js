function renderList(products) {
    products.forEach((product) => {
        listInner.innerHTML += `
            <div class="box-content">
                            <div class="image">
                                <img src="${product.image}" alt="" />
                            </div>
                            <div class="info-product">
                                <h5>${product.name}</h5>
                                <h4>$<span>${product.price}</span> <span>${product.salePrice}</span></h4>
                            </div>
                            <div class="tag"><span>${product.status}</span><span>${product.sale}</span></div>
                            <div class="bg-item">
                                <button class="add-to-cart" onclick="addCart(${product.id})">ADD TO CART</button>
                                <button class="see-details" onclick="detail(${product.id})">SEE DETAIL</button>
                            </div>
                        </div>
            `;
    });
}
renderList(shop);
// DETAIL
async function detail(id) {
    // const link = "detail";
    localStorage.removeItem("detail");
    const items = shop.find((item) => item.id === id);
    localStorage.setItem("detail", JSON.stringify(items));
    window.location.href = "cartDetail.html";
}
