import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
                <img src="https://yt3.ggpht.com/a/AATXAJyn3Oj1n90vIOfDkoeuuqGKaYKqRPaW17VDkQ=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                <div className={s.postDescr}>
                    <div className={s.descr}>
                        { props.message }
                    </div>
                    <div className={s.likes}>
                            <img src="../../../../accets/imges/like.png" alt="like"/>
                            <span className={s.likesCount}>{props.likesCount}</span>
                    </div>
                </div>
    </div>
    )
}

export default Post;