const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the user's dashboard page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
  //   const username = document.getElementById('signupUsername').value.trim();
  //   const email = document.getElementById('signupEmail').value.trim();
  //   const password = document.getElementById('signupPassword').value.trim();
  
  //   if (username && email && password) {
  //     const response = await fetch('/api/users/signup', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // };

  // My new code!!!! Taylor Cannon for sign-up 
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const verifyInfo = document.getElementById('verifyInfo').value.trim();

  if (username && email && password && verifyInfo === "1") {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please fill out all the requirements and select 'Yes' to proceed.");
  }
};
  
  document.getElementById('loginForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .getElementById('signupForm')
    .addEventListener('submit', signupFormHandler);
