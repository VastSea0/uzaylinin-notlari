---
title: 'Yew: Basit önyüz fonskiyonları 🦀'
date: '2024-09-22T02:37:00'
---

### 1. Temel Yapı: Komponent Tanımlama

Yew'de komponentler, `Component` trait'i kullanılarak tanımlanır. Bir komponentin üç temel kısmı vardır:
- **Properties (`props`)**: Komponente dışarıdan geçirilen verilerdir.
- **State**: Komponentin iç durumu, yani değişen veri.
- **Messages**: Kullanıcı etkileşimleri (tıklama, giriş yapma) sonucu komponenti güncelleyebileceğimiz mesajlar.

Aşağıdaki örnek, basit bir butona tıklayarak sayaç değerini arttıran bir Yew komponentini gösteriyor.

### 2. Butona Tıklama ve State Yönetimi

```rust
use yew::prelude::*;

struct Counter {
    value: i32,
}

pub enum Msg {
    Increment,
}

impl Component for Counter {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self { value: 0 }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::Increment => {
                self.value += 1;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <p>{ self.value }</p>
                <button onclick={ctx.link().callback(|_| Msg::Increment)}>{ "Artır" }</button>
            </div>
        }
    }
}
```

Bu örnekte:
- `Counter` komponenti, bir `value` değişkeni tutar.
- `Msg::Increment` mesajı, butona tıklandığında `value` değerini 1 artırır.
- `view` fonksiyonu, HTML çıktısını oluşturur ve butona tıklama olayını bağlar (`onclick`).

### 3. Input Alanından Veri Almak

Kullanıcıdan input almak için `oninput` olayını kullanarak bir callback yazabilirsin. Aşağıda input kutusuna girilen değeri saklayan bir örnek var:

```rust
use yew::prelude::*;

struct TextInput {
    value: String,
}

pub enum Msg {
    Update(String),
}

impl Component for TextInput {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            value: String::new(),
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::Update(val) => {
                self.value = val;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let oninput = ctx.link().callback(|e: InputEvent| {
            let input: HtmlInputElement = e.target_unchecked_into();
            Msg::Update(input.value())
        });

        html! {
            <div>
                <input type="text" {oninput} placeholder="İsim girin" />
                <p>{ format!("Girdiğiniz: {}", self.value) }</p>
            </div>
        }
    }
}
```

Bu örnekte:
- `HtmlInputElement` ile `input` alanına erişip, kullanıcının girdiği değeri yakalıyoruz.
- `oninput` olayı ile her değişiklikte `Msg::Update` çağrılarak state güncelleniyor ve bu güncelleme `view` fonksiyonunu tetikliyor.

### 4. Listeleme (Veri Listesi Görüntüleme)

Verileri bir liste içinde görüntülemek için Rust'ın `iter()` metodunu ve `html!` makrosunu kullanabilirsin:

```rust
use yew::prelude::*;

struct ItemList {
    items: Vec<String>,
}

impl Component for ItemList {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            items: vec!["Elma".to_string(), "Armut".to_string(), "Muz".to_string()],
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <ul>
                { for self.items.iter().map(|item| html!{ <li>{ item }</li> }) }
            </ul>
        }
    }
}
```

Bu örnekte:
- `self.items` bir vektör (vektörler dinamik büyüklükte dizilerdir) olarak tanımlanmış.
- `view` fonksiyonunda `iter().map()` kullanılarak her öğe için `html!` makrosu ile bir `li` elemanı oluşturuluyor.

### 5. DOM Elementiyle Etkileşim

Yew'de doğrudan DOM elementi ile etkileşime geçmek için `NodeRef` kullanabilirsin. Aşağıda bir input elemanına `NodeRef` ile nasıl erişileceğini gösteren bir örnek bulunuyor:

```rust
use yew::prelude::*;

struct DomInteraction {
    input_ref: NodeRef,
}

pub enum Msg {
    GetValue,
}

impl Component for DomInteraction {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            input_ref: NodeRef::default(),
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::GetValue => {
                if let Some(input) = self.input_ref.cast::<HtmlInputElement>() {
                    log::info!("Input değeri: {}", input.value());
                }
                false
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <input ref={self.input_ref.clone()} type="text" placeholder="Bir şeyler yazın" />
                <button onclick={ctx.link().callback(|_| Msg::GetValue)}>{ "Değeri al" }</button>
            </div>
        }
    }
}
```

