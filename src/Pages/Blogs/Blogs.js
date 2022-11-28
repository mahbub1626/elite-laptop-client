import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const questions = [
        {
            id: 1,
            title: '1. What are the different ways to manage a state in a React application?',
            info:
                'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
        },
        {
            id: 2,
            title: '2. How does prototypical inheritance work?',
            info:
                'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
        },
        {
            id: 3,
            title: '3. What is a unit test? Why should we write unit tests?',
            info:
                'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
        },
        {
            id: 4,
            title: '4. React vs. Angular vs. Vue?',
            info:
                'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
        },
        
    ]

    return (
        <div className='my-20 lg:w-1/2 mx-auto px-4'>
            <div className='container'>
                <h3 className='text-3xl text-center mb-8 font-bold'>Questions And Answers</h3>
                <section className='info text-xl'>
                    {questions.map((question) => (
                        <Blog key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Blogs;