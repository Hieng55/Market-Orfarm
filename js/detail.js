const dataJSON = localStorage.getItem("detail");
const data = JSON.parse(dataJSON);
const payDetail = document.querySelector(".pay-detail");
function renderDetail(data) {
    payDetail.innerHTML = `
<h4 class="name-detail">${data.name} </h4>
<div class="group-detail">
    <div class="pay-content d-flex">
        <div class="image">
            <img src="${data.image}" alt="" />
        </div>
        <div class="price-content">
            <h4>$<span>${parseFloat(data.priceInner).toLocaleString("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
            })}</span></h4>
            <div class="quantity gap-5">
                <p class="text">QTY</p>
                <div class="qty">
                    <p onclick="minus()"><i class="fa-solid fa-minus"></i></p>
                    <input onchange="qtyUpdate(${data.id})" type="text" value="${data.quantity}" />
                    <p onclick="plus()"><i class="fa-solid fa-plus"></i></p>
                </div>
                <div class="btn-item">
                    <button onclick="add(${data.id})">ADD TO CART</button>
                    <button onclick="check(${data.id})">CHECK OUT</button>
                </div>
            </div>
            <div class="content-text">
                <ul>
                    <li><span>SKU:</span><span>24-MB60-1</span></li>
                    <li><span>Availability:</span><span> In stock</span></li>
                    <li><span>Categories::</span><span>All Departments , Shop , Shop layout</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<ul class="list-image">
    <li class="active img"><img src="${data.image}" alt="" /></li>
    <li><img src="/img/product/product-2.jpg" alt="" /></li>
    <li><img src="/img/product/product-3.jpg" alt="" /></li>
</ul>
    `;
    $(document).ready(function () {
        $(" .list-image li").click(function () {
            let newSrc = $(this).find("img").attr("src");
            $(this).addClass("active").siblings().removeClass("active");
            $(".image img").attr("src", newSrc);
        });
    });
}
renderDetail(data);
async function add() {
    const items = { ...data };
    const find = products.find((product) => product.id === items.id);
    if (!find) {
        const valueQyt = document.querySelector(".price-content .qty input");
        // const price = document.querySelector(".price-content h4 span");
        items.quantity = valueQyt.value;
        items.price = priceData;
        console.log(items.quantity);
        console.log(items.price);
        console.log(items);
        const link = "products";
        await postData(items, link);
        await renderData();
        SumPrice();
        numberQyt.innerHTML = products.length;
        renderListProduct();
    } else {
        classActive();
        att.innerHTML = "Products already in the cart";
        await PutData(items, items.id);
        await renderData();
        SumPrice();
        renderListProduct();
    }
}
let priceData = "";

async function check() {
    let storedJsonObject = localStorage.getItem("checkPass");
    let retrievedObject = JSON.parse(storedJsonObject);
    const items = { ...data };
    console.log(items);
    const valueQyt = document.querySelector(".price-content .qty input");
    items.quantity = valueQyt.value;
    items.price = priceData;
    SumPrice();
    if (retrievedObject) {
        let saveItem = "save";
        localStorage.setItem("saveItem", saveItem);
        // localStorage.setItem("itemObject", items);
        localStorage.setItem("itemObject", JSON.stringify(items));
        localStorage.removeItem("detail");
        window.open("checkout.html", "_blank");
    } else {
        blockLogin.classList.add("active");
        bg.classList.add("active");
    }
}
function plus() {
    data.quantity++;
    data.price = parseFloat(data.quantity) * parseFloat(data.priceInner);
    priceData = data.price;
    console.log(data.price);
    renderDetail(data);
}
function minus() {
    if (data.quantity < 2) {
        return 1;
    } else {
        data.quantity--;
        data.price = parseFloat(data.quantity) * parseFloat(data.priceInner);
        priceData = data.price;
        console.log(data.price);
        renderDetail(data);
    }
}
