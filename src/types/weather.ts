export interface WeatherResponse {
    city: string;
    temperature: number;
    condition: "맑음" | "흐림" | "비" | "눈" | "천둥번개" | "안개" | string;
}