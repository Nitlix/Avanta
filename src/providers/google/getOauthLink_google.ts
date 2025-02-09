export default function (
    redirectUri: string,
    clientId: string,
    state: string,
    scopes: string[]
) {
    const url = new URL("https://accounts.google.com/o/oauth2/auth");
    url.searchParams.append("scope", scopes.join(" "));

    url.searchParams.append("response_type", "code");
    url.searchParams.append("client_id", clientId);

    url.searchParams.append("redirect_uri", redirectUri);

    if (state) url.searchParams.append("state", state);

    return url.toString();
}
