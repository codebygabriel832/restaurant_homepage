import { contentDiv } from "."
import burger from "/images/burger.svg"
import truck from "/images/Truck.svg"
import food from "/images/food.png"
import fresh_food from "/images/fresh_food.svg"



export const  showHomepage = () => {

    const homepageContainer = document.createElement("div")
    homepageContainer.classList.add("homepageContainer")

    const infoContainer  = document.createElement("div")
    infoContainer.classList.add("infoContainer")

    const headingText = document.createElement("p")
    headingText.classList.add("headingText")
    headingText.textContent = "Discover your taste"
    const mainText = document.createElement("p")
    mainText.classList.add("mainText")
    mainText.textContent = "We belive good food offer good smile"

    const burgerImage = document.createElement("img")
    burgerImage.classList.add("burger-image")
    burgerImage.src = burger

    const iconsContainer = document.createElement("div")
    iconsContainer.classList.add("iconsContainer")

    const iconOneContainer = document.createElement("div")
    iconOneContainer.classList.add("icon-info")

    const iconOne = document.createElement('img')
    iconOne.classList.add("truck-icon")
    iconOne.src = truck
    const iconOneText = document.createElement("p")
    iconOneText.textContent = "Fast Service"

    iconOneContainer.appendChild(iconOne)
    iconOneContainer.appendChild(iconOneText)

    const iconTwoContainer = document.createElement("div")
    iconTwoContainer.classList.add("icon-info")
    
    const iconTwo = document.createElement('img')
    iconTwo.classList.add("fruit-icon")
    iconTwo.src = fresh_food

    const iconTwoText = document.createElement("p")
    iconTwoText.textContent = "Fresh Food"

    iconTwoContainer.appendChild(iconTwo)
    iconTwoContainer.appendChild(iconTwoText)

    iconsContainer.appendChild(iconOneContainer)
    iconsContainer.appendChild(iconTwoContainer)

    infoContainer.appendChild(headingText)
    infoContainer.appendChild(mainText)
    infoContainer.appendChild(burgerImage)
    infoContainer.appendChild(iconsContainer)

    const imageContainer = document.createElement('div')
    imageContainer.classList.add("imageContainer")
    const image = document.createElement("img")
    image.classList.add("image")
    image.src = food

    imageContainer.appendChild(image)

    homepageContainer.appendChild(infoContainer)
    homepageContainer.appendChild(imageContainer)

    contentDiv.appendChild(homepageContainer)
   
}
