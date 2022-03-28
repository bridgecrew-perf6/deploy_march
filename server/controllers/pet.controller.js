const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res)=>{
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet = (req, res)=>{
    console.log("req.body --> ", res.body)
    Pet.create(req.body)
        .then(newCreatedPet => {
            res.json({results: newCreatedPet})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOnePet = (req, res)=>{
    Pet.findOne({ _id: req.params.id })
        .then(foundPet =>{
            res.json({ results: foundPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOnePet = (req, res)=>{
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet=>{
            res.json({ results: updatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOnePet = (req, res)=>{
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet=>{
            res.json({ results: deletedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}