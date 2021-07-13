import axios from 'axios';

const hyGamesApi = axios.create({
    baseURL: 'https://hy-games.herokuapp.com/api',
});

export const getAllReviews = async ( sortFilterArg = "created_at", orderFilterArg = "desc" ) => {
    const { data } = await hyGamesApi.get(`/reviews?sort_by=${sortFilterArg}&order=${orderFilterArg}`);
    return data.reviews;
};

export const getCategories = async () => {
    const { data } = await hyGamesApi.get(`/categories`);
    return data.categories;
}