export const PasswordChecker = (password) => {
    if (password.length < 6) {
        return true;
    } else {
        return false;
    }
}