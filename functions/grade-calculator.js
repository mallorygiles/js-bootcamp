let getLetterGrade = function(numGrade){
    if(numGrade >=90){
        return 'A'
    } else if (numGrade >= 80){
        return 'B'
    } else if (numGrade >= 70){
        return 'C'
    } else if (numGrade >= 60){
        return 'D'
    } else {
        return 'F'
    }
}

let showGrade = function(score, totalPossible) {
    if(typeof score !== 'number'){
        throw Error('The score must be a number')
    }
    if(typeof totalPossible !== 'number'){
        throw Error('The totalPossible must be a number')
    }
    let numGrade = score / totalPossible * 100
    let letterGrade = getLetterGrade(numGrade)
    console.log(`${score}/${totalPossible} -> You got a ${letterGrade} (${numGrade}%)`)
}

try{
    showGrade('34',50)
} catch(e){
    console.log(e.message)    
}

showGrade(42,45)
showGrade(17,23)
showGrade(50,70)
