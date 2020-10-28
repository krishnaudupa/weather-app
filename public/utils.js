const formData = document.querySelector('.city-name-form')
const message = document.querySelector('.response')
const cityInput = document.querySelector('.city-name-input')



formData.addEventListener('submit', function(e){
    e.preventDefault()
    const location = cityInput.value
    message.textContent = "Getting data..."
    fetch(`/weather?address=${location}`)
    .then(res => res.json())
    .then(res => message.textContent = res.result)
})