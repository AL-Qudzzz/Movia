# Movia

**Movia** adalah jejaring sosial untuk para pecinta film, yang dirancang untuk membantu Anda melacak film yang pernah Anda tonton, menemukan film baru, dan berbagi minat Anda dengan komunitas sesama penggemar film.

## ✨ Fitur

- **Lacak Film:** Simpan catatan setiap film yang pernah Anda tonton.
- **Temukan:** Jelajahi film-film populer, terbaru, dan yang mendapat rating tinggi.
- **Buat Daftar:** Kurasi dan bagikan daftar film pribadi Anda (misalnya, "Terbaik 2024", "Fiksi Ilmiah yang Membingungkan").
- **Tulis Ulasan:** Bagikan pemikiran dan rating Anda tentang film.
- **Komunitas:** Terhubung dengan anggota lain, lihat profil mereka, dan temukan daftar populer.
- **Profil Pengguna:** Halaman profil pribadi untuk menampilkan film favorit, statistik tontonan, dan aktivitas terbaru.
- **Otentikasi Aman:** Pengguna dapat membuat akun dan masuk dengan aman menggunakan Firebase Authentication.

## 🚀 Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) (dengan App Router)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Backend & Auth:** [Firebase](https://firebase.google.com/) (Authentication)
- **AI:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)

## Contributor
- Syifa Najwa Azzahra (UI/UX Designer)
- Muhammad Faiqul Umam Dzunnuroeni (Fullstack - Dev)

## 🛠️ Cara Memulai

Untuk menjalankan salinan lokal dari proyek ini, ikuti langkah-langkah di bawah ini.

### Prasyarat

- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Instalasi

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/nama-pengguna-anda/movia.git
    cd movia
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Siapkan Variabel Lingkungan:**

    Proyek ini menggunakan Firebase untuk otentikasi. Anda perlu membuat file `.env.local` di direktori root dan menambahkan kredensial proyek Firebase Anda.

    Salin file contoh:
    ```bash
    cp .env.local.example .env.local
    ```

    Kemudian, isi variabel di `.env.local` dengan konfigurasi dari proyek Firebase Anda:

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
    ```

### Menjalankan Server Pengembangan

Setelah instalasi selesai, Anda dapat memulai server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat hasilnya.

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) for details.

