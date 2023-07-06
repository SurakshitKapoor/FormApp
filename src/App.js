import "./App.css";
import {useState} from 'react';

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddr:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false, pushNotifications:""})

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked : value}));

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing form data:");
    console.log(formData);

  }
  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col items-center mt-4">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="Surakshit"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="Kapoor"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="surakshit@abc.com"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="country">Country</label>
        <select id="country" name="country" onChange={changeHandler}>
          <option>India</option>
          <option>USA</option>
          <option>Australia</option>
          <option>Canada</option>
          <option>UK</option>
        </select>

        <label htmlFor="streetAddr">Street Address</label>
        <input
          type="text"
          name="streetAddr"
          id="streetAddre"
          value={formData.streetAddr}
          placeholder="Street No. - 5"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          placeholder="Mumbai"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="Maharashtra"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          placeholder="444992"
          onChange={changeHandler}
          className="border-4"
        />
        <br />
        <fieldset>
          <legend>Views</legend>
          <input
            type="checkbox"
            name="comments"
            id="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label>Comments</label>
            <p>Enter valuable comments</p>
          </div>
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label>candidates</label>
            <p>Enter valuable candidates</p>
          </div>
          <input
            type="checkbox"
            name="offers"
            id="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label>offers</label>
            <p>Enter valuable offers</p>
          </div>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <input
          type="radio"
          name="pushNotifications"
          id="pushEverything"
          value="Everything"
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="pushEverything">Everything</label>
            <p>Get notified everything</p>
          </div>
          <input
          type="radio"
          name="pushNotifications"
          id="pushEmail"
          value="Everything"
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="pushEmail">Same as Email</label>
            <p>Get notified Email</p>
          </div>
          <input
          type="radio"
          name="pushNotifications"
          id="pushNothing"
          value="Nothing"
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="pushNothing">Nothing</label>
            <p>Get notified Nothing</p>
          </div>
        </fieldset>

        <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
