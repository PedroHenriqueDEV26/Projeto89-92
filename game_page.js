var questionN 

var nameP1 = localStorage.getItem("nameUser1");
var nameP2 = localStorage.getItem("nameUser2");

var score1 = 0;
var score2 = 0;
var word;

document.getElementById("nome1").innerHTML = nameP1+": ";
document.getElementById("nome2").innerHTML = nameP2+": ";

document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;

document.getElementById("playerP").innerHTML = "Turno de pergunta: "+ nameP1;
document.getElementById("playerR").innerHTML = "Turno de resposta: "+ nameP2;


function Send(){
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;
    actual_answer = parseInt(n1) * parseInt(n2)
    questionN = "<h4>" + n1 + "x" + n2 + "</h4>"
    input_box = 
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questionN + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    
}

var qTurn = 'player1';
var rTurn = 'player2';

function check(){
    var getR = document.getElementById("inputCheckBox").value;
    console.log(getR)
  
    if(getR == actual_answer){
        if(rTurn == 'player1'){
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
    } else{
        alert("Você errou.")
    }
    if(qTurn == 'player1'){
        qTurn = 'player2';
        document.getElementById("playerP").innerHTML = "Turno de pergunta: "+ nameP1;
     }
     else{
        qTurn = 'player1';
        document.getElementById('playerP').innerHTML = "Turno de pergunta: "+ nameP2;
     }

     if(rTurn == 'player1'){
        rTurn = 'player2'
        document.getElementById("playerR").innerHTML = "Turno de resposta: "+ nameP1;
     }
     else{
        rTurn = 'player1'
        document.getElementById("playerR").innerHTML = "Turno de resposta: "+ nameP2;
     }
     document.getElementById("output").innerHTML = ""
}
