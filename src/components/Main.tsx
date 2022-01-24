import React, { useEffect, useState } from 'react';
import { Recipe, RecipeThing, SearchTerms } from '../models/recipe';
import { fetchAllData } from '../services/RecipieAPI';
import ResultsList from './ResultsList';
import SearchForms from './SearchForms';
import RRLogo from '../RRLogo.gif';

const Main = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [search, setSearch] = useState<string>("chicken");

    const handleSubmitForm = (searchTerm: string) => {
        console.log(recipes);
        setSearch(searchTerm)
    }
    
    useEffect(() => {
        fetchAllData(search).then(data => setRecipes(data));
    },[search])



    return (
        <div className="Fixed-Header">
            <img src={RRLogo} id="RRLogo" alt=""/>
            <SearchForms onSubmit={handleSubmitForm}/>
            <ResultsList recipes={recipes}/>
        </div>
    )
}

export default Main;