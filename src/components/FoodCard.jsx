function FoodCard(props) {
    const {foodName /* otherProp, anotherProp */} = props;
    return (
        <div>
            <h3>{foodName}</h3>
            <p>Description of the Food</p>
        </div>
    )
}

export {
    FoodCard
}