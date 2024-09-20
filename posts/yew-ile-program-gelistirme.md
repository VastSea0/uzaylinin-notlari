---
title: '🦀 Yew çerçevesi ile program yazarken kullandığım temel adımlar'
date: '2024-09-21T00:19:00'
---

Herkese merhabalar bu yazımda aslında daha cok kendim için bir şeyler yazacağım bunun nedeni öğrenme sürecimde sürekli yapacağım temel adımları en baştan not almak ve bu şekilde kendi kaynağımdan öğrenebilmek. Yine de bu sizinde benim notlarımdan yararlanamyacağınız anlamına gelmiyor bu nedenle özgür hissedebilirsiniz.

Öncelikle şu dönem hakkında konuşacak olursam; Rust öğrenirken biraz acele ediyorum gibi geliyor, bir an önce büyük projelere girişmek istiyorum; hatta bazen buna girişiyorum ancak genelde kendime hatırlattığım şey yine bu aceleliğim ve doğru öğrenmemin bu olmaması. Beni belki biliyorsunuzdur bu aralar özellikle yapay zeka kullanımını azaltmayı hedefliyorum. Yapay zeka kullanmadan kendi başıma kendi bilgimle özgürce bir şeyler yapayım istiyorum çünkü benim gibi fark edenler anlayacakır maalesef yapay zeka sandığımız kadar iyi bir dost olmuyor o bizim yerimize kod yazarken aslında öğrenme sürecimizi çok sağlıksız bir çıkmaza sokuyoruz. Ve buna bir dur demenin vakti gelince rust gibi bir dil öğrenme fikri aklıma geldi biraz düşününce belki iyi bir fikirdir diye düşünüp başladım ve en büyük hedefim yapay zeka kullanmadan Rust dilinde sıfırdan proje yazmak. Bunun içinse şu an olduğu gibi bildiklerimi not alıp kendi kaynağımı oluşturmalıyım.

O halde lafı daha fazla uzatmadan şu dakikadan itibaren geliştirceğim bir notepad programını Yew ile yazalim...

```Rust
use yew::prelude::*;

fn main() {
    println!("Hello, world!");
}

```
şu an ilk olarak yaptiğim iki sey var.  
  - *Birincisi:* `yew = "0.21.0"` bu satırı Cargo.toml dosyama ekleyerek çerçeveyi proeje eklemek
  - *İkincisi:* `use yew::prelude::*;` ile kütüphaneyi main dosyasına eklemek 

Daha sonra ise ana yapıyı yazağız bunun için;
  - Bir `index.html` ve bir `index.css` (scss olabilir) dosyası oluşturmak
  - `Trunk.toml` dosyası oluşturup Trunk için config yazmak

index.html dosyamız genel olarak şuna benzer bir şey olmalı;

```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Yew App</title>
    <link data-trunk rel="rust" />
    <link data-trunk rel="sass" href="index.scss" />

</head>
<body>

</body>
</html>
```
Ve şu an için stil dosyamız boş kalabilir.

Trunk.toml dosyası ise;
```Toml
[build]

dist = "dist"
assets = ["index.scss"]

[serve]
open = true
# The address to serve on LAN.
address = "127.0.0.1"
# The address to serve on WAN.
# address = "0.0.0.0"
# The port to serve on.
port = 8000
```
Böyle olamlı...

Şu an içim projeyi yazmaya başlayabiliriz o halde `main.rs` dosyasına gidip onu düzenlemeye başlamalıyım...,

Başlamdan önce yapacağım projeyi daha iyi bilmek adına yapay zekadan projenin detaylarını istiyeceğim (Konseptim bu bir ödev gibi yapıyorum).
Tamam! Not Defteri Uygulaması için özellikler şu şekilde olabilir:

---
### **Not Defteri Uygulamasının Özellikleri:**

1. **Not Ekleme**:
   - Kullanıcılar, bir başlık ve içerik girerek yeni not ekleyebilir.
   - Notlar bir liste olarak görüntülenir ve her yeni eklenen not bu listeye eklenir.

2. **Not Silme**:
   - Kullanıcılar istedikleri notları silebilir.
   - Silinen not, listeden anında kaldırılır.

3. **Not Düzenleme**:
   - Kullanıcı, daha önce eklediği bir notu düzenleyebilir.
   - Notun başlığını ve içeriğini güncelleyip kaydedebilir.

4. **Yerel Depolama (localStorage) Entegrasyonu**:
   - Uygulama, tarayıcıda yerel depolamayı kullanarak notları kaydeder.
   - Sayfa yenilendiğinde veya uygulama kapatılıp açıldığında notlar yerel depolamadan geri yüklenir.

5. **Arama/Filtreleme (Opsiyonel)**:
   - Kullanıcılar, notları başlıklarına veya içeriklerine göre arayabilir.
   - Arama kutusuna yazılan metne göre not listesi dinamik olarak filtrelenir.

6. **Mobil ve Masaüstü Uyumlu Tasarım**:
   - Uygulama, farklı cihazlar için uyumlu olacak şekilde responsive olmalıdır.
   - Mobilde ve masaüstünde rahatça kullanılabilir.

Bu özellikler, uygulamanın temel işlevselliğini oluşturacak.

---

Tamam yapay zeka bana bunları söyledi o halde bu tıpkı bir Todo list gibi işeleyecek ancak bu sefer daha geniş kapmsamlı olacak ve planım şu şekilde;
- JSON nesnesi oluştur bu bütün notları tutsun
- Nesnenin içine notları ekle nesne içeriği; notun adı, tarihi ve içeriği gibi spesifik bilgileri kapsasın
- Bir JSON parser fonksiyonu oluşturalim ve map fonksiyonu ile her birini listeleyim.
- Bir modal benzeri yapı ile defter içeriğini görelim.

O halde ilk olarak bir json parser yapacağım, Rust'ın kendi belgelendirmesine girip kütüphane hakkında bilgi edineceğim.
[Kaynak](https://docs.rs/json/latest/json/) Sanırım bu işimi görücek

tamam şimdi ise 
- öncelikle Cargo.toml dosyasına `json = "0.12.4"` bu satırı ekliyoruz.
- ```Rust
  use yew::prelude::*;
  use json;
  use json::object;
  ``` İle gerekli importları yapiyorum.
İşte önrek bir parse işlemi:

```Rust
    let parsed = json::parse(r#"
    {
        "note-623451": {
            "id": 623451,
            "name": "helo",
            "content": "Text Content"
        },
        "note-125436": {
            "id": 125436,
            "name": "helo 2",
            "content": "Text Content"
        },
        "note-123465": {
            "id": 123465,
            "name": "helo 3",
            "content": "Text Content"
        },
        "note-123564": {
            "id": 123564,
            "name": "helo 4",
            "content": "Text Content"
        }
    }
    "#).unwrap();

    println!("{}", parsed["note-623451"]["id"]);
```

Uyanınca devam edicem .d 🦀
