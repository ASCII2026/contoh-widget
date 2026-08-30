# 🚀 Panduan & Contoh Widget ASCII IF (Informatika Unmul)

Halo teman-teman praktikan dan aslab Informatika Unmul! 👋

Ini adalah repositori panduan dan contoh pemakaian **Widget & Badge Dinamis** dari portal [ASCII IF](https://ascii.web.id). Semua contoh di sini sudah disusun **per direktori** biar gampang dicek dan dicoba, lengkap dengan studi kasus nyata (seperti pasang widget bimbingan tubes kelompok, pajang status Discord & Spotify di profil GitHub, sampai integrasi API JSON).

---

## 📂 Daftar Tutorial & Contoh

Tinggal pilih folder sesuai kebutuhan kamu:

| Direktori | Penjelasan & Contoh Kasus |
| :--- | :--- |
| 📚 [**`tutor-bimbingan-project/`**](./tutor-bimbingan-project/README.md) | **Tutorial Bimbingan per Project**: Buat tracking progres bimbingan tugas besar / proyek praktikum (Pra-Konsul, Konsul 1, Konsul 2, ACC Final) pakai Group ID atau NIM. Ada template `README.md` tubes yang tinggal di-copy paste. |
| 👤 [**`tutor-widget-profil/`**](./tutor-widget-profil/README.md) | **Widget Kartu Profil**: Kartu profil SVG dinamis buat nampilin info akun Informatika Unmul kamu (nama, NIM, kelas, role, jumlah showcase, dan progress bimbingan). |
| 🎮 [**`tutor-widget-discord/`**](./tutor-widget-discord/README.md) | **Widget Discord Live Activity**: Nampilin status Discord live, lagu Spotify yang lagi diputar, aktivitas coding di VS Code / nge-game, role server, dan avatar. |
| 🛡️ [**`tutor-badge-shields/`**](./tutor-badge-shields/README.md) | **Koleksi Badge Shields**: Badge kecil ala shields.io buat status akun (Verified), role aslab/praktikan, kelas praktikum, status ACC bimbingan, dan showcase. |
| ⚡ [**`tutor-api-json/`**](./tutor-api-json/README.md) | **Integrasi REST API JSON**: Buat kamu yang mau ambil data mentah JSON (`/api/widget-data/{id}`) buat website portofolio pribadi, bot Discord, atau skrip Python / TypeScript. |
| 📑 [**`template-studi-kasus/`**](./template-studi-kasus/README.md) | **Template Siap Pakai**: Template markdown lengkap buat Repositori Tugas Kelompok Praktikum dan Profil GitHub pribadi kamu. |

---

## 🌐 Base URL & Format Endpoint

```
Base URL: https://ascii.web.id
```

### Format Endpoint:
- **Widget Kartu (SVG)**: `https://ascii.web.id/api/widget/{IDENTIFIER}.svg`
- **Badge Shields (SVG)**: `https://ascii.web.id/api/badge/{IDENTIFIER}.svg`
- **Data Mentah (JSON)**: `https://ascii.web.id/api/widget-data/{IDENTIFIER}`

> **Tips Isi `{IDENTIFIER}`**:
> - **NIM / Username**: Contoh `testingaja` atau `2200018000`
> - **Group ID / UUID Tubes**: Contoh `6b8850ff-27c9-4a06-b33a-866ec8d87a71` *(Bagus banget buat kartu bimbingan repo kelompok)*
> - **Discord ID**: Contoh `1203659210747944983`

---

## 🎨 4 Pilihan Tema Warna

Semua widget kartu dan badge bisa kamu ganti warnanya pakai parameter `theme`:

| Tema | Parameter | Tampilan Warna |
| :--- | :--- | :--- |
| **Burgundy** | `theme=burgundy` | Merah marun khas ASCII IF *(Default)* |
| **Dark** | `theme=dark` | Slate gelap modern |
| **Matrix** | `theme=matrix` | Hijau neon ala terminal hacker |
| **Light** | `theme=light` | Putih bersih & minimalis |

---

## ⚡ Contoh Cepat (Tinggal Copy-Paste)

### 1. Kartu Bimbingan di Repo Tubes
```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

### 2. Badge Deret di Header Repo
```markdown
[![Status](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=burgundy)](https://ascii.web.id)
[![Kelas](https://ascii.web.id/api/badge/testingaja.svg?type=kelas&theme=dark)](https://ascii.web.id)
[![ACC](https://ascii.web.id/api/badge/testingaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

### 3. Kartu Discord & Spotify di Profil GitHub
```markdown
[![Discord Status](https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)
```

---

<p align="center">
  <sub>Laboratorium Informatika Universitas Mulawarman • <a href="https://ascii.web.id">ascii.web.id</a></sub>
</p>
