
---

# AegisYield: AI-Powered DeFi Vault 🛡️📈

![AegisYield Project Status](https://img.shields.io/badge/status-in_development-blue.svg)![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)

AegisYield is a modern frontend for an AI-powered DeFi yield vault designed to maximize USDC yield. It offers a transparent, user-friendly interface for depositing funds and monitoring the automated rebalancing strategies that work across top-tier DeFi protocols like Compound and Pendle.

<!-- It's highly recommended to add a screenshot of your application here -->
<!-- ![AegisYield Dashboard](./screenshot.png) -->

## ✨ Key Features

*   **📈 Real-Time Vault Analytics:** A comprehensive dashboard (`VaultOverview`) displaying the vault's live Net APY, Total Value Locked (TVL), and current asset allocation.
*   **📊 Personalized Position Tracking:** Users can view their personal performance (`UserPosition`), including total deposited amount, current value, and realized earnings.
*   **💸 Simple Deposits & Withdrawals:** An intuitive, tabbed interface (`DepositWithdraw`) for users to easily deposit USDC into the vault or withdraw their funds and profits.
*   **🤖 Transparent AI Strategy Log:** A detailed activity log (`ActivityLog`) that shows every rebalancing action taken by the AI, including the reason, predicted gain, and realized gain, with links to on-chain transactions.
*   **📱 Responsive & Mobile-First Design:** Built with modern tools to ensure a seamless experience on both desktop and mobile devices.
*   **Farcaster Mini App Ready:** Includes dependencies like `@farcaster/miniapp-sdk`, making it compatible for deployment as an embedded app within Farcaster clients like Warpcast.

## 🛠️ Technology Stack

This project is built with a modern, robust, and type-safe technology stack.

*   **Framework:** [React](https://react.dev/) with [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Components:** [shadcn-ui](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Web3 Connectivity:** [wagmi](https://wagmi.sh/) & [viem](https://viem.sh/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Data Fetching:** [Tanstack Query (React Query)](https://tanstack.com/query/latest)
*   **Charting:** [Recharts](https://recharts.org/)
*   **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   **Node.js** (v18 or newer recommended)
*   **npm** or your preferred package manager (yarn, pnpm)

### Local Development

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_REPOSITORY_URL>
    cd pradise2-aegis-vision-vault
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables.
    ```env
    # Example .env.local
    VITE_API_URL="http://your-backend-api-url.com"
    VITE_WALLETCONNECT_PROJECT_ID="your_walletconnect_project_id"
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:8080](http://localhost:8080) to view it in your browser. The page will reload when you make changes.

## 📂 Project Structure

The project follows a standard Vite + React structure, with clear separation of concerns.

```
/src
├── components/
│   ├── ui/         # Reusable shadcn-ui components
│   ├── ActivityLog.tsx
│   ├── DepositWithdraw.tsx
│   ├── Navigation.tsx
│   ├── UserPosition.tsx
│   └── VaultOverview.tsx
├── hooks/          # Custom React hooks
├── lib/            # Utility functions (e.g., utils.ts for cn)
└── pages/          # Top-level page components for routing
    ├── Index.tsx   # Main dashboard page
    ├── Analytics.tsx
    ├── Governance.tsx
    └── ...
```

*   **`/src/pages`**: Contains the main pages of the application, corresponding to the routes defined in `App.tsx`.
*   **`/src/components`**: Holds the primary React components that make up the UI.
*   **`/src/components/ui`**: Contains the low-level, reusable UI primitives from shadcn-ui.
*   **`/src/hooks`**: For custom React hooks that encapsulate reusable logic.
*   **`/src/lib`**: Home for utility functions, configurations, and other shared logic.

## 🗺️ Roadmap

The current application provides a strong foundation. Future development will focus on:

*   **Backend Integration:** Connecting the frontend to a live backend to fetch real-time vault and user data.
*   **Live Analytics:** Implementing the charts and data visualizations on the `/analytics` page.
*   **Governance Portal:** Building out the "Coming Soon" governance page with proposal submission and voting functionality.
*   **Transaction Execution:** Integrating `wagmi` hooks to perform real deposit and withdraw transactions.
*   **Enhanced AI Insights:** Displaying more detailed information from the AI strategy model.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.
