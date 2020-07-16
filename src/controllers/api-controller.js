const apiController = {}

let database = []

apiController.getApiHandler = (req, res) => {
    res.send(database);
}

apiController.createApiHandler = (req, res) => {
    const data = req.body;
    database.push(data);
    res.send('peticion post recibida');
}

apiController.updateApiHandler = (req, res) => {
    const data = req.params.id;
    database[data - 1] = req.body;
    res.send('peticion put recibida');
}

module.exports = apiController;