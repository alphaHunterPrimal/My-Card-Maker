import styled from 'styled-components';

const BodyProfile = styled.div`
width: 100vw;
height: 38.5em;//80%;//
margin: 7.218em 0 0 0; //15vh
display: flex;
justify-content: center;
position: relative;
overflow: auto;

.profileMain{
    padding: 0.9em 0 0 0; //2vh
    border: 2px solid black;
   
    width: 50%;
    height: 37em;//78vh;//
    //display: flex;
    //flex-direction: column;
    .changeProfile{
        width: 100%;
        height: fit-content;
        
        
        .space-center{
            
            display: flex;
            width: 100%;
            height: 4.8em;//10vh;//
            justify-content: center;
            align-items: center;
            overflow: hidden;
            p{
                font-size: 1.35em;//1.5vw;// 
                margin: 0 4px 0 0;
                text-decoration: underline;
            }
            button{
                width: 2.3em;//4%;//
                height: 1.7em;//30%;//
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
            height: 4.75em;//10vh;//
            align-items: center;
            justify-content: space-evenly;
                input{
                width: 29vw;//20.9em;// 


            }
            button{
                display: flex;
                justify-content:center ;
                align-items: center;
                font-size: 83%;
                width: 12%;//6.5em;//
                height: 3.15em;//55%;//
                cursor: pointer;
            }
        }
        .changeOldPassword, .changeNewPassword{
            
            width: 100%;
            height: 4.8em;
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
                margin: 0 0 0.8em 0;
            }
                .eyeLooking{
                cursor: pointer;
                width: 4em;//10%;
                height: 3em;//55%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid black;
                margin: 0 0 1.2em 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

            }
            button{
                width: 6.7em;//12%;
                height: 55%;
                cursor: pointer;
                border: 0;
                margin: 0 0 0.8em 4em;
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
            height: 4.8em;//10vh;
            justify-content: center;
            align-items: center;
            p{
                font-size: 1.35em;//1.5vw;// 
                margin: 0 4px 0 0;
                text-decoration: underline;
            }
            button{
                width: 2.3em;//4%;//
                height: 1.7em;//30%;//
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
        height: 6em;//9.5em;//20vh;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            width: 13.5em;//15vw;
            height: 1em;//5vh;
            display: flex;
        align-items: center;
        margin: 0 1.5em 0 0;
            input{
            width: 100%;
            height: 0.3em;

        }
        }

        select{
            width: 5.5em;//6vw;//
            height: 2.2em;//5vh;

            margin: 0 1vw 0 0;
            font-size: 1.1em;
            cursor: pointer;
        } 
        button{
            width: 5em;//5vw;
            height: 2.3em;//5vh;
            margin: 0 1em 0 0;
            font-size: 1em;
            cursor: pointer;
        }
    }
    .divCartas{
        
        width: 100%;
        height: 11.8em;//20vh;
        display: flex;
        flex-direction: column;
        //overflow: auto;
        align-items: center;
        justify-content: center;
        .repetirCartas{
            width: 80%;
            height: 100%;//15vh;
            display: flex;
            //align-items: center;
            overflow: auto;
            flex-direction: column;

            //justify-content: center;
            //border: 1px solid;
            div{
                
                width: 100%;
                height: 4em;//8vh;
                border: 1px  0px solid;
                display: flex;
                align-items: center;
                

                span{
                    display: flex;
                align-items: center;
                width: 10em;
                height: 3.85em;//8vh;//
                overflow: hidden;
                margin: 0 9em 0 0;
            }
            button{
                
                width: 3.1em;//8%;
                height: 2.9em;//50%;
                font-size: 0.8em;//1vw;
                margin: 0 1.2em 0 0;
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