import { Outlet, useLocation } from 'react-router-dom';
import UnderlineLink from "./UnderlineLink.tsx";

const NavBar = () => {
    const location = useLocation(); // Get the current location

    const options = [
        { to: '/recipes', label: 'recipes' },
        { to: '/music', label: 'music' },
        { to: '/photos', label: 'photography' },
    ];

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 36,
                position: 'sticky',
                top: 8,
                zIndex: 1
            }}>
                <UnderlineLink to={'/'} label={'brandon'} style={'h2'} />
                <div style={{ display: 'flex', position: 'relative' }}>
                    {options.map((option) => (
                        <UnderlineLink
                            key={option.label}
                            to={option.to}
                            label={option.label}
                            style={'h4'}
                            isActive={location.pathname === option.to} // Check if the current path matches
                        />
                    ))}
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
