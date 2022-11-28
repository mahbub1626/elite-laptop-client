import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const questions = [
        {
            id: 1,
            title: '1. What are the different ways to manage a state in a React application?',
            info:
                'The Four Kinds of React State to Manage When we talk about state in our applications, its important to be clear about what types of state actually matter.',
        },
        {
            id: 2,
            title: '2. How does prototypical inheritance work?',
            info:
                'In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.',
        },
        {
            id: 3,
            title: '3. What is a unit test? Why should we write unit tests?',
            info:
                'Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.',
        },
        {
            id: 4,
            title: '4. React vs. Angular vs. Vue?',
            info:
                'If the choice you are making is based on Angular vs React alone, then youll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.React often requires extra modules and components, which keeps the core library small, but means theres extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesnt require extras like React often does, though it does have a steeper learning curve for its core compared to React. The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so theres no sign that React is on the decline either. Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.In most cases, you probably would not be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.',
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