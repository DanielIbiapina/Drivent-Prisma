import { Router } from 'express';

import { validateBody } from '@/middlewares';
import { getTicket, getTicketTypes, postTicket } from '@/controllers';

const ticketsRouter = Router();

//ticketsRouter.post("/", validateBody(ticketSchema), postTicket);
ticketsRouter.get('/types', getTicketTypes);
ticketsRouter.get('/', getTicket);
ticketsRouter.post('/', postTicket);

export { ticketsRouter };
