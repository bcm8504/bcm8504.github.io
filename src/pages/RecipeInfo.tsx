import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Recipe} from "./Recipes.tsx";
import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Dynamically import all recipe JSON files
const recipes = import.meta.glob('../data/recipes/*.json');

const RecipeInfo = () => {
    const {name} = useParams();
    const [recipe, setRecipe] = useState<Recipe>();
    const [servings, setServings] = useState<number>(0);

    const fetchRecipe = async () => {
        if (name) {
            // Construct the file path using the name parameter
            const recipePath = `../data/recipes/${name.replaceAll('-', '_')}.json`;
            const recipeImport = recipes[recipePath];

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const {default: data} = await recipeImport();
            setRecipe(data);
            setServings(data.servings);
        }
    };

    useEffect(() => {
        fetchRecipe();
    }, [name]);

    if (!recipe) {
        return <div className={'container'}><h3>loading...</h3></div>;
    }

    return (
        <div className={'container'}>
            <h3>{recipe.name.replaceAll('_', ' ')}</h3>
            <div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top',
                    width: '50%',
                    marginBottom: '10px',
                }}><IconButton
                    size={'small'}
                    color={'inherit'}
                    sx={{
                        border: '1px solid',
                        borderRadius: 1,
                        width: 20,
                        height: 20,
                        transition: '0.25s',
                        '&:hover': {
                            backgroundColor: '#d8d1d1',
                            color: '#1e1c1c',
                            borderColor: '#d8d1d1',
                        }
                    }}
                    onClick={() => setServings(prev => (prev < 16 ? prev + 1 : prev))}
                >
                    <AddIcon fontSize={'small'} style={{width: 14, height: 14}}/>
                </IconButton>
                    <IconButton
                        size={'small'}
                        color={'inherit'}
                        sx={{
                            border: '1px solid',
                            borderRadius: 1,
                            width: 20,
                            height: 20,
                            margin: '0 8px 0 4px',
                            transition: '0.25s',
                            '&:hover': {
                                backgroundColor: '#d8d1d1',
                                color: '#1e1c1c',
                                borderColor: '#d8d1d1',
                            }
                        }}
                        onClick={() => setServings(prev => (prev > 0 ? prev - 1 : prev))}
                    >
                        <RemoveIcon fontSize={'small'} style={{width: 14, height: 14}}/>
                    </IconButton>
                    {servings} {servings === 1 ? 'serving' : 'servings'}
                </div>
            </div>
            <div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top',
                    width: '25%',
                }}>
                    <h4>ingredients</h4>
                    {recipe.ingredients?.map((ingredient) => (
                        <div>
                            <div style={{
                                display: 'inline-block',
                                width: '15%',
                                textAlign: 'right',
                                paddingRight: '2%'
                            }}>{recipe.servings && Math.round(ingredient.amount * servings / recipe.servings * 10) / 10}{ingredient.unit}
                            </div>
                            <div style={{display: 'inline-block', width: '83%'}}>{ingredient.name}</div>
                        </div>
                    ))}
                </div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top',
                    width: '75%',
                }}>
                    <h4>method</h4>
                    <ol>
                        {recipe.instructions?.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;
