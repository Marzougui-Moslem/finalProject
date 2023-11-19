import React from 'react'
import { useParams } from 'react-router-dom'
import Navbarr from './Navbarr';

function Detailss({products}) {
  const params=useParams();
 

    const produit=products.filter((el)=>el.id==params.id)[0];

      function updateStyle(){
        const images = document.querySelectorAll(".imageee");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageContainer = image.parentNode;
    imageContainer.insertBefore(image, imageContainer.firstChild);
    removeActiveClass();
    image.classList.add("active");
  });
});
console.log(images);

function removeActiveClass() {
  const arrImages = Array.from(images);
  const classActie = arrImages.filter((img) =>
    img.getAttribute("class").includes("active")
  )[0];
  classActie.classList.remove("active");
}
      }

  return (
    <div class="box">
      <div class="iamges">
        <img
        onClick={updateStyle}
          class="imageee active"
          src={produit.url}
          alt=""
        />
        <img
         onClick={updateStyle}
          class="imageee"
          src={produit.images[0]}

          alt=""
        />
        <img
         onClick={updateStyle}
          class="imageee"
          src={produit.images[1]}
          alt=""
        />
        <img
         onClick={updateStyle}
          class="imageee"
          src={produit.images[2]}
          alt=""
        />
        <img
         onClick={updateStyle}
          class="imageee"
          src={produit.images[3]}
          alt=""
        />
      </div>
      <div class="dis">
        <p>
        {produit.desc}
        </p>
      </div>
    </div>
  )
}

export default Detailss
