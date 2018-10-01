export default class Validator{
        
    static myInstance = null;
    /**
     * @returns {Utility}
     */
    static getInstance() {
        if (this.myInstance == null) {
            this.myInstance = new Validator();
        }
        return this.myInstance;
    }


    /**
     * checks weather an email is vallid or not.
     * @param {email address that need to be verified} email_address
     */
    isEmailValid(email_address) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email_address);
    }

    /**
     * checks weather a password is strong or not
     * @param {password field to be verified} password 
     */
    isPasswordValid(password) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return strongRegex.test(password);
    }
}

module.export = Validator;