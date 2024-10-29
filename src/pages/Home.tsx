import {Recipe} from "./Recipes.tsx";
import UnderlineLink from "../components/UnderlineLink.tsx";


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
                    <UnderlineLink to={`/recipes/${recipe.name.replaceAll(' ', '-')}`} label={recipe.name} key={recipe.name}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
