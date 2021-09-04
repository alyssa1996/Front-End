let authTimer;
let ableButtonStyle = "cursor: pointer; background-color:yellow";

function moveFocus(ids) {
  let now = document.getElementById(ids[0]);
  let next = document.getElementById(ids[1]);
  let maxlength = Number(now.getAttribute("maxlength"));
  if (now.value.length === maxlength) {
    next.focus();
  }
}

function setButtonAble(ids) {
  let now = document.getElementById(ids[0]);
  let button = document.getElementById(ids[1]);
  let maxlength = Number(now.getAttribute("maxlength"));
  if (now.value.length === maxlength) {
    button.disabled = false;
    button.style = ableButtonStyle;
  }
}

function setAuth(style) {
  let authNum = document.getElementById("auth-number");
  let sendButton = document.getElementById("auth-send");
  let checkButton = document.getElementById("auth-check");
  checkButton.disabled = true;
  authNum.innerText = "000000";
  document.getElementById("min").innerText = "3";
  document.getElementById("sec").innerText = "00";

  if (style) {
    sendButton.style = "";
    checkButton.style = "";
  }
}

function getAuthNum() {
  let Auth = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    String(Math.random() * 10)
  );
  let authNum = document.getElementById("auth-number");
  authNum.innerText = Auth;

  let sendButton = document.getElementById("auth-send");
  sendButton.disabled = true;

  let checkButton = document.getElementById("auth-check");
  checkButton.disabled = false;
  checkButton.style = ableButtonStyle;

  let timer = 180;
  authTimer = setInterval(function () {
    if (timer >= 0) {
      let min = Math.floor(timer / 60);
      let sec = String(timer % 60).padStart(2, "0");
      timer = timer - 1;
      document.getElementById("min").innerText = min;
      document.getElementById("sec").innerText = sec;
    } else {
      setAuth(true);
    }
  }, 1000);
}

function finishAuth() {
  alert("인증이 완료되었습니다");
  clearInterval(authTimer);
  setAuth(false);
  document.getElementById("auth-check").innerText = "인증완료";
  let submitButton = document.getElementById("form-submit");
  submitButton.disabled = false;
  submitButton.style = ableButtonStyle;
}

function showInvalidmessage() {
  console.log(this);
}