Bu örnekte:
- `NodeRef` kullanarak DOM'daki input elementi referans alınıyor.
- Butona tıklandığında, `input_ref` ile bu elemente erişip, değerini konsola yazdırıyoruz.

Tabii! Yew çerçevesinde daha ileri seviyede öğrenmen gereken bazı önemli konuları da aşağıda sıralayacağım. Ardından, bu bilgileri kapsayan daha detaylı bir özet vereceğim.

### 6. Lifecycle Metotları (Yaşam Döngüsü)

Komponentlerin yaşam döngüsü boyunca bazı olaylar meydana gelir. Yew'de bu olaylara müdahale edebileceğin `lifecycle` metotları bulunur. Bunlar:
- **create**: Komponent ilk kez oluşturulduğunda çağrılır.
- **rendered**: Komponent her render edildiğinde (ilk oluşturma veya güncellenme sonrası) çağrılır.
- **destroyed**: Komponent DOM'dan kaldırıldığında çağrılır.

Örneğin, bir komponent DOM'a yüklendiğinde bir yan etki yaratmak istersen `rendered` metodunu kullanabilirsin.

```rust
impl Component for MyComponent {
    fn rendered(&mut self, _ctx: &Context<Self>, first_render: bool) {
        if first_render {
            // Komponent DOM'a ilk defa yüklendiğinde bir işlem yap
            log::info!("Component yüklendi!");
        }
    }
}
```

### 7. `Link` ve `Callback` Yapıları

Yew'de komponentler arasında mesajlaşmayı ve güncellemeyi sağlayan önemli yapılardan biri `ComponentLink` ve `Callback` yapılarıdır. `ctx.link()` ile komponentin mesajlarını yönetecek bir link oluşturursun.

- **`Callback`**: `Callback` yapısı bir olayı işlemek için kullanılır. Bir event meydana geldiğinde hangi mesajın gönderileceğini belirtir.

```rust
let callback = ctx.link().callback(|_| Msg::Increment);
```

### 8. Properties (Props)

Yew'de bir komponentin dışarıdan veri almasını sağlamak için `props` kullanılır. Bu, bir komponentin parametrelerle özelleştirilmesini sağlar. 

```rust
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct ButtonProps {
    pub label: String,
}

struct MyButton;

impl Component for MyButton {
    type Message = ();
    type Properties = ButtonProps;

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <button>{ &ctx.props().label }</button>
        }
    }
}
```

Bu örnekte:
- `ButtonProps` struct'ı ile butonun label'ını dışarıdan alıyoruz.
- `ctx.props()` ile bu property'e erişiyoruz.

### 9. Agents (Arka Plan İşlemleri)

Bazı durumlarda bir komponentin dışındaki işlemleri yönetmek gerekebilir. Yew'de `Agent`'lar, komponentler arasında asenkron iletişim sağlamak için kullanılır. Örneğin, bir `Worker` ile arka planda çalışan iş mantığını yöneten bir `Agent` oluşturabilirsin:

```rust
use yew::worker::*;

struct BackgroundWorker;

impl Agent for BackgroundWorker {
    type Reach = Context<Self>;
    type Message = ();
    type Input = String;
    type Output = String;

    fn create(_link: AgentLink<Self>) -> Self {
        Self
    }

    fn update(&mut self, _msg: Self::Message) {}

    fn handle_input(&mut self, input: Self::Input, who: HandlerId) {
        self.link().respond(who, format!("Received: {}", input));
    }
}
```

### 10. Router ile Sayfa Yönlendirme

Yew'de sayfa yönlendirmeleri yapmak için `yew-router` kütüphanesi kullanılır. Bu, tek sayfalık uygulamalarda (SPA) farklı sayfalar arasında gezinti yapmayı sağlar. Temel bir yönlendirme işlemi şu şekilde yapılır:

