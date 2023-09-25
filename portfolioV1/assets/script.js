$("#HeroVid").on("loadeddata", function() {
	document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
});

var timer = 0;
var num = 150;
var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

function caseActive(){
	selectedhome.removeClass("active");
	selectedcontact.removeClass("active");
	selectedcase.addClass("active");
}

function contactActive(){
	selectedcase.removeClass("active");
	selectedhome.removeClass("active");
	selectedcontact.addClass("active");
}

function homeActive(){
	selectedcase.removeClass("active");
	selectedcontact.removeClass("active");
	selectedhome.addClass("active");
}

$(window).bind('scroll', scrollWindowBind);

function scrollBind() {
	$(window).delay(800).bind('scroll', scrollWindowBind);
}

function scrollWindowBind() {
	if ($(window).scrollTop()>num){
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    } else{
        $('.menu').removeClass('scrolled');
    };

	if(($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)){
		contactActive();
	} else if ($(window).scrollTop() > (window.innerHeight - 100)){
		caseActive();
	} else {
		homeActive();
	};
}

function smoothScroll(hash){
	$(window).unbind('scroll');
	$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
	});
	setTimeout(scrollBind, 800);
};

$(document).ready(function(){
	// Add smooth scrolling to all links
	if(window.location.href !== "index.html" || window.location.href !== "/"){
		$(".NI").on('click', function(event){
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				smoothScroll(hash);
			} // End if
		});

		selectedhome.on('click', function(event) {
			homeActive();
		});

		selectedcase.on('click', function(event) {
			caseActive();
		});

		selectedcontact.on('click', function(event) {
			contactActive();
		});

	} else {
		homeActive();
	}

});

//PROJECT RENDERING

var numProjShown = 3;
var numProjTotal = 4;

var projects = {

  "proj0": {
    "title": "raveSUPPLEMENT Launch",
    "projName": "Health Supplement Start-up",
    "desc": "Launching a health supplement business to conveniently deliver pre-bundled supplements to festival-goers.",
    "link": "https://ravesupplement.com.au/",
    "picture": "assets/ravesupplement-thumbnail.png",
  },
  "proj1": {
    "title": "Expense Tracker App",
    "projName": "Empowering Financial Health",
    "desc": "Meeting a New Years resolution to reduce unnecessary expenditure through improving ease of tracking and thus accountability.",
    "link": "expensetracker.html",
    "picture": "assets/expensetracker-thumbnail.png",
  },
  "proj2": {
    "title": "Unimelb GPA Calculator",
    "projName": "Automatic GPA conversion",
    "desc": "Addressing the need for University of Melbourne students to quickly and effortlessly convert scores to GPA equivalents.",
    "link": "gpacalc.html",
    "picture": "assets/gpacalc-thumbnail.png",
  },
   "proj3": {
    "title": "Grocery Delivery Startup in San Fran",
    "projName": "Sentiment & Supply Valuation",
    "desc": "Evaluating supply-side pricing mechanisms for technology platform company to maximise supplier retention and utilisation.",
    "link": "platformshopper.html",
    "picture": "assets/platformshopper-thumbnail.png",
  }, 
}

function createProj(proj) {
  let title = projects[proj].title;
  let projName = projects[proj].projName;
  let desc = projects[proj].desc;
  let link = projects[proj].link;
  let picture = projects[proj].picture;

  var HTMLproj = `<div class='projItem ui two column grid' id="${proj}"><div class='column studyCard'><div class='studyHeader'>${title}</div><div class='studyTitle'>${projName}</div><div class='studyDesc'>${desc}</div><a class='seeMore' href="${link}">Learn more >></a></div><div class='column image-box'><a href="${link}"><img class='prev-img' src="${picture}"/></a><a class='proj-arrow' href="${link}"><img class="navigationArrow" src="assets/arrow-right_2@3x.png"></a></div></div>`

  var landingStudies = document.querySelector("#landingStudies");
  landingStudies.innerHTML += HTMLproj;
}

function deleteProj(proj) {
  $("#" + proj).remove();
}

function showHide() {
  let projItems = document.querySelectorAll(".projItem");
  let numProjItems = projItems.length;
  if (numProjItems < numProjShown+1) {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      createProj(proj);
    }
    moreProjects.innerHTML = "show less";
  } else {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      deleteProj(proj);
    }
    moreProjects.innerHTML = "view more";
  }
}

for (let x = 0; x < numProjShown; x++) {
  let proj = "proj" + x;
  createProj(proj);
}

var moreProjects = document.querySelector("#moreProjects");
moreProjects.addEventListener('click', showHide);





