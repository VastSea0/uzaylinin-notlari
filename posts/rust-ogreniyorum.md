---
title: 'Rust programlama Öğrenme Sürecim 🦀'
date: '2024-09-14T01:22:00'
---

<img src="https://doc.rust-lang.org/stable/book/img/ferris/not_desired_behavior.svg" />


## Rust Programlama Öğreme Sürecim 🦀...

Herkese uzun bi aradan sonra tekrardan merhabalar. Evet bir süredir yazı yazmıyordum ama arayı daha fazla uzatmadan tekrar editörümü açtım ve yazmaya başladım...

Bugünkü yazının konusu görmüş olduğunuz üzere Rust programlama öğrenme sürecim hakkında olacak. Bu yazı ile hem öğrendiklerimi tekrar edeceğim hem de sizlere öğrenme yolculuğumu anlatmış olacağım...

O halde başlayalım...

### **Neden Rust?** 

Bu çevremde Rust öğrenmeye başladığımı duyan kişilerin söylediği klasik şey ve bu yüzden sizler de merak etmeden söylemek istiyorum... Aslında Rust öğrenmemin en büyük sebebi istiyor olmam, Rust bana gerçekten çok çekici gelen bir dil ve "Low Level" dil öğrenmek zaten aklımda olduğundan benim için en iyi seçenek Rust olacaktı. Yoksa öncesinde C++ gibi dilleri öğrenmeye başlayacaktım ancak bir türlü olmamıştı bunun sebebi gerek yapacağım projelerin spesifik dil ile uyumsuz olmasız ve dilin bana Rust kadar çekici gelmemesiydi... Ayrıca geç olmadan Rust geliştirici arasında olmanın bana daha çok şey katacağını düşünüyorum... Ve Servo gibi projelerde yer almak gerçekten istiyorum bunuda tabii ki Rust gibi dille yapmak istiyorum. Başka bir sebep de sayacaksak bu son olarak sanırım bir dili gerçekten çok iyi bilme isteğim olabilir. Çünkü o an gerçekten özgürlüğü hissedeceğim. Bu belki JavaScript olacaktı ancak JavaScript konusunda oldukça fazla hata yaptım ve bu öğrenim sürecimi maalesef bozdu bu nedenle yeni bir hevesle yeni bir dilde hatalarımdan ders alarak öğrenemk daha iyi olacaktır diye düşündüm.

Ve bence yengeç çok tatli 🦀🦀... 

###  **İlk Haftam Ve İlk Bakış**

Öncelikle itiraf etmeliyim geç olmadan vazgeçmeyi bile düşündüm çünkü biraz dili araştırmaya başlayınca söz dizimi oldukça korkuttu ama sonrasında üzerine biraz daha düşünüp başlama kararı aldım.

İlk haftam dil hakkında kaynak ve genel bilgi edinmekle geçti bu sayede dili daha iyi tanıyacaktım ve bir seye ihtiyacım olduğunda nereye bakacağım hakkında biraz fikrim olmasını sağladı.

Sonrasında youtube üzerinden önce türkçe videolarla dili kendi dilimde dinleyerek daha iyi temellere oturturdum. Yine de türkçe kaynağın çok az olmasından dolayı İngilizce videolar izlemek zorundada kaldım, aslına bakarsak İngilizce videolar daha detaylı ve daha kaliteli ancak benim ingilizce seviyem maalesef o kadar fazla şeyi anlayacak kadar iyi değil anlıyorum anlamasına ancak kişinin kurduğu 10 cümleden belki 6 tanesini tamamen doğru anliyorum bazıları tamamen belirsiz bazıları ise yanlış diyelim. Rahat edebilmem için önce belirsizliklerden uzaklaşıp neyin en olduğunu kavramam lazım. Yine eksik kalan kısımları Chat-GPT'ye sorarak bizzat onun bir kaynak olmasını sağladım ve ona sorular sorarak anladığım şeylerin doğrulunu kontrol ettim.

