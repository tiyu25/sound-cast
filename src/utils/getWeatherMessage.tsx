// utils/getWeatherMessage.tsx
export const getWeatherMessage = (condition: string): JSX.Element => {
    if (!condition) return <span>날씨 정보를 불러오는 중입니다.</span>;

    const value = condition.toLowerCase();

    if (value.includes("맑"))
        return (
            <span>
                날씨가 좋아요! <br />
                나들이 가기 딱이에요 🌞
            </span>
        );

    if (value.includes("흐림") || value.includes("구름"))
        return (
            <span>
                집 밖은 위험해! <br />
                날씨가 나빠요 ☁️
            </span>
        );

    if (value.includes("비") || value.includes("소나기"))
        return (
            <span>
                우산 챙기세요! <br />
                비가 와요 ☔️
            </span>
        );

    if (value.includes("눈"))
        return (
            <span>
                도로가 미끄러워요! <br />
                조심하세요 ❄️
            </span>
        );

    return <>현재 날씨를 확인하세요.</>;
};
