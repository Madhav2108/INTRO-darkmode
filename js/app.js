	 const links=document.querySelector(".alternative-styls"),
	 totallinks=links.length;
 function setActiveStyle(color) {
 	for(let i=0;i<totallinks;i++)
 	{
 		if(color == links[i].getAttribute("title")){
 			links[i].removeAttribute("disabled");
 		}
 	}
 	
 }