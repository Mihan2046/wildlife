document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('leopard.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("leopard", JSON.stringify(content));

            const data = JSON.parse(localStorage.getItem("leopard"));
            console.log(data);

            document.getElementById("leoHeader").innerHTML =
                data.introleo.title;
            document.getElementById("leoTopic").innerHTML =
                data.leo1.title;
            document.getElementById("leoInfo").innerHTML =
                data.leo1.content;
            document.getElementById("leoMainTopic1").innerHTML =
                data.leo2.title;
            document.getElementById("leoTopic2").innerHTML =
                data.leo2.subsections[0].title;
            document.getElementById("leoInfo2").innerHTML =
                data.leo2.subsections[0].content;
            const leoimage1 = data.leo2.subsections[0].images[0];
            document.getElementById("leoTopic2Pic1").src = `./${leoimage1}`;
            const leoimage2 = data.leo2.subsections[0].images[1];
            document.getElementById("leoTopic2Pic2").src = `./${leoimage2}`;
            document.getElementById("leoTopic3").innerHTML =
                data.leo2.subsections[1].title;
            document.getElementById("leoInfo3").innerHTML =
                data.leo2.subsections[1].content;
            const leoimage3 = data.leo2.subsections[1].images[0];
            document.getElementById("leoTopic3Pic1").src = `./${leoimage3}`;
            const leoimage4 = data.leo2.subsections[1].images[1];
            document.getElementById("leoTopic3Pic2").src = `./${leoimage4}`;
            document.getElementById("leoTopic4").innerHTML =
                data.leo2.subsections[2].title;
            document.getElementById("leoInfo4").innerHTML =
                data.leo2.subsections[2].content;
            const leoimage5 = data.leo2.subsections[2].images[0];
            document.getElementById("leoTopic4Pic1").src = `./${leoimage5}`;
            const leoimage6 = data.leo2.subsections[2].images[1];
            document.getElementById("leoTopic4Pic2").src = `./${leoimage6}`;
            document.getElementById("leoMainTopic2").innerHTML =
                data.leo2.title;
            document.getElementById("leoPoint1").innerHTML =
                data.leo3.content[0].title;
            document.getElementById("leoPointInfo1").innerHTML =
                data.leo3.content[0].points;
            document.getElementById("leoPoint2").innerHTML =
                data.leo3.content[1].title;
            document.getElementById("leoPointInfo2").innerHTML =
                data.leo3.content[1].points;
            document.getElementById("leoPoint3").innerHTML =
                data.leo3.content[2].title;
            document.getElementById("leoPointInfo3").innerHTML =
                data.leo3.content[2].points;
            document.getElementById("leoLink").innerHTML =
                data.leo3.link;
            document.getElementById("leoThreatHeading").innerHTML =
                data["leo-threat"].title;
            const leoimage7 = data["leo-threat"].threats[0].image;
            document.getElementById("leoThreatpic1").src = `./${leoimage7}`;
            document.getElementById("leoThreattopic1").innerHTML =
                data["leo-threat"].threats[0].title;
            document.getElementById("leoThreatInfo1").innerHTML =
                data["leo-threat"].threats[0].content;
            document.getElementById("leoThreaListHeading1").innerHTML =
                data["leo-threat"].threats[0].main;
            document.getElementById("leoThreatList1").innerHTML =
                data["leo-threat"].threats[0].solutions[0];
            document.getElementById("leoThreatList2").innerHTML =
                data["leo-threat"].threats[0].solutions[1];
            document.getElementById("leoThreatList3").innerHTML =
                data["leo-threat"].threats[0].solutions[2];
            const leoimage8 = data["leo-threat"].threats[1].image;
            document.getElementById("leoThreatpic2").src = `./${leoimage8}`;
            document.getElementById("leoThreattopic2").innerHTML =
                data["leo-threat"].threats[1].title;
            document.getElementById("leoThreatInfo2").innerHTML =
                data["leo-threat"].threats[1].content;
            document.getElementById("leoThreaListHeading2").innerHTML =
                data["leo-threat"].threats[1].main;
            document.getElementById("leoThreatList4").innerHTML =
                data["leo-threat"].threats[1].solutions[0];
            document.getElementById("leoThreatList5").innerHTML =
                data["leo-threat"].threats[1].solutions[1];
            document.getElementById("leoThreatList6").innerHTML =
                data["leo-threat"].threats[1].solutions[2];




        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});