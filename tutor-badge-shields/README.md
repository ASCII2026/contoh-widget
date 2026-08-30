# Tutorial: Koleksi Badge Shields ASCII IF (Informatika Unmul)

Halo teman-teman Informatika Unmul! 👋

Mau header repositori tugas praktikum atau profil GitHub kamu kelihatan rapi dan profesional seperti repo open-source populer? 

Panduan ini ngebahas koleksi **Badge Shields** dari portal [ASCII IF](https://ascii.web.id). Badge ini berbentuk perisai horizontal kompak yang langsung bisa kamu susun berjajar di bagian atas `README.md`.

---

## 📌 Daftar Isi
- [Daftar Varian Badge](#-daftar-varian-badge)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Varian Badge](#-pilihan-varian-badge)
  - [1. Badge Status Akun (Verified)](#1-badge-status-akun-verified)
  - [2. Badge Role Lab (Aslab / Praktikan)](#2-badge-role-lab)
  - [3. Badge Kelas Praktikum](#3-badge-kelas-praktikum)
  - [4. Badge Progres Bimbingan (ACC)](#4-badge-progres-bimbingan-acc)
  - [5. Badge Showcase Projects](#5-badge-showcase-projects)
- [Pilihan Tema Warna](#-pilihan-tema-warna)
- [Studi Kasus: Header Bar Repositori Praktikum](#-studi-kasus-header-bar-repositori-praktikum)
- [Tabel Parameter](#-tabel-parameter)

---

## 🛡️ Daftar Varian Badge

| Varian | Query Parameter | Contoh Output Teks | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Status** | `type=status` *(default)* | `ASCII LAB \| testingaja • Verified` | Bukti akun kamu sudah terverifikasi di lab. |
| **Role** | `type=role` | `ROLE \| PRAKTIKAN` atau `ASLAB` | Nampilin peran kamu di lab Informatika Unmul. |
| **Kelas** | `type=kelas` | `KELAS \| Kelas C` | Nampilin kelas praktikum kamu. |
| **Bimbingan** | `type=bimbingan` | `BIMBINGAN \| ACC Final ✨` | Status ringkas tahapan ACC tugas akhir kamu. |
| **Projects** | `type=projects` | `PROJECTS \| 5 Showcase` | Total proyek yang sudah kamu upload ke portal. |

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/badge/{IDENTIFIER}.svg[?type={TYPE}][&theme={THEME}]
```

> `{IDENTIFIER}` bisa diisi dengan **NIM / Username** atau **Group ID Tubes** kamu.

---

## 🏷️ Pilihan Varian Badge

### 1. Badge Status Akun (Verified)
```markdown
[![Status](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=burgundy)](https://ascii.web.id)
```

### 2. Badge Role Lab
```markdown
[![Role](https://ascii.web.id/api/badge/testingaja.svg?type=role&theme=dark)](https://ascii.web.id)
```

### 3. Badge Kelas Praktikum
```markdown
[![Kelas](https://ascii.web.id/api/badge/testingaja.svg?type=kelas&theme=dark)](https://ascii.web.id)
```

### 4. Badge Progres Bimbingan (ACC)
Badge ini dinamis: begitu tugas kamu sudah selesai dan di-ACC aslab, tulisannya otomatis jadi `ACC Final ✨`.
```markdown
[![Bimbingan ACC](https://ascii.web.id/api/badge/testingaja.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

### 5. Badge Showcase Projects
```markdown
[![Projects](https://ascii.web.id/api/badge/testingaja.svg?type=projects&theme=burgundy)](https://ascii.web.id)
```

---

## 🎨 Pilihan Tema Warna

Semua badge punya 4 opsi warna:

```markdown
<!-- Tema Burgundy (Merah Marun) -->
![](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=burgundy)

<!-- Tema Dark (Slate Gelap) -->
![](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=dark)

<!-- Tema Matrix (Hijau Hacker) -->
![](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=matrix)

<!-- Tema Light (Putih Minimalis) -->
![](https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=light)
```

---

## 🎯 Studi Kasus: Header Bar Repositori Praktikum

**Skenario**:
Kamu mau bikin header repo tugas besar yang rapi dengan menyusun beberapa badge dalam satu baris horizontal.

**Contoh di `README.md`**:

```markdown
# 📚 Tugas Akhir Praktikum Pemrograman Web
> Laboratorium Informatika Universitas Mulawarman

<p align="left">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=status&theme=burgundy" alt="Status" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=role&theme=dark" alt="Role" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=kelas&theme=dark" alt="Kelas" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=bimbingan&theme=matrix" alt="Bimbingan" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/testingaja.svg?type=projects&theme=burgundy" alt="Projects" />
  </a>
</p>

---
```

---

## ⚙️ Tabel Parameter

| Parameter | Pilihan Nilai | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `type` | `status`, `role`, `kelas`, `bimbingan`, `projects` | `status` | Jenis informasi badge yang mau ditampilkan. |
| `theme` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Pilihan warna badge. |

---

## 📂 File Terkait
- [Widget Bimbingan per Project](../tutor-bimbingan-project/README.md)
- [Widget Profil Lengkap](../tutor-widget-profil/README.md)
- [Template Tugas Praktikum](../template-studi-kasus/template-tugas-praktikum.md)
