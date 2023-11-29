import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

//   const app = initializeApp(firebaseConfig);


const DatasetUpload = () => {
  const db = getFirestore();
  // const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const userId = "AllFormData";
  const data = {
    'emp1': [
      '9@8765',
      'How would you rate the value for money of the trip?',
      'Very Good',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Excellent',
      'How would you rate the overall experience of your trip?',
      '9/10',
      'Rating of the driver?',
      '9/10',
    ],
    'emp2': [
      '8@7654',
      'How would you rate the value for money of the trip?',
      'Good',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Good',
      'How would you rate the overall experience of your trip?',
      '8/10',
      'Rating of the driver?',
      '8/10',
    ],
    'emp3': [
      '7@6543',
      'How would you rate the value for money of the trip?',
      'Average',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Average',
      'How would you rate the overall experience of your trip?',
      '7/10',
      'Rating of the driver?',
      '7/10',
    ],
    'emp4': [
      '6@5432',
      'How would you rate the value for money of the trip?',
      'Fair',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Fair',
      'How would you rate the overall experience of your trip?',
      '6/10',
      'Rating of the driver?',
      '6/10',
    ],
    'emp5': [
      '5@4321',
      'How would you rate the value for money of the trip?',
      'Poor',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Poor',
      'How would you rate the overall experience of your trip?',
      '5/10',
      'Rating of the driver?',
      '5/10',
    ],
    'emp6': [
      '9@8765',
      'How would you rate the value for money of the trip?',
      'Very Good',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Excellent',
      'How would you rate the overall experience of your trip?',
      '9/10',
      'Rating of the driver?',
      '9/10',
    ],
    'emp7': [
      '8@7654',
      'How would you rate the value for money of the trip?',
      'Good',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Good',
      'How would you rate the overall experience of your trip?',
      '8/10',
      'Rating of the driver?',
      '8/10',
    ],
    'emp8': [
      '7@6543',
      'How would you rate the value for money of the trip?',
      'Average',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Average',
      'How would you rate the overall experience of your trip?',
      '7/10',
      'Rating of the driver?',
      '7/10',
    ],
    'emp9': [
      '6@5432',
      'How would you rate the value for money of the trip?',
      'Fair',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Fair',
      'How would you rate the overall experience of your trip?',
      '6/10',
      'Rating of the driver?',
      '6/10',
    ],
    'emp10': [
      '5@4321',
      'How would you rate the value for money of the trip?',
      'Poor',
      'Did you feel safe and secure during the trip?',
      'Yes',
      'Did the destination live up to your anticipations?',
      'Poor',
      'How would you rate the overall experience of your trip?',
      '5/10',
      'Rating of the driver?',
      '5/10',
    ],
  };
  
  
  
  

  const setData = async () => {
    try {
      let count = 1;
      for (let i of Object.values(data)) {
        const docRef = await addDoc(collection(db, userId), {
          userid: i[0],
          formid: "2",
          q1: i[1],
          a1: i[2],
          q2: i[3],
          a2: i[4],
          q3: i[5],
          a3: i[6],
          q4: i[7],
          a4: i[8],
          q5: i[9],
          a5: i[10]
        });
        count++;
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("sucessfully submitted");
  };
  return <button onClick={setData}>Submit</button>;
};

export default DatasetUpload;
