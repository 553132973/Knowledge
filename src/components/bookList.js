import React from 'react';
import '../css/book.css';
const bookList = (props) => {
    return (
        <div>
            {
                props.listData.map((item, index) => {
                    return <div className="bookTitleRow">
                        <h3>{item.bookName}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default bookList