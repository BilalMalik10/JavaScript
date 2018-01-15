
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(val){
    val = val.split('');
    val[0] = val[0].toUpperCase();
    return val.join('');
  }).join(' ');
}

titleCase("I'm a little tea pot");
