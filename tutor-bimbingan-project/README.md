# Tutorial: Widget Bimbingan & Dedicated Project Tracker

Panduan lengkap penggunaan **Widget Bimbingan** dan **Project Tracker** dari [ASCII IF](https://ascii.web.id) untuk memantau tahapan bimbingan praktikum, status ACC (Pra-Konsul, Konsul 1, Konsul 2, ACC Final), progres persentase, dan identitas asisten laboratorium secara *real-time* di repositori GitHub tugas kelompok / tubes.

---

## 📌 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Format Endpoint](#-format-endpoint)
- [Mode Pemakaian](#-mode-pemakaian)
  - [Mode 1: Dedicated Project Tracker (Direkomendasikan untuk Tubes)](#mode-1-dedicated-project-tracker-direkomendasikan-untuk-repo-tubes)
  - [Mode 2: Tracking Berdasarkan NIM / Username Mahasiswa](#mode-2-tracking-berdasarkan-nim--username-mahasiswa)
  - [Mode 3: Filter Kelompok Tertentu pada Akun Multi-Kelompok / Aslab](#mode-3-filter-kelompok-spesifik)
- [Studi Kasus Nyata](#-studi-kasus-nyata)
  - [Studi Kasus 1: Repositori Tugas Besar Kelompok](#studi-kasus-1-repositori-tugas-besar-kelompok)
  - [Studi Kasus 2: Repositori Proyek Asisten Lab (Pantau Kelompok Bimbingan)](#studi-kasus-2-repositori-asisten-lab)
- [Tabel Parameter Query](#-tabel-parameter-query)
- [Indikator Tahapan Bimbingan](#-indikator-tahapan-bimbingan)
- [Template Siap Pakai](#-template-siap-pakai)

---

## 🚀 Fitur Utama
1. **Live Dynamic SVG**: Status progres selalu terupdate otomatis mengikuti data di portal ASCII IF tanpa perlu push commit baru ke GitHub.
2. **Dedicated Project ID Support**: Repositori tugas kelompok dapat menggunakan `groupId` langsung agar kartu menampilkan judul proyek, nama kelompok, mata kuliah, dan nama Aslab pembimbing.
3. **Multi-Role Ready**: Mendukung tampilan sudut pandang praktikan maupun asisten lab.
4. **4 Pilihan Tema**: Burgundy, Dark, Matrix, dan Light.

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{IDENTIFIER}.svg?type=bimbingan[&theme={THEME}][&group={GROUP_FILTER}]
```

> **Catatan:** `{IDENTIFIER}` dapat diisi dengan:
> 1. **Group ID / Project ID** (UUID kelompok bimbingan) *(Sangat disarankan untuk repo kelompok)*
> 2. **NIM / Username** akun ASCII IF Anda
> 3. **Discord ID** yang sudah terhubung dengan akun ASCII IF

---

## 💡 Mode Pemakaian

### Mode 1: Dedicated Project Tracker (Direkomendasikan untuk Repo Tubes)
Jika Anda memiliki ID Kelompok Bimbingan (misal: `6b8850ff-27c9-4a06-b33a-866ec8d87a71`), Anda bisa langsung menggunakannya sebagai `{IDENTIFIER}`. Widget akan otomatis menampilkan kartu khusus proyek tersebut lengkap dengan nama kelompok, mata kuliah, dan asisten lab pembimbing.

#### Sintaks Markdown:
```markdown
[![Status Bimbingan Proyek](https://ascii.web.id/api/widget/6b8850ff-27c9-4a06-b33a-866ec8d87a71.svg?type=bimbingan&theme=burgundy)](https://ascii.web.id)
```

#### Sintaks HTML:
```html
<p align="center">
  <a href="https://ascii.web.id/bimbingan">
    <img src="https://ascii.web.id/api/widget/6b8850ff-27c9-4a06-b33a-866ec8d87a71.svg?type=bimbingan&theme=burgundy" alt="Status Bimbingan Proyek" />
  </a>
</p>
```

---

### Mode 2: Tracking Berdasarkan NIM / Username Mahasiswa
Jika Anda menggunakan NIM atau username akun, widget akan menampilkan ringkasan bimbingan utama Anda.

#### Sintaks Markdown:
```markdown
[![Bimbingan Praktikum](https://ascii.web.id/api/widget/tesintgsaja.svg?type=bimbingan&theme=dark)](https://ascii.web.id)
```

---

### Mode 3: Filter Kelompok Spesifik
Jika Anda terdaftar di lebih dari satu kelompok praktikum (atau merupakan Aslab), Anda dapat menambahkan parameter `group` untuk memfilter ke kelompok tertentu berdasarkan nama kelompok atau nama mata kuliah:

```markdown
[![Bimbingan Web](https://ascii.web.id/api/widget/tesintgsaja.svg?type=bimbingan&group=Web&theme=matrix)](https://ascii.web.id)
```

---

## 🎯 Studi Kasus Nyata

### Studi Kasus 1: Repositori Tugas Besar Kelompok

**Skenario**:
Kelompok Anda (Kelompok 3) sedang mengerjakan proyek akhir mata kuliah *Pemrograman Web*. Anda ingin agar aslab, dosen, dan anggota tim bisa langsung melihat status ACC bimbingan di halaman depan repositori GitHub.

**Penyelesaian**:
Tambahkan badge status bimbingan dan kartu widget bimbingan di bagian atas `README.md` repositori:

```markdown
# 🚀 Sistem Informasi Rental Mobil - Kelompok 3

<p align="left">
  <!-- Badge Status Bimbingan -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=bimbingan&theme=burgundy" alt="Status Bimbingan" />
  </a>
  <!-- Badge Kelas Praktikum -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=kelas&theme=dark" alt="Kelas Praktikum" />
  </a>
  <!-- Badge Status Verifikasi Akun -->
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/badge/tesintgsaja.svg?type=status&theme=matrix" alt="Verified Lab" />
  </a>
</p>

---

## 📊 Live Progress Bimbingan Proyek

<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/tesintgsaja.svg?type=bimbingan&theme=burgundy" alt="Progress Bimbingan ASCII IF" />
  </a>
</p>

---

## 👥 Anggota Kelompok
- **2200018001** - Mahasiswa Satu
- **2200018002** - Mahasiswa Dua
- **2200018003** - Mahasiswa Tiga

## 🛠️ Tech Stack
- Frontend: Next.js + Tailwind CSS
- Backend: Express.js + PostgreSQL
- Monitoring: ASCII IF Lab Portal
```

---

### Studi Kasus 2: Repositori Asisten Lab

**Skenario**:
Sebagai Asisten Lab, Anda mengampu bimbingan beberapa kelompok praktikum dan ingin menampilkan status bimbingan salah satu kelompok binaan di repo modul/starter kit praktikum.

**Penyelesaian**:
Gunakan filter `group` sesuai nama kelompok yang dibimbing:

```markdown
### 📋 Status Bimbingan Kelompok Binaan (Kelompok Alpha)
[![Status Kelompok Alpha](https://ascii.web.id/api/widget/tesintgsaja.svg?type=bimbingan&group=Alpha&theme=matrix)](https://ascii.web.id)
```

---

## ⚙️ Tabel Parameter Query

| Parameter | Tipe Data | Pilihan Nilai | Default | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `bimbingan` | *(Wajib)* | Menentukan tipe kartu yang dirender adalah kartu bimbingan. |
| `theme` | `string` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Palet tema warna SVG kartu bimbingan. |
| `group` / `groupId` / `project` | `string` | Nama kelompok / Judul / MK / UUID | *(Opsional)* | Filter spesifik ke kelompok atau mata kuliah tertentu. |

---

## 📈 Indikator Tahapan Bimbingan

Widget bimbingan secara cerdas menghitung progres berdasarkan status database konsul:

| Tahap | Status Konsul | Persentase | Indikator Card |
| :--- | :--- | :---: | :--- |
| **Pra-Konsul** | Belum ada ACC | `10%` | Dimulai |
| **Konsul 1** | Konsul 0 ACC | `35%` | Tahap awal selesai |
| **Konsul 2** | Konsul 1 ACC | `60%` | Pertengahan progress |
| **Siap ACC Final** | Konsul 2 ACC | `85%` | Siap sidang/evaluasi akhir |
| **ACC Final** | Final ACC Validated | `100%` | Selesai & Berhasil ACC ✨ |

---

## 📂 File Terkait
- [Contoh Lengkap README.md Repositori Tubes](./example-repo-readme.md)
- [Panduan Badge Shield Bimbingan](../tutor-badge-shields/README.md)
- [Dokumentasi API JSON](../tutor-api-json/README.md)
