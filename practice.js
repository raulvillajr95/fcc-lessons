let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let j = i; j >= 2; j--) {
  if (isPrime(j) == true) {
    para.textContent += `${j}, `
  } else {
    continue
  }
}

const section = document.querySelector('section');
section.appendChild(para);