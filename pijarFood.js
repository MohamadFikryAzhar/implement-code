function PijarFood(harga, voucher, jarak, pajak) {
    // Mengecek apakah voucher 'PIJARFOOD5' digunakan
    if (voucher === 'PIJARFOOD5') {
      // Mengecek apakah harga lebih dari 50000 (50rb)
      if (harga >= 50000) {
        // Menghitung potongan sebesar 50% atau maksimal 50000
        var potongan = Math.min(harga * 0.5, 50000);
        // Mengurangi potongan dari harga
        harga -= potongan;
      }
    }
    // Mengecek apakah voucher 'DITRAKTIRPIJAR' digunakan
    else if (voucher === 'DITRAKTIRPIJAR') {
      // Mengecek apakah harga lebih dari 25000 (25rb)
      if (harga >= 25000) {
        // Menghitung potongan sebesar 60% atau maksimal 30000
        var potongan = Math.min(harga * 0.6, 30000);
        // Mengurangi potongan dari harga
        harga -= potongan;
      }
    }
    
// Menghitung biaya antar
const biayaAntar = 5000 + (jarak - 2) * 3000;
    
// Menghitung pajak
const pajakHarga = pajak ? harga * 0.05 : 0;
    
// Menghitung subtotal
const subtotal = harga + biayaAntar + pajakHarga;
    
// Menampilkan hasil
console.log('Harga :', harga);
console.log('Potongan :', potongan || 0);
console.log('Biaya Antar :', biayaAntar);
console.log('Pajak :', pajakHarga);
console.log('SubTotal :', subtotal);
  }

// Contoh penggunaan
PijarFood(75000, 'PIJARFOOD5', 5, true);
  