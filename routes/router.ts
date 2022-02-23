import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo está bien!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    // este parámetro id viene por la url, por ejemplo para enviar un 
    // mensaje privado para un usuario específico
    const id = req.params.id;
    // aquí se toman los parámetros que vienen en el body del POST
    // para esto fue que se configuró el bodyParser en index.ts (ver)
    // estos argumentos deben venir en la petición POST
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    // los dos parámetros recibidos se retornan en la respuesta:
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;
