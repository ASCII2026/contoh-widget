# Tutorial: Widget Discord Live Presence & Spotify

Panduan lengkap penggunaan **Widget Discord Live Presence** dari [ASCII IF](https://ascii.web.id). Widget ini menampilkan status aktivitas Discord Anda secara *real-time*, lagu Spotify yang sedang diputar, status bermain game/coding di VS Code, custom status, role server, dan avatar.

---

## 📌 Daftar Isi
- [Prasyarat](#-prasyarat)
- [Fitur yang Ditampilkan](#-fitur-yang-ditampilkan)
- [Format Endpoint](#-format-endpoint)
- [Parameter Discord](#-parameter-discord)
- [Contoh Pemakaian](#-contoh-pemakaian)
  - [Avatar Server (Default)](#1-avatar-server-default)
  - [Avatar Global Discord](#2-avatar-global-discord)
  - [Dengan Tema Khusus](#3-dengan-tema-khusus)
  - [Dengan Server ID Tertentu (Guild)](#4-dengan-server-id-tertentu-guild)
- [Studi Kasus: Profil GitHub Developer Interaktif](#-studi-kasus-profil-github-developer-interaktif)
- [Tabel Parameter](#-tabel-parameter)
- [Penyelesaian Masalah (Troubleshooting)](#-penyelesaian-masalah-troubleshooting)

---

## 🔐 Prasyarat
Untuk menggunakan widget Discord, pastikan:
1. Akun Discord Anda telah **dihubungkan (linked)** ke akun portal [ASCII IF](https://ascii.web.id) melalui menu **Pengaturan > Akun Terhubung**.
2. Anda telah bergabung ke server Discord resmi ASCII IF.

---

## 🎧 Fitur yang Ditampilkan
1. **Live Presence Status**: Indikator bulat status (🟢 Online, 🟡 Idle, 🔴 Do Not Disturb, ⚫ Offline).
2. **Spotify Integration**: Judul lagu, artis, album art thumbnail, dan durasi yang sedang Anda dengarkan di Spotify secara live.
3. **Rich Presence Activity**: Game yang sedang dimainkan atau aktivitas coding di Visual Studio Code.
4. **Custom Status**: Emoji dan teks status personal Anda di Discord.
5. **Discord Roles**: Tag role server lengkap dengan warna role asli Discord.
6. **Avatar & Banner**: Banner warna aksen dan foto profil Discord.

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{IDENTIFIER}.svg?type=discord[&avatar={server|global}][&guild={GUILD_ID}][&theme={THEME}]
```

> `{IDENTIFIER}` dapat diisi dengan **NIM/Username ASCII IF** atau **Discord User ID** Anda (18-19 digit angka).

---

## 💡 Contoh Pemakaian

### 1. Avatar Server (Default)
Menggunakan avatar profil server Discord:
```markdown
[![Discord Live Presence](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord)](https://ascii.web.id)
```

### 2. Avatar Global Discord
Menggunakan avatar akun Discord global:
```markdown
[![Discord Live Presence](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global)](https://ascii.web.id)
```

### 3. Dengan Tema Khusus
```markdown
<!-- Tema Dark -->
[![Discord Dark](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)

<!-- Tema Matrix -->
[![Discord Matrix](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global&theme=matrix)](https://ascii.web.id)
```

### 4. Dengan Server ID Tertentu (Guild)
Jika Anda memiliki role di server tertentu yang ingin ditampilkan:
```markdown
[![Discord Guild](https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&guild=1203659210747944983)](https://ascii.web.id)
```

### HTML (Center Layout)
```html
<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global&theme=dark" alt="Discord Live Activity" />
  </a>
</p>
```

---

## 🎯 Studi Kasus: Profil GitHub Developer Interaktif

**Skenario**:
Anda ingin profil GitHub Anda terasa hidup dengan menampilkan status musik Spotify yang sedang Anda dengarkan dan aktivitas coding harian Anda secara otomatis tanpa setup bot ribet.

**Contoh Penerapan di `README.md`**:

```markdown
# ⚡ Live Activity & Status

Saya sering mendengarkan musik saat coding dan aktif di Discord. Berikut status live saya saat ini:

<p align="center">
  <a href="https://discord.com">
    <img src="https://ascii.web.id/api/widget/tesintgsaja.svg?type=discord&avatar=global&theme=dark" alt="Live Discord Status" />
  </a>
</p>

> 💡 *Widget di atas terupdate otomatis setiap 60 detik melalui integrasi Discord Gateway ASCII IF.*
```

---

## ⚙️ Tabel Parameter

| Parameter | Pilihan Nilai | Default | Keterangan |
| :--- | :--- | :--- | :--- |
| `type` | `discord` | *(Wajib)* | Menentukan kartu tipe Discord. |
| `avatar` | `server`, `global` | `server` | Sumber foto avatar (Server Guild atau Akun Global). |
| `theme` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Tema warna latar belakang widget. |
| `guild` | Discord Server ID (angka) | Server ASCII IF | Menentukan server Discord untuk membaca role dan nickname. |

---

## 🔧 Penyelesaian Masalah (Troubleshooting)

| Gejala Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| **"Discord Not Linked"** | Akun Discord belum di-link di portal ASCII. | Masuk ke `ascii.web.id/settings` dan klik hubungkan Discord. |
| **Spotify tidak muncul** | Privasi Spotify di Discord belum diaktifkan. | Buka Discord App > User Settings > Connections > Aktifkan "Display Spotify as your status". |
| **Status Offline padahal Online** | Akun berada di mode Invisible atau bot belum mendeteksi. | Ubah status Discord menjadi Online / DND / Idle di aplikasi Discord. |

---

## 📂 File Terkait
- [Widget Profil Mahasiswa](../tutor-widget-profil/README.md)
- [Widget Bimbingan per Project](../tutor-bimbingan-project/README.md)
- [Template README Lengkap](../template-studi-kasus/README.md)
