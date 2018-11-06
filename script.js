// making sure the thing even works

$(".btn").click(function (event) {
  let thingClicked = this.innerHTML
  console.log("you clicked: ", thingClicked)
  $("#currentValue").html(thingClicked)
})