```rust
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/about"]
    About,
    #[to = "/"]
    Home,
}

struct MyApp;

impl Component for MyApp {
    type Message = ();
    type Properties = ();

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <Router<AppRoute> render = Router::render(Self::switch) />
        }
    }
}

impl MyApp {
    fn switch(route: AppRoute) -> Html {
        match route {
            AppRoute::Home => html! { <h1>{ "Anasayfa" }</h1> },
            AppRoute::About => html! { <h1>{ "Hakkında" }</h1> },
        }
    }
}
```

Bu örnekte:
- `Switch` trait'i kullanılarak URL ile eşleşen bir enum tanımlanır.
- `Router` ile hangi sayfanın render edileceği belirlenir.

### 11. Fetch API ile Veri Çekme

Dış API'lerden veri çekmek için `yew::services::fetch` modülünü kullanabilirsin. Aşağıda bir HTTP isteği örneği yer alıyor:

```rust
use yew::prelude::*;
use yew::services::fetch::{FetchService, FetchTask, Request, Response};
use serde::Deserialize;

#[derive(Deserialize, Debug, Clone)]
struct ApiResponse {
    message: String,
}

struct FetchExample {
    task: Option<FetchTask>,
    data: Option<String>,
    link: ComponentLink<Self>,
}

pub enum Msg {
    FetchData,
    ReceiveData(String),
}

impl Component for FetchExample {
    type Message = Msg;
    type Properties = ();

    fn create(link: ComponentLink<Self>) -> Self {
        Self {
            task: None,
            data: None,
            link,
        }
    }

    fn update(&mut self, msg: Self::Message) -> bool {
        match msg {
            Msg::FetchData => {
                let request = Request::get("https://api.example.com/data")
                    .body(Ok(()))
                    .expect("Could not build request.");

                let callback = self.link.callback(|response: Response<Result<String, anyhow::Error>>| {
                    let (meta, body) = response.into_parts();
                    if meta.status.is_success() {
                        Msg::ReceiveData(body.unwrap())
                    } else {
                        Msg::ReceiveData("Error fetching data".to_string())
                    }
                });

                let task = FetchService::fetch(request, callback).expect("Failed to start request");
                self.task = Some(task);
                false
            }
            Msg::ReceiveData(data) => {
                self.data = Some(data);
                true
            }
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <button onclick={self.link.callback(|_| Msg::FetchData)}>{ "Veri Getir" }</button>
                { if let Some(ref data) = self.data {
                    html! { <p>{ data }</p> }
                } else {
                    html! { <p>{ "Veri bekleniyor..." }</p> }
                }}
            </div>
        }
    }
}
```

Bu örnekte:
- Fetch API ile `GET` isteği yapıyoruz.
- `ReceiveData` mesajı ile API'den gelen veri güncelleniyor ve ekrana basılıyor.

---

### Detaylı Yew Özeti

Yew, Rust ile modern, hızlı ve güvenli web uygulamaları geliştirmek için kullanılan güçlü bir front-end framework'üdür. React benzeri bir yapıyla çalışan Yew, Rust’ın tip güvenliği ve bellek yönetimi avantajlarını web geliştiricilerine sunar.

Yew kullanarak komponent bazlı bir yapı inşa edersin. Her komponent kendi durumunu (`state`) ve mesajlarını (`message`) yönetebilir. Kullanıcı etkileşimleri (tıklamalar, form girdileri) `Message` türleriyle ele alınır ve state, bu mesajlara göre güncellenir.

Komponentlerin yaşam döngüsü boyunca `create`, `update`, `view`, `rendered` gibi fonksiyonlar kullanılarak DOM'a etkileşimli içerik eklenebilir. Veri çekme işlemleri (API'lerden) `FetchService` ile kolayca yönetilebilir. Router ile sayfalar arasında gezinmek ve SPA (Single Page Application) yapıları oluşturmak da mümkündür.

Kapsayıcı yapısıyla Yew, Rust'ın sağladığı güçlü bellek yönetimi, tip güvenliği ve performans avantajlarını kullanarak, güvenli ve etkili web uygulamaları geliştirmene yardımcı olur.
