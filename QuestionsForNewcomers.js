
const questionsArray = new Array();
    questionsArray[0] = "What is your favorite color?";
    questionsArray[1] = "Where do you want to travel one day?";
    questionsArray[2] = "What is the highlight of your week so far?";
    questionsArray[3] = "What is a skill you're developing?";
    questionsArray[4] = "What did you want to be when you grew up?";
    questionsArray[5] = "What's one item you can't live without?";
    questionsArray[6] = "What's one hobby you've always wanted to try?";
    questionsArray[7] = "If you could have one superpower, what would it be?";
    questionsArray[8] = "What is your favorite genre of movie/book?";
    questionsArray[9] = "What book left the biggest impact on you?";

function randomNumber(){
       /**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
        var max = questionsArray.length;
        var min = 0;
        var x = Math.floor(Math.random() * (max - min + 1)); 
        return questionsArray[x];
    }



exports.getRandomNumber = randomNumber;
exports.quesArray = questionsArray;