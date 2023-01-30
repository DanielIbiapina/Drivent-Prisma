import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketRepository from '@/repositories/ticket-repository';
import { TicketType } from '@prisma/client';

async function getAllTicketTypes(): Promise<TicketType[]> {
  const ticketTypes = await ticketRepository.findMany();
  return ticketTypes;
}
async function getTicket(userId: number) {
  const userEnrollment = await enrollmentRepository.getEnrollmentByUserId(userId);
  const ticket = await ticketRepository.findFirstTicket(userEnrollment.id);
  return ticket;
}
async function postTicket(userId: number, ticketTypeId: number) {
  const userEnrollment = await enrollmentRepository.getEnrollmentByUserId(userId);
  await ticketRepository.insertTicket(ticketTypeId, userEnrollment.id);
}

const ticketService = {
  getAllTicketTypes,
  getTicket,
  postTicket,
};

export default ticketService;
