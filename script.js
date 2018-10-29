
// function getCurrenValue(num1, num2){
// let firstValue = ""
// let secondValue = ""
// let operator = ""


$(".btn").click(function (event) {
  let thingClicked = this.innerHTML
  console.log("you clicked: ", thingClicked)
  $("#currentValue").html(thingClicked)
})


