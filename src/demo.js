const internModel = require("./models/InternModel")

const createIntern = async function (req,res){
    try{
        let data = req.body

        if(Object.keys(data).length==0){
            return res.status(400).send({status:false, msg: "Body can not be empty"})

        }

        let saveData = await internModel.create(data)
        return res.status(201).send({status:true, data: saveData})

    }
    catch(err){
   return res.status(500).send({status:false, msg:err.message})
    }
}


module.exports = {createIntern}