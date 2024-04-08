document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('wildlife.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("wildLife")) { localStorage.setItem("wildLife", JSON.stringify(data)); }

            const data = JSON.parse(localStorage.getItem("wildLife"));
            console.log(data);

            document.getElementById("wildHEading").innerHTML =
                data.main.sections[0].heading;
            document.getElementById("section1").innerHTML =
                data.main.sections[2].heading;
            const wildpic1 = data.main.sections[1].locations[0].images[0];
            document.getElementById("wildlifePic1").src = `./${wildpic1}`;
            const wildpic2 = data.main.sections[1].locations[0].images[1];
            document.getElementById("wildlifePic2").src = `./${wildpic2}`;
            const wildpic3 = data.main.sections[1].locations[0].images[2];
            document.getElementById("wildlifePic3").src = `./${wildpic3}`;
            const wildpic4 = data.main.sections[1].locations[0].images[3];
            document.getElementById("wildlifePic4").src = `./${wildpic4}`;
            const wildpic5 = data.main.sections[1].locations[1].images[0];
            document.getElementById("wildlifePic5").src = `./${wildpic5}`;
            const wildpic6 = data.main.sections[1].locations[1].images[1];
            document.getElementById("wildlifePic6").src = `./${wildpic6}`;
            const wildpic7 = data.main.sections[1].locations[1].images[2];
            document.getElementById("wildlifePic7").src = `./${wildpic7}`;
            const wildpic8 = data.main.sections[1].locations[1].images[3];
            document.getElementById("wildlifePic8").src = `./${wildpic8}`;


            document.getElementById("locaion1").innerHTML =
                data.main.sections[1].locations[0].name;
            document.getElementById("wildlifeInfo1").innerHTML =
                data.main.sections[1].locations[0].description;
            document.getElementById("location2").innerHTML =
                data.main.sections[1].locations[1].name;
            document.getElementById("wildlifeInfo2").innerHTML =
                data.main.sections[1].locations[1].description;



        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});