// import axios from "axios";
// import { signUp } from "../urls/index";

// export const fetchSignUp = (e) => {
//   axios
//     .post(
//       signUp,
//       {
//         user: {
//           email: email,
//           password: password,
//           password_confirmation: passwordConfirmation,
//         },
//       },
//       { withCredentials: true }
//     )
//     .then((response) => {
//       if (response.data.status === "created") {
//         props.handleSuccessfulAuthentication(response.data);
//       }
//     })
//     .catch((error) => {
//       console.log("registration error", error);
//     });
//   e.preventDefault();
// };
