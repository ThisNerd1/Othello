var playerTurn = true;
var blackChips = 0;
var whiteChips = 0;
const emptyBox = (evt) => {
let player1Image = document.createElement("img");
player1Image.src = "images/BlackPiece_sm.png";
let player2Image = document.createElement("img");
player2Image.src = "images/WhitePiece_sm.png";
let playerImage = document.createElement("img");

if(playerTurn) {
    console.log("black piece");
    playerImage = player1Image;
    blackChips++;
    console.log("player 1 placed: " + blackChips);
    playerTurn = false;
} else {
    console.log("white piece");
    playerImage = player2Image;
    whiteChips++;
    console.log("player 2 placed: " + whiteChips);
    playerTurn = true;
}

if(blackChips > whiteChips){
    document.querySelector("score-black").innerHTML = blackChips;
} else if (whiteChips > blackChips){
    document.querySelector("score-white").innerHTML = whiteChips;
}

switch (evt.target.id) {
    case '1':
        document.getElementById(evt.target.id).appendChild(playerImage);
        break;
    case '2':
        document.getElementById(evt.target.id).appendChild(playerImage);
        break;
    case '3':    
        document.getElementById(evt.target.id).appendChild(playerImage);
        break;
    case '4':
        document.getElementById(evt.target.id).appendChild(playerImage);
        break;
    case '5':
        document.getElementById(evt.target.id).appendChild(playerImage);
        break;
    case '6':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
    case '7':
        document.getElementById(evt.target.id).appendChild(playerImage);        
            break;
    case '8':
        document.getElementById(evt.target.id).appendChild(playerImage);           
            break;
    case '9':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
    case '10':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
    case '11':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '11':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '12':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '13':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '14':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '15':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '16':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '17':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '18':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '19':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '20':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '21':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '22':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '23':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '24':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '25':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '26':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '27':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '28':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '29':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '30':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '31':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '32':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '33':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
        case '34':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
        case '35':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '36':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '37':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '38':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '39':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '40':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '41':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '42':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '43':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '44':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '45':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '46':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '47':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '48':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '49':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '50':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '51':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '52':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '53':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '54':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '55':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '56':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '57':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '58':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '59':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '60':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '61':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '62':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '63':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            case '64':
        document.getElementById(evt.target.id).appendChild(playerImage);
            break;
            default:
            break;
}

}

document.getElementById("1").addEventListener("click", emptyBox);
document.getElementById("2").addEventListener("click", emptyBox);
document.getElementById("3").addEventListener("click", emptyBox);
document.getElementById("4").addEventListener("click", emptyBox);
document.getElementById("5").addEventListener("click", emptyBox);
document.getElementById("6").addEventListener("click", emptyBox);
document.getElementById("7").addEventListener("click", emptyBox);
document.getElementById("8").addEventListener("click", emptyBox);
document.getElementById("9").addEventListener("click", emptyBox);
document.getElementById("10").addEventListener("click", emptyBox);
document.getElementById("11").addEventListener("click", emptyBox);
document.getElementById("12").addEventListener("click", emptyBox);
document.getElementById("13").addEventListener("click", emptyBox);
document.getElementById("14").addEventListener("click", emptyBox);
document.getElementById("15").addEventListener("click", emptyBox);
document.getElementById("16").addEventListener("click", emptyBox);
document.getElementById("17").addEventListener("click", emptyBox);
document.getElementById("18").addEventListener("click", emptyBox);
document.getElementById("19").addEventListener("click", emptyBox);
document.getElementById("20").addEventListener("click", emptyBox);
document.getElementById("21").addEventListener("click", emptyBox);
document.getElementById("22").addEventListener("click", emptyBox);
document.getElementById("23").addEventListener("click", emptyBox);
document.getElementById("24").addEventListener("click", emptyBox);
document.getElementById("25").addEventListener("click", emptyBox);
document.getElementById("26").addEventListener("click", emptyBox);
document.getElementById("27").addEventListener("click", emptyBox);
document.getElementById("28").addEventListener("click", emptyBox);
document.getElementById("29").addEventListener("click", emptyBox);
document.getElementById("30").addEventListener("click", emptyBox);
document.getElementById("31").addEventListener("click", emptyBox);
document.getElementById("32").addEventListener("click", emptyBox);
document.getElementById("33").addEventListener("click", emptyBox);
document.getElementById("34").addEventListener("click", emptyBox);
document.getElementById("35").addEventListener("click", emptyBox);
document.getElementById("36").addEventListener("click", emptyBox);
document.getElementById("37").addEventListener("click", emptyBox);
document.getElementById("38").addEventListener("click", emptyBox);
document.getElementById("39").addEventListener("click", emptyBox);
document.getElementById("40").addEventListener("click", emptyBox);
document.getElementById("41").addEventListener("click", emptyBox);
document.getElementById("42").addEventListener("click", emptyBox);
document.getElementById("43").addEventListener("click", emptyBox);
document.getElementById("44").addEventListener("click", emptyBox);
document.getElementById("45").addEventListener("click", emptyBox);
document.getElementById("46").addEventListener("click", emptyBox);
document.getElementById("47").addEventListener("click", emptyBox);
document.getElementById("48").addEventListener("click", emptyBox);
document.getElementById("49").addEventListener("click", emptyBox);
document.getElementById("50").addEventListener("click", emptyBox);
document.getElementById("51").addEventListener("click", emptyBox);
document.getElementById("52").addEventListener("click", emptyBox);
document.getElementById("53").addEventListener("click", emptyBox);
document.getElementById("54").addEventListener("click", emptyBox);
document.getElementById("55").addEventListener("click", emptyBox);
document.getElementById("56").addEventListener("click", emptyBox);
document.getElementById("57").addEventListener("click", emptyBox);
document.getElementById("58").addEventListener("click", emptyBox);
document.getElementById("59").addEventListener("click", emptyBox);
document.getElementById("60").addEventListener("click", emptyBox);
document.getElementById("61").addEventListener("click", emptyBox);
document.getElementById("62").addEventListener("click", emptyBox);
document.getElementById("63").addEventListener("click", emptyBox);
document.getElementById("64").addEventListener("click", emptyBox);
