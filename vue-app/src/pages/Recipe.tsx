import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Dynamically import all recipe JSON files
const recipes = import.meta.glob('../data/recipes/*.json');

const Recipe = () => {
    const { name } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            // Construct the file path using the name parameter
            const recipePath = `../data/recipes/${name.replaceAll('-', '_')}.json`;
            const recipeImport = recipes[recipePath];

            if (recipeImport) {
                try {
                    const { default: data } = await recipeImport();
                    setRecipe(data);
                } catch (err) {
                    setError('failed to load recipe data');
                }
            } else {
                setError('recipe not found');
            }
        };

        fetchRecipe();
    }, [name]);

    if (error) {
        return <div className={'container'}><h3>{error}</h3></div>;
    }

    if (!recipe) {
        return <div className={'container'}><h3>loading...</h3></div>;
    }

    return (
        <div className={'container'}>
            <h3>{recipe.name.replaceAll('_', ' ')}</h3>
            <h4>ingredients</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name}
                        {ingredient.subIngredients.length > 0 && (
                            <ul>
                                {ingredient.subIngredients.map((subIngredient, subIndex) => (
                                    <li key={subIndex}>
                                        {subIngredient.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <h4>method</h4>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
