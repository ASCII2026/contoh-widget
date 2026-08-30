# Tutorial: Integrasi REST API JSON (`/api/widget-data`)

Halo teman-teman dev & mahasiswa Informatika Unmul! 👋

Kalau kamu mau bikin tampilan kustom sendiri—misalnya mau pasang data bimbingan di website portofolio pribadi (Next.js, Astro, React), bikin bot Discord pengingat bimbingan, atau skrip CLI Python—kamu bisa pakai endpoint data mentah JSON dari [ASCII IF](https://ascii.web.id).

---

## 📌 Daftar Isi
- [Format Endpoint](#-format-endpoint)
- [Header Response & Cache](#-header-response--cache)
- [Struktur Response JSON](#-struktur-response-json)
- [Penanganan Error](#-penanganan-error)
- [Contoh Kode](#-contoh-kode)
  - [JavaScript / TypeScript (Fetch API)](#1-javascript--typescript-fetch-api)
  - [Python (Requests)](#2-python-requests)
  - [cURL CLI](#3-curl-cli)
- [Studi Kasus: Pasang Status Bimbingan di Web Portofolio](#-studi-kasus-pasang-status-bimbingan-di-web-portofolio)
- [File Terkait](#-file-terkait)

---

## 🌐 Format Endpoint

```http
GET https://ascii.web.id/api/widget-data/{IDENTIFIER}
```

> `{IDENTIFIER}` bisa kamu isi dengan **NIM / Username**, **Group ID (UUID)**, atau **Discord ID** kamu.

---

## ⚡ Header Response & Cache

Endpoint ini sudah siap pakai dan open CORS:
- `Content-Type`: `application/json; charset=utf-8`
- `Cache-Control`: `public, max-age=60, s-maxage=120, stale-while-revalidate=600`
- `Access-Control-Allow-Origin`: `*`

---

## 📦 Struktur Response JSON

```json
{
  "user": {
    "id": "c1f729b8-1549-4328-ba17-64670c79ec0a",
    "name": "Muhammad Alif",
    "username": "2209106127",
    "role": "praktikan",
    "angkatan": "2022",
    "kelas": "C",
    "image": "https://avatar.example.com/alif.jpg",
    "createdAt": "2024-01-15T08:30:00.000Z"
  },
  "discord": {
    "isLinked": true,
    "discordId": "1203659210747944983",
    "username": "aristotless.",
    "globalName": "Aristotle.",
    "avatarUrl": "https://cdn.discordapp.com/avatars/1203659210747944983/a_xyz.png",
    "bannerUrl": null,
    "accentColor": "#5865F2",
    "customStatus": "Ngoding tugas praktikum 🚀",
    "clientDevice": "desktop",
    "spotify": {
      "song": "Starboy",
      "artist": "The Weeknd, Daft Punk",
      "album": "Starboy",
      "albumArtUrl": "https://i.scdn.co/image/ab67616d0000b273..."
    },
    "presence": {
      "status": "online",
      "activity": "Visual Studio Code"
    },
    "roles": [
      {
        "tag": "PRAKTIKAN",
        "name": "Praktikan PBO",
        "color": "#3498db"
      }
    ]
  },
  "bimbingan": {
    "isAslabRole": false,
    "totalGroups": 1,
    "primaryStageLabel": "ACC Final",
    "primarySubtitle": "Tugas Besar Pemrograman Web",
    "groups": [
      {
        "id": "6b8850ff-27c9-4a06-b33a-866ec8d87a71",
        "namaKelompok": "Kelompok 5",
        "judul": "Sistem Informasi Manajemen Inventaris Lab",
        "kelas": "C",
        "mataKuliahName": "Pemrograman Web",
        "aslabName": "Kak Aslab",
        "currentStageLabel": "ACC Final",
        "statusKonsul0": "acc",
        "statusKonsul1": "acc",
        "statusKonsul2": "acc",
        "isAccFinal": true,
        "progressPercentage": 100
      }
    ]
  },
  "projects": {
    "totalCount": 3,
    "totalLikes": 18,
    "latestProjectTitle": "SIMLAB - Inventory System",
    "topProjectTitle": "SIMLAB - Inventory System",
    "topProjectLikes": 12,
    "topProjectDesc": "Sistem inventaris lab Informatika Unmul"
  }
}
```

---

## ⚠️ Penanganan Error

Kalau ID atau NIM tidak ditemukan di database:

**Status Code**: `404 Not Found`
```json
{
  "error": "NOT_FOUND",
  "message": "Pengguna tidak ditemukan"
}
```

---

## 💻 Contoh Kode

### 1. JavaScript / TypeScript (Fetch API)

```typescript
async function getAsciiProfile(identifier: string) {
  try {
    const res = await fetch(`https://ascii.web.id/api/widget-data/${identifier}`);
    if (!res.ok) return null;
    const data = await res.json();
    console.log(`Halo ${data.user.name}, status bimbingan kamu: ${data.bimbingan?.primaryStageLabel}`);
    return data;
  } catch (err) {
    console.error('Gagal mengambil data:', err);
    return null;
  }
}
```

### 2. Python (Requests)

```python
import requests

def cek_status_bimbingan(nim: str):
    url = f"https://ascii.web.id/api/widget-data/{nim}"
    res = requests.get(url, timeout=5)
    
    if res.status_code == 200:
        data = res.json()
        stage = data.get("bimbingan", {}).get("primaryStageLabel", "Belum ada")
        print(f"Nama: {data['user']['name']} | Stage: {stage}")
        return data
    else:
        print("Data tidak ditemukan!")
        return None

if __name__ == "__main__":
    cek_status_bimbingan("2209106127")
```

### 3. cURL CLI

```bash
curl -s https://ascii.web.id/api/widget-data/2209106127 | jq .
```

---

## 🎯 Studi Kasus: Pasang Status Bimbingan di Web Portofolio

**Skenario**:
Kamu lagi bikin website portofolio pribadi pakai Astro atau Next.js dan pengen nampilin badge live status bimbingan praktikum Informatika Unmul.

**Komponen React Contoh**:

```tsx
import React, { useEffect, useState } from 'react';

export function StatusBimbinganBadge({ username }: { username: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://ascii.web.id/api/widget-data/${username}`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data || data.error) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-200">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span>ASCII LAB UNMUL: <strong>{data.bimbingan?.primaryStageLabel || 'Aktif'}</strong></span>
    </div>
  );
}
```

---

## 📂 File Terkait
- [Skrip Contoh Python (`fetch_example.py`)](./fetch_example.py)
- [Skrip Contoh TypeScript (`fetch_example.ts`)](./fetch_example.ts)
- [Widget Bimbingan per Project](../tutor-bimbingan-project/README.md)
