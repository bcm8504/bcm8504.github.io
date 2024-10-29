import {Recipe} from "./Recipes.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const RecipeLink = ({recipe}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/recipes/${recipe.name.replaceAll(" ", "-")}`}
            style={{textDecoration: 'none', position: 'relative'}}
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
                    marginRight: '16px',
                    flex: '0 0 auto',
                    position: 'relative', // Enable positioning for the pseudo-element
                }}
            >
                <h4 style={{padding: 0, margin: 1}}>{recipe.name}</h4>
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
};

const Home = () => {
    const featuredRecipes: Recipe[] = [
        {name: 'apple pork'},
        {name: 'green scallion pasta'},
        {name: 'miso mushroom pasta'},
        {name: 'bulgogi stir fry don'},
        {name: 'carne frita tacos'}
    ];

    return (
        <div className={'container'}>
            <h3>featured recipes</h3>
            <div style={{display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
                {featuredRecipes.map((recipe) => (
                    <RecipeLink key={recipe.name} recipe={recipe}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
