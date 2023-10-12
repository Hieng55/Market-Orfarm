async function create(event) {
    event.preventDefault();
    const fields = [
        { id: "firstName", label: "First name" },
        { id: "lastName", label: "Last name" },
        { id: "email", label: "Email" },
        { id: "pass", label: "Password" },
        { id: "c-pass", label: "Confirm password" },
    ];

    let isValid = true;
    let formData = {};
    fields.forEach(function (field) {
        const input = document.getElementById(field.id);
        const label = document.querySelector("label[for='" + field.id + "']");

        if (input.value.trim() === "") {
            label.textContent = field.label + " is required!";
            input.classList.add("active");
            isValid = false;
        } else {
            label.textContent = "";
            formData[field.id] = input.value.trim();
        }
    });
    const passInput = document.getElementById("pass");
    const cPassInput = document.getElementById("c-pass");
    const mail = document.getElementById("email").value;

    if (passInput.value !== cPassInput.value) {
        const passLabel = document.querySelector("label[for='c-pass']");
        passLabel.textContent = "Passwords do not match!";
        passInput.classList.add("active");
        cPassInput.classList.add("active");
        isValid = false;
    } else {
        passInput.classList.remove("active");
        cPassInput.classList.remove("active");
    }
    if (isValid) {
        await renderData();
        const items = account.find((item) => item.email === mail);
        const infoText = document.querySelector(".info-att span");
        const info = document.querySelector(".info-att");
        const iconInfo = document.querySelector(".info-att .fa-triangle-exclamation");
        const iconCheck = document.querySelector(".info-att .fa-circle-check");
        let flag = false;
        console.log(items);

        if (!items) {
            let link = "account";
            await postData(formData, link);
            flag = true;
            let jsonObject = JSON.stringify(flag);
            localStorage.setItem("checkPass", jsonObject);
            console.log(formData);
            fields.forEach((field) => {
                const input = document.getElementById(field.id);
                input.value = "";
            });
            info.classList.add("active");
            infoText.textContent = "Sign Up Success";
            iconCheck.classList.add("active");
            iconInfo.classList.remove("active");
            setTimeout(() => {
                info.classList.remove("active");
                infoText.textContent = "Sign Up Success";
                iconCheck.classList.remove("active");
            }, 1500);
        } else {
            iconCheck.classList.remove("active");
            iconInfo.classList.add("active");
            info.classList.add("active");
            infoText.textContent = "Email already exists";
            setTimeout(() => {
                iconInfo.classList.remove("active");
                info.classList.remove("active");
                infoText.textContent = "Email already exists";
            }, 1500);
        }
    }
}
