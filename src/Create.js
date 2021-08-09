import React from 'react'

const Create = () => {
    return (
        <div className="create">
            <h2>
                Add a new blog
            </h2>
            <form>
            <label> Blog title:</label>
            <input type="text" required/>
            <label> Blog body:</label>
            <textarea required>

            </textarea>
            <label> Blog author:</label>
            <select>
                <option value="Jonathan"> jonathan</option>
                <option value="Micheal"> Micheal</option>
                <option value="yoda"> Baby Yoda</option>
            </select>
            <button> Add Blog</button>
            </form>
           

        </div>
    )
}

export default Create

