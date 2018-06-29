const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('../models/Product.js')
var Product = mongoose.model('Product')

module.exports ={
    products:(req, res) => {
        Product.find({}, (err,data) => {
          if(err){
            console.log('ERROR - FIND in controller.movies')
            return res.json({error: "FIND ERROR - contact an adminitrator"})
          }
          else{
            console.log('Got the data')
            return res.json(data)
          }
        })
    },

    addProduct:(req,res) => {
      let model = new Product(req.body)
      model._id = Math.floor(Math.random() * 6000000000)
      console.log(model)
      model.save((err,data) => {
        if(err){
          return res.json({error: err})
        }
        else{
          console.log("Product added successfully")
          return res.json({success: "Product accepted"})
        }
      })
    },

    delete:(req,res) => {
      Product.findOneAndRemove({_id: req.params.id}, (err,data) => {
        if(err){
          console.log('ERROR - FINDONEANDREMOVE in controller.delete')
          return res.json(err)
        }
        else if(data.qty != 0){
          return res.json({error: "Quantity not '0'. Can't delete."})
        }
        else{
          console.log('Document successfully removed')
          return res.json(data)
        }
      })
    },

    show:(req,res) => {
      Product.findById(req.params.id, (err,data) => {
        if(err){
          console.log('ERROR - FIND in controller.show')
          return res.json(err)
        }
        else{
          return res.json(data)
        }
      })
    },

    update:(req,res) => {
      Product.findOneAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'},(err,data) => {
        if(err){
          return res.json({error: err})
        }
        else{
          console.log('success')
          return res.json({success: "Record updated successfully"})
        }
      })
    }
}
