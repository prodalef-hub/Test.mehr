const appsContainer = document.getElementById("appsContainer");
const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".category");
const themeToggle = document.getElementById("themeToggle");

let apps = [];
let currentCategory = "همه";


// دریافت دیتابیس

async function loadApps(){

    try{

        const response = await fetch("database.json");

        const data = await response.json();

        apps = data.apps;

        showApps(apps);


    }catch(error){

        appsContainer.innerHTML =
        "<div class='loading'>خطا در دریافت اطلاعات</div>";

        console.log(error);

    }

}


loadApps();





// ساخت کارت برنامه

function showApps(list){


    appsContainer.innerHTML = "";


    if(list.length === 0){

        appsContainer.innerHTML =
        "<div class='loading'>برنامه‌ای پیدا نشد</div>";

        return;

    }



    list.forEach(app=>{


        const card = document.createElement("div");

        card.className = "app-card";


        card.innerHTML = `

        <img src="${app.icon}" alt="${app.name}">

        <h3>${app.name}</h3>

        <p>
        سازنده: ${app.developer || "نامشخص"}
        </p>

        <p>
        نسخه: ${app.version}
        </p>

        <a class="download"
        href="${app.download}"
        target="_blank">
        دانلود
        </a>

        `;


        appsContainer.appendChild(card);


    });


}






// جستجوی برنامه


searchInput.addEventListener("input",()=>{


    const text =
    searchInput.value.toLowerCase();



    const result = apps.filter(app=>{


        return app.name
        .toLowerCase()
        .includes(text);


    });



    showApps(result);


});






// دسته بندی

categories.forEach(button=>{


    button.addEventListener("click",()=>{


        categories.forEach(btn=>
            btn.classList.remove("active")
        );


        button.classList.add("active");


        currentCategory =
        button.dataset.category;



        if(currentCategory==="همه"){

            showApps(apps);

        }


    });


});





// دارک مود

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});
