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

### 🧱 Project Architecture

```
📦 construction-checklist
 ┣ 📂 components
 ┃ ┣ ChecklistContainer.jsx – Core logic holder
 ┃ ┣ ParentTask.jsx – Parent activity UI + logic
 ┃ ┣ ChildTask.jsx – Sub-activity input + validation
 ┃ ┣ DropdownSelector.jsx – Unit picker
 ┃ ┣ WeightInput.jsx – Handles % input + rules
 ┃ ┗ SaveButton.jsx – Smart save logic
 ┣ 📂 hooks
 ┃ ┗ useChecklistState.js – Global state & logic manager
 ┣ 📂 utils
 ┃ ┣ calculateWeight.js – Totals up child weights
 ┃ ┗ validateWeight.js – Keeps weight under control
 ┣ 📂 constants
 ┃ ┗ dropdownOptions.js – Unit options (e.g., Piers, Fasteners)
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

---
