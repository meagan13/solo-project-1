// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { createSignup } from '../../store/oppSignup';

// //OppSignup component will render all signups by user
// function OppSignup() {
//     const dispatch = useDispatch();
//     const sessionUser = useSelector(state => state.session.user);
//     const history = useHistory();

//     const { id } = useParams();

//     const signups = useSelector(state => {
//         return state.signups
//     });

//     useEffect(() => {
//         dispatch(createSignup())
//     }, [dispatch])

//     let signup = signups[id];

//     const [oppId, setOppId] = useState(signup?.oppId);
//     const [userId, setUserId] = useState(signup?.userId);

//     const updateOppId = (e) => setOppId(e.target.value);
//     const updateUserId = (e) => setUserId(e.target.value);

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const payload = {
//             id,
//             oppId,
//             userId
//         };

//         let newSignup = await dispatch(createSignup(payload));

//         if(newSignup) {
//             history.push('/')
//         }
//     }

//     return (
//         <>
//             <div className="user-signups">
//                 <h2>Test Header</h2>
//                 <ul>
//                     { signups.map((signup, i) => {
//                         return <li key={i}>
//                             { signup.oppId }, { signup.userId }
//                         </li>
//                         })
//                     }
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default OppSignup;
