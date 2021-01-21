function leapYearCall() {
  const inputValue = document.getElementById("year").value;
  const outputValue = document.getElementById("showResult");
  const wrongMsg = document.getElementById('wrongMsg');
  if (inputValue === '') {
      wrongMsg.innerHTML = 'Please enter a value in the input field !';
  }else if (inputValue % 4 === 0) {
    outputValue.innerHTML = `${inputValue} is a Leap Year`;
  } else if (inputValue % 400 === 0) {
    outputValue.innerHTML = `${inputValue} is a Leap Year`;
  } else if (inputValue % 100 === 0) {
    outputValue.innerHTML = `${inputValue} is a Leap Year`;
  } else {
    outputValue.innerHTML = `${inputValue} is not a Leap Year`;
  }
//   outputValue.innerHTML = result;
}

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
    leapYearCall()
});
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
})

document.onkeydown = function(e) {
  if (e.ctrlKey && e.which) {
      return false;
  } else {
      return true;
  }
};