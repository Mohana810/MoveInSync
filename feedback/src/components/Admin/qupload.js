
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
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",  
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const setData = async (event) => {
        event.preventDefault();
        try {
          const doc = collection(db, "NewFormData");
          const docRef = await addDoc(doc, {
            q1: formData.q1,
            q2: formData.q2,
            q3: formData.q3,
            q4: formData.q4,
            q5: formData.q5,
            newformId: "1"
            
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        toast.success("Submitted successfully!");
        console.log("sucessfully submitted");
        window.location.reload();
      };

      useEffect(() => {
        const db = getFirestore();
        const tempArray = [];
        if (currentUser) {
          const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "AllFormData"));
            querySnapshot.forEach((doc) => {
              // console.log("Hi");
              // console.log(`${doc.id} =>`, doc.data());
              // setDataElements(doc.data());
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
      if(!currentUser.email.endsWith('@moveinsync.com')){
        return <Navigate to="/" />;
      }
    return (
        <div>
          <Toaster ToastOptions={{ duration: 4000 }} />
            <h1>Customize the form</h1>
            <div className="row addDataBottom">
                    <div className="col-md-auto addDataLeft">
                      <form className="row-md-auto AllDataForm">
                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="name"
                          >
                            Question1
                          </label>
                          <input
                            type="text"
                            id="q1"
                            name="q1"
                            className="col-md-auto DataInput"
                            value={formData.q1}
                            onChange={handleChange}
                            placeholder="Enter Question1"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="age"
                          >
                            Question2
                          </label>
                          <input
                            type="text"
                            id="q2"
                            name="q2"
                            className="col-md-auto DataInput"
                            value={formData.q2}
                            onChange={handleChange}
                            placeholder="Enter Question2"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="state"
                          >
                           Question3
                          </label>
                          <input
                            type="text"
                            id="q3"
                            name="q3"
                            className="col-md-auto DataInput"
                            value={formData.q3}
                            onChange={handleChange}
                            placeholder="Enter Question3"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="state"
                          >
                           Question4
                          </label>
                          <input
                            type="text"
                            id="q4"
                            name="q4"
                            className="col-md-auto DataInput"
                            value={formData.q4}
                            onChange={handleChange}
                            placeholder="Enter Question4"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="degree"
                          >
                            Question5
                          </label>
                          <input
                            type="text"
                            id="q5"
                            name="q5"
                            className="col-md-auto DataInput"
                            value={formData.q5}
                            onChange={handleChange}
                            placeholder="Enter Question5"
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
        </div>
    )
}

export default Qupload;