const copySections = (e) => {
   const textElement = e.target.tagName == 'P'
      ? e.target
      : e.target.parentElement.previousElementSibling

   navigator.clipboard.writeText(textElement.textContent.trim())
      .then(() => console.log('Ok'))
      .catch(e => console.error(`Error accured: ${e}`))
}

document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('details > section').forEach(s => {
      s.addEventListener('click', copySections)
   })

})