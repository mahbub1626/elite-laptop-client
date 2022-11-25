import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, categoryId, img}=category;
    return (
        <div className='my-12'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img} alt="laptop" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">USED</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link to={`/category/${categoryId}`}>
                            <button className='btn btn-primary'>See {name} Laptop</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Category;