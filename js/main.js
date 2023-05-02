// JS scripts placed here

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

var Icon = document.querySelector(".icon");
var Icon1 = document.querySelector(".span:nth-child(1)");
var Icon2 = document.querySelector(".span:nth-child(2)");
var Icon3 = document.querySelector(".span:nth-child(3)");



Icon.click( function myFunction() {
  $(this).toggleClass("active");
  
  if (Icon.hasClass("active")) {
    Icon1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    Icon3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
    			.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    Icon.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    Icon.velocity("reverse");
		Icon3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
    			.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
  	Icon1.velocity("reverse", {delay: 800});
  }
});
















