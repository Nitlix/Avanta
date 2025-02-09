export default async function (accessToken: string) {
    const res = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        throw new Error("The Access Token is invalid.");
    }

    return await res.json();
}
