---
title: 'Hüma Geliştirm Günlükleri 5'
date: '2024-07-27T02:34:00'
---

Selamlar bu gün Hüma'nın ikinci yazılı geliştirme günlüğü olacak. Bu yazıda Hüma'nın "0a15" kodlu sürümünde yaptıklarımı anlatacağım.

Öncelikle GitHub'da bu sürüme eklenen özellilere gelelim

**Bu sürümde:**
> **Hüma Kenar Çubuğu:** Web panel: "about" url desteği eklendi  
> **Hüma Kenar Çubuğu:** Web panel: "chrome" url desteği eklendi  
> **Hüma Kenar Çubuğu:** Eklenti listesi: Eklentiler listelenir  
> **Hüma Kenar Çubuğu:** Eklenti listesi: Eklentiler açılır ("moz-ext" urlleri açılana kadar eklentiler görünür değildir)  
> **Hüma Kenar Çubuğu:** Genel öğeler: Öğeler listelenir  
> **Hüma Kenar Çubuğu:** Genel öğeler: Öğeler düzenlenebilir  
> **Hüma Kenar Çubuğu:** Genel öğeler: Öğelerin yeri değiştirilebilir  
> **Hüma Sayfaları:** Hesap makinesi eklendi  
> **Hüma Sayfaları:** Yer imi yöneticisi eklendi  
> **Hüma Sayfaları:** Yer imi yöneticisi: Yer imi silme özelliği eklendi  
> **Hüma Sayfaları:** Yapılacaklar listesi yöneticisi eklendi  
> **Hüma Sayfaları:** Yapılacaklar listesi yöneticisi: Öğeleri silme özelliği eklendi  
> **Hüma Sayfaları:** Ana sayfa ön izlemeler eklendi  
> **Hüma İçerik Kaydetme:** İçerik indirme özelliği eklendi  
> **Hüma İçerik Kaydetme:** İçerik silme özelliği eklendi  

Bu özellikleri eklemişim ve not almadığım bir şey daha var o da Hüma'nın gizlilik açısından değişilikleri ve araç çubuğunun düzen değişikliği. Şu an bu notlar olmasada artık bu şekilde günlük tutacağımdan, geliştirme aşamasında bile not alacağım bu sayede yeni sürümda yaptıklarım daha belirgin olacak ve unutmayacağım.

Başlamadan önce Yüz Yüzeyken Konuşuruz'dan bir parçayı buraya gömmek istiyorum yazıyı okurken dinleyebilirsiniz :).

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5yOwXZg7ZQbJrw2gVSrp5b?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Şimdi devam edebiliriz. Öncelikle 0a15 ile değişen en büyük şey tarayıcının arayüzü oldu. Bu sürümde bir adet side var ekledik ve araç çubuğunu değiştirdik. Hüma Gezgini eklentiside bununla beraber değişti ve yeni sayfaları ile bizi karşıladı. Karışalama demişken Hüma'da artık sizi karşılıyor, bu gerekiyordu değil mi? :). Karışama sayfasınıda yeni logolar ve yazılar ile değiştirdim. Ve bu sürümde gerçekten "[Lepton](https://github.com/black7375/Firefox-UI-Fix)" temasını entegre etmek istiyordum ancak maalesef yapamadım. Bunu artık diğer sürümlere bırakıyorum. WOW gerçekten şu anda lepton temasını kendim kurdum ve harika duruyor bunu kesinlikle bir şekilde tarayıcıya ekleyeceğim.
![Hüma Tarayıcısında lepton teması](https://private-user-images.githubusercontent.com/144556903/352686244-2c878ce4-2d4c-43c6-9424-daf5b9d38a67.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwMzkyMDQsIm5iZiI6MTcyMjAzODkwNCwicGF0aCI6Ii8xNDQ1NTY5MDMvMzUyNjg2MjQ0LTJjODc4Y2U0LTJkNGMtNDNjNi05NDI0LWRhZjViOWQzOGE2Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwMDA4MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYjFkMjM0NmI0OWEzMWQyZmVmODdiY2Q4ZGE2NzkzYzM0MjRlYTRhYmYzMDliY2ZlMjJjMzEyMDE4ODJlMTRhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.MZrVdK6c87Z94SQngF4uUiFKhrzkNE1eu1QS0Q9TyKs) 

Eklediğim bir diğer şey ise Hüma içerik kaydedici. Bu özellik sayesinde istediğimiz içeriği kolayca kaydederek internetsiz bir şekilde daha sonra okumak için kaydedebiliyoruz. Bunun olayı zaten basit tarayıcının yerel veri tabanında içeriği html olarak depoluyoruz ve daha sonra listeliyoruz.

*İçerikleri listelerken*
![Hüma Tarayıcısında Hüma Gezgini](https://private-user-images.githubusercontent.com/144556903/352686910-9b15bcc8-bbfc-42a6-9f2f-347efd102c4b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwMzk4NjIsIm5iZiI6MTcyMjAzOTU2MiwicGF0aCI6Ii8xNDQ1NTY5MDMvMzUyNjg2OTEwLTliMTViY2M4LWJiZmMtNDJhNi05ZjJmLTM0N2VmZDEwMmM0Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwMDE5MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZDgwYzg0NDEwMmUyNWFlZDZiNzgwNzhiYTk4MWMxNWRjZWUwOTc3MzA5ODAwZWIwODk0ZWI3ZmRkODcxODA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sZpGc1q6DpqPDNrexCn_zIoTMEh43EAnvym6IUKL8M4)
*İçerikleri okurken*


Ve birde yapılandırma sayfası ekledim bu sayfa sayesinde içerikleri silebileceğiz veya kenar çubuğu için renkleri değiştirebileceğiz. Kenar çubuğu için basitçe JSON kullandım. JSON zaten böyle şeyler için birebir harika ve kolay oluyor ve yine burada tarayıcının veri tabanını kullanıyoruz bu sayede yapılan değişikliler kalıcı oluyor.

![Hüma Tarayıcısında Hüma Gezgini](https://private-user-images.githubusercontent.com/144556903/352687264-af9773f4-527c-4bff-b072-340853850f4f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwNDAyNjIsIm5iZiI6MTcyMjAzOTk2MiwicGF0aCI6Ii8xNDQ1NTY5MDMvMzUyNjg3MjY0LWFmOTc3M2Y0LTUyN2MtNGJmZi1iMDcyLTM0MDg1Mzg1MGY0Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyN1QwMDI2MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MjU2MmI3MmIwZGViODliYTNiMTg1ZmU5YWVjZWFhNjk1ZWQ3Y2FjNGE0NjhiNzRmZDYwNWIzMmNjM2M0OTExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.LxZJJ1XuzRvxTkdRkBPnzuZcUCn8HcNzPzuZfaGsl6Q)

Ekran görüntülerinde gördüğünüz gibi bu sürümda daha fazla gösterebileceğim bir şey yok diye düşünüyorum