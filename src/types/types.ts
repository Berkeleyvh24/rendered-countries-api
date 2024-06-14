export interface Flags{
    svg: string;
    png: string;
}

export interface Name{
    common: string;
}

export interface Country {
    name: Name;
    capital: string;
    population: number;
    region: string;
    flags: Flags;
  }

export interface detailedName{
    common: string;
    official: string;
}

export interface currencyDetail {
    name: string;
    symbole: string;
}

export interface dynamicCurrencyDetail{
    [key: string]: currencyDetail
}

export interface CountryDetail{
    name: detailedName;
    population: number;
    region: string;
    flags: Flags;
    subregion: string;
    capital: string[]
    tld: string[]
    currencies: dynamicCurrencyDetail;
    languages: any
    borders?: string[];

}