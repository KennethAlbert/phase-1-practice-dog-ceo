console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',fetchDog(),
fetchBreed()
)



function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response=>response.json())
    .then(dogs=>{console.log(dogs)
    dogs.message.forEach(dog => {
    const div = document.querySelector('div');
    const img = document.createElement('img');
    img.src = dog
        div.appendChild(img);
        img.width = 150;
        img.height = 150;
    });})
}

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response=>response.json())
    .then(breeds=>{
      breeds.message
     for (const key in breeds.message) {
        const li = document.createElement('li');
        let ul = document.querySelector('#dog-breeds');
        let dropDown = document.querySelector('#breed-dropdown');
    
        li.addEventListener('click', function(e){
            e.target.style.color = 'blue'
        });
        li.addEventListener('mouseover', function(e){
            e.target.style.cursor = 'pointer'
        })
    
        li.innerText = key
        ul.appendChild(li)
    
    dropDown.addEventListener('change', function(e){
        let list= li.innerHTML;
        
        if (e.target.value != list.charAt(0)){
            li.hidden = true
        }
        else {
            li.hidden = false
        }
    })
     }
    })
}