const $textarea = document.getElementById('input-encrip')
const $encrip = document.getElementById('encrip')
const $desencrip = document.getElementById('desencrip')
const $textEncryp = document.querySelector('.text-encrip')
const $btnCopy = document.querySelector('.btn__copi')

const letterMap = new Map([
  ['a','ai'],
  ['e','enter'],
  ['i','imes'],
  ['o','ober'],
  ['u','ufat'],
])

//* funsion de encriptado
// const encrip=(letter)=>{
//   let encrypText = ''
//   for(let i = 0; i < letter.length; i++){
//     if(letterMap.has(letter.charAt(i))){
//       encrypText += letterMap.get(letter.charAt(i))
//     }else{
//       encrypText += letter.charAt(i)
//     }
//   }
//   return encrypText
// }



$encrip.addEventListener('click',()=>{
  let letter = $textarea.value.toLowerCase()
  if(letter === ''){
    return $textarea.focus()
  }
  let encrypText = ''
  for(let i = 0; i < letter.length; i++){
    if(letterMap.has(letter.charAt(i))){
      encrypText += letterMap.get(letter.charAt(i))
    }else{
      encrypText += letter.charAt(i)
    }
  }
  $textarea.value = ''
  $textEncryp.textContent = encrypText
})

$desencrip.addEventListener('click',()=>{
  let letter = $textarea.value.toLowerCase()
  
  if(letter === ''){
    return $textarea.focus()
  }

  let descryp = ''
  for(let i = 0; i < letter.length; i++){
    if(letterMap.has(letter.charAt(i))){
      descryp += letter.charAt(i)
      i += ((letterMap.get(letter.charAt(i))).length)-1
    }else{
      descryp += letter.charAt(i)
    }
  }
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