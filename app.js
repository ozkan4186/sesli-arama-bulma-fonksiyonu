const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const sonuc = document.querySelector('.sonuc')

let sayi;

btn.addEventListener('click', () => {
  if (!text.value) {
    alert('kelime yada cümle giriniz')
 else {
    if (text.value.match(/[aeiıoöuü]/gi) == null) {
        sayi = 0;

    } else{
      sayi = text.value.match(/[aeiıoöuü]/gi).length

    }
    
  }
    }else{
        sonuc.innerHTML = `<p>
        There are ${text.value.match(/[aeiıoöuü]/gi).length} vowels in
        <span style="font-size: 2rem; color: red ">${input.value}</span>
       </p>`;
        }
      
    }
  
  
  
  

  
})










