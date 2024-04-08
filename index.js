document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("homePage")) { localStorage.setItem("homePage", JSON.stringify(data)); }

            const data = JSON.parse(localStorage.getItem("homePage"));
            console.log(data);

            document.getElementById("welcome").innerHTML =
                data.main.sections[0].title;
            document.getElementById("homePageIntro").innerHTML =
                data.main.sections[0].content;
            document.getElementById("buttunText").innerHTML =
                data.main.sections[0].button.text;
            const subPic1 = data.main.sections[1].image;
            document.getElementById("sub1Image").src = `./${subPic1}`;
            document.getElementById("sub1Topic").innerHTML =
                data.main.sections[1].title;
            document.getElementById("sub1Info").innerHTML =
                data.main.sections[1].content;
            document.getElementById("sub2Topic").innerHTML =
                data.main.sections[2].title;
            document.getElementById("sub2Info").innerHTML =
                data.main.sections[2].content;
            document.getElementById("sub2li1").innerHTML =
                data.main.sections[2].list[0];
            document.getElementById("sub2li2").innerHTML =
                data.main.sections[2].list[1];
            document.getElementById("sub2li3").innerHTML =
                data.main.sections[2].list[2];
            document.getElementById("sub2li4").innerHTML =
                data.main.sections[2].list[3];
            document.getElementById("sub2Button").innerHTML =
                data.main.sections[2].button.text;
            const subPic2 = data.main.sections[2].image;
            document.getElementById("sub2Pic").src = `./${subPic2}`;
            const subPic3 = data.main.sections[3].image;
            document.getElementById("sub3pic").src = `./${subPic3}`;
            document.getElementById("sub3Topic").innerHTML =
                data.main.sections[3].title;
            document.getElementById("sub3Info").innerHTML =
                data.main.sections[3].content;
            document.getElementById("sub3li1").innerHTML =
                data.main.sections[3].list[0];
            document.getElementById("sub3li2").innerHTML =
                data.main.sections[3].list[1];
            document.getElementById("sub3li3").innerHTML =
                data.main.sections[3].list[2];
            document.getElementById("sub3li4").innerHTML =
                data.main.sections[3].list[3];
            document.getElementById("fact").innerHTML =
                data.main.sections[4].title;
            document.getElementById("fact1").innerHTML =
                data.main.sections[4].list[0].fact;
            document.getElementById("fact1Dis").innerHTML =
                data.main.sections[4].list[0].description;
            document.getElementById("fact2").innerHTML =
                data.main.sections[4].list[1].fact;
            document.getElementById("fact2Dis").innerHTML =
                data.main.sections[4].list[1].description;
            document.getElementById("fact3").innerHTML =
                data.main.sections[4].list[2].fact;
            document.getElementById("fact3Dis").innerHTML =
                data.main.sections[4].list[2].description;


        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});