const $textarea = document.getElementById('input-encrip')
const $encrip = document.getElementById('encrip')
const $desencrip = document.getElementById('desencrip')
const $textEncryp = document.querySelector('.text-encrip')
const $btnCopy = document.querySelector('.btn__copi')


$encrip.addEventListener('click',()=>{
  let letter = $textarea.value.toLowerCase()
  if(letter === ''){
    return $textarea.focus()
  }

  const sinAcentos = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  // Aplicar las reglas de encriptación al texto
  const encrypText = sinAcentos.replace(/[aeiou]/g, letra => reglas[letra] || letra);
  $textarea.value = ''
  $textEncryp.textContent = encrypText
})

$desencrip.addEventListener('click',()=>{
  let letter = $textarea.value.toLowerCase()
  
  if(letter === ''){
    return $textarea.focus()
  }

  const reglasInversas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  let descryp = ''
  descryp += letter.replace(/(enter|imes|ai|ober|ufat)/g, match => reglasInversas[match] || match);
  $textarea.value = ''
  $textEncryp.textContent = descryp
})

$btnCopy.addEventListener('click', async()=>{
    try {
      await navigator.clipboard.writeText($textEncryp.textContent);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    } 
})