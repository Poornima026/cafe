import { useRouter } from 'next/router';

const SummaryPage = () => {
  const router = useRouter();
  const { type, quantity } = router.query;
  const pricePerItem = type === 'tea' ? 30 : 35; // Set prices based on type

  // Calculate total price
  const totalPrice = pricePerItem * quantity;

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Selected Item: {type}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: {totalPrice} rupees</p>
      <div>
        <p>Thank you for visiting U&I Cafe! Come again!</p>
      </div>
    </div>
  );
};

export default SummaryPage;

