// import React, { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prvData) => ({
//       ...prvData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => { 
//     // e.preventDefault();
//     // Add form validation here if needed
//     if (!formData.name || !formData.email || !formData.password) {
//       alert('Please fill all the required fields.');
//       return;
//     }

//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     //   The JSON.stringify() method is used to convert 
//     // the formData object into a JSON string.
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('User data sent to the server:', data);
//         // Add any success message or redirect here
//       })
//       .catch((error) => {
//         console.error('Error while sending user data:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default App;
