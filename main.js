function additem() {
	var data = document.getElementById("item").value;
	//console.log(data);
	if(data){
		
			addItem(data);
			document.getElementById("item").value = "";
	}
}

function removeItem() {
	
	//getting to the parent of list item
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	parent.removeChild(item);
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var target = document.getElementById("completed");
	parent.removeChild(item);
	target.insertBefore(item,target.childNodes[0]);
	this.innerHTML = "REDO";
	
}
//Add item to todo list
function addItem(data) {
	
	var list = document.getElementById("uncompleted");
	var item = document.createElement('li');
	item.innerText = data;
	
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	
	var del = document.createElement('button');
	del.classList.add('del');
	del.innerHTML = "DEL";
	del.addEventListener('click',removeItem);
	
	var status = document.createElement('button');
	status.innerHTML = "DONE";
	//Adding click event for completed items to change their position from uncompleted list to completed list
	status.addEventListener('click',completeItem);
	buttons.appendChild(del);
	buttons.appendChild(status);
	item.appendChild(buttons);
	
	//list.appendChild(item);
	list.insertBefore(item,list.childNodes[0]);
}