# Tutorial: Widget Bimbingan & Project Tracker (Informatika Unmul)

Halo praktikan dan aslab! 👋

Ini panduan buat pasang **Widget Bimbingan** dan **Project Tracker** dari portal [ASCII IF](https://ascii.web.id). Widget ini nampilin status tahapan bimbingan praktikum kamu secara live (Pra-Konsul, Konsul 1, Konsul 2, sampai ACC Final), persentase progres, dan nama aslab pembimbing langsung di `README.md` repositori GitHub tugas kelompok / tubes kamu.

---

## ⚡ Preview Live Nyata

Berikut tampilan live kartu bimbingan SVG dari akun `testingaja`:

[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)

---

## 📌 Daftar Isi
- [Kenapa Pakai Widget Ini?](#-kenapa-pakai-widget-ini)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Tema & Preview Live](#-pilihan-tema--preview-live)
- [Cara Pemakaian](#-cara-pemakaian)
  - [1. Pakai Group ID Langsung (Paling Direkomendasikan buat Repo Tubes)](#1-pakai-group-id-langsung-paling-direkomendasikan-buat-repo-tubes)
  - [2. Pakai NIM / Username Mahasiswa](#2-pakai-nim--username-mahasiswa)
  - [3. Filter Kelompok Tertentu (Buat yang Banyak Kelompok / Aslab)](#3-filter-kelompok-spesifik)
- [Studi Kasus Nyata](#-studi-kasus-nyata)
- [Parameter Query](#-parameter-query)
- [Tahapan Progres Bimbingan](#-tahapan-progres-bimbingan)
- [File Terkait](#-file-terkait)

---

## 🚀 Kenapa Pakai Widget Ini?
1. **Otomatis Update (Live SVG)**: Begitu aslab nge-ACC konsul kamu di portal ASCII IF, kartu di GitHub otomatis berubah statusnya tanpa perlu commit atau push ulang!
2. **Support Dedicated Group ID**: Kartu bakal nampilin nama kelompok, judul tubes, mata kuliah praktikum, dan nama aslab pembimbing kamu.
3. **Cocok buat Praktikan & Aslab**: Aslab juga bisa pantau kelompok bimbingannya lewat GitHub.
4. **Bisa Ganti Tema**: Ada 4 pilihan warna (Burgundy, Dark, Matrix, Light).

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{IDENTIFIER}.svg?type=bimbingan[&theme={THEME}][&group={GROUP_FILTER}]
```

> **Catatan Isi `{IDENTIFIER}`**:
> 1. **Group ID / UUID Kelompok** *(Paling pas buat repo tubes bareng kelompok)*
> 2. **NIM / Username** akun ASCII IF kamu
> 3. **Discord ID** kamu

---

## 🎨 Pilihan Tema & Preview Live

### 1. Tema Burgundy (Default)
[![Bimbingan Burgundy](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)

```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

---

### 2. Tema Dark
[![Bimbingan Dark](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=dark)](https://ascii.web.id)

```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=dark)](https://ascii.web.id)
```

---

### 3. Tema Matrix
[![Bimbingan Matrix](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)

```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

---

### 4. Tema Light
[![Bimbingan Light](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=light)](https://ascii.web.id)

```markdown
[![Status Bimbingan](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=light)](https://ascii.web.id)
```

---

## 💡 Cara Pemakaian

### 1. Pakai Group ID Langsung (Paling Direkomendasikan buat Repo Tubes)
Kalau kamu punya Group ID kelompok (bisa dicek di dashboard bimbingan, bentuknya UUID seperti `6b8850ff-27c9-4a06-b33a-866ec8d87a71`), tinggal pasang ID itu di URL. Widget otomatis fokus ke proyek kelompok kamu.

#### Markdown:
```markdown
[![Status Bimbingan Proyek](https://ascii.web.id/api/widget/6b8850ff-27c9-4a06-b33a-866ec8d87a71.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

#### HTML (Tengah / Center):
```html
<p align="center">
  <a href="https://ascii.web.id/bimbingan">
    <img src="https://ascii.web.id/api/widget/6b8850ff-27c9-4a06-b33a-866ec8d87a71.svg?type=bimbingan&theme=burgundy" alt="Status Bimbingan Proyek" />
  </a>
</p>
```

---

### 2. Pakai NIM / Username Mahasiswa
Kalau mau nampilin bimbingan utama kamu sendiri di profil atau repo:

```markdown
[![Bimbingan Praktikum](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=dark)](https://ascii.web.id)
```

---

### 3. Filter Kelompok Spesifik
Misalnya kamu ikut beberapa praktikum sekaligus di semester ini, atau kamu aslab yang megang beberapa kelompok, kamu bisa tambahin parameter `group` sesuai nama kelompok atau mata kuliah:

```markdown
[![Bimbingan Web](https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&group=Web&theme=matrix)](https://ascii.web.id)
```

---

## 🎯 Studi Kasus: Repo Tubes Kelompok Praktikum

**Preview Nyata Hasil Header Repo Tubes**:

# 🚀 Sistem Rental Mobil - Kelompok 3
> Proyek Akhir Praktikum Pemrograman Web • Informatika Unmul

<p align="left">
  <!-- Badge Status Bimbingan ACC -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=bimbingan&theme=burgundy" alt="Status Bimbingan" />
  </a>
  <!-- Badge Kelas -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=kelas&theme=dark" alt="Kelas Praktikum" />
  </a>
  <!-- Badge Verified Member -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=matrix" alt="Verified Lab" />
  </a>
</p>

## 📊 Live Progress Bimbingan

<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/testingaja.svg?type=bimbingan&theme=burgundy" alt="Progress Bimbingan ASCII IF" />
  </a>
</p>

---

## ⚙️ Parameter Query

| Parameter | Pilihan Nilai | Default | Penjelasan |
| :--- | :--- | :--- | :--- |
| `type` | `bimbingan` | *(Wajib)* | Wajib diisi `bimbingan` biar yang muncul kartu bimbingan. |
| `theme` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Pilihan warna kartu SVG. |
| `group` | Nama kelompok / Judul / MK / UUID | *(Opsional)* | Filter ke kelompok atau mata kuliah tertentu. |

---

## 📈 Tahapan Progres Bimbingan

Status kartu bakal otomatis berubah sesuai tahapan ACC di portal:

| Tahap | Keterangan | Progress Bar | Status di Kartu |
| :--- | :--- | :---: | :--- |
| **Pra-Konsul** | Pengajuan ide/judul baru dimulai | `10%` | Pra-Konsul |
| **Konsul 1** | Konsul 0 sudah di-ACC aslab | `35%` | Konsul 1 |
| **Konsul 2** | Konsul 1 sudah di-ACC aslab | `60%` | Konsul 2 |
| **Siap ACC Final** | Konsul 2 sudah beres & siap evaluasi | `85%` | Siap ACC Final |
| **ACC Final** | Selamat! Sudah selesai sidang & ACC ✨ | `100%` | ACC Final |

---

## 📂 File Terkait
- [Contoh File README.md Repo Tubes Siap Pakai](./example-repo-readme.md)
- [Panduan Badge Shields Bimbingan](../tutor-badge-shields/README.md)
- [Dokumentasi API JSON](../tutor-api-json/README.md)
