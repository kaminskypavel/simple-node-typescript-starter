import express from 'express';
import controller from '../controllers/demoContorller';
const router = express.Router();

router.get('/', async (req, res) => {
	controller(req, res);
});

export default router;
