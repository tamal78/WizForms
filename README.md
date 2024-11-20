# WizForms

![WizForms Thumbnail](https://i.ibb.co/y8zHg66/wizforms-ss.png)

**WizForms** is a powerful, user-friendly form builder with a stunning drag-and-drop interface, designed to help you create responsive, customizable forms effortlessly. Built with modern technologies like **Next.js**, **TypeScript**, and **TailwindCSS**, WizForms empowers users to design forms, validate submissions, and track real-time statistics seamlessly.

---

## 🌟 Features

- **Drag-and-Drop Designer**  
  Build beautiful forms effortlessly using an intuitive drag-and-drop interface.

- **Rich Layout Options**  
  Add customizable layout fields like:

  - **Title**
  - **SubTitle**
  - **Spacer**
  - **Separator**
  - **Paragraph**

- **Form Fields**  
  Collect data using dynamic fields:

  - **Text**
  - **Number**
  - **Select**
  - **Date**
  - **Checkbox**
  - **Textarea**

- **Preview & Publish**

  - Preview your forms before publishing.
  - Share forms via unique URLs.

- **Submission Management**

  - Built-in validation for smooth workflows.
  - Track form statistics, including visits and submissions.

- **Customizable**  
  Easily add and modify new fields to suit your needs.

---

## 🛠️ Tech Stack

- **Next.js** with App Router
- **Dnd-kit** library
- **ServerActions**
- **TypeScript**
- **TailwindCSS** / **Shadcn UI**
- **Vercel PostgreSQL**
- **Prisma** as ORM

---

## 🎯 Key Highlights

- Fully responsive design for all devices.
- Optimized for performance and scalability.
- Seamlessly manage form data and share forms with ease.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tamal78/wizforms.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wizforms
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:  
   Create a `.env` file in the root directory and configure the required variables, e.g.:

   ```env
   DATABASE_URL=<your_database_url>
   NEXT_PUBLIC_API_URL=<your_api_url>
   ```

5. Run database migrations (if applicable):

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## 📸 Screenshot

![WizForms Preview](https://i.ibb.co/nPPp01s/Screenshot-2024-11-20-115937.png)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

---

### 🌐 Live Demo

Check out the live demo [here](https://wizforms.vercel.app/)
