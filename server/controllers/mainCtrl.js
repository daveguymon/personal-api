const user = require('./../user');
const skillz = require('./../skillz');
const secrets = require('./../secrets');

module.exports = {
  getName: (req, res) => {
    console.log(user.name);
    res.status(200).json(user.name);
  },

  getLocation:(req, res) => {
    res.status(200).json(user.location);
  },

  getOccupations: (req, res) => {
    console.log(req.query)
    let copyOccs = [...user.occupations];
    if(req.query.sort === 'asc') {
      copyOccs.sort();
      res.status(200).json(copyOccs)
    } else if (req.query.sort === 'desc') {
      copyOccs.sort().reverse();
      res.status(200).json(copyOccs)
    } else {
    res.status(200).json(user.occupations);
    }
  },

  getLatestOccupation: (req, res) => {
    res.status(200).json(user.occupations.slice(user.occupations.length - 1));
  },

  getHobbies: (req, res) => {
    res.status(200).json(user.hobbies);
  },

  getHobbiesByType: (req, res) => {
    res.status(200).json(user.hobbies.filter((h) => h.type === req.params.type))
  },

  getFamily: (req, res) => {
      if(req.query.relation) {
        let filteredFam = user.family.filter((person) => person.relation.includes(req.query.relation))
        res.status(200).json(filteredFam)
      } else {
        res.status(200).json(user.family);
      }
    },

    getFamilyByGender: (req, res) => {
      res.status(200).json(user.family.filter((p) => p.gender === req.params.gender))
    },

    getRestaurants: (req, res) => {
      if(req.query.rating) {
        let userRating = user.restaurants.filter((r) => r.rating >= req.query.rating)
        res.status(200).json(userRating)
      } else {
        res.status(200).json(user.restaurants)
      }
    },

    getRestaurantsByName: (req, res) => {
      console.log(req.params.name)
      res.status(200).json(user.restaurants.filter((r) => r.name == req.params.name))
    },

    changeName: (req, res) => {
      user.name = req.body.name;
      res.status(200).json(user);
    },

    changeLocation: (req, res) => {
      user.location = req.body.location;
      res.status(200).json(user);
    },

    addToHobbies: (req, res) => {
      user.hobbies.push(req.body);
      res.status(200).json(user.hobbies);
    },

    addToOccupations: (req, res) => {
      user.occupations.push(req.body.occupation);
      res.status(200).json(user.occupations);
    },

    addToFamily: (req, res) => {
      let newMember = {
        name: req.body.name,
        relation: req.body.relation,
        gender: req.body.gender
      }
      user.family.push(newMember);
      res.status(200).json(user.family)
    },

    addToRestaurants: (req, res) => {
      let newRestaurant = {
        name: req.body.name,
        type: req.body.type,
        rating: req.body.rating
      }
      user.restaurants.push(newRestaurant);
      res.status(200).json(user.restaurants);
    },

    retrieveSkillz: (req, res) => {
      if(req.query.experience) {
        let filteredSkillz = skillz.filter((s) => s.experience == req.query.experience)
        res.status(200).json(filteredSkillz)
      } else {
      res.status(200).json(skillz)
      }
    },

    postSkillz: (req, res) => {
      console.log('post skills');
      let newSkill = {
        id: req.body.id,
        name: req.body.name,
        experience: req.body.experience
      }
      skillz.push(newSkill);
      res.status(200).json(skillz);
    },

    grantAccess: (req, res) => {
      res.status(200).json(secrets);
    }


}
