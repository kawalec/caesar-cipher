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
    btn.innerHTML = "Plain";
    btn.id = "Encrypt";
  } else {
    btn.innerHTML = "ASCII";
    btn.id = "Decrypt";
  }
  elem.appendChild(btn);
}
document.body.appendChild(elem);

document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("click", function(el) {
    if (this.id == "Encrypt") {
      let plain = document.querySelector("#Plain").value;
      document.querySelector("#ASCII").value = encrypt(plain);
    } else if (this.id == "Decrypt") {
      let encoded = document.querySelector("#ASCII").value;
      document.querySelector("#Plain").value = decrypt(encoded);
    }
  });
});

let encrypt = text => {
  return text
    .split("")
    .map(char => char.charCodeAt(0))
    .join("-");
};

let decrypt = text => {
  return text
    .split("-")
    .map(code => String.fromCharCode(code))
    .join("");
};
