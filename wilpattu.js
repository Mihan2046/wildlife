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
            if (!localStorage.getItem("wilpattu")) { localStorage.setItem("wilpattu", JSON.stringify(content)); }

            const data = JSON.parse(localStorage.getItem("wilpattu"));
            console.log(data);

            document.getElementById("wilpattuHeader").innerHTML =
                data.main.sections[0].heading;
            document.getElementById("wilpattuTopic1").innerHTML =
                data.main.sections[1].heading;
            document.getElementById("wilpattuInf1").innerHTML =
                data.main.sections[1].content;
            document.getElementById("wilpattuInf5").innerHTML =
                data.main.sections[1].content2;
            const wilpic1 = data.main.sections[1].image;
            document.getElementById("wilpattuPic1").src = `./${wilpic1}`;
            const wilpic2 = data.main.sections[3].images[0];
            document.getElementById("wilpattuPic2").src = `./${wilpic2}`;
            const wilpic3 = data.main.sections[3].images[1];
            document.getElementById("wilpattuPic3").src = `./${wilpic3}`;
            const wilpic4 = data.main.sections[3].images[2];
            document.getElementById("wilpattuPic4").src = `./${wilpic4}`;
            const wilpic5 = data.main.sections[3].images[3];
            document.getElementById("wilpattuPic5").src = `./${wilpic5}`;


        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});