// Menangani pengiriman form kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

   
const email = this.querySelector('input[type="email"]').value;
const message = this.querySelector('textarea').value;

// Menampilkan pesan konfirmasi
alert(`Pesan Anda telah dikirim!\nEmail: ${email}\nPesan: ${message}`);

// Reset field form
this.reset();
});