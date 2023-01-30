import { Payment } from '@prisma/client';
import paymentRepository from '@/repositories/payment-repository';

async function getAllPaymentsByTicketId(ticketId: number): Promise<Payment> {
  const payment = await paymentRepository.findFirst(ticketId);

  return payment;
}

async function postPayment(cardData: Payment) {
  const payment = await paymentRepository.createPayment(cardData);
}

const paymentService = {
  getAllPaymentsByTicketId,
  postPayment,
};

export default paymentService;
