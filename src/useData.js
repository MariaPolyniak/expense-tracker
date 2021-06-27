import create from 'zustand';

const useData = create(set => ({
    categories: [
        {title: "Food", expense: 90, id: 1},
        {title: "Clothes", expense: 88, id: 2},
        {title: "Books", expense: 71, id: 3},
    ],
    income: [
        {title: "Salary", amount: 10000},
        {title: "Additional", amount: 500}
    ],
    expense: [],
    addNewCategory: (newCategory) => set(state => ({categories: [...state.categories, newCategory]})),
    deleteSelectedCategory: (selectedCategoryId) => set(state => ({categories: state.categories.filter(category => category.id !== selectedCategoryId)})),
}))

export default useData;