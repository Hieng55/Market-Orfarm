const commentInner = document.querySelector(".box-comment");
async function postComment(event) {
    event.preventDefault();
    let currentDate = new Date();
    let day = currentDate.getDate().toString().padStart(2, "0");
    let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = currentDate.getMonth();
    let monthName = monthsArray[monthIndex];
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");
    // let seconds = currentDate.getSeconds().toString().padStart(2, "0");
    await renderData();
    // console.log(account[0].lastName);
    // commentInner.innerHTML = "";
    const textarea = document.querySelector(".post-comment textarea");
    const commentHTML = `
    <div class="info-comment">
        <h6>${account[0].firstName} ${account[0].lastName}</h6>
        <h6>${monthName} ${day}, ${year} ${hours}:${minutes}</h6>
    </div>
    <p class="content-comment">${textarea.value}</p>
`;
    commentInner.insertAdjacentHTML("beforeend", commentHTML);
    textarea.value = "";
}
