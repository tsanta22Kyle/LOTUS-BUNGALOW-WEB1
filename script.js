document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const city = document.getElementById('city').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const genderMale = document.getElementById('male').checked;
  const genderFemale = document.getElementById('female').checked;

  if (name && dob && city && email && password && (genderMale || genderFemale)) {
    window.location.href = 'main.html'; 
  } else {
    alert('Please fill in all fields.');
  }
});

function cancel() {
  document.getElementById('loginForm').reset();
}
