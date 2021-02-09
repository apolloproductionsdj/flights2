import React from 'react';

function ReviewForm(props) {
    return (
        <div className="Wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have an experience with {props.attributes.name} Share your review!</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Revew Description" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">
                            Rate this Airline
                            [Star Rating Goes Here]
                        </div>
                    </div>
                    <button type="submit">Submit Your Review</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;
