import { contentDiv } from "."

export const showContactPage = () => {

    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contactContainer")

    const manager_info = document.createElement("div")
    manager_info.classList.add("info")

    const mname = document.createElement("p")
    mname.textContent = "Gabriel"
    const memail = document.createElement("p")
    memail.textContent = "gabriel@example.com"
    const mphoneNo = document.createElement("p")
    mphoneNo.textContent = "+254712345678"

    manager_info.appendChild(mname)
    manager_info.appendChild(memail)
    manager_info.appendChild(mphoneNo)

    const delivery_info = document.createElement("div")
    delivery_info.classList.add("info")

    const name = document.createElement("p")
    name.textContent = "Delivery Customer Care"
    const email = document.createElement("p")
    email.textContent = "delivery@example.com"
    const phoneNo = document.createElement("p")
    phoneNo.textContent = "+254712345678"

    delivery_info.appendChild(name)
    delivery_info.appendChild(email)
    delivery_info.appendChild(phoneNo)


    contactContainer.appendChild(manager_info)
    contactContainer.appendChild(delivery_info)
    
    contentDiv.appendChild(contactContainer)
}