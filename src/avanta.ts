import getInfo_discord from "./providers/discord/getInfo_discord";
import getOauthLink_discord from "./providers/discord/getOauthLink_discord";
import getTokens_discord from "./providers/discord/getTokens_discord";
import getInfo_google from "./providers/google/getInfo_google";
import getOauthLink_google from "./providers/google/getOauthLink_google";
import getTokens_google from "./providers/google/getTokens_google";
import { AvantaInitialiser, Provider, ProviderWithFunctions } from "./types";

export default class Avanta<TProviders extends Record<string, Provider>> {
    // Auto generated types
    public providers: { [K in keyof TProviders]: ProviderWithFunctions };

    constructor(init: AvantaInitialiser<TProviders>) {
        if (!init.providers || Object.keys(init.providers).length === 0) {
            throw new Error(
                "No providers were provided. Are you sure you want to use Avanta?"
            );
        }

        // Construct providers
        const providerInit = {} as {
            [K in keyof TProviders]: ProviderWithFunctions;
        };

        Object.keys(init.providers).forEach((provider) => {
            const providerData: Provider = init.providers[provider];

            // Create provider
            const clientId = init.providers[provider].clientId;
            const clientSecret = init.providers[provider].clientSecret;

            switch (providerData.type) {
                case "GOOGLE":
                    providerInit[provider as keyof TProviders] = {
                        type: "GOOGLE",
                        clientId: clientId,
                        clientSecret: clientSecret,
                        scopes: providerData.scopes,

                        getOauthLink: (
                            redirectUri: string,
                            state: string = ""
                        ) =>
                            getOauthLink_google(
                                redirectUri,
                                clientId,
                                state,
                                providerData.scopes
                            ),

                        getTokens: async (
                            code: string,
                            redirectUri: string,
                            state: string = ""
                        ) =>
                            getTokens_google(
                                code,
                                clientId,
                                clientSecret,
                                state,
                                redirectUri
                            ),

                        getInfo: getInfo_google,
                    };
                    break;
                case "DISCORD":
                    providerInit[provider as keyof TProviders] = {
                        type: "DISCORD",
                        clientId: clientId,
                        clientSecret: clientSecret,
                        scopes: providerData.scopes,

                        getOauthLink: (
                            redirectUri: string,
                            state: string = ""
                        ) =>
                            getOauthLink_discord(
                                redirectUri,
                                clientId,
                                providerData.scopes,
                                state
                            ),
                        getTokens: async (
                            code: string,
                            redirectUri: string,
                            state: string = ""
                        ) =>
                            getTokens_discord(
                                clientId,
                                clientSecret,
                                code,
                                redirectUri
                            ),
                        getInfo: getInfo_discord,
                    };
                    break;
            }
        });

        this.providers = providerInit as any;
    }
}
