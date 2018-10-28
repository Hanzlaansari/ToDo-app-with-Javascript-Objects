function det(){
    
    var sumid = + localStorage.getItem('idd');

    var titlee = JSON.parse(localStorage.getItem("alltitle"));
    var value = titlee[sumid-2];
    document.getElementById('title').innerHTML = value.title;
    document.getElementById('description').innerHTML = value.description;
    document.getElementById('location').innerHTML = value.location;
    document.getElementById('date').innerHTML = value.data;
}
// task done
done.onclick = function(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var tasktitlee = localStorage.getItem('tasktitle');
   
    // storing title in localstorage
    if (tasktitlee == null) {
        task = [];
    }
    else {
        task = JSON.parse(tasktitlee);
    }
    task.push(title[sumid - 2]);
    var updatetitle = title.splice(sumid - 2, 1);
    localStorage.setItem('alltitle', JSON.stringify(title));

    localStorage.setItem('tasktitle', JSON.stringify(task));
   



    window.location.href = "alltodos.html";
}