import React,{useState} from 'react'
import {Helmet} from 'react-helmet'

import SimpleReactValidator from 'simple-react-validator';
import Wraper from './Wraper';
// class checkOut extends Component {

//     constructor (props) {
//         super (props)

//         this.state = {
//             payment:'stripe',
//             first_name:'',
//             last_name:'',
//             phone:'',
//             email:'',
//             country:'',
//             address:'',
//             city:'',
//             state:'',
//             pincode:'',
//             create_account: ''
//         }
//         this.validator = new SimpleReactValidator();
//     }

//     setStateFromInput = (event) => {
//         var obj = {};
//         obj[event.target.name] = event.target.value;
//         this.setState(obj);

//       }

//       setStateFromCheckbox = (event) => {
//           var obj = {};
//           obj[event.target.name] = event.target.checked;
//           this.setState(obj);

//           if(!this.validator.fieldValid(event.target.name))
//           {
//               this.validator.showMessages();
//           }
//         }
// }

export default function Checkout() {
    const initialState = Object.freeze({
        first_name:'',
        last_name:'',
        phone:'',
        email:'',
        country:'',
        address:'',
        city:'',
        state:'',
        pincode:'',
        create_account: ''
      })
    const [Form, setForm] = useState(initialState);
    const validator = new SimpleReactValidator()
    const Change = (e) =>{
        setForm({
          ...Form,
          [e.target.name] : e.target.value.trim(),
        })
      }
    const Submit =(e) =>{
        console.log('ddd',e);
        // if(!validator.fieldValid(e.target.name)){
        //     validator.showMessages()
        // }
        
    }
    console.log(Form)
    const StripeClick = () => {

        if (validator.allValid()) {
            alert('You submitted the form and stuff!');
        } else {
          validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
    }
    return (
        <div>

        {/*SEO Support*/}
        <Helmet>
            <title>MultiKart | CheckOut Page</title>
            <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
        </Helmet>
        {/*SEO Support End */}

        <Wraper  title={'Checkout'}/>

        <section className="section-b-space">
            <div className="container padding-cls">
                <div className="checkout-page">
                    <div className="checkout-form">
                        <form>
                            <div className="checkout row">
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="checkout-title">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row check-out">
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">First Name</div>
                                            <input type="text" name="first_name" value={Form.first_name} onChange={Change} />
                                            {validator.message('first_name', Form.first_name, 'required|alpha')}
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name</div>
                                            <input type="text" name="last_name" value={Form.last_name} onChange={Change} />
                                            {validator.message('last_name', Form.last_name, 'required|alpha')}
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Phone</div>
                                            <input type="text" name="phone"  value={Form.phone} onChange={Change} />
                                            {validator.message('phone', Form.phone, 'required|phone')}
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Email Address</div>
                                            <input type="text" name="email" value={Form.email} onChange={Change} />
                                            {validator.message('email', Form.email, 'required|email')}
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country</div>
                                            <select name="country" value={Form.country} onChange={Change}>
                                                <option>India</option>
                                                <option>South Africa</option>
                                                <option>United State</option>
                                                <option>Australia</option>
                                            </select>
                                            {validator.message('country', Form.country, 'required')}
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Address</div>
                                            <input type="text" name="address" value={Form.address} onChange={Change} placeholder="Street address" />
                                            {validator.message('address', Form.address, 'required|min:20|max:120')}
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Town/City</div>
                                            <input type="text" name="city" value={Form.city} onChange={Change} />
                                            {validator.message('city', Form.city, 'required|alpha')}
                                        </div>
                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                            <div className="field-label">State / County</div>
                                            <input type="text" name="state" value={Form.state} onChange={Change} />
                                            {validator.message('state', Form.state, 'required|alpha')}
                                        </div>
                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                            <div className="field-label">Postal Code</div>
                                            <input type="text" name="pincode" value={Form.spincode} onChange={Change} />
                                            {validator.message('pincode', Form.pincode, 'required|integer')}
                                        </div>
                                        {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="checkbox" name="create_account" id="account-option"  checked={Form.create_account} onChange={this.setStateFromCheckbox}/>
                                            &ensp; <label htmlFor="account-option">Create An Account?</label>
                                            {validator.message('checkbox', Form.create_account, 'create_account')}
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="checkout-details">
                                        <div className="order-box">
                                            <div className="title-box">
                                                <div>Product <span> Total</span></div>
                                            </div>
                                            <ul className="qty">
                                                {/* {cartItems.map((item, index) => { */}
                                                   <li key={'index'}>{'item.name'} × {'item.qty'} <span>{'symbol'} {'item.sum'}</span></li> })
                                                {/* } */}
                                            </ul>
                                            <ul className="sub-total">
                                                <li>Subtotal <span className="count">{'symbol'}{'total'}</span></li>
                                                <li>Shipping <div className="shipping">
                                                    <div className="shopping-option">
                                                        <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                            <label htmlFor="free-shipping">Free Shipping</label>
                                                    </div>
                                                    <div className="shopping-option">
                                                        <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                            <label htmlFor="local-pickup">Local Pickup</label>
                                                    </div>
                                                </div>
                                                </li>
                                            </ul>

                                            <ul className="total">
                                                <li>Total <span className="count">{'symbol'}{'total'}</span></li>
                                            </ul>
                                        </div>

                                        <div className="payment-box">
                                            {/* <div className="upper-box">
                                                <div className="payment-options">
                                                    <ul>
                                                        <li>
                                                            <div className="radio-option stripe">
                                                                <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                <label htmlFor="payment-2">Stripe</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="radio-option paypal">
                                                                <input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('paypal')} />
                                                                    <label htmlFor="payment-1">PayPal<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                   
                                            <div className="text-right">
                                                <button type="button" className="btn-solid btn" onClick={Submit} >Place Order</button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row section-t-space">
                                <div className="col-lg-6">
                                    <div className="stripe-section">
                                        <h5>stripe js example</h5>
                                        <div>
                                            <h5 className="checkout_class">dummy test</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4242424242424242</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>2/2020</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>2222</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-sm-t-2">
                                    <div className="stripe-section">
                                        <h5>paypal example</h5>
                                        <div>
                                            <h5 className="checkout_class">dummy test</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4152521541244</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>11/18</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>521</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

