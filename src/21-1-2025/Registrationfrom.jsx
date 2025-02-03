import React, { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        email: "",
        matches: "",
        password: "",
        confirmPassword: "",
        country: ""
    });
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.matches || isNaN(formData.matches)) newErrors.matches = "Matches must be a number";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        if (!formData.country) newErrors.country = "Country is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmittedData([...submittedData, formData]);
            setFormData({
                name: "",
                gender: "",
                email: "",
                matches: "",
                password: "",
                confirmPassword: "",
                country: ""
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Cricketer Name" />
                {errors.name && <p>{errors.name}</p>}
                
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                    </label>
                    {errors.gender && <p>{errors.gender}</p>}
                </div>

                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                {errors.email && <p>{errors.email}</p>}

                <input type="text" name="matches" value={formData.matches} onChange={handleChange} placeholder="Matches" />
                {errors.matches && <p>{errors.matches}</p>}

                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                {errors.password && <p>{errors.password}</p>}

                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                </select>
                {errors.country && <p>{errors.country}</p>}

                <button type="submit">Save</button>
            </form>

            {submittedData.length > 0 && (
                <table border="4">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Matches</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.email}</td>
                                <td>{data.matches}</td>
                                <td>{data.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default RegistrationForm;
