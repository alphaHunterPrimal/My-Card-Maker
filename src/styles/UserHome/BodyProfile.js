import styled from 'styled-components';

const BodyProfile = styled.div`
width: 100vw;
height: 80vh;
margin: 10vh 0 0 0;
display: flex;
justify-content: center;
position: relative;

.profileMain{
    padding: 2vh 0 0 0;
    border: 2px solid black;
    background-color: red;
    width: 50%;
    height: 78vh;
    display: flex;
    .changeProfile{
        width: 100%;
        height: 10%;
        
        .space-around{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-around;
            p{
                font-size: 1.5vw;
            }
            
        }
        .flex-name{
            display: flex;
            width: 100%;
            height: 70%;
            align-items: center;
            justify-content: space-around;
                input{
                width: 29vw;


            }
            button{
                width: 12%;
                height: 100%;
                cursor: pointer;
            }
        }
        .changeOldPassword, .changeNewPassword{
            width: 100%;
            height: 100%;
            display: flex;
            
            align-items: center;
            
            div{
            width: 74%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            
                input{
                width: 200%;
                margin: 0 0 2vh 0;
            }
                .eyeLooking{
                cursor: pointer;
                width: 10%;
                height: 2.8vw;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                margin: 0 0 2vh 0;
                img{
                    width: 95%;
                    height: 80%;
                }
            }

            }
            button{
                width: 12%;
                height: 2.8vw;
                cursor: pointer;
                border: 0;
                margin: 0 0 2vh 4vw;
            }
        }
    }
}
`;

export default BodyProfile