//buat perulangan string
//bandingkan huruf sekarang dan huruf selanjutnya
//jika kedua huruf tidak sama
	//*1 maka variable count nilainya bertambah menjadi 1, dan lakukan 
	//*2 penggabungan string dengan menggunakan fungsi "concat" atau "+="
function strCompress (str) {
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++){
  	count++;
      if (str[i] != str[i+1]) {
        output = output.concat(str[i] + count);
      count = 0;
  	}
  }
  console.log(output);
}

strCompress('aaaabbbbcccccccdaa'); //a5b4c7da2 