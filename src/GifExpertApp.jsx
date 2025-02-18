import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        const newCategoryLowCase = newCategory.toLowerCase();
        const findCategory = categories.find(cat => newCategoryLowCase == cat.toLowerCase());
        if (findCategory) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

        </>
    )
}
