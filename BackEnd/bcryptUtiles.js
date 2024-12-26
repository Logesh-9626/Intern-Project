const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPassword = async (password) => {

try {

const salt = await bcrypt.genSalt(saltRounds);
const hash = await bcrypt.hash (password, salt);
return { hash, salt };
} catch (error) {
throw error;

}

};

const verifyPassword = async (enteredPassword, storedHashedPassword, storedSalt) => {

const hashedEnteredPassword = await bcrypt.hash(enteredPassword, storedSalt);

return hashedEnteredPassword === storedHashedPassword;

};

module.exports = { hashPassword, verifyPassword };