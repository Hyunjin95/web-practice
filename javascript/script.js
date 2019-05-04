var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_list = document.querySelectorAll("ul > li");
var del_btn_list = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.onclick = toggleList;
	btn.innerHTML = "Delete";
	btn.className = "delete";
	btn.onclick = removeList;

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleList() {
	this.classList.toggle("done");
}

function setEventFirstLists() {
	for (var i = 0; i < li_list.length; i++) {
		li_list[i].addEventListener("click", toggleList);
	}
}

function removeList() {
	this.parentElement.remove();
}

function setEventFirstButtons() {
	for (var i = 0; i < del_btn_list.length; i++) {
		del_btn_list[i].addEventListener("click", removeList);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
setEventFirstLists();
setEventFirstButtons();