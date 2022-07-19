var showsText = document.querySelector(".shows-text");
var showsResult = document.querySelector(".shows-result");
// showsText.setAttribute("contenteditable", "true")
function setBox(text) {
  var createBox = document.createElement("div");
  var createBoxContent = document.createElement("div");
  createBox.className = "box";
  wrapper.appendChild(createBox);
  createBoxContent.className = "box-content";
  createBoxContent.innerText = text;
  createBox.appendChild(createBoxContent);
}
for (i = 1; i <= 13; i++) {
  var wrapper = document.querySelector(".wrapper");
  if (i === 1 || i === 2 || i === 4 || i === 5 || i === 7 || i === 8) {
    setBox(i);
  } else if (
    i === 3 ||
    i === 6 ||
    i === 9 ||
    i === 10 ||
    i === 11 ||
    i === 12 ||
    i === 13
  ) {
    if (i === 3) {
      setBox(i);
      setBox("+");
    } else if (i === 6) {
      setBox(i);
      setBox("-");
    } else if (i === 9) {
      setBox(i);
      setBox("*");
    } else if (i === 10) {
      setBox(".");
    } else if (i === 11) {
      setBox("0");
    } else if (i === 12) {
      setBox("=");
    } else if (i === 13) {
      setBox("/");
    }
  }
}

var listBox = document.querySelectorAll(".box");
var hollow = "";
for (i = 0; i < listBox.length; i++) {
  listBox[i].addEventListener("click", function () {
    if (this.children[0].innerText !== "=") {
      hollow += this.children[0].innerText;
      showsText.innerHTML = hollow;
    } else if (this.children[0].innerText === "=") {
      // showsResult.innerHTML = '= ' + eval(hollow);
      try {
        showsResult.innerHTML = "= " + eval(hollow);
      } catch (err) {
        // console.log(e)
        alert(
          "Phép tính không hợp lệ. Vui lòng load lại trang rồi tính tiếp ^^"
        );
      }
    }
  });
}
