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