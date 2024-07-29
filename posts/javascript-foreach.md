---
title: "Javascript forEach"
date: '2024-07-29T10:04:00'
---

bu fonksiyon bizim girdiğimiz diziyi gezer


``` JavaScript
const helo = [
    1,2,3,4,5,6,7,8,9
]
let toplam = 0
helo.forEach(helo => {
    toplam += helo
})
console.log(toplam)

// çıktı 45

```
Bu fonksiyonda helo dizisini tek tek gezdi ve her gezintide toplam değerini helo dizinin o gezide ki indeks değeri ile topladı ve gezi işlemi bittiğinde elimizde dizinin değerlerinin toplanı toplam değişkenine atanmış oldu. Bizde bunu konsola yazdırdık

```JavaScript 
const helo = [
    "pılımı", "pırtımı"
]
let topla = 0
helo.forEach(helo => {
    topla += helo
})

gotur(topla)
```
az önce böyle fonksiyon yazdım, sırf eğlencesine oldu siz bunu takmayın