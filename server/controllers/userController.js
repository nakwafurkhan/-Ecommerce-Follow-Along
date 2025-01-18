// const User = require('../models/User');

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Compare the entered password with the stored password in the database (no hashing)
//     if (user.password !== password) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Successfully logged in, send a response
//     res.status(200).json({
//       message: 'Login successful!',
//       userId: user._id,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred during login' });
//   }
// };

// module.exports = { loginUser };
