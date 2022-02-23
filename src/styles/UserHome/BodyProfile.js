import styled from 'styled-components';

const BodyProfile = styled.div`
width: 100vw;
height: 80%;
margin: 15vh 0 0 0;
display: flex;
justify-content: center;
position: relative;
overflow: auto;

.profileMain{
    padding: 2vh 0 0 0;
    border: 2px solid black;
    background-color: red;
    width: 50%;
    height: 78vh;
    //display: flex;
    //flex-direction: column;
    .changeProfile{
        width: 100%;
        height: fit-content;
        
        
        .space-center{
            display: flex;
            width: 100%;
            height: 10vh;
            justify-content: center;
            align-items: center;
            p{
                font-size: 1.5vw;
                margin: 0 4px 0 0;
                text-decoration: underline;
            }
            button{
                width: 4%;
                height: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                img{
                    width: 100%;
                height: 100%;  
                }
            }
            
        }
        .flex-name{
            display: flex;
            width: 100%;
            height: 10vh;
            align-items: center;
            justify-content: space-around;
                input{
                width: 29vw;


            }
            button{
                width: 12%;
                height: 55%;
                cursor: pointer;
            }
        }
        .changeOldPassword, .changeNewPassword{
            width: 100%;
            height: 10vh;
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
                height: 55%;
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
                height: 55%;
                cursor: pointer;
                border: 0;
                margin: 0 0 2vh 4vw;
            }
        }
    }

.changeCards{
    width: 100%;
    height: fit-content;
    //overflow: auto;
    
    .centralize{
        display: flex;
            width: 100%;
            height: 10vh;
            justify-content: center;
            align-items: center;
            p{
                font-size: 1.5vw;
                margin: 0 4px 0 0;
                text-decoration: underline;
            }
            button{
                width: 4%;
                height: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                img{
                    width: 100%;
                height: 100%;  
                }
            }
    }
    .divProcuraCartas{
        width: 100%;
        height: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            width: 15vw;
            height: 5vh;
            display: flex;
        align-items: center;
        margin: 0 2vw 0 0;
            input{
            width: 100%;
            height: 1vh;

        }
        }

        select{
            width: 6vw;
            height: 5vh;
            margin: 0 1vw 0 0;
            font-size: 1.1vw;
            cursor: pointer;
        } 
        button{
            width: 5vw;
            height: 5vh;
            margin: 0 1vw 0 0;
            font-size: 1vw;
            cursor: pointer;
        }
    }
    .divCartas{
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;
        //overflow: auto;
        align-items: center;
        justify-content: center;
        .repetirCartas{
            width: 80%;
            height: 15vh;
            display: flex;
            //align-items: center;
            overflow: auto;
            flex-direction: column;

            //justify-content: center;
            //border: 1px solid;
            div{
                width: 100%;
                height: 8vh;
                border: 1px  0px solid;
                display: flex;
                

                span{
                    width: 10vw;
                height: 8vh;
                overflow: hidden;
                margin: 0 10vw 0 0;
            }
            button{
                width: 8%;
                height: 50%;
                font-size: 1vw;
                margin: 0 1vw 0 0;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                width: 100%;
                height: 100%;

                }
            }
            }


        }

    }
    

}

}
`;

export default BodyProfile