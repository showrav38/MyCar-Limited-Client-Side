import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const { registerWithEmailandPass, auth, saveUser, setError, setUser, setLoading } = useAuth();

    // taking location for redirecting 
    const location = useLocation();
    const redirect_url = location.state?.from || '/register';
    const history = useHistory();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegister = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long!')
            return;
        }


        registerWithEmailandPass(name, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setError('');
                setComment('Registation Done');
                const newUser = { email, displayName: name };
                // setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {   //72-2 module er 10 mins e detail ase (firebase e log in logout hole auth sate auto update hoi but register korr time e update na korle state update hoi nah , tai auth state update korar jnnw firebase update profile kora hoise jate page reload na diyei kaj hoi)
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push(redirect_url);//after succcessfu registration it will go on home page
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }





    return (
        <div className="login-form">
            <div>
                <h2 className="my-5">Register Here</h2>

                <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
                    <div className="form-group row mt-5">
                        <label htmlFor="staicName" className="col-sm-2 col-form-label text-start">Name</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="staicName" placeholder="Enter Name" required />
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
                        <div className="col-sm-10 mb-5">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="m-3 fw-bold">
                        {comment}
                    </div>
                    <input className="btn btn-dark" type="submit" value="Register" />
                </form>
                <div>
                    <p className="fs-4">Already have an account ?</p>
                    <p className="mb-5 fs-5"><Link to="/login">Login</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Register;







// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const { registerWithEmailandPass, error, setError, setUser, user, setUserName } = useAuth();

//     // taking location for redirecting 
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/register';
//     const history = useHistory();

//     const handleNameChange = e => {
//         setName(e.target.value);
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleRegister = e => {
//         e.preventDefault();
//         console.log(email, password);
//         if (password.length < 6) {
//             setError('Password must be at least 6 characters long!')
//             return;
//         }


//         registerWithEmailandPass(name, email, password)
//             .then((userCredential) => {
//                 setUser(userCredential.user);
//                 setError('');
//                 setUserName(name);
//                 history.push(redirect_url);

//             })
//             .catch((error) => {
//                 setError(error.message);

//             });
//     }




//     return (
//         <div className="login-form">
//             <div>
//                 <h2 className="my-5">Register Here</h2>

//                 <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
//                     <div className="form-group row mt-5">
//                         <label htmlFor="staicName" className="col-sm-2 col-form-label text-start">Name</label>
//                         <div className="col-sm-10 mb-4">
//                             <input onBlur={handleNameChange} type="text" className="form-control" id="staicName" placeholder="Enter Name" required />
//                         </div>
//                     </div>
//                     <div className="form-group row ">
//                         <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
//                         <div className="col-sm-10 mb-4">
//                             <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
//                         </div>
//                     </div>

//                     <div className="form-group row">
//                         <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
//                         <div className="col-sm-10 mb-5">
//                             <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
//                         </div>
//                     </div>

//                     <input className="btn btn-dark" type="submit" value="Register" />
//                 </form>
//                 <div>
//                     <p className="fs-4">Already have an account ?</p>
//                     <p className="mb-5 fs-5"><Link to="/login">Login</Link></p>
//                 </div>
//             </div >
//         </div >
//     );
// };

// export default Register;