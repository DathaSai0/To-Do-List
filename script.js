let inputData = document.querySelector("#To-do-input input");
let addBtn = document.querySelector("#To-do-input button");
let itemContainer = document.getElementById("To-do-list");
addBtn.addEventListener("click", () => {
  if (inputData.value !== "") {
    let listItem = inputData.value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = listItem;
    let dltbtn = document.createElement("button");
    let edtbtn = document.createElement("button");
    dltbtn.classList.add("dltbtn");
    edtbtn.classList.add("edtbtn");
    dltbtn.innerHTML = "Delete";
    edtbtn.innerHTML = "Edit";
    div.append(p, edtbtn, dltbtn);
    itemContainer.appendChild(div);
    inputData.value = "";
  } else {
    alert("Enter the Valid task to add in To-Do-List");
  }
});
itemContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dltbtn")) {
    e.target.parentElement.remove();
  }
});
itemContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("edtbtn")) {
    changedData = prompt("enter the data to change");
    console.log(changedData);
    let parentDiv = e.target.parentElement;
    pele = parentDiv.querySelector("p");
    pele.innerHTML = changedData;
  }
});
