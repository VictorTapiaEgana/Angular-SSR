export interface DatosCiudadResponseType {
    status:string;
    data:DatosCiudadType;
    message:string
}

export interface DatosCiudadType {
    lat: string;
    lon: string;
    elevation: number;
    timezone: string;
    units: string;
    current: Current;
    hourly: Hourly;
    daily: Daily;
}

export interface Wind {
    speed: number;
    angle: number;
    dir: string;
}

export interface Precipitation {
    total: number;
    type: string;
}

export interface Current {
    icon: string;
    icon_num: number;
    summary: string;
    temperature: number;
    wind: Wind;
    precipitation: Precipitation;
    cloud_cover: number;
}

export interface Cloud_cover {
    total: number;
}

export interface Data {
    date: string;
    weather: string;
    icon: number;
    summary: string;
    temperature: number;
    wind: Wind;
    cloud_cover: Cloud_cover;
    precipitation: Precipitation;
}

export interface Hourly {
    data: Data[];
}

export interface Daily {
    data: Data[];
}

