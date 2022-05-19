import React from 'react';

const About = () => {
    return (
        <div className="accordion container text-start my-4" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <h3>Differences between JavaScript and Nodejs</h3>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                    Javascript is a client-side scripting language whereas Nodejs is a server-side scripting language. Javascript runs on the browser but Nodejs helps javascript to run outside of the browser. Javascript is capable to use HTML and play with dom but nodejs isn't capable to use any HTML tags.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h3>When to use Nodejs and when to use MongoDB?</h3>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                    Nodejs is a run-time environment for javascript that helps to run JavaScript outside a web browser and is used when building fast, scalable server-side and real-time, networking applications. MongoDB is a NoSQL database, used when your data is document-centric and doesn't fit into the schema of a relational database or if your data is unstructured, etc. MongoDB is used for developing scalable applications.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h3>Differences between SQL and NoSQL databases.</h3>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                    Where SQL databases are vertically scalable, NoSQL databases are horizontally scalable. SQL databases are table-based whereas NoSQL databases are key-value pairs/ document-based/ graph, or wide-column stores. SQL databases have fixed schema which is rigid while NoSQL databases have dynamic schema which is flexible.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;