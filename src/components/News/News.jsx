import React from 'react';
import s from "./News.module.css"
import ItemNews from "./ItemNews/ItemNews";



const News = (props) => {
    let newsList = props.news.map(news => <ItemNews descr={news.description} /> )

    let textareaNews = React.createRef();

    let addNews = () => {
        let textArea = textareaNews.current.value;
        props.addNews(textArea);
        textareaNews.current.value ='';
    }

    let changeText = () => {
        let info = textareaNews.current.value;
        props.changeText(info);
    }


        return (
        <div className={s.news}>
            <h3>Новости</h3>
            <div>
                <div>
                    <textarea ref={textareaNews} placeholder={"Введите текст новости"} onChange={changeText} value={props.novost} />
                </div>
                <div>
                    <button onClick={addNews}>Добавить новость</button>
                </div>
            </div>
            <div>
                {newsList}
            </div>
        </div>
    )
}


export default News;