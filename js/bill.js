const URL_BILL = "https://t2gq6d-8080.csb.app/bill";
let bill = {};
async function renderDataBill() {
    const resDataBill = await fetch(`${URL_BILL}`);
    const dataBill = await resDataBill.json();
    bill = dataBill;
    return dataBill;
}
const contentInner = document.querySelector(".bill-detail ");
async function initBill() {
    await renderDataBill();
    renderBill();
}
async function renderBill() {
    await renderDataBill();
    console.log(bill);
    contentInner.innerHTML = "";
    const productNames = bill[0].productObject.map((product) => `<span>${product.name}</span>`).join(" ");
    const totalQuantity = bill[0].productObject
        .map((product) => parseInt(product.quantity))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(totalQuantity);
    contentInner.innerHTML = `
    <div class="content-bill">
        <h5>BILL</h5>
        <ul class="product-detail">
            <li><span>Full Name</span> <span>${bill[0].lastName}  <span></span>${bill[0].firstName}</span></li>
            <li><span>Phone</span> <span>${bill[0].phone}</span></li>
            <li><span>Address</span> <span>${bill[0].address}</span></li>
            <li><span>Name Product</span>  <p class="names-product">${productNames}</p></li>
        </ul>
    </div>
    <ul class="product-bill">
        <li>
            <span>Unit Price (<i>${totalQuantity}</i> )</span>
            <span class="price-cart">${bill[0].cartSubtotal}</span>
        </li>
        <li>
            <span>Set The Date</span>
            <span>${bill[0].days.day}/${bill[0].days.month}/${bill[0].days.year} ${bill[0].time.hours}:${bill[0].time.minutes}:${bill[0].time.seconds}</span>
        </li>
        <li>
            <span>Transport Fee</span>
            <span class="transport">${bill[0].transportFee}</span>
        </li>
        <li>
            <span>Voucher</span>
            <span class="price-cart">${bill[0].voucher}</span>
        </li>
        <li>
            <span>Total</span>
            <span class="price-cart">${bill[0].totalPrice}</span>
        </li>
    </ul>
    <button onclick="goHome()" class="back-home">GO BACK HOME PAGE</button>
    `;
}
function goHome() {
    window.location.href = "index.html";
}
initBill();
