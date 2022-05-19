import React from 'react';
import './BlogSection.css'

const BlogSection = () => {
    return (

        <div className='my-4'>
            <h2>Our Recent Blogs</h2>

            <div className="card-group  container">

                <div className='card-group g-4'>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/F0gCPw1/M6w83b-Fr-GPl9-XEB6u9-IZMwpe-XM8g1s-EM42dno-Rn-X-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Yamaha FZs V2</h5>
                            <p className="card-text text-start">The Yamaha FZS FI v2 is slightly lighter than its previous version. Already the bike has become very popular in Bangladesh. Yamaha has been successful in their FZ series over the past few years. In the continuation of the FZ series new bike Yamaha FZS FI v2...</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 2days ago</small>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/wc10Mwg/do-F2-Sjuq-Wgs-Fr-POfihk-Pvy-C4-Pc0rtk-R6m-HFDDLz-P.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Suzuki Bandit 150</h5>
                            <p className="card-text text-start">The Suzuki Bandit is a series of standard motorcycles produced by Suzuki that began its journey in 1989. Bandit 150 is the youngest member in the series. However, the Bandit series mainly deals with standard motorcycles. In this case, the Bandit 150 looks ....factory.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 5 days ago</small>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <img src="https://i.ibb.co/5BX0bxr/h0-BAHr-Z6-E0-F5-Vda-X3-Uxod-Zw-E1-Hzb7idk-MR7o-Kpqv-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">KTM RC 125 Indian ABS</h5>
                            <p className="card-text text-start">KTM RC 125 is an introductory bike from RC series of Austrian bike manufacturer KTM. KTM is popular worldwide as a bike brand from a modern mature and trustworthy place. In the continuation of this series, some of the KTM bike models are also available in ....</p>
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