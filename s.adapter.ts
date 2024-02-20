import { PayPal } from 'paypal-sdk';
import { Stripe } from 'stripe-sdk';


interface IPaymentGateway {
    processPayment(amount: number): Promise<string>;
}

class PayPalAdapter implements IPaymentGateway {
    private payPal: PayPal;

    constructor(apiKey: string) {
        this.payPal = new PayPal(apiKey);
    }

    async processPayment(amount: number): Promise<string> {
        const transactionId = await this.payPal.makePayment(amount);
        return `PayPal transaction ID: ${transactionId}`;
    }
}

class StripeAdapter implements IPaymentGateway {
    private stripe: Stripe;

    constructor(apiKey: string) {
        this.stripe = new Stripe(apiKey);
    }

    async processPayment(amount: number): Promise<string> {
        const chargeId = await this.stripe.createCharge(amount);
        return `Stripe charge ID: ${chargeId}`;
    }
}

const paypalAdapter = new PayPalAdapter('paypal-api-key');
const stripeAdapter = new StripeAdapter('stripe-api-key');

// Process payment through PayPal
const paypalPaymentResult = await paypalAdapter.processPayment(100);

// Process payment through Stripe
const stripePaymentResult = await stripeAdapter.processPayment(100);

console.log(paypalPaymentResult);
console.log(stripePaymentResult);
