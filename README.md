
# Dokumentasi API Mentorku

### Register User
Berfungsi untuk membuat akun user.

```
  POST https://teal-colorful-lemur.cyclic.app/auth/regist
```
##### Data data dibawah akan tersimpan kedalam database online.

```
  {
  "name" : "name user",
  "email" : "email user",
  "password" : "password user",
  "age": 24,
  "gender": "female"
  }
```
##### Gender pastikan hanya pria & wanita



### Login User
Berfungsi untuk membuat akun user.

```
  POST https://teal-colorful-lemur.cyclic.app/auth/login
```
##### mengakses data dari database untuk login
##### mengambil data dari body
```
  {
  "email": "youremail@gmail.com",
  "password": "yourpassword"
  }
```
##### mendapatkan sebuah respon
```
  {
  "message": "Login berhasil",
  "token": "itsexamplelogintokenw"
  }
```
### Mendapatkan semua data mentor

```
  GET https://teal-colorful-lemur.cyclic.app/mentor
```
##### contoh sebuah respon : 
```
  {
"id": 3,
"name": "Lina Wiona",
"email": "lina@gmail.com",
"gender": "female",
"yoe": 2,
"profile_image": "https://iili.io/JFtAoyN.png",
"price": 75000,
"phone": "081586877723",
"company": "Google",
"position": "Front End Developer",
"desc": "Salam! Saya adalah seorang Front End Developer yang bersemangat dalam menciptakan pengalaman web yang menarik dan responsif. Dengan pengalaman bertahun-tahun dalam dunia pengembangan web, saya memiliki keahlian dalam menerjemahkan desain menjadi antarmuka pengguna yang berfungsi dengan baik.  Pekerjaan saya melibatkan mengembangkan tampilan depan (front end) dari situs web, yang mencakup segala hal mulai dari desain responsif hingga interaktivitas. Saya memiliki pengetahuan mendalam tentang HTML, CSS, dan JavaScript, serta kerap mengikuti perkembangan teknologi web terbaru.  Saya sangat berorientasi pada detail dan mencari cara untuk mengoptimalkan kinerja dan kecepatan situs web. Selain itu, saya juga memahami pentingnya pengalaman pengguna, sehingga saya selalu berusaha membuat situs web yang mudah dinavigasi dan intuitif.  Selama karier saya, saya telah berkolaborasi dengan berbagai tim pengembangan dan desain untuk menciptakan produk web yang mengagumkan. Saya percaya dalam proses pengembangan iteratif dan merasa senang mendengar masukan serta umpan balik dari pengguna.",
"instagram": "https://www.instagram.com/dyonz_/",
"linkedin": "https://www.linkedin.com/in/hellodyon/",
"personal_web": "https://dyonz.webflow.io/",
"skill_1": "Front End Developer",
"skill_2": "React FE Developer",
"skill_3": "Web Developer",
"createdAt": "2023-11-29T04:57:10.000Z",
"updatedAt": "2023-11-29T04:57:10.000Z",
"Mentoring_time": [
        {
        "id": 6,
        "mentor_id": 3,
        "avaliable_date_time": "2023-11-01T11:30:00.000Z",
        "status": false,
        "createdAt": "2023-11-29T04:57:11.000Z",
        "updatedAt": "2023-11-29T04:57:11.000Z"
        },
        {
        "id": 5,
        "mentor_id": 3,
        "avaliable_date_time": "2023-11-01T09:30:00.000Z",
        "status": false,
        "createdAt": "2023-11-29T04:57:11.000Z",
        "updatedAt": "2023-11-29T04:57:11.000Z"
        },
        {
        "id": 4,
        "mentor_id": 3,
        "avaliable_date_time": "2023-11-01T07:30:00.000Z",
        "status": false,
        "createdAt": "2023-11-29T04:57:11.000Z",
        "updatedAt": "2023-11-29T04:57:11.000Z"
        }
],
```

### Mendapatkan semua data mentor berdasarkan id
```
  GET https://teal-colorful-lemur.cyclic.app/mentor/:id
```
### Search data mentor berdasarkan nama / kata nama
```
  GET https://teal-colorful-lemur.cyclic.app/mentor?q=nama
```
### Mendapatkan data waktu mentoring 
##### Direkomendasikan untuk menggunakan data semua data mentor karena sudah include waktu mentoring
```
  GET https://teal-colorful-lemur.cyclic.app/mentor?q=nama
```
### Melakukan booking mentor
##### user harus melakukan login terlebih dahulu untuk bisa booking

```
  POST https://teal-colorful-lemur.cyclic.app/payment/booking
```
##### Mengirim data lewat body
```
  {
    "mentor_id" : 5,
    "mentoring_date_time" : "2024-08-01 08:00:00"
  }
```
##### mengambil properti dari HTTP header

| Parameter       | Value     |
| :--------       | :------- | 
| `Authorization` | `Bearer` logintokendisini | 

##### Mendapatkan respon data

```
  {
  "message": "booking success",
  "data": {
    "pay": 3
      }
  }
```
##### Perhatikan value dari Parameter pay yang akan digunakan untuk membayar sebagai parameter id browser

### Melakukan pembayaran setelah booking
```
  {
    POST https://teal-colorful-lemur.cyclic.app/payment/pay/3
  }
```
##### Berikut adalah data json yang dikirim :

```
  {
    "mentor_id" : 5,
    "date_payment" : "2022-08-01 07:00:00",
    "mentoring_date_time" : "2024-08-01 12:00:00"
  }
```

##### Bisa dilihat disini akan membayar pay 3 dengan mentor id 5 yang dibooking sebelumnya

##### proses ini juga hanya bisa dilakukan jika user sudah login

##### mengambil properti dari HTTP header : 

| Parameter       | Value     |
| :--------       | :------- | 
| `Authorization` | `Bearer` logintokendisini | 

ketika pembayaran berhasil akan ada message : 

```
{
  "message": "payment success"
}
```



