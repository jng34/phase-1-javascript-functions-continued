// code your solution here
function saturdayFun(act='roller-skate') {
    return `This Saturday, I want to ${act}!`;
}

const mondayWork = function (act='go to the office') {
    return `This Monday, I will ${act}.`;
}


function wrapAdjective(y='*') {
    return function (x='special') {
        return `You are ${y}${x}${y}!`;
    }
}
const encouragingPromptFunction = wrapAdjective("!!!");
