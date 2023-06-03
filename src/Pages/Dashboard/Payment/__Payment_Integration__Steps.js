/**
 * 1. install stripe and react stripe js 
 * 2. create a checkout from with card element(card element contains : card number , 
 *     expiration date, cvs , zip code )
 * 3. create account on Stripe and get the publishable key pk
 * 4. get card information 
 * 5. create a payment method
 * 6. use test card to test payment method
 * 7. on the server side: install stripe: npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card]
 *     make sure you provide amount in cents (multiply price with 100)
 * */ 