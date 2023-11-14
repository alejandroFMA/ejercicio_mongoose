const Provider = require("../models/providers.model");

const getProvider = async (req, res) => {
    try {
        const company_name  = req.params.company_name; 
        let Providers;

        if (company_name) {
            Providers = await Provider.find({ company_name  });
        } else {
            Providers = await Provider.find({});
        }

        res.status(200).json(Providers);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}


const createProvider = async(req, res) => {
  
    try {
        const data = req.body
        const provider = await Provider(data).save()
        res.status(201).json(provider)
    } catch (error) {
        res.status(400).json({"error":error})
    }
}

/*
{
"company_name": "Hiperaceitunas",
        "CIF": "B44446482",
        "address": "Calle falsa 123",
        "url_web": "https://www.aceitunas.com",

}

*/

const updateProvider = async (req, res) => {
   try {
        const { company_name, CIF, address, url_web } = req.body;

        const updatedProvider = await Provider.findByIdAndUpdate(company_name, 
            { company_name, CIF, address, url_web },
            { new: true, runValidators: true });

        if (!updatedProvider) {
            return res.status(404).send('Proveedor no encontrado');
        }

        res.status(200).send({ 
            message: `Proveedor actualizado: ${updatedProvider.company_name}`,
            provider: updatedProvider 
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const deleteProvider = async (req, res) => {
    try {
        const {company_name } = req.params; 

        const deletedProvider = await Provider.findOneAndDelete({company_name: company_name} );

        if (!deletedProvider) {
            return res.status(404).send('Proveedor no encontrado');
        }

        res.status(200).send({ 
            message: `Proveedor eliminado con éxito`,
            provider: deletedProvider
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};



module.exports = { getProvider,
    createProvider,
    updateProvider,
    deleteProvider}