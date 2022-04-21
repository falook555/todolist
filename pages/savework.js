import React from 'react'

const Savework = () => {
    return (
        <div>
            <form action='' method='POST'>
                <div className="form-group">
                    <label htmlFor="Name">FName</label>
                    <input type="text" className="form-control" id="FName" name='fname' placeholder="Enter FName" />
                </div>
                <div className="form-group">
                    <label htmlFor="LName">LName</label>
                    <input type="text" className="form-control" id="LName" name='lname' placeholder="Enter LName" />
                </div>
                <div>
                    <button className='btn btn-success btn-block' type='submit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Savework