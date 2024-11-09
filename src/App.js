import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [formInputs, setformInputs] = useState({
    name: "",
    Phone: "",
    Age: "",
    isEmployee: false,
    salary: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLastScreenVisible, setisLastScreenVisible] = useState(false);

  function checkIfThereAreNotEmptyField() {
    return (
      formInputs.name.length > 0 &&
      formInputs.Phone.length > 0 &&
      formInputs.Age.length > 0 &&
      formInputs.isEmployee === true
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkIfThereAreNotEmptyField() && setIsModalVisible(true);
    checkIfThereAreNotEmptyField() && setisLastScreenVisible(true);
    // console.log("Submit");
    // console.log(checkIfThereAreNotEmptyField());
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>Request For a Loan</p>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(e) =>
              setformInputs({ ...formInputs, name: e.target.value })
            }
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={formInputs.Phone}
            onChange={(e) =>
              setformInputs({ ...formInputs, Phone: e.target.value })
            }
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="text"
            value={formInputs.Age}
            onChange={(e) =>
              setformInputs({ ...formInputs, Age: e.target.value })
            }
          />
        </div>

        <div>
          <label>Are You An Employee:</label>
          <input
            type="checkBox"
            checked={formInputs.isEmployee}
            onChange={(e) =>
              setformInputs({
                ...formInputs,
                isEmployee: !formInputs.isEmployee,
              })
            }
          />
        </div>

        <label>Salary:</label>
        <select
          value={formInputs.salary}
          onChange={(e) =>
            setformInputs({ ...formInputs, salary: e.target.value })
          }
        >
          <option>less than 500$</option>
          <option>equal 500$</option>
          <option>more than 500$</option>
        </select>

        <input
          type="submit"
          disabled={!checkIfThereAreNotEmptyField()}
          style={{
            backgroundColor: checkIfThereAreNotEmptyField() ? "yellow" : "gray",
          }}
        />
      </form>

      {isModalVisible && (
        <Modal
          isLastScreenVisible={isLastScreenVisible}
          setisLastScreenVisible={setisLastScreenVisible}
        />
      )}
      {isLastScreenVisible &&
        (formInputs.Phone.length < 10 || formInputs.Phone.length > 10 ? (
          <FinalScreen title="Phone Number should be 10 numbers" />
        ) : formInputs.Age < 18 || formInputs.Age > 100 ? (
          <FinalScreen title="Age should be between 18 - 100 " />
        ) : (
          <FinalScreen title="All is right" />
        ))}
    </div>
  );
}

export default App;
