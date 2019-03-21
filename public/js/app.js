console.log("client side java scriptfiel is loaded")
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const weatherdata = (place) =>{
    messageOne.textContent='loading...'
    messageTwo.textContent=''
    messageThree.textContent=''
fetch('/weather?address='+place).then((response) =>{
   
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
            messageOne.textContent=data.error
        }else{
        console.log(data);
        //const dataparse=JSON.parse(data)
        messageOne.textContent= "Location: "+ data.name  
        messageTwo.textContent=data.Data.summary
        messageThree.textContent='Currently tempature was ' +data.Data.temperature+ ' degress out. The probability of rain ' +data.Data.precipProbability+ "%. "
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