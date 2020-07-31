	 const links=document.querySelectorAll(".alternative-styls"),
	 totallinks=links.length;
	 console.log(links)
 function setActiveStyle(color) {
 	console.log(links)
 	for(let i=0;i<totallinks;i++)
 	{
 		if(color === links[i].getAttribute("title")){
 			links[i].removeAttribute("disabled");
 		}
 		else{
 			links[i].setAttribute("disabled","true");
 		}
 	}
 	
 }
// bodyskin

	 const bodyskin=document.querySelectorAll(".body-skin"),
	 	totalbodyskin=bodyskin.length;
	 	for(let i=0;i<totalbodyskin;i++)
	 	{
	 				bodyskin[i].addEventListener("change",function(){
	 					if(this.value === "dark")
	 					{
	 						document.body.className="dark";
	 					}
	 					else
	 					{
	 						document.body.className="";
	 					}
	 				})
	 	}


 document.querySelector(".t-s-s").addEventListener("click",()=>{
 	document.querySelector(".sty-swi").classList.toggle("open");
 })