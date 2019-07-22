import React from 'react'
import './Button.css'

class FbPage extends React.Component{
    render(){
        return(
            <div>
                <div style={{border:5,borderColor:'black',width:1360,height:100,backgroundColor:'#3b5998'}}>
                
                <h1 style={{float:'left',color:'white' ,marginLeft:160}}>facebook</h1>
                <div style={{width:450,height:100,backgroundColor:'#3b5998',marginLeft:750,}}>
                    <div style={{float:'left'}}>
                  <p style={{outline:'none',marginBottom:2,marginLeft:5,marginTop:15,color:'white'}}>Enter email</p>
                  <input style={{float:'left',marginLeft:5,}}  type="email"  placeholder="Email"></input>
                </div>
                <div style={{float:'left',marginLeft:15}}>
                    <div style={{float:'left'}}>
                  <p style={{outline:'none',marginBottom:2,color:'white'}}>Enter Password</p>
                  <input style={{float:'right',marginRight:10}}  type="password"  placeholder="Password"  ></input>
                  </div>
                <input style={{float:'right',marginTop:40}} type="button" value="Login"/>
                </div>
                <div>
                    <div style={{float:'left'}}><input type="checkbox"/>
                     <span style={{color:'white'}}>Remember me </span>
                     
                     </div>
                    <div style={{float:'left',marginLeft:68,color:'white'}}><a href="">Forgot Password ?</a></div>
                </div>
                </div>
                </div>
               


                <div className="grad" style={{float:'left',border:'2px solid black',width:664,height:450,backgroundColor:'#dfe3ee '}}>
                  <p style={{marginLeft:70,fontSize:30,fontWeight:'bold',color:'#44799B  '}}>Facebook helps you connect and share with the people in your life.</p>
                </div>
                


                <div className="grad" style={{float:'right',border:'2px solid black',paddingLeft:25,width:669,height:450,backgroundColor:'#dfe3ee'}}>
                    <div style={{float:'left',width:694,height:50,}}>
                   <p style={{fontSize:30,color:'black',fontWeight:'bolder',fontFamily:'serif',marginTop:20}}>Create an account</p></div>
                   <div style={{float:'left',width:694,height:30}}>
                   <p style={{color:'black',fontSize:15,marginTop:8,fontFamily:'serif'}}> It's free and always will be.</p></div>
                   
                   <input  style={{float:'left',width:160,marginTop:20,borderRadius:5,border:'none',outline:'none',height:35,paddingLeft:10}} type="text" placeholder="First Name"></input>
                   <input  style={{marginRight:300,float:'right',width:150,marginTop:20,borderRadius:5,border:'none',outline:'none',height:35,paddingLeft:10}} type="text" placeholder="Last Name"></input>
                   <input  style={{marginRight:300,float:'left',width:360,marginTop:20,borderRadius:5,border:'none',outline:'none',height:35,paddingLeft:10}} type="email "placeholder="Mobile number or email adress"></input>
                   <input  style={{marginRight:300,float:'left',width:360,marginTop:20,borderRadius:5,border:'none',outline:'none',height:35,paddingLeft:10,size:20}} type="password "placeholder="New password"></input>
                </div>
            </div>
        )
    }
}
export default FbPage;