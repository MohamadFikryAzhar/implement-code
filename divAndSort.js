function divideAndSort(input) {
    // Membagi deret angka menjadi array berdasarkan pemisah nol
    let arr = input.toString().split('0');
  
    // Mengurutkan setiap elemen array secara ascending
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('').sort().join('');
    }
  
    // Menggabungkan elemen array menjadi satu bilangan tanpa pemisah
    let output = parseInt(arr.join(''));
  
    // Menampilkan hasil bilangan yang telah digabung
    console.log(output);
  }
  
// Contoh penggunaan
divideAndSort(5956560159466056);