const express = require('express');
const router = express.Router();
const hashingService = require('../services/hashingService');


// Get All secrets
router.get('/list', async (req, res) => {
    res.status(200).json({ data: await hashingService.getSecrets() });
})

// Get string by Encrypted hash
router.get('/:hash', async (req, res) => {
    const data = await hashingService.getSecret(req.params.hash);
    res.status(200).json({ data: data, message: 'Get Hash' });
})

// save & encrypt new secret
router.post('/secret', async (req, res) => {
    const data = await hashingService.saveHash(req.body);
    res.status(201).json({ data: data , message: 'Created' });
})

module.exports = router;