---
title: "Javascript Blog yazısı gün 2: Bazı JavaScript Fonksiyonları "
date: '2024-07-29T09:51:00'
---

Bu tür yüksek fonksiyonlar girdi olarak bir başka fonksiyon alan ve bir değişken döndüren fonksiyonlardır.



<div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-500">
    <div className="p-6">
    <h2 className="text-2xl font-semibold text-purple-300 mb-4">Bu yazının şarkı listesi</h2>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4GutydtMcQzh5hlI9W4wAO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <hr />
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7LjTwWZVGyhqOKXlK4QiEm?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
</div>




Örnek

```JavaScript
const callbackfunc = (n) => {
    return n ** 2 // üssünü al
}

function cube(callback, n){
    return calback(n) * n
}

console.log(cube(calbackfunc, 3))

```
Ve bu fonkisyonlar içlerinde bir başka fonksiyonu döndürebilir demiştim buna bir örnek vereyim

```JavaScript
const a = (sayi1) => {
    const b = (sayi2) => {
        const c =(sayi3) =>{
            return sayi1 + sayi2 + sayi3
        }
        return c
    }
    return b
}

console.log(
    a(5)(10)(20) // burada her fonksiyon için değer girebilirim 
)

```
## FOREACH FONKSİYONU

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
az önce böyle fonksiyon yazdım, sırf eğlencesine oldu siz bunu takmayın.

## document.write fonkisyonu 

Adındanda anlayabileceğimiz üzere belgeye veri yazdırır.

```JavaScript 
document.write("helo")
```

## document.writeln fonkisyonu 

Az önceki değişken gibidir ancak bu diğer fonksiyonun aksine yeni satıra yazdıdır

```JavaScript 
document.writeln("helo")
document.writeln("helo2")
```

## typeof fonkisyonu 

bu fonksiyon yine adından anlayacağımız üzere değişkenin türünü çağırmak için kullanıılır

```JavaScript 
let helo =  "helo";
let heloama2 = 2;

console.log(typeof.helo) //string
console.log(typeof.heloama2) //number

```

## promt fonkisyonu 

Kullanıcıdan girdi almak için kullanılır

```JavaScript 
let helo = promt("helo, pick a number");
// tam hatırlamıyorum ancak bu böyle bir şeydi...

```

## break fonkisyonu 

Her hangi bir döngüyü kırmak için kullanılır. Örnek olarak ben döndümde i değerinin 6 olduğunu tespit edince durmasını isteyen bir döngü yazabilirim

```JavaScript 
for (let i = 0; i < 10; i++){
    if (i == 6){
        break;
    }
    console.log(i)
}
```
Veya switch-case içinde kullanabiliriz. Böylesine bir kullanımda ise eğer case değerimiz istediğimiz değer ile karşılanıyorsa diğer seçmeler için döngü kırılıyor.

```JavaScript 

switch(a){
    case "helo":
        console.log("helo")
        break;
    case "sa":
        console.log("as")
        break;
    default:
        console.log("helo")
        break;
}
```
Yazıya uyanınca devam etcem...