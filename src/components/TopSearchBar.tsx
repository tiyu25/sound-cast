const TopSearchBar = (): JSX.Element => {
    return (
        <div className="top-search-bar-box">
            <input type="text" name="searchKeyword" id="searchKeyword" placeholder="노래, 아티스트 검색" />
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.7228 11.8138L15 15M13.6161 7.30805C13.6161 10.7919 10.7919 13.6161 7.30805 13.6161C3.82421 13.6161 1 10.7919 1 7.30805C1 3.82421 3.82421 1 7.30805 1C10.7919 1 13.6161 3.82421 13.6161 7.30805Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                검색하기
            </button>
        </div>
    )
}

export default TopSearchBar;