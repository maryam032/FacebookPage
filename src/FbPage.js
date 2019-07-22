import React from 'react'
import './Button.css'

class FbPage extends React.Component{
    render(){
        return(
            <div>
                <div style={{float:'left',border:5,borderColor:'black',width:1350,height:80,backgroundColor:'#3B5998'}}>
                
                <h1 style={{float:'left',color:'white' ,marginLeft:180,fontFamily:'Helvetica',fontSize:40,fontWeight:'bolder'}}>facebook</h1>
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
                    <div style={{float:'left',marginLeft:82,color:'white',marginTop:0}}><span style={{color:'#3B72C5',fontSize:14}}>Forgot Password ?</span></div>
                </div>
                </div>
                </div>
               

                <div>
                <div className="grad" style={{float:'left',width:664,height:510,backgroundColor:'#dfe3ee '}}>
                  <p style={{marginLeft:180,fontSize:20,fontWeight:'bold',color:'#0E385F',fontFamily:'Arial',marginTop:40}}>Facebook helps you connect and share with the people in your life.</p>
                  <img style={{marginTop:18,outline:'none',display:'block',width:"500px" ,marginLeft:180}}src={process.env.PUBLIC_URL +"/facebookpage.png.png"}
                 alt="Mypic" />
                </div>
                

                <div  className="grad"style={{backgroundColor:'#dfe3ee',width:1350,height:612}}>
                        <div className="grad" style={{float:'right',paddingLeft:50,width:635,height:510,backgroundColor:'#dfe3ee',marginLeft:0}}>
                        <div style={{float:'left',width:620,height:50,}}>
                    <p style={{fontSize:35,color:'#333333',fontWeight:'bolder',fontFamily:'Tahoma',marginTop:20}}>Create an account</p></div>
                    <div style={{float:'left',width:620,height:30}}>
                    <p style={{color:'#333333',fontSize:20,marginTop:25,fontFamily:'Arial',marginLeft:10}}> It's free and always will be.</p></div>
                    
                    <input  style={{border:'1px solid #BDC7D8',backgroundColor:'#FFFFFF',float:'left',width:165,marginTop:40,borderRadius:5,outline:'none',height:40,paddingLeft:10}} type="text" placeholder="First Name"></input>
                    <input  style={{border:'1px solid #BDC7D8',backgroundColor:'#FFFFFF',marginRight:268,float:'right',width:170,marginTop:40,borderRadius:5,outline:'none',height:40,paddingLeft:10,marginLeft:3}} type="text" placeholder="Surname"></input>
                    <input  style={{border:'1px solid #BDC7D8',backgroundColor:'#FFFFFF',marginRight:300,float:'left',width:360,marginTop:15,borderRadius:5,outline:'none',height:40,paddingLeft:10}} type="email "placeholder="Mobile number or email adress"></input>
                    <input  style={{border:'1px solid #BDC7D8',backgroundColor:'#FFFFFF',marginRight:300,float:'left',width:360,marginTop:15,borderRadius:5,outline:'none',height:40,paddingLeft:10,size:20}} type="password "placeholder="New password"></input>
                   <div style={{marginTop:300,height:20}}><span style={{fontWeight:'bolder',color:'#90949C'}}>Birthday</span></div> 
                    <div style={{height:40,marginTop:0}}>
                    <select style={{backgroundColor:'white',padding:5,marginTop:5}}>
                    <selectedOption/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    </select>
                    <select style={{backgroundColor:'white',padding:5}}>
                    <selectedOption/>
                        <option value="January">Jan</option>
                        <option value="Febuary">Feb</option>
                        <option value="March">Mar</option>
                        <option value="April">Apr</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">Jul</option>
                        <option value="August">Aug</option>
                        <option value="September">Sep</option>
                        <option value="October">Oct</option>
                        <option value="November">Nov</option>
                        <option value="December">Dec</option>
                    </select>
                    <select style={{backgroundColor:'white',padding:5}} >
                    <selectedOption/>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                    </select>
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
        )
    }
}
export default FbPage;