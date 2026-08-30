# Tutorial: Koleksi Badge Shields ASCII IF

Panduan lengkap penggunaan **Shield Badges** dari [ASCII IF](https://ascii.web.id). Badge berbentuk perisai horizontal kompak (mirip Shields.io) ini sangat cocok disematkan pada baris paling atas (header) repositori tugas praktikum atau profil GitHub.

---

## 📌 Daftar Isi
- [Daftar Varian Badge](#-daftar-varian-badge)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Varian Badge](#-pilihan-varian-badge)
  - [1. Badge Status Akun (Default)](#1-badge-status-akun)
  - [2. Badge Role Lab](#2-badge-role-lab)
  - [3. Badge Kelas Praktikum](#3-badge-kelas-praktikum)
  - [4. Badge Progres Bimbingan (ACC)](#4-badge-progres-bimbingan-acc)
  - [5. Badge Showcase Projects](#5-badge-showcase-projects)
- [Kustomisasi Tema Warna](#-kustomisasi-tema-warna)
- [Studi Kasus: Header Bar Repositori Praktikum](#-studi-kasus-header-bar-repositori-praktikum)
- [Tabel Parameter](#-tabel-parameter)

---

## 🛡️ Daftar Varian Badge

| Varian | Query Parameter | Contoh Output Visual | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Status** | `type=status` *(default)* | `ASCII LAB \| tesintgsaja • Verified` | Menunjukkan keaslian akun terdaftar di portal. |
| **Role** | `type=role` | `ROLE \| PRAKTIKAN` atau `ASLAB` | Menampilkan posisi/peran di laboratorium. |
| **Kelas** | `type=kelas` | `KELAS \| Kelas C` | Menampilkan kelas praktikum mahasiswa. |
| **Bimbingan** | `type=bimbingan` | `BIMBINGAN \| ACC Final ✨` | Menampilkan ringkasan status ACC tugas akhir. |
| **Projects** | `type=projects` | `PROJECTS \| 5 Showcase` | Menampilkan jumlah karya yang di-upload. |

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/badge/{IDENTIFIER}.svg[?type={TYPE}][&theme={THEME}]
```

> `{IDENTIFIER}` dapat diisi dengan **NIM/Username** akun Anda atau **Group ID**.

---

## 🏷️ Pilihan Varian Badge

### 1. Badge Status Akun
```markdown
[![Status](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=burgundy)](https://ascii.web.id)
```

### 2. Badge Role Lab
```markdown
[![Role](https://ascii.web.id/api/badge/tesintgsaja.svg?type=role&theme=dark)](https://ascii.web.id)
```

### 3. Badge Kelas Praktikum
```markdown
[![Kelas](https://ascii.web.id/api/badge/tesintgsaja.svg?type=kelas&theme=dark)](https://ascii.web.id)
```

### 4. Badge Progres Bimbingan (ACC)
Badge ini dinamis: jika sudah selesai sidang & ACC, akan menampilkan teks `ACC Final ✨`.
```markdown
[![Bimbingan ACC](https://ascii.web.id/api/badge/tesintgsaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

### 5. Badge Showcase Projects
```markdown
[![Projects](https://ascii.web.id/api/badge/tesintgsaja.svg?type=projects&theme=burgundy)](https://ascii.web.id)
```

---

## 🎨 Kustomisasi Tema Warna

Setiap badge mendukung 4 varian tema warna:

```markdown
<!-- Tema Burgundy (Merah Marun) -->
![](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=burgundy)

<!-- Tema Dark (Slate Gelap) -->
![](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=dark)

<!-- Tema Matrix (Hijau Hacker) -->
![](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=matrix)

<!-- Tema Light (Putih Minimalis) -->
![](https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=light)
```

---

## 🎯 Studi Kasus: Header Bar Repositori Praktikum

**Skenario**:
Anda ingin membuat header repositori tugas akhir yang rapi, modern, dan informatif dengan menggabungkan beberapa badge dalam 1 baris.

**Contoh Sintaks Markdown**:

```markdown
# 📚 Tugas Akhir Praktikum Pemrograman Web

<p align="left">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=burgundy" alt="Status" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=role&theme=dark" alt="Role" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=kelas&theme=dark" alt="Kelas" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=bimbingan&theme=matrix" alt="Bimbingan" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=projects&theme=burgundy" alt="Projects" />
  </a>
</p>

---
```

---

## ⚙️ Tabel Parameter

| Parameter | Pilihan Nilai | Default | Keterangan |
| :--- | :--- | :--- | :--- |
| `type` | `status`, `role`, `kelas`, `bimbingan`, `projects` | `status` | Varian informasi yang ditampilkan pada badge. |
| `theme` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Warna latar dan aksen badge. |

---

## 📂 File Terkait
- [Widget Bimbingan per Project](../tutor-bimbingan-project/README.md)
- [Widget Profil Lengkap](../tutor-widget-profil/README.md)
- [Template Tugas Praktikum](../template-studi-kasus/template-tugas-praktikum.md)
