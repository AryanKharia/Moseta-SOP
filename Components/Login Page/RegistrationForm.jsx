import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import './registrationForm.css';
import { register, sendOtp } from '../../redux/slices/userAuth';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { isAuth, loading } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    privacyPolicyAccepted: false,
    marketingMessagesAccepted: false,
    otpValue: '', // Adding otpValue to formData
  });

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isStrongPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true); // Form submitted

    if (!isStrongPassword(formData.password)) {
      toast.error(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      toast.error('Mobile number must be exactly 10 digits.');
      return;
    }

    // Dispatch action to request OTP
    // dispatch(sendOtp(formData.email, setShowOtpPopup));
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Additional validation can be added if needed for OTP
    if (!formData.otpValue || formData.otpValue.length !== 4) {
      toast.error('Please enter a valid OTP.');
      return;
    }

    // Handle OTP submission logic, e.g., dispatch action to verify OTP
    dispatch(register(formData, navigate));
  };

  // Redirect if already logged in
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <>
      <Helmet>
        <title>Register - Moseta</title>
        <meta name="description" content="Register to become a member and enjoy exclusive benefits with Moseta." />
      </Helmet>
      <form className="registrationFormBody" onSubmit={handleSubmit}>
        <Toaster />
        <h1 className="registrationFormHeading">Registration Form</h1>
        <div className="registrationFormContainer">
          <div className="registrationFormRow">
            <label>
              <h1>Email <span className="required">*</span></h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Your Email"
                required
              />
            </label>
            <p className="infoText">Your email address is the account identifier and cannot be changed once registered.</p>
            <p className="infoText">Please note it is case sensitive.</p>
          </div>
          <div className="registrationFormRow">
            <label>
              <h1>First Name <span className="required">*</span></h1>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="First Name"
                required
              />
            </label>
          </div>
          <div className="registrationFormRow">
            <label>
              <h1>Last Name <span className="required">*</span></h1>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Last Name"
                required
              />
            </label>
          </div>
          <div className="registrationFormRow">
            <label>
              <h1>Mobile Number <span className="required">*</span></h1>
              <input
                type="text"
                inputMode="numeric"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Replace non-numeric characters
                  handleChange('mobileNumber', value);
                }}
                placeholder="Mobile Number"
                minLength={10}
                maxLength={10}
                required
              />
              {submitted && formData.mobileNumber.length !== 10 && (
                <p className="errorText">Please enter a 10 digit mobile number.</p>
              )}
            </label>
          </div>
          <div className="registrationFormRow">
            <label>
              <h1>Password <span className="required">*</span></h1>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Your Password"
                required
              />
            </label>
          </div>
          <div className="registrationFormRow">
            <label>
              <h1>Confirm Password <span className="required">*</span></h1>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </label>
          </div>
          <div className="registrationFormCheckboxes">
            <div className="registrationFormCheckbox">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleChange(e.target.name, e.target.checked)}
                  required
                />
                <p>I agree with the <a href="#">Terms</a> of Use.</p>
              </label>
            </div>
            <div className="registrationFormCheckbox">
              <label>
                <input
                  type="checkbox"
                  name="privacyPolicyAccepted"
                  checked={formData.privacyPolicyAccepted}
                  onChange={(e) => handleChange(e.target.name, e.target.checked)}
                  required
                />
                <p>I have read and understood the Privacy Policy and Cookie Policy.</p>
              </label>
            </div>
            <div className="registrationFormCheckbox">
              <label>
                <input
                  type="checkbox"
                  name="marketingMessagesAccepted"
                  checked={formData.marketingMessagesAccepted}
                  onChange={(e) => handleChange(e.target.name, e.target.checked)}
                />
                <p>Receipt of marketing messages (optional)</p>
              </label>
            </div>
          </div>
          <p className="registrationFormConsentText">
            I consent to being contacted by LGE and its affiliates about latest news and special offers by email, SMS,
            push notification, phone call, social media sites and/or other form of electronic messages. I can change my
            mind at any time by following the instructions given in each communication channel including but not limited
            to email and in accordance with the LGE
          </p>
        </div>
        <div className="registrationFormSubmitBtn">
          <button type="submit">Submit</button>
          {loading && <Loader />}
        </div>
      </form>

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="otpPopup">
          <form onSubmit={handleOtpSubmit}>
            <h2>Enter OTP</h2>
            <input
              type="text"
              name="otpValue"
              value={formData.otpValue}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Enter OTP"
              maxLength={4}
              required
            />
            <br />
            <button type="submit">Verify OTP</button>
            {loading && <Loader />}
          </form>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
