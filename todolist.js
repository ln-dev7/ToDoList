form = document.querySelector('form')

// Ajouter une nouvelle tache

var ol = document.querySelector('#todo-list')
var na = document.querySelector('#name-tache')
var new_todo = document.querySelector('#todo-list-new')
new_todo.addEventListener('click', function(e){
    if(na.value){
        e.preventDefault()
        var item = document.createElement('li')
        //var item2 = document.createElement('button')
        ol.appendChild(item)
        item.textContent = na.value
        var con = `<div>${na.value}</div><div class='remove'>Supprimer</div>`
        item.innerHTML = con;
        //item.appendChild(item2).classList.add('remove')
        //item.appendChild(item2).textContent = 'Supprimer'
        form.reset()
    }else{
        alert("Veuillez entrer le nom de la tache!")
        e.preventDefault()
    }
    sup()
})

// Supprimer une tache

var sup = function(){
    var dels = document.querySelectorAll('.remove')
    for(i = 0; i < dels.length; i++){
        var del = dels[i]
        del.addEventListener('click', function(e){
            this.parentElement.parentElement.removeChild(this.parentElement)
        })
    }
}


/*

dels.forEach(del => {
    del.addEventListener('click', function(e){
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    })
});

*/




