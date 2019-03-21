console.log("client side java scriptfiel is loaded")
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherdata = (place) =>{
    messageOne.textContent='loading...'
    messageTwo.textContent=''
fetch('http://localhost:2099/weather?address='+place).then((response) =>{
   
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
            messageOne.textContent=data.error
        }else{
        console.log(data);
        //const dataparse=JSON.parse(data)
        messageOne.textContent= 'current tempature was ' +data.Data.temperature+ ' probability of rain ' +data.Data.precipProbability+ "% "+data.Data.summary 
        messageTwo.textContent=data.name
        }
    })
})
}



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('testing.....')
    const location = search.value
    console.log(location)
    weatherdata(location)
    
})