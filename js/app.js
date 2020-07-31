	
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
  t.style.top = n.clientY + "px", 
  e.style.left = n.clientX + "px", 
  e.style.top = n.clientY + "px", 
  i.style.left = n.clientX + "px", 
  i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }



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