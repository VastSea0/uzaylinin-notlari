---
title: 'Rust programlama: Yew ile önyüz geliştirirken geçirdiğim süreç gün 2'
date: '2024-09-22T01:42:00'
---

<div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-500">
    <div className="p-6">
    <h2 className="text-2xl font-semibold text-purple-300 mb-4">Bu yazının şarkı listesi</h2>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6EC30XIUthkln6JpH80wyd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <hr />
       <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0xWB2vkNuXO9f31e9FsuJw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
</div>

Evet uyanınca devam edeceğim demiştim ve tekradan devam etme kararı aldım. Gece anlık olarak 1:45 🦀 her neyse şimdi tekrardan yazmaya başladım ve kaldığım yerden rust yazmaya devam edeceğim öncelikle RustRover'ı açıyorum ve kodlarımı yazmaya başlayacağım

Açmadan önce sizlere yeni masaüstümü göstermek isterim :). MacOS tarzı bir tasarıma döndüm...

![Uzayli'nin Masaüstü](https://github.com/user-attachments/assets/6067763a-5879-4143-b56d-a7903f83a32a)

Evet şu anda en son JSON parses yapmıştık şimdi ise aklıma iki fikir geldi birincisi JSON tabanlı bir sistem kullanmak ikincisi ise `Vector` tabanlı bir sistem kullanmak eğer `Vector` kullanabilirsem mantık şu şekilde; vectorun içine kümeler (diziler) eklicez ve zaten Rust'ta her küme sabit boyutta kalması gereksede şu anda zaten yine 3 elemanlı sabit kümeler olacağın bu bize sorun yaratmmayacaktır belki tuple kullanırız çünkü idleri saklarken `i32` veri türünü kullanmamız gerekir ancak burada düşündüğüm şey vectorun içine nasil sürekli kümeler ekleyeceğiz bunun için yapay zekaya soracağım ve ondan bir örnek isteyeeğim.

Tamam şu anda o zaman bu vector sistemi daha hızlı olabilir.

```Rust
fn main() {
    // Üç elemanlı tuple içeren bir vektör tanımlıyoruz
    let mut my_vec: Vec<(i32, String, String)> = Vec::new();

    // Vektöre tuple'lar ekleyelim
    add_tuple_to_vector(&mut my_vec, 1, "First".to_string(), "Element".to_string());
    add_tuple_to_vector(&mut my_vec, 2, "Second".to_string(), "Element".to_string());
    add_tuple_to_vector(&mut my_vec, 3, "Third".to_string(), "Element".to_string());

    // Spesifik bir demete erişelim: örneğin vektördeki ikinci elemana
    if let Some(demet) = my_vec.get(1) { // 1. indeks ikinci elemanı temsil eder
        println!("Demet: ({}, {}, {})", demet.0, demet.1, demet.2);

        // Demetin belirli elemanlarına erişim
        println!("Birinci eleman (i32): {}", demet.0); // i32 olan eleman
        println!("İkinci eleman (String): {}", demet.1); // Birinci String eleman
        println!("Üçüncü eleman (String): {}", demet.2); // İkinci String eleman
    }

    // Spesifik bir demetin elemanlarını değiştirelim
    if let Some(demet) = my_vec.get_mut(1) { // `get_mut` ile mutable (değiştirilebilir) referans alıyoruz
        demet.1 = "Updated Second".to_string(); // İkinci elemanı güncelleyelim
    }

    // Güncellenmiş tuple'ı yazdıralım
    if let Some(demet) = my_vec.get(1) {
        println!("Güncellenmiş Demet: ({}, {}, {})", demet.0, demet.1, demet.2);
    }

    // Vektördeki tüm elemanları yazdıralım
    for (num, s1, s2) in &my_vec {
        println!("({}, {}, {})", num, s1, s2);
    }
}

// Vektöre tuple ekleyen fonksiyon
fn add_tuple_to_vector(vec: &mut Vec<(i32, String, String)>, num: i32, s1: String, s2: String) {
    vec.push((num, s1, s2));
}
```

Yapı bu şekilde olacak ve bu bizim şu an istediğimiz neredeyse her özelliği kapsiyor bu nedenle bunu fonksiyonlara bölüp daha güzel bir kullanım sağlayacağım. Ve yapay zekaya daha profosyonel bir mimarı nasil kullanırım bunu soracağım.

Tamam proje dizin yapısı ise şu anda
```
src/
│
├── main.rs                # Ana dosya
├── data_manager.rs         # Vektör yönetimiyle ilgili dosya
└── components/             # components klasörü
    ├── mod.rs              # list.rs ve view.rs dosyalarını buradan tanıtıyoruz
    ├── list.rs             # Listeleme fonksiyonu
    └── view.rs             # Görüntüleme fonksiyonu
```

BU şekilde duruyor bütün compontentleri ayırdım ve main dosyam şu anda
```Rust
mod data_manager;
mod components;

use components::list::list_tuples;
use components::view::view_tuple;
use data_manager::{add_tuple_to_vector, initialize_vector, delete_tuple_from_vector};

fn main() {

    let mut my_vec = initialize_vector();


    add_tuple_to_vector(&mut my_vec, 1, "First".to_string(), "Element".to_string());
    add_tuple_to_vector(&mut my_vec, 2, "Second".to_string(), "Element".to_string());


    delete_tuple_from_vector(&mut my_vec, 2, "Second".to_string(), "Element".to_string());
    
    list_tuples(&my_vec);

    view_tuple(&my_vec, 2);
}

```
 bu şekilde duruyor ikende data manager ise
```Rust
// data_manager.rs

pub fn initialize_vector() -> Vec<(i32, String, String)> {
    Vec::new()
}

pub fn add_tuple_to_vector(vec: &mut Vec<(i32, String, String)>, num: i32, s1: String, s2: String) {
    vec.push((num, s1, s2));
}

pub fn delete_tuple_from_vector(vec: &mut Vec<(i32, String, String)>, num: i32, s1: String, s2: String) {
    vec.retain(|tuple| !(tuple.0 == num && tuple.1 == s1 && tuple.2 == s2));
}
```
Böyle duruyor şu an yapımız tamamen hazır görünüyor

![konsol çıktısı](https://github.com/user-attachments/assets/060a0451-df39-40d0-b9cc-09a7b8a85617)
Konsol çıktısı şu an böyle göründüğüne göre önyüze başlayabiliriz...

Ön yüze başlamadan önce ön yüz için bir yazı daha yazacağım bu yazı aslında yine bana kaynak olacak bunun nedeni yew çerçevesinde arayüzde inputtan bilgi almak veya vermek göstermek için kullanacağımız işlerimi not alacağım o nedenle bu yazıyı şu anda part 1 olarak commitleyip daha sonra o yazıyı yazacağım ve buraya tekrar döneceğim...

Tamam şimdi bütün her şeyi yazdım ve bitti

```Rust
mod data_manager;
mod components;

use log::log;
use yew::prelude::*;
use components::list::list_tuples;
use components::view::view_tuple;
use data_manager::{add_tuple_to_vector, initialize_vector, delete_tuple_from_vector};

struct NotePad {
    vector: Vec<(u32, String, String)>,
    index: u32
}

#[derive(Debug, PartialEq)]
pub enum Msg {
    AddOne(u32, String, String),
    RemoveOne(u32),
    ListVector,
    ViewTuple(u32),
}

impl Component for NotePad {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {

        let vector = initialize_vector();
        let index:u32 = 1;
        Self {
            vector,
            index,
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {

            Msg::AddOne(id, title, content) => {
                self.index += 1;
                add_tuple_to_vector(&mut self.vector, id, title, content);

                true
            }

            Msg::RemoveOne(id) => {

                delete_tuple_from_vector(&mut self.vector, id);
                if self.index == 0 {
                    self.index = 1
                } else {
                    self.index -= 1;
                }
                true
            }

            Msg::ListVector => {
                list_tuples(&self.vector);

                false
            }

            Msg::ViewTuple(id) => {
                view_tuple(&self.vector, id as usize ); //Fix: Type mismatch [E0308]expected `usize`, but found `i32`
                log::info!("helo");

                false
            }
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let vector_display = self.vector.iter().map(|(id, title, content)| {
            html! { <p>{ format!("ID: {}, Title: {}, Content: {}", id, title, content) }</p> }
        });

        let index = self.index.clone();
        html! {
            <div>
                <button onclick={_ctx.link().callback(move |_| Msg::AddOne(index, "First".to_string(), "Element".to_string()))}>
                    { "Add  Tuple" }
                </button>

                <button onclick={_ctx.link().callback(move |_| Msg::RemoveOne(index))}>
                    { "Remove Tuple" }
                </button>
                <button onclick={_ctx.link().callback(|_| Msg::ListVector)}>
                    { "List Tuples" }
                </button>
                <button onclick={_ctx.link().callback(|_| Msg::ViewTuple(1))}>
                    { "View First Tuple" }
                </button>

               <p >  { for vector_display }  </p>
                <p>  {index} </p>
            </div>
        }
    }
}

fn main() {
    yew::Renderer::<NotePad>::new().render();
}

```

`trunk serve` ile projemi başlattım ve şu anda başarılı şekilde yerel ağımda çalıştı

![resim](https://github.com/user-attachments/assets/90343bca-3f64-4c86-8765-6b8bd1be61b4)

 
Ve şimdi butonlara basıp sonucu göreceğim

![resim](https://github.com/user-attachments/assets/604a96e9-0621-4478-9b2d-b1cc7cbd4dba)


Ancak şu an aklıma takılan nokta bu projenin aynısını JavaScript ile daha kolay yapabilirim bu nedenle biraz araştırma yapıp spesifik alana yönelmeyi düşüneceğim.
