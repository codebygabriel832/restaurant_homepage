import { contentDiv } from "."

export const showMenu = () => {

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menuContainer")

    const titleContainer = document.createElement("div")
    titleContainer.classList.add("titleContainer")
    const item = document.createElement("p")
    item.textContent = "Name"
    const price = document.createElement("p")
    price.textContent = "Price"

    titleContainer.appendChild(item)
    titleContainer.appendChild(price)

    const item1 = document.createElement("div")
    item1.classList.add("item")
    const item1name = document.createElement("p")
    item1name.textContent = "Peanut Soup"
    const item1Price = document.createElement("p")
    item1Price.textContent = "Ksh. 850"

    item1.appendChild(item1name)
    item1.appendChild(item1Price)

    const item2 = document.createElement("div")
    item2.classList.add("item")
    const item2name = document.createElement("p")
    item2name.textContent = "Mutura (African Sausage)"
    const item2Price = document.createElement("p")
    item2Price.textContent = "Ksh. 650"

    item2.appendChild(item2name)
    item2.appendChild(item2Price)
    
    const item3 = document.createElement("div")
    item3.classList.add("item")
    const item3name = document.createElement("p")
    item3name.textContent = "Mbaazi (Pigeon Pea) Curry"
    const item3Price = document.createElement("p")
    item3Price.textContent = "Ksh. 1550"

    item3.appendChild(item3name)
    item3.appendChild(item3Price)

    const item4 = document.createElement("div")
    item4.classList.add("item")
    const item4name = document.createElement("p")
    item4name.textContent = "Inyama Isiche (Smoked Beef)"
    const item4Price = document.createElement("p")
    item4Price.textContent = "Ksh. 2000"

    item4.appendChild(item4name)
    item4.appendChild(item4Price)

    menuContainer.appendChild(titleContainer)
    menuContainer.appendChild(item1)
    menuContainer.appendChild(item2)
    menuContainer.appendChild(item3)
    menuContainer.appendChild(item4)

    contentDiv.appendChild(menuContainer)
    
}