import React, { useState } from 'react'
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder'
import BasicTextFields from './BasicTextFields'

const Sort = () => {
    const [titles, setTitles] = useState([
        { id: 1, body: "Species" },
        { id: 2, body: "Gender" },
        { id: 3, body: "Status" },
    ]);

    return (
        <div className="sort">
            <BasicTextFields />
            {titles.map((title) =>
                <MultipleSelectPlaceholder title={title} key={title.id} />
            )}
        </div>
    )
}

export default Sort