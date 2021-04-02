const addf = document.querySelector('.add');
const addLi = text => `
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${text}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
`;
const todos =document.querySelector(".todos");
addf.addEventListener('submit', e=>{
    e.preventDefault();
    //add is name of input element
    const newTodo = addf.add.value.trim();
    if(newTodo !==''){
        
        todos.innerHTML+=addLi(newTodo);
        addf.reset()
    }
    console.log("i am hre");
    
});
//always apply event listener on the continer element rather than on every element in container if applying the same event listener
//event delegation
todos.addEventListener('click',e=>{
    
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
        // e.stopPropagation();
    }
});

//eventlistener for search
//calling function in event listener rather than typing all code here to make code reusable
// this is better way than the above  
const toFind = term => {
    // console.log(term)
    const list=Array.from(todos.children);
    list
        .filter(todo=>!todo.textContent.toUpperCase().includes(term))
        .forEach(child =>child.classList.add('hide'));
    
    // this removes class so that when we delete character in input it finds the match and unhide the element
    list
        .filter(todo=>todo.textContent.toUpperCase().includes(term))
        .forEach(child =>child.classList.remove('hide'));

}; 
const finds = document.querySelector('.search input');
finds.addEventListener('keyup',e=>{
    e.preventDefault();
    const term= finds.value.trim();
    toFind(term.toUpperCase());
});