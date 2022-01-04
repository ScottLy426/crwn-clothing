import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H3PeiFllsUfWSfmaHuM5E4AMN9vUJxk5YECs4kawWQpHdhtzNYBodcakB3flN7c5odcy5tzrCTKe6nswIqtpSOQ00jGZUOK9o";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         /> 
    )
}

export default StripeCheckoutButton;