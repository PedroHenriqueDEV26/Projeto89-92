var p1, p2
function funLogin(){
    p1= document.getElementById("player1Name").value;
    p2= document.getElementById("player2Name").value;
    localStorage.setItem("nameUser1", p1);
    localStorage.setItem("nameUser2", p2);
    window.location = "game_page.html"
}

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
    getWord = document.getElementById("word").value;
     word = getWord.toLowerCase();

    var charAt1 = word.charAt(1);
    var length2 = Math.floor(word.length/2);
    var charAt2 = word.charAt(length2);
    var lengthMenosUm = word.length-1;
    var charAt3 = word.charAt(lengthMenosUm);
    var removeCharAt1 = word.replace(charAt1, "_");
    var removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    var removeCharAt3 = removeCharAt2.replace(charAt3, "_");

    var Q = "<h4 id='showW'> p."+ removeCharAt3 + "</h4>";
    var resposta = "<b> reposta: <input type = 'text' id = 'answer'>"
    var checkButton = "<button class = 'btn-info' onclick = 'check()'> checar</button>"
    var row = Q + resposta + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
} 

var qTurn = 'player1';
var rTurn = 'player2';

function check(){
    var getR = document.getElementById("answer").value;
    console.log(getR)
    var resp = getR.toLowerCase();
    if(resp == word){
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
