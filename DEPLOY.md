# Quick Deploy Guide to Vercel

## Step 1: Install Node.js (if not already installed)

If you don't have Node.js installed:

**Mac:**
```bash
# Install via Homebrew (recommended)
brew install node

# OR download from nodejs.org
# Visit https://nodejs.org and download the LTS version
```

**Verify installation:**
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

Navigate to the project folder and install dependencies:

```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
npm install
```

## Step 3: Test Locally (Optional)

Make sure everything works:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Step 4: Deploy to Vercel

### Method A: Vercel CLI (Easiest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
vercel
```

3. Follow the prompts:
   - First time: Login to Vercel (opens browser)
   - Link to existing project? → **No** (for first deploy)
   - Project name? → Press Enter (or type a custom name)
   - Directory? → Press Enter (uses current directory)
   - Override settings? → **No**

4. Wait for deployment (~30 seconds)

5. Your site is live! You'll get a URL like `cardcalc-xxxxx.vercel.app`

### Method B: GitHub + Vercel (Best for updates)

1. Create a GitHub repository:
   - Go to github.com
   - Click "New repository"
   - Name it "cardcalc" (or whatever you want)
   - Don't initialize with README
   - Click "Create repository"

2. Push your code:
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cardcalc.git
git push -u origin main
```

3. Deploy on Vercel:
   - Go to vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"
   - Done! Future pushes auto-deploy

### Method C: Drag & Drop (Quick test)

1. Build the project:
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
npm run build
```

2. Go to vercel.com and sign in
3. Drag the `dist` folder onto the Vercel dashboard
4. Your site deploys instantly!

## Updating Your Site

After making changes:

**If using Vercel CLI:**
```bash
vercel --prod
```

**If using GitHub:**
Just push your changes:
```bash
git add .
git commit -m "Update"
git push
```
Vercel will auto-deploy!

## Custom Domain (Optional)

1. Go to your project on vercel.com
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS instructions

---

**Need help?** Check the main README.md for more details.
