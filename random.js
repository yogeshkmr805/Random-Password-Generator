gen = () =>
{

const alpha = 'ABCDEFghiJklMNOpqrsTUVWxyZabcefgh';
const num = '0123456789';
const spec = '!@#$&';
let a ='';
for (let i = 0 ; i<4 ; i++)
{
    a += alpha.charAt(Math.floor(Math.random()*alpha.length));
}

let n ='';
for (let i = 0; i<3 ; i++)
{
    n +=num.charAt(Math.floor(Math.random()*num.length));
}

let s ='';
for(let i =0 ; i<1 ; i++)
{
    s +=spec.charAt(Math.floor(Math.random()*spec.length));
}

let show = document.getElementById("show");

  show.innerHTML = `<h1>${a+n+s}</h1>`;
}