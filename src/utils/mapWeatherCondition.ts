/**
 * 날씨값 분류 매핑
 */
export const mapWeatherCondition = (condition?: string): string => {
    if (!condition) return "알 수 없음";

    if (condition.includes("맑")) return "맑음";
    if (condition.includes("흐림") || condition.includes("구름")) return "흐림";
    if (condition.includes("비") || condition.includes("소나기")) return "비";
    if (condition.includes("눈")) return "눈";
    
    return "기타";
}