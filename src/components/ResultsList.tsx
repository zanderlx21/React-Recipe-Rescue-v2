import React, { useState } from 'react';
import { Recipe, RecipeThing } from '../models/recipe';
import Result from './Result';

interface Prop {
    recipes: Recipe[];
}

const ResultsList = ({recipes}: Prop) => {
    const [] = useState();

    console.log(recipes)

    return (
        <div >
            <h2 id="ResultsHeader"> Here's some options for you...</h2>
            <div className="ResultsList">
            {recipes.map((recipe, i) => (<Result key={i} recipe={recipe.recipe}/>))}
            </div>
        </div>
    )
}


export default ResultsList;

{/* <select name="health-restrictions" id="health-dropdown" value={healthLabel} onChange={(e) => setHealthLabel(e.target.value)}>
<option value="">Select one</option>
<option value="alcohol-cocktail"> alcohol-cocktail  </option>
<option value="alcohol-free"> alcohol-free  </option>
<option value="celery-free"> celery-free  </option>
<option value="crustacean-free"> crustacean-free  </option>
<option value="dairy-free"> dairy-free  </option>
<option value="DASH"> DASH  </option>
<option value="egg-free"> egg-free  </option>
<option value="fish-free"> fish-free  </option>
<option value="fodmap-free"> fodmap-free  </option>
<option value="gluten-free"> gluten-free  </option>
<option value="immuno-supportive"> immuno-supportive  </option>
<option value="keto-friendly"> keto-friendly  </option>
<option value="kidney-friendly"> kidney-friendly  </option>
<option value="kosher"> kosher  </option>
<option value="low-fat-abs"> low-fat-abs  </option>
<option value="low-potassium"> low-potassium  </option>
<option value="low-sugar"> low-sugar  </option>
<option value="lupine-free"> lupine-free  </option>
<option value="Mediterranean"> Mediterranean  </option>
<option value="mollusk-free"> mollusk-free  </option>
<option value="mustard-free"> mustard-free  </option>
<option value="no-oil-added"> no-oil-added  </option>
<option value="paleo"> paleo  </option>
<option value="peanut-free"> peanut-free  </option>
<option value="pescatarian"> pescatarian  </option>
<option value="pork-free"> pork-free  </option>
<option value="red-meat-free"> red-meat-free  </option>
<option value="sesame-free"> sesame-free  </option>
<option value="shellfish-free"> shellfish-free  </option>
<option value="soy-free"> soy-free  </option>
<option value="sugar-conscious"> sugar-conscious  </option>
<option value="sulfite-free"> sulfite-free  </option>
<option value="tree-nut-free"> tree-nut-free  </option>
<option value="vegan"> vegan  </option>
<option value="vegetarian"> vegetarian  </option>
<option value="wheat-free"> wheat-free  </option>
</select> */}