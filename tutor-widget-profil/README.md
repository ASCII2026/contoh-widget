# Tutorial: Widget Kartu Profil Mahasiswa & Aslab (Informatika Unmul)

Halo teman-teman Informatika Unmul! 👋

Ini panduan buat pasang **Widget Kartu Profil (Default Card)** dari [ASCII IF](https://ascii.web.id). Widget ini bikin profil GitHub kamu makin keren dengan kartu SVG dinamis yang nampilin identitas akun lab kamu, role (aslab/praktikan), angkatan, kelas, sampai statistik portofolio secara otomatis.

---

## 📌 Daftar Isi
- [Preview Live Nyata](#-preview-live-nyata)
- [Apa Saja yang Ditampilkan?](#-apa-saja-yang-ditampilkan)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Tema Warna & Preview](#-pilihan-tema-warna--preview)
- [Contoh Pemakaian](#-contoh-pemakaian)
- [Studi Kasus: Pasang di Profil GitHub Pribadi](#-studi-kasus-pasang-di-profil-github-pribadi)
- [Tabel Parameter](#-tabel-parameter)
- [File Terkait](#-file-terkait)

---

## ⚡ Preview Live Nyata

Berikut tampilan live kartu SVG langsung dari server untuk akun `testingaja`:

[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg)](https://ascii.web.id)

---

## 📋 Apa Saja yang Ditampilkan?
Kartu profil ini otomatis ngambil data dari database portal [ASCII IF](https://ascii.web.id):
1. **Identitas**: Nama lengkap kamu, NIM/Username, dan foto avatar.
2. **Akademik & Lab**: Role akun (`Praktikan`, `Aslab`), Angkatan, dan Kelas praktikum di Informatika Unmul.
3. **Statistik Portofolio**: Jumlah karya/proyek yang sudah kamu showcase di portal.
4. **Progres Bimbingan**: Status tahapan bimbingan praktikum terkini kamu.

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{NIM_ATAU_USERNAME}.svg[?theme={THEME}]
```

> Tinggal ganti `{NIM_ATAU_USERNAME}` dengan NIM kamu (misal: `2200018000`) atau username akun ASCII IF kamu.

---

## 🎨 Pilihan Tema Warna & Preview

Kamu bisa pilih dari 4 tema warna bawaan berikut:

### 1. Tema Burgundy (Default)
[![Tema Burgundy](https://ascii.web.id/api/widget/testingaja.svg?theme=burgundy)](https://ascii.web.id)

```markdown
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=burgundy)](https://ascii.web.id)
```

---

### 2. Tema Dark
[![Tema Dark](https://ascii.web.id/api/widget/testingaja.svg?theme=dark)](https://ascii.web.id)

```markdown
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=dark)](https://ascii.web.id)
```

---

### 3. Tema Matrix
[![Tema Matrix](https://ascii.web.id/api/widget/testingaja.svg?theme=matrix)](https://ascii.web.id)

```markdown
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=matrix)](https://ascii.web.id)
```

---

### 4. Tema Light
[![Tema Light](https://ascii.web.id/api/widget/testingaja.svg?theme=light)](https://ascii.web.id)

```markdown
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=light)](https://ascii.web.id)
```

---

## 💡 Contoh Pemakaian HTML (Tengah / Centered)

```html
<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/testingaja.svg?theme=burgundy" alt="Kartu Profil ASCII IF" width="480" />
  </a>
</p>
```

---

## 🎯 Studi Kasus: Pasang di Profil GitHub Pribadi

**Skenario**:
Sebagai mahasiswa Informatika Unmul (baik praktikan atau aslab), kamu mau memajang kartu identitas lab di halaman depan profil GitHub kamu (`username/username`) biar makin rapi dan profesional.

**Preview Hasil Nyata**:

# Halo, Aku Muhammad Alif 👋
> Mahasiswa Informatika Universitas Mulawarman • Praktikan Lab ASCII IF

<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/testingaja.svg?theme=burgundy" alt="Kartu Profil ASCII IF" />
  </a>
</p>

### 🛠️ Bahasa & Teknologi Favorit
- **Bahasa**: TypeScript, Python, C++, Go
- **Web**: React, Next.js, Node.js, Tailwind CSS
- **Database**: PostgreSQL, SQLite, Redis

---

## ⚙️ Tabel Parameter

| Parameter | Tipe Data | Pilihan Nilai | Default | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `theme` | `string` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Menentukan warna kartu. |

---

## 📂 File Terkait
- [Template Profil GitHub Lengkap](./example-profile-readme.md)
- [Widget Discord Live Presence](../tutor-widget-discord/README.md)
- [Koleksi Badge Shields](../tutor-badge-shields/README.md)
