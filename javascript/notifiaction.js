
function Noti(){
var counter = 0;
        var gettitle = JSON.parse(localStorage.getItem("alltitle"));
    var len = gettitle.length;
    for(var i=0; i<len; i++){
    var ndate = new Date();

    ndate.setHours(00);
    ndate.setMinutes(00);
    ndate.setSeconds(00)
    ndate.setMilliseconds(00);
    var msndate = ndate.getTime();
        var newdate = new Date(gettitle[i].data);

    newdate.setHours(00);
    newdate.setMinutes(00);
    newdate.setSeconds(00)
    newdate.setMilliseconds(00);
    var n = newdate.getHours();

    var msnewdate = newdate.getTime();

    var calcMS = msnewdate - msndate;

    var msToDays = calcMS / (1000 * 60 * 60 * 24);
        if (msToDays < 8){
            if (msToDays == 7 ){

       
        // // creating new div
        var div = document.createElement('div');

        // adding classes to div
        div.classList.add("teal");
        div.classList.add('stylee');


        var e = document.getElementById('show').appendChild(div);
        // creating paragraph
        var g = document.createElement("p");
        g.classList.add('paragraph')
        var f = document.createTextNode("7 Days Remaining in  " + " '" + gettitle[i].title + "'"+" Task");
      
        g.appendChild(f);
        e.appendChild(g);
        counter ++;
    } 
            else if (msToDays == 0 ) {
          
            // // creating new div
            var div = document.createElement('div');

            // adding classes to div
            div.classList.add("teal");
            div.classList.add('stylee');


            var e = document.getElementById('show').appendChild(div);
            // creating paragraph
            var g = document.createElement("p");
            g.classList.add('paragraph')
            var f = document.createTextNode("Today is the Due Date of  " + " '" + gettitle[i].title + "'"+" Task");
           
            g.appendChild(f);
            e.appendChild(g);
counter++;
        }
        
      
        
}
        
    }
    if(counter==0){
        var cls = document.getElementById('op');
        cls.classList.add("show2");
        var cls2 = document.getElementById('btn5');
        cls2.style.cursor = "pointer";
        document.getElementById("message").innerHTML = "No New Notification";
    }
}
// absolute-div
function fun() {
    var cls = document.getElementById('op');
    cls.classList.remove("show2");
    location.href ="alltodos.html";

}
