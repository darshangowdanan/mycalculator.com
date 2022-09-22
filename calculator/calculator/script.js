let button = document.querySelectorAll('.btn');
let screnvalue = ""
for (item of button) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    screnvalue += buttonText;
    answerbar.value = screnvalue;
    if(screnvalue>999999999999999){
      document.getElementById('answerbar').value = "NaN";
      // alert("pleas enter the small number")
    }
  })
}
function gat() {
  let answerbar = document.getElementById('answerbar').value;
  b = eval(answerbar);
  document.getElementById('answerbar').value = "";
  document.getElementById('answerbar').value = b;
  screnvalue = b;
}
function cancel() {
  document.getElementById('answerbar').value = "";
  window.location.reload(true)
}
function square() {
  let square = document.getElementById('answerbar').value;
  c = square * square;
  document.getElementById('answerbar').value = c;
  screnvalue = c;
}
function cube() {
  let cube = document.getElementById('answerbar').value;
  c = cube * cube * cube;
  document.getElementById('answerbar').value = c;
  screnvalue = c;
}
