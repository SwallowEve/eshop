import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_CATEGORIES = gql`
query AllProducts {
  categories{
  name}
}
`;

const Categories = () => {
    const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occured</p>;
    return (
        <div className="category">
            {data.categories.map(({ name }, index) => (
                <div className="category__name">
                    <a href="#" key={index}>{name}</a>
                </div>
            ))}
        </div>
    );
};

export default Categories;
