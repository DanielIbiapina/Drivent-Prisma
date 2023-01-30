import { AuthenticatedRequest } from '@/middlewares';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ticketService from '../services/tickets-service';

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const types = ticketService.getAllTicketTypes;
    return res.status(httpStatus.OK).send(types);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}
export async function getTicket(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const ticket = ticketService.getTicket(userId);
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  try {
    const { ticketTypeId } = req.body;
    const { userId } = req;
    await ticketService.postTicket(userId, ticketTypeId);
  } catch (error) {}
}
