const PetController = require('../controllers/pet.controller')

module.exports = app =>{

    //find all api endpoint
    app.get('/api/pets', PetController.findAllPets)

    //create one api endpoint
    app.post('/api/pets', PetController.createPet)

    //find one by id api endpoint
    app.get('/api/pets/:id', PetController.getOnePet)

    //update one by id api endpoint
    app.put('/api/pets/:id', PetController.updateOnePet)

    //delete one by id api endpoint
    app.delete('/api/pets/:id', PetController.deleteOnePet)

}