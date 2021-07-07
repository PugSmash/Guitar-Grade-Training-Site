var base_chord = ["A", "B", "C", "D", "E", "F", "G"];
var maj_min = ["maj", "m", " "];
var seven = ["7", " "];
var flats_and_sharps = ["♭", "#", " "];

function generator() {
  
  
  var random_num_7 = Math.floor(Math.random() * 1);
  var random_number_base = Math.floor(Math.random() * 6);
  var random_number_maj = Math.floor(Math.random() * 3)
  var random_num_flats = Math.floor(Math.random() * 3)
  
  
  console.log(random_number_maj);
  
 
  document.getElementById("Chord").innerHTML = base_chord[random_number_base] + flats_and_sharps[random_num_flats] + maj_min[random_number_maj] + seven[random_num_7];
  
 
 
}