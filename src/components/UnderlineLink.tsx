import {useState} from "react";
import {Link} from "react-router-dom";

const UnderlineLink = ({
    to,
    label,
    style,
    isActive,
}: {
    to: string;
    label: string;
    style?: 'h2' | 'h4' | 'p';
    isActive?: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '10px 12px',
                transition: 'color 0.3s',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 2,
                    overflow: 'hidden',
                    flex: '0 0 auto',
                    position: 'relative',
                }}
            >
                {style === 'h2' && (<h2 style={{padding: 0, margin: 0}}>{label}</h2>)}
                {style === 'h4' && (<h4 style={{padding: 0, margin: 0}}>{label}</h4>)}
                {(style === 'p' || !style) && (<p style={{padding: 0, margin: 0}}>{label}</p>)}
                <div
                    style={{
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '1px',
                        width: isHovered || isActive ? '100%' : '0%', // Include isActive
                        backgroundColor: '#d8d1d1',
                        transition: 'width 0.3s ease',
                    }}
                />
            </div>
        </Link>
    );
};

export default UnderlineLink;
