//Mettre le code JavaScript lié à la page photographer.html
//import dataReader from "./../../data/photographers.json"

//or use URLSearchParams
const searchURL = window.location.search;
console.log(searchURL);
const idUrl = searchURL.slice(4)
console.log(idUrl);

async function init() {

    fetch('/public/data/photographers.json'/*'../../data/photographers.json'*/, { mode: 'no-cors' }) //fetch(myURL, { mode: 'no-cors'})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            try {
                JSON.parse(data);
            }
            catch (error) {
                console.log('Error parsing JSON:', error, data);
            }

            const dataPhotographers = [...data.photographers];
            const dataMedias = [...data.media];

            const photographerSection = document.querySelector(".photographer");
            const GallerySection = document.querySelector(".gallery__list");
            const StatsDiv = document.querySelector(".stats");

            var totaLikeStats = 0;

            dataPhotographers.forEach((photographer) => {
                if (photographer.id == idUrl){
                    console.log('test photographe reussie');
                    const photographerModel = photographerPage(photographer);
                    const userInfo = photographerModel.getUserInfo();
                    const userContact = photographerModel.getUserContact();
                    const userPicture = photographerModel.getUserPicture();
                    photographerSection.appendChild(userInfo);
                    photographerSection.appendChild(userContact);
                    photographerSection.appendChild(userPicture);
                }
            });

            dataMedias.forEach((photographer) => {
                if (photographer.photographerId == idUrl){
                    console.log('test reussie');
                    const photographerModel = photographerGallery(photographer, dataPhotographers);
                    const userCardDOM = photographerModel.getGalleryCardDOM();
                    console.log('esque je rentre dedans', userCardDOM);
                    GallerySection.appendChild(userCardDOM);

                    totaLikeStats = totaLikeStats + photographer.likes;
                }
            });

            //affichage des stats stats
            const likesStats = document.createElement('div')
            likesStats.classList.add("stats__likes");
            console.log("total de like : "+totaLikeStats)
            likesStats.textContent = totaLikeStats;
            const likesStatsNumber = document.createElement('p')
            likesStatsNumber.classList.add("stats__likes__number");
            const iconLikeStats = document.createElement('i')
            iconLikeStats.classList.add("fa-solid");
            iconLikeStats.classList.add("fa-heart");
            iconLikeStats.classList.add("fa-lg");
            iconLikeStats.ariaLabel = "likes";

            const arrayPricePhotographer = dataPhotographers.find(photographer => photographer.id == idUrl);
            console.log("stat prix : "+arrayPricePhotographer.price)
            const pricePhotographer = arrayPricePhotographer.price;
            const priceStats = document.createElement('p')
            priceStats.textContent = pricePhotographer+"€/jour";
            priceStats.classList.add("stats__price");
    
            likesStats.appendChild(likesStatsNumber);
            likesStats.appendChild(iconLikeStats);
            StatsDiv.appendChild(likesStats);
            StatsDiv.appendChild(priceStats);

        });

};

init();

