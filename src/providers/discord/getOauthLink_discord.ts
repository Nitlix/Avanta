export default function (
    redirectUri: string,
    clientId: string,
    scopes: string[],
    state: string = ""
) {
    const url = new URL("https://discord.com/api/oauth2/authorize");
    url.searchParams.append("client_id", clientId);
    url.searchParams.append("redirect_uri", redirectUri);
    url.searchParams.append("response_type", "code");
    url.searchParams.append("scope", scopes.join(" "));

    if (state) url.searchParams.append("state", state);

    return url.toString();
}
