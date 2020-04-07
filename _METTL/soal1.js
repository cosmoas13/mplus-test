//elemen yang lebih besar muncul setelah angka yang lebih kecil

//example : [8,6,7,9,9,6,8,8 ] hasilnya = 9;
const array = [2, 3, 0, 10, 105, 1, 6, 10];

      function compare(a, b) {
        return a - b;
      }

      array.sort(compare);

      console.log(array[array.length - 1] - array[1]);
