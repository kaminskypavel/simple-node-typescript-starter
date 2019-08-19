import express from 'express';
import controller from '../controllers/demoContorller';
const router = express.Router();
/**
 * @swagger
 * /demo:
 *   get:
 *     description: a demo route
 *     responses:
 *       200:
 *         description: a demo route
 */
router.get('/', async (req, res) => {
	controller(req, res);
});

export default router;
