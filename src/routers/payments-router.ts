import { getPaymentByTicketId, postPayment } from '@/controllers/payment-controller';
import { Router } from 'express';

const paymentsRouter = Router();

paymentsRouter.get('/', getPaymentByTicketId);
paymentsRouter.post('/process', postPayment);

export { paymentsRouter };
