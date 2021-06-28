import React from "react";
import Category from "./Category";
import NewCategory from "./NewCategory";

const Categories = (({categories, totalIncomeAmount, addNewCategory, deleteSelectedCategory, updateSelectedCategory}) => {
    return (
        <>
            <NewCategory addNewCategory={addNewCategory} />
            {categories.map(category => <Category category={category} totalIncomeAmount={totalIncomeAmount} deleteSelectedCategory={deleteSelectedCategory} updateSelectedCategory={updateSelectedCategory} key={category.id}/>)}
        </>
    )
})

export default Categories;