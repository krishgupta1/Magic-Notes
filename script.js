console.log("Welcome to the Magic Note.");
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }    
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
   showNotes()
 })
function showNotes(){
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        } 
    }
   
    let html = "";
        notesObj.forEach(function(element, index){
            html += `<div class="mx-2 my-2 noteCard" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Note ${index +1} </h5>
          <p class="card-text">${element}</p>
          <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
          </div>
          </div>`
    })
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothings To Show! Use "Add a Note" Section to add notes.`
    }
   
function deleteNote(index){
    console.log(`I am deleting`, index);

    let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value
    console.log("Input event is fired.", inputVal)
    
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.include(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(cardTxt)//
    })
})