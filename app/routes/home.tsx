import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Saba's Portfolio" },
    { name: "Portfolio", content: "Welcome to the Portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
