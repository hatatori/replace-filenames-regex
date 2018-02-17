l = list.childNodes

for(i=0;i<l.length;i++){
	console.log(l[i])
}
console.log("vixi")
list2.innerHTML = list.innerHTML
list3.innerHTML = list2.innerHTML


reg.addEventListener("keyup",rep)
reg2.addEventListener("keyup",rep)

function rep(){
	r = new RegExp(reg.value,"g");
	list2.innerHTML = list.innerHTML

	n = list2.childNodes

	for(i=0;i<n.length;i++){
		a=0
		if(r != "/(?:)/g"){

			if(reg2.value == "")
				reg2.value = ""

			if(reg3.value == "")
				reg3.value = "$&"

			list2.childNodes[i].innerHTML = n[i].innerHTML.replace(r,"<span class='fundo'>"+reg3.value+"</span>")		
			list3.childNodes[i].innerHTML = n[i].innerHTML.replace(r,reg2.value)

		}
	}
}


replacename.onclick=function(){
	a = list.querySelectorAll("p")
	b = list3.querySelectorAll("p")


	for(i=0;i<a.length;i++){
		aa = a[i].innerHTML
		bb = b[i].innerText

		$.get("index.php",{aa:aa,bb:bb}).done(function(e){
			console.log('ok')
		})
	}

	a = list.querySelectorAll("p")
	b = list3.querySelectorAll("p")

	for(i=0;i<a.length;i++){
		list.querySelectorAll("p")[i].innerHTML = b[i].innerText
		list2.querySelectorAll("p")[i].innerHTML = b[i].innerText
	}}
