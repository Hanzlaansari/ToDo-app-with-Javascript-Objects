var btnid =0;
var divid =1;
var taskid = 2;
function show(){

   var title = localStorage.getItem('alltitle');

    var a = JSON.parse(title);

    var len = a.length;
  
    for(var loop=0;loop<len ; loop++){
        var value = a[loop];
        // creating new div
var div = document.createElement('div');
div.id = divid;
        
        // creating button div
        var btndiv = document.createElement("div");
        btndiv.classList.add("btnDiv");
        btndiv.id=divid+1;
        btndiv.onclick = detail;
// adding classes to div
div.classList.add("teal");
div.classList.add('style');
// creating delete button
var btn = document.createElement("button");
btn.id = btnid;
btn.onclick = del;
btn.classList.add('btn');
btn.classList.add('hov');
btn.classList.add('right');
btn.classList.add('custombutton')
btn.classList.add('waves-effect');
btn.classList.add('waves-lighten-2');
var text = document.createTextNode('Delete');
btn.appendChild(text);
// creating update button
        var btn1 = document.createElement("button");
        btn1.id = btnid;
        btn1.onclick = up;
        btn1.classList.add('btn');
        btn1.classList.add('custombutton')
        btn1.classList.add('right');
        btn1.classList.add('waves-effect');
        btn1.classList.add('waves-lighten-2');
        var text1 = document.createTextNode('Update');
        btn1.appendChild(text1);
        
        var e = document.getElementById('show').appendChild(div);
        // creating paragraph
        var g = document.createElement("p");
        g.classList.add('paragraph')
        var f = document.createTextNode(value.title);
        g.appendChild(f);
        btndiv.appendChild(g);
        e.appendChild(btndiv);
        e.appendChild(btn);
        e.appendChild(btn1);
     

 divid += 1;
        btnid += 1;
    }
    
    //    getting data from task localstorage
    var z =JSON.parse( localStorage.getItem('tasktitle'));

    var leng = z.length;
    
 for(var loop=0; loop<leng; loop++){
     // // creatingdiv
var valuee = z[loop];



     var taskdiv = document.createElement("div");

     taskdiv.classList.add("grey");
     taskdiv.classList.add('style');
     // creating-cleare-button
     var removebtn = document.createElement("button");
     removebtn.id = taskid + 1;
     removebtn.onclick = removtask;
     removebtn.classList.add('btn');
     removebtn.classList.add('hov');
     removebtn.classList.add('right');
     removebtn.classList.add('custombutton')
     removebtn.classList.add('waves-effect');
     removebtn.classList.add('waves-lighten-2');
     var text = document.createTextNode('Remove');
     removebtn.appendChild(text);
     var appendtaskdiv = document.getElementById('showw').appendChild(taskdiv);
     var creatingparagraph = document.createElement("p");
     creatingparagraph.classList.add('paragraph');
     var creatingtextvalue = document.createTextNode(valuee.title);
     creatingparagraph.appendChild(creatingtextvalue);
     appendtaskdiv.appendChild(creatingparagraph);
     appendtaskdiv.appendChild(removebtn);
     divid += 1;
     btnid += 1;
     taskid+=1;
 }


}
// delete button function
function del(){
    
    var val = document.getElementById(this.id);
    val.parentNode.remove();
    var title = JSON.parse(localStorage.getItem("alltitle"));

    title.splice(this.id, 1);

    localStorage.setItem("alltitle", JSON.stringify(title));
    window.location.reload();

}
// up function for directing to new page
function up(){
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "update.html";
}
// detail dunction
function detail(){
    var sum = + this.id;
    localStorage.setItem('idd', sum);
    location.href = "detail.html";
}


// remove done task
function removtask(){ 
 
    var val = document.getElementById(this.id);
    val.parentNode.remove();
    var del =+ this.id - 3;
 
    var title = JSON.parse(localStorage.getItem('tasktitle'));
    title.splice(del, 1);
    localStorage.setItem("tasktitle", JSON.stringify(title));

    window.location.reload();
}


