import {Router} from 'express';
import { CreateBeneficiaryController, DeleteBeneficiaryController, GetAllBeneficiaryController, UpdateBeneficiaryController } from './controllers/BeneficiaryController';
import { CreateHolderPlanController, DeleteHolderPlanController, GetAllHolderPlanController, GetOneHolderPlanController, UpdateHolderPlanController } from './controllers/HolderPlanController';
import { CreatePlanController, DeletePlanController, GetAllPlansController,UpdatePlanController } from "./controllers/PlansController"
import { CreatePriceController, DeletePriceController, GetAllPriceController, UpdatePriceController } from './controllers/PriceController';


const routes = Router();



routes.post("/planos",new CreatePlanController().handle);
routes.get("/planos",new GetAllPlansController().handle);
routes.delete("/planos/:id",new DeletePlanController().handle);
routes.put("/planos/:id",new UpdatePlanController().handle);

routes.post("/prices",new CreatePriceController().handle);
routes.get("/prices",new GetAllPriceController().handle);
routes.delete("/prices/:id",new DeletePriceController().handle);
routes.put("/prices/:id",new UpdatePriceController().handle);

routes.post("/holderplans",new CreateHolderPlanController().handle);
routes.get("/holderplans",new GetAllHolderPlanController().handle);
routes.get("/holderplans/:id",new GetOneHolderPlanController().handle);
routes.delete("/holderplans/:id",new DeleteHolderPlanController().handle);
routes.put("/holderplans/:id",new UpdateHolderPlanController().handle);

routes.post("/beneficiarys",new CreateBeneficiaryController().handle);
routes.get("/beneficiarys",new GetAllBeneficiaryController().handle);
routes.delete("/beneficiarys/:id",new DeleteBeneficiaryController().handle);
routes.put("/beneficiarys/:id",new UpdateBeneficiaryController().handle);


export {routes};