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

// //  //// /// /// ///
// const main = document.querySelector("#main")

// fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
//     .then((res) => res.json())
//     .then((data) =>{
//         creatCards(data.data)
//     })

// function creatCards(data){
//     data.forEach(
//         ({flags, name, nativeName, population, region, subregion, capital, borders, currencies, languages}) =>{
//             main.innerHTML = `
//                 <div class="img">
//                     <img src="${flags.png}" alt="">
//                 </div>
//                 <div class="content">
//                     <h3>${name.common}</h3>
//                     <p>Native Name:${nativeName}</p>
//                     <p>Popualtion:${population}</p>
//                     <p>Region:${region}</p>
//                     <p>Sub Region:${subregion}</p>
//                     <p>Capital:${capital}</p>
//                 </div>
//                 <div class="text">
//                     <p>Top Level Domain:</p>
//                     <p>Currencies:${currencies}</p>
//                     <p>Languages:${languages}</p>
//                 </div>
//                 <div class="borders">
//                     <h3>Border Countries</h3>
//                     <button>${borders}</button>
//                 </div>
//                 `
//             main.appendChild(main);
//             console.log(main)
//         })
// }

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

console.log(myParam);

fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries${myParam}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })