# Deploy CardCalc to Vercel - Step by Step

## Method 1: Deploy via Vercel CLI (Recommended for Quick Deploy)

### Step 1: Make sure your project builds
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
npm run build
```
✅ If this works, you're ready to deploy!

### Step 2: Deploy to Vercel
```bash
npx vercel
```

### Step 3: Follow the prompts
1. **Set up and deploy?** → Type `Y` and press Enter
2. **Login** → It will open your browser. Sign in with GitHub, Google, or email
3. **Link to existing project?** → Type `N` (first time deploying)
4. **Project name?** → Press Enter to use default (`cardcalc`) or type a custom name
5. **Directory?** → Press Enter (uses current directory)
6. **Override settings?** → Type `N`

### Step 4: Wait for deployment
Vercel will:
- Upload your files
- Build your project
- Deploy it

### Step 5: Get your public URL
You'll see something like:
```
✅ Production: https://cardcalc-xxxxx.vercel.app
```

**That's your public URL!** Share it with anyone.

---

## Method 2: Deploy via GitHub (Recommended for Updates)

### Step 1: Create a GitHub repository
1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Name it `cardcalc` (or whatever you want)
4. **Don't** check "Initialize with README"
5. Click "Create repository"

### Step 2: Push your code to GitHub
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - CardCalc app"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/cardcalc.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `cardcalc` repository
5. Click "Deploy"

### Step 4: Auto-deployments
Now, every time you push changes to GitHub, Vercel will automatically deploy them!

---

## Updating Your Site

### If using Vercel CLI:
```bash
cd /Users/jonathankoo/Downloads/files/cardcalc
npx vercel --prod
```

### If using GitHub:
```bash
git add .
git commit -m "Updated card multipliers"
git push
```
Vercel will auto-deploy!

---

## Custom Domain (Optional)

1. Go to your project on vercel.com
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `cardcalc.com`)
4. Follow DNS instructions

---

## Troubleshooting

**Build fails?**
- Check for errors in the terminal
- Make sure `npm run build` works locally first

**Changes not showing?**
- Wait 1-2 minutes for deployment to complete
- Hard refresh your browser (Cmd+Shift+R)

**Need help?**
- Vercel docs: https://vercel.com/docs
- Check the build logs in Vercel dashboard
