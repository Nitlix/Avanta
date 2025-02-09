export default async function (
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri: string,
    state: string
) {
    const body = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
    });

    if (state) {
        body.append("state", state);
    }

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
