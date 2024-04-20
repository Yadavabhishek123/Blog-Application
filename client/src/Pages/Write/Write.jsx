import "./write.css"
import React from "react";
function Write() {
    return (
        <div className="Write">
            <img className="writeImg" src="" alt="" />
            <form className="writeForm" >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write;