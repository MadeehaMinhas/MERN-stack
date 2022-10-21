
const Router=require('express').Router();
let User=require('../models/user.model');

Router.route('/').get( (req,res)=>{
User.find()
  .then(users=>res.json(users))
  .catch(err=> res.status(400).json('Error: '+err));
}
);



Router.route('/add').post( (req,res)=>{
    const username=req.body.username;
    const newUser= new User({username});
    newUser.save()
      .then(()=>res.json('User Added!!!!'))
      .catch(err=> res.status(400).json('Error: '+err));
    }
    );


    Router.route('/:id').get( (req,res)=>{
        User.findById(req.params.id)
          .then(users=>res.json(users))
          .catch(err=> res.status(400).json('Error: '+err));
        }
        );



    Router.route('/:id').delete( (req,res)=>{
        User.findByIdAndDelete(req.params.id)
            .then(()=>res.json('Exercise deleted!!!'))
            .catch(err=> res.status(400).json('Error: '+err));
        }
        );


    Router.route('/update/:id').post( (req,res)=>{
      
        User.findById(req.params.id)
        
            .then(user=>{
                user.username=req.body.username;
                user.save()
                .then(()=>res.json('User updated!!!'))

            })
            .catch(err=> res.status(400).json('Error: '+err));
        }
        );

module.exports=Router;