import React, {useState} from 'react';


const LoginPage = ({ language }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",

    });

    const labels = {
        English: {
            title: "Login",
            username: "Username",
            password: "Password",submit: "Login",
        },

        Kiswahili: {
            title: "Kuingia:",
            username: "Jina la Mtumiaji:",
            password: "Neno Siri:", submit: "Ingia",
        },
    };
    const currentLabels = labels[language];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));

    };
    const handleSubmit = (e) => {
        e.prevDefault();
        console.log("Form Data Submitted:", formData);
        alert(
            `$(language === "English" ? "Thank you login in!" : "Asante kwa kuingia tena!")`
        );
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "grey", width: "600px"}}>
            <h1>{currentLabels.title}</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
               
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

export default LoginPage;