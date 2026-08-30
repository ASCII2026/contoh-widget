# Tutorial: Widget Discord Live Presence & Spotify (Informatika Unmul)

Halo teman-teman Informatika Unmul! 👋

Mau profil GitHub kamu kelihatan lebih hidup dan interaktif? Panduan ini bakal bantu kamu pasang **Widget Discord Live Presence** dari [ASCII IF](https://ascii.web.id). 

Widget ini otomatis nampilin status Discord kamu (Online, Idle, DND), lagu Spotify yang lagi kamu dengerin, status game / coding di VS Code, custom status, dan role server kamu di komunitas lab.

---

## 📌 Daftar Isi
- [Syarat Penggunaan](#-syarat-penggunaan)
- [Apa Saja yang Ditampilkan?](#-apa-saja-yang-ditampilkan)
- [Format Endpoint](#-format-endpoint)
- [Contoh Pemakaian](#-contoh-pemakaian)
  - [1. Avatar Server (Default)](#1-avatar-server-default)
  - [2. Avatar Global Discord](#2-avatar-global-discord)
  - [3. Dengan Pilihan Tema](#3-dengan-pilihan-tema)
  - [4. Role dari Server Tertentu (Guild)](#4-role-dari-server-tertentu-guild)
- [Studi Kasus: Profil GitHub Developer yang Interaktif](#-studi-kasus-profil-github-developer-yang-interaktif)
- [Tabel Parameter](#-tabel-parameter)
- [Tips & Troubleshooting](#-tips--troubleshooting)

---

## 🔐 Syarat Penggunaan
Biar widgetnya bisa jalan, pastikan:
1. Akun Discord kamu sudah **dihubungkan (linked)** ke akun portal [ASCII IF](https://ascii.web.id) lewat menu **Pengaturan > Akun Terhubung**.
2. Kamu sudah join server Discord resmi ASCII IF Informatika Unmul.

---

## 🎧 Apa Saja yang Ditampilkan?
1. **Live Presence Status**: Indikator status kamu (🟢 Online, 🟡 Idle, 🔴 Do Not Disturb, ⚫ Offline).
2. **Integrasi Spotify**: Judul lagu, penyanyi, dan cover album yang lagi kamu putar di Spotify secara real-time.
3. **Rich Presence Activity**: Info kalau kamu lagi coding di VS Code atau lagi main game.
4. **Custom Status**: Status teks dan emoji personal kamu di Discord.
5. **Discord Roles**: Tag role server lengkap dengan warna badge-nya.
6. **Avatar & Banner**: Foto profil dan aksen warna banner Discord kamu.

---

## 🌐 Format Endpoint

```
https://ascii.web.id/api/widget/{IDENTIFIER}.svg?type=discord[&avatar={server|global}][&guild={GUILD_ID}][&theme={THEME}]
```

> `{IDENTIFIER}` bisa kamu isi dengan **NIM / Username ASCII IF** kamu atau **Discord User ID** kamu.

---

## 💡 Contoh Pemakaian

### 1. Avatar Server (Default)
Menggunakan avatar profil server Discord:
```markdown
[![Discord Live Presence](https://ascii.web.id/api/widget/testingaja.svg?type=discord)](https://ascii.web.id)
```

### 2. Avatar Global Discord
Menggunakan foto avatar utama akun Discord kamu:
```markdown
[![Discord Live Presence](https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global)](https://ascii.web.id)
```

### 3. Dengan Pilihan Tema
```markdown
<!-- Tema Dark -->
[![Discord Dark](https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global&theme=dark)](https://ascii.web.id)

<!-- Tema Matrix -->
[![Discord Matrix](https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global&theme=matrix)](https://ascii.web.id)
```

### 4. Role dari Server Tertentu (Guild)
```markdown
[![Discord Guild](https://ascii.web.id/api/widget/testingaja.svg?type=discord&guild=1203659210747944983)](https://ascii.web.id)
```

### HTML (Posisi Tengah)
```html
<p align="center">
  <a href="https://ascii.web.id">
    <img src="https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global&theme=dark" alt="Discord Live Activity" />
  </a>
</p>
```

---

## 🎯 Studi Kasus: Profil GitHub Developer yang Interaktif

**Skenario**:
Kamu suka dengerin musik pas lagi ngerjain tugas/coding, dan pengen status Spotify & Discord kamu terpampang keren di profil GitHub.

**Contoh di `README.md`**:

```markdown
# ⚡ Live Activity & Spotify

Lagi dengerin apa dan lagi ngapain sekarang? Cek status live Discord aku di bawah ini:

<p align="center">
  <a href="https://discord.com">
    <img src="https://ascii.web.id/api/widget/testingaja.svg?type=discord&avatar=global&theme=dark" alt="Live Discord Status" />
  </a>
</p>

> 💡 *Widget ini otomatis update setiap 60 detik lewat gateway Discord ASCII IF.*
```

---

## ⚙️ Tabel Parameter

| Parameter | Pilihan Nilai | Default | Penjelasan |
| :--- | :--- | :--- | :--- |
| `type` | `discord` | *(Wajib)* | Wajib diisi `discord`. |
| `avatar` | `server`, `global` | `server` | Pilih mau pakai avatar server atau avatar global Discord. |
| `theme` | `burgundy`, `dark`, `matrix`, `light` | `burgundy` | Pilihan skema warna widget. |
| `guild` | Discord Server ID (angka) | Server ASCII IF | ID Server Discord kalau mau nampilin role dari server tertentu. |

---

## 🔧 Tips & Troubleshooting

| Kendala | Penyebab | Solusi |
| :--- | :--- | :--- |
| **"Discord Not Linked"** | Akun Discord belum di-link di web ASCII IF. | Buka `ascii.web.id/settings` terus klik tombol Hubungkan Discord. |
| **Spotify tidak muncul** | Pengaturan Spotify di Discord belum dibagikan. | Di Discord: User Settings > Connections > Aktifkan "Display Spotify as your status". |
| **Status Offline terus** | Kamu lagi pasang status Invisible di Discord. | Ganti status Discord kamu jadi Online / Idle / DND. |

---

## 📂 File Terkait
- [Widget Profil Mahasiswa](../tutor-widget-profil/README.md)
- [Widget Bimbingan per Project](../tutor-bimbingan-project/README.md)
- [Template README Lengkap](../template-studi-kasus/README.md)
