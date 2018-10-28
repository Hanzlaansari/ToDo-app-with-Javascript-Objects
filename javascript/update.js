// update function fetching values from localstorage
function update(){
    var sumid = + localStorage.getItem('idd');
    var titlee = JSON.parse(localStorage.getItem("alltitle"));
    var value = titlee[sumid];

    var t = value.title;
    var de = value.description;
    var l = value.location;
    var d = value.data;
    document.getElementById('title').value = t;
    document.getElementById('description').value = de;
    document.getElementById('location').value = l;
    document.getElementById('date').value = d;
}

// updating values inlocalstprage
function updatee(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;

    if (title == "" || description == "" || location == "" || date == "") {
        // absolute div
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }

   else{
        document.getElementById("message").innerHTML = "Task Updated Succesfully";
        var sumid = localStorage.getItem('idd');
        var gettitle = JSON.parse(localStorage.getItem("alltitle"));
        var value = gettitle[sumid];
        value.title = title;
        value.description = description;
        value.location = location;
        value.data = date;

        localStorage.setItem('alltitle', JSON.stringify(gettitle))
        return true;
   }
}

// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}