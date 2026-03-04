export default function ContactSidebar() {
  return (
    <div className="p5-contact-sidebar">
      <div className="p5-info-card">
        <div className="p5-ic">📧</div>
        <span className="p5-label">Email</span>
        <p className="p5-value">hello@p5marketing.com</p>
      </div>

      <div className="p5-info-card">
        <div className="p5-ic">📱</div>
        <span className="p5-label">Phone</span>
        <p className="p5-value">+1 (555) 123-4567</p>
      </div>

      <div className="p5-info-card">
        <div className="p5-ic">🕐</div>
        <span className="p5-label">Business Hours</span>
        <div className="p5-hours-list">
          <div className="p5-hours-row">
            <span className="p5-day">Mon-Fri</span>
            <span className="p5-time">9am - 6pm EST</span>
          </div>
          <div className="p5-hours-row">
            <span className="p5-day">Sat-Sun</span>
            <span className="p5-time">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
