const tbody = document.querySelector("#jadwalTable tbody");
const btnSimpan = document.getElementById("btnSimpan");

// Tambahkan jadwal ke tabel
function tambahKeTabel(hari, waktu, tempat, catatan) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${hari}</td>
        <td>${waktu}</td>
        <td>${tempat}</td>
        <td>${catatan}</td>
        <td>
            <button class="btn btn-danger btn-sm animated-btn btnHapus">Hapus</button>
        </td>
    `;

    tbody.appendChild(tr);

    // Event tombol hapus
    tr.querySelector(".btnHapus").addEventListener("click", () => {
        tr.remove();
    });
}

// Saat tombol simpan ditekan
btnSimpan.addEventListener("click", () => {
    const hari = document.getElementById("hari").value;
    const waktu = document.getElementById("waktu").value;
    const tempat = document.getElementById("tempat").value;
    const catatan = document.getElementById("catatan").value;

    if (!hari || !waktu || !tempat) {
        alert("Data wajib diisi!");
        return;
    }

    tambahKeTabel(hari, waktu, tempat, catatan);

    document.getElementById("formJadwal").reset();

    // Tutup modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("modalTambah"));
    modal.hide();
});

// Jadwal awal
tambahKeTabel("Senin", "19:00 - 21:00", "GOR Cempaka", "Latihan rutin");
tambahKeTabel("Rabu", "19:00 - 21:00", "GOR Jati", "Sparring");
tambahKeTabel("Jumat", "20:00 - 22:00", "GOR Merpati", "Latihan fisik");
