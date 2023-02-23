/* -----------------------------------------
  Carousel for work slides
 ---------------------------------------- */
/* new version 

const arrowKeys = () => {
  window.addEventListener("onkeydown", e => {
      if (e.key === 37) {
          prevControl.click();
          return false
      } else if (e.key === 39) {
          nextControl.click();
          return false
      }
  });
};

if (keyboard === "true") {
 arrowKeys();
}
*/

/* -----------------------------------------
  collect data from contact form
 ---------------------------------------- */

 let form = document.querySelector('form')

 form.addEventListener('submit', (e) => {
  e.preventDefault()

  const collectedFormData = new FormData(form)

  const entryObject = Object.fromEntries(collectedFormData)
  console.log(entryObject)

  const json = JSON.stringify(entryObject)
  sessionStorage.setItem('form', json)

  window.location.href = "formData.html"

 })

 