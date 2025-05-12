import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './News.module.scss';
import { getImageUrl } from "../../../utils/image";


const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/news')
            .then(res => {
                setNews(res.data.news);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>📰 Tin tức mới nhất</h2>
            <div className={styles.list}>
                {Array.isArray(news) && news.map(item => (
                    <Link to={`/news/${item._id}`} className={styles.card} key={item._id}>
                        {item.image && (
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.image} />
                            </div>
                        )}
                        <div className={styles.content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.snippet}>{item.content.substring(0, 100)}...</p>
                            <td>
                                {item.imgStory && (
                                    <img
                                        src={getImageUrl(item.imgStory)}
                                        alt="img"
                                        width={100}
                                    />
                                )}
                            </td>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
