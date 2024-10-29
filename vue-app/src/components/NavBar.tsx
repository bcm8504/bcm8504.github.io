import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';
import {Container} from "@mui/material";

// Reusable component for Menu Links with hover styling
const MenuLink = ({to, label, onMouseEnter, onMouseLeave}) => {
    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#ffffff';
        if (onMouseEnter) onMouseEnter();
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'transparent';
        if (onMouseLeave) onMouseLeave();
    };

    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '10px 12px',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label}
        </Link>
    );
};

// Reusable component for Dropdown Links
const DropdownMenu = ({active, options, alignRight}) => {
    if (!active) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 44, // Positioned right below the navbar
            left: alignRight ? 'auto' : '0',
            right: alignRight ? '0' : 'auto',
            backgroundColor: '#fff',
            width: 120,
            padding: '10px',
            borderRadius: '0px 12px 12px 12px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1,
        }}>
            {options.map((option, index) => (
                <Link
                    key={index}
                    to={option.to}
                    style={{
                        textDecoration: 'none',
                        color: '#333',
                        display: 'block',
                        padding: 4,
                        borderRadius: '4px',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3ece7'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    {option.label}
                </Link>
            ))}
        </div>
    );
};

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const cookingOptions = [
        {to: '/recipes', label: 'my recipes'},
        {to: '/all-recipes', label: 'recipe index'},
    ];

    const musicOptions = [
        {to: '/music/option1', label: 'Playlists'},
        {to: '/music/option2', label: 'Albums'},
        {to: '/music/option3', label: 'Artists'},
    ];

    return (
        <Container maxWidth={'lg'}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#121111',
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
                    <h2>brandon</h2>
                </Link>
                <div style={{display: 'flex', position: 'relative'}}>
                    {/* Home Menu */}
                    <MenuLink to={''} label={'home'}/>

                    {/* Cooking Menu with Dropdown */}
                    <div
                        onMouseEnter={() => handleMouseEnter('cooking')}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            position: 'relative',
                            padding: '10px 0px',
                        }}
                    >
                        <MenuLink to={'cooking'} label={'cooking'}/>
                        <DropdownMenu active={activeDropdown === 'cooking'} options={cookingOptions}/>
                    </div>

                    {/* Music Menu with Dropdown - Bottom-right */}
                    <div
                        onMouseEnter={() => handleMouseEnter('music')}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            position: 'relative',
                            padding: '10px 0px',
                        }}
                    >
                        <MenuLink to={'music'} label={'music'}/>
                        <DropdownMenu active={activeDropdown === 'music'} options={musicOptions} alignRight/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </Container>
    );
}

export default NavBar;
