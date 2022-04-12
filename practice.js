let prm = prompt('Who\'s there?')

if (prm == 'Admin') {
  let prm2 = prompt('Password?')
  if (prm2 == 'TheMaster') {
    alert('Welcome!')
  } else if (prm2 == null || prm2 == '') {
    alert('Canceled')
  } else {
    alert('Wrong password')
  }
} else if (prm == null || prm == '') {
  alert('Canceled')
} else {
  alert('I don\'t know you')
}