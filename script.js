// ================= FILTER PRODUK =================
function filterProduk(kategori) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (kategori === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(kategori)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

// ================= TOMBOL TAMBAH PRODUK =================
function pilihProduk(nama, harga) {
  let data = JSON.parse(localStorage.getItem("pesanan")) || [];

  data.push({
    nama: "Pembeli",
    tanggal: new Date().toISOString().split('T')[0],
    produk: nama,
    jumlah: 1,
    harga: harga,
    alamat: "-"
  });

  localStorage.setItem("pesanan", JSON.stringify(data));

  alert("Pesanan ditambahkan!");
}

// ================= LOAD DATA KE TABEL =================
window.onload = function() {
  let data = JSON.parse(localStorage.getItem("pesanan")) || [];

  // ===== PESANAN =====
  let tabel = document.getElementById("tabelPesanan");
  if (tabel) {
    data.forEach((item, index) => {
      let row = tabel.insertRow();

      row.insertCell(0).innerText = index + 1;
      row.insertCell(1).innerText = item.nama;
      row.insertCell(2).innerText = item.tanggal;
      row.insertCell(3).innerText = item.produk;
      row.insertCell(4).innerText = item.jumlah;
      row.insertCell(5).innerText = item.harga;
    });
  }

  // ===== LAPORAN =====
  let laporan = document.getElementById("laporanTable");
  if (laporan) {
    data.forEach((item, index) => {
      let row = laporan.insertRow();

      row.insertCell(0).innerText = index + 1;
      row.insertCell(1).innerText = item.nama;
      row.insertCell(2).innerText = item.tanggal;
      row.insertCell(3).innerText = item.produk;
      row.insertCell(4).innerText = item.jumlah;
      row.insertCell(5).innerText = item.harga;
      row.insertCell(6).innerText = item.alamat;
    });
  }

  // ===== CHART =====
  let canvas = document.getElementById("chart");
  if (canvas) {
    let ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
          label: "Penjualan",
          data: [10, 20, 30]
        }]
      }
    });
  }
};