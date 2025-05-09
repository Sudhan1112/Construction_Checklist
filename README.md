## 🏗️ Construction Checklist App – Project Summary

A sleek, intuitive **React + Tailwind CSS** web app that helps construction managers stay on top of their project game through a smart, visual checklist system.

---

### 🚀 Key Features

✅ **Parent + Sub Activity Management**
Create parent tasks and break them down into sub-activities, each with its own weight (%). Easy peasy hierarchy.

📊 **Real-Time Progress Tracking**
Live progress bar with color-coded indicators:

🔵 In Progress
🟡 Almost There (75%+)
✅ Done (100%)

⚖️ **Smart Weight Validation**
No more guesswork—weights must total *exactly* 100% to be valid. Validation + visual feedback baked in.

💾 **Save With Confidence**
Only lets you save when all rules are followed. Toastify pops up with feedback to keep you in the loop.

🧠 **Modular, Clean Architecture**
Built for readability, reusability, and scale.

---
### 🗂️ Project Structure – At a Glance

```
📦 construction-checklist/
├── client/
│   ├── public/
│   └── src/
│       ├── assets/                # Static images & icons
│       ├── components/           # Reusable UI blocks
│       │   ├── ChecklistContainer.jsx    # Main checklist logic + layout
│       │   ├── ParentTask.jsx            # UI for parent activities
│       │   ├── ChildTask.jsx             # Sub-activity row w/ inputs
│       │   ├── DropdownSelector.jsx      # Unit selector dropdown
│       │   ├── WeightInput.jsx           # Weight % input field
│       │   └── SaveButton.jsx            # Save button w/ validation logic
│       ├── constants/
│       │   └── dropdownOptions.js        # Construction unit options
│       ├── hooks/
│       │   └── useChecklistState.js      # Custom state manager hook
│       ├── utils/
│       │   ├── calculateWeight.js        # Sums weights of sub-activities
│       │   └── validateWeight.js         # Prevents going over 100%
│       ├── App.jsx                # Main entry component
│       ├── App.css                # Base styling
│       ├── index.css              # Tailwind config
│       └── main.jsx               # App mount point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
```
---

### ⚙️ How It Works

1. **Add Activities** → Build out tasks & sub-tasks
2. **Assign Weights** → Live calc + validation
3. **Track Progress** → Color-coded bars show how close you are
4. **Save It** → Only when you hit 100% with no errors

---

### 📦 Dev Setup

**Requirements**: Node.js v14+, npm/yarn

```bash
git clone https://github.com/Sudhan1112/Product-fusion-assignment.git
cd client
npm install
npm run dev
```

Launch: [http://localhost:5173](http://localhost:5173)

Deployment link: [product-fusion-assignment](https://product-fusion-assignment.vercel.app)
---
