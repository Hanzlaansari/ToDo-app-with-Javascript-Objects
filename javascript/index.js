 function check(){
    var title = document.getElementById("title").value;
     var description = document.getElementById("description").value;
     var location = document.getElementById('location').value;
     var date = document.getElementById("date").value;
     if (title == "" || description == "" || location == "" || date == ""){
          var cls = document.getElementById('op');
     cls.classList.add("show2");
     var cls2 = document.getElementById('btn5');
     cls2.style.cursor = "pointer";
        
        document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }
    else{
        document.getElementById("message").innerHTML = "Task Created Succesfully";
        var utitle = localStorage.getItem('alltitle');        
        // constructer function
        function Todo(title,des,loc,date){
         this.title = title;
         this.description = des;
         this.location = loc;
         this.data = date;
        }
         var obj = new Todo(title,description, location, date);

        if (utitle == null) {
            altitle = [];
        }
        else {
            altitle = JSON.parse(utitle);
        }

         altitle.push(obj);

        localStorage.setItem('alltitle', JSON.stringify(altitle));
        return true; 
        

    }
   
}

// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");

}