Projeleri geliştirirken ise yapay zekadan bir yol haritası istedim bu yol haritası beni `yew` çerçevsini öğrenmeme başlamam için bilmem gereken şeyleri öğrenmemi sağlayacak projeleri içerecekti ve doğru hatırlıyorsam 7 proje ile bu seviyeye gelebilecektim. Ve projeleri yazmak için yola koyuldum... Zaten aşağıda güncel projeleride inceledimde... Umarım 2. haftada veya 3. haftada WASM geliştirmeye başlayıp web alanında Rust yeteneklerimi geliştirim...

**İlk Rust Projem**

İzlediğim bir youtube videosundan yola çıkarak `enum`, `struct` ve standart kütüphaneyi kullanarak kavramları anlamamı sağlayan proje geliştirdim. Proje bir işe yaramasada bu kavramları ve kullanımları anlamam açısından iyi bir başlangıç oldu. Yaptığım proje bir oyunun yapısına çok benzediğinden bundan sonraki projemde küçük bir oyun oldu tabi ki.

[İlk rust Projem](https://github.com/VastSea0/my-first-rust-app)


**Arcana's Legacy**

Rust öğrenirken veya başka her hangi bir dili öğrenirken en önemli şeylerden birisi kesinlikle pratik yapmaktır. Dili kavrayıp kavramadığımı ölçer ve kavramamıza büyük etikleri olur. Sanırım yaparak öğrenme dedikleri şey direkt olarak bunuda temsil ediyor olabilir. 

Bende bu nedenle bir oyun yapmanın daha yararlı olabileceğini düşündüm ve minik bir terminal oyunu yapmaya karar verdim.

Kullanıcı karakterini seçip oyundaki senaryolar ve diyaloglar üzerinden küçük bir macera yaşayacaktı ancak sıkılıp daha fazla devam etmedim ve projeyi bıraktım

[Arcana's Legacy](https://github.com/VastSea0/arcanas-legacy)


**Hesap Makinesi**

Ardından bir klasik yazılım projesi olan hesap makinesi yapmaya karar verdim ve Rust üzerinde yazdığım ilk hesap makinesini bitirdim.

Hesap makinesi yalnızca 4 temel işlemi yapabilsede Rust'ta bulunan `match` işlemini öğrenmeme yardım eden bir proje oldu ve bunun üstüne  `.trim()` işlevinide öğrendim ve bunun üzerine notlar aldım.

```Rust
use std::io;

fn main() {
    println!("Hello, world!");
    println!("Welcome to calculator!");

    // Değişkenler String olarak başlatılıyor
    let mut number_one = String::new();
    let mut number_two = String::new();
    let mut islem = String::new();

    // İlk sayıyı kullanıcıdan alıyoruz
    println!("Please enter the first number");
    io::stdin().read_line(&mut number_one).unwrap();

    // İlk sayıyı integer'a çeviriyoruz
    let number_one: i32 = match number_one.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input for number one");
            return;
        }
    };

    // İkinci sayıyı kullanıcıdan alıyoruz
    // Burada `println!` makrosu ile kullanıcıya bir mesaj veriyoruz
    // ve "Please enter the second number" mesajını konsola yazdırıyoruz.
    // Ardından `io::stdin().read_line(&mut number_two)` ile
    // kullanıcının klavyeden girdiği değeri alıyoruz.
    // `read_line` fonksiyonu, kullanıcının girdiği değeri `number_two`
    // değişkenine yerleştirir ve bu değişkenin tipi String olmalıdır.
    // `.unwrap()` ise bu işlem sırasında oluşabilecek hataları yakalamak
    // için kullanılır. Eğer bir hata olursa, program burada panikleyerek
    // hata mesajı gösterir.
    println!("Please enter the second number");
    io::stdin().read_line(&mut number_two).unwrap();


    // İkinci sayıyı integer'a çeviriyoruz
    // Kullanıcının girdiği değeri önce .trim() ile baştaki ve sondaki
    // boşluklardan arındırıyoruz. Ardından .parse() fonksiyonu ile
    // bu değeri i32 türüne çeviriyoruz. Eğer dönüşüm başarılı olursa
    // Ok(num) döner ve 'num' değişkenine atanır. Başarısız olursa
    // Err(_) döner ve "Invalid input" mesajı verip program sonlandırılır.
    let number_two: i32 = match number_two.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input for number two");
            return;
        }
    };

    // İşlem türünü alıyoruz
    println!("Please enter the transaction (+, -, *, /)");
    io::stdin().read_line(&mut islem).unwrap();

    let islem = islem.trim();  // Boşlukları temizliyoruz

    //.trim() fonkisyonu boşlukları temizler
    // fonksiyonu bir String veya &str üzerindeki baştaki ve
    // sondaki boşluk karakterlerini (space, tab, newline, vb.)
    // temizler. trim() fonksiyonu, karakter dizisinin içindeki
    // boşlukları etkilemez, yalnızca başında ve sonunda
    // yer alanları kaldırır.
    // Örnek:
        // let input = "   Hello, world!   ";
        // let trimmed = input.trim();
        // println!("'{}'", trimmed);  // Çıktı: 'Hello, world!'


    println!("Number one: {}", number_one);
    println!("Number two: {}", number_two);
    println!("islem: {}", islem);

    // İşleme göre sonucu hesaplıyoruz

    match islem {
        "+" => {
            println!("+");
            let result = number_one + number_two;
            println!("Result: {}", result);
        },
        "-" => {
            println!("-");
            let result = number_one - number_two;
            println!("Result: {}", result);
        },
        "*" => {
            println!("*");
            let result = number_one * number_two;
            println!("Result: {}", result);
        },
        "/" => {
            // Bölme işleminde ikinci sayının sıfır olup olmadığını kontrol ediyoruz
            if number_two != 0 {
                println!("/");
                let result = number_one / number_two;
                println!("Result: {}", result);
            } else {
                println!("Error: Division by zero is not allowed.");
            }
        },
        _ => panic!("Invalid Transaction!"),
    }
}
```

[Hesap Makinesi](https://github.com/VastSea0/rust-calc)

**Dosya yöneticisi**

Ve bunlardan sonra yaklaşık 50 dakika süren standart kütüphanenin dosya işlemlerini anlatan videodan yararlanarak metin tabanlı bir dosya yöneticisi yaptım. Ve ilk defa bu proje ile Rust üzerinde `mod` işlevini (modül import etme işlevidir) kullanarak dışarıdan başka bir dosyayı `main.rs` dosyama import ettim.

```Rust

pub fn create_dir(dir: &str){
    let path = &dir;
    let is_path = std::path::Path::new(path);
    if !is_path.exists(){
        let create_dir_result = fs::create_dir(dir);
        match create_dir_result {
            Ok(_) => println!("Successfully created directory {}", dir),
            Err(_) => println!("Error creating directory {:?}", create_dir_result.err())

        }
    } else {
        println!("Directory already exists {}", path);
    }


}

pub fn delete_dir(dir: &str){
    let path = &dir;
    let is_path = std::path::Path::new(path);
    if !is_path.exists(){
        println!("Directory does not exist {}", path);
        println!("Maybe you create a new directory?");
        println!("please enter the command 'crate-dir' to create a directory");
    } else {
        let delete_dir_result = fs::remove_dir_all(dir);
        match delete_dir_result {
            Ok(_) => println!("Successfully deleted directory"),
            Err(_) => println!("Error deleting directory ")

        }
    }

}
```
Burada gördüğümüz gibi `private` ve `public` fonskiyonları kullanmayı ve dosya sistemine erişmeyi öğrendim...

[Rust Dosya Yöneticisi](https://github.com/VastSea0/rust-file-manager/)

**Kütüphane yöneticisi**

Daha sonra ki projem ise bir kütüphane yöneticisi oldu bu proje ile daha önce kullandığım `sturct` ve `enum` kavramlarını daha iyi öğrenip daha etkili şekilde kullandım. Ve daha önceki projede öğrendiğim dosya sistemi erişimi ile `Vector` veri tipini kullanrak küçük bir kitap veri tabanı diyebileceğimiz bir metin dosyasını okuyan ve yazan sistem yazdım.

[Kütüphane yöneticisi](https://github.com/VastSea0/rust-kutuphane-yoneticisi)

Şu ana kadar yaptığım güncel projeler bunlar bundan sonra JSON manipülasyonunu ardından HTTP servislerini öğrenip daha çeşitli işlevleride öğrenip `yew` çerçevesi ile Rust ile WASM yazmaya başlayacağım...