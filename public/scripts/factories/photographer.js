function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/images/avatar/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer__data');
        const imageLink = document.createElement('a');
        //on part de index.html
        imageLink.href = './photographer.html?id=' + id;
        imageLink.tabIndex = "0";
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.classList.add('photographer__data__img');
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.classList.add("photographer__data__name");
        const pCity = document.createElement('p');
        pCity.textContent = city + ', ' + country;
        pCity.classList.add("photographer__data__location");
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        pTagline.classList.add('photographer__data__tagline');
        const pPrice = document.createElement('p');
        pPrice.textContent = price + '€/jour';
        pPrice.classList.add('photographer__data__price');
        article.appendChild(imageLink);
        imageLink.appendChild(img);
        imageLink.appendChild(h2);
        article.appendChild(pCity);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


function photographerPage(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `./assets/images/avatar/${portrait}`;

    function getUserInfo() {

        const divPhotographerinfo = document.createElement('div');
        divPhotographerinfo.classList.add('photographer__data');
        const namePhotographer = document.createElement('h1');
        namePhotographer.textContent = name;
        namePhotographer.classList.add("photographer__data__name");
        const cityPhotographer = document.createElement('p');
        cityPhotographer.textContent = city + ', ' + country;
        cityPhotographer.classList.add("photographer__data__location");
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = tagline;
        taglinePhotographer.classList.add('photographer__data__tagline');
        divPhotographerinfo.appendChild(namePhotographer);
        divPhotographerinfo.appendChild(cityPhotographer);
        divPhotographerinfo.appendChild(taglinePhotographer);

        // Init contact form title 
        const modalTitle = document.querySelector(".contact__content__title");
        modalTitle.innerHTML = " Contactez-moi<br>"+name;

        return (divPhotographerinfo);
    }

    function getUserContact() {

        const divPhotographerContact = document.createElement('div');
        divPhotographerContact.classList.add('photographer__contact');

        const contactPhotographer = document.createElement('button');
        contactPhotographer.href = '';
        contactPhotographer.textContent = 'Contactez-moi';
        contactPhotographer.tabIndex = "0";
        contactPhotographer.type = "button" //accessibility
        contactPhotographer.classList.add('.photographer__contact__btn'); // ça restera peut être pas mais c'est pour tester
        contactPhotographer.addEventListener("click", displayModal);
        divPhotographerContact.appendChild(contactPhotographer);

        return (divPhotographerContact);
    }

    function getUserPicture() {

        const divPhotographerPhoto = document.createElement('div');
        divPhotographerPhoto.classList.add('photographer__picture');
        const contactPhotographer = document.createElement('img');
        contactPhotographer.setAttribute("src", picture)
        contactPhotographer.setAttribute("alt", name)
        contactPhotographer.classList.add('photographer__data__img');
        divPhotographerPhoto.appendChild(contactPhotographer);

        return (divPhotographerPhoto);
    }
    return { name, picture, getUserInfo, getUserContact, getUserPicture }
}

function photographerGallery(dataMedia, dataPhotographers) { // ajouter les medias
    const { id, photographerId, title, image, likes, date, price } = dataMedia; //image or video

    function getGalleryCardDOM() {
        console.log(dataPhotographers.find(photographer => photographer.id === photographerId));
        const namePhotographer = dataPhotographers.find(photographer => photographer.id === photographerId);
        console.log("find name photographers : " + namePhotographer.name);
        const namePhotographerArray = namePhotographer.name.split(" ");
        console.log(namePhotographerArray[0])
        const chemin = namePhotographerArray[0].replace('-', ' '); // dans l'architecture des dossiers, nous en mettons pas de tiret mais des espaces pour les noms composé
        console.log(chemin);

        const article = document.createElement('article');
        article.classList.add('gallery__list__data');
        if (dataMedia.video) { //"video" in dataMedia
            const video = document.createElement('video');
            console.log("ceci est le log de data video = ", "src", `./assets/images/${chemin}/${dataMedia.video}`);
            video.src = `./assets/images/${chemin}/${dataMedia.video}`;
            video.alt = title;
            video.type = "video/mp4";
            video.role = "link";
            video.classList.add('gallery__list__data__img');
            video.tabIndex = 0;
            video.dataset.num = indexLightbox; // number used to init the array for the lightbox and controllers (prev, next) 
            article.appendChild(video);

            initArrayLightbox("video", video.src, title);

            // Display Lightbox modal // remplacer e par e.target.dataset.num puis l'incrémenter
            const valueTypeLightbox = "video";
            video.addEventListener("click", (e) =>  { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, video.src, title);});
            video.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, video.src, title); }
            });
        }
        else {
            const img = document.createElement('img');
            console.log("src", `./assets/images/${chemin}/${image}`);
            img.src = `./assets/images/${chemin}/${image}`;
            img.alt = title;
            img.role = "link";
            img.classList.add('gallery__list__data__img');
            img.tabIndex = 0;
            img.dataset.num = indexLightbox; // number used to init the array for the lightbox and controllers (prev, next)             
            article.appendChild(img);

            initArrayLightbox("img", img.src, title);

            // Display Lightbox modal // remplacer e par e.target.dataset.num puis l'incrémenter
            // à déplacer dans une autre fonction
            const valueTypeLightbox = "img";
            const pictureURLightbox = img.src;
            img.addEventListener("click", (e) =>  { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, img.src, title);});
            img.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, img.src, title); }
            });
            
        }

        const desc = document.createElement('div')
        desc.classList.add("gallery__list__data__description");
        const titlePhotographer = document.createElement('p')
        console.log(title);
        titlePhotographer.textContent = title;
        titlePhotographer.classList.add("gallery__list__data__description__title");
        titlePhotographer.alt = title.textContent
        const like = document.createElement('div')
        like.classList.add("gallery__list__data__description__likes");
        const numberLike = document.createElement('p')
        console.log(likes);
        numberLike.textContent = likes;
        numberLike.classList.add("gallery__list__data__description__likes__number");
        numberLike.tabIndex = 0; 
        const iconLike = document.createElement('i')
        iconLike.classList.add("fa-solid");
        iconLike.classList.add("fa-heart");
        iconLike.classList.add("fa-lg");
        iconLike.ariaLabel = "likes";
        iconLike.tabIndex = 0; 

        desc.appendChild(titlePhotographer);
        desc.appendChild(like);
        like.appendChild(numberLike);
        like.appendChild(iconLike);
        article.appendChild(desc);

        return (article);
    }

    return { getGalleryCardDOM }
}