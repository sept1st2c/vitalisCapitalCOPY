# **Updating Content for Vitalis Capital Website**

This guide explains how to modify the content of the **Vitalis Capital** website by editing the `data.tsx` file.

## **Prerequisites**

- Basic knowledge of TypeScript and Next.js
- A code editor (VS Code recommended)
- Git installed on your system
- Access to the GitHub repository

## **Steps to Update the Content**

### **1. Clone the Repository**

If you haven't already, clone the project to your local machine:

```sh
git clone https://github.com/iamsarthak/vitalis-capital.git
cd vitalis-capital
```

### **2. Navigate to the Data File**

All the website content is stored in:

```
src/app/data/data.tsx
```

Open this file in your preferred code editor.

### **3. Modify the Content**

Inside `data.tsx`, you'll find an exported object containing the site's content. Example:

```tsx
export const websiteData = {
  heroSection: {
    title: "Welcome to Vitalis Capital",
    subtitle: "Your trusted investment partner",
  },
  aboutSection: {
    heading: "About Us",
    description:
      "Vitalis Capital is dedicated to providing financial solutions...",
  },
  services: [
    {
      title: "Investment Planning",
      description: "We help you manage your assets effectively.",
    },
    {
      title: "Wealth Management",
      description: "Strategies for long-term financial growth.",
    },
  ],
};
```

To update the content, simply change the text inside the quotes.

**Example Change:**

```tsx
export const websiteData = {
  heroSection: {
    title: "Welcome to Our Firm",
    subtitle: "Empowering your financial future",
  },
};
```

### **4. Save the File**

After making the necessary changes, save the file.

### **5. Run the Project Locally (Optional)**

To preview the changes locally, run:

```sh
npm install  # Install dependencies
npm run dev  # Start the development server
```

Visit `http://localhost:3000` in your browser to see the updates.

### **6. Push the Changes to GitHub**

If you have access to push changes, commit and push them:

```sh
git add src/app/data/data.tsx
git commit -m "Updated website content"
git push origin main
```

If you don’t have push access, you can fork the repository, make changes, and create a pull request.

## **Conclusion**

That's it! By following these steps, you can easily update the content of the **Vitalis Capital** website without modifying any core code.
