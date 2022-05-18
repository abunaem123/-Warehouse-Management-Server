import React from 'react';
import './BlogSection.css'

const BlogSection = () => {
    return (

        <div>
            <h2>Our Recent Blogs</h2>

            <div className="card-group container">

                <div className='card-group '>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/F0gCPw1/M6w83b-Fr-GPl9-XEB6u9-IZMwpe-XM8g1s-EM42dno-Rn-X-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Yamaha FZs V2</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 2days ago</small>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/wc10Mwg/do-F2-Sjuq-Wgs-Fr-POfihk-Pvy-C4-Pc0rtk-R6m-HFDDLz-P.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Suzuki Bandit 150</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 5 days ago</small>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/5BX0bxr/h0-BAHr-Z6-E0-F5-Vda-X3-Uxod-Zw-E1-Hzb7idk-MR7o-Kpqv-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">KTM RC 125 Indian ABS</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 1 days ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;