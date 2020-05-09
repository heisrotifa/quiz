var answers = ["A","B","C"],
tot = answers.length;


function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    for(var y=o; y<radios.length; y++)
    if(radios[y].checked) return radios[y].value;

}

function getScore(){
    var score = 0;
    for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===[i]) score += 1;
}

function returnScore(){
    alert("Your score is "+ getScore() +"/"+ tot);
}