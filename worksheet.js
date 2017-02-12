// PART 0: Write a function called squareDance() that squares each number in an array.
var array = [4,16,25,36]
var squareDance = function(array) {
    var total = []
	for (var index = 0; index < array.length; index = index + 1) {
        var square = array[index] * array[index]
    	total.push(square)
    }
    return total
 }

squareDance(array)

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.


var nicer = function(string){
	var origWords = string.split(' ')
    var notCursingWords = []
    for(var index = 0; index < origWords.length; index = index + 1){
        if(origWords[index] !== 'crappy' && origWords[index] !== 'heck' && origWords[index] !== 'dang' && origWords[index] !== 'darn'){
        	notCursingWords.push(origWords[index])
        }	
    }
    
    return notCursingWords.join(" ")
    
}
nicer("give me a dang crappy sandwich")


// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 


var capitalizeAll = function(string){
	var words = string.split(' ')
    var allCapped = []
    for(var index = 0; index < words.length; index = index + 1){
        var letters = words[index].split('')
        letters[0] = letters[0].toUpperCase()
        allCapped.push(letters.join(''))
    }
    return allCapped.join(" ")
}
capitalizeAll("give me a dang crappy sandwich")


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
var properSentences = function(string){
	var words = string.split('. ')
    var allCapped = []
    for(var index = 0; index < words.length; index = index + 1){
        var letters = words[index].split('')
        letters[0] = letters[0].toUpperCase()
        allCapped.push(letters.join(''))
    }
    return allCapped.join(". ")
}
properSentences("give me a dang crappy sandwich. you are so cool. i am not hungry.")

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn = function(string){
	var middle = string.length / 2
    var letters = string.split('')
    var runningTotal = ""
    for(var index = 0; index < letters.length; index = index + 1){
    	if(index === middle){
            runningTotal = runningTotal + "fun"
        }
        runningTotal = runningTotal + letters[index]

    }
    
    return runningTotal;
    	
}
iPutTheFunIn("reds")

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


