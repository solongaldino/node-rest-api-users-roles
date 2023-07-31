const bcrypt = require("bcryptjs");

module.exports = {
  generationHash: (password) => {
    return bcrypt.hashSync(password, 8);
  },
  comparePassword: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  },
};
