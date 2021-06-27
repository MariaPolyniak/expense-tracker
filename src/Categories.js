import React from "react";
import Category from "./Category";
import AddNewCategory from "./AddNewCategory";

const Categories = (({categories, totalIncomeAmount}) => {
    return (
        <>
            <AddNewCategory/>
            {categories.map(category => <Category title={category.title} expense={category.expense} totalIncomeAmount={totalIncomeAmount} key={category.id}/>)}
        </>
    )
})

export default Categories;