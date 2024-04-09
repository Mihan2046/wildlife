document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('yala.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response)
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("yala")) { localStorage.setItem("yala", JSON.stringify(content)); }

            const data = JSON.parse(localStorage.getItem("yala"));
            console.log(data);

            document.getElementById("yalaHeading").innerHTML =
                data.main.sections[0].title;
            document.getElementById("yalaTopic1").innerHTML =
                data.main.sections[1].title;
            document.getElementById("yalaInf1").innerHTML =
                data.main.sections[1].content.description;
            document.getElementById("yalaInf2").innerHTML =
                data.main.sections[1].content.description2;
            document.getElementById("yalaTopic2").innerHTML =
                data.main.sections[2].title;
            document.getElementById("yalaInfo3").innerHTML =
                data.main.sections[2].about;
            const yalapic1 = data.main.sections[1].content.image;
            document.getElementById("yalaPic1").src = `./${yalapic1}`;
            const yalapic2 = data.main.sections[3].images[0];
            document.getElementById("yalaPic2").src = `./${yalapic2}`;
            const yalapic3 = data.main.sections[3].images[1];
            document.getElementById("yalaPic3").src = `./${yalapic3}`;
            const yalapic4 = data.main.sections[3].images[2];
            document.getElementById("yalaPic4").src = `./${yalapic4}`;
            const yalapic5 = data.main.sections[3].images[3];
            document.getElementById("yalaPic5").src = `./${yalapic5}`;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});