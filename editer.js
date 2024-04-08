const get_data_button = document.getElementById("selectPage");
if (get_data_button) {
    get_data_button.addEventListener("click", function (e) {
        const selectPage = document.querySelector(".selectPage").value;
        let textarea = document.querySelector(".jsonTextarea");

        if (selectPage == "homePage") {
            textarea.value = localStorage.getItem("homePage");
        } else if (selectPage == "wildLife") {
            textarea.value = localStorage.getItem("wildLife");
        } else if (selectPage == "department") {
            textarea.value = localStorage.getItem("department");
        } else if (selectPage == "animals") {
            textarea.value = localStorage.getItem("animals");
        } else if (selectPage == "leopard") {
            textarea.value = localStorage.getItem("leopard");
        } else if (selectPage == "yala") {
            textarea.value = localStorage.getItem("yala");
        } else if (selectPage == "wilpattu") {
            textarea.value = localStorage.getItem("wilpattu");
        }
    });
}

const editPageButton = document.getElementById("saveChanges");
if (editPageButton) {
    editPageButton.addEventListener("click", function (e) {
        const selectPage = document.querySelector(".selectPage").value;
        const textareaValue = document.querySelector(".jsonTextarea").value;

        if (selectPage && textareaValue) {
            if (selectPage == "homePage") {
                localStorage.setItem("homePage", textareaValue);
            } else if (selectPage == "wildLife") {
                localStorage.setItem("wildLife", textareaValue);
            } else if (selectPage == "department") {
                localStorage.setItem("department", textareaValue);
            } else if (selectPage == "animals") {
                localStorage.setItem("animals", textareaValue);
            } else if (selectPage == "leopard") {
                localStorage.setItem("leopard", textareaValue);
            } else if (selectPage == "yala") {
                localStorage.setItem("yala", textareaValue);
            } else if (selectPage == "wilpattu") {
                localStorage.setItem("wilpattu", textareaValue);
            } else {
                console.log("hello world");
            }
        }
    });
}