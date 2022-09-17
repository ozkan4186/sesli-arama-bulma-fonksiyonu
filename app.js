// const text = document.querySelector(".text");
// const btn = document.querySelector(".btn");
// const sonuc = document.querySelector(".sonuc");
// let sayi;
// btn.addEventListener("click", () => {
// if (!text.value) {
// alert("Lütefen bir kelime giriniz");
// if (text.value.Match(/[aeiıoöuü]/gi) === null) {
// sayi = 0;
// } else {
// sayi = text.value.Match(/[aeiıoöuü]/gi).length;
// }
// // sonuc.innerText = `<p>There are ${text.value.Match(/[aeiıoöuü]/gi).lengt} vovels in <span style="font-size: 1rem;color: red;" >${input.value}</span</p>`;}
// });
//
//
//  const g=[t,b,c,d]
// console.log();
// const text = document.querySelector(".text");
// const btn = document.querySelector(".btn");
// const sonuc = document.querySelector(".sonuc");
//
//
//
// btn.addEventListener("click", () => {
// if (!text.value) {
// alert("kelime yada cümle giriniz");
// }
// if (text.value.match(/[aeiıoöuü]/gi) == null) {
// sayi = 0;
// } else {
//  let sayi = text.value.match(/[aeiıoöuü]/gi).length;
// // sonuc.innerHTML = `<p> <span style="color: black ; font-size:2rem" >There are </span>${sayi} vowels in  <span style="font-size: 2rem; color: red ">${text.value}</span></p>`;
//
//
//
//
// }
// });
// const text = document.querySelector('.text')
// const btn = document.querySelector('.btn')
// const sonuc = document.querySelector('.sonuc')
//
// const vowels = ["a", "e", "i", "o", "u"];
//
// function seslisay(text) {
// let counter = 0;
//
// for (let i of text.value.toLowerCase()) {
// if (vowels.includes(i)) {
// counter++;
// }
// }
//
// return counter;
// }
//
//
// function sessizsay(text) {
// let counter = 0;
//
// for (let i of text.value.toLowerCase()) {
// if (!vowels.includes(i)) {
// counter++;
// }
// }
//
// return counter;
// }
// btn.addEventListener('click', () => {
// if (!text.value) {
// alert('kelime yada cümle giriniz')
// } else {
// sonuc.innerHTML = `<p>
// ${seslisay(text)} tane sesli , ${sessizsay(text)} tane sessiz harf var
//  <span style="font-size: 2rem; color: red ">${input.value}</span>
//  </p>`;
// }
// console.log([...text.value]);
// })
//

// const text = document.querySelector('.text')
// const btn = document.querySelector('.btn')
// const sonuc = document.querySelector('.sonuc')

// let sayi;

// btn.addEventListener('click', () => {
// if (!text.value) {
// alert('kelime yada cümle giriniz')
//  {
// if (text.value.match(/[aeiıoöuü]/gi) == null) {
// sayi = 0;

// } else{
// sayi = text.value.match(/[aeiıoöuü]/gi).length
// console.log(sayi);

// }

// }
// }else{
// sonuc.innerHTML = `<p>
// There are ${text.value.match(/[aeiıoöuü]/gi).length} vowels in
// <span style="font-size: 2rem; color: red ">${input.value}</span>
//  </p>`;
// }
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const sonuc = document.querySelector(".sonuc");

const vowels = ["a", "e", "i", "o", "u"];

function seslisay(text) {
  let counter = 0;
  for (let i of text.value.toLowerCase()) {
    if (vowels.includes(i)) {
      counter++;
    }
  }
  return counter;
}

function sessizsay(text) {
  let counter = 0;
  for (let i of text.value.toLowerCase()) {
    if (!vowels.includes(i)) {
      counter++;
    }
  }
  return counter;
}
btn.addEventListener("click", () => {
  if (!text.value) {
    alert("lütfen kelime giriniz");
  } else {
    sonuc.innerHTML = `<p> <span style="font-size: 2rem; color: papayawhip;">${seslisay(
      text
    )}</span>
    <span style="font-size: 3rem; color: cyan;  ">tane sesli</span> , <span style="font-size: 2rem; color: palegreen;">${sessizsay(text)}</span> <span style="font-size:3rem; color: darksalmon; " >tane sessiz harfvar </span>
    <span style="font-size: 2rem; color: red ">${input.value}</span> <p> `;
  }
});
