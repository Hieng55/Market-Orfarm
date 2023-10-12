const container1 = document.querySelector("#products-list-1");
const container2 = document.querySelector("#products-list-2");
const container3 = document.querySelector("#products-list-3");
const container4 = document.querySelector("#products-list-4");
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-1.jpg",
//         title: "Soda Sparkling Water Maker (Rose Gold)",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-2.jpg",
//         title: "Mangosteen Organic From VietNamese",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-3.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-4.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-5.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-6.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     // {
//     //     nameProduct: "Fresh vegetable",
//     //     image: "img/product/product-6.jpg",
//     //     title: "Ginger Fresh, Whole, Organic - 250gram",
//     //     price: "$ 56.00",
//     //     salePrice: "$ 69.00",
//     //     sale: "-50%",
//     // },
// ];
// const freshMeat = [
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-7.jpg",
//         title: "Soda Sparkling Water Maker (Rose Gold)",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-8.jpg",
//         title: "Mangosteen Organic From VietNamese",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-9.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-10.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-11.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
//     {
//         nameProduct: "Fresh vegetable",
//         image: "img/product/product-12.jpg",
//         title: "Ginger Fresh, Whole, Organic - 250gram",
//         price: "$ 56.00",
//         salePrice: "$ 69.00",
//         sale: "-50%",
//     },
// ];
// const dataProduct = [
//     {
//         name: " Fresh Mangosteen 100% Organic From Irael ",
//         type: "Fresh vegetable",
//         price: "600.00",
//         priceInner: "600",
//         image: "/img/product/fruit/7_8.jpg",
//     },
//     {
//         name: "  Ginger Fresh, Whole, Organic - 250gram ",
//         type: "Fresh vegetable",
//         price: "300.00",
//         priceInner: "600",
//         image: "/img/product/fruit/8_1_3.jpg",
//     },
//     {
//         name: " USDA Choice Angus Beef Stew Meat - 1Kg  ",
//         type: "Fresh vegetable",
//         price: "100.00",
//         priceInner: "600",
//         image: "/img/product/fruit/9_1_5.jpg",
//     },
//     {
//         name: "  Fresh Mangosteen 100% Organic From Pakistant  ",
//         type: "Fresh vegetable",
//         price: "90.00",
//         priceInner: "600",
//         image: "/img/product/fruit/9_2_4.jpg",
//     },
//     {
//         name: "  Guava Leaves From Trees Grown in South...  ",
//         type: "Fresh vegetable",
//         price: "50.00",
//         priceInner: "600",
//         image: "/img/product/fruit/9_3_3.jpg",
//     },
//     {
//         name: "  Fresh Mangosteen 100% Organic From Canada  ",
//         type: "Fresh vegetable",
//         price: "10.00",
//         priceInner: "600",
//         image: "/img/product/fruit/10_1_8.jpg",
//     },
//     {
//         name: "  Fresh Mangosteen 90% Organic From VietNamese  ",
//         type: "Fresh vegetable",
//         price: "80.00",
//         priceInner: "600",
//         image: "/img/product/fruit/20.jpg",
//     },
//     {
//         name: " Fresh Mangostee 100% Organic From VietNamese ",
//         type: "Fresh vegetable",
//         price: "60.00",
//         priceInner: "600",
//         image: "/img/product/fruit/17.jpg",
//     },
//     {
//         name: "  Vivamus magna justo, lacinia eget  ",
//         type: "Fresh vegetable",
//         price: "200.00",
//         priceInner: "600",
//         image: "/img/product/fruit/19.jpg",
//     },
// ];
function returnCards(allProducts, container1) {
    allProducts.forEach((product) => {
        container1.innerHTML += `<div class="fresh-list col-6 col-sm-4 col-md-4 col-lg-2">
        <a href="" class="card-product rounded-2">
            <div class="thumb">
                <img src="${product.image}" alt="" />
                <div class="sale">${product.sale}</div>
            </div>
            <div class="content">
                <p class="cate">${product.name}</p>
                <h3 class="title">${product.nameProduct}</h3>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <span>${product.price}</span>
                    <span>${product.salePrice}</span>
                </div>
            </div>
            <div class="info ">
               <div class="info-content">
               <ul>
                   <li>Type: Organic</li>
                   <li>MFG: August 4.2023</li>
                   <li>LIFE: 60 days</li>
               </ul>
               <button onClick="tabDetail(event,${product.id})" class="btn btn-primary w-100 rounded-pill btn-box">Add to card</button>
               </div>
            </div>
        </a>
    </div>`;
    });
}

returnCards(allProducts, container1);
returnCards(freshMeat, container2);
returnCards(allProducts, container3);
returnCards(freshMeat, container4);
const tab = document.querySelector(".products-tab");
function renderList(data) {
    tab.innerHTML = "";
    data.forEach((item) => {
        tab.innerHTML += `
        <div onclick="detailTab(${item.id})"  class="tab">
        <div class="img">
            <img src="${item.image}" alt="" />
        </div>
        <div class="text-tab">
            <p>${item.type}</p>
            <h5>${item.name}</h5>
            <h4> $<span>${item.price}</span></h4>
        </div>
    </div>
        `;
    });
}
renderList(dataProduct);

async function detailTab(id) {
    // const link = "detail";
    localStorage.removeItem("detail");
    const items = dataProduct.find((item) => item.id === id);
    localStorage.setItem("detail", JSON.stringify(items));
    window.location.href = "cartDetail.html";
}
function tabDetail(event, id) {
    event.preventDefault();
    localStorage.removeItem("detail");
    let items = allProducts.find((product) => product.id === id);
    if (!items) {
        items = freshMeat.find((product) => product.id === id);
    }
    localStorage.setItem("detail", JSON.stringify(items));

    window.location.href = "cartDetail.html";
}
