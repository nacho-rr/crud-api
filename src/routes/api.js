const {Router} = require('express');
const { getApiHandler,
        createApiHandler,
        updateApiHandler } = require('../controllers/api-controller');

const router = Router();
const path = require('path');

router.get('/', (req, res) => {
    const pathHtml = path.join(__dirname.slice(0, -7), 'views/index.html');
    //res.send('Hola mundo');
    res.sendFile(pathHtml);
})

router.get('/api', getApiHandler);

router.post('/api', createApiHandler);

router.put('/api/id=:id', updateApiHandler);

module.exports = router;