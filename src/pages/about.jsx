// About.jsx
import '../css/about.css';
import profile from '../assets/profile.jpg'; // adjust path if your structure is different

export default function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <img
        src={profile}
        alt="Photo of [Brenae]"
        className="about-photo"
      />
      <p className="about-description">
        I started my career in roles centered on people and care—from customer service to health care—...
      </p>
    </div>
  );
}