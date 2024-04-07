document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    
    // Create user object
    const user = {
      name: name,
      email: email,
      role: role
    };
    
    // Redirect based on role
    if (role === 'mentor') {
      window.location.href = './mentor.html';
    } else if (role === 'mentee') {
      window.location.href = 'mentee.html';
    }
  });
  