import React from 'react'
import './Button.css'

class FbPage extends React.Component{
    render(){
        return(
            <div>
                <div style={{float:'left',border:5,borderColor:'black',width:1350,height:80,backgroundColor:'#3b5998'}}>
                
                <h1 style={{float:'left',color:'white' ,marginLeft:180,fontFamily:'Helvetica',fontSize:40}}>facebook</h1>
                <div style={{width:450,height:80,backgroundColor:'#3b5998',marginLeft:750,}}>
                    <div style={{float:'left'}}>
                  <p style={{outline:'none',marginBottom:2,marginLeft:5,marginTop:13,color:'white'}}>Enter email</p>
                  <input style={{float:'left',marginLeft:5,height:15}}  type="email"  placeholder="Email"></input>
                </div>
                <div style={{float:'left',marginLeft:15}}>
                    <div style={{float:'left'}}>
                  <p style={{outline:'none',marginBottom:2,color:'white',marginTop:13}}>Enter Password</p>
                  <input style={{float:'right',marginRight:10,height:15}}  type="password"  placeholder="Password"  ></input>
                  </div>
                <input className="button" style={{float:'right',marginTop:35}} type="button" value="Log In"/>
                </div>
                <div >
                    <div style={{float:'left',marginTop:0}}><input type="checkbox"/>
                     <span style={{color:'white',fontSize:14}}>Remember me </span>
                     
                     </div>
                    <div style={{float:'left',marginLeft:82,color:'white',marginTop:0}}><span style={{color:'#9fa8cb',fontSize:14}}>Forgot Password ?</span></div>
                </div>
                </div>
                </div>
               

                <div>
                <div className="grad" style={{float:'left',width:664,height:510,backgroundColor:'#dfe3ee '}}>
                  <p style={{marginLeft:180,fontSize:20,fontWeight:'bold',color:'#2b3c63',fontFamily:'Arial',marginTop:40}}>Facebook helps you connect and share with the people in your life.</p>
                  <img style={{marginTop:18,outline:'none',display:'block',width:"490px" ,marginLeft:180}}src={process.env.PUBLIC_URL +"/facebookpage.png.png"}
                 alt="Mypic" />
                </div>
                

                <div  className="grad"style={{backgroundColor:'#dfe3ee',width:1350,height:612}}>
                        <div className="grad" style={{float:'right',paddingLeft:25,width:635,height:510,backgroundColor:'#dfe3ee',marginLeft:0}}>
                        <div style={{float:'left',width:620,height:50,}}>
                    <p style={{fontSize:35,color:'black',fontWeight:'bolder',fontFamily:'Tahoma',marginTop:20}}>Create an account</p></div>
                    <div style={{float:'left',width:620,height:30}}>
                    <p style={{color:'black',fontSize:15,marginTop:15,fontFamily:'Arial',marginLeft:10}}> It's free and always will be.</p></div>
                    
                    <input  style={{border:'1px solid #8b9dc3',float:'left',width:160,marginTop:20,borderRadius:5,outline:'none',height:35,paddingLeft:10}} type="text" placeholder="First Name"></input>
                    <input  style={{border:'1px solid #8b9dc3',marginRight:268,float:'right',width:160,marginTop:20,borderRadius:5,outline:'none',height:35,paddingLeft:10}} type="text" placeholder="Last Name"></input>
                    <input  style={{border:'1px solid #8b9dc3',marginRight:300,float:'left',width:360,marginTop:20,borderRadius:5,outline:'none',height:35,paddingLeft:10}} type="email "placeholder="Mobile number or email adress"></input>
                    <input  style={{border:'1px solid #8b9dc3',marginRight:300,float:'left',width:360,marginTop:20,borderRadius:5,outline:'none',height:35,paddingLeft:10,size:20}} type="password "placeholder="New password"></input>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default FbPage;