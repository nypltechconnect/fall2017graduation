# Project Code Graduation Website

Here is all of the code needed to quickly develop the Project Code Graduation site.

Steps to Basic Development

1. Fork this repository and name it according to the graduation period, eg fall2017graduation
2. Download forked repository
3. All the code needed for production is located in the fall2017 folder. The index.html file at the root only redirects to the fall2017/index.html.  If you change the folder name from fall2017 to something else you will have to change the index.html file located next to this readme to have the redirect work correctly.
4. There is a Python script to help generate the necessary JS files if you are able to understand and follow the script.
5. The site can also be manually constructed by creating the JavaScript arrays yourself 
6. Each branch location has its own html file and js file for Phase I and Phase II locations.  The (branch-name).js files contain an array of information used to generate that branches page.  The array is made up of objects, each object contains information for one instructors class.  The array should be formatted as follows...

```javascript
	{
		Location: "String, contains the branch name, days and class time",
		Instructor: "String, the first and last name of the instructor",
		"Personal Projects": [ 
			["String, first element in subarray is student name", 
			"String, second element in subarray is student URL"],
			["String, first element in subarray is student name", 
			"String, second element in subarray is student URL"]
		],
		"Group Projects": [
			["String, group project name", 
			"String, group project URL"],
			["String, group project name", 
			"String, group project URL"]
		]
	}
````
	
7. If each branches JavaScript file is created and formatted correctly the website should generate each page of information on its own.
8. It may be necessary to go through and update the nav on each HTML document to reflect the links to branches that pertain to that round of classes.
9.  Be sure to commit all changes to gh-pages and push that to github for hosting.