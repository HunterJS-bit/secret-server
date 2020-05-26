const SecretModel = require('../models/secret');
const crypto = require('crypto');
const moment = require('moment');

// todo improve naming variables
const hashingService =  {

    /*
     * Get secret & update view counter
     *
     */
    async getSecret(secret) {
        const foundSecret = await SecretModel.findOne({ secret });
        // decription logic
        // todo maybe move into util class
        const decipher = crypto.createDecipher('aes128','a password');
        let decrypted = decipher.update(foundSecret.secret,'hex', 'utf8');
        decrypted += decipher.final('utf8');
        const currentTime = moment();
        const secretCreated = moment(foundSecret.created_at).add(foundSecret.expireTime,'minutes');
        // am assuming both coditions needs to be satisfied for condition to pass
        if (!(secretCreated.isAfter(currentTime)) || foundSecret.remainingViews <= 0) {
            return null;
        } else if (foundSecret.remainingViews > 0 || foundSecret.expireTime === 0 ) {
            const updateByOne = foundSecret.remainingViews - 1;
            await SecretModel.updateOne({ secret }, {$set: { remainingViews: updateByOne }});
            
            return {
                     hash: foundSecret.secret,
                     secretText: decrypted,
                     createdAt: foundSecret.createdAt,
                     expiresAt: foundSecret.expireTime,
                     remainingViews: updateByOne
                    }
        } 
    },

    /*
     * 
     * Save & encrypt text string
     */
    async saveHash(hashData) {
        const { secret, tries, time } = hashData;;
        const cipher = crypto.createCipher('aes128', 'a password');
        let encrypted = cipher.update(secret, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        // if no time or tries, will set to never expire
        const userSecret = new SecretModel({ secret: encrypted, remainingViews: parseInt(tries) || 0, expireTime: parseInt(time) || 0 });
        await await userSecret.save()
        return {
            secret: userSecret.secret,
            expireAfterViews: userSecret.remainingViews,
            expireAfter: userSecret.expireTime
        }
    },

    /*
    * Get all List of secrets
    */
    async getSecrets() {
        return SecretModel.find({},'secret');
    }

};


module.exports = hashingService;