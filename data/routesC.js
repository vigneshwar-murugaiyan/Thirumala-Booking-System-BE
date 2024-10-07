import express, {json} from 'express'; 
import us from './modules/calc.js'; // Assumed default export from calc.js

const routerU = express.Router();

routerU.use(json());
routerU.post("/:id", async (req, res) => {
    try {

    const i = req.params.id;
    console.log("hi");
    console.log(req.body);
    const formData=req.body;       
        const data = new us ({
            total: i,
            temple: req.body.temple,
            seva: req.body.seva,
            dharshan: req.body.dharshan,
            adults: req.body.adults,
            children: req.body.children,
            accomodation: req.body.accomodation,
            date: req.body.date,
            email:req.body.email
        });
        
        await data.save()
        res.send(200);
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    }
});

export default routerU;
