const appsContainer = document.getElementById("appsContainer");
const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".category");
const themeToggle = document.getElementById("themeToggle");

let apps = [];
let currentCategory = "همه";


// دریافت برنامه‌ها

fetch("apps.json")
.then(response => response.json())
.then(data => {

    apps = data.apps;

    displayApps(apps);

})
.catch(error => {

    appsContainer.innerHTML =
    "<p>خطا در دریافت برنامه‌ها</p>";

    console.error(error);

});





// نمایش برنامه‌ها

function displayApps(list) {


    appsContainer.innerHTML = "";


    if(list.length === 0){

        appsContainer.innerHTML =
        "<div class='loading'>برنامه‌ای پیدا نشد</div>";

        return;

    }



    list.forEach(app => {


        const card = document.createElement("div");

        card.className = "app-card";



        card.innerHTML = `

        <img src="${app.icon}" alt="${app.name}">


        <h3>${app.name}</h3>


        <p>${app.description}</p>


        <p>
        ⭐ ${app.rating}
        |
        ${app.size}
        </p>


        <p>
        نسخه: ${app.version}
        </p>



        <a 
        class="download"
        href="${app.apkUrl}"
        target="_blank">

        دانلود

        </a>


        `;



        appsContainer.appendChild(card);


    });


}





// جستجو

searchInput.addEventListener("input", () => {


    filterApps();


});






// دسته بندی

categories.forEach(button => {


    button.addEventListener("click", () => {


        categories.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory =
        button.dataset.category;


        filterApps();


    });


});






function filterApps(){


    const text =
    searchInput.value.toLowerCase();



    const filtered = apps.filter(app => {


        const name =
        app.name.toLowerCase();



        const categoryMatch =
        currentCategory === "همه" ||
        app.category === currentCategory;



        return (
            name.includes(text)
            &&
            categoryMatch
        );


    });



    displayApps(filtered);


}






// دارک مود


themeToggle.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


});
