import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
    return <h1>Welcome to Hostel Management Suite developed in Tanstack.</h1>;
}