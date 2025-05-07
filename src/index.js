import "./styles.css"
import { showHomepage} from "./homepage"
import { showMenu } from "./menu"
import { showContactPage } from "./contact"
import faceIcon from "/images/facebook-brands.svg"
import instaIcon from "/images/instagram-brands.svg"
import xIcon from "/images/x-twitter-brands.svg"

export const contentDiv = document.querySelector("#content")

window.onload  = ()=> {showHomepage()}

const tooggleContent = () => {

    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const contactBtn = document.querySelector("#contact")


    homeBtn.addEventListener("click", () => {
        contentDiv.innerHTML = ""
        showHomepage()
    })
    menuBtn.addEventListener('click', () => {
        contentDiv.innerHTML = ""
        showMenu()
    })
    contactBtn.addEventListener("click", () => {
        contentDiv.innerHTML = ""
        showContactPage()
    })


}

const showfooterContent = () => {

    const footerDiv = document.querySelector("#footer")

    const copyrigtht = document.createElement("p")
    copyrigtht.textContent = "© 2025 Saffron & Smoke. All rights reserved."

    const social_icons = document.createElement("div")
    social_icons.classList.add("social-icons")

    const facebookIcon = document.createElement("img")
    facebookIcon.classList.add("f-icon")
    facebookIcon.src = faceIcon
    
    const instagramIcon = document.createElement("img")
    instagramIcon.classList.add("inst-icon")
    instagramIcon.src = instaIcon

    const XIcon = document.createElement("img")
    XIcon.classList.add("x-icon")
    XIcon.src = xIcon
    const eventHandler = () => {

        facebookIcon.addEventListener("click", ()=> {
            window.open("https://www.facebook.com/", "_blank")
    
        })
        instagramIcon.addEventListener("click", () => {
            window.open("https://www.instagram.com/", "_blank")
    
        })
        XIcon.addEventListener("click", ()=> {
            window.open("https://twitter.com/", "_blank")
    
        })


    }

    eventHandler()

    social_icons.appendChild(facebookIcon)
    social_icons.appendChild(instagramIcon)
    social_icons.appendChild(XIcon)

    footerDiv.appendChild(copyrigtht)
    footerDiv.appendChild(social_icons)
}

tooggleContent()
showfooterContent()