import {addNewsAC, updateNewsAC} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        novost: state.newsPage.novost,
        news: state.newsPage.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: (textArea) => {
            dispatch(addNewsAC(textArea))
        },
        changeText: (info) => {
            dispatch(updateNewsAC(info))
        }
    }
}


const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);


export default NewsContainer;