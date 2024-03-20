let menu = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let navlist = document.querySelector('.nav');
const rightHidden = document.querySelectorAll('.right-hidden');
const leftHidden = document.querySelectorAll('.left-hidden');

menu.addEventListener("click", ()=> {
    navlist.classList.toggle('active');

    if (close.classList.contains('close')) {
        
        close.classList.toggle('menu-active');
        menu.classList.remove('menu-active');
    }
});

close.addEventListener("click", ()=> {
    navlist.classList.toggle('active');


    menu.classList.add('menu-active');
    close.classList.remove('menu-active');
});

window.onscroll = () => {
    navlist.classList.remove('active');

    
    if (close.classList.contains('menu-active')) {
        close.classList.remove('menu-active')
        menu.classList.add('menu-active')
    }
};

// intersection obsever animations

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        entry.isIntersecting && entry.target.classList.add('display');
        // if (entry.isIntersecting) observer.unobserve(entry.target)

    })
  }, {
    threshold: 0.5,
  }
  );

  leftHidden.forEach((el) => observer.observe(el));
  rightHidden.forEach((el) => observer.observe(el));