document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('wilpattu.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("wilpattu", JSON.stringify(content));

            const data = JSON.parse(localStorage.getItem("wilpattu"));
            console.log(data);



        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});