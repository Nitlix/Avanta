export default async function (accessToken: string) {
    const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        throw new Error("The Access Token is invalid.");
    }

    return await res.json();
}
