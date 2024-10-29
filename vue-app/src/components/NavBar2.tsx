import {Link, Outlet} from 'react-router-dom';
import {useState} from "react";

// Reusable component for Menu Links with hover styling
const MenuLink = ({to, label}) => {
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
                    position: 'relative', // Enable positioning for the pseudo-element
                }}
            >
                <h4 style={{padding: 0, margin: 1}}>{label}</h4>
                {/* Border element that grows from left to right */}
                <div
                    style={{
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '1px',
                        width: isHovered ? '100%' : '0%', // Animate width from 0 to 100%
                        backgroundColor: '#d8d1d1', // Border color
                        transition: 'width 0.3s ease', // Smooth transition for width
                    }}
                />
            </div>
        </Link>
    );
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
            onMouseEnter={(e) => e.target.style.color = '#767171'}
            onMouseLeave={(e) => e.target.style.color = 'inherit'}
        >
            <h4>{label}</h4>
        </Link>
    );
};

const NavBar2 = () => {

    const options = [
        {to: '/recipes', label: 'recipes'},
        {to: '/music', label: 'music'},
        {to: '/photos', label: 'photography'},
    ];

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                color: '#d8d1d1',
                height: 36,
                position: 'sticky',
                top: 8,
                borderRadius: 36,
                paddingLeft: 36,
                paddingRight: 36,
                zIndex: 1
            }}>
                <Link to={'/'}>
                    <h2>bmontijo</h2>
                </Link>
                <div style={{display: 'flex', position: 'relative'}}>
                    {/* Home Menu */}
                    {options.map((option) => (
                        <MenuLink key={option.label} to={option.to} label={option.label}/>
                    ))}
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default NavBar2;
