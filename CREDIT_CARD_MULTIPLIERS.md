# Credit Card Multipliers Reference

## Where Multipliers Are Defined

All credit card reward multipliers are defined in:
**`src/data/cards.js`**

Each card has a `rewards` object that contains multipliers for each spending category. For example:

```javascript
{
  id: "csr",
  name: "Chase Sapphire Reserve",
  // ... other properties
  rewards: {
    rent: 0,
    dining: 3,        // 3x points on dining
    groceries: 1,     // 1x points on groceries
    travel: 4,       // 4x points on travel
    flights: 8,      // 8x points on flights (via Chase Travel)
    hotels: 8,       // 8x points on hotels (via Chase Travel)
    gas: 1,
    transit: 1,
    streaming: 1,
    entertainment: 1,
    drugstores: 1,
    onlineRetail: 1,
    other: 1,
  },
}
```

## How to Review/Correct Multipliers

1. Open `src/data/cards.js`
2. Find the card you want to review
3. Locate the `rewards` object within that card's definition
4. Update the multiplier values as needed
5. Save the file - changes will appear when you refresh the app

## Notes

- **Points multipliers**: For points cards, the number represents points per dollar (e.g., `dining: 3` = 3 points per $1)
- **Cash back multipliers**: For cash back cards, the number represents percentage (e.g., `dining: 3` = 3% cash back)
- The calculation engine (`src/utils/engine.js`) handles the difference between points and cash back automatically

## Current Cards

All 25 cards are defined in `src/data/cards.js`:
- Chase cards (6 cards)
- American Express cards (5 cards)
- Capital One cards (3 cards)
- Bilt cards (3 cards)
- Citi cards (2 cards)
- Other cards (6 cards including Gemini, Robinhood Gold, Coinbase)

## Need Help?

If you're unsure about a multiplier, check the official card website or terms. The multipliers in this file should match the current card benefits as of the last update.
