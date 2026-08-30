# 🚀 Dokumentasi & Contoh Widget ASCII IF

Selamat datang di repositori contoh dan dokumentasi resmi integrasi **Widget & Badge Dinamis** dari portal [ASCII IF](https://ascii.web.id). 

Repositori ini disusun **berbasis direktori** lengkap dengan studi kasus riil (seperti pemantauan bimbingan tugas besar kelompok, profil GitHub interaktif, dan integrasi API JSON).

---

## 📂 Daftar Modul Tutorial

Pilih modul tutorial di bawah ini sesuai kebutuhan Anda:

| Modul Direktori | Isi Tutorial & Studi Kasus |
| :--- | :--- |
| 📚 [**`tutor-bimbingan-project/`**](./tutor-bimbingan-project/README.md) | **Tutorial Bimbingan per Project**: Tracking progres bimbingan tugas besar / proyek akhir praktikum dengan Group ID atau NIM mahasiswa (Pra-Konsul, Konsul 1, Konsul 2, ACC Final). Termasuk contoh file `README.md` repo kelompok siap pakai. |
| 👤 [**`tutor-widget-profil/`**](./tutor-widget-profil/README.md) | **Widget Kartu Profil**: Kartu profil SVG dinamis lengkap dengan nama, NIM, role praktikan/aslab, kelas, jumlah proyek showcase, dan progres bimbingan. |
| 🎮 [**`tutor-widget-discord/`**](./tutor-widget-discord/README.md) | **Widget Discord Live Presence**: Kartu status Discord real-time, lagu Spotify yang sedang diputar, game/coding activity di VS Code, server roles, dan avatar global/server. |
| 🛡️ [**`tutor-badge-shields/`**](./tutor-badge-shields/README.md) | **Koleksi Badge Shields**: Badge perisai horizontal kompak untuk status akun (Verified), role lab, kelas praktikum, status ACC bimbingan, dan jumlah showcase. |
| ⚡ [**`tutor-api-json/`**](./tutor-api-json/README.md) | **Integrasi REST API JSON**: Dokumentasi endpoint `/api/widget-data/{id}` untuk frontend kustom, website portofolio, bot Discord, atau skrip Python / TypeScript. |
| 📑 [**`template-studi-kasus/`**](./template-studi-kasus/README.md) | **Template Siap Pakai**: Kumpulan boilerplate markdown lengkap untuk Repositori Tugas Praktikum dan Profil GitHub pribadi. |

---

## 🌐 Format URL & Base URL

```
Base URL: https://ascii.web.id
```

### Format Endpoint Umum:
- **Widget Card (SVG)**: `https://ascii.web.id/api/widget/{IDENTIFIER}.svg`
- **Badge Shield (SVG)**: `https://ascii.web.id/api/badge/{IDENTIFIER}.svg`
- **REST Data (JSON)**: `https://ascii.web.id/api/widget-data/{IDENTIFIER}`

> **Ketentuan Nilai `{IDENTIFIER}`**:
> - **NIM / Username Akun**: Misal `tesintgsaja` atau `2200018000`
> - **Group ID / Project UUID**: Misal `6b8850ff-27c9-4a06-b33a-866ec8d87a71` *(Untuk kartu bimbingan dedicated)*
> - **Discord ID**: Misal `1203659210747944983`

---

## 🎨 4 Tema Warna Bawaan

Semua widget kartu dan badge shield mendukung parameter `theme`:

| Tema | Parameter | Penjelasan Warna |
| :--- | :--- | :--- |
| **Burgundy** | `theme=burgundy` | Merah marun khas identitas portal ASCII IF *(Default)* |
| **Dark** | `theme=dark` | Slate/charcoal gelap modern & kontras |
| **Matrix** | `theme=matrix` | Hijau neon terminal bergaya hacker |
| **Light** | `theme=light` | Putih bersih minimalis dengan aksen lembut |

---

## ⚡ Quick Start Contoh Singkat

### 1. Kartu Bimbingan Tugas Besar di Repo Praktikum
```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/tesintgsaja.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

### 2. Header Badges Repositori
```markdown
[![Status](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=burgundy)](https://ascii.web.id)
[![Kelas](https://ascii.web.id/api/badge/tesintgsaja.svg?type=kelas&theme=dark)](https://ascii.web.id)
[![ACC](https://ascii.web.id/api/badge/tesintgsaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

### 3. Kartu Status Discord & Spotify
```markdown
[![Discord Status](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)
```

---

<p align="center">
  <sub>Portal Laboratorium  Informatika • <a href="https://ascii.web.id">ascii.web.id</a></sub>
</p>
