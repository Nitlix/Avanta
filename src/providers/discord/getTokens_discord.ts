export default async function (
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri: string
) {
    const body = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
    });

    const res = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });

    if (!res.ok) {
        throw new Error("The code is invalid.");
    }

    return await res.json();
}
