export default function Logo({width, height}) {
    return(
        <svg
            // width="80"
            // height="80"
            width={width}
            height={height}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="4" fill="none" />
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Montserrat, sans-serif"
                fontSize="36"
                fill="#FFFFFF"
                fontWeight="bold"
                >
                HM
            </text>
        </svg>
    );
}