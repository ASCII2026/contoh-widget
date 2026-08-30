# 🚀 Panduan & Contoh Widget ASCII IF (Informatika Unmul)

Halo teman-teman praktikan dan aslab Informatika Unmul! 👋

Ini adalah repositori panduan dan contoh pemakaian **Widget & Badge Dinamis** dari portal [ASCII IF](https://ascii.web.id). Semua contoh di sini sudah disusun **per direktori** biar gampang dicek dan dicoba, lengkap dengan modul tutorial dan studi kasus nyata (seperti pasang widget bimbingan tubes kelompok, pajang status Discord & Spotify di profil GitHub, serta deretan badge perisai praktikum).

---

## ⚡ Preview Live Widget Nyata

Berikut preview tampilan widget SVG nyata dari akun `2209106127`:

### 1. Kartu Bimbingan Proyek (Tubes)

**Opsi A: Dedicated Project Card (Spesifik 1 Proyek Kelompok)**
[![Status Bimbingan Proyek](https://ascii.web.id/api/widget/fd35b370-da93-46ed-a056-e3f13d366430.svg?type=bimbingan)](https://ascii.web.id)

```markdown
[![Status Bimbingan Proyek](https://ascii.web.id/api/widget/fd35b370-da93-46ed-a056-e3f13d366430.svg?type=bimbingan)](https://ascii.web.id)
```

**Opsi B: Berdasarkan NIM Mahasiswa**
[![Status Bimbingan NIM](https://ascii.web.id/api/widget/2209106127.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)

```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/2209106127.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

---

### 2. Kartu Profil Mahasiswa / Aslab
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/2209106127.svg?theme=burgundy)](https://ascii.web.id)

```markdown
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/2209106127.svg?theme=burgundy)](https://ascii.web.id)
```

---

### 3. Kartu Discord Live Presence & Spotify
[![Discord Live Presence](https://ascii.web.id/api/widget/2209106127.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)

```markdown
[![Discord Live Presence](https://ascii.web.id/api/widget/2209106127.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)
```

---

### 4. Deretan Badge Shields
<p align="left">
  <a href="https://ascii.web.id"><img src="https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy" alt="Status" /></a>
  <a href="https://ascii.web.id"><img src="https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark" alt="Role" /></a>
  <a href="https://ascii.web.id"><img src="https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark" alt="Kelas" /></a>
  <a href="https://ascii.web.id"><img src="https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix" alt="Bimbingan" /></a>
  <a href="https://ascii.web.id"><img src="https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy" alt="Projects" /></a>
</p>

```markdown
[![Status](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy)](https://ascii.web.id)
[![Role](https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark)](https://ascii.web.id)
[![Kelas](https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark)](https://ascii.web.id)
[![ACC](https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
[![Projects](https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy)](https://ascii.web.id)
```

---

## 📂 Struktur Modul & Navigasi

Repositori ini terbagi menjadi dua bagian utama:

### 1. [📚 Folder Tutorial (`./tutorial/`)](./tutorial/README.md)
Kumpulan modul panduan teknis dan parameter widget:
- 📚 [**Tutorial Bimbingan per Project**](./tutorial/tutor-bimbingan-project/README.md)
- 👤 [**Tutorial Kartu Profil Mahasiswa & Aslab**](./tutorial/tutor-widget-profil/README.md)
- 🎮 [**Tutorial Widget Discord Live Presence**](./tutorial/tutor-widget-discord/README.md)
- 🛡️ [**Tutorial Koleksi Badge Shields**](./tutorial/tutor-badge-shields/README.md)

### 2. [🚀 Folder Studi Kasus Proyek Nyata (`./studi-kasus/`)](./studi-kasus/README.md)
Contoh implementasi repositori proyek tugas besar yang nyata:
- 📦 [**Tubes Kelompok 3 (SIMLAB - Web App)**](./studi-kasus/tubes-kelompok-simlab/README.md) — Repositori tubes lengkap dengan kode web (`index.html`, `style.css`, `app.js`) dan widget bimbingan live.
- 👤 [**Profil GitHub Developer Showcase**](./studi-kasus/github-profile-showcase/README.md) — Contoh profil GitHub developer mahasiswa Informatika Unmul.

---

## 🌐 Base URL & Format Endpoint

```
Base URL: https://ascii.web.id
```

### Format Endpoint:
- **Widget Kartu (SVG)**: `https://ascii.web.id/api/widget/{IDENTIFIER}.svg`
- **Badge Shields (SVG)**: `https://ascii.web.id/api/badge/{IDENTIFIER}.svg`

> **Tips Isi `{IDENTIFIER}`**:
> - **Group ID / UUID Tubes**: Contoh `fd35b370-da93-46ed-a056-e3f13d366430` *(Otomatis nampilin nama kelompok & judul tubes)*
> - **NIM / Username**: Contoh `2209106127` atau `2200018000`
> - **Discord ID**: Contoh `1203659210747944983`

---

## 🎨 4 Pilihan Tema Warna

Semua widget kartu dan badge bisa kamu ganti warnanya pakai parameter `theme`:

| Tema | Parameter | Preview Badge Nyata |
| :--- | :--- | :--- |
| **Burgundy** | `theme=burgundy` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy) *(Default)* |
| **Dark** | `theme=dark` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=dark) |
| **Matrix** | `theme=matrix` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=matrix) |
| **Light** | `theme=light` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=light) |

---

<p align="center">
  <sub>Laboratorium Informatika Universitas Mulawarman • <a href="https://ascii.web.id">ascii.web.id</a></sub>
</p>
