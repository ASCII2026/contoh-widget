# Tutorial: Koleksi Badge Shields ASCII IF (Informatika Unmul)

Halo teman-teman Informatika Unmul! 👋

Mau header repositori tugas praktikum atau profil GitHub kamu kelihatan rapi dan profesional seperti repo open-source populer? 

Panduan ini ngebahas koleksi **Badge Shields** dari portal [ASCII IF](https://ascii.web.id). Badge ini berbentuk perisai horizontal kompak yang langsung bisa kamu susun berjajar di bagian atas `README.md`.

---

## ⚡ Preview Live Nyata

Berikut tampilan live seluruh badge shield dari akun `2209106127`:

<p align="left">
  <img src="https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy" alt="Status" />
  <img src="https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark" alt="Role" />
  <img src="https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark" alt="Kelas" />
  <img src="https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix" alt="Bimbingan" />
  <img src="https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy" alt="Projects" />
</p>

---

## 📌 Daftar Isi
- [Daftar Varian Badge & Preview](#-daftar-varian-badge--preview)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Varian Badge](#-pilihan-varian-badge)
  - [1. Badge Status Akun (Verified)](#1-badge-status-akun-verified)
  - [2. Badge Role Lab (Aslab / Praktikan)](#2-badge-role-lab)
  - [3. Badge Kelas Praktikum](#3-badge-kelas-praktikum)
  - [4. Badge Progres Bimbingan (ACC)](#4-badge-progres-bimbingan-acc)
  - [5. Badge Showcase Projects](#5-badge-showcase-projects)
- [Pilihan Tema Warna & Preview](#-pilihan-tema-warna--preview)
- [Studi Kasus: Header Bar Repositori Praktikum](#-studi-kasus-header-bar-repositori-praktikum)
- [Tabel Parameter](#-tabel-parameter)

---

## 🛡️ Daftar Varian Badge & Preview

| Varian | Query Parameter | Preview Live Nyata | Kegunaan |
| :--- | :--- | :---: | :--- |
| **Status** | `type=status` *(default)* | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy) | Bukti akun kamu sudah terverifikasi di lab. |
| **Role** | `type=role` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark) | Nampilin peran kamu di lab Informatika Unmul. |
| **Kelas** | `type=kelas` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark) | Nampilin kelas praktikum kamu. |
| **Bimbingan** | `type=bimbingan` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix) | Status ringkas tahapan ACC tugas akhir kamu. |
| **Projects** | `type=projects` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy) | Total proyek yang sudah kamu upload ke portal. |

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/badge/{IDENTIFIER}.svg[?type={TYPE}][&theme={THEME}]
```

> `{IDENTIFIER}` bisa diisi dengan **NIM / Username** atau **Group ID Tubes** kamu.

---

## 🏷️ Pilihan Varian Badge

### 1. Badge Status Akun (Verified)
[![Status](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy)](https://ascii.web.id)

```markdown
[![Status](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy)](https://ascii.web.id)
```

### 2. Badge Role Lab
[![Role](https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark)](https://ascii.web.id)

```markdown
[![Role](https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark)](https://ascii.web.id)
```

### 3. Badge Kelas Praktikum
[![Kelas](https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark)](https://ascii.web.id)

```markdown
[![Kelas](https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark)](https://ascii.web.id)
```

### 4. Badge Progres Bimbingan (ACC)
Badge ini dinamis: begitu tugas kamu sudah selesai dan di-ACC aslab, tulisannya otomatis jadi `ACC Final ✨`.

[![Bimbingan ACC](https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)

```markdown
[![Bimbingan ACC](https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix)](https://ascii.web.id)
```

### 5. Badge Showcase Projects
[![Projects](https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy)](https://ascii.web.id)

```markdown
[![Projects](https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy)](https://ascii.web.id)
```

---

## 🎨 Pilihan Tema Warna & Preview

| Tema | Parameter | Preview Live |
| :--- | :--- | :---: |
| **Burgundy** | `theme=burgundy` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy) |
| **Dark** | `theme=dark` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=dark) |
| **Matrix** | `theme=matrix` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=matrix) |
| **Light** | `theme=light` | ![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=light) |

```markdown
<!-- Tema Burgundy (Merah Marun) -->
![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy)

<!-- Tema Dark (Slate Gelap) -->
![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=dark)

<!-- Tema Matrix (Hijau Hacker) -->
![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=matrix)

<!-- Tema Light (Putih Minimalis) -->
![](https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=light)
```

---

## 🎯 Studi Kasus: Header Bar Repositori Praktikum

**Preview Nyata Header Bar**:

# 📚 Tugas Akhir Praktikum Pemrograman Web
> Laboratorium Informatika Universitas Mulawarman

<p align="left">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/2209106127.svg?type=status&theme=burgundy" alt="Status" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/2209106127.svg?type=role&theme=dark" alt="Role" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/2209106127.svg?type=kelas&theme=dark" alt="Kelas" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/2209106127.svg?type=bimbingan&theme=matrix" alt="Bimbingan" />
  </a>
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/2209106127.svg?type=projects&theme=burgundy" alt="Projects" />
  </a>
</p>

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
