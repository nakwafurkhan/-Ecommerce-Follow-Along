// const handleLogin = async (e) => {
//     e.preventDefault();
  
//     if (validateInputs()) {
//       try {
//         const response = await fetch('http://localhost:8888/api/users/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
  
//         const data = await response.json();
  
//         if (response.ok) {
//           // Save userId to localStorage or sessionStorage if needed
//           localStorage.setItem('userId', data.userId);
//           alert('Login successful!');
//           navigate('/home');
//         } else {
//           setServerError(data.message || 'Invalid credentials');
//         }
//       } catch (error) {
//         setServerError('An error occurred while logging in. Please try again.');
//         console.error('Login error:', error);
//       }
//     }
//   };
  