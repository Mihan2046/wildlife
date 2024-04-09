document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('department.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("department")) { localStorage.setItem("department", JSON.stringify(content)); }

            const data = JSON.parse(localStorage.getItem("department"));
            console.log(data);

            document.getElementById("department_head").innerHTML =
                data.main["department-intro"].h1;
            document.getElementById("department_about1").innerHTML =
                data.main["department-intro"].h3;
            document.getElementById("department_q").innerHTML =
                data.main["dis1-department"]["dis2-department"].h4;
            document.getElementById("department_about2").innerHTML =
                data.main["dis1-department"]["dis2-department"].h2;
            document.getElementById("department_info").innerHTML =
                data.main["dis1-department"]["dis2-department"].p;
            const galleryPic1 = data.main.gallery.mappic1[0].src;
            document.getElementById("gallery_pic1").src = `./${galleryPic1}`;
            const galleryPic2 = data.main.gallery.mappic1[1].src;
            document.getElementById("gallery_pic2").src = `./${galleryPic2}`;
            const galleryPic3 = data.main.gallery.mappic1[2].src;
            document.getElementById("gallery_pic3").src = `./${galleryPic3}`;
            const galleryPic4 = data.main.gallery.mappic1[3].src;
            document.getElementById("gallery_pic4").src = `./${galleryPic4}`;
            const mapPic1 = data.main.gallery.mappic2[0].src;
            document.getElementById("map_pic1").src = `./${mapPic1}`;
            const mapPic2 = data.main.gallery.mappic2[1].src;
            document.getElementById("map_pic2").src = `./${mapPic2}`;
            const mapPic3 = data.main.gallery.mappic2[2].src;
            document.getElementById("map_pic3").src = `./${mapPic3}`;
            const mapPic4 = data.main.gallery.mappic2[3].src;
            document.getElementById("map_pic4").src = `./${mapPic4}`;
            document.getElementById("department_conclusion").innerHTML =
                data.main.depp3["div#dep3"].h1;
            document.getElementById("department_conclusion_about").innerHTML =
                data.main.depp3["div#dep3"].p;
            const conPic = data.main.depp3["div.dep3-img"].img.src;
            document.getElementById("department_conclusion_pic").src = `./${conPic}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});