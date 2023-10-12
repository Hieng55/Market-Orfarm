//START DATA
const allProducts = [
    {
        id: 1,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-1.jpg",
        name: "Soda Sparkling Water Maker (Rose Gold)",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 2,
        nameProduct: "Fresh vegetable",
        nameProduct: "Fresh vegetable",
        image: "img/product/product-2.jpg",
        name: "Mangosteen Organic From VietNamese",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 3,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-3.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 4,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-4.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 5,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-5.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 6,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-6.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
];
const freshMeat = [
    {
        id: 7,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-7.jpg",
        name: "Soda Sparkling Water Maker (Rose Gold)",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 8,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-8.jpg",
        name: "Mangosteen Organic From VietNamese",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 9,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-9.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 10,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-10.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 11,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-11.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
    {
        id: 12,
        nameProduct: "Fresh vegetable",
        image: "img/product/product-12.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: "56.00",
        priceInner: "56",
        salePrice: "$ 69.00",
        sale: "-50%",
        quantity: 1,
    },
];
const dataProduct = [
    {
        id: 13,
        name: " Fresh Mangosteen 100% Organic From Irael ",
        type: "Fresh vegetable",
        price: "600.00",
        priceInner: "600",
        quantity: 1,
        image: "img/product/product-11.jpg",
    },
    {
        id: 14,
        name: "  Ginger Fresh, Whole, Organic - 250gram ",
        type: "Fresh vegetable",
        price: "300.00",
        priceInner: "300",
        quantity: 1,
        image: "img/product/product-1.jpg",
    },
    {
        id: 15,
        name: " USDA Choice Angus Beef Stew Meat - 1Kg  ",
        type: "Fresh vegetable",
        price: "100.00",
        priceInner: "100",
        quantity: 1,
        image: "img/product/product-2.jpg",
    },
    {
        id: 16,
        name: "  Fresh Mangosteen 100% Organic From Pakistant  ",
        type: "Fresh vegetable",
        price: "90.00",
        priceInner: "90",
        quantity: 1,
        image: "img/product/product-3.jpg",
    },
    {
        id: 17,
        name: "  Guava Leaves From Trees Grown in South...  ",
        type: "Fresh vegetable",
        price: "50.00",
        priceInner: "50",
        quantity: 1,
        image: "img/product/product-4.jpg",
    },
    {
        id: 18,
        name: "  Fresh Mangosteen 100% Organic From Canada  ",
        type: "Fresh vegetable",
        price: "10.00",
        priceInner: "10",
        quantity: 1,
        image: "img/product/product-5.jpg",
    },
    {
        id: 19,
        name: "  Fresh Mangosteen 90% Organic From VietNamese  ",
        type: "Fresh vegetable",
        price: "80.00",
        priceInner: "80",
        quantity: 1,
        image: "img/product/product-12.jpg.jpg",
    },
    {
        id: 20,
        name: " Fresh Mangostee 100% Organic From VietNamese ",
        type: "Fresh vegetable",
        price: "60.00",
        quantity: 1,
        priceInner: "60",
        image: "img/product/product-6.jpg.jpg",
    },
    {
        id: 21,
        name: "  Vivamus magna justo, lacinia eget  ",
        type: "Fresh vegetable",
        price: "200.00",
        priceInner: "200",
        quantity: 1,
        image: "img/product/product-7.jpg",
    },
];
const shop = [
    {
        id: 22,
        image: "img/product/product-1.jpg",
        name: "Soda Sparkling Water Maker (Rose Gold)",
        price: "56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 23,
        image: "img/product/product-2.jpg",
        name: "Mangosteen Organic From VietNamese",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 24,
        image: "img/product/product-3.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 25,
        image: "img/product/product-4.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 26,
        image: "img/product/product-5.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 27,
        image: "img/product/product-6.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 50.00",
        salePrice: "$ 69.00",
        priceInner: "50",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 28,
        image: "img/product/product-9.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        priceInner: "560",
        price: " 560.00",
        salePrice: "$ 690.00",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 29,
        name: " Fresh Mangosteen 100% Organic From Irael ",
        type: "Fresh vegetable",
        price: "700.00",
        priceInner: "700",
        image: "img/product/product-1.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$800",
    },
    {
        id: 30,
        name: "  Ginger Fresh, Whole, Organic - 250gram ",
        type: "Fresh vegetable",
        price: "300.00",
        priceInner: "300",
        image: "img/product/product-2.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$400",
    },
    {
        id: 31,
        name: " USDA Choice Angus Beef Stew Meat - 1Kg  ",
        type: "Fresh vegetable",
        price: "400.00",
        priceInner: "400",
        image: "img/product/product-3.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$500",
    },
    {
        id: 32,
        name: "  Fresh Mangosteen 100% Organic From Pakistant  ",
        type: "Fresh vegetable",
        price: "300.00",
        priceInner: "300",
        image: "img/product/product-4.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$400",
    },
    {
        id: 33,
        name: "  Guava Leaves From Trees Grown in South...  ",
        type: "Fresh vegetable",
        price: "500.00",
        priceInner: "500",
        image: "img/product/product-5.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$600",
    },
    {
        id: 34,
        name: "  Fresh Mangosteen 100% Organic From Canada  ",
        type: "Fresh vegetable",
        price: "100.00",
        priceInner: "100",
        image: "img/product/product-6.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$200",
    },
    {
        id: 35,
        name: "  Fresh Mangosteen 90% Organic From VietNamese  ",
        type: "Fresh vegetable",
        price: "600.00",
        priceInner: "600",
        image: "img/product/product-7.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$700",
    },
    {
        id: 36,
        name: " Fresh Mangostee 100% Organic From VietNamese ",
        type: "Fresh vegetable",
        price: "600.00",
        priceInner: "600",
        image: "img/product/product-8.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$700",
    },

    {
        id: 37,
        name: "  Fresh Mangosteen 100% Organic From Canada  ",
        type: "Fresh vegetable",
        price: "200.00",
        priceInner: "200",
        image: "img/product/product-9.jpg",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
        salePrice: "$300",
    },
    {
        id: 38,
        image: "img/product/product-10.jpg",
        name: "Soda Sparkling Water Maker (Rose Gold)",
        price: "56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 39,
        image: "img/product/product-11.jpg",
        name: "Mangosteen Organic From VietNamese",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 40,
        image: "img/product/product-12.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
    {
        id: 41,
        image: "img/product/product-14.jpg",
        name: "Ginger Fresh, Whole, Organic - 250gram",
        price: " 56.00",
        salePrice: "$ 69.00",
        priceInner: "56",
        sale: "SALE",
        status: "NEW",
        quantity: 1,
    },
];
//END SUPPER DATA
const listInner = document.querySelector(".shop-main .list-product");
let numberQyt = document.querySelector(".header .head .icon li span");
const qytTab = document.querySelector(".tab-menu ul .shopping-icon span");
let products = [];
let account = [];
const URL = "https://t2gq6d-8080.csb.app";
numberQyt.innerHTML = "";

//START GET
async function init() {
    await renderData();
    if (products === "") {
        numberQyt.innerHTML = "0";

        qytTab.innerHTML = "0";
    } else {
        console.log(products);

        numberQyt.innerHTML = products.length;

        qytTab.innerHTML = products.length;
    }

    SumPrice();

    // renderListProduct();
}
let addClass = document.querySelector(".attention");
let att = document.querySelector(".attention p span");
async function renderData() {
    let resDataProduct = await fetch(`${URL}/products`);
    let resDataAccount = await fetch(`${URL}/account`);
    let dataProduct = await resDataProduct.json();
    let dataAccount = await resDataAccount.json();
    products = dataProduct;
    account = dataAccount;
    // console.log(products);
    return { dataProduct, dataAccount };
}
//END GET
//START DELETE
async function deleteData(id) {
    const resDeleteData = await fetch(`${URL}/products/${id}`, {
        method: "DELETE",
    });
    return resDeleteData;
}
//START POST
async function postData(data, link) {
    try {
        const response = await fetch(`${URL}/${link}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Không thể gửi dữ liệu");
        }

        const responseData = await response.json();
        // Xử lý phản hồi từ server
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Lỗi: " + error.message);
    }
}
//END POST
//START PUT
async function PutData(data, id) {
    const resUpdateData = await fetch(`${URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return resUpdateData;
}
//END PUT
function classActive() {
    addClass.classList.add("active");
    setTimeout(() => {
        addClass.classList.remove("active");
    }, 2000);
}
const priceProduct = document.querySelector(".price-content .price-product");
// SUM
function SumPrice() {
    let coin = products.reduce((total, product) => {
        return parseFloat(total) + parseFloat(product.price);
    }, 0);
    priceProduct.innerHTML = coin.toLocaleString("en-US", { minimumFractionDigits: 2 });
}
// ADD TO CART

async function addCart(id) {
    const items = shop.find((item) => item.id === id);
    const find = products.find((product) => product.id === items.id);
    if (!find) {
        console.log(items);
        const nameLink = "products";
        await postData(items, nameLink);
        classActive();
        att.innerHTML = items.name;
        await renderData();
        SumPrice();
        numberQyt.innerHTML = products.length;
        qytTab.innerHTML = products.length;
        renderListProduct();
    } else {
        classActive();
        att.innerHTML = "Products already in the cart";
    }
}
let flag = false;
const close = document.querySelector(".nabar-items i");
const nabar = document.querySelector(".nabar");
const cart = document.querySelector(".header .head .icon .shopping-icon");
const bg = document.querySelector(".bg");
const cartTab = document.querySelector(".tab-menu ul .shopping-icon ");
close.addEventListener("click", () => {
    nabar.classList.remove("active");
    bg.classList.remove("active");
});
cartTab.addEventListener("click", () => {
    nabar.classList.add("active");
    bg.classList.add("active");
});
cart.addEventListener("click", () => {
    nabar.classList.add("active");
    bg.classList.add("active");
});
const nabarList = document.querySelector(".nabar-list");

async function renderListProduct() {
    await renderData();
    // console.log(products);
    nabarList.innerHTML = "";
    products.forEach((item) => {
        nabarList.innerHTML += `
        <div class="nabar-item d-flex align-items-center">
                        <div class="img">
                            <img src="${item.image}" alt="" />
                        </div>

                        <div class="nabar-content">
                            <h5>${item.name}</h5>
                            <div class="input d-flex align-items-center gap-2">
                                <input type="text" value="${item.quantity}" data-id=${item.id}  onChange="putQuantity(${item.id})"/>
                                <h6 class="d-flex gap-2 align-items-center"><span>x </span><span>${parseFloat(item.priceInner).toLocaleString(
                                    "en-US",
                                    {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 2,
                                    }
                                )}</span> <i onClick="remove(${item.id})" class="fa-solid fa-trash-can"></i></h6>
                            </div>
                        </div>
                    </div>
        `;
    });
}
renderListProduct();
// PUT QUANTITY
async function putQuantity(id) {
    const items = products.find((item) => item.id === id);
    const valueQuantity = document.querySelector(`.input input[data-id="${id}"]`);
    if (items && valueQuantity) {
        items.quantity = valueQuantity.value;
        console.log(valueQuantity.value);
        const sum = parseFloat(items.priceInner) * parseFloat(valueQuantity.value);
        items.price = sum;
        await PutData(items, id);
        await renderData();
        SumPrice();
    } else {
        console.error(`Sản phẩm với id ${id} không tồn tại trong danh sách hoặc không tìm thấy ô input.`);
    }

    renderListProduct();
}
// REMOVE ITEM
async function remove(id) {
    console.log(products);
    const items = products.find((item) => item.id === id);
    await deleteData(items.id);

    await renderData();
    SumPrice();
    console.log(products);
    numberQyt.innerHTML = products.length;

    renderListProduct();
}
const blockLogin = document.querySelector(".log-in");

const closeLogin = document.querySelector(".log-in .close");
async function checkout() {
    let storedJsonObject = localStorage.getItem("checkPass");
    let retrievedObject = JSON.parse(storedJsonObject);
    console.log(retrievedObject);
    if (retrievedObject) {
        localStorage.removeItem("saveItem");
        let payCart = "cart";
        localStorage.setItem("payCart", payCart);

        window.location.href = "checkout.html";
    } else {
        blockLogin.classList.add("active");
        bg.classList.add("index");
    }
}
closeLogin.addEventListener("click", () => {
    blockLogin.classList.remove("active");
    bg.classList.add("active");
    if (bg.classList.contains("index")) {
        bg.classList.remove("index");
    } else {
        bg.classList.remove("active");
    }
});
const avatar = document.querySelector(".avatar");
async function sign() {
    await renderData();
    const email = document.querySelector(".email input");
    const passWord = document.querySelector(".pass input");
    const bugLock = document.querySelector(".login .pass span");
    const emailValue = email.value;
    const passValue = passWord.value;
    const checkEmail = account.find((check) => check.email == emailValue);
    const checkPass = account.find((check) => check.pass == passValue);
    if (!checkEmail || !checkPass) {
        bugLock.innerHTML = "Email or password is incorrect";
    } else {
        bugLock.classList.add("active");
        flag = true;
        let jsonObject = JSON.stringify(flag);
        localStorage.setItem("checkPass", jsonObject);
        blockLogin.classList.remove("active");
        bg.classList.remove("active");
        avatar.innerHTML = `<img src="./img/icon/favico.png" alt="">`;
        email.value = "";
        passWord.value = "";
    }
}
let userClicked = false;
const userIn = document.querySelector(".user .log-out");
function user() {
    if (localStorage.getItem("checkPass") === "false") {
        blockLogin.classList.add("active");
        bg.classList.add("active");
    } else {
        userIn.classList.add("active");
        userClicked = true;
    }
}
window.addEventListener("click", function () {
    if (userClicked) {
        userClicked = false;
        return;
    }
    if (userIn.classList.contains("active")) {
        userIn.classList.remove("active");
    }
});
function out() {
    let checkFlag = localStorage.getItem("checkPass");
    console.log(checkFlag);
    if (checkFlag === "true") {
        localStorage.removeItem("checkPass");
        checkFlag = false;
        localStorage.setItem("checkPass", checkFlag);
        userIn.classList.remove("active");
        blockLogin.classList.remove("active");
        console.log("111");
        avatar.innerHTML = `<i class="fa-regular fa-user">`;
    }
}
window.onload = function () {
    if (localStorage.getItem("checkPass") === "true") {
        avatar.innerHTML = `<img src="./img/icon/favico.png" alt="">`;
    }
};
$(document).ready(function () {
    $(".shop").click(function () {
        $(".menu-res .shop p i").toggleClass("active");
        $(".menu-tab").slideToggle("500");
    });
    $(".menu-res .close").click(function () {
        $(".menu-res").removeClass("active");
        $(".bg").removeClass("active");
    });
    $(".bars").click(function () {
        $(".menu-res").addClass("active");
        $(".bg").addClass("active");
    });
});
init();
