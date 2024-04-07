document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('yala.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("yala", JSON.stringify(content));

            const data = JSON.parse(localStorage.getItem("yala"));
            console.log(data);



        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});