import {Router} from "express"
import { addItemToInventory,addItemFromInventory, removeItemFromInventory } from "../controllers/product.controller.js";

const router = Router();

router.route("/addItem").post(addItemToInventory)
router.route("/addItemToProduct").post(addItemFromInventory)
router.route("/removeItem").delete(removeItemFromInventory)

export default router;