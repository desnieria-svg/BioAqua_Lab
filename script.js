// Pengaturan Admin & WA
const WA_PHONE = "6281234567890"; // GANTI NOMOR ANDA

// Fungsi Modal
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// Order Modal (Pembeli)
function openOrderModal(name, price) {
    openModal('orderModal');
    document.getElementById('pName').value = name;
    document.getElementById('targetProd').innerText = `Produk: ${name} (Rp ${price.toLocaleString()})`;
}

// WA Function
function sendToWA(e) {
    e.preventDefault();
    const name = document.getElementById('bName').value;
    const addr = document.getElementById('bAddr').value;
    const qty = document.getElementById('bQty').value;
    const prod = document.getElementById('pName').value;

    const message = `*BIOAQUA LAB - PESANAN BARU*%0A---------------------------%0A*Produk:* ${prod}%0A*Nama:* ${name}%0A*Jumlah:* ${qty}%0A*Alamat:* ${addr}%0A---------------------------%0ATerima kasih.`;
    window.open(`https://wa.me/${WA_PHONE}?text=${message}`, '_blank');
    closeModal('orderModal');
}

// Login Admin
function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === "admin" && pass === "12345") {
        document.getElementById('userView').classList.add('hidden');
        document.getElementById('adminView').classList.remove('hidden');
        document.querySelector('.admin-access-btn').classList.add('hidden');
        closeModal('loginModal');
        window.scrollTo(0,0);
    } else {
        alert("Akses Gagal: Username atau Password Salah!");
    }
}

function logout() { location.reload(); }

// Tutup modal jika klik di luar area
window.onclick = function(e) {
    if (e.target.className === 'modal') {
        e.target.style.display = "none";
    }
}