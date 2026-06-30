import { useState } from "react";

export function LoginPage() {
	const [accountType, setAccountType] = useState<"staff" | "tenant">("tenant");

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-400 px-4 py-10">
			<div className="w-full max-w-md rounded-xl border border-gray bg-white p-6 shadow-2xl">
				<div className="mb-6 rounded-xl bg-blue-100 p-1">
					<div className="grid grid-cols-2 gap-1">
						<button
							type="button"
							onClick={() => setAccountType("tenant")}
							className={`rounded-xl px-4 py-3 transition ${
								accountType === "tenant"
									? "bg-white text-blue "
									: "text-blue hover:text-blue"
							}`}
						>
							Tenant
						</button>
						<button
							type="button"
							onClick={() => setAccountType("staff")}
							className={`rounded-xl px-4 py-3 transition ${
								accountType === "staff"
									? "bg-white text-blue"
									: "text-blue hover:text-blue"
							}`}
						>
							Staff
						</button>
					</div>
				</div>

				<div className="space-y-4">
					<div>
						<label
							htmlFor="user-id"
							className="mb-2 block text-sm font-medium text-gray-700"
						>
							User ID
						</label>
						<input
							id="user-id"
							type="text"
							placeholder="Enter your user ID"
							className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="mb-2 block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="Enter your password"
							className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
						/>
					</div>

					<button
						type="button"
						className="mt-2 h-12 w-full rounded-2xl bg-blue-300 text-sm font-semibold text-white transition hover:bg-blue-400"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
