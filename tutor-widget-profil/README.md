# Tutorial: Widget Kartu Profil Mahasiswa & Aslab (Informatika Unmul)

Halo teman-teman Informatika Unmul! 👋

Ini panduan buat pasang **Widget Kartu Profil (Default Card)** dari [ASCII IF](https://ascii.web.id). Widget ini bikin profil GitHub kamu makin keren dengan kartu SVG dinamis yang nampilin identitas akun lab kamu, role (aslab/praktikan), angkatan, kelas, sampai statistik portofolio secara otomatis.

---

## 📌 Daftar Isi
- [Apa Saja yang Ditampilkan?](#-apa-saja-yang-ditampilkan)
- [Format Endpoint](#-format-endpoint)
- [Pilihan Tema Warna](#-pilihan-tema-warna)
- [Contoh Pemakaian](#-contoh-pemakaian)
  - [Markdown](#markdown)
  - [HTML](#html)
- [Studi Kasus: Pasang di Profil GitHub Pribadi](#-studi-kasus-pasang-di-profil-github-pribadi)
- [Tabel Parameter](#-tabel-parameter)
- [File Terkait](#-file-terkait)

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

## 🎨 Pilihan Tema Warna

Ada 4 pilihan warna keren yang bisa kamu sesuaikan dengan tema GitHub kamu:

| Tema | Parameter | Karakter Warna |
| :--- | :--- | :--- |
| **Burgundy** | `theme=burgundy` | Merah marun khas identitas ASCII IF *(Default)* |
| **Dark** | `theme=dark` | Slate/charcoal gelap elegan & kontras |
| **Matrix** | `theme=matrix` | Hijau neon retro ala terminal hacker |
| **Light** | `theme=light` | Putih bersih & minimalis |

---

## 💡 Contoh Pemakaian

### Markdown
```markdown
<!-- Tema Burgundy (Default) -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg)](https://ascii.web.id)

<!-- Tema Dark -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=dark)](https://ascii.web.id)

<!-- Tema Matrix -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=matrix)](https://ascii.web.id)

<!-- Tema Light -->
[![Kartu Profil ASCII](https://ascii.web.id/api/widget/testingaja.svg?theme=light)](https://ascii.web.id)
```

### HTML (Bisa Diatur Posisi Tengah)
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

**Contoh di `README.md` Profil**:

```markdown
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

### 🔗 Link
- 🌐 [Portal Lab ASCII IF](https://ascii.web.id)
- 💼 [LinkedIn](https://linkedin.com)
```

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
