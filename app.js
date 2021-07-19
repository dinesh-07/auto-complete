const textEle = document.getElementById('text')
const text = 'I Love JavaScript!'
textEle.innerText = text

setInterval(showText, 100)

let index = 1
function showText() {
  textEle.innerText = text.substr(0, index)
  index++
  if (index > text.length) {
    index = 1
  }
}
