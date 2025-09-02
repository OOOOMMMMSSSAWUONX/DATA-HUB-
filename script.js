document.getElementById('payBtn').onclick = function() {
  document.getElementById('popup').style.display = 'block';
};

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popup').style.display = 'none';
};

document.getElementById('utrForm').onsubmit = function(e) {
  e.preventDefault();
  alert("UTR Submitted: " + document.getElementById('utr').value);
  document.getElementById('popup').style.display = 'none';
};
