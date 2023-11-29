// import firebaseConfig from "../config.js";
// import { useContext } from "react";
// import { AuthContext } from "../Auth.js";
// import { Navigate } from "react-router-dom";
// const User = () => {
//     const { currentUser } = useContext(AuthContext);
//     if (!currentUser) {
//         return <Navigate to="/" />;
//       }
//     return (
//       <div>
//         User Page
//         <button
//             className="btn1"
//             onClick={() => firebaseConfig.auth().signOut()}
//           >
//             Log out
//           </button>
//       </div>
//     );
//   };
  
//   export default User;

import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AuthContext } from "../Auth";
import firebase from 'firebase/compat/app';
import 'firebase/database';
import firebaseConfig from "../config";
import { Toaster, toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
const Qupload = () => {
const { currentUser } = useContext(AuthContext);
  const [Alldata, setAlldata] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
    const [formData, setFormData] = useState({
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",  
        userid: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const setData = async (event) => {
        event.preventDefault();
        try {
          const doc = collection(db, "NewFormData");
          const docRef = await addDoc(doc, {
            a1: formData.a1,
            a2: formData.a2,
            a3: formData.a3,
            a4: formData.a4,
            a5: formData.a5,
            userid: formData.userid,
            
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log("sucessfully submitted");
        toast.success("Submitted successfully!");
        window.location.reload();
      };

      useEffect(() => {
        const db = getFirestore();
        const tempArray = [];
        if (currentUser) {
          const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "NewFormData"));
            querySnapshot.forEach((doc) => {
              // console.log("Hi");
              // console.log(`${doc.id} =>`, doc.data());
              // setDataElements(doc.data());
              // if(doc.newformId === "1")
              tempArray.push(doc.data());
            });
            setLoading(false);
          };
          fetchData();
          setAlldata(tempArray);
        }
        // console.log(currentUser);
        // console.log(AuthContext);
      }, [currentUser]);
      console.log(Alldata);
      
    if (!currentUser) {
        return <Navigate to="/" />;
      }
      let q1 = "q1";
      let q2 = "q2";
      let q3 = "q3";
      let q4 = "q4";
      let q5 = "q5";

      Alldata.forEach(element => {
        if(element.newformId === "1"){
          q1 = element.q1;
          q2 = element.q2;
          q3 = element.q3;
          q4 = element.q4;
          q5 = element.q5;
        }
      });
    return (
        <div>
          <Toaster ToastOptions={{ duration: 4000 }} />
            <h1>Feedback Form</h1>
            <div className="row addDataBottom">
                    <div className="col-md-auto addDataLeft">
                      <form className="row-md-auto AllDataForm">
                      <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="name"
                          >
                            UserID:
                          </label>
                          <input
                            type="text"
                            id="userid"
                            name="userid"
                            className="col-md-auto DataInput"
                            value={formData.userid}
                            onChange={handleChange}
                            placeholder="Enter UserId"
                          />
                        </div>
                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="name"
                          >
                            {q1}
                          </label>
                          <input
                            type="text"
                            id="a1"
                            name="a1"
                            className="col-md-auto DataInput"
                            value={formData.a1}
                            onChange={handleChange}
                            placeholder="Enter Answer1"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="age"
                          >
                            {q2}
                          </label>
                          <input
                            type="text"
                            id="a2"
                            name="a2"
                            className="col-md-auto DataInput"
                            value={formData.a2}
                            onChange={handleChange}
                            placeholder="Enter Answer2"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="state"
                          >
                           {q3}
                          </label>
                          <input
                            type="text"
                            id="a3"
                            name="a3"
                            className="col-md-auto DataInput"
                            value={formData.a3}
                            onChange={handleChange}
                            placeholder="Enter Answer3"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="state"
                          >
                           {q4}
                          </label>
                          <input
                            type="text"
                            id="a4"
                            name="a4"
                            className="col-md-auto DataInput"
                            value={formData.a4}
                            onChange={handleChange}
                            placeholder="Enter Answer4"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="degree"
                          >
                            {q5}
                          </label>
                          <input
                            type="text"
                            id="a5"
                            name="a5"
                            className="col-md-auto DataInput"
                            value={formData.a5}
                            onChange={handleChange}
                            placeholder="Enter Answer5"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col addDataRight">
                      <button className="BadaButton" onClick={setData}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
            className="but3"
            onClick={() => firebaseConfig.auth().signOut()}
          >
            Log out
          </button>
        </div>
    )
}

export default Qupload;
  
