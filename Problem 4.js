function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let highRated = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > highRated.rating) {
            highRated = restaurants[i];
        }
    }

    return highRated.name.toUpperCase();
}