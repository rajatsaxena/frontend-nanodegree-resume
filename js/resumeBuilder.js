var name = "Rajat Saxena";
var role = "Software Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills= ["Machine Learning", "Data Analysis and Visualization", "Computer Vision", "Human Computer Interaction", "Multimedia Computing"]

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
};

$("#main").append(bio.name);
