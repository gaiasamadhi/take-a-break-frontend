import axios from "axios";
import { useState, useEffect } from "react";
export default function Admin() {
  const [benefit, setBenefit] = useState([]);
  const [goal, setGoal] = useState([]);
  const benefitAPI = "https://recharge-backend1.herokuapp.com/benefits";
  const goalAPI = "https://recharge-backend1.herokuapp.com/symptoms";

  const handlePreference = (e) => {
    console.log(e.target.value);
  };
  useEffect(async () => {
    axios.get(benefitAPI).then(
      (response) => {
        setBenefit(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
    axios.get(goalAPI).then(
      (response) => {
        setGoal(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  console.log(benefit);
  console.log(goal);
  return (
    <div className="adminPage">
      <form>
      <input type="text" name="name" placeholder="Activity name" />
      <input type="number" placeholder="Duration" min="0" max="30" />
      <input type="text" name="source" placeholder="Source (youtube link)" />
      <div className="preferences">
        <h3>Choose preferences:</h3>
        <input
          type="radio"
          id="physical"
          name="physicalEffort"
          value="Physical"
        />
        <label for="physical">Physical</label>
        <input type="radio" id="mental" name="physicalEffort" value="Mental" />
        <label for="mental">Mental</label>
        <div>
          <input type="radio" id="mindful" name="brainEffort" value="Mindful" />
          <label for="mindful">Mindful</label>
          <input
            type="radio"
            id="mindless"
            name="brainEffort"
            value="Mindless"
          />
          <label for="mindless">Mindless</label>
        </div>
        <input type="radio" id="indoor" name="location" value="Indoor" />
        <label for="indoor">Indoor</label>
        <input type="radio" id="outdoor" name="location" value="Outdoor" />
        <label for="outdoor">Outdoor</label>
        <div>
          <input type="radio" id="guided" name="guidance" value="Guided" />
          <label for="guided">Guided</label>
          <input type="radio" id="self-led" name="guidance" value="Self led" />
          <label for="self-led">Self led</label>
        </div>
        <input type="radio" id="hype-up" name="chillness" value="Hype up" />
        <label for="hype-up">Hype up</label>
        <input type="radio" id="calm-down" name="chillness" value="Calm down" />
        <label for="calm-down">Calm down</label>
      </div>
      <h3>Please provide a description:</h3>
      <textarea col="30" row="5" />
        <h3>Choose activity benefits:</h3>
      <div className="adminBenefits">
        {benefit.map((b) => (
          <div>
            <input type="checkbox" id={b._id} name={b._id} value={b.name} />
            <label for={b._id}>{b.name}</label>
          </div>
        ))}
      </div>
        <h3>Choose goals:</h3>
      <div>
      {goal.map((b) => (
          <div>
            <input type="checkbox" id={b._id} name={b._id} value={b.name} />
            <label for={b._id}>{b.name}</label>
          </div>
        ))}
      </div>
      <input type="submit" value="submit" className="primary-button"/>
      </form>
    </div>
  );
}
