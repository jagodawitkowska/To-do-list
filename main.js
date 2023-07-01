const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const info = document.querySelector(".info");
const ulList = document.querySelector(".todos-container ul");

const createTask = () => {
	if (input.value !== "") {
		const liItem = document.createElement("li");
		const task = document.createElement("p");
		task.innerHTML = '<i class="fa-solid fa-heart fa-sm"></i>' + input.value;
		liItem.append(task);
		ulList.append(liItem);

		info.classList.add("hide");
		input.value = "";
		createBtns(liItem);
	} else {
		info.textContent = "Musisz wpisać jakieś zadanie!";
		info.classList.remove("hide");
	}
};

const createBtns = (li) => {
	const buttonsDiv = document.createElement("div");
	buttonsDiv.classList.add("buttons");

	const checkedBtn = document.createElement("button");
	const checkedIcon = document.createElement("i");
	checkedIcon.setAttribute("class", "fa-solid fa-check");
	checkedBtn.append(checkedIcon);
	checkedBtn.classList.add("btn", "checked");

	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
	deleteBtn.classList.add("btn", "delete");

	buttonsDiv.append(checkedBtn, deleteBtn);

	li.append(buttonsDiv);
};

const toolsFunction = (e) => {
	if (e.target.classList.contains("checked")) {
		e.target.closest("li").classList.toggle("done");
	} else if (e.target.classList.contains("delete")) {
		e.target.closest("li").remove();
		info.textContent = "";

		const items = ulList.querySelectorAll("li");

		if (items.length === 0) {
			info.textContent = "Brak zadań na liście!";
			info.classList.remove("hide");
		}
	}
};

addBtn.addEventListener("click", createTask);
ulList.addEventListener("click", toolsFunction);
document.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		createTask();
	}
});

