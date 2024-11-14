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
            <ul>
                {
                    foods.map(food => {
                        return <li>{food}</li>
                    })
                }
            </ul>
        </section>
    )
}

export {
    FoodList
}