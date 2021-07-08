var EstringDict = ["F", "F#/G♭", "G", "G#/A♭", "A", "A#/B♭", "B", "C", "C#/D♭", "D", "D#/E♭", "E"];
var AstringDict = ["A#/B♭", "B", "C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A"];
var StringList = [EstringDict, AstringDict];
var StringName = ["E", "A"];
var score = 0;
var attempts = 0;

function genQuestion() {
    document.getElementById("start").className = "hidden";
    document.getElementById("Submit").className = "button";
    randomFretNum = Math.floor(Math.random()*12);
    randomStringNum = Math.floor(Math.random()*2);
    if (randomStringNum == 0) {
        document.getElementById("Question").innerHTML = EstringDict[randomFretNum] + " on the " + StringName[randomStringNum] + " string";
    } else if (randomStringNum == 1) {
        document.getElementById("Question").innerHTML = AstringDict[randomFretNum] + " on the " + StringName[randomStringNum] + " string";
    }
    
  
}

function submitAnswer() {
    var answer = parseInt(document.getElementById("AnswerEntry").value);
    console.log(answer)
    console.log(randomFretNum)
    if (answer == (randomFretNum + 1)) {
        attempts += 1;
        score += 1;
        document.getElementById("score").innerHTML = score + "/" + attempts;
        genQuestion();
    } else {
        attempts += 1;
        document.getElementById("score").innerHTML = score + "/" + attempts;
        genQuestion();
    }
}