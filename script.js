
// function getCurrenValue(num1, num2){
// let firstValue = ""
// let secondValue = ""
// let operator = ""


$(".btn").click(function (event) {
  let thingClicked = this.innerHTML
  console.log("you clicked: ", thingClicked)
  $("#currentValue").html(thingClicked)
})


// create a function that takes a four digit number
// it must output the number in roman numerals

function opposite(num) {
return - Math.abs(num)
}
opposite(negative)