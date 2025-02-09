export default async function (
    code: string,
    clientId: string,
    clientSecret: string,
    state: string,
    redirectUri: string
) {
    const body = new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
    });

    if (state) body.append("state", state);

    const res = await fetch("https://oauth2.googleapis.com/token", {
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
