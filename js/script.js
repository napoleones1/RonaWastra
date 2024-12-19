document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form default
  
    const email = document.getElementById('email').value.trim();
  
    console.log("Email yang dimasukkan:", email); // Debug input email
  
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // Regex sederhana
    console.log("Regex cocok?", emailPattern.test(email)); // Debug hasil regex
  
    if (!emailPattern.test(email)) {
      alert('Harap masukkan email yang valid!');
      return;
    }
  
    alert('Pesan Anda berhasil dikirim!');
  });
  