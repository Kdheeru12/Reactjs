import React,{useState} from 'react'
import Wraper from '../components/Wraper'
import { useForm } from 'react-hook-form';
import LayoutTwo from '../covers/Layout1';


export default function Signup() {
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
        } else {
            errors.showMessages();
        }
    };                                                                                                                                                                                                                                                                                                                                                          

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj)
        console.log(obj);

    }
    return (
        <LayoutTwo>
        <div>
        <Wraper title={'create account'}/>
        
        
        {/*Regsiter section*/}
        <section className="register-page section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>create account</h3>
                        <div className="theme-card">
                            <form className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">First Name</label>
                                        <input type="text" className="form-control" id="fname"
                                               placeholder="First Name" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="review">Last Name</label>
                                        <input type="password" className="form-control" id="lname"
                                               placeholder="Last Name" required="" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <input type="text" className="form-control" id="email"
                                               placeholder="Email" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="review">Password</label>
                                        <input type="password" className="form-control" id="review"
                                               placeholder="Enter your password" required="" />
                                    </div>
                                    <a href="#" className="btn btn-solid">create Account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    </LayoutTwo>
    )
}
