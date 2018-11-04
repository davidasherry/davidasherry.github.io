// BLOG TEST

var demoBlog = document.querySelector("#demoBlog");
var headline = document.querySelector("#headline");
var content = document.querySelector("#content");
var enterBlog = document.querySelector("#enterBlog");
var blog = document.querySelector("#blog");
var deletePost = document.querySelector("#delete");
var i = 0;

function headlineLength() {
	return headline.value.length;
}

function contentLength() {
	return content.value.length;
}

function createBlog() {
	var h1 = document.createElement("h1");
	var p = document.createElement("p");

	h1.id = "header";
	h1.appendChild(document.createTextNode(headline.value));
	blog.appendChild(h1);

	p.id = "paragraph";
	p.appendChild(document.createTextNode(content.value));
	blog.appendChild(p);

	blog.appendChild(deletePost);

	h1.style.display = "red";

	deletePost.style.display ="inline-block";
	i++;
	console.log(i);
}

function pressEnter(e) {
	if(e.keyCode === 13){
		createBlog();

	}
}

function removeElement() {
    document.getElementById('header').remove();
    document.getElementById('paragraph').remove();
    i--;

    // if(blog.value == null ){
    // 	deletePost.style.display ="none";
    // 	return;
    // }

       if(i == 0 ){
    	deletePost.style.display ="none";
    	return;

    	console.log(i);
    }


}

function addListAfterClick() {
	if ((headlineLength() > 0 && contentLength() > 0) && headlineLength() < 24) {
		createBlog();
	} else {
		alert("Did not match requirements.");
	}
}

deletePost.addEventListener("click", removeElement);
enterBlog.addEventListener("click", addListAfterClick);
content.addEventListener("keypress", pressEnter);