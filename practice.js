const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

//select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));
select.addEventListener('change', () => {
  const choice = select.value;

  switch (choice) {
    case 'white':
      return update('white','black');
    case 'black':
      return update('black','white');
    case 'purple':
      return update('purple','white');
    case 'yellow':
      return update('yellow','black');
    case 'psychedelic':
      return update('pink','lightgreen');
  }
})
