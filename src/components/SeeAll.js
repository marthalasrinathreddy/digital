import React, { Component } from 'react'

class SeeAll extends Component {
    render() {
        return (
            <div className="seeAll">
                <div className="seeAllLeft">
                    <h1 style={{ fontSize: "3em", fontFamily: "sans-serif" }}>
                        We've done lot's of work, Let's<br></br>
                        check some from here
                    </h1>

                </div>
                <div className="seeAllRight">
                    <button className="btn btn-default" style={{ padding: "15px", paddingLeft: "25px", paddingRight: "25px", borderColor: "gray", fontSize: "1.2em", fontWeight: "500" }}>SEE ALL PROJECTS</button>
                </div>
            </div>
        )
    }
}

export default SeeAll
