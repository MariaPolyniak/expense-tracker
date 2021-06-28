import create from 'zustand';
import createId from "./utils/uniqueId";

const useData = create(set => ({
    categories: [
        {title: "Food", expense: 90, id:  createId()},
        {title: "Clothes", expense: 88, id:  createId()},
        {title: "Books", expense: 71, id:  createId()},
    ],
    income: [
        {title: "Salary", amount: 10000},
        {title: "Additional", amount: 500}
    ],
    expense: [],
    addNewCategory: (newCategory) => set(state => ({categories: [...state.categories, {title: newCategory, expense: 0, id: createId()}]})),
    deleteSelectedCategory: (selectedCategoryId) => set(state => ({categories: state.categories.filter(category => category.id !== selectedCategoryId)})),
    updateSelectedCategory: (selectedCategoryId, title) => set(state => ({categories: state.categories.map(category => category.id === selectedCategoryId ? ({...category, title}) : category)})),
}))

export default useData;