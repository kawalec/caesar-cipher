let elem = document.createElement("div");
for (let i = 0; i < 2; i++) {
  let input = document.createElement("textarea");
  input.rows = "10";
  input.cols = "20";
  input.className = "input";
  i === 0 ? (input.id = "decoded") : (input.id = "encoded");
  elem.appendChild(input);

  let btn = document.createElement("button");
  btn.className = "btn";
  if (i === 0) {
    btn.innerHTML = "Encrypt";
    btn.id = "decoded";
  } else {
    btn.innerHTML = "Decrypt";
    btn.id = "encoded";
  }
  elem.appendChild(btn);
}
let label = document.createElement("lebel");
label.innerHTML = "Shift";
label.style.color = "#fff";
let shift = document.createElement("input");
shift.style.marginLeft = "10px";
shift.style.width = "50px";
shift.type = "number";
label.appendChild(shift);
elem.appendChild(label);

document.body.appendChild(elem);

document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("click", function(el) {
    if (this.id == "decoded") {
      let plain = document.querySelector("#decoded").value;
      document.querySelector("#encoded").value = caesair("encrypt", plain);
    } else if (this.id == "encoded") {
      let encoded = document.querySelector("#encoded").value;
      document.querySelector("#decoded").value = caesair("decrypt", encoded);
    }
  });
});

let caesair = (fn, text) => {
  let shift = isNaN(parseInt(document.querySelector("input").value))
    ? 0
    : parseInt(document.querySelector("input").value);
  return text
    .split("")
    .map(char => {
      if (fn == "encrypt") {
        if (char.charCodeAt(0) + shift > 127) {
          return String.fromCharCode(char.charCodeAt(0) + shift - 127);
        } else if (char.charCodeAt(0) + shift < 0) {
          return String.fromCharCode(char.charCodeAt(0) + shift + 127);
        } else {
          return String.fromCharCode(char.charCodeAt(0) + shift);
        }
      } else if (fn == "decrypt") {
        if (char.charCodeAt(0) - shift > 127) {
          return String.fromCharCode(char.charCodeAt(0) - shift - 127);
        } else if (char.charCodeAt(0) - shift < 0) {
          return String.fromCharCode(char.charCodeAt(0) - shift + 127);
        } else {
          return String.fromCharCode(char.charCodeAt(0) - shift);
        }
      }
    })
    .join("");
};
