//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    //create a request obj
    var request = new XMLHttpRequest();
    
    //capture the reponse and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make a request
    request.open('GET', 'http://psanjuupadhyaya.imad.hasura-app.io/counter',true);
    request.send(null);
   
} ;
//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    //make a request to the server and send the name
    
      //capture the reponse and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                //capture a list of names and render it as a list
                var names =request.responseText;
                names=JSON.parse(names);
                var list='';
                for( var i = 0; i< names.length; i++){
                    list += '<li>'+ names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    //make a request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://psanjuupadhyaya.imad.hasura-app.io/submit_name?name=' + name,true);
    request.send(null);
    
};