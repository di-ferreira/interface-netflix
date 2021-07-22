let ActionContainer = document.querySelector("#action");
let AdventureContainer = document.querySelector("#adventures");

function rotateCarroussel(container) {
    let ActionLeftArrow = container.querySelector(".netflix_content_leftArrow");
    let ActionRightArrow = container.querySelector(".netflix_content_rightArrow");
    let carroussel = container.querySelector("#carroussel ul");
    let translate = 0;

    ActionLeftArrow.addEventListener("click", () => {
        translate = translate - 40;
        carroussel.style.transform = `translate(${translate}rem,0)`;
    });

    ActionRightArrow.addEventListener("click", () => {
        translate = translate + 40;
        carroussel.style.transform = `translate(${translate}rem, 0)`;
    });

}



rotateCarroussel(ActionContainer);
rotateCarroussel(AdventureContainer);
