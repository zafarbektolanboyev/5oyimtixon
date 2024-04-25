const darkmodeBtn = document.getElementById("darkmodeBtn");
const darkmodeImg = document.getElementById("darkmodeImg");

darkmodeBtn.addEventListener("click", () =>{
    if(document.body.classList.contains("light")){
        document.body.classList.remove("light")
        darkmodeBtn.lastChild.textContent = "Dark-mode";
        darkmodeImg.setAttribute('src', "./md-moon.svg");
    }else{
        document.body.classList.add("light");
        darkmodeBtn.lastChild.textContent = "Light-mode";
        darkmodeImg.setAttribute('src', "./ios-sunny.svg");
    }
});


// cards
const cards = document.getElementById("cards");
const loader = document.querySelector(".loader");

fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
    .then((res) => res.json())
    .then((data) => {
        creatCards(data.data);
    })
function creatCards(data){
    data.forEach(({name, flags, region,capital, population}) => {
        const card = document.createElement("card");

        card.classList.add("card");

        card.innerHTML = `
        <div class="card">
                <img src="${flags.png}" alt="">
                <h4>${name.common}</h4>
                <p>Population:${population}</p>
                <p>Region:${region}</p>
                <p>Capital:${capital}</p>
        </div>`
        console.log(flags)
        cards.appendChild(card)
    })
}                              
