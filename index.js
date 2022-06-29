const div = document.createElement('div')
document.body.prepend(div)
const btn = document.createElement('button')
btn.textContent = 'шутка'
div.append(btn)
const p = document.createElement('p')
div.append(p)
btn.addEventListener('click', (event) => {
  fetchData()
})

function fetchData() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((joke) => p.textContent = joke.value)
  
    .catch((e) => {
      console.log(e)
    })
}

// fetchData()