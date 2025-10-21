import { Router, Request, Response } from 'express';

const router = Router();

// Send payment
router.post('/send', async (req: Request, res: Response) => {
  try {
    const { amount, recipientEmail, description } = req.body;

    // Validate input
    if (!amount || !recipientEmail) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Amount and recipient email are required'
        }
      });
    }

    // Simulate payment processing (in real app, would integrate with Stripe)
    setTimeout(() => {
      console.log(`Payment processed: $${amount} to ${recipientEmail}`);
    }, 100);

    res.json({
      success: true,
      data: {
        paymentId: `pay_${Date.now()}`,
        amount: parseFloat(amount),
        currency: 'USD',
        status: 'succeeded',
        recipient: {
          email: recipientEmail,
          name: recipientEmail.split('@')[0]
        },
        description: description || 'Quick payment',
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'PAYMENT_ERROR',
        message: 'Failed to process payment'
      }
    });
  }
});

// Get payment history
router.get('/history', async (req: Request, res: Response) => {
  try {
    // Mock payment history
    const payments = [
      {
        id: 'pay_1234567890',
        amount: 500.00,
        currency: 'USD',
        recipient: 'alice@example.com',
        status: 'succeeded',
        description: 'Lunch reimbursement',
        createdAt: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: 'pay_0987654321',
        amount: 250.00,
        currency: 'USD',
        recipient: 'bob@example.com',
        status: 'succeeded',
        description: 'Quick payment',
        createdAt: new Date(Date.now() - 7200000).toISOString()
      }
    ];

    res.json({
      success: true,
      data: {
        payments,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalItems: payments.length,
          hasNext: false,
          hasPrevious: false
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'Failed to fetch payment history'
      }
    });
  }
});

export default router;
