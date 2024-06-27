import React from 'react'
import CardRecipe from './CardRecipe'
import { Card } from 'react-bootstrap'

export default function Hotrecipes() {
  const HotRecipesList = [<CardRecipe/>,<CardRecipe/>,<CardRecipe/>]
  return (
    <div className='hotRecipes'>
        <h1>Hot Recipes</h1>
        <div className=''>
       <div className="scroll-container"> {
        HotRecipesList.map((card)=>
        
        
        <div className="scroll-item HotRecipesCard">{card}</div>
      )
}</div>

      </div>

    </div>
  )
}
