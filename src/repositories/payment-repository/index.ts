import { prisma } from '@/config';
import { Payment, TicketStatus } from '@prisma/client';

async function findFirst(ticketId: number) {
  return prisma.payment.findFirst({ where: { ticketId } });
}

async function createPayment(cardData: Payment) {
  return prisma.payment.create({
    data: {
      ticketId: cardData.ticketId,
      value: cardData.value,
      cardIssuer: cardData.cardIssuer,
      cardLastDigits: cardData.cardLastDigits,
    },
  });
}

const paymentRepository = {
  findFirst,
  createPayment,
};

export default paymentRepository;
