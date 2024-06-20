// import { useState } from "react"
// const LoginHooks = () => {
//     const [password, setPassword] = useState("Password")
//     const TogglePassword = () => {
//         if (password === "text") {
//             setPassword("password")
//         }
//         else {
//             setPassword("text")
//         }
//     }
//     return [password, TogglePassword]
// }

// export default LoginHooks


// // import React, { useState } from 'react';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginStatus, setLoginStatus] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://api.example.com/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (response.ok) {
//                 setLoginStatus('تم تسجيل الدخول بنجاح');
//             } else {
//                 setLoginStatus('فشل تسجيل الدخول');
//             }
//         } catch (error) {
//             console.error(error);
//             setLoginStatus('حدث خطأ في الاتصال');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" value={email} onChange={handleEmailChange} placeholder="البريد الإلكتروني" />
//                 <input type="password" value={password} onChange={handlePasswordChange} placeholder="كلمة المرور" />
//                 <button type="submit">تسجيل الدخول</button>
//             </form>
//             {loginStatus && <p>{loginStatus}</p>}
//         </div>
//     );
// };

// export default LoginForm;




// {/* {posts.map((item) => (
//                 <div style={{ width: "20%", border: "2px solid red" }}>
//                     <h6>id: {item.id}</h6>
//                     <p>title:{item.title}</p>
//                 </div>
//             ))} */}

// {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
//             <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" />
//             <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="use id" />
//             <button type="submit" onClick={(e) => handleSubmit()}>تسجيل الدخول</button> */}


// {/* <h1>{data.title}</h1> */ }

