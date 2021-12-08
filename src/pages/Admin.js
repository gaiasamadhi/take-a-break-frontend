import axios from "axios";
import { useState, useEffect } from "react";
export default function Admin() {
  const [benefit, setBenefit] = useState([]);
  const [goal, setGoal] = useState([]);
  const benefitAPI = "https://recharge-backend1.herokuapp.com/benefits";
  const goalAPI = "https://recharge-backend1.herokuapp.com/symptoms";
  const activityAPI = "https://recharge-backend1.herokuapp.com/activities";
  const initialActivity = {
    name: "",
    duration: 0,
    source: "",
    preference: [],
    description: "",
    benefits: [],
    symptoms: [],
  }
  const [activity, setActivity] = useState(initialActivity)

  const handleActivity = (e) => {
    const {name, value} = e.target;
    const newActivity = {
     ...activity,
     [name]: value 
    }
    setActivity(newActivity)
  };
  const handleDuration = (e) => {
    const {name, value} = e.target;
    const newActivity = {
     ...activity,
     [name]: Number(value)
    }
    setActivity(newActivity)
  };
  const handleActivityPreference = (e) => {
    const {name, value} = e.target
    const newPreference = {
      ...activity,
      [name]: [...activity.preference, value],
    };
    if(e.target.checked){setActivity(newPreference)}
    // else if(!e.target.checked)(setActivity(newPreference.preference.splice(newPreference.preference.indexOf(e.target.value), 1)))
  }
  const handleActivityBenefits = (e) => {
    const {name, value} = e.target
    const newPreference = {
      ...activity,
      [name]: [...activity.benefits, value],
    };

    setActivity(newPreference);
  }
  const handleActivityGoals = (e) => {
    const {name, value} = e.target
    const newPreference = {
      ...activity,
      [name]: [...activity.symptoms, value],
    };

    setActivity(newPreference);
  }
  function submit(e){
    e.preventDefault();
    axios
      .post(activityAPI, {
        name: activity.name,
        duration: activity.duration,
        source: activity.source,
        preference: activity.preference,
        description: activity.description,
        benefits: activity.benefits,
        symptoms: activity.symptoms,
      })
      .then((res) =>{
        console.log(res.data)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
      });
      setActivity({
        name: "",
        duration: 0,
        source: "",
        preference: [],
        description: "",
        benefits: [],
        symptoms: []
      })
  }
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
  console.log(activity)
  return (
    <div className="adminPage">
      <form>
      <input type="text" onChange={handleActivity} name="name" placeholder="Activity name" />
      <input type="number" onChange={handleDuration} name="duration" placeholder="Duration" min="0" max="30" />
      <input type="text" onChange={handleActivity} name="source" placeholder="Source (youtube link)" />
      <div className="preferences">
        <h3>Choose preferences:</h3>
        <input
          type="checkbox"
          id="physical"
          name="preference"
          value="Physical"
          onChange={handleActivityPreference}
        />
        <label for="physical">Physical</label>
        <input type="checkbox" onChange={handleActivityPreference} id="mental" name="preference" value="Mental" />
        <label for="mental">Mental</label>
        <div>
          <input type="checkbox" onChange={handleActivityPreference} id="mindful" name="preference" value="Mindful" />
          <label for="mindful">Mindful</label>
          <input
            type="checkbox"
            id="mindless"
            name="preference"
            value="Mindless"
            onChange={handleActivityPreference}
          />
          <label for="mindless">Mindless</label>
        </div>
        <input type="checkbox" onChange={handleActivityPreference} id="indoor" name="preference" value="Indoor" />
        <label for="indoor">Indoor</label>
        <input type="checkbox" onChange={handleActivityPreference} id="outdoor" name="preference" value="Outdoor" />
        <label for="outdoor">Outdoor</label>
        <div>
          <input type="checkbox" onChange={handleActivityPreference} id="guided" name="preference" value="Guided" />
          <label for="guided">Guided</label>
          <input type="checkbox" onChange={handleActivityPreference} id="self-led" name="preference" value="Self led" />
          <label for="self-led">Self led</label>
        </div>
        <input type="checkbox" onChange={handleActivityPreference} id="hype-up" name="preference" value="Hype up" />
        <label for="hype-up">Hype up</label>
        <input type="checkbox" onChange={handleActivityPreference} id="calm-down" name="preference" value="Calm down" />
        <label for="calm-down">Calm down</label>
      </div>
      <h3>Please provide a description:</h3>
      <textarea name="description" onChange={handleActivity} col="30" row="5" />
        <h3>Choose activity benefits:</h3>
      <div className="adminBenefits">
        {benefit.map((b) => (
          <div>
            <input type="checkbox" onChange={handleActivityBenefits} id={b._id} name="benefits" value={b._id} />
            <label for={b._id}>{b.name}</label>
          </div>
        ))}
      </div>
        <h3>Choose goals:</h3>
      <div>
      {goal.map((b) => (
          <div>
            <input type="checkbox" onChange={handleActivityGoals} id={b._id} name="symptoms" value={b._id} />
            <label for={b._id}>{b.name}</label>
          </div>
        ))}
      </div>
      <input type="submit" onClick={submit} value="submit" className="primary-button"/>
      </form>
    </div>
  );
}
