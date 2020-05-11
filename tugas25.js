let deretAngka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya :",deretAngka.toString());

let menaik = deretAngka.sort();
console.log("Ascending :",menaik.toString());

let menurun = deretAngka.reverse();
console.log("Descending :",menurun.toString());

let filter = deretAngka.filter(function(deretAngka) {
  return deretAngka > 10;
});
console.log("Filter > 10 :",filter.toString());
