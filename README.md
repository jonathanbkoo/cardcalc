# CardCalc — Credit Card Rewards Combo Optimizer

A single-page web app that helps you find the optimal credit card combination to maximize your rewards based on your spending patterns.

## Features

- Enter monthly spending by category
- Select your current cards (optional)
- Set preferences (max cards, credit usability, signup bonuses, point valuations)
- Get ranked recommendations of optimal card combinations
- See detailed breakdowns of rewards, credits, fees, and net value

## Tech Stack

- React (via Vite)
- Tailwind CSS
- Google Fonts (Playfair Display, JetBrains Mono, DM Sans)
- Client-side calculations (no backend needed)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd cardcalc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to your project directory:
```bash
cd cardcalc
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Login to Vercel (will open browser)
   - Link to existing project or create new one
   - Confirm project settings
   - Deploy!

5. Your site will be live at `your-project-name.vercel.app`

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your Git repository (or drag & drop the project folder)
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Option 3: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Vercel will auto-detect settings and deploy
6. Future pushes to main branch will auto-deploy

## Project Structure

```
cardcalc/
├── src/
│   ├── components/
│   │   ├── SpendInput.jsx      # Spending category inputs
│   │   ├── CardSelector.jsx     # Current card selection
│   │   ├── Preferences.jsx      # User preferences
│   │   ├── Results.jsx          # Results container
│   │   └── ComboCard.jsx        # Individual combo display
│   ├── data/
│   │   ├── cards.js             # Credit card database
│   │   ├── categories.js        # Spending categories
│   │   └── pointValues.js       # Default CPP values
│   ├── utils/
│   │   ├── engine.js            # Core calculation logic
│   │   └── comboGenerator.js    # Combo generation & ranking
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json                  # Vercel deployment config
```

## Customization

### Adding/Editing Cards

Edit `src/data/cards.js` to add or modify credit cards. Each card follows this structure:

```javascript
{
  id: "unique-id",
  name: "Full Card Name",
  short: "Abbrev",
  issuer: "Issuer",
  annualFee: 0,
  currency: "Chase UR",
  pointValue: 2.05,
  isCashBack: false,
  color: "#hexcolor",
  welcomeBonus: { points: 0, spend: 0, months: 0, cashBonus: 0, biltCash: 0 },
  rewards: { /* category multipliers */ },
  rentRewards: false,
  biltCashRate: 0,
  credits: [],
  perks: [],
}
```

### Adjusting Point Valuations

Edit `src/data/pointValues.js` to change default CPP (cents per point) values.

## License

MIT
