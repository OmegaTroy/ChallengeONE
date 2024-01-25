const $textarea = document.getElementById("input-encrip");
const $encrip = document.getElementById("encrip");
const $desencryp = document.getElementById("desencrip");
const $textEncryp = document.querySelector(".text-encrip");
const $btnCopy = document.querySelector(".btn__copi");
const $sectionText = document.querySelector(".section-text");
const $btnTraslate = document.querySelector(".btn__traslate");


// button encryp
$encrip.addEventListener("click", () => {
  let textareaValue = $textarea.value.toLowerCase();
  if (textareaValue === "") {
    return $textarea.focus();
  }

  const withoutAccents = textareaValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const character = withoutAccents.replace(/[^a-zA-Z\s]/g , "");

  const rules = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const encrypText = character.replace(
    /[aeiou]/g,
    (letter) => rules[letter] || letter
  );
  $textarea.value = "";
  $textEncryp.textContent = encrypText;
});

// button desencryp
$desencryp.addEventListener("click", () => {
  let textareaValue = $textarea.value.toLowerCase();

  if (textareaValue === "") {
    return $textarea.focus();
  }

  const inverseRules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let descryp = "";
  descryp += textareaValue.replace(
    /(enter|imes|ai|ober|ufat)/g,
    (match) => inverseRules[match] || match
  );
  $textarea.value = "";
  $textEncryp.textContent = descryp;
});


// button copy
$btnCopy.addEventListener("click", async () => {
  const copyElement = `
      <div class="info">
        <div class="info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>
        </div>
        <div class="info__title">texto copiado</div>
    </div>
  `;
  try {
    await navigator.clipboard.writeText($textEncryp.textContent);
    $sectionText.insertAdjacentHTML("beforeend", copyElement);
    $copyClass = document.querySelector(".info");
    setTimeout(() => {
      $sectionText.removeChild($copyClass);
    }, 2000);
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
});



//button traslate
$btnTraslate.addEventListener('click',()=>{
  $textarea.value = $textEncryp.textContent
})
