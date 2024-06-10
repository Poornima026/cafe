import { useRouter } from 'next/router';
import { useState } from 'react';

const CountPage = () => {
  const router = useRouter();
  const { type } = router.query;
  const [quantity, setQuantity] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    // Redirect to the summary page with the selected quantity and type
    router.push(`/summary?type=${type}&quantity=${quantity}`);
  };

  return (
    <div>
      <h1>U&I - Select Quantity</h1>
      <form onSubmit={handleNext}>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CountPage;

