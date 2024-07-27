---
title: "Javascript hakkında"
date: '2024-07-24T00:00:00'
---

Bir web geliştirici olarak öğrenmemin gerekliği olduğu en önemli şey Javascripttir. Bu nedenle bu dili iyice öğrenip sıfırdan yazılım geliştirmem gerekiyor ve kendimce sanırım bir serüven başlatacağım ve Javascript üzerine yazılar yazacağım.



``` JavaScript
console.log(
    "Helo"
)
```

Zaten basit şeyleri biliyorum örnek olarak

<p className="text-2xl text-purple-200">
ATAMALAR
</p>
  
```
let a = 5;
const b = 5; 

```

<p className="text-2xl text-purple-200">
Diziler
</p>

```
let dizi1 = ["helo","melo"];
dizi1.push("elo"); // veya shift
console.log(dizi1[0]);

```

<p className="text-2xl text-purple-200">
Nesneler 
</p>

```
let egehan = {
    "name": "egehan",
    "type": "bilmiyom",
    "age": 15
    "morumsu": true
    "kity": ["pisi", "pisi2", "pisi4"]
}
console.log(egehan.kity[1]);

```

<p className="text-2xl text-purple-200">
Koşullar 
</p>

```
if (dizi1[0] == "helo"){
    console.log("helo");
} else if (dizi[0] == "melo"){
    console.log("melo");
} else {
    console.log("elo")
}

```

<p className="text-2xl text-purple-200">
Döngüler  
</p>

```
for (let i = 0; i < 5; i++){
    console.log(i);
}
```
 
<p className="text-2xl text-purple-200">
burada const kafamı karıştı o yüzden let kullandım.
</p>

```
for (let element of dizi1){
    console.log(element)
}
```
<p className="text-2xl text-purple-200">
ve birde 
</p>

```
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


```

<h2 className="text-2xl text-purple-200">
 Sıra While döngülerinde

 
</h2>
<p className="text-2xl text-purple-200"> 
while  döngüsünde koşul gerçekleştiği sürece süreki döngü devam eder
</p>

``` JavaScript

const helo = true;

while (helo){
    console.log(
        "helo"
    );
}

```

<p className="text-2xl text-purple-200">
Do While döngüsünde koşul gerçekleşeme bile döngü en az 1 kere çalışır
</p>

``` JavaScript

const helo1 = false;

do{
    console.log(
        "helo"
    );
} while (helo);

```

<p className="text-2xl text-purple-200">
Fonskiyonlar
</p>

``` JavaScript

function a(b){
    console.log(b);
}
const helo = function(b){
    console.log("helo");
}

const a = () => {
    console.log("helo");
}
```

<p className="text-2xl text-purple-200">
Sınıflar
</p>

``` JavaScript
class Helo {
    constructor() {
        this.helo = "helo";
        this.heloNum = 5;
    }

    printHelo() {
        console.log(this.helo);
    }

    sayHelo() {
        for (let i = 0; i < this.heloNum; i++) {
            this.printHelo();
        }
    }
}

const heloMelo = new Helo();
heloMelo.printHelo();  
heloMelo.sayHelo();  

```