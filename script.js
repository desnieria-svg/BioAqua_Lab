let produk=[
{nama:"Produk 1",harga:5000,gambar:"produk1.jpg"},
{nama:"Produk 2",harga:10000,gambar:"produk2.jpg"},
{nama:"Produk 3",harga:15000,gambar:"produk3.jpg"}
]

let penjualan={}
let pilih=null
let isAdmin=false

function render(){
let el=document.getElementById("produkList")
el.innerHTML=""

produk.forEach((p,i)=>{
el.innerHTML+=`
<div class="card">
<img src="${p.gambar}">
<div class="card-body">
<h3>${p.nama}</h3>
<p>Rp ${p.harga}</p>
${isAdmin?"":`<button onclick="openBeli(${i})">Beli</button>`}
</div>
</div>`
})
}
render()

function openLogin(){
document.getElementById("loginModal").classList.add("show")
}
function closeLogin(){
document.getElementById("loginModal").classList.remove("show")
}

function login(){
if(user.value==="admin" && pass.value==="123"){
isAdmin=true
panelAdmin.style.display="block"
closeLogin()
render()
}
}

function openBeli(i){
pilih=i
document.getElementById("beliModal").classList.add("show")
}

function closeBeli(){
document.getElementById("beliModal").classList.remove("show")
}

function beli(){
let nama=document.getElementById("namaPembeli").value
let hp=document.getElementById("nohp").value
let alamat=document.getElementById("alamat").value
let jumlah=document.getElementById("jumlah").value
let metode=document.getElementById("metode").value

if(!nama||!hp||!alamat||!jumlah){
alert("Isi semua data!")
return
}

let p=produk[pilih]

penjualan[p.nama]=(penjualan[p.nama]||0)+parseInt(jumlah)

let pesan=`Halo Admin BioAqua
Nama: ${nama}
No HP: ${hp}
Alamat: ${alamat}

Pesan:
${p.nama} x${jumlah}

Metode: ${metode}`

// 🔥 GANTI NOMOR ADMIN
window.open(`https://wa.me/628XXXXXXXXXX?text=${encodeURIComponent(pesan)}`)

closeBeli()
}

function tambahProduk(){
produk.push({
nama:nama.value,
harga:harga.value,
gambar:gambar.value
})
render()
}