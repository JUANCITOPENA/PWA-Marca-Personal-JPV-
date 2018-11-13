const h1 = document.documentElement.scrollHeight;
const h2 = document.documentElement.clientHeight;

const scrollUnit = (h1 - h2) /100;

const rootStyles = document.documentElement.style;

addEventListener('scroll', () => {
    //console.log(Math.round(scrollY / scrollUnit))
    rootStyles.setProperty('--width',Math.round(scrollY / scrollUnit))
});

