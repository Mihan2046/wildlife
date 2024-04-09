document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('animals.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("animals")) { localStorage.setItem("animals", JSON.stringify(content)); }

            const data = JSON.parse(localStorage.getItem("animals"));
            console.log(data);


            document.getElementById("animalintro_heading").innerHTML =
                data.main.sections[0].title;
            document.getElementById("animal_heading2").innerHTML =
                data.main.sections[1].title;
            document.getElementById("animal_info").innerHTML =
                data.main.sections[1].name;
            document.getElementById("animal_about1").innerHTML =
                data.main.sections[1].animals[0].name;
            const animal_image = data.main.sections[1].animals[0].imageSrc;
            document.getElementById("animal_about_pic1").src = `./${animal_image}`;
            document.getElementById("animal_para1").innerHTML =
                data.main.sections[1].animals[0].description;
            document.getElementById("animal_about2").innerHTML =
                data.main.sections[1].animals[1].name;
            const animal_image2 = data.main.sections[1].animals[1].imageSrc;
            document.getElementById("animal_about_pic2").src = `./${animal_image2}`;
            document.getElementById("animal_para2").innerHTML =
                data.main.sections[1].animals[1].description;
            document.getElementById("animal_about3").innerHTML =
                data.main.sections[1].animals[2].name;
            const animal_image3 = data.main.sections[1].animals[2].imageSrc;
            document.getElementById("animal_about_pic3").src = `./${animal_image3}`;
            document.getElementById("animal_para3").innerHTML =
                data.main.sections[1].animals[2].description;
            const animal_image4 = data.main.sections[2].content["threat-img"][0].imageSrc;
            document.getElementById("link_pic1").src = `./${animal_image4}`;
            const animal_image5 = data.main.sections[2].content["threat-img"][1].imageSrc;
            document.getElementById("link_pic2").src = `./${animal_image5}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});