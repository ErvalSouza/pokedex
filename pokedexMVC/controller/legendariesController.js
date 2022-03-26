const legendaryModel= require('../models/LegendaryModel')

const controller= {
    getOneLegendary:(request,response)=>{
        const model= new legendaryModel('123',"Pineco","Bagworm","Bug")
        return response.json(model)
    }
}

module.exports= controller