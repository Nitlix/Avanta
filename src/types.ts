export type AvantaInitialiser<TProviders extends Record<string, Provider>> = {
    providers: TProviders;
};

//autogenerate providers
//e.g. {hello: ProviderWithFunctions} would become a type of {hello: ProviderWithFunctins}

export type Provider =
    | ({
          type: "GOOGLE";
      } & Provider_Google)
    | ({ type: "DISCORD" } & Provider_Discord);

export type ProviderWithFunctions =
    | ({
          type: "GOOGLE";
      } & Provider_Google_Functions &
          Provider_Google)
    | ({ type: "DISCORD" } & Provider_Discord & Provider_Discord_Functions);

export type Provider_Google = {
    clientId: string;
    clientSecret: string;
    scopes: string[];
};

export type Provider_Google_Functions = {
    getOauthLink: (redirectUri: string, state: string) => string;
    getTokens: (
        code: string,
        redirectUri: string,
        state?: string
    ) => Promise<Record<string, string>>;
    getInfo: (accessToken: string) => Promise<Record<string, string>>;
};

export type Provider_Discord = {
    clientId: string;
    clientSecret: string;
    scopes: string[];
};

export type Provider_Discord_Functions = {
    getOauthLink: (redirectUri: string, state: string) => string;
    getTokens: (
        code: string,
        redirectUri: string,
        state?: string
    ) => Promise<Record<string, string>>;
    getInfo: (accessToken: string) => Promise<Record<string, string>>;
};
