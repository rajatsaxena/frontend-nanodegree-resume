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
		"city": "Hyderabad",
		"dates": "July 2014-Present",
		"description": "worked on a project on Improving usability CIMS users"
	},
	{
		"title": "Summer Research Intern",
		"employer": "Georgia University of Technology - FAST Lab",
		"city": "Georgia, Atlanta",
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

var project = {
	"projects":[
	{
		"title": "Implementing Mac Layer Protocol for WBAN",
		"dates": "2013",
		"description": "developed a new MAC layer protocol for wireless body area networks using omnetpp"
	},
	{
		"name":"Touch less 3D Interface",
		"dates": "2012",
		"description": "developed a 3d interface which can track position of your hand using capacitive sensing"
	},
	{
		"name": "Dance Instructor using Kinect",
		"dates": "2014",
		"description": "developed a software to teach dance using Kinect which points out the error in your body posture as compared to original dance step"
	}
	]
}

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