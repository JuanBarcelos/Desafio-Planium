import {Router} from 'express';
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


export {routes};