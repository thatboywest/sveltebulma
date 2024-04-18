import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    try {
        const data = await request.json();
        const { username, password } = data;

        if (!password || !username) {
            return new Response("Missing username or password", { status: 400 });
        }

        cookies.set('username', username, { path: "/" });

        return json({
            message: `Welcome ${username}`,
        });
    } catch (error) {
        console.error("Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
