# <div align="center"> Shadcn-UI Store </div>

## Project Overview

## Features

- Interactive shopping cart functionality.
- Automatic generation of a WhatsApp message with the order summary.
- Fully responsive design with TailwindCSS.
- Modular and reusable components using Shadcn-UI.
- State management handled by Zustand.

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Installation

1. Clone the repository:

2. Install the NPM packages:

   **Note:** Due to compatibility issues between **Shadcn-UI** and **Next.js 15**, you may encounter dependency errors during installation. In this case, use the following command to force the installation of the required packages:

   ```bash
   npm install --force
   ```

3. Create a `.env` file at the root of the project. Use the provided `.env.example` as a template.

   **Example `.env` file:**

   ```env
   # Your WhatsApp number
   NEXT_PUBLIC_WHATSAPP="123456789101112131415"
   ```

4. Run the project:

   ```bash
   npm run dev
   ```

## Conclusion

This project demonstrates various frontend features and UI components, including a shopping cart and WhatsApp integration, while focusing solely on client-side functionality. Feel free to explore, modify, and expand upon this project as you wish.

---
