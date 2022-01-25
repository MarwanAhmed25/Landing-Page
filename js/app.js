/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.getElementsByTagName('h2'));
const nav = document.querySelector("#navbar__list");
const div = document.createElement('div');
const header = document.getElementById('header0');
const button = document.createElement('button');
var  navList,buttonTop;

/**
 * End Global Variables
 * 
*/

//build the nav bar with id sec+the number of index in array and class = li.
for(const section in sections){
    
    const li = document.createElement('li');
    li.textContent=sections[section].textContent;
    li.setAttribute('id', 'sec'+section);
    li.setAttribute('class', 'li');
    nav.appendChild(li);
    
}
navList=document.getElementsByClassName('li');

// append button for clicking and up to the top and down to the bottom of the page
button.textContent='down';
header.appendChild(button);


//helper function to remove the active class from the last viewport.

function helper(){
    for(const ele of navList)
    {
        ele.classList.remove('active');

    }
}


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event and click.

nav.addEventListener('click', clickFunction);

function clickFunction(e){
 
    const ele = e.target.textContent.toLowerCase();
    let top;
    
    for(const section of sections)
    {
        if(section.textContent.toLocaleLowerCase() === ele ){
            top = section.parentElement.getBoundingClientRect().top; 
            break;
        }
    }
    
    window.scrollTo({top: top + window.scrollY, left: 100,behavior: 'smooth'});
    helper();
    e.target.classList.add('active');
    
}


// goto the bottom of the page by click event
button.addEventListener('click', upDownFunction);

// function to convert the button from up to down and down to up
function upDownFunction(){
    
    if(this.textContent.toLowerCase()==='down'){
        button.textContent='up';
        buttonTop = 2900;
        
    }
    else{
        button.textContent='down';
        buttonTop = 0;
    }
    window.scrollTo({top: buttonTop, left: 100,behavior: 'smooth'});
}


// scrolling and active the viewport 
document.addEventListener('scroll', scrollFunction);

function scrollFunction(){
        
    for(const section in sections){
        if(sections[section].getBoundingClientRect().top>=-20 && sections[section].getBoundingClientRect().top<=150)
        {
            helper();
            navList[section].classList.add('active');
            
        }
    }

    const foot = document.getElementsByTagName('footer')[0];
    const head = document.getElementById('header0');
    if( foot.getBoundingClientRect().top<=1000)
    {
        buttonTop=2900;
        button.textContent='up';
    }
    else
    {
        buttonTop=0;
        button.textContent='down';
    }
   
}
