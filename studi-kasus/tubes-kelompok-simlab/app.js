// SIMLAB - Aplikasi Inventaris Laboratorium Informatika Unmul
// Dibuat oleh Kelompok 3 (Kelas C)

const initialInventory = [
  { id: '1', name: 'Arduino Uno R3 Starter Kit', cat: 'IoT & Embedded', desc: 'Kit mikrokontroler lengkap dengan breadboard, sensor suhu, LED, dan kabel jumper.', stock: 12, available: 9 },
  { id: '2', name: 'Raspberry Pi 4 Model B (4GB)', cat: 'IoT & Embedded', desc: 'Single-board computer untuk praktikum sistem terdistribusi dan IoT edge server.', stock: 8, available: 5 },
  { id: '3', name: 'ESP32 Wi-Fi + Bluetooth NodeMCU', cat: 'IoT & Embedded', desc: 'Modul mikrokontroler IoT dengan integrasi Wi-Fi dan Bluetooth BLE terintegrasi.', stock: 20, available: 15 },
  { id: '4', name: 'Cisco Catalyst 2960 Switch 24-Port', cat: 'Jaringan', desc: 'Switch managed layer 2 untuk konfigurasi VLAN dan praktikum Jaringan Komputer.', stock: 4, available: 2 },
  { id: '5', name: 'MikroTik RouterBOARD RB750Gr3', cat: 'Jaringan', desc: 'Router 5 port Gigabit Ethernet untuk praktikum routing dinamis OSPF & firewall.', stock: 10, available: 7 },
  { id: '6', name: 'Crimping Tool RJ45 + Cable Tester', cat: 'Jaringan', desc: 'Tang crimping kabel UTP Cat5e/Cat6 lengkap dengan penguji kontinuitas kabel LAN.', stock: 15, available: 11 },
  { id: '7', name: 'Meta Quest 2 VR Headset', cat: 'Komputer & VR', desc: 'Perangkat virtual reality untuk praktikum Multimedia, Grafika Komputer, dan Game Dev.', stock: 3, available: 1 },
  { id: '8', name: 'Logitech C922 Pro Streaming Webcam', cat: 'Komputer & VR', desc: 'Kamera Full HD 1080p 60fps untuk praktikum Computer Vision dan pengenalan wajah.', stock: 6, available: 4 },
  { id: '9', name: 'Sensor Ultrasonic HC-SR04 & Servo', cat: 'IoT & Embedded', desc: 'Modul pengukur jarak gelombang ultrasonik dan motor servo mini SG90.', stock: 25, available: 18 }
];

let inventoryData = [...initialInventory];
let currentCategory = 'all';
let searchQuery = '';

function initApp() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  renderInventory();
  populateBorrowSelect();
  setupEventListeners();
  updateStats();
}

function renderInventory() {
  const container = document.getElementById('inventoryList');
  if (!container) return;

  const filtered = inventoryData.filter((item) => {
    const matchCat = currentCategory === 'all' || item.cat === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  document.getElementById('inventoryCount').textContent = `${filtered.length} Perangkat`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748B;">
        <i data-lucide="package-x" style="width: 48px; height: 48px; margin-bottom: 0.5rem;"></i>
        <p>Tidak ada alat lab yang sesuai dengan pencarian.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map((item) => {
    let badgeClass = 'badge-available';
    let badgeText = 'Tersedia';
    if (item.available === 0) {
      badgeClass = 'badge-empty';
      badgeText = 'Kosong';
    } else if (item.available <= 2) {
      badgeClass = 'badge-low';
      badgeText = 'Stok Tipis';
    }

    return `
      <div class="item-card">
        <div>
          <div class="item-top">
            <span class="item-cat">${item.cat}</span>
            <span class="item-badge ${badgeClass}">${badgeText}</span>
          </div>
          <h4 class="item-name">${item.name}</h4>
          <p class="item-desc">${item.desc}</p>
        </div>

        <div class="item-footer">
          <div class="stock-info">
            Tersedia: <strong>${item.available}</strong> / ${item.stock} Unit
          </div>
          <button class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="openBorrowModalFor('${item.id}')">
            Pinjam
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateStats() {
  const totalKinds = inventoryData.length;
  const totalAvailable = inventoryData.reduce((acc, curr) => acc + curr.available, 0);
  const totalStock = inventoryData.reduce((acc, curr) => acc + curr.stock, 0);
  const totalBorrowed = totalStock - totalAvailable;

  const statTotal = document.getElementById('statTotalItems');
  const statAvail = document.getElementById('statAvailable');
  const statBorr = document.getElementById('statBorrowed');

  if (statTotal) statTotal.textContent = totalKinds;
  if (statAvail) statAvail.textContent = totalAvailable;
  if (statBorr) statBorr.textContent = totalBorrowed;
}

function populateBorrowSelect() {
  const select = document.getElementById('borrowItemSelect');
  if (!select) return;

  select.innerHTML = inventoryData.map((item) => `
    <option value="${item.id}" ${item.available === 0 ? 'disabled' : ''}>
      ${item.name} (Sisa: ${item.available} unit)
    </option>
  `).join('');
}

window.openBorrowModalFor = function(itemId) {
  const modal = document.getElementById('borrowModal');
  const select = document.getElementById('borrowItemSelect');
  if (select && itemId) {
    select.value = itemId;
  }
  if (modal) modal.classList.add('open');
};

function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInventory();
    });
  }

  // Filter category
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      renderInventory();
    });
  });

  // Modal controls
  const modal = document.getElementById('borrowModal');
  const btnOpen = document.getElementById('btnOpenBorrowModal');
  const btnClose = document.getElementById('btnCloseModal');
  const btnCancel = document.getElementById('btnCancelModal');
  const form = document.getElementById('borrowForm');

  if (btnOpen) btnOpen.addEventListener('click', () => modal.classList.add('open'));
  if (btnClose) btnClose.addEventListener('click', () => modal.classList.remove('open'));
  if (btnCancel) btnCancel.addEventListener('click', () => modal.classList.remove('open'));

  // Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemId = document.getElementById('borrowItemSelect').value;
      const amount = parseInt(document.getElementById('borrowAmount').value, 10) || 1;
      const nim = document.getElementById('borrowerNim').value;
      const name = document.getElementById('borrowerName').value;

      const item = inventoryData.find((i) => i.id === itemId);
      if (item && item.available >= amount) {
        item.available -= amount;
        alert(`✅ Pengajuan Peminjaman Berhasil!\n\nAlat: ${item.name}\nJumlah: ${amount} Unit\nPeminjam: ${name} (${nim})\nStatus: Terverifikasi oleh SIMLAB`);
        modal.classList.remove('open');
        renderInventory();
        populateBorrowSelect();
        updateStats();
      } else {
        alert('❌ Stok alat yang diminta tidak mencukupi!');
      }
    });
  }

  // Set default return date = today + 3 days
  const borrowDate = document.getElementById('borrowDate');
  if (borrowDate) {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    borrowDate.value = d.toISOString().split('T')[0];
  }
}

document.addEventListener('DOMContentLoaded', initApp);
