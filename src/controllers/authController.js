const AuthService = require('../services/authService');

class AuthController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      const user = await AuthService.register(username, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await AuthService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = AuthController;
