import React, { useState} from 'react';
import  { useNavigate} from  'react-router-dom';

const SignupPage = ({ language }) => {  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const labels = {
        
        English: {
            title: "Sign Up",
            fullName: "Full Name:", 
            username: "Username:",
            email: "Email:",
            password: "Password:",
            submit: "Sign Up",
            login: "Login",
        },
    
        Kiswahili: {
            title: "Jisajili:",
            fullName: "Jina Kamili:",
            username: "Jina la Mtumiaji:",
            email: "Barua Pepe:", 
            password: "Neno Siri:",
            submit: "Jisajili",
            login: "Kuingia",
        },
    };
    const currentLabels = labels[language];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value }));
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert(
            `$(language === "English" ? "Thank you for signing up!" : "Asante kwa kujisajili!")`
        );
    }; const handleLogin = () => { navigate("/login");}
    return (
        <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "grey", width: "600px"}}>
            <h1>{currentLabels.title}</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div style={inputGroupStyle}>
                    <label>{currentLabels.fullName}</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(handleInputChange)}
                      required
                      style={inputStyle}
                    />

                </div>
                <div style={inputGroupStyle}>
                    <label>{currentLabels.username}</label>
                    <input
                       type="text"
                       name="username"
                       value={formData.username}
                       onChange={handleInputChange}
                       required
                       style={inputStyle}
                       />

                </div>
                <div style={inputGroupStyle}>
                    <label>{currentLabels.email}</label>
                    <input
                       type="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       required
                       style={inputStyle}
                       />
                       
                </div>
                <div style={inputGroupStyle}>
                    <label>{currentLabels.password}</label>
                    <input
                       type="password"
                       name="password"
                       value={formData.password}
                       onChange={handleInputChange}
                       required
                       style={inputStyle}
                       />
                       
                </div>
                <button type="submit" style={buttonStyle}>
                    {currentLabels.submit}
                </button>
                <button type="login" style={buttonStyle}  onClick={ () => handleLogin('Login') }>
                    You have account??{currentLabels.login}
                </button>
            </form>
        </div>
    );
};

const inputGroupStyle = { 
    marginBottom: "20px",
    textAlign: "left",
    color: "black",
    
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    fontSize: "16px",
    borderRadius: "10px",
};

const buttonStyle ={ 
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "10px",
    color: "blue",
};

export default SignupPage;