import { prisma } from '@/config';
import { TicketStatus } from '@prisma/client';

async function findMany() {
  return prisma.ticketType.findMany();
}
async function findFirstTicket(enrollmentId: number) {
  return prisma.ticket.findFirst({ where: { enrollmentId } });
}
async function insertTicket(ticketTypeId: number, userEnrollmentId: number) {
  return prisma.ticket.create({
    data: {
      status: TicketStatus.RESERVED,
      ticketTypeId: ticketTypeId,
      enrollmentId: userEnrollmentId,
    },
  });
}

const ticketRepository = {
  findMany,
  findFirstTicket,
  insertTicket,
};

export default ticketRepository;
