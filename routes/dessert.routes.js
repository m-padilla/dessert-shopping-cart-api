import express from 'express';
import { 
    getAllDesserts, 
    getDessertById,
    // createDessert
} from '../controller/dessert.controller.js';

const router = express.Router();


router.get('/api/desserts', getAllDesserts);

router.get("/api/dessert/:id", getDessertById); 

// router.post('/', createDessert);


export default router;