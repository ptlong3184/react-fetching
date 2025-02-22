export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fecth places');
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        header: {
            'Content-type': 'application/json'
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}