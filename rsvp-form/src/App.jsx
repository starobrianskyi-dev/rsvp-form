import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [bringingOthers, setBringingOthers] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log(submitted);
  }

  return (
    <div className="form-container">
      <h2>Event RSVP Form</h2>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Number of Attendees:
            <input
              type="number"
              name="attendees"
              min="1"
              placeholder="Number of Attendees"
              required={true}
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Dietary Preferences:
            <input
              type="text"
              name="dietaryPreferences"
              placeholder="Dietary Preferences (Optional)"
              value={dietaryPreferences}
              onChange={(e) => setDietaryPreferences(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Bringing additional guests?
            <input
              type="checkbox"
              name="bringingOthers"
              checked={bringingOthers}
              onChange={(e) => setBringingOthers(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
      {submitted && (
        <div className="submitted-message">
          <h3>RSVP Submitted!</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Number of Attendees:</strong> {attendees}
          </p>
          <p>
            <strong>Dietary Preferences:</strong> {dietaryPreferences || "None"}
          </p>
          <p>
            <strong>Bringing Others:</strong> {bringingOthers ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
