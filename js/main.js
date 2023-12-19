const toggleButton = document.querySelector('.toggle').addEventListener('click', ()=>{
    document.querySelector('.nav-links').classList.toggle('active')
});

// $(".banner").ripples({
//     resolution: 500,
//     dropRadius: 20,
//     perturbance: 0.04,
// });

var typed = new Typed('#typed', {
    strings: ['Web Developer', 'UI/UX Designer', 'Web Designer', 'Graphic Designer'],
    typeSpeed: 150,
    loop: true,
    loopCount: 'Infinity',
});


// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// });

// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// });


