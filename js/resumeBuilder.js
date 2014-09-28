var name = "Rajat Saxena";
var role = "Software Developer";
var skills= ["Machine Learning", "Data Analysis and Visualization", "Computer Vision", "Human Computer Interaction", "Multimedia Computing"];

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": name,
	"role": role,
	"contacts":{
		"mobile": "+91-9666852606",
		"email": "saxenarajat@outlook.com",
		"github": "rajatsaxena",
		"blog": "saxenarajat99.wordpress.com",
		"location": "Hyderabad"
	},
	"welcomeMessage": "The meaning of life is Life of Meaning",
	"skills": skills,
	"bioPic": "images/rajat.jpg"
}

var work = {
	"jobs":[
	{
		"title": "Software Developer Engineering-Intern",
		"employer": "Amazon Development Center",
		"location": "Hyderabad",
		"dates": "July 2014-Present",
		"description": "worked on a project on Improving usability CIMS users"
	},
	{
		"title": "Summer Research Intern",
		"employer": "Georgia University of Technology - FAST Lab",
		"location": "Georgia, Atlanta",
		"dates": "May 2014-July 2014",
		"description": "worked on a project involving classification of Galaxies on the basis of morphology"
	}
	]
}

var  education ={
	"schools":[
	{
		"name": "BITS Pilani Hyderabad Campus",
		"degree": "M.Sc.(tech)",
		"graduationYear": "2015",
		"location": "Hyderabad, India",
		"major": "Information System"
	},
	{
		"name": "Delhi Public School, R K Puram",
		"degree": "Senior Secondary",
		"graduationYear": "2011",
		"location": "New Delhi"
	},
	{
		"name": "H G  International School",
		"degree": "Secondary",
		"graduationYear": "2009",
		"location": "Mt. Abu"
	}
	]
}

var projects = {
	"projects":[
	{
		"title": "Implementing Mac Layer Protocol for WBAN",
		"dates": "2013",
		"description": "developed a new MAC layer protocol for wireless body area networks using omnetpp",
		"images": ["images/project1.jpg"]
	},
	{
		"title":"Touch less 3D Interface",
		"dates": "2012",
		"description": "developed a 3d interface which can track position of your hand using capacitive sensing",
		"images": ["images/project2.jpg"]
	},
	{
		"title": "Dance Instructor using Kinect",
		"dates": "2014",
		"description": "developed a software to teach dance using Kinect which points out the error in your body posture as compared to original dance step",
		"images": ["images/project3.jpg"]
	}
	]
}

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
	$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
	$("#header").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
	$("#header").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%",bio.contacts["blog"]);
	$("#header").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
	$("#header").append(formattedLocation);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedBioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkill);
}

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function displayProject(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates=HTMLprojectTitle.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectTitle.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

displayProject();