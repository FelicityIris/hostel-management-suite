import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/example")({
	server: {
		handlers: {
			GET: () => Response.json({ message: "This is an example API response." }),
		},
	},
});
