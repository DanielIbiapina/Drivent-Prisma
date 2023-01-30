import { AuthenticatedRequest } from '@/middlewares';
import paymentRepository from '@/repositories/payment-repository';
import paymentService from '@/services/payments-service';
import { Payment } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getPaymentByTicketId(req: AuthenticatedRequest, res: Response) {
  try {
    const { ticketId } = req.query;
    const payments = await paymentService.getAllPaymentsByTicketId(Number(ticketId));
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postPayment(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req;
    const cardData = req.body as Payment;
    await paymentService.postPayment(cardData);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
