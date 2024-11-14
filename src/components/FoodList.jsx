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
                foods.map((food, index) => {
                    return <p><FoodCard key={index} foodName={food}/></p>
                })
            }
        </section>
    )
}

export {
    FoodList
}