var buffer = "",
    buffer0 = "",
    operator = "",
    operator0 = "";

function operate () {
  buffer0 = Number(buffer0);
  buffer = Number(buffer);
  if (operator0 === "plus") {buffer0 += buffer;}
  if (operator0 === "minus") {buffer0 -= buffer;}
  if (operator0 === "times") {buffer0 *= buffer;}
  if (operator0 === "divide") {buffer0 /= buffer;}
  // if (operator0 === "equal") {
  // }
  // if (operator0 === "") {}
  buffer = "";
  $(".buffer").html(buffer0);
}

$(".number").on("click", function() {
  var input = $(this).attr("id");
  if(!(/\./.test(buffer) && input === ".")) {
    buffer += input;
    $(".buffer").html(buffer);
  }
});

$(".operator").on("click", function() {
  // $(".buffer").html("");
  operator0 = operator;
  operator = $(this).attr("id");
  if (buffer0 === "" | (operator0 === "equal" && buffer !== "")) {buffer0 = buffer; buffer = "";}
  if (operator0 !== "") {operate();}
});

$(".clear").on("click", function() {
  buffer = "";
  $(".buffer").html("");
})

// keyboard
var shift = false;

$("body").on("keydown", function(i) {
	if(i.which === 16) {shift = true;}
	if(shift) {	
		if(i.which === 187) {$("#plus").click();shift = false;}
		if(i.which === 56) {$("#times").click(); shift = false;}
	} else {
		if(i.which === 49 | i.which === 97) {$("#1").click()}
		if(i.which === 50 | i.which === 98) {$("#2").click()}
		if(i.which === 51 | i.which === 99) {$("#3").click()}
		if(i.which === 52 | i.which === 100) {$("#4").click()}
		if(i.which === 53 | i.which === 101) {$("#5").click()}
		if(i.which === 54 | i.which === 102) {$("#6").click()}
		if(i.which === 55 | i.which === 103) {$("#7").click()}
		if(i.which === 56 | i.which === 104) {$("#8").click()}
		if(i.which === 57 | i.which === 105) {$("#9").click()}
		if(i.which === 48 | i.which === 96) {$("#0").click()}
    if(i.which === 190 | i.which === 110) {$(".dot").click()}
    
		if(i.which === 27) {$(".clear").click()}

		if(i.which === 189) {$("#minus").click()}
		if(i.which === 187 | i.which === 13) {$("#equal").click()}
		if(i.which === 191) {$("#divide").click()}
	}
})