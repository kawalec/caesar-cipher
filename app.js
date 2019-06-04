let elem = document.createElement("div");
for (let i = 0; i < 2; i++) {
  let input = document.createElement("textarea");
  input.rows = "10";
  input.cols = "20";
  input.className = "input";
  i === 0 ? (input.id = "Plain") : (input.id = "ASCII");
  elem.appendChild(input);

  let btn = document.createElement("button");
  btn.className = "btn";
  if (i === 0) {
    btn.innerHTML = "Encrypt";
    btn.id = "Plain";
  } else {
    btn.innerHTML = "Decrypt";
    btn.id = "ASCII";
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
    if (this.id == "Plain") {
      let plain = document.querySelector("#Plain").value;
      document.querySelector("#ASCII").value = encrypt(plain);
    } else if (this.id == "ASCII") {
      let encoded = document.querySelector("#ASCII").value;
      document.querySelector("#Plain").value = decrypt(encoded);
    }
  });
});

let encrypt = text => {
  let shift = isNaN(parseInt(document.querySelector("input").value))
    ? 0
    : parseInt(document.querySelector("input").value);
  return text
    .split("")
    .map(char => {
      if (char.charCodeAt(0) + shift > 127) {
        return char.charCodeAt(0) + shift - 127;
      } else if (char.charCodeAt(0) + shift < 0) {
        return char.charCodeAt(0) + shift + 127;
      } else {
        return char.charCodeAt(0) + shift;
      }
    })
    .join("-");
};

let decrypt = text => {
  let shift = isNaN(parseInt(document.querySelector("input").value))
    ? 0
    : parseInt(document.querySelector("input").value);
  return text
    .split("-")
    .map(code => {
      if (code - shift < 0) {
        return String.fromCharCode(code - shift + 127);
      } else if (code - shift > 127) {
        return String.fromCharCode(code - shift - 127);
      } else {
        return String.fromCharCode(code - shift);
      }
    })
    .join("");
};
