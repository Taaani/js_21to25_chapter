let orignalString = "Pakistan is our Country <br> its Our land <br> I Love Pakistan <br>our country";
let statement = document.getElementById("statement");
let output = document.getElementById("output");
let cities = ["fasilabad", "multan", "bahawalpur"];
statement.innerHTML = orignalString;
function lowerCase(){
    
    
    let lowerCaseString = orignalString.toLowerCase();
    
    output.innerHTML = lowerCaseString;

}
function uperCase(){
    
    
    let UperCaseString = orignalString.toUpperCase();
    
    output.innerHTML = UperCaseString;

}
function captilize(){
    
     output.style.textTransform = "capitalize";
     output.innerHTML = orignalString;


}
function batterFarmatting(){
    let inputText = document.getElementById("inputText").value;
    if(!inputText){
        alert("please enter any text");
        return;
    }
    inputText = inputText.toLowerCase();
    output.style.textTransform = "capitalize";
    output.innerHTML = inputText;
}
function printAllCities(){
    output.innerHTML = "";
    for(let i=0; i<cities.length ; i++){
        output.innerHTML += i+1 +")"+cities[i]+ "<br>";
    }
}
function addYourCity(){
    let city = document.getElementById("inputText").value;
    if(!city){
        alert("please add your city in the inputField");
        return;
    }
     let cityFirstLetter = city.slice(0,1).toUpperCase();
     console.log(cityFirstLetter);
    // cityFirstLetter = city.charAt(0);
     let cityAllLetter = city.slice(1).toLowerCase();
      console.log(cityAllLetter);
     let completeLetter = cityFirstLetter + cityAllLetter;

    let cityFound = false;
    for(let i=0; i<cities.length ; i++){
        if(cities[i] === completeLetter){
            cityFound = true;
            let show = '<span style="color:red; font-size:20px; font-weight:bold ; margin-right:2px;">'+completeLetter+ '</span>'+"already add in the list";
            output.innerHTML = show;
        }
        
    }
    if(cityFound === false){
        cities.push(completeLetter);
        let newShow = '<span style="color:green; font-size:20px; font-weight:bold ; margin-right:2px;">'+completeLetter+ '</span>'+"successfully add in the list of cities";
        output.innerHTML = newShow;
    }


}

function findTheWord(){
    
    let newOrginalText = orignalString.toLowerCase();
    let word = document.getElementById("inputText").value;
    if(!word){
        alert("please enter any value");
        return;
    }
    word = word.toLowerCase();
    let foundWord = newOrginalText.indexOf(word);
    if(foundWord === -1){
        output.innerHTML = "your word could not found in the string" + '<span style="font-size:20px;">'+"&#128515" +'</span>'
    }else{
        output.innerHTML = "your word in found at index "+foundWord;
    }
}
function replaceWord(){
    let newOrginalText = orignalString.toLowerCase();
    let word = document.getElementById("inputText").value;
    if(!word){
        toastifyError("please enter any word that you found in string");
        return;
    }
    word = word.toLowerCase();
    
    let replaceWord = prompt("enter word which use for replacement");
    if(!replaceWord){
        alert("enter any word");
        return;
    }
    word = new RegExp(word ,'g');
    let replacedString = newOrginalText.replace(word,replaceWord);
    output.innerHTML = replacedString;
}
function clearInput(){
     document.getElementById("inputText").value= "";
    
}
function clearOutput(){
    let output = document.getElementById("output");
    output.innerHTML = "";
}