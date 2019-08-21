import React from 'react';
import Article from '../components/Article';


const articles = [
    {
        id: 1,
        title: "Lorem Ipsum",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quod laboriosam qui aliquam aperiam consequuntur ad neque doloremque, quae a inventore illo est deserunt laudantium vitae eos repudiandae quasi eligendi."
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        author: "Janusz Kowalski",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quod laboriosam qui aliquam aperiam consequuntur ad neque doloremque, quae a inventore illo est deserunt laudantium vitae eos repudiandae quasi eligendi."
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        author: "Mariola Nowacka",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quod laboriosam qui aliquam aperiam consequuntur ad neque doloremque, quae a inventore illo est deserunt laudantium vitae eos repudiandae quasi eligendi."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;