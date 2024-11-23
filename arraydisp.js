window.addEventListener("load", Initialize);
window.addEventListener("load", addListener);

let countvalue = 0;
let infoarray = [];

function Initialize()
{
	document.getElementById("txtinput").focus();
	document.getElementById("txtinput").value = "";
}

function addListener()
{
	document.getElementById("btnSubmit").addEventListener("click", InsertArray);
	document.getElementById("btnDisplay").addEventListener("click", DisplayArray);
}

function InsertArray()
{
	let inputvalue = "";
	inputvalue = document.getElementById("txtinput").value;
	if(inputvalue == "")
	{
		alert("Please enter a valid input");
	}
	else
	{
		infoarray.push(inputvalue);
	}
	Initialize();
}

function DisplayArray()
{
	let listvalue = document.getElementById("lbldispresult");
	let arraylen = infoarray.length;
	for(let i=0; i<arraylen; i++)
	{
		let li = document.createElement("li");
		li.innerText = infoarray[i];
		listvalue.appendChild(li);
	}
}