const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

let task = document.querySelector("input");
let myList = document.querySelector(".list");

function addItemToLS(task) {
    itemsArray.push(task.value);
    localStorage.setItem("items",JSON.stringify(itemsArray));
    location.reload();
}

function displayItemsFromLS(){
    let items ="";
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<p><span>${itemsArray[i]}</span><button class="delete">delete</button></p>`;
    }
    myList.innerHTML = items;
    activateDeleteListeners()
}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {deleteItemFromLS(i)})
    });
}

function deleteItemFromLS(i){
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

window.onload = function() {
    displayItemsFromLS();
}

document.querySelector('form').addEventListener('submit', function (e) {
    if (task.value !== "") {
    addItemToLS(task);
}
});