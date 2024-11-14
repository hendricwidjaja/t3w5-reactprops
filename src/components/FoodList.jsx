import { FoodCard } from "./FoodCard";

let foods = [
    'bokkeumbap',
    'ramen',
    'sushi',
    'pasta',
    'pork buns',
    'lasagna',
    'pizza',
    'dumplings',
    'butter chicken',
    'laksa'
];

function FoodList() {
    return (
        <section>
            {
                foods.map(food => {
                    return <p><FoodCard foodName={food}/></p>
                })
            }
        </section>
    )
}

export {
    FoodList
}