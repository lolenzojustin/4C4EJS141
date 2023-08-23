function isPerfectSquare(n) {
  const sqrtN = Math.floor(Math.sqrt(n));
  return sqrtN * sqrtN === n;
}

function findPerfectSquaresInRange(a, b) {
  const perfectSquares = [];

  for (let num = a; num <= b; num++) {
    if (isPerfectSquare(num)) {
      perfectSquares.push(num);
    }
  }

  return perfectSquares;
}

const a = document.getElementById('ipa');
const b = document.getElementById('ipb');
const btn = document.getElementById('btn');
const div = document.getElementById('div');
const result = findPerfectSquaresInRange(a, b);
console.log(btn);
btn.addEventListener('click', function () {
  const ipa = a.value;
  const ipb = b.value;
  const result = findPerfectSquaresInRange(ipa, ipb);
  div.innerHTML = `Các số chính phương trong khoảng từ ${ipa} đến ${ipb} là: ${result}`;
});
