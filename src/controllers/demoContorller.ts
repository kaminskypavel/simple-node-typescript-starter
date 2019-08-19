import jsend from 'jsend';
import {Request, Response} from 'express';

export default (req: Request, res: Response) => {
	res.send(jsend.success('this is a demo controller'));
};
