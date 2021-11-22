const playlist = [
  ['So What', ' by P!nk', ' Song duration: 3:45'],
  ['Respect', ' by Aretha Franklin', ' Song duration: 2:30'],
  ['What a Wonderful World', ' by Louis Armstrong', ' Song duration: 2:17'],
  ['At Last', ' by Etta James', ' Song duration: 3:05'],
  ['Three Little Birds', ' by Bob Marley', ' Song duration: 3:12'],
  ['The Way You Look Tonight', 'by Frank Sinatra', ' Song duration: 3:20']
];

for( i = 0; i < playlist.length; i++ ){
  document.querySelector("ol").innerHTML += `<li>${playlist[i]}</li>` 
}
