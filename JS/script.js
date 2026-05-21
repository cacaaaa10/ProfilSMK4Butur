document.addEventListener('DOMContentLoaded', function() {
    // Efek tombol info
    const infoBtn = document.getElementById('infoBtn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            alert('SMK 4 Buton Utara membuka pendaftaran siswa baru setiap bulan Mei – Juli. Kunjungi halaman Jurusan untuk detail kompetensi.');
        });
    }

    // Tandai menu aktif berdasarkan halaman
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
