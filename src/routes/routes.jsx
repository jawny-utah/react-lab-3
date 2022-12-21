import { HomePage } from "../Pages/HomePage";
import { PalletPage } from "../Pages/PalletPage";

export const routes = [
  { path: "/palette/:id", component: <PalletPage /> },
  { path: "/", component: <HomePage /> },
];
