const appsContainer = document.getElementById("appsContainer");
const searchInput = document.getElementById("searchInput");

let apps = [];


// آدرس API در آینده اینجا قرار می‌گیرد
const API_URL = "";



// دریافت برنامه‌ها

async function loadApps(){

    try{

        const response = await fetch("database.json");

        const data = await response.json();

        apps = data.apps;

        showApps(apps);


    }catch(error){

        appsContainer.innerHTML =
        "<div class='loading'>خطا در دریافت برنامه‌ها</div>";

        console.log(error);

    }

}


loadApps();





// نمایش کارت‌ها

function showApps(list){


    appsContainer.innerHTML = "";


    if(list.length === 0){

        appsContainer.innerHTML =
        "<div class='loading'>نتیجه‌ای پیدا نشد</div>";

        return;

    }



    list.forEach(app=>{


        const card = document.createElement("div");

        card.className = "app-card";


        card.innerHTML = `

        <img src="${app.icon}" alt="${app.name}">


        <h3>${app.name}</h3>


        <p>
        ${app.developer || ""}
        </p>


        <p>
        نسخه: ${app.version || "نامشخص"}
        </p>


        <a 
        href="${app.download}"
        class="download"
        target="_blank">

        دانلود

        </a>


        `;


        appsContainer.appendChild(card);


    });


}






// جستجو

searchInput.addEventListener("input", async ()=>{


    const query =
    searchInput.value.trim().toLowerCase();



    if(query.length < 2){

        showApps(apps);

        return;

    }



    // فعلاً از دیتابیس داخلی جستجو می‌کند

    const result = apps.filter(app=>{


        return app.name
        .toLowerCase()
        .includes(query);


    });



    showApps(result);



});
