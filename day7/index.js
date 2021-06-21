//1
//1.d
//2.a
//3.c
//4.b
//2
//3.1 yes
//3.2 no
//4
console.log('hoang');
var list = document.getElementsByTagName("li");
console.log(list[1]);
for(let item of list){
    console.log(item);
}
//5
//7.1 là in ra thẻ
//7.2
//11
list = document.getElementById("button");
list.insertAdjacentHTML("afterBegin", '<button id="upper_btn" onClick="convertToUpperCase()">Upper it!!!</button>');
list.insertAdjacentHTML("afterBegin", '<input type="text" id="name_input" placeholder="Enter your name">');
list.insertAdjacentHTML("beforeEnd", '<div id="result_div">Your result will appear here</div>')
function convertToUpperCase(){
    var data = document.getElementById('name_input').value;
    var upperCase = data.toUpperCase();
    console.log(upperCase);
    document.getElementById("result_div").innerHTML = upperCase;
}
//12
var itemList="";
var i = 0;
function addItem(){
    var items= document.getElementById("addItem").value; //lấy giá trị nhập
        if(items != ""){
            //tạo biến thêm giá trị nhập vào li
            itemList += "<li><span name='itemItem' id='itemItem"+ i +"'>" + items + "</span> " + "<button onclick='removeItem()'>remove</button></li>";
	        //tăng biến dếm lấy ID
            i++;
            //thêm giá trị nhập vào li
	        document.getElementById("item").innerHTML = itemList;
            //làm trống bảng nhập
	        document.getElementById("addItem").value="";				
	}
}

function removeItem(){
	itemlList="";
	var items = document.querySelectorAll("#item li"),index,tab = [];
	for(var j = 0; j < items.length; j++){
	    tab.push(items[j].innerHTML);
    }
	for(var j = 0; j < items.length; j++){
		items[j].onclick = function(){
		index = tab.indexOf(this.innerHTML);
		items[index].parentNode.removeChild(items[index]);
	    tab.pop(j,1);
			};
        }
    } 