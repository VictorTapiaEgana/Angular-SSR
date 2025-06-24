export interface ClimaporCiudadResponseType {
  status: number;
  data: ClimaPorCiudadType;
  message: string;
}

export interface ClimaPorCiudadType {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: string | null; 
  hourly: string | null;  
  daily: Daily;
}

export interface Daily {
  data: DiaClima[];
}

export interface DiaClima {
  day: string; 
  weather: string; 
  icon: number;
  summary: string;
  all_day: PeriodoClima;
  morning: null;   
  afternoon: null;
  evening: null;
}

export interface PeriodoClima {
  weather: string;
  icon: number;
  temperature: number;
  temperature_min: number;
  temperature_max: number;
  wind: Viento;
  cloud_cover: Nubosidad;
  precipitation: Precipitacion;
}

export interface Viento {
  speed: number; 
  dir: string;   
  angle: number; 
}

export interface Nubosidad {
  total: number; 
}

export interface Precipitacion {
  total: number; 
  type: string;  
}
