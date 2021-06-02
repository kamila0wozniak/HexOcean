export const dishTypes = {
    PIZZA: 'pizza',
    SOUP: 'soup',
    SANDWICH: 'sandwich',
};

export const isPizza = (type) => {
    return type === dishTypes.PIZZA
};
export const isSoup = (type) => {
    return type === dishTypes.SOUP
};
export const isSandwich = (type) => {
    return type === dishTypes.SANDWICH
};

export const saveDish = (e, state) => {
    e.preventDefault();
    const {name, time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread} = state;
    const data = {
        name: name,
        preparation_time: time,
        type: type,
    };
    if (isPizza(type)) {
        data['no_of_slices'] = parseInt(no_of_slices);
        data['diameter'] = parseInt(diameter);
    }
    if (isSoup(type)) {
        data['spiciness_scale'] = parseInt(spiciness_scale);
    }
    if (isSandwich(type)) {
        data['slices_of_bread'] = parseInt(slices_of_bread);
    }

    return fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};
