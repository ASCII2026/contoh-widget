# Tutorial: Widget Kartu Profil Mahasiswa & Aslab

Panduan lengkap penggunaan **Widget Kartu Profil (Default Card)** dari [ASCII IF](https://ascii.web.id). Widget ini menghasilkan kartu profil SVG dinamis beresolusi tinggi yang menampilkan informasi lengkap akun mahasiswa atau asisten lab di profil GitHub (`README.md`).

---

## 📌 Daftar Isi
- [Informasi yang Ditampilkan](#-informasi-yang-ditampilkan)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Tema Warna](#-pilihan-tema-warna)
- [Contoh Pemakaian](#-contoh-pemakaian)
  - [Markdown](#markdown)
  - [HTML](#html)
- [Studi Kasus: Profil GitHub Mahasiswa](#-studi-kasus-profil-github-mahasiswa)
- [Tabel Parameter](#-tabel-parameter)
- [File Terkait](#-file-terkait)

---

## 📋 Informasi yang Ditampilkan
Kartu profil secara otomatis membaca data dari database portal [ASCII IF](https://ascii.web.id):
1. **Identitas**: Nama lengkap, NIM/Username, dan Foto Profil (Avatar).
2. **Afiliasi**: Role akun (`Praktikan`, `Aslab`, `Admin`), Angkatan, dan Kelas praktikum.
3. **Statistik Portofolio**: Jumlah karya/proyek yang sudah di-showcase di portal.
4. **Progres Bimbingan**: Status tahapan bimbingan terkini.

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{NIM_ATAU_USERNAME}.svg[?theme={THEME}]
```

> Ganti `{NIM_ATAU_USERNAME}` dengan NIM Anda (contoh: `2200018000`) atau username akun ASCII IF Anda.

---

## 🎨 Pilihan Tema Warna

Widget mendukung 4 tema warna bawaan:

| Tema | Parameter | Karakter Visual |
| :--- | :--- | :--- |
| **Burgundy** | `theme=burgundy` | Warna merah marun elegan khas identitas portal *(Default)* |
| **Dark** | `theme=dark` | Warna slate/charcoal gelap modern & kontras |
| **Matrix** | `theme=matrix` | Warna hijau neon terminal hacker & monokrom gelap |
| **Light** | `theme=light` | Warna putih bersih minimalis dengan aksen lembut |

---

## 💡 Contoh Pemakaian

### Markdown
```markdown
<!-- Tema Burgundy (Default) -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/tesintgsaja.svg)](https://ascii.web.id)

<!-- Tema Dark -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/tesintgsaja.svg?theme=dark)](https://ascii.web.id)

<!-- Tema Matrix -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/tesintgsaja.svg?theme=matrix)](https://ascii.web.id)

<!-- Tema Light -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/tesintgsaja.svg?theme=light)](https://ascii.web.id)
```

### HTML
```html
<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/tesintgsaja.svg?theme=burgundy" alt="ASCII IF Profile Card" width="480" />
  </a>
</p>
```

---

## 🎯 Studi Kasus: Profil GitHub Mahasiswa

**Skenario**:
Sebagai mahasiswa Teknik Informatika yang aktif, Anda ingin menampilkan kartu identitas resmi laboratorium ASCII IF pada repositori profil GitHub pribadi (`username/username`).

**Contoh Penerapan di `README.md` Profil**:

```markdown
# Halo, Saya Muhammad Alif 👋
> Mahasiswa Teknik Informatika • Praktikan Lab ASCII IF

<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/tesintgsaja.svg?theme=burgundy" alt="Kartu Profil ASCII IF" />
  </a>
</p>

### 🛠️ Keahlian & Teknologi
- **Bahasa**: TypeScript, Python, C++, Go
- **Web**: React, Next.js, Node.js, Tailwind CSS
- **Database**: PostgreSQL, SQLite, Redis

### 🔗 Tautan Terkait
- 🌐 [Portal ASCII IF](https://ascii.web.id)
- 💼 [LinkedIn Profile](https://linkedin.com)
```

---

## ⚙️ Tabel Parameter

| Parameter | Tipe Data | Nilai | Default | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `theme` | `string` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Menentukan skema warna kartu. |

---

## 📂 File Terkait
- [Contoh Template GitHub Profile Lengkap](./example-profile-readme.md)
- [Widget Discord Live Presence](../tutor-widget-discord/README.md)
- [Koleksi Badge Shields](../tutor-badge-shields/README.md)
