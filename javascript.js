const submitQuote = document.getElementById("submit");
const groomName = document.getElementById("groom-name");
const startingBid = document.getElementById("starting-bid");
const educationgroom = document.getElementById("groom-education");
const netfamily = document.getElementById("family-net");
const skills = document.getElementsByClassName("skills");
const groomage = document.getElementsByName("age");
const reputations = document.getElementsByClassName("reputation");
const love_letter = document.getElementById("love_letter");

//------function of education----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const findeducation = (answer) => {
    answer *= educationgroom.value;
    return answer;
    }
//------function of family net----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const findnetfamily = (answer) => {
        answer *= netfamily.value;
        return answer;
        }
//------function for skills----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const findskills = (skills, answer) => { 
    let list = Array.from(skills).filter(forchecking)
    const newanswer = list.reduce(forreduceadd, answer)
    return newanswer;
}
const forreduceadd = (answer, skill) => {
    return answer + Number(skill.value);
}
const forchecking = (skill) => {
    return skill.checked;
}
//------function for age-----------------------------------------------------------------------------------------------------------------------------
const findage = (agearray, answer) => {  
    agearray.forEach(item => {
        if (item.checked) {
            answer = answer * Number(item.value)
        }
    })
    return answer;
}
//------function for reputation--------------------------------------------------------------------------------------------------------------------
const findreputation = (arraytempl, answer) => { 
    	for (let i=0; i < arraytempl.length; i++) {  
		if (arraytempl[i].checked && Number.isInteger(Number(arraytempl[i].value))) {
			answer -= Number(arraytempl[i].value)
		}
		else if (arraytempl[i].checked && !Number.isInteger(arraytempl[i].value)) {
			answer *= Number(arraytempl[i].value)
		}
	}
	return answer;
}

const calculate = () => {
    let name = groomName.value; 
    let answer = Number(startingBid.value);
    let letter = love_letter.value;
    
answer = findeducation(findnetfamily(answer));
answer = findskills(skills, answer);
answer = findage(groomage, answer);
answer = findreputation(reputations, answer);

let person = {
    groom_name: name,
    groom_price: answer,
    groomLetter: letter
    }
    if (name != "" && startingBid.value != 0){
document.getElementById("price").innerHTML = `The price for ${person.groom_name} is ${person.groom_price}$.
 Your love letter is "${person.groomLetter}"`;
    }
    else {
        alert("Please enter both Name and Starting-Bid for Your Groom!\nPress 'OK' to continue!");
    }
}

submitQuote.addEventListener('click', calculate);