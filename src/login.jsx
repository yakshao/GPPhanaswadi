import { useState } from 'react'
import './Login.css'


export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    function handleSubmit(e){
        
    }
    return (
        <>
            <form>
                <div className="login">

               <div>
                        <div className='inputField'>
                            <div className='margin10'>
                                <p>
                                    Username:
                                </p>
    
    
                            </div>
                            <div >
    
                                <input
                                onChange={(e)=>{
                                    setUsername(e.target.value)
                                    
                                }}
                                    name='username'
                                    type="text"
                                    placeholder="Username"
    
                                />
                            </div>
    
                        </div>
    
                        <div className='inputField'>
    
                            <div className='margin10'>  <p>Password:</p></div>
                            <div>
                                <input
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                            
                                />
                            </div>
    
    
                        </div>
    
                        <div className='formButton margin10'>
                            <button
                                type='submit'
                                name='Submit'
                                title='Submit' 
                                style={{
                                    background: 'lightblue',    
                                    borderRadius: '50px',
                                    boxShadow: '10',
                                    border: 'none',
                                    padding: '5px 15px',

                                }}  
                                onClick={(e)=>{
                                    e.preventDefault();
                                    handleSubmit(e)}}
                            >
                                Submit
                                </button>
                        </div>
               </div>


                </div>


            </form>
        </>

    )
}