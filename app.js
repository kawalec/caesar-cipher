let elem = document.createElement("div");
for (let i = 0; i < 2; i++) {
  let input = document.createElement("textarea");
  input.rows = "10";
  input.cols = "20";
  input.className = "input";
  i === 0 ? (input.id = "Code") : (input.id = "Decode");
  elem.appendChild(input);

  let btn = document.createElement("button");
  btn.className = "btn";
  i === 0 ? (btn.innerHTML = "Code") : (btn.innerHTML = "Decode");
  elem.appendChild(btn);
}
document.body.appendChild(elem);

document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("click", function(el) {
    let text = document.querySelector(`#${this.innerHTML}`).value;
    document.querySelector(`textarea:not(#${this.innerHTML})`).value = encrypt(
      text
    );
  });
});

let encrypt = text => {
  return text
    .split("")
    .map(char => char.charCodeAt(0))
    .join("");
};

// decrypt
