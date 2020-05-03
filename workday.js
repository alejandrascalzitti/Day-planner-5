//clock display with date and time

const time = $("#currentDay");

const hoursInDay = ["09AM", "10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

//Momment by itself generates current object for current time 
const now = moment();
//moment().format(); human readable time 

console.log(moment().format("hA"));

function updateTime(){
   let interval= setInterval(function(){
        
        time.text(moment().format("dddd MMM Do YYYY, h:mm:ss a"))
    },1000)   

}

// setInterval(updateTime, 1000);
 updateTime()

//   <div class="row time-block">
//  <div class="col-sm-2 hour"></div>
//  <textarea class="form-control col-sm-8" id="" rows="3"></textarea>
//  <button type="button" class="btn btn-primary col-sm-2 saveBtn">Primary</button>
// </div>

for(var i=0 ; i<hoursInDay.length ; i++){
    const row=$("<div>")
    row.attr("class", "row time-block")

    const hourDiv = $("<div>")
    hourDiv.attr("class","col-sm-2 hour")
    hourDiv.text(hoursInDay[i])

    const textArea = $("<textarea>")
    if(hoursInDay[i]>moment().format("hA")){
        textArea.attr("class", "form-control col-sm-8 future ")
    }else if(hoursInDay[i] === moment().format("hA")){
        textArea.attr("class", "form-control col-sm-8  present ")
    }else if(hoursInDay[i]< moment().format("hA")){
        textArea.attr("class", "form-control col-sm-8 past ")
    }
     // <
    textArea.attr("id","text"+i)
    textArea.attr("rows", "3")
    //.present .past .future----no class other wise overwrite Add to text area class 



    var saveButton = $("<button>")
    saveButton.attr("class", "btn btn-primary col-sm-2 saveBtn far fa-save")
    saveButton.attr("type", "button")
    saveButton.attr("id", i)
    
    
    row.append(hourDiv,textArea,saveButton)

    $(".container").append(row)
}




for(var j=0 ; j<hoursInDay.length ; j++){
    var toDoLocal= JSON.parse(localStorage.getItem("toDo"+ j))
    if(toDoLocal !== null){
        $("#text"+j).val(toDoLocal)
    }
}




 $('.saveBtn').on('click', function(){
    alert ("saved");
    let myText= $("#text"+$(this).attr("id")).val()
    console.log(myText);
    

   
    localStorage.setItem("toDo"+ $(this).attr("id"), JSON.stringify(myText))
 });



// PAST . PRESENT. FUTURE COLORS IN ARRAY 

//var color = ["#77dd7", "#ff69", "#d3d3"]

//or an object 

// var color = {
//     past:"#d3d3",
//     present:"#ff696",
//     future: "#77dd7"
// };



// function display(past, present,fututre){
//     textArea = color 
    


//}


//function inside object ??



//  OBJECTS INSIDE ARRAY 

var colors = [{
    past: "#d3d3",
    present:"#ff696",
    future:"#77dd7"
}];

function display(){
    textArea.hoursInDay
}
    