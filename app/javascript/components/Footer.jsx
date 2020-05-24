import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    padding: 40px 40px 40px 40px;
    background-color: #8aadbd;
`;
const ColName = styled.h3`
    color: #bfdce3;
`;
const ColDiv = styled.div`
    color: #e9f1f5;
`;
const ColOne = styled.div`
    margin-right: 25px;
`;
const ColThree = styled.div`
    margin-left: 20px;
`;

const Footer = () => {
    return (
        <div>
            <footer>
                <FooterStyle>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-5" >
                            <ColOne>
                            <ColName>About us</ColName>
                            <ColDiv>
                            <p>We are parents as well and we are looking for the best for our children. We've collected here only the camps we find interesting.</p>
                            <p>@ KidsCamps Inc.</p>
                            </ColDiv>
                            </ColOne>
                        </div>
                        <div className="col-md-4">
                            <ColName>Contact</ColName>
                            <ColDiv>
                            <p>Sydney, Australia</p>
                            <p>e-mail: kidscamps@mail.com</p>
                            </ColDiv>
                        </div>
                        <div className="col-md-3">
                            <ColThree>
                            <ColName>Links</ColName>
                            <ColDiv>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            </ColDiv>
                            </ColThree>
                        </div>
                    </div>
                </div>
                </FooterStyle>
            </footer>
        </div>
    )
}

export default Footer;