let paymentMethod = "";
let local = false;
const total = document.querySelector(".pay-price .price-content h5 .price-product");
const cartSubtotal = document.querySelector(".order ul .cart-subtotal .sub-total");
const orderTotal = document.querySelector(".order-total .or-total");
const inputCode = document.querySelector(".code-dis input");
const showDiscount = document.querySelector(".checkout-main .box .order ul li:nth-last-child(2) span:last-child");
const alert = document.querySelector(".alert-warning");

let formData = {};
let checked = false;

$(document).ready(function () {
    $(".methods ul li").click(function () {
        $(".methods ul li").removeClass("active");
        $(this).addClass("active");
        paymentMethod = $("ul li.active").text();
        checked = true;
    });
});
async function sub() {
    if (checked === false) {
        alert.classList.add("active");
        setTimeout(() => {
            alert.classList.remove("active");
        }, 1500);
    } else {
        const fields = [
            { id: "firstName", label: "First name" },
            { id: "lastName", label: "Last name" },
            { id: "phone", label: "Phone number" },
            { id: "address", label: "Address" },
        ];
        let isValid = true;
        fields.forEach(function (field) {
            const input = document.getElementById(field.id);
            const attBug = input.nextElementSibling; // assuming the error message is the immediate sibling of the input field
            if (input.value.trim() === "") {
                attBug.textContent = `${field.label} is required!`;
                input.classList.add("active");
                isValid = false;
            } else {
                attBug.textContent = ""; // Clear the error message when the field is valid
                input.classList.remove("active");
                formData[field.id] = input.value.trim(); // Thêm giá trị vào đối tượng formData
            }
        });
        async function updateForm() {
            formData.activeLiContentText = paymentMethod;
            formData.cartSubtotal = cartSubtotal.innerHTML;
            formData.transportFee = "Free";
            formData.voucher = showDiscount.innerHTML;
            formData.totalPrice = orderTotal.innerHTML;
            console.log(formData);
            let currentDate = new Date();
            let day = currentDate.getDate().toString().padStart(2, "0");
            let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
            let year = currentDate.getFullYear();
            let hours = currentDate.getHours().toString().padStart(2, "0");
            let minutes = currentDate.getMinutes().toString().padStart(2, "0");
            let seconds = currentDate.getSeconds().toString().padStart(2, "0");
            let days = { day, month, year };
            let time = { hours, minutes, seconds };
            formData.days = days;
            formData.time = time;
            await postData(formData, "bill");
            window.location.href = "bill.html";
        }
        if (isValid) {
            if (savedValue) {
                await updateForm();
            } else {
                await updateForm();
            }
        }
    }
}

// console.log(showDiscount);
const code10 = ["qwe10", "asd10", "zxc10"];
const code20 = ["qwe20", "asd20", "zxc20"];
async function applyCode() {
    const enteredCode = inputCode.value.trim();
    if (code10.includes(enteredCode)) {
        let numberPrice = cartSubtotal.innerHTML;
        const priceDiscount = parseFloat(numberPrice.replace(/[^0-9.]/g, "")) * 0.9;
        showDiscount.innerHTML = "-10%";
        console.log(priceDiscount);
        orderTotal.innerHTML =
            "$" +
            parseFloat(priceDiscount).toLocaleString("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
            });
    } else if (code20.includes(enteredCode)) {
        let numberPrice = cartSubtotal.innerHTML;
        const priceDiscount = parseFloat(numberPrice.replace(/[^0-9.]/g, "")) * 0.8;
        console.log(priceDiscount);
        showDiscount.innerHTML = "-20%";
        orderTotal.innerHTML =
            "$" +
            parseFloat(priceDiscount).toLocaleString("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
            });
    } else {
        console.log("Invalid code");
    }
}
const orderInner = document.querySelector(".order .list-order");
let savedValue = localStorage.getItem("saveItem");
// function renderUpdate() {}
async function renderOrder() {
    if (savedValue) {
        let productNames = [];
        let storedJsonObject = localStorage.getItem("itemObject");
        let retrievedObject = JSON.parse(storedJsonObject);
        // console.log(retrievedObject);
        orderInner.innerHTML += `
            <div class="list-order-product d-flex align-items-center gap-4">
            <div class="image">
                <img src="${retrievedObject.image}" alt="" />
            </div>
            <div class="content">
                <h6>${retrievedObject.name}</h6>
                <h5>$ <span>${parseFloat(retrievedObject.priceInner).toLocaleString("en-US", {
                    currency: "USD",
                    minimumFractionDigits: 2,
                })}</span></h5>
            </div>
            <p>${retrievedObject.quantity}</p>
     </div>
            `;
        cartSubtotal.innerHTML =
            "$" +
            parseFloat(retrievedObject.price).toLocaleString("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
            });
        orderTotal.innerHTML =
            "$" +
            parseFloat(retrievedObject.price).toLocaleString("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
            });
        let productObject = {
            name: retrievedObject.name,
            quantity: retrievedObject.quantity,
        };
        productNames.push(productObject);
        console.log(productObject);
        formData.productObject = productNames;
    } else {
        await renderData();
        let productNames = [];

        orderInner.innerHTML = "";
        products.forEach((product) => {
            orderInner.innerHTML += `
            <div class="list-order-product d-flex align-items-center gap-4">
            <div class="image">
                <img src="${product.image}" alt="" />
            </div>
            <div class="content">
                <h6>${product.name}</h6>
                <h5>$ <span>${parseFloat(product.priceInner).toLocaleString("en-US", {
                    currency: "USD",
                    minimumFractionDigits: 2,
                })}</span></h5>
            </div>
            <p>${product.quantity}</p>
     </div>
            `;

            let productObject = {
                name: product.name,
                quantity: product.quantity,
            };
            productNames.push(productObject);
        });
        console.log(productNames);
        formData.productObject = productNames;
        cartSubtotal.innerHTML = "$" + total.innerHTML;
        orderTotal.innerHTML = "$" + total.innerHTML;
    }
}
renderOrder();
