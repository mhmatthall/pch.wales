// pch.wales form components
import style from "./forms.module.scss";

export function S02Form() {
  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Get form data
    const data = new FormData(event.target);

    // Convert to JSON
    const form = {
      name: data.get("name"),
      email: data.get("email"),
      consent: data.get("consent"),
    };

    // Send form data to API
    const response = await fetch("/api/forms/s02", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // User feedback
    if (response.ok) {
      alert("Thank you so much! I'll be in touch soon.");
    } else {
      alert("Something went wrong on my end. Please try again!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.formItem}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={style.formItem}>
        <label htmlFor="name">Your email address</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={style.formItemAdjacent}>
        <label htmlFor="consent">Do you agree to provide the above details for the purposes of this study?</label>
        <input type="checkbox" id="consent" name="consent" required />
      </div>
      <div className={style.formItem}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};